import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Users, 
  Mic, 
  Calendar, 
  FileStack, 
  Zap, 
  Globe, 
  Clock,
  ArrowRight,
  Sparkles,
  Play,
  ChevronRight,
  Star,
  Shield,
  Activity,
  Layers,
  Target,
  Infinity
} from 'lucide-react';

const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced neural mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="premiumGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic neural pathways */}
        {[...Array(12)].map((_, i) => (
          <path 
            key={i}
            d={`M${80 + i * 100},${150 + Math.sin(i * 0.6) * 120} Q${250 + i * 80},${100 + Math.cos(i * 0.8) * 100} ${400 + i * 90},${150 + Math.sin(i * 1.4) * 140} T${650 + i * 70},${130 + Math.cos(i * 1.8) * 120}`}
            stroke="url(#neuralGlow)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#premiumGlow)"
            className="animate-pulse"
            style={{
              animationDuration: `${4 + i * 0.6}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Enhanced neural nodes */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={120 + (i * 60)}
            cy={200 + Math.sin(i * 0.9) * 160}
            r="2.5"
            fill="url(#neuralGlow)"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3.5s'
            }}
            filter="url(#premiumGlow)"
          />
        ))}
      </svg>

      {/* Premium floating elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 12}s ease-in-out infinite ${Math.random() * 8}s`,
            animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const FloatingOrb = ({ delay = 0, size = 'w-96 h-96', position = 'top-1/4 left-1/6', opacity = 'opacity-10' }) => {
  return (
    <div className={`absolute ${position} ${size} pointer-events-none ${opacity}`}>
      <div 
        className="w-full h-full bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: `${delay}s`, animationDuration: '8s' }}
      />
    </div>
  );
};

const FeatureCard = ({ feature, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium glassmorphism card */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:shadow-2xl group-hover:shadow-[#5DB8FF]/20 h-full">
        
        {/* Enhanced floating icon */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
            <feature.icon className="w-8 h-8 text-white" />
            
            {/* Orbiting particles on hover */}
            {isHovered && (
              <>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    style={{
                      animation: `orbit ${2 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 0.3}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(40px)`
                    }}
                  />
                ))}
              </>
            )}
          </div>
          
          {/* Enhanced glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
        </div>

        {/* Enhanced content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#8CD5FF] transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Premium feature badge */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm group-hover:bg-white/15 transition-colors duration-300">
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-white">{feature.badge}</span>
            </div>
            
            {/* Feature rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Interactive learn more */}
          <button className="group/btn w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 hover:border-white/30 rounded-xl text-white text-sm font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm opacity-0 group-hover:opacity-100">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Premium hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/5 via-transparent to-[#8CD5FF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Enhanced border animation */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#5DB8FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
        
        {/* Corner accents */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#5DB8FF]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#8CD5FF]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TechStack = ({ isVisible }) => {
  const technologies = [
    { name: "GPT-4o", category: "AI Core", icon: Brain },
    { name: "LangGraph", category: "Workflow", icon: Layers },
    { name: "Vector DB", category: "Memory", icon: FileStack },
    { name: "ElevenLabs", category: "Voice", icon: Mic },
    { name: "WebRTC", category: "Real-time", icon: Activity },
    { name: "Next.js", category: "Frontend", icon: Globe }
  ];

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Powered by <span className="text-[#5DB8FF]">Premium Tech Stack</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-lg flex items-center justify-center">
                <tech.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [techVisible, setTechVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "Neural Clone Engine",
      description: "Advanced AI that learns passively from your emails, meetings, chats, content & code to create an authentic thinking copy of you.",
      gradient: "from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF]",
      badge: "AI Learning"
    },
    {
      icon: Users,
      title: "Persona Splitter",
      description: "One brain, infinite roles. Create specialized mini-you's — Student You, Founder You, Friend You — each with unique memory and voice.",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      badge: "Multi-Role"
    },
    {
      icon: Mic,
      title: "Voice Twin Technology",
      description: "Real-time or pre-generated voice cloning. Speak in meetings or narrate content in your exact tone without ever showing up.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      badge: "Voice Sync"
    },
    {
      icon: Calendar,
      title: "Auto Meeting Attender",
      description: "Let your Twin show up to meetings, take notes, talk like you, and follow up — without you ever logging in.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      badge: "Auto Attend"
    },
    {
      icon: FileStack,
      title: "Isolated Memory Stacks",
      description: "Every persona has dedicated memory and context — like having multiple versions of yourself for different parts of life.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      badge: "Smart Memory"
    },
    {
      icon: Zap,
      title: "Intelligent Task Delegation",
      description: "Assign tasks directly to specific personas — your Twins handle them in your tone and decision-making style.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      badge: "Smart Delegation"
    },
    {
      icon: Globe,
      title: "Unified Web Interface",
      description: "Communicate with your Twin via chat or voice. Switch roles, review actions, or approve decisions from a premium dashboard.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      badge: "Web Sync"
    },
    {
      icon: Clock,
      title: "24/7 Digital Presence",
      description: "Always online, infinitely scalable, never tired. Your Twin maintains your presence around the clock with premium reliability.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      badge: "Always On"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, privacy-first architecture, and complete data sovereignty. Your digital self is protected.",
      gradient: "from-gray-500 via-slate-600 to-gray-700",
      badge: "Secure"
    },
    {
      icon: Target,
      title: "Precision Learning",
      description: "Advanced reinforcement learning that fine-tunes your Twin's behavior based on feedback and outcomes.",
      gradient: "from-rose-500 via-pink-500 to-red-500",
      badge: "ML Powered"
    },
    {
      icon: Layers,
      title: "Multi-Platform Sync",
      description: "Seamlessly integrate across all your tools — Slack, Zoom, Email, Discord, and custom APIs.",
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      badge: "Universal"
    },
    {
      icon: Infinity,
      title: "Infinite Scalability",
      description: "From personal use to enterprise deployment. Scale your digital presence without limits or performance degradation.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      badge: "Limitless"
    }
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible, threshold: 0.3 },
      { ref: sectionRef, setter: setIsVisible, threshold: 0.1 },
      { ref: techRef, setter: setTechVisible, threshold: 0.2 },
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
      {/* Enhanced neural network background */}
      <NeuralNetworkBackground />
      
      {/* Premium floating orbs */}
      <FloatingOrb delay={0} size="w-96 h-96" position="top-1/6 left-1/12" opacity="opacity-8" />
      <FloatingOrb delay={3} size="w-80 h-80" position="bottom-1/6 right-1/12" opacity="opacity-6" />
      <FloatingOrb delay={6} size="w-64 h-64" position="top-2/3 left-1/2" opacity="opacity-4" />
      <FloatingOrb delay={9} size="w-72 h-72" position="top-1/3 right-1/3" opacity="opacity-5" />

      {/* Enhanced Header Section */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge with enhanced styling */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300 shadow-lg shadow-[#5DB8FF]/20">
              <Sparkles className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>Premium Digital Intelligence</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced main headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">Your Digital Self.</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Superpowered.
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Enhanced subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Each NeuroTwin feature is engineered to extend your capabilities and{' '}
              <span className="text-[#8CD5FF] font-medium">multiply your impact.</span>
            </p>

            {/* Premium stats showcase */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              {[
                { value: "99.9%", label: "Accuracy", icon: Target },
                { value: "24/7", label: "Availability", icon: Clock },
                { value: "∞", label: "Scalability", icon: Infinity }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5DB8FF]/20 to-[#8CD5FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <stat.icon className="w-8 h-8 text-[#5DB8FF]" />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced scroll indicator */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer group">
                <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-gray-500 rounded-full p-1 transition-colors">
                  <div className="w-1 h-3 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-medium">Explore Premium Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section ref={sectionRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                feature={feature}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techRef} className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <TechStack isVisible={techVisible} />
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Premium orbital animation container */}
            <div className="relative mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
                  Digital Empire?
                </span>
              </h2>
              
              {/* Enhanced orbiting elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#5DB8FF] rounded-full opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `orbit ${8 + i * 2}s linear infinite`,
                      animationDelay: `${i * 1}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${120 + i * 15}px)`
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the revolution of digital consciousness. Create your intelligent twin with premium features.
            </p>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 overflow-hidden border border-[#5DB8FF]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Start Premium Training</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </button>
              
              <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
                <div className="w-14 h-14 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10 relative overflow-hidden">
                  <Play className="w-6 h-6 ml-0.5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Watch Premium Demo</span>
              </button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-400 mb-4">Trusted by premium innovators at</div>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["TechCorp", "InnovateAI", "FutureWorks", "DigitalEdge", "NextGen"].map((company, index) => (
                  <div key={index} className="text-gray-500 font-medium text-lg hover:text-gray-400 transition-colors">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(15px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 40px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 40px)); }
        }
      `}</style>
    </div>
  );
};

export default Features;