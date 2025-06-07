import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Clean background with subtle automatic animations */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22]"></div>
        
        {/* Subtle flowing gradients */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 40%, rgba(93, 184, 255, 0.1) 0%, transparent 50%), 
                          radial-gradient(circle at 70% 60%, rgba(140, 213, 255, 0.08) 0%, transparent 50%)`,
              animation: 'subtleFloat 20s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Minimal geometric elements */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 border border-[#5DB8FF]/10 rotate-45 opacity-30" 
             style={{ animation: 'slowSpin 120s linear infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 border border-[#5DB8FF]/8 rotate-12 opacity-20" 
             style={{ animation: 'slowSpin 150s linear infinite reverse' }}></div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-[#5DB8FF]/8 via-[#5DB8FF]/2 to-transparent rounded-full blur-3xl opacity-60" 
             style={{ animation: 'gentlePulse 15s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-[#8CD5FF]/6 via-[#5DB8FF]/2 to-transparent rounded-full blur-3xl opacity-40" 
             style={{ animation: 'gentlePulse 18s ease-in-out infinite 5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Clean badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Digital Identity</span>
          </div>

          {/* Clean headline with simple fade-in */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white leading-[0.85] tracking-tight">
              <span className="block mb-4">Turn Yourself</span>
              <span className="block mb-4">Into</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Software
              </span>
            </h1>
          </div>

          {/* Clean caption */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF] font-medium">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Clean CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Primary CTA button */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/25 flex items-center gap-3 border border-[#5DB8FF]/30">
              <Zap className="w-5 h-5" />
              <span>Start Training Your Twin</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            {/* Demo button */}
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Watch Demo</span>
            </button>
          </div>

          {/* Clean stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "24/7", label: "Always Active" },
              { value: "∞", label: "Infinite Scale" },
              { value: "100%", label: "Authentic You" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-[#5DB8FF]/5 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-[#5DB8FF] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full p-1 relative">
            <div className="w-1 h-3 bg-[#5DB8FF] rounded-full animate-bounce"></div>
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Custom CSS for clean animations */}
      <style jsx>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero;