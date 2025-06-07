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
      bgGradient: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
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
      bgGradient: "from-emerald-500/20 via-green-400/10 to-teal-500/20",
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
      bgGradient: "from-purple-500/20 via-purple-400/10 to-pink-500/20",
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
      bgGradient: "from-orange-500/20 via-orange-400/10 to-red-500/20",
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
      bgGradient: "from-yellow-500/20 via-amber-400/10 to-orange-500/20",
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
      bgGradient: "from-indigo-500/20 via-indigo-400/10 to-blue-500/20",
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-[#161B22] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-4 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#8CD5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-4 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Compact section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-4 backdrop-blur-sm">
              <Zap className="w-3 h-3" />
              <span>Infinite Possibilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Scale <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">Yourself</span>
              <br />
              <span className="text-3xl md:text-4xl">Across Everything</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your digital twin handles routine tasks while you focus on what only you can do.
            </p>
          </div>

          {/* Compact main showcase */}
          <div className="max-w-3xl mx-auto mb-10">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Compact showcase card */}
              <div className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-700 bg-gradient-to-br ${useCases[activeUseCase].bgGradient} ${useCases[activeUseCase].borderColor} shadow-xl ${useCases[activeUseCase].glowColor}`}>
                
                {/* Navigation arrows */}
                

                {/* Compact header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${useCases[activeUseCase].color} flex items-center justify-center shadow-xl`}>
                    {React.createElement(useCases[activeUseCase].icon, { 
                      className: "w-8 h-8 text-white" 
                    })}
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-2xl blur-lg opacity-50 animate-pulse`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {useCases[activeUseCase].title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-white/20 text-white text-xs font-medium rounded-full border border-white/30">
                        {useCases[activeUseCase].category}
                      </span>
                      <span className="text-white/80 text-xs font-medium">
                        {useCases[activeUseCase].stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact content */}
                <div className="space-y-4">
                  <p className="text-white/90 leading-relaxed">
                    {useCases[activeUseCase].details}
                  </p>

                  {/* Compact feature highlights */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { label: "Real-time", value: "Processing" },
                      { label: "Voice", value: "Cloning" },
                      { label: "Context", value: "Aware" },
                      { label: "Always", value: "Learning" }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white/10 rounded-lg p-3 border border-white/20 backdrop-blur-sm text-center">
                        <div className="text-xs text-white/70 mb-1">{feature.label}</div>
                        <div className="text-xs font-bold text-white">{feature.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Compact action button */}
                  <button className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>See in Action</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Simplified background elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-15 animate-pulse`}></div>
                  <div className={`absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-10 animate-pulse delay-1000`}></div>
                </div>

                {/* Reduced floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${25 + Math.random() * 50}%`,
                        top: `${25 + Math.random() * 50}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compact use case selector */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {useCases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`group relative p-3 rounded-xl border transition-all duration-500 ${
                    activeUseCase === index
                      ? `bg-gradient-to-br ${useCase.bgGradient} ${useCase.borderColor} scale-105`
                      : 'bg-gray-800/20 border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/30'
                  }`}
                >
                  {/* Compact icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 mx-auto transition-all duration-300 ${
                    activeUseCase === index
                      ? `bg-gradient-to-br ${useCase.color}`
                      : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                  }`}>
                    <useCase.icon className={`w-4 h-4 transition-all duration-300 ${
                      activeUseCase === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                    }`} />
                  </div>

                  {/* Compact title */}
                  <h4 className={`text-xs font-medium text-center transition-colors duration-300 ${
                    activeUseCase === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {useCase.title}
                  </h4>

                  {/* Active indicator */}
                  {activeUseCase === index && (
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Compact progress indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveUseCase(index)}
                  className={`transition-all duration-300 ${
                    index === activeUseCase 
                      ? 'w-6 h-1.5 bg-[#5DB8FF] rounded-full' 
                      : 'w-1.5 h-1.5 bg-gray-600 hover:bg-gray-500 rounded-full'
                  }`}
                />
              ))}
            </div>

            {/* Compact auto-cycle indicator */}
            {!isHovered && (
              <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-gray-500">
                <div className="w-1 h-1 bg-[#5DB8FF] rounded-full animate-pulse"></div>
                <span>Auto-cycling</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Simplified animatio