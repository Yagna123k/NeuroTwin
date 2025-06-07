import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Sparkles, 
  Users, 
  Zap, 
  ArrowRight, 
  Quote,
  Heart,
  Infinity,
  Target,
  Globe,
  ChevronRight,
  Play,
  Star,
  Code,
  Lightbulb,
  Shield
} from 'lucide-react';

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient neural patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing neural connections */}
        {[...Array(12)].map((_, i) => (
          <path 
            key={i}
            d={`M${50 + i * 100},${150 + Math.sin(i * 0.5) * 100} Q${200 + i * 80},${100 + Math.cos(i * 0.7) * 80} ${350 + i * 90},${150 + Math.sin(i * 1.2) * 120} T${600 + i * 70},${130 + Math.cos(i * 1.5) * 100}`}
            stroke="url(#neuralGlow)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#softGlow)"
            className="animate-pulse"
            style={{
              animationDuration: `${6 + i * 0.8}s`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
        
        {/* Neural nodes */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={100 + (i * 60)}
            cy={200 + Math.sin(i * 0.8) * 150}
            r="2.5"
            fill="url(#neuralGlow)"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}
            filter="url(#softGlow)"
          />
        ))}
      </svg>

      {/* Floating ambient orbs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[#5DB8FF]/10 via-[#8CD5FF]/5 to-[#5DB8FF]/10 blur-3xl"
          style={{
            width: `${120 + Math.random() * 200}px`,
            height: `${120 + Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${15 + Math.random() * 20}s ease-in-out infinite ${Math.random() * 10}s`,
            animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const PhilosophyCard = ({ philosophy, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:scale-105 h-full">
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${philosophy.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
          <philosophy.icon className="w-8 h-8 text-white" />
        </div>

        {/* Quote */}
        <blockquote className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#8CD5FF] transition-colors duration-300">
          "{philosophy.quote}"
        </blockquote>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {philosophy.description}
        </p>

        {/* Hover effects */}
        {isHovered && (
          <>
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 150}ms`
                  }}
                />
              ))}
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${philosophy.gradient} rounded-3xl blur-xl opacity-20 -z-10`}></div>
          </>
        )}
      </div>
    </div>
  );
};

const FounderCard = ({ founder, index, isVisible }) => {
  const [showQuote, setShowQuote] = useState(false);
  
  return (
    <div
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 300}ms` }}
      onMouseEnter={() => setShowQuote(true)}
      onMouseLeave={() => setShowQuote(false)}
    >
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:scale-105 h-full overflow-hidden">
        
        {/* Avatar */}
        <div className="relative mb-6">
          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-3xl font-black text-white">{founder.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          
          {/* Status indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#8CD5FF] transition-colors duration-300">
            {founder.name}
          </h3>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">{founder.role}</span>
          </div>
          
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {founder.bio}
          </p>
        </div>

        {/* Quote overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/20 backdrop-blur-sm rounded-3xl flex items-center justify-center p-8 transition-all duration-500 ${
          showQuote ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="text-center">
            <Quote className="w-8 h-8 text-[#5DB8FF] mx-auto mb-4" />
            <blockquote className="text-xl font-bold text-white italic leading-relaxed">
              "{founder.quote}"
            </blockquote>
          </div>
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index, isVisible }) => {
  return (
    <div
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:scale-105">
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <item.icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#8CD5FF] transition-colors duration-300">
            {item.title}
          </h4>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {item.description}
          </p>
        </div>

        {/* Arrow */}
        {index < 4 && (
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#5DB8FF]/20 rounded-full flex items-center justify-center border border-[#5DB8FF]/40">
            <ArrowRight className="w-3 h-3 text-[#5DB8FF]" />
          </div>
        )}

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);
  const [philosophyVisible, setPhilosophyVisible] = useState(false);
  const [foundersVisible, setFoundersVisible] = useState(false);
  const [futureVisible, setFutureVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);
  const futureRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const philosophies = [
    {
      icon: Brain,
      quote: "The power of you — multiplied.",
      description: "Your consciousness shouldn't be limited to one body, one voice, or one moment in time.",
      gradient: "from-[#5DB8FF] to-[#8CD5FF]"
    },
    {
      icon: Heart,
      quote: "You are your greatest product.",
      description: "The most valuable thing you can build is a better version of yourself that works while you rest.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Infinity,
      quote: "Digital evolution, powered by identity.",
      description: "Technology should amplify who you are, not replace what makes you human.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Sparkles,
      quote: "AI with emotion, memory, and purpose.",
      description: "Intelligence without personality is just computation. We build AI that feels like you.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const founders = [
    {
      name: "Yagna Kusumanchi",
      role: "Founder & CEO",
      bio: "Tech visionary, author, and creative entrepreneur — Yagna has been coding since his childhood and now builds products that feel like science fiction. NeuroTwin is his boldest step toward redefining what it means to be human in an AI-driven world.",
      quote: "I'm not building a tool. I'm building a version of me.",
      gradient: "from-[#5DB8FF] to-[#8CD5FF]"
    },
    {
      name: "Arjun Kotha",
      role: "Co-Founder & Product Architect",
      bio: "With deep roots in product thinking and automation, Arjun shapes the intelligence behind NeuroTwin's personas. He believes every person deserves a co-pilot that feels like an extension of their mind.",
      quote: "You shouldn't work alone when your clone can help.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const timeline = [
    {
      title: "Prototype",
      description: "First working digital clone",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Personas",
      description: "Multi-role identity splitting",
      icon: Users,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-Time Voice",
      description: "Live voice synthesis",
      icon: Play,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Marketplace",
      description: "Community of digital selves",
      icon: Globe,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Immortality Framework",
      description: "Digital consciousness preservation",
      icon: Infinity,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible, threshold: 0.3 },
      { ref: visionRef, setter: setVisionVisible, threshold: 0.2 },
      { ref: philosophyRef, setter: setPhilosophyVisible, threshold: 0.1 },
      { ref: foundersRef, setter: setFoundersVisible, threshold: 0.1 },
      { ref: futureRef, setter: setFutureVisible, threshold: 0.1 },
      { ref: ctaRef, setter: setCtaVisible, threshold: 0.3 }
    ];

    observers.forEach(({ ref, setter, threshold }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observers.forEach(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Neural background */}
      <NeuralBackground />

      {/* Hero Section - The Vision */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Brain className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>The Future of Identity</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">We're building the</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                future of identity
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Not just AI. Not just assistants. We're creating your{' '}
              <span className="text-[#8CD5FF] font-medium">digital self</span> — a version of you that thinks, speaks, and works while you rest.
            </p>

            {/* Interactive brain visualization */}
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/5 rounded-full animate-pulse blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full flex items-center justify-center shadow-2xl">
                <Brain className="w-20 h-20 text-white animate-pulse" />
              </div>
              
              {/* Orbiting consciousness points */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `orbit ${10 + i * 2}s linear infinite`,
                    animationDelay: `${i * 1.25}s`,
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(100px)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section ref={visionRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${visionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Why <span className="text-[#5DB8FF]">NeuroTwin</span>?
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Today's AI helps you <span className="text-white font-medium">do more</span>. But we believe it should help you{' '}
                  <span className="text-[#8CD5FF] font-bold">be more</span>.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed">
                  NeuroTwin is our answer to a world where people wear too many hats. Founder, student, creator, friend — we all need intelligent versions of ourselves that can scale with our lives.
                </p>
              </div>
            </div>

            {/* Role visualization */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              {[
                { label: "Founder You", icon: Target, color: "text-blue-400" },
                { label: "Student You", icon: Lightbulb, color: "text-green-400" },
                { label: "Creator You", icon: Sparkles, color: "text-purple-400" },
                { label: "Friend You", icon: Heart, color: "text-pink-400" }
              ].map((role, index) => (
                <div key={index} className="group flex flex-col items-center cursor-pointer">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 border-2 border-gray-600 group-hover:border-[#5DB8FF] ${role.color}`}>
                    <role.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{role.label}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-gray-400">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
                <span className="text-sm">All connected to your core intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section ref={philosophyRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our <span className="text-[#5DB8FF]">Philosophy</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our vision of digital consciousness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((philosophy, index) => (
              <PhilosophyCard
                key={index}
                philosophy={philosophy}
                index={index}
                isVisible={philosophyVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section ref={foundersRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Meet the <span className="text-[#5DB8FF]">Founders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The visionaries building the future of human-AI collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <FounderCard
                key={index}
                founder={founder}
                index={index}
                isVisible={foundersVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section ref={futureRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              This Is Just the <span className="text-[#5DB8FF]">Beginning</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              NeuroTwin is evolving — into a platform, into a movement. We're starting with productivity. But our future holds AI therapy personas, digital legacies, and agents that can outlast us.
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isVisible={futureVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Quote */}
            <div className="relative mb-16">
              <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed italic">
                "This isn't just tech.{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent font-medium">
                  It's the next version of you.
                </span>"
              </blockquote>
              
              {/* Matrix-style particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 mx-auto overflow-hidden border border-[#5DB8FF]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <Brain className="w-6 h-6 group-hover:animate-pulse" />
                <span>Train Your Twin</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-4px) rotate(180deg); }
          75% { transform: translateY(-20px) translateX(12px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 100px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 100px)); }
        }
      `}</style>
    </div>
  );
};

export default About;