import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium metallic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        {/* Subtle metallic neural network pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            
            {/* Metallic neural connections */}
            <g className="animate-pulse" style={{animationDuration: '4s'}}>
              <line x1="200" y1="300" x2="400" y2="250" stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4"/>
              <line x1="400" y1="250" x2="600" y2="350" stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4"/>
              <line x1="600" y1="350" x2="800" y2="280" stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4"/>
              <line x1="300" y1="500" x2="500" y2="450" stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4"/>
              <line x1="500" y1="450" x2="700" y2="550" stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.4"/>
            </g>
            
            {/* Metallic neural nodes */}
            <g>
              <circle cx="200" cy="300" r="3" fill="url(#nodeGradient)" className="animate-pulse"/>
              <circle cx="400" cy="250" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1s'}}/>
              <circle cx="600" cy="350" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2s'}}/>
              <circle cx="800" cy="280" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '3s'}}/>
              <circle cx="300" cy="500" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <circle cx="500" cy="450" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
              <circle cx="700" cy="550" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
            </g>
          </svg>
        </div>

        {/* Premium metallic floating orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-silver-300 to-silver-500 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.04] animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* Metallic depth gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary-900/20 to-primary-900/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Premium headline with metallic gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Turn Yourself Into{' '}
            <span className="bg-gradient-to-r from-silver-200 via-silver-100 to-silver-300 bg-clip-text text-transparent relative">
              Software
              <div className="absolute inset-0 bg-gradient-to-r from-silver-200 via-silver-100 to-silver-300 bg-clip-text text-transparent opacity-50 blur-sm"></div>
            </span>
          </h1>

          {/* Refined subheadline */}
          <p className="text-lg md:text-xl text-silver-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Create an intelligent digital twin that thinks, talks, and acts like you. 
            Scale yourself across everything while you focus on what matters most.
          </p>

          {/* Premium CTA section with metallic styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-silver-600 via-silver-500 to-silver-600 rounded-lg text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-silver-500/25 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              Start Training Your Twin
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
            
            <button className="group text-silver-400 hover:text-silver-200 transition-colors flex items-center gap-2 text-base">
              <div className="w-10 h-10 border border-silver-600 group-hover:border-silver-400 rounded-full flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Premium stats with metallic accents */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-silver-200 to-silver-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-silver-500 text-sm">Always Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-silver-200 to-silver-400 bg-clip-text text-transparent mb-2">∞</div>
              <div className="text-silver-500 text-sm">Infinite Scale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-silver-200 to-silver-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-silver-500 text-sm">Authentic You</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-silver-700 rounded-full p-1 animate-bounce">
          <div className="w-1 h-3 bg-gradient-to-b from-silver-400 to-silver-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;