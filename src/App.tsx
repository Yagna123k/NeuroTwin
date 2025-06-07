import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import UseCases from './components/UseCases';
import PersonaDemo from './components/PersonaDemo';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <UseCases />
      <PersonaDemo />
      <CTA />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D1117]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;