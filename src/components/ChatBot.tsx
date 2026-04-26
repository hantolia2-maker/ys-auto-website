import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Bird as Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{ role: string, text: string, options?: string[] }>>([
    { 
      role: 'model', 
      text: "Hi! I'm Sayf from Y&S Auto. How can I help you today?", 
      options: ["What are your hours?", "Where are you located?", "What services do you offer?", "Get a Custom Quote"]
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: option }]);

    setTimeout(() => {
      let response = "";
      let nextOptions: string[] = ["Back to Menu", "I need more help"];

      switch (option) {
        case "What are your hours?":
          response = `We are open:\nMon-Fri: 8:00 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM\nSun: Closed`;
          break;
        case "Where are you located?":
          response = `We are located at 6240 McCart Ave, Fort Worth, TX 76133. Stop by anytime!`;
          break;
        case "What services do you offer?":
          response = `We specialize in:\n• Advanced Diagnostics\n• Brake Service\n• Computerized Alignment\n• Performance Oil Service\n• Tires & Suspension`;
          break;
        case "Get a Custom Quote":
        case "I need more help":
          response = "For custom quotes or complex repairs, it's best to speak with us directly or use our contact form.";
          nextOptions = ["Go to Contact Page", "Back to Menu"];
          break;
        case "Go to Contact Page":
          window.location.href = "/contact";
          return;
        case "Back to Menu":
        default:
          response = "Is there anything else I can help you with?";
          nextOptions = ["What are your hours?", "Where are you located?", "What services do you offer?", "Get a Custom Quote"];
          break;
      }

      setMessages(prev => [...prev, { role: 'model', text: response, options: nextOptions }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] glass rounded-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            <div className="bg-brand-blue/20 backdrop-blur-xl p-4 flex justify-between items-center border-b border-brand-blue/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-blue/30 rounded-full flex items-center justify-center text-brand-cyan">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-white font-black text-xs uppercase tracking-widest text-glow">Sayf @ Y&S</p>
                  <p className="text-brand-cyan text-[10px] uppercase font-bold">Quick Help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow p-4 overflow-y-auto space-y-4 bg-brand-dark/80 backdrop-blur-md min-h-[300px] border-b border-white/5"
            >
              {messages.map((m, i) => (
                <div key={i} className={cn("flex flex-col", m.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-3 text-sm font-medium leading-tight shadow-lg backdrop-blur-md border border-white/5",
                    m.role === 'user' 
                      ? "bg-brand-blue/80 text-white rounded-l-xl rounded-tr-xl" 
                      : "bg-white/10 text-white rounded-r-xl rounded-tl-xl"
                  )}>
                    {m.text.split('\n').map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                  
                  {m.role === 'model' && m.options && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {m.options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-brand-blue/10 border border-brand-blue/50 text-brand-cyan px-3 py-2 rounded-full text-xs font-bold hover:bg-brand-blue/30 hover:border-brand-cyan transition-all shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-brand-dark/90 backdrop-blur-xl italic text-[10px] text-brand-muted text-center font-medium">
              Y&S Auto and Tires - Honest Service, Fair Pricing.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-blue hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all relative group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
