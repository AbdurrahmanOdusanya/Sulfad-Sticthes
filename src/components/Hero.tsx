import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  const handleScrollToGallery = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#gallery');
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-lightbg overflow-hidden pt-24"
    >
      {/* Subtle brand watermark background */}
      <div className="absolute top-24 left-10 text-[100px] md:text-[160px] font-title font-extrabold opacity-[0.03] leading-none select-none pointer-events-none text-brand-burgundy">
        SULFAD
      </div>

      {/* Grid backing visual decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A05915_1px,transparent_1px),linear-gradient(to_bottom,#C5A05915_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative vertical bounds */}
      <div className="absolute left-[3%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent pointer-events-none" />
      <div className="absolute right-[3%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-gold/10 to-transparent pointer-events-none" />

      {/* Soft color orbs for bright glow aesthetics */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-cream/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tagline from flyer */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2 mb-6"
            >
              <div className="h-0.5 w-10 bg-brand-gold" />
              <span className="font-title text-[10px] sm:text-xs tracking-[0.3em] text-brand-burgundy uppercase font-bold">
                Every Outfit is a Statement
              </span>
            </motion.div>

            {/* Main Title (Simple Grammar) */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-brand-burgundy leading-[1.12] mb-6 italic"
            >
              Look Your Best in <br className="hidden sm:inline" />
              <span className="font-bold text-brand-gold not-italic relative inline-block">
                Custom Native Outfits
              </span>
            </motion.h1>

            {/* Simple Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-brand-dark-grey/85 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 font-normal"
            >
              We sew simple, sleek, and high-quality kaftans, senator wears, and royal agbadas that fit you perfectly.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={BUSINESS_INFO.primaryWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-burgundy hover:bg-[#400711] text-white font-title text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={handleScrollToGallery}
                className="w-full sm:w-auto bg-transparent hover:bg-brand-burgundy/5 text-brand-burgundy font-title text-xs uppercase tracking-widest px-8 py-4 rounded-none border border-brand-burgundy/30 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer font-bold"
              >
                <span>View Products</span>
                <ArrowDown size={14} className="animate-bounce" />
              </button>
            </motion.div>

            {/* Clean trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-brand-gold/20 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <p className="font-title text-xl sm:text-2xl text-brand-burgundy font-bold">100%</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-brand-dark-grey/60 mt-1">Custom Fit</p>
              </div>
              <div>
                <p className="font-title text-xl sm:text-2xl text-brand-gold font-bold">Top Quality</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-brand-dark-grey/60 mt-1">Fine Sewing</p>
              </div>
              <div>
                <p className="font-title text-xl sm:text-2xl text-brand-burgundy font-bold">Fast</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-brand-dark-grey/60 mt-1">Safe Delivery</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Visual Lookbook Highlight */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-full max-w-[380px] aspect-[3/4] rounded-none overflow-hidden border border-brand-gold/30 shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 via-transparent to-transparent z-10 pointer-events-none" />

              <img
                src="https://i.postimg.cc/hvNGX09w/download.jpg"
                alt="Men's Premium Custom White Native Outfit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-102 group-hover:scale-100 transition-transform duration-700"
              />

              {/* Product Info Box */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-none bg-white/95 border border-brand-gold/25 z-20 shadow-lg">
                <p className="font-serif text-sm text-brand-burgundy font-bold tracking-wide">
                  Classic White Native Outfit
                </p>
                <p className="font-sans text-[11px] text-brand-dark-grey/80 mt-1 leading-normal font-light">
                  Sewn with perfect necklines and high quality fabric for your comfort.
                </p>
                <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-brand-gold/15">
                  <span className="font-title text-[9px] tracking-wider text-brand-dark-grey/40 font-bold">EVERY STITCH MATTERS</span>
                  <span className="font-title text-[10px] text-brand-gold font-bold">SULFAD STITCHES</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Location coordinates */}
            <div className="hidden sm:block absolute top-[10%] left-[-30px] p-2.5 bg-brand-burgundy text-white border border-brand-gold/30 shadow-md z-20">
              <span className="font-title text-[9px] uppercase tracking-wider block font-bold">Showroom</span>
              <span className="font-sans text-[10px] block opacity-90 font-light">Oke-Ilewo, Abeokuta</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
