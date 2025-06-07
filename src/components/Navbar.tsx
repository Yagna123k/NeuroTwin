import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Demo', href: '/demo' }
  ];

  const isActive = (href) => {
    if (href.startsWith('#')) {
      return false; // Handle anchor links differently if needed
    }
    return location.pathname === href;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0D1117]/95 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <Brain className="w-8 h-8 text-[#5DB8FF]" />
                <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-30"></div>
              </div>
              <span className="text-xl font-bold text-white">NeuroTwin</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                link.href.startsWith('#') ? (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className={`transition-colors text-sm font-medium ${
                      isActive(link.href)
                        ? 'text-[#5DB8FF]'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-[#161B22] border-t border-gray-800"></div>
        
        {/* Content */}
        <div className="relative flex flex-col h-full px-6 py-16">
          {/* Mobile brand section */}
          <Link to="/" className="flex items-center gap-3 mb-12" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative">
              <Brain className="w-8 h-8 text-[#5DB8FF]" />
              <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-30"></div>
            </div>
            <span className="text-xl font-bold text-white">NeuroTwin</span>
          </Link>

          {/* Navigation links */}
          <div className="space-y-6 mb-12">
            {navLinks.map((link, index) => (
              link.href.startsWith('#') ? (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-400 hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors text-lg ${
                    isActive(link.href)
                      ? 'text-[#5DB8FF]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Footer-style description */}
          <div className="mt-auto">
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
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