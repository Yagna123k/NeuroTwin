import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UseCases from './components/UseCases';
import PersonaDemo from './components/PersonaDemo';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <UseCases />
      <PersonaDemo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;