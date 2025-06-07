import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Brain } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235DB8FF%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Brain className="w-12 h-12 text-[#5DB8FF] animate-pulse" />
              <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-30 animate-pulse"></div>
            </div>
            <span className="ml-4 text-2xl font-bold text-white">NeuroTwin</span>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Turn Yourself Into{' '}
            <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent animate-pulse">
              Software
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            A living, thinking, talking digital version of you — that works while you don't.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/25 flex items-center gap-3">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Start Training Your Twin
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </button>
            
            <button className="text-gray-400 hover:text-white transition-colors underline underline-offset-4">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5DB8FF] mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Always Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5DB8FF] mb-2">∞</div>
              <div className="text-gray-400 text-sm">Infinite Scale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#5DB8FF] mb-2">100%</div>
              <div className="text-gray-400 text-sm">You Authentic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
          <div className="w-1 h-3 bg-[#5DB8FF] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;