import React, { useState, useEffect } from 'react';

const Navbar = () => {
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
          ? 'bg-primary-900/95 backdrop-blur-xl border-b border-silver-800/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo using the actual NeuroTwin logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img 
                  src="/NeuroTwin Logo.png" 
                  alt="NeuroTwin" 
                  className="w-8 h-8 object-contain"
                />
                <div className="absolute inset-0 bg-silver-300 blur-lg opacity-20"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">
                NeuroTwin
              </span>
            </div>

            {/* Desktop Navigation with premium styling */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-silver-400 hover:text-silver-200 transition-colors text-sm font-medium relative group"
                >
                  {link.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-silver-400 to-silver-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button with premium styling */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors group border border-silver-700/30"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block w-5 h-0.5 bg-silver-400 group-hover:bg-silver-200 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
                <span className={`absolute block w-5 h-0.5 bg-silver-400 group-hover:bg-silver-200 transition-all duration-300 top-2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-5 h-0.5 bg-silver-400 group-hover:bg-silver-200 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Premium backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-primary-800 border-t border-silver-800"></div>
        
        {/* Content */}
        <div className="relative flex flex-col h-full px-6 py-16">
          {/* Mobile brand section */}
          <div className="flex items-center gap-3 mb-12">
            <div className="relative">
              <img 
                src="/NeuroTwin Logo.png" 
                alt="NeuroTwin" 
                className="w-8 h-8 object-contain"
              />
              <div className="absolute inset-0 bg-silver-300 blur-lg opacity-20"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">
              NeuroTwin
            </span>
          </div>

          {/* Navigation links with premium styling */}
          <div className="space-y-6 mb-12">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-silver-400 hover:text-silver-200 transition-colors text-lg relative group"
              >
                {link.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-silver-400 to-silver-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Premium description */}
          <div className="mt-auto">
            <p className="text-silver-400 leading-relaxed text-sm max-w-sm">
              Turn yourself into software. Create your intelligent digital twin that works while you don't.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;