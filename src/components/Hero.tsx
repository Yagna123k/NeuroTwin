import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Premium AI Background with automatic animations */}
      <div className="absolute inset-0">
        {/* Base gradient with improved depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Automatic flowing neural mesh */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: `radial-gradient(circle at 30% 40%, rgba(93, 184, 255, 0.15) 0%, transparent 50%), 
                          radial-gradient(circle at 70% 60%, rgba(140, 213, 255, 0.12) 0%, transparent 50%),
                          radial-gradient(circle at 50% 80%, rgba(93, 184, 255, 0.08) 0%, transparent 50%)`,
              animationDuration: '8s',
              animationTimingFunction: 'ease-in-out'
            }}
          ></div>
        </div>

        {/* Enhanced neural network with automatic movement */}
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
            
            {/* Flowing neural connections with automatic animation */}
            <g>
              <path 
                d="M100,200 Q300,150 500,200 T900,180" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '6s', animationDelay: '0s'}}
              />
              <path 
                d="M200,400 Q400,350 600,400 T1000,380" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '8s', animationDelay: '2s'}}
              />
              <path 
                d="M150,600 Q350,550 550,600 T950,580" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '7s', animationDelay: '4s'}}
              />
              <path 
                d="M50,300 Q250,280 450,320 T850,300" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1" 
                fill="none" 
                filter="url(#glow)"
                className="animate-pulse"
                style={{animationDuration: '9s', animationDelay: '1s'}}
              />
            </g>
            
            {/* Enhanced data nodes with staggered animation */}
            <g>
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx={100 + (i * 90)}
                  cy={250 + Math.sin(i * 0.8) * 120}
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

        {/* Automatic floating geometric elements */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 border border-[#5DB8FF]/20 rotate-45" 
             style={{
               animation: 'spin 60s linear infinite, float 8s ease-in-out infinite'
             }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 border border-[#5DB8FF]/15 rotate-12" 
             style={{
               animation: 'spin 80s linear infinite reverse, float 10s ease-in-out infinite 2s'
             }}></div>
        <div className="absolute top-1/2 left-1/12 w-16 h-16 border border-[#8CD5FF]/10 rotate-45"
             style={{
               animation: 'spin 100s linear infinite, float 12s ease-in-out infinite 4s'
             }}></div>
        
        {/* Enhanced automatic glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-[#5DB8FF]/12 via-[#5DB8FF]/4 to-transparent rounded-full blur-3xl" 
             style={{
               animation: 'pulse 10s ease-in-out infinite, float 15s ease-in-out infinite'
             }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#8CD5FF]/10 via-[#5DB8FF]/3 to-transparent rounded-full blur-3xl" 
             style={{
               animation: 'pulse 12s ease-in-out infinite 3s, float 18s ease-in-out infinite 6s'
             }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-radial from-[#5DB8FF]/8 via-[#8CD5FF]/2 to-transparent rounded-full blur-3xl"
             style={{
               animation: 'pulse 14s ease-in-out infinite 6s, float 20s ease-in-out infinite 10s'
             }}></div>
        
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

          {/* Enhanced animated headline with staggered reveal */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white leading-[0.85] tracking-tight">
              <span 
                className={`block mb-4 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Turn Yourself
              </span>
              <span 
                className={`block mb-4 transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Into
              </span>
              <span 
                className={`bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ 
                  transitionDelay: '600ms',
                  animation: isVisible ? 'titleGlow 3s ease-in-out infinite' : 'none'
                }}
              >
                Software
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/50 via-[#8CD5FF] to-[#5DB8FF]/50 blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Animated underline effect */}
                <div 
                  className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] transition-all duration-1500 ${
                    isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: '1000ms',
                    animation: isVisible ? 'shimmer 2s ease-in-out infinite' : 'none'
                  }}
                ></div>
              </span>
            </h1>
          </div>

          {/* Improved caption with better hierarchy */}
          <p className={`text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '800ms' }}>
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF] font-medium">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Enhanced CTA section */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '1000ms' }}>
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
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '1200ms' }}>
            {[
              { value: "24/7", label: "Always Active", icon: "⚡" },
              { value: "∞", label: "Infinite Scale", icon: "🚀" },
              { value: "100%", label: "Authentic You", icon: "🧠" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`group text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${1400 + index * 100}ms` }}
              >
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

      {/* Enhanced animated scroll indicator - bottom right */}
      <div className={`absolute bottom-8 right-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: '1600ms' }}>
        <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-gray-300 transition-all duration-300 cursor-pointer group">
          {/* Animated scroll container */}
          <div className="relative">
            <div className="w-6 h-10 border-2 border-gray-700 group-hover:border-gray-500 rounded-full p-1 transition-all duration-300 relative overflow-hidden">
              {/* Animated scroll dot */}
              <div 
                className="w-1 h-2 bg-gradient-to-b from-[#5DB8FF] to-[#8CD5FF] rounded-full"
                style={{
                  animation: 'scrollDot 2s ease-in-out infinite'
                }}
              ></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#5DB8FF]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating chevron */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              <ChevronDown 
                className="w-4 h-4 text-[#5DB8FF] opacity-60"
                style={{
                  animation: 'chevronFloat 2s ease-in-out infinite'
                }}
              />
            </div>
          </div>
          
          {/* Label with typing effect */}
          <span className="text-xs font-medium tracking-wider uppercase">
            <span 
              className="inline-block"
              style={{
                animation: 'typeWriter 3s steps(6) infinite'
              }}
            >
              Scroll
            </span>
          </span>
          
          {/* Animated line */}
          <div 
            className="w-px h-8 bg-gradient-to-b from-[#5DB8FF]/50 to-transparent"
            style={{
              animation: 'lineGrow 2s ease-in-out infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Auto-animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite ${Math.random() * 8}s, pulse ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
        
        @keyframes titleGlow {
          0%, 100% { 
            filter: brightness(1) drop-shadow(0 0 20px rgba(93, 184, 255, 0.3));
          }
          50% { 
            filter: brightness(1.1) drop-shadow(0 0 30px rgba(93, 184, 255, 0.5));
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scrollDot {
          0% { 
            transform: translateY(0px);
            opacity: 1;
          }
          50% { 
            transform: translateY(12px);
            opacity: 0.3;
          }
          100% { 
            transform: translateY(24px);
            opacity: 0;
          }
        }
        
        @keyframes chevronFloat {
          0%, 100% { 
            transform: translateX(-50%) translateY(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(-50%) translateY(4px);
            opacity: 1;
          }
        }
        
        @keyframes typeWriter {
          0%, 50% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes lineGrow {
          0%, 100% { 
            height: 0px;
            opacity: 0;
          }
          50% { 
            height: 32px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;