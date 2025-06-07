import React, { useState, useEffect, useRef } from 'react';
import { Video, MessageCircle, Headphones, FileText, Calendar, Lightbulb, ArrowRight, Play, Zap } from 'lucide-react';

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
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: "95% accuracy",
      category: "Communication"
    },
    {
      icon: MessageCircle,
      title: "Reply to Chats",
      description: "Responds to messages across all platforms with your tone, humor, and knowledge, maintaining relationships while you focus.",
      details: "From Slack to Discord to personal messages, your twin handles routine conversations and escalates important matters.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      stats: "24/7 response",
      category: "Messaging"
    },
    {
      icon: FileText,
      title: "Write Content",
      description: "Creates emails, documents, social posts, and articles that sound authentically you — your voice, your insights, your style.",
      details: "Whether it's technical documentation, creative copy, or professional correspondence, your twin writes like you would.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: "10x faster",
      category: "Content"
    },
    {
      icon: Headphones,
      title: "Narrate Podcasts",
      description: "Record podcast episodes, audiobooks, or video narrations using your cloned voice with perfect pronunciation and emotion.",
      details: "Schedule content creation while you sleep. Your twin can record hours of material using your voice patterns.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      stats: "Studio quality",
      category: "Audio"
    },
    {
      icon: Lightbulb,
      title: "Brainstorm Ideas",
      description: "Generate creative concepts, solve problems, and explore possibilities using your thinking patterns and knowledge base.",
      details: "Your twin processes information the way you do, offering insights and solutions that align with your mental models.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      stats: "Infinite ideas",
      category: "Creative"
    },
    {
      icon: Calendar,
      title: "Manage Schedule",
      description: "Coordinate meetings, respond to requests, and make decisions about your time based on your preferences and priorities.",
      details: "Your twin knows your schedule patterns, energy levels, and commitments to optimize your day effectively.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
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

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-[#161B22] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8CD5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-2000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Enhanced section header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF]/10 to-[#8CD5FF]/10 border border-[#5DB8FF]/20 rounded-full text-[#5DB8FF] text-sm font-medium mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              <span>Infinite Possibilities</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Scale <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">Yourself</span>
              <br />
              <span className="text-5xl md:text-6xl">Across Everything</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your digital twin handles routine tasks, maintains relationships, and creates content — 
              freeing you to focus on what only you can do.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-16 items-start">
            
            {/* Interactive use cases grid */}
            <div 
              className="space-y-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="grid gap-4">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className={`group cursor-pointer relative overflow-hidden transition-all duration-700 ${
                      activeUseCase === index
                        ? 'scale-105 z-10'
                        : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveUseCase(index)}
                  >
                    {/* Main card */}
                    <div className={`relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-700 ${
                      activeUseCase === index
                        ? `${useCase.bgColor} ${useCase.borderColor} shadow-2xl shadow-${useCase.color.split('-')[1]}-500/20`
                        : 'bg-gray-800/20 border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/30'
                    }`}>
                      
                      {/* Category badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 transition-all duration-300 ${
                        activeUseCase === index
                          ? 'bg-white/10 text-white'
                          : 'bg-gray-700/50 text-gray-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          activeUseCase === index ? 'bg-white' : 'bg-gray-500'
                        }`}></div>
                        {useCase.category}
                      </div>

                      <div className="flex items-start gap-6">
                        {/* Enhanced icon */}
                        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          activeUseCase === index
                            ? `bg-gradient-to-br ${useCase.color} shadow-lg`
                            : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                        }`}>
                          <useCase.icon className={`w-8 h-8 transition-all duration-300 ${
                            activeUseCase === index ? 'text-white scale-110' : 'text-gray-400 group-hover:text-gray-300'
                          }`} />
                          
                          {/* Glow effect for active state */}
                          {activeUseCase === index && (
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} rounded-2xl blur-xl opacity-50 animate-pulse`}></div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* Title and stats */}
                          <div className="flex items-center justify-between mb-3">
                            <h3 className={`text-xl font-bold transition-colors duration-300 ${
                              activeUseCase === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                            }`}>
                              {useCase.title}
                            </h3>
                            <div className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 ${
                              activeUseCase === index
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-700/50 text-gray-400'
                            }`}>
                              {useCase.stats}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            activeUseCase === index ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                            {useCase.description}
                          </p>

                          {/* Action indicator */}
                          <div className={`flex items-center gap-2 mt-4 transition-all duration-300 ${
                            activeUseCase === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}>
                            <span className="text-xs text-gray-400">Learn more</span>
                            <ArrowRight className="w-3 h-3 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {/* Animated border for active state */}
                      {activeUseCase === index && (
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 animate-pulse"></div>
                      )}
                    </div>

                    {/* Floating particles for active state */}
                    {activeUseCase === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced showcase panel */}
            <div className="relative">
              <div className="sticky top-24">
                {/* Main showcase card */}
                <div className={`relative p-10 rounded-4xl border backdrop-blur-sm transition-all duration-700 ${useCases[activeUseCase].bgColor} ${useCases[activeUseCase].borderColor}`}>
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${useCases[activeUseCase].color} flex items-center justify-center shadow-2xl`}>
                      {React.createElement(useCases[activeUseCase].icon, { 
                        className: "w-10 h-10 text-white" 
                      })}
                      <div className={`absolute inset-0 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-3xl blur-xl opacity-50 animate-pulse`}></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {useCases[activeUseCase].title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-[#5DB8FF] text-sm font-medium">
                          {useCases[activeUseCase].category}
                        </span>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">
                          {useCases[activeUseCase].stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <p className="text-gray-200 leading-relaxed text-lg">
                      {useCases[activeUseCase].details}
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Real-time", value: "Processing" },
                        { label: "Voice", value: "Cloning" },
                        { label: "Context", value: "Aware" },
                        { label: "Always", value: "Learning" }
                      ].map((feature, index) => (
                        <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="text-xs text-gray-400 mb-1">{feature.label}</div>
                          <div className="text-sm font-semibold text-white">{feature.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action button */}
                    <button className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>See {useCases[activeUseCase].title} in Action</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-4xl">
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-10 animate-pulse`}></div>
                    <div className={`absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br ${useCases[activeUseCase].color} rounded-full blur-3xl opacity-10 animate-pulse delay-1000`}></div>
                  </div>
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

        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
          50% { transform: translateY(-5px) translateX(-3px) rotate(180deg); }
          75% { transform: translateY(-15px) translateX(8px) rotate(270deg); }
        }
        
        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </section>
  );
};

export default UseCases;