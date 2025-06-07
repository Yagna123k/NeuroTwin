import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0A0E1A]/95 backdrop-blur-xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Brain className="w-7 h-7 text-[#A1C5FF] group-hover:text-[#6EA6FF] transition-colors" />
                <div className="absolute inset-0 bg-[#A1C5FF] blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">NeuroTwin</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative text-gray-300 hover:text-white transition-all duration-300 font-medium"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-[#A1C5FF]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#A1C5FF]/20 to-[#6EA6FF]/20 border border-[#A1C5FF]/30 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A1C5FF]/25 backdrop-blur-sm">
                <span className="relative z-10">Start Training Your Twin</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-[#0A0E1A]/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} style={{ top: '80px' }}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] rounded-full text-white font-semibold text-lg">
              Start Training Your Twin
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;