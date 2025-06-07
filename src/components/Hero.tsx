import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Brain, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#1A1B23]">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A1C5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#6EA6FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-[#A1C5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A1C5FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className={`flex items-center justify-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative">
            <Brain className="w-8 h-8 text-[#A1C5FF]" />
            <div className="absolute inset-0 bg-[#A1C5FF] blur-md opacity-40"></div>
          </div>
          <span className="ml-3 text-xl font-semibold text-white tracking-tight">NeuroTwin</span>
        </div>

        {/* Main headline */}
        <div className={`transition-all duration-1200 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Turn Yourself Into{' '}
            <span className="bg-gradient-to-r from-[#A1C5FF] via-[#6EA6FF] to-[#A1C5FF] bg-clip-text text-transparent">
              Software
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className={`transition-all duration-1200 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
            A living, thinking, talking digital version of you — that works while you don't.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transition-all duration-1200 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#A1C5FF]/25 flex items-center gap-3 min-w-[280px] justify-center">
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Start Training Your Twin
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#A1C5FF] to-[#6EA6FF] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
          </button>
          
          <button className="group text-gray-400 hover:text-white transition-colors font-medium text-lg flex items-center gap-2">
            <span className="border-b border-gray-600 group-hover:border-white transition-colors">Watch Demo</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Micro-features */}
        <div className={`grid grid-cols-3 gap-12 max-w-2xl mx-auto mb-20 transition-all duration-1200 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center group">
            <div className="text-4xl font-bold text-[#A1C5FF] mb-3 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-gray-400 text-sm font-medium tracking-wide">Always Active</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-[#A1C5FF] mb-3 group-hover:scale-110 transition-transform">∞</div>
            <div className="text-gray-400 text-sm font-medium tracking-wide">Infinite Scale</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-[#A1C5FF] mb-3 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-gray-400 text-sm font-medium tracking-wide">You Authentic</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">Scroll</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1 relative">
            <div className="w-1 h-3 bg-[#A1C5FF] rounded-full animate-pulse"></div>
          </div>
          <ArrowDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;