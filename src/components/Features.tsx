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
  ChevronRight
} from 'lucide-react';

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
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
      
      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        <path 
          d="M100,200 Q300,150 500,200 T900,180" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{animationDuration: '4s'}}
        />
        <path 
          d="M200,400 Q400,350 600,400 T1000,380" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{animationDuration: '6s', animationDelay: '2s'}}
        />
        <path 
          d="M150,600 Q350,550 550,600 T950,580" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse"
          style={{animationDuration: '5s', animationDelay: '1s'}}
        />
      </svg>
    </div>
  );
};

const FloatingOrb = ({ delay = 0, size = 'w-32 h-32', position = 'top-1/4 left-1/4' }) => {
  return (
    <div className={`absolute ${position} ${size} pointer-events-none`}>
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
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism card */}
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:shadow-2xl group-hover:shadow-[#5DB8FF]/20">
        
        {/* Floating icon with orbital animation */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
            <feature.icon className="w-8 h-8 text-white" />
            
            {/* Orbiting particles */}
            {isHovered && (
              <>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    style={{
                      animation: `orbit ${2 + i}s linear infinite`,
                      animationDelay: `${i * 0.7}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(35px)`
                    }}
                  />
                ))}
              </>
            )}
          </div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#8CD5FF] transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
            {feature.description}
          </p>

          {/* Feature badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white">{feature.badge}</span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/5 via-transparent to-[#8CD5FF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Border animation */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#5DB8FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
      </div>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: "Neural Clone Engine",
      description: "Learns passively from your emails, meetings, chats, content & code to create a thinking copy of you.",
      gradient: "from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF]",
      badge: "AI Learning"
    },
    {
      icon: Users,
      title: "Persona Splitter",
      description: "One brain, many roles. Spin off mini-you's — Student You, Founder You, Friend You — each with unique memory and voice.",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      badge: "Multi-Role"
    },
    {
      icon: Mic,
      title: "Voice Twin",
      description: "Real-time or pre-generated voice clone. Speak in meetings or narrate in your tone without ever showing up.",
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
      title: "Memory Stack Per Role",
      description: "Every persona has isolated memory and context — like having multiple versions of yourself for different parts of life.",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      badge: "Isolated Memory"
    },
    {
      icon: Zap,
      title: "Role-Based Task Delegation",
      description: "Assign tasks directly to \"Founder You\" or \"Creative You\" — your Twins handle them in your tone and decision style.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      badge: "Smart Delegation"
    },
    {
      icon: Globe,
      title: "Synced Web Interface",
      description: "Communicate with your Twin via chat or voice. Switch roles, review actions, or approve decisions from a dashboard.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      badge: "Web Sync"
    },
    {
      icon: Clock,
      title: "24/7 Presence",
      description: "Always online, infinitely scalable, never tired. Your Twin is available around the clock.",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      badge: "Always On"
    }
  ];

  useEffect(() => {
    const observers = [
      {
        ref: headerRef,
        setter: setHeaderVisible,
        threshold: 0.3
      },
      {
        ref: sectionRef,
        setter: setIsVisible,
        threshold: 0.1
      },
      {
        ref: ctaRef,
        setter: setCtaVisible,
        threshold: 0.3
      }
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

    return () => observers.forEach(({ ref }) => {
      if (ref.current) {
        // Observer cleanup handled automatically
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E1A] via-[#0D1117] to-[#161B22] relative overflow-hidden">
      {/* Particle field background */}
      <ParticleField />
      
      {/* Floating orbs */}
      <FloatingOrb delay={0} size="w-96 h-96" position="top-1/4 left-1/6" />
      <FloatingOrb delay={3} size="w-80 h-80" position="bottom-1/4 right-1/6" />
      <FloatingOrb delay={6} size="w-64 h-64" position="top-2/3 left-1/2" />

      {/* Header Section */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>The Future of Digital Identity</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">Your Digital Self.</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Superpowered.
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Each NeuroTwin feature is designed to extend your abilities — and{' '}
              <span className="text-[#8CD5FF] font-medium">multiply your time.</span>
            </p>

            {/* Animated scroll indicator */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors cursor-pointer group">
                <div className="w-6 h-10 border-2 border-gray-600 group-hover:border-gray-500 rounded-full p-1 transition-colors">
                  <div className="w-1 h-3 bg-gradient-to-b from-[#5DB8FF] to-transparent rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-medium">Explore Features</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={sectionRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Call to Action */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Orbital animation container */}
            <div className="relative mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Start Building Your{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
                  Second Self
                </span>
              </h2>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#5DB8FF] rounded-full opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `orbit ${8 + i * 2}s linear infinite`,
                      animationDelay: `${i * 1.3}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(${120 + i * 20}px)`
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the revolution of digital consciousness. Create your intelligent twin today.
            </p>

            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-3 overflow-hidden border border-[#5DB8FF]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Start Training Your Twin</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </button>
              
              <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10 relative overflow-hidden">
                  <Play className="w-5 h-5 ml-0.5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5DB8FF]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-400 mb-4">Trusted by innovators at</div>
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

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(15px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 35px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 35px)); }
        }
      `}</style>
    </div>
  );
};

export default Features;