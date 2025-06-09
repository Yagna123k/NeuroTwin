import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star, Brain, Code, Cpu, Network } from 'lucide-react';

const AnimatedNumber = ({ value, duration = 3000, delay = 0, shouldStart = false }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const timer = setTimeout(() => {
      setHasStarted(true);
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, shouldStart]);

  useEffect(() => {
    if (!hasStarted) return;

    if (value === "∞") {
      // Special infinity animation with morphing effect
      const symbols = ["0", "8", "∞"];
      let currentIndex = 0;
      const morphTimer = setInterval(() => {
        setDisplayValue(symbols[currentIndex]);
        currentIndex++;
        if (currentIndex >= symbols.length) {
          clearInterval(morphTimer);
          setTimeout(() => setIsAnimating(false), 500);
        }
      }, 400);
      return () => clearInterval(morphTimer);
    }

    if (value === "24/7") {
      // Enhanced 24/7 animation with hour progression
      let current = 0;
      const increment = 24 / (duration / 60);
      const timer = setInterval(() => {
        current += increment;
        if (current >= 24) {
          setDisplayValue("24/7");
          clearInterval(timer);
          setTimeout(() => setIsAnimating(false), 500);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, 60);
      return () => clearInterval(timer);
    }

    if (value === "100%") {
      // Smooth percentage animation with easing
      let current = 0;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Cubic ease-out for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(easeOut * 100);
        
        setDisplayValue(current + "%");
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => setIsAnimating(false), 500);
        }
      };
      
      requestAnimationFrame(animate);
      return;
    }

    // Default number animation with enhanced easing
    const target = parseInt(value) || 0;
    let current = 0;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Elastic ease-out for premium feel
      const elasticOut = progress === 1 ? 1 : 
        1 - Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * (2 * Math.PI) / 3);
      
      current = Math.floor(elasticOut * target);
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsAnimating(false), 500);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration, hasStarted]);

  return (
    <div className="relative inline-flex items-center justify-center min-h-[4rem]">
      <span className={`font-black text-4xl md:text-5xl transition-all duration-500 transform ${
        isAnimating 
          ? 'scale-110 text-[#5DB8FF] drop-shadow-[0_0_20px_rgba(93,184,255,0.5)]' 
          : 'scale-100 text-white'
      }`}>
        {displayValue}
      </span>
      
      {isAnimating && (
        <>
          {/* Enhanced glowing backdrop */}
          <div className="absolute inset-0 bg-[#5DB8FF] blur-2xl opacity-40 animate-pulse rounded-full"></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-pulse opacity-60"></div>
        </>
      )}
    </div>
  );
};

const FloatingTechOrb = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [Brain, Code, Cpu, Network];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="absolute top-24 right-8 xl:right-16 hidden lg:block z-20">
      {/* Main orb container */}
      <div className="relative w-28 h-28">
        {/* Central orb with pulsing glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/5 border border-[#5DB8FF]/30 backdrop-blur-sm">
          {/* Rotating outer ring */}
          <div className="absolute inset-1 rounded-full border-2 border-dashed border-[#5DB8FF]/40 animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Inner rotating ring */}
          <div className="absolute inset-3 rounded-full border border-[#8CD5FF]/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          
          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className={`w-7 h-7 absolute transition-all duration-500 ${
                  activeIcon === index
                    ? 'text-[#5DB8FF] scale-100 opacity-100'
                    : 'text-[#5DB8FF]/30 scale-75 opacity-0'
                }`}
              />
            ))}
          </div>
          
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#5DB8FF]/20 animate-pulse blur-xl"></div>
        </div>

        {/* Orbiting satellites */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
              animation: `orbit ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
              transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(50px)`
            }}
          >
            <div className="absolute inset-0 bg-[#5DB8FF] rounded-full blur-sm opacity-60"></div>
          </div>
        ))}

        {/* Data streams */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-6 bg-gradient-to-b from-[#5DB8FF]/60 to-transparent"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                animation: `dataStream ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(70px)`
              }}
            ></div>
          ))}
        </div>

        {/* Floating text indicators */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="text-xs text-[#5DB8FF] font-medium opacity-80 animate-pulse whitespace-nowrap">
            AI Processing
          </div>
        </div>
        
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="text-xs text-gray-400 font-medium opacity-60 whitespace-nowrap">
            Neural Network
          </div>
        </div>

        {/* Connection lines to main content */}
        <div className="absolute top-1/2 -left-16 w-12 h-px bg-gradient-to-r from-transparent to-[#5DB8FF]/30"></div>
        <div className="absolute top-1/2 -left-12 w-1.5 h-1.5 bg-[#5DB8FF]/40 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

const EnhancedCTAButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <button 
      className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-3 overflow-hidden border border-[#5DB8FF]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={createRipple}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
      
      {/* Energy wave effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '0.6s'
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Animated icon */}
        <div className="relative">
          <Zap className={`w-5 h-5 transition-all duration-300 ${
            isHovered ? 'animate-pulse scale-110' : ''
          }`} />
          
          {/* Orbiting particles around icon */}
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `orbit ${1.5 + i * 0.5}s linear infinite`,
                    animationDelay: `${i * 0.2}s`,
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(15px)`
                  }}
                />
              ))}
            </>
          )}
        </div>
        
        {/* Text */}
        <span className="relative">
          Start Training Your Twin
          {/* Underline animation */}
          <div className={`absolute bottom-0 left-0 h-0.5 bg-white/60 transition-all duration-500 ${
            isHovered ? 'w-full' : 'w-0'
          }`}></div>
        </span>
        
        {/* Arrow with trail effect */}
        <div className="relative">
          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
            isHovered ? 'translate-x-1 scale-110' : 'translate-x-0 scale-100'
          }`} />
          
          {/* Arrow trail effect */}
          {isHovered && (
            <>
              <ArrowRight className="absolute top-0 left-0 w-5 h-5 opacity-50 animate-pulse" style={{ animationDelay: '0.1s' }} />
              <ArrowRight className="absolute top-0 left-0 w-5 h-5 opacity-25 animate-pulse" style={{ animationDelay: '0.2s' }} />
            </>
          )}
        </div>
      </div>

      {/* Outer glow effects */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
      
      {/* Energy field visualization */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-3 bg-gradient-to-b from-white/60 to-transparent"
              style={{
                left: `${20 + i * 12}%`,
                top: '20%',
                animation: `energyStream ${1 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Floating energy particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/80 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float ${2 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 1}s`
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
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

      {/* Floating Tech Orb - Now positioned at top right */}
      <FloatingTechOrb />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Enhanced premium badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/25 rounded-full text-[#5DB8FF] text-sm font-medium mb-8 backdrop-blur-sm hover:border-[#5DB8FF]/40 transition-all duration-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>The Future of Digital Identity</span>
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
          </div>

          {/* Perfectly balanced headline */}
          <div className="max-w-6xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white leading-[0.85] tracking-tight">
              <span className="block mb-4">Turn Yourself</span>
              <span className="block mb-4">Into</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Software
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/50 via-[#8CD5FF] to-[#5DB8FF]/50 blur-2xl opacity-20 animate-pulse"></div>
              </span>
            </h1>
          </div>

          {/* Improved caption with better hierarchy */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Create an intelligent digital twin that thinks, talks, and acts like you.{' '}
            <span className="text-[#5DB8FF] font-medium">Scale yourself infinitely</span> while you focus on what only you can do.
          </p>

          {/* Enhanced CTA section with new button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* Enhanced Premium CTA button */}
            <EnhancedCTAButton />
            
            {/* Enhanced demo button */}
            <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10 relative overflow-hidden">
                <Play className="w-5 h-5 ml-0.5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Watch Demo</span>
            </button>
          </div>

          {/* Premium stats with enhanced animated numbers */}
          <div ref={statsRef} className="grid grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { 
                value: "24/7", 
                label: "Always Active", 
                icon: "⚡", 
                delay: 600,
                description: "Never sleeps, always working"
              },
              { 
                value: "∞", 
                label: "Infinite Scale", 
                icon: "🚀", 
                delay: 1000,
                description: "Limitless possibilities"
              },
              { 
                value: "100%", 
                label: "Authentic You", 
                icon: "🧠", 
                delay: 1400,
                description: "Perfectly captures your essence"
              }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                {/* Enhanced card with premium styling */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-800/20 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm hover:border-[#5DB8FF]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-b hover:from-[#5DB8FF]/5 hover:to-[#5DB8FF]/10 min-h-[200px] flex flex-col items-center justify-center text-center">
                  
                  {/* Floating icon with animation */}
                  <div className="absolute top-4 right-4 text-xl md:text-2xl opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                  
                  {/* Animated number with premium effects */}
                  <div className="mb-4">
                    <AnimatedNumber 
                      value={stat.value} 
                      duration={2500} 
                      delay={stat.delay}
                      shouldStart={isStatsVisible}
                    />
                  </div>
                  
                  {/* Enhanced labels */}
                  <div className="text-[#5DB8FF] text-sm md:text-base font-bold mb-2 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors max-w-[150px]">
                    {stat.description}
                  </div>

                  {/* Premium glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/0 via-[#5DB8FF]/5 to-[#5DB8FF]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Subtle border animation */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animation: `float ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
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

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-5px); }
          75% { transform: translateY(-30px) translateX(15px); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(15px); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(15px); }
        }
        
        @keyframes dataStream {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(70px) scaleY(0); }
          50% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation)) translateX(70px) scaleY(1); }
        }
        
        @keyframes energyStream {
          0% { transform: translateY(0) scaleY(0); opacity: 0; }
          50% { transform: translateY(-10px) scaleY(1); opacity: 1; }
          100% { transform: translateY(-20px) scaleY(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;