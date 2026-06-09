import { motion } from 'motion/react';
import { BRAND_VALUES } from '../data';
import Icon from './Icon';

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const getSafeIconName = (name: string) => {
    if (name === 'Tissue') return 'Layers';
    return name;
  };

  return (
    <section
      id="why-choose-us"
      className="relative bg-white border-t border-b border-brand-gold/10 py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cream/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold" />
            <span className="font-title text-[10px] sm:text-xs tracking-wider text-brand-burgundy uppercase font-bold">
              Our Promise
            </span>
            <div className="h-[1px] w-6 bg-brand-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-4">
            Why Choose <span className="font-bold text-brand-gold">Sulfad Stitches</span>
          </h2>

          <p className="font-sans text-brand-dark-grey/70 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed">
            We don&apos;t just sew clothes — we build confidence and respect into every single outfit we make.
          </p>
        </div>

        {/* Values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {BRAND_VALUES.map((val, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 bg-[#FAF8F5] border border-brand-gold/15 hover:border-brand-burgundy/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-none bg-brand-burgundy/5 border border-brand-burgundy/15 flex items-center justify-center text-brand-burgundy mb-5">
                  <Icon name={getSafeIconName(val.icon)} size={18} />
                </div>

                <h3 className="font-serif text-base sm:text-lg text-brand-burgundy font-bold mb-2">
                  {val.title}
                </h3>

                <p className="font-sans text-brand-dark-grey/75 text-xs leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>

              {/* Numbering label */}
              <div className="mt-6 pt-4 border-t border-brand-gold/10 text-right font-title text-[9px] text-[#C5A059] font-bold">
                PROMISE / 0{index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
