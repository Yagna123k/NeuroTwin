import { useState, useEffect } from 'react';
import { Brain, Menu, X, LogIn, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/only_Logo.png'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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

  const handleNavClick = () => {
    // Close mobile menu and scroll to top
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center z-50">
          <div onClick={() => setIsOpen(false)} className="absolute top-0 w-full h-full">

          </div>
          <SignIn />
        </div>
      )}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-transparent backdrop-blur-md'
        : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={handleNavClick}>
              <div className="relative">
                <img src={logo} alt="Logo" className="w-14 h-14" />
                {/* <Brain className="w-8 h-8 text-[#5DB8FF]" /> */}
                <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-15"></div>
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
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className={`transition-colors text-sm font-medium ${isActive(link.href)
                      ? 'text-[#5DB8FF]'
                      : 'text-gray-400 hover:text-white'
                      }`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Desktop Sign In Button */}
            <div className="hidden lg:flex items-center gap-4">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <button
                  onClick={() => setIsOpen(true)}
                  className="group relative px-6 py-2.5 bg-transparent hover:bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-xl hover:text-white text-gray-300 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5DB8FF]/25 flex items-center gap-2 overflow-hidden border border-[#5DB8FF]/30"
                >
                  {/* Enhanced background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  {/* Button content */}
                  <div className="relative z-10 flex items-center gap-2">
                    <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Sign in</span>
                  </div>

                  {/* Enhanced outer glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                </button>
              </SignedOut>
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
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] to-[#161B22] border-t border-gray-800"></div>

        {/* Content */}
        <div className="relative flex flex-col h-full px-6 py-16">
          {/* Mobile brand section */}
          <Link to="/" className="flex items-center gap-3 mb-12" onClick={handleNavClick}>
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
                  onClick={handleNavClick}
                  className="block text-gray-400 hover:text-white transition-colors text-lg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`block transition-colors text-lg ${isActive(link.href)
                    ? 'text-[#5DB8FF]'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Sign In Button */}
          <div className="mb-8">
            <button
              onClick={() => {
                handleSignIn();
                handleNavClick();
              }}
              className="group relative w-full px-6 py-4 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5DB8FF]/25 flex items-center justify-center gap-3 overflow-hidden border border-[#5DB8FF]/30"
            >
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              {/* Button content */}
              <div className="relative z-10 flex items-center gap-3">
                <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Sign In</span>
              </div>

              {/* Enhanced outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </button>
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