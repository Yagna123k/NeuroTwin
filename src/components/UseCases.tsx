import React, { useState, useEffect, useRef } from 'react';
import { Video, MessageCircle, Headphones, FileText, Calendar, Lightbulb, ArrowRight, Play, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

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
      details: "Perfect for recurring meetings, client check-ins, or any session where your presence adds value but your attention is needed elsewhere.",
      color: "from-blue-400 via-blue-500 to-blue-600",
      borderColor: "border-blue-400/40",
      glowColor: "shadow-blue-500/30",
      stats: "95% accuracy",
      category: "Communication"
    },
    {
      icon: MessageCircle,
      title: "Reply to Chats",
      description: "Responds to messages across all platforms with your tone, humor, and knowledge, maintaining relationships while you focus.",
      details: "From Slack to Discord to personal messages, your twin handles routine conversations and escalates important matters.",
      color: "from-emerald-400 via-green-500 to-emerald-600",
      borderColor: "border-emerald-400/40",
      glowColor: "shadow-emerald-500/30",
      stats: "24/7 response",
      category: "Messaging"
    },
    {
      icon: FileText,
      title: "Write Content",
      description: "Creates emails, documents, social posts, and articles that sound authentically you — your voice, your insights, your style.",
      details: "Whether it's technical documentation, creative copy, or professional correspondence, your twin writes like you would.",
      color: "from-purple-400 via-purple-500 to-pink-500",
      borderColor: "border-purple-400/40",
      glowColor: "shadow-purple-500/30",
      stats: "10x faster",
      category: "Content"
    },
    {
      icon: Headphones,
      title: "Narrate Podcasts",
      description: "Record podcast episodes, audiobooks, or video narrations using your cloned voice with perfect pronunciation and emotion.",
      details: "Schedule content creation while you sleep. Your twin can record hours of material using your voice patterns.",
      color: "from-orange-400 via-orange-500 to-red-500",
      borderColor: "border-orange-400/40",
      glowColor: "shadow-orange-500/30",
      stats: "Studio quality",
      category: "Audio"
    },
    {
      icon: Lightbulb,
      title: "Brainstorm Ideas",
      description: "Generate creative concepts, solve problems, and explore possibilities using your thinking patterns and knowledge base.",
      details: "Your twin processes information the way you do, offering insights and solutions that align with your mental models.",
      color: "from-yellow-400 via-amber-500 to-orange-500",
      borderColor: "border-yellow-400/40",
      glowColor: "shadow-yellow-500/30",
      stats: "Infinite ideas",
      category: "Creative"
    },
    {
      icon: Calendar,
      title: "Manage Schedule",
      description: "Coordinate meetings, respond to requests, and make decisions about your time based on your preferences and priorities.",
      details: "Your twin knows your schedule patterns, energy levels, and commitments to optimize your day effectively.",
      color: "from-indigo-400 via-indigo-500 to-blue-500",
      borderColor: "border-indigo-400/40",
      glowColor: "shadow-indigo-500/30",
      stats: "Smart scheduling",
      category: "Productivity"
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
      }, 4000);

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
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8CD5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Enhanced section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span>Infinite Possibilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Scale <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">Yourself</span>
              <br />
              <span className="text-4xl md:text-5xl">Across Everything</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your digital twin handles routine tasks, maintains relationships, and creates content — 
              freeing you to focus on what only you can do.
            </p>
          </div>

          {/* Centered main showcase */}
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main showcase card - removed center background color */}
              <div className={`relative p-12 rounded-4xl border backdrop-blur-sm transition-all duration-700 bg-gray-900/20 ${useCases[activeUseCase].borderColor} shadow-2xl ${useCases[activeUseCase].glowColor}`}>
                
                {/* Navigation arrows */}
                <button
                  onClick={prevUseCase}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={nextUseCase}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${useCases[activeUseCase].color} flex items-center justify-center shadow-2xl`}>
                    {React.createElement(useCases[activeUseCase].icon, { 
                      className: "w-12 h-12 text-white" 
                    })}
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-3xl blur-xl opacity-60 animate-pulse`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-black text-white mb-3">
                      {useCases[activeUseCase].title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full border border-white/30">
                        {useCases[activeUseCase].category}
                      </span>
                      <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                      <span className="text-white/80 text-sm font-medium">
                        {useCases[activeUseCase].stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <p className="text-white/90 leading-relaxed text-xl">
                    {useCases[activeUseCase].details}
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Real-time", value: "Processing" },
                      { label: "Voice", value: "Cloning" },
                      { label: "Context", value: "Aware" },
                      { label: "Always", value: "Learning" }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                        <div className="text-xs text-white/70 mb-1">{feature.label}</div>
                        <div className="text-sm font-bold text-white">{feature.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <button className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>See {useCases[activeUseCase].title} in Action</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Enhanced animated background elements - only on edges */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
                  <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-15 animate-pulse`}></div>
                  <div className={`absolute -bottom-32 -left-32 w-48 h-48 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-10 animate-pulse delay-1000`}></div>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-2xl opacity-8 animate-pulse delay-2000`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-2xl opacity-8 animate-pulse delay-3000`}></div>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animation: `float ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact use case selector */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-500 ${
                    activeUseCase === index
                      ? `bg-gray-800/30 ${useCase.borderColor} scale-105 ${useCase.glowColor}`
                      : 'bg-gray-800/20 border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/30 hover:scale-102'
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 mx-auto transition-all duration-300 ${
                    activeUseCase === index
                      ? `bg-gradient-to-br ${useCase.color} shadow-lg`
                      : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                  }`}>
                    <useCase.icon className={`w-6 h-6 transition-all duration-300 ${
                      activeUseCase === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                    }`} />
                  </div>

                  {/* Title */}
                  <h4 className={`text-sm font-bold text-center transition-colors duration-300 ${
                    activeUseCase === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {useCase.title}
                  </h4>

                  {/* Active indicator */}
                  {activeUseCase === index && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`transition-all duration-300 ${
                    index === activeUseCase 
                      ? 'w-8 h-2 bg-[#5DB8FF] rounded-full' 
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-500 rounded-full'
                  }`}
                />
              ))}
            </div>

            {/* Auto-cycle indicator */}
            {!isHovered && (
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                <div className="w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"></div>
                <span>Auto-cycling demonstration</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-20px) translateX(12px) rotate(270deg); }
        }
        
        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </section>
  );
};

export default UseCases;