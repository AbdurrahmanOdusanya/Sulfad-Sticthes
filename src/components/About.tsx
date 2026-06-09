import { motion } from 'motion/react';
import { Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#FAF8F5] border-t border-b border-brand-gold/10 py-20 sm:py-24 overflow-hidden"
    >
      {/* Background soft color highlight */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Seamless clean images of our work */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            {/* Main Craft Image */}
            <div className="relative w-4/5 aspect-[4/5] overflow-hidden border border-brand-gold/20 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
                alt="Tailor working on fabric pattern"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Detail Image */}
            <div className="absolute right-0 bottom-[-20px] w-1/2 aspect-[1/1] overflow-hidden border border-brand-gold/20 shadow-lg z-20">
              <img
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&q=80&w=500"
                alt="Detailed sewing stitch close-up"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-burgundy/10" />
              <div className="absolute bottom-3 left-3 bg-white/95 border border-brand-gold/30 px-3 py-1.5 shadow-sm">
                <span className="font-title text-[9px] tracking-wider text-brand-burgundy block font-bold">OUR WORK</span>
                <span className="font-serif text-[10px] text-brand-dark-grey block">Perfect Sewing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Simple Narrative */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="flex items-center space-x-2 mb-4 justify-center lg:justify-start">
              <div className="h-[1px] w-6 bg-brand-gold" />
              <span className="font-title text-xs tracking-wider text-brand-gold uppercase font-bold">Our Story</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-burgundy tracking-tight leading-tight mb-6">
              About <span className="font-bold text-brand-gold">Sulfad Stitches</span>
            </h2>

            <div className="font-sans text-brand-dark-grey/85 text-sm sm:text-base leading-relaxed space-y-5 mb-8 font-normal">
              <p>
                Sulfad Stitches is a top-quality men’s traditional wear fashion house. We make stylish, clean, and perfectly fitted native outfits. We focus on premium fabrics and nice cuts so that you look gorgeous and stand out on any occasion.
              </p>
              <p>
                For our beautiful clients in Abeokuta, across Nigeria, and all over the world, we bring experience, clean line tailoring, and modern designs to traditional styles. We believe that what you wear tells a story of success and confidence.
              </p>
            </div>

            {/* Simply phrased Goal/Mission Statement Box */}
            <div className="p-6 bg-white border-l-4 border-brand-burgundy border-y border-r border-brand-gold/15 mb-8 text-left shadow-sm">
              <span className="font-title text-[10px] tracking-wider text-brand-burgundy uppercase block font-bold mb-1">Our Simple Goal</span>
              <p className="font-serif text-sm text-brand-dark-grey leading-relaxed italic">
                &ldquo;To make premium native clothes that make every man feel proud, clean, and confident, using the best fabrics and simple, perfect styles.&rdquo;
              </p>
            </div>

            {/* Simplistic trust components */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 bg-brand-burgundy/5 border border-brand-burgundy/10 text-brand-burgundy mt-1">
                  <Award size={15} />
                </div>
                <div>
                  <h4 className="font-title text-xs tracking-wider text-brand-burgundy uppercase font-bold">Experienced Tailoring</h4>
                  <p className="font-sans text-[11px] text-brand-dark-grey/70 mt-1">Many years of crafting excellent native clothing in Ogun State.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="p-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold mt-1">
                  <ShieldCheck size={15} />
                </div>
                <div>
                  <h4 className="font-title text-xs tracking-wider text-brand-burgundy uppercase font-bold">Top Quality Checks</h4>
                  <p className="font-sans text-[11px] text-brand-dark-grey/70 mt-1">Our work is checked multiple times to ensure perfect seams.</p>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-brand-gold/20">
              <div>
                <p className="font-title text-[10px] uppercase tracking-wider text-brand-dark-grey/50">Founder &amp; Owner</p>
                <p className="font-serif text-base text-brand-burgundy font-bold mt-0.5">Fadlullah I. Sulaimon</p>
              </div>
              <div className="text-right">
                <span className="font-title text-[9px] uppercase tracking-wider text-brand-dark-grey/50 block font-bold">SULFAD STITCHES</span>
                <span className="font-serif text-xs text-brand-gold italic">Made in Abeokuta</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
