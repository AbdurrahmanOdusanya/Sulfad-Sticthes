import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: '#home' },
    { label: 'About', target: '#about' },
    { label: 'Services', target: '#services' },
    { label: 'Gallery', target: '#gallery' },
    { label: 'Testimonials', target: '#testimonials' },
    { label: 'Contact', target: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      // 1. Immediately trigger the smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // 2. Safely close the mobile menu after a tiny delay so that the browser's scroll interaction is not cancelled or interrupted
      if (isOpen) {
        setTimeout(() => {
          setIsOpen(false);
        }, 150);
      }
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-gold/20 py-2.5 shadow-md'
          : 'bg-brand-lightbg/90 backdrop-blur-sm py-4 border-b border-brand-gold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between">
          
          {/* Custom Stylized Logo & Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <Logo size={32} />
            <span className="font-serif text-lg sm:text-xl font-black tracking-wider text-brand-burgundy group-hover:text-brand-gold transition-colors duration-300 whitespace-nowrap">
              SULFAD STITCHES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.target.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={(e) => handleScrollTo(e, item.target)}
                  className={`font-title text-[15px] uppercase tracking-wider transition-all duration-300 relative py-1 font-bold ${
                    isActive
                      ? 'text-brand-burgundy font-extrabold'
                      : 'text-brand-dark-grey/80 hover:text-brand-burgundy'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-burgundy"
                      transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Quick Contact CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-brand-burgundy shrink-0" />
              <div className="flex flex-col text-left">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="text-brand-dark-grey/95 hover:text-brand-burgundy transition-colors duration-300 text-[11px] sm:text-[12px] font-bold leading-tight"
                >
                  {BUSINESS_INFO.phones[0]}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phones[1]}`}
                  className="text-brand-dark-grey/95 hover:text-brand-burgundy transition-colors duration-300 text-[11px] sm:text-[12px] font-bold leading-tight mt-0.5"
                >
                  {BUSINESS_INFO.phones[1]}
                </a>
              </div>
            </div>
            <a
              href={BUSINESS_INFO.primaryWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-burgundy hover:bg-[#400711] text-white font-title text-[10px] uppercase font-bold tracking-widest px-5 py-2.5 rounded-none border border-brand-burgundy shadow-sm transition-all duration-300 flex items-center space-x-1.5 cursor-pointer"
            >
              <ShoppingBag size={12} className="-mt-0.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark-grey hover:text-brand-burgundy transition-colors p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Design) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FFFDF9]/98 backdrop-blur-md border-b border-brand-gold/20 shadow-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 max-w-7xl mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.target.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.target}
                    onClick={(e) => handleScrollTo(e, item.target)}
                    className={`block pl-3 py-2.5 font-title text-base uppercase tracking-widest border-s-2 transition-all duration-300 font-bold ${
                      isActive
                        ? 'text-brand-burgundy border-brand-burgundy bg-brand-burgundy/5 font-extrabold'
                        : 'text-brand-dark-grey/70 border-transparent hover:text-brand-burgundy hover:border-brand-gold/30'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-brand-gold/10 flex flex-col space-y-3 px-3">
                <div className="space-y-2">
                  <span className="block font-title text-[9px] uppercase tracking-wider text-brand-gold font-bold">Call Us Directly</span>
                  <div className="flex flex-col space-y-2 pl-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phones[0]}`}
                      className="flex items-center space-x-2 text-brand-dark-grey text-xs hover:text-brand-burgundy transition-colors font-bold"
                    >
                      <Phone size={13} className="text-brand-burgundy" />
                      <span>{BUSINESS_INFO.phones[0]}</span>
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phones[1]}`}
                      className="flex items-center space-x-2 text-brand-dark-grey text-xs hover:text-brand-burgundy transition-colors font-bold"
                    >
                      <Phone size={13} className="text-brand-burgundy" />
                      <span>{BUSINESS_INFO.phones[1]}</span>
                    </a>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.primaryWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-brand-burgundy text-white font-title text-[10px] uppercase font-bold tracking-widest py-3 border border-brand-burgundy hover:bg-[#400711] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={14} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
