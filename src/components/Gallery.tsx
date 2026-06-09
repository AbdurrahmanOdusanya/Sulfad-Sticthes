import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppUrl } from '../data';
import { GalleryItem } from '../types';

type CategoryFilter = 'all' | 'kaftans' | 'senator-wears' | 'agbada' | 'wedding' | 'corporate';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const filterTabs: { label: string; value: CategoryFilter }[] = [
    { label: 'All Styles', value: 'all' },
    { label: 'Kaftans', value: 'kaftans' },
    { label: 'Senator Wears', value: 'senator-wears' },
    { label: 'Agbada', value: 'agbada' },
    { label: 'Wedding Styles', value: 'wedding' },
    { label: 'Corporate Styles', value: 'corporate' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="relative bg-[#FAF8F5] border-t border-b border-brand-gold/10 py-16 sm:py-20 overflow-hidden"
    >
      {/* Subtle details */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-brand-gold bg-[radial-gradient(#C5A059_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold" />
            <span className="font-title text-[10px] sm:text-xs tracking-wider text-brand-burgundy uppercase font-bold">
              Our Gallery
            </span>
            <div className="h-[1px] w-6 bg-brand-gold" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-4">
            See Our <span className="font-bold text-brand-gold">Native Wear Designs</span>
          </h2>
          
          <p className="font-sans text-brand-dark-grey/75 text-sm sm:text-base leading-relaxed font-normal">
            Browse through our classic sewing styles. Click on &ldquo;Order This Style&rdquo; to chat with us about tailoring it for you.
          </p>
        </div>

        {/* Filter Navigation Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value)}
                className={`font-title text-[10px] sm:text-xs uppercase tracking-wider px-5 py-3 rounded-none transition-all duration-300 border font-bold cursor-pointer ${
                  isSelected
                    ? 'bg-[#500A15] border-[#500A15] text-white shadow-sm'
                    : 'bg-white border-brand-gold/25 text-brand-dark-grey/80 hover:text-brand-burgundy hover:bg-brand-cream/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* List Grid - Card body always bright and visible */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem) => {
              const whatsAppText = `Hello Sulfad Stitches, I am interested in the native style: "${item.name}". Please can we discuss tailoring this outfit for me?`;
              const whatsAppHref = getWhatsAppUrl(whatsAppText);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="group flex flex-col bg-white border border-brand-gold/15 hover:border-brand-burgundy/30 transition-all duration-300 shadow-sm"
                >
                  {/* Photo with responsive size */}
                  <div className="relative aspect-[3/4] overflow-hidden w-full bg-[#FAF8F5]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Always Visible Card Details for Bright theme */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-title text-[9px] uppercase tracking-wider text-brand-gold block font-bold mb-1.5">
                        {item.category.replace('-', ' ')}
                      </span>
                      <h3 className="font-serif text-lg text-brand-burgundy font-bold mb-2">
                        {item.name}
                      </h3>
                      <p className="font-sans text-brand-dark-grey/70 text-xs leading-relaxed mb-5 font-normal">
                        {item.description}
                      </p>
                    </div>

                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-brand-burgundy hover:bg-[#400711] text-white font-title text-[10px] uppercase tracking-wider font-bold py-3.5 shadow-sm transition-all duration-300"
                    >
                      <MessageSquare size={13} />
                      <span>Order This Style</span>
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white border border-brand-gold/15">
            <p className="font-serif text-lg text-brand-burgundy font-bold">Designs loading...</p>
            <p className="font-sans text-xs text-brand-dark-grey/60 mt-1">Select another choice above to view native outfits.</p>
          </div>
        )}

      </div>
    </section>
  );
}
