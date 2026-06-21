import { motion } from 'motion/react';
import { Shirt, Scissors, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Services() {
  const ourServices = [
    {
      name: 'Ready to Wear',
      icon: <Shirt className="w-8 h-8 text-brand-burgundy" />,
      tag: 'Pick and Wear',
    },
    {
      name: 'Sew to Fit / Body Fit',
      icon: <Scissors className="w-8 h-8 text-brand-burgundy" />,
      tag: 'Custom Sewing',
    },
    {
      name: 'Embellishments',
      icon: <Sparkles className="w-8 h-8 text-brand-burgundy" />,
      tag: 'Finishing Touches',
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-white border-t border-b border-brand-gold/10 py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold" />
            <span className="font-title text-[10px] sm:text-xs tracking-wider text-brand-burgundy uppercase font-bold">
              What We Do
            </span>
            <div className="h-[1px] w-6 bg-brand-gold" />
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-4">
            Our <span className="font-bold text-brand-gold">Services</span>
          </h2>
          
          <p className="font-sans text-brand-dark-grey/70 text-sm sm:text-base font-normal leading-relaxed">
            Simple and neat tailoring services to get you looking sharp and magnificent.
          </p>
        </div>

        {/* Clean Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {ourServices.map((service, index) => (
            <a
              key={index}
              href={`${BUSINESS_INFO.primaryWhatsAppLink}?text=${encodeURIComponent(
                `Hello Sulfad Stitches, I am looking to ask about your "${service.name}" services. Can you help me?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative p-10 bg-[#FAF8F5] hover:bg-[#F5EFEB] border border-brand-gold/20 hover:border-brand-burgundy/30 transition-all duration-300 text-center flex flex-col items-center justify-center shadow-sm cursor-pointer"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-none bg-white border border-brand-gold/15 text-brand-burgundy group-hover:bg-brand-burgundy group-hover:text-white transition-all duration-350">
                {service.icon}
              </div>

              {/* Sub tag */}
              <span className="font-title text-[10px] uppercase tracking-wider text-brand-gold font-bold mb-2 block">
                {service.tag}
              </span>

              {/* Service Title */}
              <h3 className="font-serif text-2xl text-brand-burgundy font-bold group-hover:text-brand-gold transition-colors duration-300 mb-6">
                {service.name}
              </h3>

              {/* Simple Call to Action Link */}
              <div className="inline-flex items-center space-x-2 text-brand-burgundy group-hover:text-brand-gold font-title text-[11px] uppercase tracking-wider font-bold border-t border-brand-gold/10 pt-4 w-full justify-center">
                <MessageSquare size={12} />
                <span>Enquire Now</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Dynamic event footnote simplified */}
        <div className="mt-12 text-center max-w-md lg:max-w-none mx-auto">
          <p className="font-sans text-xs text-brand-dark-grey/60 lg:whitespace-nowrap">
            Need custom sewing for weddings or family occasions? We offer nice fabric coordination and early delivery.
          </p>
          <a
            href={`${BUSINESS_INFO.primaryWhatsAppLink}?text=${encodeURIComponent(
              'Hello Sulfad Stitches, I would like to make enquiries about native custom package styles.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-title font-bold uppercase tracking-wider text-brand-burgundy hover:text-brand-gold transition-colors border-b border-brand-burgundy/30 pb-0.5 hover:border-brand-gold"
          >
            Ask About Event Packages &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
