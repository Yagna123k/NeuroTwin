import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Premium AI Background with refined animations */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Interactive neural mesh - smooth movement */}
        <div 
          className="absolute inset-0 opacity-15 transition-all duration-[1500ms] ease-out"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(93, 184, 255, 0.12) 0%, transparent 50%)`
          }}
        ></div>

        {/* Refined neural network */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Elegant neural connections */}
            <g className="animate-pulse" style={{animationDuration: '8s'}}>
              <path d="M100,200 Q300,150 500,200 T900,180" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
              <path d="M200,400 Q400,350 600,400 T1000,380" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
              <path d="M150,600 Q350,550 550,600 T950,580" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" filter="url(#glow)"/>
            </g>
            
            {/* Refined data nodes */}
            <g>
              {[...Array(8)].map((_, i) => (
                <circle
                  key={i}
                  cx={150 + (i * 120)}
                  cy={300 + Math.sin(i) * 80}
                  r="1.5"
                  fill="#5DB8FF"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 0.6}s`,
                    animationDuration: '3s'
                  }}
                  filter="url(#glow)"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Subtle geometric elements */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 border border-[#5DB8FF]/15 rotate-45 animate-spin" style={{animationDuration: '40s', animationTimingFunction: 'linear'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 border border-[#5DB8FF]/10 rotate-12 animate-spin" style={{animationDuration: '50s', animationDirection: 'reverse', animationTimingFunction: 'linear'}}></div>
        
        {/* Refined glow effects */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-[#5DB8FF]/8 via-[#5DB8FF]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationTimingFunction: 'ease-in-out'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-[#8CD5FF]/6 via-[#5DB8FF]/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s', animationDelay: '2s', animationTimingFunction: 'ease-in-out'}}></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/10 to-[#0D1117]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Refined premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF]/8 to-[#8CD5FF]/8 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
          </div>

          {/* Perfectly sized headline - unicorn premium level */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight">
              <span className="block mb-3">Turn Yourself</span>
              <span className="block mb-3">Into</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative">
                Software
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] blur-2xl opacity-15"></div>
              </span>
            </h1>
          </div>

          {/* Refined caption */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF]">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Premium CTA section with sophisticated button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Sophisticated premium CTA button */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-xl text-white font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#5DB8FF]/25 flex items-center gap-3 overflow-hidden border border-[#5DB8FF]/20">
              {/* Refined background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                <span>Start Training Your Twin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Subtle outer glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </button>
            
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/5 relative overflow-hidden">
                <Play className="w-5 h-5 ml-0.5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors">Watch Demo</span>
            </button>
          </div>

          {/* Refined stats with elegant design */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "24/7", label: "Always Active", icon: "⚡" },
              { value: "∞", label: "Infinite Scale", icon: "🚀" },
              { value: "100%", label: "Authentic You", icon: "🧠" }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refined scroll indicator - bottom right */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center gap-2 text-gray-500 animate-bounce">
          <div className="w-5 h-8 border-2 border-gray-700 rounded-full p-1">
            <div className="w-1 h-2 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>

      {/* Refined floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              animationTimingFunction: 'ease-in-out'
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;