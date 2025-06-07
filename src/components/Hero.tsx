import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    hours: 0,
    scale: 0,
    authenticity: 0
  });
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animated number counter hook
  const animateNumber = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      callback(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedNumbers.authenticity) {
          // Animate 24 (for 24/7)
          animateNumber(0, 24, 2000, (value) => {
            setAnimatedNumbers(prev => ({ ...prev, hours: value }));
          });

          // Animate scale number (let's use 1000 for visual impact)
          setTimeout(() => {
            animateNumber(0, 1000, 2500, (value) => {
              setAnimatedNumbers(prev => ({ ...prev, scale: value }));
            });
          }, 500);

          // Animate authenticity percentage
          setTimeout(() => {
            animateNumber(0, 100, 2000, (value) => {
              setAnimatedNumbers(prev => ({ ...prev, authenticity: value }));
            });
          }, 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => observer.disconnect();
  }, [animatedNumbers.authenticity]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Minimal, static background with very subtle movement */}
      <div className="absolute inset-0">
        {/* Base gradient - static */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Very subtle static neural mesh - no animation */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 40%, rgba(93, 184, 255, 0.06) 0%, transparent 50%), 
                          radial-gradient(circle at 70% 60%, rgba(140, 213, 255, 0.04) 0%, transparent 50%),
                          radial-gradient(circle at 50% 80%, rgba(93, 184, 255, 0.03) 0%, transparent 50%)`
            }}
          ></div>
        </div>

        {/* Minimal neural network - static lines only */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
            
            {/* Static neural connections - no animation */}
            <g>
              <path 
                d="M100,200 Q300,150 500,200 T900,180" 
                stroke="url(#connectionGradient)" 
                strokeWidth="0.5" 
                fill="none" 
              />
              <path 
                d="M200,400 Q400,350 600,400 T1000,380" 
                stroke="url(#connectionGradient)" 
                strokeWidth="0.5" 
                fill="none" 
              />
              <path 
                d="M150,600 Q350,550 550,600 T950,580" 
                stroke="url(#connectionGradient)" 
                strokeWidth="0.5" 
                fill="none" 
              />
            </g>
            
            {/* Static data nodes - no animation */}
            <g>
              {[...Array(5)].map((_, i) => (
                <circle
                  key={i}
                  cx={150 + (i * 150)}
                  cy={250 + Math.sin(i * 0.8) * 80}
                  r="1"
                  fill="#5DB8FF"
                  opacity="0.3"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Only 2 very subtle, slow glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-[#5DB8FF]/4 via-[#5DB8FF]/1 to-transparent rounded-full blur-3xl" 
             style={{
               animation: 'ultraSlowPulse 60s ease-in-out infinite'
             }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#8CD5FF]/3 via-[#5DB8FF]/1 to-transparent rounded-full blur-3xl" 
             style={{
               animation: 'ultraSlowPulse 80s ease-in-out infinite 30s'
             }}></div>
        
        {/* Minimal depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/3 to-[#0D1117]/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Enhanced premium badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/25 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm hover:border-[#5DB8FF]/40 transition-all duration-300">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full opacity-60"></div>
          </div>

          {/* Perfectly balanced headline */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white leading-[0.85] tracking-tight">
              <span className="block mb-4">Turn Yourself</span>
              <span className="block mb-4">Into</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Software
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

          {/* Enhanced stats with animated numbers */}
          <div ref={numbersRef} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="group text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300 relative">
                <span className="tabular-nums">
                  {animatedNumbers.hours}
                </span>
                <span className="text-2xl">/7</span>
                {/* Very subtle glow effect during animation only */}
                <div className={`absolute inset-0 bg-[#5DB8FF]/8 blur-lg rounded-lg transition-opacity duration-500 ${
                  animatedNumbers.hours > 0 && animatedNumbers.hours < 24 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              <div className="text-gray-400 text-sm font-medium mb-2">Always Active</div>
              <div className="text-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300">⚡</div>
            </div>

            <div className="group text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300 relative">
                {animatedNumbers.scale === 1000 ? (
                  <span>∞</span>
                ) : (
                  <span className="tabular-nums">{animatedNumbers.scale}</span>
                )}
                {/* Very subtle glow effect during animation only */}
                <div className={`absolute inset-0 bg-[#5DB8FF]/8 blur-lg rounded-lg transition-opacity duration-500 ${
                  animatedNumbers.scale > 0 && animatedNumbers.scale < 1000 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              <div className="text-gray-400 text-sm font-medium mb-2">Infinite Scale</div>
              <div className="text-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300">🚀</div>
            </div>

            <div className="group text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300 relative">
                <span className="tabular-nums">
                  {animatedNumbers.authenticity}
                </span>
                <span className="text-2xl">%</span>
                {/* Very subtle glow effect during animation only */}
                <div className={`absolute inset-0 bg-[#5DB8FF]/8 blur-lg rounded-lg transition-opacity duration-500 ${
                  animatedNumbers.authenticity > 0 && animatedNumbers.authenticity < 100 ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
              <div className="text-gray-400 text-sm font-medium mb-2">Authentic You</div>
              <div className="text-xl opacity-40 group-hover:opacity-80 transition-opacity duration-300">🧠</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - bottom right */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors cursor-pointer group">
          <div className="w-5 h-8 border-2 border-gray-700 group-hover:border-gray-600 rounded-full p-1 transition-colors">
            <div className="w-1 h-2 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full opacity-60"></div>
          </div>
          <span className="text-xs font-medium">Scroll</span>
        </div>
      </div>

      {/* Minimal floating particles - only 3, very slow */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#5DB8FF] rounded-full opacity-30"
            style={{
              left: `${20 + (i * 30)}%`,
              top: `${30 + (i * 20)}%`,
              animation: `ultraSlowFloat ${40 + (i * 20)}s ease-in-out infinite ${i * 15}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ultra-calm CSS animations */}
      <style jsx>{`
        @keyframes ultraSlowFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-4px) translateX(-2px); }
          75% { transform: translateY(-10px) translateX(6px); }
        }
        
        @keyframes ultraSlowPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default Hero;