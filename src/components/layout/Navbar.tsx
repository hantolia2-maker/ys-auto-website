import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { BUSINESS_INFO } from '../../constants';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-brand-blue/10 backdrop-blur-md border-b border-brand-blue/20 text-brand-cyan py-2 px-8 z-50 text-center lg:text-left relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Same-Day Service Available • Certified Technicians • Fort Worth, TX
          </p>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-white hover:text-brand-cyan transition-colors mt-2 md:mt-0 font-black">
            CALL NOW: {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      {/* Floating Navbar */}
      <header className="fixed top-12 left-0 right-0 z-50 px-4 pt-4 pointer-events-none flex justify-center">
        <div className={cn(
          "pointer-events-auto transition-all duration-500 flex justify-between items-center",
          isScrolled 
            ? "glass rounded-full py-3 px-8 w-full max-w-5xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]" 
            : "w-full max-w-7xl py-6 px-4 bg-transparent"
        )}>
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black italic tracking-tighter text-white group-hover:text-glow transition-all">
              Y&S <span className="text-brand-blue">AUTO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-all",
                  location.pathname === link.path 
                    ? "text-brand-blue text-glow" 
                    : "text-brand-muted hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="btn-premium px-6 py-2 text-[10px] inline-block"
              >
                <span className="relative z-10">Get Quote</span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-brand-blue transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-4xl font-black uppercase tracking-tighter transition-colors",
                    location.pathname === link.path ? "text-brand-blue text-glow" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <motion.a 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="mt-8 btn-premium px-8 py-4 text-sm"
              >
                <span className="relative z-10">Call {BUSINESS_INFO.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
