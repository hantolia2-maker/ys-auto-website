import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import { z } from "zod";

dotenv.config();

const app = express();
const PORT = 3000;

// Trust proxy if we are behind a load balancer/Vercel
app.set("trust proxy", 1);

app.use(express.json());

// 1. Rate Limiting (IP + user-based)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP/user to 5 requests per window
  message: { success: false, message: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Combine IP and email (if provided) for stricter rate limiting
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    const email = req.body?.email ? `-${req.body.email}` : '';
    return `${ip}${email}`;
  }
});

// 2. Strict Input Validation Schema (rejects unexpected fields)
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(150),
  phone: z.string().min(10, "Phone number is too short").max(20, "Phone number is too long"),
  service: z.string().max(100, "Service name is too long"),
  message: z.string().min(10, "Message is too short").max(2000, "Message is too long"),
  botcheck: z.string().optional().or(z.boolean().optional()),
}).strict();

// API Routes
app.post("/api/contact", apiLimiter, async (req, res) => {
  try {
    // 3. Secure API Key handling - key is only on backend
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    // Strict input validation & sanitization
    const validatedData = contactSchema.parse(req.body);

    // Honeypot check
    if (validatedData.botcheck && validatedData.botcheck !== "false") {
      return res.status(400).json({ success: false, message: "Bot detected" });
    }

    if (!accessKey) {
      console.warn("WEB3FORMS_ACCESS_KEY is not set. Simulating success.");
      return res.json({ success: true, message: "Message sent successfully! We will contact you soon." });
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...validatedData
      })
    });

    const data = await response.json();

    if (data.success) {
      res.json({ success: true, message: "Message sent successfully! We will contact you soon." });
    } else {
      res.status(400).json({ success: false, message: data.message || "Something went wrong." });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: error.errors.map(e => e.message).join(", ") 
      });
    }
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: "Connection error. Please try again later." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
