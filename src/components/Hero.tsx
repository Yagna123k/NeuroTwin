import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Refined background with subtle effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117]">
        {/* Subtle neural network pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0"/>
              </radialGradient>
            </defs>
            
            {/* Minimal neural connections */}
            <g className="animate-pulse" style={{animationDuration: '4s'}}>
              <line x1="200" y1="300" x2="400" y2="250" stroke="#5DB8FF" strokeWidth="0.5" opacity="0.3"/>
              <line x1="400" y1="250" x2="600" y2="350" stroke="#5DB8FF" strokeWidth="0.5" opacity="0.3"/>
              <line x1="600" y1="350" x2="800" y2="280" stroke="#5DB8FF" strokeWidth="0.5" opacity="0.3"/>
              <line x1="300" y1="500" x2="500" y2="450" stroke="#5DB8FF" strokeWidth="0.5" opacity="0.3"/>
              <line x1="500" y1="450" x2="700" y2="550" stroke="#5DB8FF" strokeWidth="0.5" opacity="0.3"/>
            </g>
            
            {/* Minimal neural nodes */}
            <g>
              <circle cx="200" cy="300" r="2" fill="url(#nodeGradient)" className="animate-pulse"/>
              <circle cx="400" cy="250" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1s'}}/>
              <circle cx="600" cy="350" r="2" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2s'}}/>
              <circle cx="800" cy="280" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '3s'}}/>
              <circle cx="300" cy="500" r="2" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <circle cx="500" cy="450" r="3" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
              <circle cx="700" cy="550" r="2" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
            </g>
          </svg>
        </div>

        {/* Subtle floating orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-[0.06] animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0D1117]/30 to-[#0D1117]/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Refined headline with better hierarchy */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Turn Yourself Into{' '}
            <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
              Software
            </span>
          </h1>

          {/* Refined subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Create an intelligent digital twin that thinks, talks, and acts like you. 
            Scale yourself across everything while you focus on what matters most.
          </p>

          {/* Refined CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-lg text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#5DB8FF]/25 flex items-center gap-3">
              Start Training Your Twin
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
            
            <button className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-base">
              <div className="w-10 h-10 border border-gray-600 group-hover:border-gray-400 rounded-full flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Refined stats with subtle design */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-500 text-sm">Always Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-500 text-sm">Infinite Scale</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-500 text-sm">Authentic You</div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-gray-700 rounded-full p-1 animate-bounce">
          <div className="w-1 h-3 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;