import React, { useState, useEffect } from 'react';
import { Brain, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

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
          ? 'bg-[#0A0E13]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - Enhanced with premium styling */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500 scale-110"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-[#5DB8FF]/20 to-[#3A9EFF]/20 rounded-xl border border-[#5DB8FF]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-[#5DB8FF]/50 transition-all duration-500">
                  <Brain className="w-5 h-5 text-[#5DB8FF] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white group-hover:text-[#5DB8FF] transition-colors duration-300 tracking-tight">
                  NeuroTwin
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                  AI PLATFORM
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Premium spacing and typography */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-gray-400 hover:text-white transition-all duration-300 font-medium text-[15px] tracking-wide group p-2"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/10 to-[#3A9EFF]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] group-hover:w-full transition-all duration-500 rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu - Ultra premium design */}
            <div className="flex items-center gap-6">
              {/* Premium CTA Button */}
              <button className="hidden sm:flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#5DB8FF] via-[#4AA8EF] to-[#3A9EFF] rounded-2xl text-white font-bold text-[15px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#5DB8FF]/30 group relative overflow-hidden tracking-wide">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Start Training Your Twin</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>

              {/* Mobile Menu Button - Enhanced */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Premium full-screen experience */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0A0E13]/98 backdrop-blur-3xl"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%235DB8FF%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M20%2020h20v20H20V20zm0-20h20v20H20V0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-8">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF] to-[#3A9EFF] rounded-xl blur-lg opacity-60 scale-110"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-[#5DB8FF]/20 to-[#3A9EFF]/20 rounded-xl border border-[#5DB8FF]/30 flex items-center justify-center backdrop-blur-sm">
                <Brain className="w-6 h-6 text-[#5DB8FF]" />
              </div>
            </div>
            <span className="text-2xl font-black text-white tracking-tight">NeuroTwin</span>
          </div>

          {/* Navigation links */}
          <div className="space-y-8 text-center mb-16">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-3xl font-bold text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 tracking-wide"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="group relative px-12 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#4AA8EF] to-[#3A9EFF] rounded-2xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Start Training Your Twin</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5DB8FF]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#3A9EFF]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Spacer with proper height */}
      <div className="h-20"></div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;