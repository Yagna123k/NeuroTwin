import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117]">
        {/* Neural network pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#5DB8FF" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            
            {/* Neural connections */}
            <g className="animate-pulse">
              <line x1="100" y1="200" x2="300" y2="150" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="300" y1="150" x2="500" y2="250" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="500" y1="250" x2="700" y2="180" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="700" y1="180" x2="900" y2="300" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="200" y1="400" x2="400" y2="350" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="400" y1="350" x2="600" y2="450" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="600" y1="450" x2="800" y2="380" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="150" y1="600" x2="350" y2="550" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="350" y1="550" x2="550" y2="650" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="550" y1="650" x2="750" y2="580" stroke="url(#connectionGradient)" strokeWidth="1"/>
              <line x1="750" y1="580" x2="950" y2="700" stroke="url(#connectionGradient)" strokeWidth="1"/>
            </g>
            
            {/* Neural nodes */}
            <g>
              <circle cx="100" cy="200" r="4" fill="url(#nodeGradient)" className="animate-pulse"/>
              <circle cx="300" cy="150" r="6" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <circle cx="500" cy="250" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1s'}}/>
              <circle cx="700" cy="180" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
              <circle cx="900" cy="300" r="6" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2s'}}/>
              <circle cx="200" cy="400" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
              <circle cx="400" cy="350" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
              <circle cx="600" cy="450" r="6" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.3s'}}/>
              <circle cx="800" cy="380" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
              <circle cx="150" cy="600" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
              <circle cx="350" cy="550" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
              <circle cx="550" cy="650" r="6" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
              <circle cx="750" cy="580" r="4" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '1.7s'}}/>
              <circle cx="950" cy="700" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{animationDelay: '2.2s'}}/>
            </g>
          </svg>
        </div>

        {/* Floating orbs with improved positioning */}
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%235DB8FF%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0D1117]/50 to-[#0D1117]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Enhanced main headline with better typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Turn Yourself Into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
                Software
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent blur-sm opacity-50"></div>
            </span>
          </h1>

          {/* Enhanced subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
            A living, thinking, talking digital version of you — that works while you don't.
          </p>

          {/* Enhanced CTA section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4">
              <Zap className="w-6 h-6 group-hover:animate-pulse" />
              Start Training Your Twin
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </button>
            
            <button className="group text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-white flex items-center gap-2">
              Watch Demo
              <div className="w-8 h-8 border border-gray-600 group-hover:border-white rounded-full flex items-center justify-center transition-colors">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-600 group-hover:border-l-white border-y-[4px] border-y-transparent ml-0.5 transition-colors"></div>
              </div>
            </button>
          </div>

          {/* Enhanced stats with better visual hierarchy */}
          <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-[#5DB8FF] mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">Always Active</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-[#5DB8FF] mb-3 group-hover:scale-110 transition-transform duration-300">∞</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">Infinite Scale</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-[#5DB8FF] mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-400 text-sm md:text-base font-medium">You Authentic</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
          <span className="text-xs font-medium opacity-75 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full p-1 group-hover:border-[#5DB8FF] transition-colors">
            <div className="w-1 h-3 bg-current rounded-full animate-pulse group-hover:bg-[#5DB8FF]"></div>
          </div>
          <ArrowDown className="w-4 h-4 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;