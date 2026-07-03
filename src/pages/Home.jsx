import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F1D65C] overflow-hidden select-none">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
