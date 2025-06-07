import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Premium AI Background with centered automatic animations */}
      <div className="absolute inset-0">
        {/* Base gradient with improved depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Centered automatic flowing neural mesh */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full animate-pulse"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(93, 184, 255, 0.15) 0%, transparent 50%), 
                          radial-gradient(circle at 40% 30%, rgba(140, 213, 255, 0.12) 0%, transparent 50%),
                          radial-gradient(circle at 60% 70%, rgba(93, 184, 255, 0.08) 0%, transparent 50%)`,
              animationDuration: '8s',
              animationTimingFunction: 'ease-in-out'
            }}
          ></div>
        </div>

        {/* Enhanced neural network with centered automatic movement */}
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
            
            {/* Centered flowing neural connections with automatic animation */}
            <g transform="translate(600, 400)">
              <path 
                d="M-400,-100 Q-200,-150 0,-100 T400,-120" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '6s', animationDelay: '0s'}}
              />
              <path 
                d="M-300,100 Q-100,50 100,100 T500,80" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '8s', animationDelay: '2s'}}
              />
              <path 
                d="M-450,0 Q-250,-20 -50,20 T350,0" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '7s', animationDelay: '4s'}}
              />
              <path 
                d="M-350,-200 Q-150,-180 50,-160 T450,-180" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '9s', animationDelay: '1s'}}
              />
            </g>
            
            {/* Enhanced data nodes with centered staggered animation */}
            <g transform="translate(600, 400)">
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={-400 + (i * 70)}
                  cy={Math.sin(i * 0.8) * 80}
                  r="2"
                  fill="#5DB8FF"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '4s'
                  }}
                  filter="url(#glow)"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Centered automatic floating geometric elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -top-32 -left-32 w-24 h-24 border border-[#5DB8FF]/20 rotate-45" 
               style={{
                 animation: 'spin 60s linear infinite, float 8s ease-in-out infinite'
               }}></div>
          <div className="absolute top-32 left-32 w-20 h-20 border border-[#5DB8FF]/15 rotate-12" 
               style={{
                 animation: 'spin 80s linear infinite reverse, float 10s ease-in-out infinite 2s'
               }}></div>
          <div className="absolute -top-16 left-48 w-16 h-16 border border-[#8CD5FF]/10 rotate-45"
               style={{
                 animation: 'spin 100s linear infinite, float 12s ease-in-out infinite 4s'
               }}></div>
        </div>
        
        {/* Enhanced centered automatic glow effects */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-gradient-radial from-[#5DB8FF]/12 via-[#5DB8FF]/4 to-transparent rounded-full blur-3xl" 
               style={{
                 animation: 'pulse 10s ease-in-out infinite, float 15s ease-in-out infinite'
               }}></div>
          <div className="absolute top-48 left-48 w-80 h-80 bg-gradient-radial from-[#8CD5FF]/10 via-[#5DB8FF]/3 to-transparent rounded-full blur-3xl" 
               style={{
                 animation: 'pulse 12s ease-in-out infinite 3s, float 18s ease-in-out infinite 6s'
               }}></div>
          <div className="absolute top-16 -left-32 w-64 h-64 bg-gradient-radial from-[#5DB8FF]/8 via-[#8CD5FF]/2 to-transparent rounded-full blur-3xl"
               style={{
                 animation: 'pulse 14s ease-in-out infinite 6s, float 20s ease-in-out infinite 10s'
               }}></div>
        </div>
        
        {/* Improved depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/5 to-[#0D1117]/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Enhanced premium badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/25 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm hover:border-[#5DB8FF]/40 transition-all duration-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
          </div>

          {/* Premium enhanced headline with improved typography */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.8] tracking-tight">
              <span className="block mb-6 relative">
                <span className="relative z-10">Turn Yourself</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
              </span>
              <span className="block mb-6 relative">
                <span className="relative z-10">Into</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] via-[#FFFFFF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                  Software
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#5DB8FF]/20 via-[#8CD5FF]/30 to-[#5DB8FF]/20 blur-2xl opacity-60 animate-pulse delay-1000"></div>
              </span>
            </h1>
          </div>

          {/* Improved caption with better hierarchy */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF] font-medium">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Premium CTA button with improved effects */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-3 overflow-hidden border border-[#5DB8FF]/30">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                <span>Start Training Your Twin</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Enhanced outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            </button>
            
            {/* Enhanced demo button */}
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10 relative overflow-hidden">
                <Play className="w-5 h-5 ml-0.5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Watch Demo</span>
            </button>
          </div>

          {/* Enhanced stats with better visual hierarchy */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "24/7", label: "Always Active", icon: "⚡" },
              { value: "∞", label: "Infinite Scale", icon: "🚀" },
              { value: "100%", label: "Authentic You", icon: "🧠" }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium mb-2">{stat.label}</div>
                <div className="text-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - bottom right */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors cursor-pointer group">
          <div className="w-5 h-8 border-2 border-gray-700 group-hover:border-gray-600 rounded-full p-1 transition-colors">
            <div className="w-1 h-2 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>

      {/* Centered auto-animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full"
              style={{
                left: `${45 + Math.random() * 10}%`,
                top: `${45 + Math.random() * 10}%`,
                animation: `float ${8 + Math.random() * 12}s ease-in-out infinite ${Math.random() * 8}s, pulse ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;