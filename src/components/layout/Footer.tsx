import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../../constants';
import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-4xl font-black italic tracking-tighter text-white">
                Y&S <span className="text-brand-blue text-glow">AUTO</span>
              </span>
            </Link>
            <p className="text-brand-muted leading-relaxed text-sm font-medium">
              Fort Worth's premium choice for expert auto repair and performance tires. Certified technicians, modern diagnostics, and honest service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com/search/top?q=y%26s%20auto%20and%20tires" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:scale-110 transition-all text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:scale-110 transition-all text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-brand-muted hover:text-white uppercase text-xs font-bold tracking-widest transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-8">Service Areas</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-brand-muted">
              <li className="hover:text-white transition-colors cursor-default">Fort Worth, TX</li>
              <li className="hover:text-white transition-colors cursor-default">Arlington</li>
              <li className="hover:text-white transition-colors cursor-default">Benbrook</li>
              <li className="hover:text-white transition-colors cursor-default">Haltom City</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-white/10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-cyan mb-4">Contact Support</h4>
            <p className="text-white text-xs font-medium leading-relaxed mb-6">Need immediate assistance? Our team is standing by.</p>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-xl font-black tracking-tight text-white hover:text-brand-blue transition-colors text-glow">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">
            © {new Date().getFullYear()} Y&S AUTO AND TIRES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
