import React from 'react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Services = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 text-white">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black uppercase mb-6 tracking-tighter">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">SERVICES</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl leading-relaxed font-medium">
              Comprehensive care for your foreign or domestic automobile. From routine maintenance to complex diagnostics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <div className={cn(
                    "flex flex-col gap-12 lg:gap-24",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    
                    {/* Content Side */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center font-black text-brand-cyan text-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                            0{index + 1}
                          </div>
                          <Icon size={40} className="text-brand-blue" strokeWidth={1.5} />
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 text-white">{service.title}</h2>
                        <p className="text-brand-muted text-lg mb-10 leading-relaxed font-medium">{service.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                          <div className="glass-card p-6 rounded-2xl">
                            <h4 className="font-bold uppercase text-xs tracking-widest text-brand-cyan mb-4">Key Benefits</h4>
                            <ul className="space-y-3 text-sm text-brand-text font-medium">
                              {service.benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-brand-blue font-black mt-0.5">•</span> {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="glass-card p-6 rounded-2xl">
                            <h4 className="font-bold uppercase text-xs tracking-widest text-brand-cyan mb-4">Signs for repair</h4>
                            <ul className="space-y-3 text-sm text-brand-text font-medium">
                              {service.signs.map((s, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-500 font-black mt-0.5">!</span> {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link 
                            to="/contact" 
                            className="btn-premium px-8 py-4 text-xs inline-block"
                          >
                            <span className="relative z-10">Request Service</span>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="aspect-[4/3] rounded-3xl overflow-hidden glass p-2 relative group"
                      >
                        <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                        <img 
                          src={[
                              'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200', // Diagnostics
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Disk_brake_dsc03682.jpg/1280px-Disk_brake_dsc03682.jpg', // Brakes
                              'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200', // Alignment
                              'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1200', // Oil
                              'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1200', // Suspension
                              'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200'  // Tires
                            ][index % 6]
                          }
                          alt={service.title}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </motion.div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
