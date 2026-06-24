import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, MessageSquare, Instagram, Facebook, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { label: 'Home', target: '#home' },
    { label: 'Our Brand', target: '#about' },
    { label: 'Services', target: '#services' },
    { label: 'Our Works', target: '#gallery' },
    { label: 'Testimonials', target: '#testimonials' },
    { label: 'Contact Us', target: '#contact' },
  ];

  const handleSmoothScrollByRef = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-brand-gold/20 text-brand-dark-grey/85 font-sans text-xs pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative vertical golden accents */}
      <div className="absolute left-[5%] top-0 h-10 w-[1px] bg-gradient-to-b from-brand-gold/40 to-transparent" />
      <div className="absolute right-[5%] top-0 h-10 w-[1px] bg-gradient-to-b from-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-brand-gold/10">
          
          {/* Column 1: Brand Logo & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <img
                id="footer-logo-img"
                src="https://i.postimg.cc/hjpDjwCG/logo.png"
                alt="Sulfad Stitches Logo"
                referrerPolicy="no-referrer"
                className="nav-logo-img transition-all duration-300 transform hover:scale-105"
              />
              <span className="font-serif text-2xl font-black tracking-wider text-brand-burgundy group-hover:text-brand-gold transition-colors duration-300 whitespace-nowrap">
                SULFAD STITCHES
              </span>
            </a>
            
            <p className="font-sans text-xs text-brand-dark-grey/75 font-normal leading-relaxed max-w-sm pt-2">
              Sulfad Stitches is a premier men&apos;s traditional fashion house in Abeokuta. We craft high-quality custom kaftans, senator outfits, traditional agbadas, and wedding wear for grooms and gentlemen who value pristine quality.
            </p>

            <div className="flex items-center space-x-2 text-[#C5A059] font-title text-[9px] uppercase tracking-wider font-bold pt-2">
              <Award size={14} className="text-brand-burgundy" />
              <span>Timeless Traditional Artistry</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-title text-[10px] uppercase tracking-wider text-brand-burgundy font-bold pb-2 border-b border-brand-gold/10">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.target}
                  onClick={(e) => handleSmoothScrollByRef(e, link.target)}
                  className="font-sans text-brand-dark-grey hover:text-brand-burgundy transition-colors duration-200 py-1 font-semibold text-xs block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Physical Coordinates */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-title text-[10px] uppercase tracking-wider text-brand-burgundy font-bold pb-2 border-b border-brand-gold/10">
              Our Showroom
            </h4>
            <ul className="space-y-3 font-sans font-normal text-xs text-brand-dark-grey/85">
              <li className="flex items-start space-x-2">
                <MapPin size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                <span>Opposite Ace Supermarket, Olusegun Osoba Road, Oke-Ilewo, Abeokuta, Ogun State, Nigeria</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col text-left">
                  <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-brand-burgundy transition-colors font-bold block">{BUSINESS_INFO.phones[0]}</a>
                  <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="hover:text-brand-burgundy transition-colors font-bold block mt-1">{BUSINESS_INFO.phones[1]}</a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-brand-burgundy shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-burgundy transition-colors font-bold break-all">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials & Quick Chat links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-title text-[10px] uppercase tracking-wider text-brand-burgundy font-bold pb-2 border-b border-brand-gold/10">
              Connect With Us
            </h4>
            
            {/* Social Icons with actual links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/sulfadsulaimon?igsh=MTFnaHgycWYwYXoxdg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 bg-white border border-brand-gold/25 hover:border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.facebook.com/sulfad.sulaimon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-white border border-brand-gold/25 hover:border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <Facebook size={14} />
              </a>
              <a
                href={`https://wa.me/234${BUSINESS_INFO.whatsapps[0].substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-8 h-8 bg-white border border-brand-gold/25 hover:border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] uppercase tracking-wider text-brand-dark-grey/60 font-bold">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>&copy; 2026 Sulfad Stitches. All Rights Reserved.</span>
            <span className="hidden sm:inline text-brand-gold/55">|</span>
            <span>
              Made by{' '}
              <a 
                href="https://github.com/AbdurrahmanOdusanya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-burgundy text-brand-burgundy/80 transition-colors underline underline-offset-2 decoration-brand-gold/40 hover:decoration-brand-burgundy font-extrabold"
              >
                Yerima
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span>Premium Traditional Wear</span>
            
            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll Back to Top"
              className="p-2.5 bg-white border border-brand-gold/30 hover:border-brand-burgundy hover:text-white transition-all text-brand-burgundy cursor-pointer shadow-sm"
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
