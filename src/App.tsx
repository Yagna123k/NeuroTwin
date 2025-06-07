import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import UseCases from './components/UseCases';
import PersonaDemo from './components/PersonaDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navigation />
      <Hero />
      <About />
      <UseCases />
      <PersonaDemo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;