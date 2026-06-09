import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Set up intersection observer to align navbar active tags in real time
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // trigger middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-brand-lightbg min-h-screen text-brand-dark-grey font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden antialiased relative">
      {/* Decorative clean line at the top boundary */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-burgundy via-brand-gold to-brand-burgundy z-50 pointer-events-none" />

      {/* Persistent Sticky Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Gallery Section */}
        <Gallery />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact info section */}
        <Contact />
      </main>

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}

