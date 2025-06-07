import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Developers', href: '#developers' },
    { label: 'About', href: '#about' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D1117]/80 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Brain className="w-8 h-8 text-[#5DB8FF] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#5DB8FF] transition-colors duration-300">
                NeuroTwin
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5DB8FF]/25 group">
                <span>Start Training Your Twin</span>
                <div className="w-2 h-2 bg-white/80 rounded-full group-hover:animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-[#0D1117]/95 backdrop-blur-xl"></div>
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Start Training Your Twin
          </button>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;