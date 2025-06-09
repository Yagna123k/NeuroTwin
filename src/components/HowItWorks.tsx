import React, { useState, useEffect, useRef } from 'react';
import { 
  Eye, 
  Brain, 
  Users, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Play, 
  Sparkles,
  Monitor,
  Database,
  Mic,
  MessageSquare,
  Activity,
  ChevronRight,
  Circle,
  ArrowDown,
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  Infinity
} from 'lucide-react';

const NeuralNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated neural connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.2"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic neural pathways */}
        {[...Array(8)].map((_, i) => (
          <path 
            key={i}
            d={`M${100 + i * 150},${200 + Math.sin(i) * 100} Q${300 + i * 100},${150 + Math.cos(i) * 80} ${500 + i * 120},${200 + Math.sin(i * 1.5) * 120} T${900 + i * 50},${180 + Math.cos(i * 2) * 100}`}
            stroke="url(#neuralGradient)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#glow)"
            className="animate-pulse"
            style={{
              animationDuration: `${4 + i * 0.5}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
        
        {/* Neural nodes */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={150 + (i * 80)}
            cy={250 + Math.sin(i * 0.8) * 150}
            r="3"
            fill="#5DB8FF"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Floating data particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 15}s ease-in-out infinite ${Math.random() * 10}s`,
            animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const StepCard = ({ step, index, isActive, isVisible, onClick, isCompleted }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group cursor-pointer transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${isActive ? 'scale-105 z-20' : 'hover:scale-102'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced card with premium styling */}
      <div className={`relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 h-full overflow-hidden ${
        isActive
          ? `bg-gradient-to-br ${step.bgGradient} ${step.borderColor} shadow-2xl ${step.glowColor}`
          : isCompleted
          ? 'bg-gradient-to-br from-green-500/10 via-emerald-400/5 to-green-500/10 border-green-400/30 shadow-lg shadow-green-500/20'
          : 'bg-gradient-to-br from-white/5 via-white/10 to-white/5 border-white/10 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10'
      }`}>
        
        {/* Step number with enhanced styling */}
        <div className="flex items-center justify-between mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl font-bold text-lg transition-all duration-500 ${
            isActive
              ? `bg-gradient-to-br ${step.iconGradient} text-white shadow-xl scale-110`
              : isCompleted
              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg'
              : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50 group-hover:text-gray-300'
          }`}>
            {isCompleted ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>

          {/* Status indicator */}
          <div className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${
            isActive
              ? 'bg-white/20 text-white border-white/30'
              : isCompleted
              ? 'bg-green-500/20 text-green-300 border-green-400/30'
              : 'bg-gray-700/30 text-gray-400 border-gray-600/30'
          }`}>
            {isActive ? 'Processing' : isCompleted ? 'Complete' : 'Pending'}
          </div>
        </div>

        {/* Enhanced icon with orbital animation */}
        <div className="relative mb-6">
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
            isActive
              ? `bg-gradient-to-br ${step.iconGradient} shadow-2xl scale-110 rotate-6`
              : isCompleted
              ? 'bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl'
              : 'bg-gray-700/50 group-hover:bg-gray-600/50'
          }`}>
            <step.icon className={`w-10 h-10 transition-all duration-300 ${
              isActive || isCompleted ? 'text-white scale-110' : 'text-gray-400 group-hover:text-gray-300'
            }`} />
            
            {/* Orbiting particles for active state */}
            {isActive && (
              <>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      animation: `orbit ${3 + i}s linear infinite`,
                      animationDelay: `${i * 0.5}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateX(50px)`
                    }}
                  />
                ))}
              </>
            )}
          </div>
          
          {/* Enhanced glow effect */}
          {(isActive || isHovered) && (
            <div className={`absolute inset-0 bg-gradient-to-br ${isActive ? step.iconGradient : 'from-[#5DB8FF] to-[#8CD5FF]'} rounded-3xl blur-xl opacity-50 animate-pulse`}></div>
          )}
        </div>

        {/* Enhanced content */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold transition-colors duration-300 ${
            isActive ? 'text-white' : isCompleted ? 'text-green-300' : 'text-gray-300 group-hover:text-white'
          }`}>
            {step.title}
          </h3>
          
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
            isActive ? 'text-gray-200' : isCompleted ? 'text-green-200' : 'text-gray-400 group-hover:text-gray-300'
          }`}>
            {step.description}
          </p>

          {/* Enhanced features list */}
          <div className="space-y-2">
            {step.features?.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-white' : isCompleted ? 'bg-green-400' : 'bg-gray-500'
                }`} />
                <span className={`text-xs ${
                  isActive ? 'text-white/80' : isCompleted ? 'text-green-300/80' : 'text-gray-400'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Progress indicator for active step */}
          {isActive && (
            <div className="flex items-center gap-2 pt-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-white to-white/60 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <span className="text-xs text-white/80 font-medium">Active</span>
            </div>
          )}
        </div>

        {/* Enhanced hover effects */}
        {isHovered && !isActive && (
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
                    animationDelay: `${i * 200}ms`
                  }}
                />
              ))}
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/10 via-transparent to-[#8CD5FF]/10 rounded-3xl"></div>
          </>
        )}

        {/* Active state overlay */}
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-3xl pointer-events-none" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 animate-pulse" style={{ animationDuration: '2s' }}></div>
            
            {/* Corner highlights */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </>
        )}

        {/* Connection line to next step */}
        {index < 4 && (
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className={`w-8 h-0.5 transition-all duration-500 ${
              isCompleted ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'
            }`}>
              <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full ${
                isCompleted ? 'bg-green-400' : 'bg-gray-600'
              }`}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ArchitectureLayer = ({ layer, index, isVisible }) => {
  return (
    <div
      className={`relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
      }`}
      style={{ transitionDelay: `${index * 300}ms` }}
    >
      <div className="group relative p-6 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-gradient-to-r hover:from-white/10 hover:via-white/15 hover:to-white/10">
        
        {/* Layer icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <layer.icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white group-hover:text-[#8CD5FF] transition-colors duration-300">
            {layer.title}
          </h4>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {layer.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 pt-2">
            {layer.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Connection arrow */}
        {index < 4 && (
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#5DB8FF]/20 rounded-full flex items-center justify-center border border-[#5DB8FF]/40">
            <ArrowRight className="w-3 h-3 text-[#5DB8FF]" />
          </div>
        )}

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const PersonaAvatar = ({ persona, index, isVisible }) => {
  return (
    <div
      className={`relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group relative">
        {/* Avatar circle */}
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${persona.gradient} flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-all duration-300 group-hover:border-white/40`}>
          <persona.icon className="w-8 h-8 text-white" />
          
          {/* Status indicator */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Label */}
        <div className="text-center mt-3">
          <div className="text-sm font-medium text-white group-hover:text-[#8CD5FF] transition-colors duration-300">
            {persona.name}
          </div>
          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {persona.status}
          </div>
        </div>

        {/* Activity indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full backdrop-blur-sm border border-white/20">
            <Activity className="w-3 h-3 text-green-400" />
            <span className="text-xs text-white">Active</span>
          </div>
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const [architectureVisible, setArchitectureVisible] = useState(false);
  const [presenceVisible, setPresenceVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: Eye,
      title: "Observe & Collect",
      description: "NeuroTwin passively monitors your digital behavior patterns across all platforms — emails, chats, meetings, code, and content creation.",
      bgGradient: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
      borderColor: "border-blue-400/40",
      glowColor: "shadow-blue-500/30",
      iconGradient: "from-blue-500 to-cyan-500",
      features: ["Email patterns", "Meeting behavior", "Communication style", "Decision patterns"]
    },
    {
      icon: Brain,
      title: "Analyze & Learn",
      description: "Advanced AI algorithms map your unique thinking patterns, communication style, decision-making process, and personal preferences to build your Neural Signature.",
      bgGradient: "from-purple-500/20 via-purple-400/10 to-pink-500/20",
      borderColor: "border-purple-400/40",
      glowColor: "shadow-purple-500/30",
      iconGradient: "from-purple-500 to-pink-500",
      features: ["Personality mapping", "Tone analysis", "Preference learning", "Context understanding"]
    },
    {
      icon: Users,
      title: "Split & Specialize",
      description: "Your core identity branches into specialized personas like 'Founder You,' 'Creative You,' or 'Student You' — each with distinct memory and behavioral patterns.",
      bgGradient: "from-emerald-500/20 via-green-400/10 to-teal-500/20",
      borderColor: "border-emerald-400/40",
      glowColor: "shadow-emerald-500/30",
      iconGradient: "from-emerald-500 to-teal-500",
      features: ["Role-based personas", "Isolated memory", "Context switching", "Specialized behavior"]
    },
    {
      icon: Zap,
      title: "Execute & Perform",
      description: "Each persona autonomously handles tasks, joins meetings, responds to messages, and makes decisions using your authentic voice and decision-making style.",
      bgGradient: "from-orange-500/20 via-orange-400/10 to-red-500/20",
      borderColor: "border-orange-400/40",
      glowColor: "shadow-orange-500/30",
      iconGradient: "from-orange-500 to-red-500",
      features: ["Autonomous actions", "Voice synthesis", "Real-time decisions", "Task execution"]
    },
    {
      icon: TrendingUp,
      title: "Evolve & Improve",
      description: "Continuous learning through feedback loops, reinforcement learning, and memory updates — your Twin becomes increasingly sophisticated and 'you-like' over time.",
      bgGradient: "from-indigo-500/20 via-indigo-400/10 to-blue-500/20",
      borderColor: "border-indigo-400/40",
      glowColor: "shadow-indigo-500/30",
      iconGradient: "from-indigo-500 to-blue-500",
      features: ["Feedback learning", "Performance optimization", "Memory enhancement", "Behavioral refinement"]
    }
  ];

  const architectureLayers = [
    {
      icon: Monitor,
      title: "Input Layer",
      description: "Browser Plugin + OS Tracker",
      tech: ["Chrome Ext", "Desktop App", "API"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Core Engine",
      description: "GPT-4o + LangGraph + Reinforcement Logic",
      tech: ["GPT-4o", "LangGraph", "RL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Memory Layer",
      description: "Vector DBs (per persona)",
      tech: ["Pinecone", "Weaviate", "Redis"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Mic,
      title: "Voice Layer",
      description: "Real-Time SynthVoice",
      tech: ["ElevenLabs", "Whisper", "TTS"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Interface",
      description: "Chat + Voice UI + Persona Dashboard",
      tech: ["Next.js", "WebRTC", "SDK"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const personas = [
    {
      icon: Users,
      name: "Founder You",
      status: "In meeting",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      name: "Student You",
      status: "Preparing",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      name: "Creative You",
      status: "Writing",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      name: "Friend You",
      status: "Chatting",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      name: "Work You",
      status: "Coding",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible, threshold: 0.3 },
      { ref: stepsRef, setter: setStepsVisible, threshold: 0.1 },
      { ref: architectureRef, setter: setArchitectureVisible, threshold: 0.1 },
      { ref: presenceRef, setter: setPresenceVisible, threshold: 0.1 },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps(prev => new Set([...prev, activeStep]));
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [steps.length, activeStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Neural network background */}
      <NeuralNetworkBackground />

      {/* Header Section */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Brain className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>Neural Architecture Explained</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">How NeuroTwin</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Works
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Behind every digital soul is a deep AI engine that{' '}
              <span className="text-[#8CD5FF] font-medium">learns, clones, and evolves.</span>
            </p>

            {/* Interactive brain visualization */}
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/5 rounded-full animate-pulse blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full flex items-center justify-center shadow-2xl">
                <Brain className="w-16 h-16 text-white animate-pulse" />
              </div>
              
              {/* Orbiting data points */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `orbit ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * 1.3}s`,
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(80px)`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced 5-Step Clone Engine */}
      <section ref={stepsRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              The 5-Step <span className="text-[#5DB8FF]">Clone Engine</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From observation to evolution — how your digital twin comes to life
            </p>
          </div>

          {/* Enhanced steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                isCompleted={completedSteps.has(index)}
                isVisible={stepsVisible}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          {/* Enhanced step progress indicator */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`transition-all duration-500 ${
                  index === activeStep 
                    ? 'w-16 h-4 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full shadow-lg shadow-[#5DB8FF]/30'
                    : completedSteps.has(index)
                    ? 'w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full'
                    : 'w-4 h-4 bg-gray-600 hover:bg-gray-500 rounded-full'
                }`}
              />
            ))}
          </div>

          {/* Process flow visualization */}
          <div className="mt-16 flex items-center justify-center">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-current text-[#5DB8FF]" />
                <span className="text-sm">Input</span>
              </div>
              <ArrowRight className="w-4 h-4" />
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-current text-purple-400" />
                <span className="text-sm">Process</span>
              </div>
              <ArrowRight className="w-4 h-4" />
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-current text-emerald-400" />
                <span className="text-sm">Execute</span>
              </div>
              <ArrowRight className="w-4 h-4" />
              <div className="flex items-center gap-2">
                <Circle className="w-3 h-3 fill-current text-orange-400" />
                <span className="text-sm">Evolve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section ref={architectureRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Behind the <span className="text-[#5DB8FF]">Scenes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A layered architecture that powers your digital consciousness
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {architectureLayers.map((layer, index) => (
              <ArchitectureLayer
                key={index}
                layer={layer}
                index={index}
                isVisible={architectureVisible}
              />
            ))}
          </div>

          {/* Data flow visualization */}
          <div className="mt-16 flex items-center justify-center">
            <div className="flex items-center gap-4 text-gray-400">
              <Circle className="w-2 h-2 fill-current" />
              <ArrowRight className="w-4 h-4" />
              <Circle className="w-2 h-2 fill-current" />
              <ArrowRight className="w-4 h-4" />
              <Circle className="w-2 h-2 fill-current" />
              <ArrowRight className="w-4 h-4" />
              <Circle className="w-2 h-2 fill-current" />
              <ArrowRight className="w-4 h-4" />
              <Circle className="w-2 h-2 fill-current" />
            </div>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-400">Data flows seamlessly through each layer</span>
          </div>
        </div>
      </section>

      {/* 24/7 Presence Section */}
      <section ref={presenceRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${presenceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Always On, Always <span className="text-[#5DB8FF]">You</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your personas work independently while you focus on what matters most
              </p>
            </div>

            {/* Persona grid */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {personas.map((persona, index) => (
                <PersonaAvatar
                  key={index}
                  persona={persona}
                  index={index}
                  isVisible={presenceVisible}
                />
              ))}
            </div>

            {/* Status message */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-full backdrop-blur-xl">
                <Activity className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">
                  Your Founder self is in a meeting. Your Student self is preparing for tomorrow. You're free.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Pulsing orb animation */}
            <div className="relative mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Now That You Know{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
                  How It Works…
                </span>
              </h2>
              
              {/* Central pulsing orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-[#5DB8FF]/30 via-[#8CD5FF]/20 to-[#5DB8FF]/10 rounded-full animate-pulse blur-2xl"></div>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Train your Twin. Let it work for you.
            </p>

            {/* CTA Button */}
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 mx-auto overflow-hidden border border-[#5DB8FF]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                <span>Start Training</span>
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
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(15px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 80px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 80px)); }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;