import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");

    const formData = new FormData(event.currentTarget);
    const dataObj: Record<string, any> = {};
    formData.forEach((value, key) => {
      dataObj[key] = value.toString();
    });

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        setResult("Error: Web3Forms Access Key is missing.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...dataObj
        })
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setResult("Message sent successfully! We will contact you soon.");
      } else {
        console.error("Form error:", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Connection error:", error);
      setResult("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-24 text-white">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-9xl font-black uppercase mb-6 tracking-tighter">
              CONTACT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan text-glow">US</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl leading-relaxed font-medium">
              Visit our shop in Fort Worth or reach out using the form below. We respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="glass-card p-10 rounded-3xl space-y-10">
                <div>
                  <h3 className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] mb-4">Location</h3>
                  <p className="text-2xl font-black uppercase tracking-tighter leading-none text-white">{BUSINESS_INFO.location}</p>
                  <p className="text-brand-muted text-sm mt-3">{BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] mb-4">Phone</h3>
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-3xl font-black uppercase tracking-tighter leading-none text-brand-blue text-glow hover:text-white transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-brand-muted text-sm mt-3 font-medium">Fast response guaranteed</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.2em] mb-4">Hours</h3>
                  <div className="space-y-3 text-brand-muted text-sm font-medium">
                    {BUSINESS_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="uppercase tracking-widest text-xs font-bold">{h.day}</span>
                        <span className="text-white bg-white/5 px-3 py-1 rounded-full text-xs">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 border border-brand-cyan/30 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-white text-glow relative z-10">EMERGENCY?</h4>
                <p className="text-sm text-brand-text leading-relaxed mb-6 relative z-10 font-medium">
                  Need roadside assistance or a quick flat fix? Call our shop line immediately.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href={`tel:${BUSINESS_INFO.phoneRaw}`} 
                  className="inline-block btn-premium px-6 py-3 text-xs relative z-10"
                >
                  <span className="relative z-10">Call Support</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="glass-card p-10 lg:p-16 rounded-3xl border border-white/10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">MESSAGE SENT!</h2>
                    <p className="text-brand-muted font-medium mb-10">We've received your request and our team will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-cyan font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-white">SEND A <span className="text-brand-blue">MESSAGE</span></h2>
                    <form onSubmit={onSubmit} className="space-y-8">
                      {/* Honeypot Spam Protection - hidden from users, but bots will fill it */}
                      <div className="hidden" aria-hidden="true">
                        <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3 pl-4">Full Name</label>
                          <input type="text" name="name" required className="w-full px-6 py-4 bg-brand-dark/50 border border-white/10 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white font-medium" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3 pl-4">Email Address</label>
                          <input type="email" name="email" required className="w-full px-6 py-4 bg-brand-dark/50 border border-white/10 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white font-medium" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3 pl-4">Phone</label>
                          <input type="tel" name="phone" required className="w-full px-6 py-4 bg-brand-dark/50 border border-white/10 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white font-medium" placeholder="(555) 123-4567" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3 pl-4">Service Needed</label>
                          <select name="service" required className="w-full px-6 py-4 bg-brand-dark/50 border border-white/10 rounded-full focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white font-medium appearance-none">
                            <option className="bg-brand-dark text-white">General Auto Repair</option>
                            <option className="bg-brand-dark text-white">Advanced Diagnostics</option>
                            <option className="bg-brand-dark text-white">Brake Service</option>
                            <option className="bg-brand-dark text-white">Oil Change</option>
                            <option className="bg-brand-dark text-white">Alignment</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-3 pl-4">Message</label>
                        <textarea name="message" required className="w-full px-6 py-5 bg-brand-dark/50 border border-white/10 rounded-3xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white min-h-[160px] font-medium resize-none" placeholder="Tell us what's wrong with your vehicle..."></textarea>
                      </div>
                      <div>
                        <motion.button 
                          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full btn-premium py-5 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          <span className="relative z-10">{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                        </motion.button>
                      </div>
                      {result && !result.includes('successfully') && (
                        <p className="text-center text-sm font-bold text-red-400">
                          {result}
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[600px] w-full relative group overflow-hidden mt-12">
        <iframe 
          title="Google Maps Location"
          src="https://www.google.com/maps?q=Y%26S+Auto+and+Tires,+1900+8th+Ave+Suite+200,+Fort+Worth,+TX+76110&output=embed" 
          className="w-full h-full border-0 absolute inset-0 grayscale contrast-125 opacity-60 group-hover:grayscale-[0.2] group-hover:opacity-100 transition-all duration-1000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};
