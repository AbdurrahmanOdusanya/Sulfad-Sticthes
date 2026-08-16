import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data';

export default function FloatingWhatsApp() {
  const customMessage = "Hello Sulfad Stitches, I would like to make an enquiry regarding custom men's native outfits.";
  const whatsAppHref = getWhatsAppUrl(customMessage);

  return (
    <div
      id="floating-whatsapp-widget"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center group"
    >
      {/* Pulsing circular green WhatsApp button */}
      <a
        href={whatsAppHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sulfad Stitches on WhatsApp"
        className="relative flex items-center justify-center cursor-pointer select-none"
      >
        {/* Soft pulse glow effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping duration-1000 pointer-events-none" />

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white/90 transition-colors duration-200"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-[#25D366] stroke-[1.5]" />
        </motion.div>
      </a>
    </div>
  );
}

