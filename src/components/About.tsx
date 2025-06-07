import React, { useState, useEffect, useRef } from 'react';
import { User, MessageSquare, Mic, Brain, Zap, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-900 to-primary-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              What is <span className="bg-gradient-to-r from-silver-200 via-silver-100 to-silver-300 bg-clip-text text-transparent">NeuroTwin</span>?
            </h2>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto leading-relaxed">
              NeuroTwin passively learns from how you speak, write, decide, and act online. 
              It creates a multi-role digital clone that thinks like you, talks like you, and acts for you.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Brain,
                title: "Learns Your Patterns",
                description: "Analyzes your communication style, decision-making patterns, and behavioral preferences across all digital touchpoints."
              },
              {
                icon: User,
                title: "Multi-Role Personas",
                description: "Creates distinct versions like Founder You, Creative You, Student You — each with unique memory and behavior."
              },
              {
                icon: Mic,
                title: "SynthVoice Technology",
                description: "Real-time voice synthesis that captures your tone, inflection, and speaking patterns for authentic interactions."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-b from-primary-800/40 to-primary-900/40 p-8 rounded-2xl border border-silver-700/30 hover:border-silver-500/50 transition-all duration-500 backdrop-blur-sm transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-silver-500/20 to-silver-600/10 rounded-2xl flex items-center justify-center group-hover:from-silver-400/30 group-hover:to-silver-500/15 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-silver-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-silver-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Central concept illustration */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-800/50 via-primary-900/50 to-primary-800/50 rounded-3xl p-12 border border-silver-700/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-8">One Mind, Infinite Expressions</h3>
                
                <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                  {[
                    { label: "Founder You", icon: Users, color: "text-accent-400" },
                    { label: "Creative You", icon: Zap, color: "text-purple-400" },
                    { label: "Student You", icon: Brain, color: "text-green-400" },
                    { label: "Friend You", icon: MessageSquare, color: "text-pink-400" }
                  ].map((persona, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-primary-700 to-primary-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform border-2 border-silver-600 group-hover:border-silver-400 ${persona.color}`}>
                        <persona.icon className="w-8 h-8" />
                      </div>
                      <span className="text-sm text-silver-300 group-hover:text-white transition-colors">{persona.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center gap-4 text-silver-400">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-silver-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                      ))}
                    </div>
                    <span className="text-sm">All connected to your core intelligence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;