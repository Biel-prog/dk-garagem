import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BrandMarquee from './components/BrandMarquee';

function App() {
  return (
    <div className="min-h-screen bg-dk-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <SocialBanner /> 
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;