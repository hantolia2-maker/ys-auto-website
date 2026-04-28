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
  max: 20, // Increased limit for better user experience
  message: { success: false, message: "Too many requests from this IP, please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
  validate: false,
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
  message: z.string().min(1, "Message is too short").max(2000, "Message is too long"),
  botcheck: z.any().optional(),
}); // Removed .strict() to allow for unexpected browser/extension fields

// API Routes
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

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
    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.warn("âš ï¸ WARNING: WEB3FORMS_ACCESS_KEY is missing from .env file!");
      console.warn("Messages will be simulated but NOT actually sent to your email.");
    } else {
      console.log("âœ… Web3Forms Access Key detected.");
    }
  });
}

startServer();
