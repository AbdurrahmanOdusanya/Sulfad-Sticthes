import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedText = `Hello Sulfad Stitches, I am sending a message from your website contact form:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'None'}
• Topic: ${formData.subject}
• Message: ${formData.message}`;

    const whatsAppUrl = getWhatsAppUrl(formattedText);

    setTimeout(() => {
      window.open(whatsAppUrl, '_blank');
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
      });
    }, 600);
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    BUSINESS_INFO.location.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="contact"
      className="relative bg-white border-t border-b border-brand-gold/10 py-16 sm:py-20 overflow-hidden"
    >
      <div className="absolute bottom-[5%] right-[-10%] w-[450px] h-[450px] bg-brand-cream/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl sm:max-w-none mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-[1px] w-6 bg-brand-gold" />
            <span className="font-title text-[10px] sm:text-xs tracking-wider text-brand-burgundy uppercase font-bold">
              Find Us
            </span>
            <div className="h-[1px] w-6 bg-brand-gold" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-4">
            Get in <span className="font-bold text-brand-gold">Touch</span>
          </h2>

          <p className="font-sans text-brand-dark-grey/70 text-sm sm:text-base font-normal leading-relaxed sm:whitespace-nowrap">
            Ready to look your best? Call us, chat with us, email us, or visit our physical shop in Abeokuta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          
          {/* Left Column: Direct contact info & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              
              <h3 className="font-serif text-xl text-brand-burgundy font-bold mb-4 text-center lg:text-left">
                Our Showroom
              </h3>

              {/* Phone cards (Click to Call) */}
              <div className="flex items-start space-x-4 p-5 bg-[#FAF8F5] border border-brand-gold/15 hover:border-brand-burgundy/30 transition-all duration-300">
                <div className="p-2.5 bg-brand-burgundy/5 border border-brand-burgundy/15 text-brand-burgundy mt-1">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="font-title text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">Call Us Directly</span>
                  <div className="mt-1 space-y-0.5">
                    {BUSINESS_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block font-serif text-base text-brand-burgundy hover:text-brand-gold font-bold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email cards (Click to Email) */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start space-x-4 p-5 bg-[#FAF8F5] border border-brand-gold/15 hover:border-brand-burgundy/30 transition-all duration-300 block text-left group"
              >
                <div className="p-2.5 bg-brand-burgundy/5 border border-brand-burgundy/15 text-brand-burgundy mt-1 group-hover:bg-brand-burgundy group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="font-title text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">Email Address</span>
                  <span className="block font-sans text-sm text-brand-burgundy hover:text-brand-gold font-bold mt-1.5 transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>

              {/* Physical Location description */}
              <div className="flex items-start space-x-4 p-5 bg-[#FAF8F5] border border-brand-gold/15 hover:border-brand-burgundy/30 transition-all duration-300">
                <div className="p-2.5 bg-brand-burgundy/5 border border-brand-burgundy/15 text-brand-burgundy mt-1">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-title text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block">Our Location</span>
                  <p className="font-sans text-xs sm:text-sm text-brand-dark-grey/80 leading-relaxed mt-1 font-normal">
                    {BUSINESS_INFO.location.address}
                  </p>
                  <p className="font-sans text-[11px] text-brand-burgundy font-bold mt-1">
                    * Landmark: {BUSINESS_INFO.location.landmark}
                  </p>
                </div>
              </div>

            </div>

            {/* Google maps responsive embed */}
            <div className="w-full h-[220px] rounded-none overflow-hidden border border-brand-gold/15 shadow-sm relative group">
              <iframe
                title="Sulfad Stitches Abeokuta Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-white border border-brand-gold/20 px-3 py-1.5 rounded-none text-left shadow-md">
                <span className="font-title text-[8px] tracking-wider text-brand-burgundy font-bold block uppercase">DIRECTIONS MAP</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-[10px] text-brand-gold hover:underline block mt-0.5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-brand-gold/20 p-8 sm:p-10 rounded-none shadow-sm relative">

              <h3 className="font-serif text-xl sm:text-2xl text-brand-burgundy font-bold mb-6">
                Send Us a Message
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 rounded-none bg-white border border-brand-gold/20 text-center shadow-sm"
                >
                  <CheckCircle2 className="text-brand-gold mx-auto mb-4" size={44} />
                  <h4 className="font-serif text-xl text-brand-burgundy font-bold mb-2">Message Sent!</h4>
                  <p className="font-sans text-xs text-brand-dark-grey/75 font-normal max-w-sm mx-auto leading-relaxed mb-6">
                    We have compiled your answers and will open them in WhatsApp. One of our master tailors will chat with you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="font-title text-[10px] uppercase tracking-wider text-white bg-brand-burgundy hover:bg-[#400711] px-6 py-3 rounded-none transition-all cursor-pointer font-bold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block font-title text-[10px] uppercase tracking-wider text-brand-burgundy mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Femi Adeyemi"
                        className="w-full bg-white border border-brand-gold/25 focus:border-brand-burgundy px-4 py-3 rounded-none text-sm text-brand-dark-grey font-sans font-normal transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block font-title text-[10px] uppercase tracking-wider text-brand-burgundy mb-1.5 font-bold">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 09058857717"
                        className="w-full bg-white border border-brand-gold/25 focus:border-brand-burgundy px-4 py-3 rounded-none text-sm text-brand-dark-grey font-sans font-normal transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block font-title text-[10px] uppercase tracking-wider text-brand-burgundy mb-1.5 font-bold">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@gmail.com"
                        className="w-full bg-white border border-brand-gold/25 focus:border-brand-burgundy px-4 py-3 rounded-none text-sm text-brand-dark-grey font-sans font-normal transition-colors focus:outline-none"
                      />
                    </div>

                    {/* Subject Choice */}
                    <div>
                      <label htmlFor="contact-subject" className="block font-title text-[10px] uppercase tracking-wider text-brand-burgundy mb-1.5 font-bold">
                        Topic of Enquiry
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-gold/25 focus:border-brand-burgundy px-4 py-3 rounded-none text-sm text-brand-dark-grey font-sans font-normal transition-colors focus:outline-none cursor-pointer"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Kaftan Custom Order">Kaftan Custom Order</option>
                        <option value="Senator Outfit Fit">Senator Outfit Fit</option>
                        <option value="Agbada Bridal Wear">Agbada Bridal Wear</option>
                        <option value="Aso Ebi Group Request">Aso Ebi Group Request</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="contact-message" className="block font-title text-[10px] uppercase tracking-wider text-brand-burgundy mb-1.5 font-bold">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="List details of what you need (colors, style, or sizing notes)..."
                      className="w-full bg-white border border-brand-gold/25 focus:border-brand-burgundy px-4 py-3 rounded-none text-sm text-brand-dark-grey font-sans font-normal transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit via whatsapp */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-burgundy hover:bg-[#400711] text-white font-title text-xs uppercase tracking-widest font-bold py-4 rounded-none transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
                    >
                      <Send size={14} />
                      <span>{isSubmitting ? 'Preparing details...' : 'Submit via WhatsApp'}</span>
                    </button>
                    
                    {/* Footnote direct numbers */}
                    <div className="mt-4 text-center">
                      <span className="text-brand-dark-grey/50 font-sans text-[10px] block">Or connect with us directly:</span>
                      <div className="flex justify-center items-center space-x-4 mt-1.5">
                        {BUSINESS_INFO.whatsapps.map((wNum) => (
                          <a
                            key={wNum}
                            href={`https://wa.me/234${wNum.substring(1)}?text=Hello%20Sulfad%20Stitches%2C%20I%20have%20an%20enquiry%20regarding%20mens%20native%20tailoring.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-xs text-brand-gold hover:text-brand-burgundy transition-colors font-bold"
                          >
                            <MessageSquare size={12} className="text-emerald-600" />
                            <span>Chat {wNum}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
