import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BUSINESS_INFO, REVIEWS, SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Star as StarSolid, Bird as Sparkles } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Auto Repair" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
          {/* Accent Glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/20 blur-[150px] rounded-full pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex justify-start"
            >
              <img 
                src="/logo.png" 
                alt="Y&S Auto and Tires" 
                className="h-32 md:h-48 w-auto mix-blend-screen"
                style={{ clipPath: 'inset(8%)' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
                PRECISION <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan text-glow">AUTO REPAIR</span><br/>
                YOU CAN TRUST
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-brand-text text-lg md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed"
            >
              Honest service in Fort Worth. From advanced engine diagnostics to complete brake service, we get you back on the road safely with premium care.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="btn-premium px-10 py-5 text-sm inline-flex items-center gap-2 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get A Free Quote <LucideIcons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className="container mx-auto px-4 mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Certified Mechanics', desc: 'ASE-certified professionals providing expert automotive care.', icon: 'Award' },
              { num: '02', title: 'Real Customer Trust', desc: '5-Star Rated shop. We value honest relationships.', icon: 'Star' },
              { num: '03', title: 'Premium Brands', desc: 'Authorized dealer for major tire and part brands.', icon: 'ShieldCheck' }
            ].map((item, idx) => {
              const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ElementType;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-2xl flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-cyan">
                      <Icon size={24} />
                    </div>
                    <span className="text-4xl font-black text-white/5">{item.num}</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">What We Do</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white">
                Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">Services</span>
              </h3>
            </div>
            <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-brand-muted hover:text-white transition-colors border-b border-brand-blue/30 hover:border-brand-blue pb-1">
              View All Services
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => {
              const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
              return (
                <Link 
                  key={service.id}
                  to={`/services?id=${idx}`}
                  className="group relative glass-card p-8 rounded-3xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-[50px] group-hover:bg-brand-blue/20 transition-colors"></div>
                  <Icon className="text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10" size={40} />
                  <h4 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 relative z-10 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-blue relative z-10 group-hover:text-glow transition-all">
                    Explore <LucideIcons.ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-32 relative border-y border-white/5 bg-brand-black/50">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <StarSolid key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-white font-bold uppercase text-xs tracking-[0.2em] ml-2">5-Star Business</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              Trusted By <span className="text-brand-blue">Fort Worth</span>
            </h2>
            <p className="text-brand-muted text-lg">Don't just take our word for it. Hear what our community has to say about our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl flex flex-col relative"
              >
                <div className="absolute top-8 right-8 text-white/5 font-serif text-6xl leading-none">"</div>
                <div className="flex gap-1 text-yellow-400/80 mb-6 relative z-10">
                  {Array.from({ length: 5 }).map((_, i) => <StarSolid key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-brand-text text-base leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/10 relative z-10">
                  <div>
                    <h5 className="font-bold text-white text-sm">{review.name}</h5>
                    <p className="text-[10px] uppercase tracking-widest text-brand-muted mt-1">{review.date}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Sparkles size={14} className="text-brand-cyan" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Map Integration */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h3 className="text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-4">Location</h3>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-6">Visit Our <br/><span className="text-brand-cyan">Shop Today</span></h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                Conveniently located in Fort Worth. Stop by for an honest assessment and premium auto care.
              </p>
              
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">Address</p>
                  <p className="text-white font-medium">{BUSINESS_INFO.location}<br/>{BUSINESS_INFO.city}, {BUSINESS_INFO.state} {BUSINESS_INFO.zip}</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">Hours</p>
                  <p className="text-white font-medium">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 w-full">
              <div className="h-[500px] w-full rounded-3xl overflow-hidden glass p-2 relative group">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <iframe 
                    title="Homepage Google Map"
                    src="https://www.google.com/maps?q=Y%26S+Auto+and+Tires,+1900+8th+Ave+Suite+200,+Fort+Worth,+TX+76110&output=embed" 
                    className="w-full h-full border-0 absolute inset-0 grayscale contrast-110 opacity-70 group-hover:grayscale-[0.2] group-hover:opacity-100 transition-all duration-700"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Final Strip */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-brand-cyan mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">Ready to hit the road safely?</h2>
            <p className="text-white/80 text-lg font-medium">Experience the premium difference in auto repair.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors border border-white/10 text-center shadow-xl"
            >
              Call Now: {BUSINESS_INFO.phone}
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="btn-premium px-10 py-5 text-sm block text-center"
              >
                <span className="relative z-10">Book Online</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
