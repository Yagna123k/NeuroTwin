import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

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
          
          {/* Enhanced premium badge with better typography */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#5DB8FF]/15 via-[#8CD5FF]/10 to-[#5DB8FF]/15 border border-[#5DB8FF]/30 rounded-full text-[#5DB8FF] text-sm font-semibold mb-10 backdrop-blur-sm hover:border-[#5DB8FF]/50 transition-all duration-300 shadow-lg shadow-[#5DB8FF]/10">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="tracking-wide">The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
          </div>

          {/* Revolutionary headline with enhanced typography */}
          <div className="max-w-7xl mx-auto mb-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.8] tracking-tighter">
              {/* Enhanced text shadow and letter spacing */}
              <span className="block mb-6 drop-shadow-2xl" style={{
                textShadow: '0 0 40px rgba(93, 184, 255, 0.3), 0 0 80px rgba(93, 184, 255, 0.1)'
              }}>
                Turn Yourself
              </span>
              
              <span className="block mb-6 drop-shadow-2xl" style={{
                textShadow: '0 0 40px rgba(93, 184, 255, 0.3), 0 0 80px rgba(93, 184, 255, 0.1)'
              }}>
                Into
              </span>
              
              {/* Enhanced "Software" with multiple effects */}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] via-[#FFFFFF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]">
                  Software
                </span>
                
                {/* Multiple glow layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#FFFFFF] to-[#5DB8FF] blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Subtle particle effect around the word */}
                <div className="absolute -inset-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </span>
            </h1>
          </div>

          {/* Enhanced subtitle with better typography hierarchy */}
          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light tracking-wide">
              Create an intelligent digital twin that{' '}
              <span className="text-white font-medium">thinks</span>,{' '}
              <span className="text-white font-medium">talks</span>, and{' '}
              <span className="text-white font-medium">acts</span> like you.
            </p>
            <p className="text-lg md:text-xl text-[#5DB8FF] font-semibold mt-4 tracking-wide">
              Scale yourself infinitely while you focus on what only you can do.
            </p>
          </div>

          {/* Enhanced CTA section with better spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            {/* Premium CTA button with enhanced effects */}
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/40 flex items-center gap-4 overflow-hidden border border-[#5DB8FF]/40 shadow-xl shadow-[#5DB8FF]/20">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-4">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                <span className="tracking-wide">Start Training Your Twin</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Enhanced outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </button>
            
            {/* Enhanced demo button */}
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-4">
              <div className="w-14 h-14 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10 relative overflow-hidden shadow-lg">
                <Play className="w-6 h-6 ml-0.5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-semibold text-lg tracking-wide">Watch Demo</span>
            </button>
          </div>

          {/* Enhanced stats with premium styling */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "24/7", label: "Always Active", icon: "⚡", color: "from-blue-500 to-cyan-500" },
              { value: "∞", label: "Infinite Scale", icon: "🚀", color: "from-purple-500 to-pink-500" },
              { value: "100%", label: "Authentic You", icon: "🧠", color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-[#5DB8FF]/5 hover:to-[#8CD5FF]/5 transition-all duration-500 border border-transparent hover:border-[#5DB8FF]/20 backdrop-blur-sm">
                <div className={`text-4xl md:text-5xl font-black text-white mb-3 group-hover:bg-gradient-to-r group-hover:${stat.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500`} style={{
                  textShadow: '0 0 20px rgba(93, 184, 255, 0.3)'
                }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-semibold mb-3 tracking-wide uppercase">{stat.label}</div>
                <div className="text-2xl opacity-50 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-110 transform">{stat.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - bottom right */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center gap-3 text-gray-500 hover:text-gray-400 transition-colors cursor-pointer group">
          <div className="w-6 h-10 border-2 border-gray-700 group-hover:border-gray-600 rounded-full p-1 transition-colors shadow-lg">
            <div className="w-2 h-3 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs font-semibold tracking-wide uppercase">Scroll</span>
        </div>
      </div>

      {/* Auto-animated floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      {/* Custom CSS for enhanced animations */}
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
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default Hero;