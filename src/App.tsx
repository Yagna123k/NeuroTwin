import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UseCases from './components/UseCases';
import PersonaDemo from './components/PersonaDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Navbar />
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