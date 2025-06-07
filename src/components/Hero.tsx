import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium AI Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Interactive neural mesh */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(93, 184, 255, 0.15) 0%, transparent 50%)`
          }}
        ></div>

        {/* Animated neural network */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamic neural connections */}
            <g className="animate-pulse" style={{animationDuration: '8s'}}>
              <path d="M100,200 Q300,150 500,200 T900,180" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
              <path d="M200,400 Q400,350 600,400 T1000,380" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
              <path d="M150,600 Q350,550 550,600 T950,580" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
            </g>
            
            {/* Floating data nodes */}
            <g>
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={100 + (i * 90)}
                  cy={200 + Math.sin(i) * 100}
                  r="2"
                  fill="#5DB8FF"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                  filter="url(#glow)"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-[#5DB8FF]/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 border border-[#5DB8FF]/15 rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Premium glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-[#5DB8FF]/10 via-[#5DB8FF]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#8CD5FF]/8 via-[#5DB8FF]/4 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/20 to-[#0D1117]/60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
          </div>

          {/* Main headline with premium typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block mb-2">Turn Yourself</span>
            <span className="block mb-2">Into</span>
            <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative">
              Software
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] blur-2xl opacity-20"></div>
            </span>
          </h1>

          {/* Premium subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF]">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Premium CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-2xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <Zap className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Start Training Your Twin</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg">
              <div className="w-14 h-14 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors">Watch Demo</span>
            </button>
          </div>

          {/* Premium stats with enhanced design */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            {[
              { value: "24/7", label: "Always Active", icon: "⚡" },
              { value: "∞", label: "Infinite Scale", icon: "🚀" },
              { value: "100%", label: "Authentic You", icon: "🧠" }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-[#5DB8FF] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium mb-2">{stat.label}</div>
                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full p-1">
            <div className="w-1 h-3 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll to explore</span>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;