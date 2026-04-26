import React from 'react';
import { Award, ShieldCheck, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 text-white overflow-hidden">
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-brand-blue/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black uppercase mb-6 tracking-tighter text-white">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">STORY</span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl font-medium leading-relaxed border-l-2 border-brand-blue pl-6">
              "Serving Fort Worth with honesty and precision."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 text-white">
                Built on trust, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">driven by quality.</span>
              </h2>
              
              <div className="space-y-6 text-brand-text text-lg leading-relaxed font-medium">
                <p>
                  Y & S Auto and Tires started with a simple mission: to provide the Fort Worth community with reliable, honest automotive service that won't break the bank.
                </p>
                <p>
                  Our shop is equipped with state-of-the-art diagnostic equipment and we strictly follow OEM (Original Equipment Manufacturer) specifications for all repairs. We believe every customer deserves to understand exactly what their vehicle needs, which is why we provide detailed digital reports and honest recommendations.
                </p>
                <p>
                  Our team of ASE-certified technicians brings dealerships-level expertise to a local, family-owned setting. We treat every vehicle with the highest professional care.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 gap-6">
                <div className="glass-card p-8 rounded-2xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <span className="block text-5xl font-black text-brand-blue mb-3 text-glow">5-STAR</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Google Reputation</span>
                </div>
                <div className="glass-card p-8 rounded-2xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                  <span className="block text-5xl font-black text-brand-cyan mb-3 text-glow">100%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Certified Parts</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2 mt-12"
                >
                  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" alt="Shop" className="object-cover w-full h-full rounded-2xl" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2 mb-12"
                >
                  <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800" alt="Professional Technician" className="object-cover w-full h-full rounded-2xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative border-t border-white/5 bg-brand-black/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {[
              { icon: Award, text: 'ASE Certified' },
              { icon: ShieldCheck, text: 'Factory Approved' },
              { icon: Star, text: 'Top Rated' },
              { icon: Zap, text: 'Fast Service' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-6 text-center group"
                >
                  <div className="w-24 h-24 rounded-full glass flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <Icon size={40} className="text-brand-cyan group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">{item.text}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Shop Gallery Section */}
      <section className="py-24 relative bg-brand-black/50 border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
              Inside Our <span className="text-brand-cyan">Shop</span>
            </h2>
            <p className="text-brand-muted mt-4 text-lg font-medium">A look at our facilities and Fort Worth location.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              '/gallery/img1.jpg',
              '/gallery/img2.jpg',
              '/gallery/img3.jpg',
              '/gallery/img4.jpg',
              'https://images.unsplash.com/photo-1486467562021-f6c906eba9d6?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1625047509168-a70dd52b6bc9?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800'
            ].map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl overflow-hidden glass p-2 group"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay duration-500"></div>
                  <img 
                    src={src} 
                    alt={`Shop Image ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
