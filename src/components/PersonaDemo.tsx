import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Zap, Brain, MessageSquare, Play } from 'lucide-react';

const PersonaDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePersona, setActivePersona] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const personas = [
    {
      name: "Founder You",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Strategic, decisive, growth-focused",
      scenario: "Board Meeting",
      response: "Based on our Q3 metrics and market analysis, I recommend we pivot our user acquisition strategy to focus on enterprise clients. The LTV/CAC ratio shows 3x better performance in that segment.",
      traits: ["Strategic thinking", "Data-driven decisions", "Leadership tone", "Business acumen"]
    },
    {
      name: "Creative You", 
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Innovative, expressive, boundary-pushing",
      scenario: "Brainstorm Session",
      response: "What if we flip the entire user onboarding experience? Instead of teaching people how to use our product, we make the product learn them first. Like having a conversation with a friend rather than reading a manual.",
      traits: ["Out-of-the-box thinking", "Narrative storytelling", "Emotional intelligence", "Artistic vision"]
    },
    {
      name: "Student You",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10", 
      borderColor: "border-green-500/30",
      description: "Curious, methodical, knowledge-seeking",
      scenario: "Research Discussion",
      response: "I've been analyzing the latest papers on transformer architectures. The attention mechanism improvements in the recent Stanford study could be game-changing for our NLP pipeline. Should we schedule a deep-dive session?",
      traits: ["Analytical mindset", "Research-oriented", "Question-driven", "Continuous learning"]
    },
    {
      name: "Friend You",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30", 
      description: "Warm, supportive, conversational",
      scenario: "Casual Chat",
      response: "Honestly, I've been thinking about what you said last week. You're absolutely right about work-life balance. Maybe we should plan that weekend trip we talked about? Sometimes the best ideas come when you're not trying to force them.",
      traits: ["Empathetic communication", "Personal anecdotes", "Supportive language", "Casual warmth"]
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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0D1117] to-[#161B22] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Live <span className="text-[#5DB8FF]">Persona</span> Transitions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch how your digital twin adapts its personality, communication style, and expertise 
              based on context and audience.
            </p>
          </div>

          {/* Persona selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {personas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setActivePersona(index)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activePersona === index
                    ? `${persona.bgColor} ${persona.borderColor} text-white scale-105`
                    : 'bg-gray-800/30 border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600/50'
                }`}
              >
                <persona.icon className="w-5 h-5" />
                <span className="font-medium">{persona.name}</span>
                {activePersona === index && (
                  <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Active persona display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Persona info */}
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl border backdrop-blur-sm ${personas[activePersona].bgColor} ${personas[activePersona].borderColor}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${personas[activePersona].color} flex items-center justify-center`}>
                    {React.createElement(personas[activePersona].icon, { 
                      className: "w-8 h-8 text-white" 
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{personas[activePersona].name}</h3>
                    <p className="text-gray-300">{personas[activePersona].description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="w-4 h-4 text-[#5DB8FF]" />
                    <span className="text-sm font-medium text-[#5DB8FF]">Scenario: {personas[activePersona].scenario}</span>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/30">
                    <p className="text-gray-300 leading-relaxed italic">
                      "{personas[activePersona].response}"
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Traits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {personas[activePersona].traits.map((trait, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/30"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Transition visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Seamless Context Switching</h4>
                
                <div className="space-y-4">
                  {personas.map((persona, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                        activePersona === index
                          ? `${persona.bgColor} ${persona.borderColor} border scale-105`
                          : 'bg-gray-800/20 border border-gray-700/20 opacity-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${persona.color} flex items-center justify-center`}>
                        <persona.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{persona.name}</div>
                        <div className="text-xs text-gray-400">{persona.description}</div>
                      </div>
                      {activePersona === index && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
                          <span className="text-xs text-[#5DB8FF]">Active</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <ArrowRight className="w-4 h-4" />
                    <span>Context automatically detected and adapted</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#5DB8FF]/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#5DB8FF]/20 rounded-full animate-ping delay-1000"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonaDemo;