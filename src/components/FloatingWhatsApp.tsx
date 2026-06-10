import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data';

export default function FloatingWhatsApp() {
  const customMessage = 'Hello Sulfad Stitches, I would like to make an enquiry regarding custom men\'s native outfits.';
  const whatsAppHref = getWhatsAppUrl(customMessage);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end group">
      
      {/* Golden cream tooltip */}
      <div className="hidden sm:block mb-2 bg-white text-brand-burgundy border border-brand-gold/30 text-[9px] uppercase tracking-wider font-title px-3 py-1.5 rounded-none shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none font-bold">
        Chat on WhatsApp <span className="text-emerald-600 ml-1">●</span>
      </div>

      {/* Pulsing circular green button */}
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sulfad Stitches on WhatsApp"
        className="relative block"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur opacity-75 group-hover:opacity-100 animate-ping duration-1000" />
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-12 h-12 md:w-14 md:h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg border border-brand-gold/20"
        >
          <MessageSquare fill="currentColor" strokeWidth={0} className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </a>

    </div>
  );
}
