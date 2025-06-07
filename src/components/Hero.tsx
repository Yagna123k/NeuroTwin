import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0A0E1A] to-[#1A1B23]">
        {/* Evolving gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A1C5FF] rounded-full mix-blend-screen filter blur-3xl opacity-[0.03] animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-[#6EA6FF] rounded-full mix-blend-screen filter blur-3xl opacity-[0.04] animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#8B9FFF] rounded-full mix-blend-screen filter blur-3xl opacity-[0.02] animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#A1C5FF] rounded-full mix-blend-screen filter blur-3xl opacity-[0.03] animate-pulse delay-3000"></div>
        </div>

        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="1" fill="#A1C5FF" opacity="0.3">
                  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="20" r="0.5" fill="#6EA6FF" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="40" r="0.5" fill="#A1C5FF" opacity="0.2">
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" />
                </circle>
                <line x1="60" y1="60" x2="20" y2="20" stroke="#A1C5FF" strokeWidth="0.2" opacity="0.1" />
                <line x1="60" y1="60" x2="100" y2="40" stroke="#6EA6FF" strokeWidth="0.2" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main headline with cinematic entrance */}
        <div className={`transition-all duration-1500 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tight">
            Your Mind.{' '}
            <span className="block bg-gradient-to-r from-[#A1C5FF] via-[#6EA6FF] to-[#8B9FFF] bg-clip-text text-transparent">
              Multiplied.
            </span>
          </h1>
        </div>

        {/* Subheadline with elegant fade */}
        <div className={`transition-all duration-1500 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-gray-400 mb-24 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            A living, thinking, talking digital version of you.
          </p>
        </div>
      </div>

      {/* Breathing scroll indicator */}
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="text-xs text-gray-500 font-medium tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            Explore
          </div>
          <div className="relative">
            <div className="w-6 h-10 border border-gray-600/50 rounded-full p-1 group-hover:border-[#A1C5FF]/50 transition-colors">
              <div className="w-1 h-3 bg-[#A1C5FF]/60 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute inset-0 bg-[#A1C5FF]/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-sm"></div>
          </div>
          <ArrowDown className="w-3 h-3 text-gray-500/60 animate-bounce group-hover:text-[#A1C5FF]/60 transition-colors" />
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#A1C5FF]/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;