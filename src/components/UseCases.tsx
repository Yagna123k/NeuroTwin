import React, { useState, useEffect, useRef } from 'react';
import { Video, MessageCircle, Headphones, FileText, Calendar, Lightbulb } from 'lucide-react';

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const useCases = [
    {
      icon: Video,
      title: "Attend Meetings",
      description: "Your twin joins video calls, takes notes, asks relevant questions, and provides summaries — all in your voice and style.",
      details: "Perfect for recurring meetings, client check-ins, or any session where your presence adds value but your attention is needed elsewhere."
    },
    {
      icon: MessageCircle,
      title: "Reply to Chats",
      description: "Responds to messages across all platforms with your tone, humor, and knowledge, maintaining relationships while you focus.",
      details: "From Slack to Discord to personal messages, your twin handles routine conversations and escalates important matters."
    },
    {
      icon: FileText,
      title: "Write Content",
      description: "Creates emails, documents, social posts, and articles that sound authentically you — your voice, your insights, your style.",
      details: "Whether it's technical documentation, creative copy, or professional correspondence, your twin writes like you would."
    },
    {
      icon: Headphones,
      title: "Narrate Podcasts",
      description: "Record podcast episodes, audiobooks, or video narrations using your cloned voice with perfect pronunciation and emotion.",
      details: "Schedule content creation while you sleep. Your twin can record hours of material using your voice patterns."
    },
    {
      icon: Lightbulb,
      title: "Brainstorm Ideas",
      description: "Generate creative concepts, solve problems, and explore possibilities using your thinking patterns and knowledge base.",
      details: "Your twin processes information the way you do, offering insights and solutions that align with your mental models."
    },
    {
      icon: Calendar,
      title: "Manage Schedule",
      description: "Coordinate meetings, respond to requests, and make decisions about your time based on your preferences and priorities.",
      details: "Your twin knows your schedule patterns, energy levels, and commitments to optimize your day effectively."
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
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [useCases.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#161B22] to-[#0D1117] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Scale <span className="text-[#5DB8FF]">Yourself</span> Across Everything
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your digital twin handles routine tasks, maintains relationships, and creates content — 
              freeing you to focus on what only you can do.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Use cases list */}
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-500 ${
                    activeUseCase === index
                      ? 'bg-gradient-to-r from-[#5DB8FF]/10 to-[#5DB8FF]/5 border-[#5DB8FF]/50 scale-105'
                      : 'bg-gray-800/20 border-gray-700/30 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveUseCase(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeUseCase === index
                        ? 'bg-[#5DB8FF]/20'
                        : 'bg-gray-700/50 group-hover:bg-gray-600/50'
                    }`}>
                      <useCase.icon className={`w-6 h-6 ${activeUseCase === index ? 'text-[#5DB8FF]' : 'text-gray-400 group-hover:text-gray-300'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 transition-colors ${
                        activeUseCase === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {useCase.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        activeUseCase === index ? 'text-gray-300' : 'text-gray-400'
                      }`}>
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active use case details */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5DB8FF]/20 to-[#5DB8FF]/5 rounded-3xl flex items-center justify-center mb-4">
                    {React.createElement(useCases[activeUseCase].icon, { 
                      className: "w-10 h-10 text-[#5DB8FF]" 
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {useCases[activeUseCase].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {useCases[activeUseCase].details}
                  </p>
                </div>

                {/* Visual indicator */}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex gap-1">
                    {useCases.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeUseCase ? 'bg-[#5DB8FF] w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span>Auto-cycling demonstration</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#5DB8FF]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#5DB8FF]/10 rounded-full animate-pulse delay-1000"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;