import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  // Auto-slide to keep the lookbook immersive
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    })
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative bg-[#FAF8F5] border-t border-b border-brand-gold/10 py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold" />
            <span className="font-title text-[10px] sm:text-xs tracking-wider text-brand-burgundy uppercase font-bold">
              Customer Reviews
            </span>
            <div className="h-[1px] w-6 bg-brand-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-4">
            What Our <span className="font-bold text-brand-gold">Customers Say</span>
          </h2>
          <p className="font-sans text-brand-dark-grey/60 text-xs sm:text-sm font-normal uppercase tracking-wider">
            Real feedback from people who wear Sulfad Stitches
          </p>
        </div>

        {/* Carousel Slider Card */}
        <div className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentReview.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white border border-brand-gold/15 p-8 sm:p-12 rounded-none relative flex flex-col md:flex-row items-center md:items-stretch gap-6 sm:gap-10 shadow-sm"
            >
              {/* Quote Graphic Overlay */}
              <div className="absolute top-6 right-8 text-brand-burgundy/[0.04]">
                <Quote size={80} strokeWidth={1} />
              </div>

              {/* Avatar Frame */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none overflow-hidden border border-brand-gold/25 shadow-sm shrink-0">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review Text */}
              <div className="flex flex-col justify-between text-center md:text-left">
                <div>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-4 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C5A059" strokeWidth={0} />
                    ))}
                  </div>

                  <p className="font-serif text-lg sm:text-xl lg:text-2xl text-brand-dark-grey/85 italic leading-relaxed font-normal mb-6">
                    &ldquo;{currentReview.quote}&rdquo;
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-base sm:text-lg text-brand-burgundy font-bold">
                    {currentReview.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center sm:space-x-2 mt-1">
                    <span className="font-title text-[10px] tracking-wider text-brand-gold uppercase font-bold">
                      {currentReview.role}
                    </span>
                    <span className="hidden sm:inline text-brand-gold/15 font-sans text-xs">|</span>
                    <span className="font-sans text-[11px] text-brand-dark-grey/60 font-normal">
                      {currentReview.location}
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mt-10 max-w-xs mx-auto">
          <button
            onClick={prevSlide}
            aria-label="Previous Review"
            className="p-3 bg-white border border-brand-gold/25 hover:border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((review, idx) => (
              <button
                key={review.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-[3px] transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-brand-burgundy' : 'w-2 bg-brand-gold/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Review"
            className="p-3 bg-white border border-brand-gold/25 hover:border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
