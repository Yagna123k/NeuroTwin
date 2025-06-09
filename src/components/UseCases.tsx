import React, { useState, useEffect, useRef } from 'react';
import { 
  Video, 
  MessageCircle, 
  Headphones, 
  FileText, 
  Calendar, 
  Lightbulb, 
  ArrowRight, 
  Play, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Activity,
  Clock,
  Target,
  Sparkles,
  Brain,
  Users,
  Globe,
  Shield
} from 'lucide-react';

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced neural mesh */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="useCaseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="premiumBlur">
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
            d={`M${100 + i * 150},${200 + Math.sin(i * 0.6) * 100} Q${300 + i * 100},${150 + Math.cos(i * 0.8) * 80} ${500 + i * 120},${200 + Math.sin(i * 1.4) * 120} T${800 + i * 80},${180 + Math.cos(i * 1.8) * 100}`}
            stroke="url(#useCaseGlow)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#premiumBlur)"
            className="animate-pulse"
            style={{
              animationDuration: `${5 + i * 0.7}s`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
        
        {/* Neural nodes */}
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={150 + (i * 80)}
            cy={250 + Math.sin(i * 0.9) * 150}
            r="2.5"
            fill="url(#useCaseGlow)"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}
            filter="url(#premiumBlur)"
          />
        ))}
      </svg>

      {/* Floating ambient elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full opacity-60"
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

const FloatingOrb = ({ delay = 0, size = 'w-80 h-80', position = 'top-1/4 left-1/4', opacity = 'opacity-8' }) => {
  return (
    <div className={`absolute ${position} ${size} pointer-events-none ${opacity}`}>
      <div 
        className="w-full h-full bg-gradient-to-br from-[#5DB8FF]/15 via-[#8CD5FF]/8 to-[#5DB8FF]/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: `${delay}s`, animationDuration: '10s' }}
      />
    </div>
  );
};

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const useCases = [
    {
      icon: Video,
      title: "Attend Meetings",
      description: "Your twin joins video calls, takes notes, asks relevant questions, and provides summaries — all in your voice and style.",
      details: "Perfect for recurring meetings, client check-ins, or any session where your presence adds value but your attention is needed elsewhere. Your Twin maintains your professional presence while you focus on high-priority work.",
      color: "from-blue-400 via-blue-500 to-blue-600",
      bgGradient: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
      borderColor: "border-blue-400/40",
      glowColor: "shadow-blue-500/30",
      stats: "95% accuracy",
      category: "Communication",
      features: ["Real-time note taking", "Intelligent Q&A", "Meeting summaries", "Action item tracking"],
      impact: "Save 10+ hours/week"
    },
    {
      icon: MessageCircle,
      title: "Reply to Chats",
      description: "Responds to messages across all platforms with your tone, humor, and knowledge, maintaining relationships while you focus.",
      details: "From Slack to Discord to personal messages, your twin handles routine conversations and escalates important matters. It learns your communication patterns and maintains your relationships authentically.",
      color: "from-emerald-400 via-green-500 to-emerald-600",
      bgGradient: "from-emerald-500/20 via-green-400/10 to-teal-500/20",
      borderColor: "border-emerald-400/40",
      glowColor: "shadow-emerald-500/30",
      stats: "24/7 response",
      category: "Messaging",
      features: ["Multi-platform support", "Context awareness", "Tone matching", "Smart escalation"],
      impact: "Never miss a message"
    },
    {
      icon: FileText,
      title: "Write Content",
      description: "Creates emails, documents, social posts, and articles that sound authentically you — your voice, your insights, your style.",
      details: "Whether it's technical documentation, creative copy, or professional correspondence, your twin writes like you would. It understands your writing style, preferred terminology, and thought processes.",
      color: "from-purple-400 via-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 via-purple-400/10 to-pink-500/20",
      borderColor: "border-purple-400/40",
      glowColor: "shadow-purple-500/30",
      stats: "10x faster",
      category: "Content",
      features: ["Style matching", "Research integration", "SEO optimization", "Multi-format output"],
      impact: "Boost productivity 1000%"
    },
    {
      icon: Headphones,
      title: "Narrate Podcasts",
      description: "Record podcast episodes, audiobooks, or video narrations using your cloned voice with perfect pronunciation and emotion.",
      details: "Schedule content creation while you sleep. Your twin can record hours of material using your voice patterns, maintaining consistent quality and emotional tone throughout long-form content.",
      color: "from-orange-400 via-orange-500 to-red-500",
      bgGradient: "from-orange-500/20 via-orange-400/10 to-red-500/20",
      borderColor: "border-orange-400/40",
      glowColor: "shadow-orange-500/30",
      stats: "Studio quality",
      category: "Audio",
      features: ["Voice cloning", "Emotion control", "Multi-language", "Background music"],
      impact: "Scale content creation"
    },
    {
      icon: Lightbulb,
      title: "Brainstorm Ideas",
      description: "Generate creative concepts, solve problems, and explore possibilities using your thinking patterns and knowledge base.",
      details: "Your twin processes information the way you do, offering insights and solutions that align with your mental models. It can explore creative territories while maintaining your unique perspective and approach.",
      color: "from-yellow-400 via-amber-500 to-orange-500",
      bgGradient: "from-yellow-500/20 via-amber-400/10 to-orange-500/20",
      borderColor: "border-yellow-400/40",
      glowColor: "shadow-yellow-500/30",
      stats: "Infinite ideas",
      category: "Creative",
      features: ["Pattern recognition", "Creative synthesis", "Problem solving", "Idea validation"],
      impact: "Unlock creativity 24/7"
    },
    {
      icon: Calendar,
      title: "Manage Schedule",
      description: "Coordinate meetings, respond to requests, and make decisions about your time based on your preferences and priorities.",
      details: "Your twin knows your schedule patterns, energy levels, and commitments to optimize your day effectively. It handles calendar conflicts, suggests optimal meeting times, and protects your focus time.",
      color: "from-indigo-400 via-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/20 via-indigo-400/10 to-blue-500/20",
      borderColor: "border-indigo-400/40",
      glowColor: "shadow-indigo-500/30",
      stats: "Smart scheduling",
      category: "Productivity",
      features: ["Calendar optimization", "Priority management", "Conflict resolution", "Time blocking"],
      impact: "Perfect time management"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveUseCase((prev) => (prev + 1) % useCases.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [useCases.length, isHovered]);

  const nextUseCase = () => {
    setActiveUseCase((prev) => (prev + 1) % useCases.length);
  };

  const prevUseCase = () => {
    setActiveUseCase((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#161B22] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Enhanced background effects */}
      <NeuralBackground />
      
      {/* Premium floating orbs */}
      <FloatingOrb delay={0} size="w-96 h-96" position="top-1/6 left-1/12" opacity="opacity-6" />
      <FloatingOrb delay={4} size="w-80 h-80" position="bottom-1/6 right-1/12" opacity="opacity-4" />
      <FloatingOrb delay={8} size="w-64 h-64" position="top-2/3 left-2/3" opacity="opacity-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Enhanced section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Zap className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>Infinite Possibilities</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Scale <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">Yourself</span>
              <br />
              <span className="text-4xl md:text-5xl">Across Everything</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your digital twin handles routine tasks while you focus on what only you can do.
            </p>

            {/* Premium stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "6", label: "Core Use Cases", icon: Target },
                { value: "24/7", label: "Availability", icon: Clock },
                { value: "∞", label: "Scalability", icon: Activity }
              ].map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5DB8FF]/20 to-[#8CD5FF]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <stat.icon className="w-6 h-6 text-[#5DB8FF]" />
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced main showcase */}
          <div className="max-w-6xl mx-auto mb-16">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Premium showcase card */}
              <div className={`relative p-10 rounded-3xl border backdrop-blur-xl transition-all duration-700 bg-gradient-to-br ${useCases[activeUseCase].bgGradient} ${useCases[activeUseCase].borderColor} shadow-2xl ${useCases[activeUseCase].glowColor}`}>
                
                {/* Navigation arrows */}
                <button
                  onClick={prevUseCase}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextUseCase}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Enhanced header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${useCases[activeUseCase].color} flex items-center justify-center shadow-2xl`}>
                      {React.createElement(useCases[activeUseCase].icon, { 
                        className: "w-10 h-10 text-white" 
                      })}
                      <div className={`absolute inset-0 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-3xl blur-xl opacity-50 animate-pulse`}></div>
                    </div>
                    
                    {/* Orbiting particles */}
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          animation: `orbit ${3 + i}s linear infinite`,
                          animationDelay: `${i * 1}s`,
                          transformOrigin: '0 0',
                          transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(60px)`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-black text-white">
                        {useCases[activeUseCase].title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                          {useCases[activeUseCase].category}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-sm font-medium rounded-full border border-green-400/30">
                          {useCases[activeUseCase].stats}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-white/90 leading-relaxed text-lg mb-4">
                      {useCases[activeUseCase].details}
                    </p>

                    {/* Impact highlight */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF]/20 to-[#8CD5FF]/20 border border-[#5DB8FF]/30 rounded-full">
                      <Star className="w-4 h-4 text-[#5DB8FF]" />
                      <span className="text-white font-medium text-sm">{useCases[activeUseCase].impact}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced feature highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {useCases[activeUseCase].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-white/30 transition-colors">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm font-medium text-white">{feature}</div>
                    </div>
                  ))}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex items-center gap-4">
                  <button className="group flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 hover:border-white/40 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>See in Action</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    Learn More
                  </button>
                </div>

                {/* Enhanced background elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-15 animate-pulse`}></div>
                  <div className={`absolute -bottom-32 -left-32 w-48 h-48 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-10 animate-pulse delay-1000`}></div>
                </div>

                {/* Enhanced floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                  {useCases.map((_, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${
                        index === activeUseCase 
                          ? 'w-8 h-2 bg-white rounded-full'
                          : 'w-2 h-2 bg-white/40 rounded-full'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced use case selector */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-500 ${
                    activeUseCase === index
                      ? `bg-gradient-to-br ${useCase.bgGradient} ${useCase.borderColor} scale-105 shadow-lg`
                      : 'bg-gray-800/30 border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/40'
                  }`}
                >
                  {/* Enhanced icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto transition-all duration-300 ${
                    activeUseCase === index
                      ? `bg-gradient-to-br ${useCase.color} shadow-lg`
                      : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                  }`}>
                    <useCase.icon className={`w-6 h-6 transition-all duration-300 ${
                      activeUseCase === index ? 'text-white scale-110' : 'text-gray-400 group-hover:text-gray-300'
                    }`} />
                  </div>

                  {/* Enhanced title */}
                  <h4 className={`text-sm font-bold text-center transition-colors duration-300 mb-2 ${
                    activeUseCase === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {useCase.title}
                  </h4>

                  {/* Category badge */}
                  <div className={`text-xs text-center px-2 py-1 rounded-full transition-colors duration-300 ${
                    activeUseCase === index 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-700/50 text-gray-500 group-hover:text-gray-400'
                  }`}>
                    {useCase.category}
                  </div>

                  {/* Active indicator */}
                  {activeUseCase === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}

                  {/* Glow effect for active */}
                  {activeUseCase === index && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-2xl blur-xl opacity-20 -z-10`}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Enhanced navigation controls */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prevUseCase}
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Previous</span>
              </button>
              
              <div className="flex items-center gap-2">
                {useCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveUseCase(index)}
                    className={`transition-all duration-500 ${
                      index === activeUseCase 
                        ? 'w-12 h-3 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full shadow-lg shadow-[#5DB8FF]/30'
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 rounded-full'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextUseCase}
                className="group flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 rounded-xl text-gray-400 hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">Next</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-4px) rotate(180deg); }
          75% { transform: translateY(-20px) translateX(12px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 60px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 60px)); }
        }
      `}</style>
    </section>
  );
};

export default UseCases;