import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Zap, 
  Brain, 
  Users, 
  Mic, 
  Calendar, 
  Globe, 
  Shield,
  ArrowRight,
  Sparkles,
  Star,
  Crown,
  Building,
  ChevronRight,
  Play,
  Infinity
} from 'lucide-react';

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
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
      
      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="pricingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {[...Array(6)].map((_, i) => (
          <path 
            key={i}
            d={`M${100 + i * 200},${200 + Math.sin(i) * 100} Q${300 + i * 150},${150 + Math.cos(i) * 80} ${500 + i * 100},${200 + Math.sin(i * 1.5) * 120}`}
            stroke="url(#pricingGradient)" 
            strokeWidth="1" 
            fill="none"
            className="animate-pulse"
            style={{
              animationDuration: `${4 + i * 0.5}s`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const PersonaMultiplier = () => {
  const [count, setCount] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev >= 5 ? 1 : prev + 1);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        {[...Array(count)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full flex items-center justify-center shadow-lg animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <Brain className="w-6 h-6 text-white" />
          </div>
        ))}
        {count < 5 && (
          <div className="w-12 h-12 border-2 border-dashed border-[#5DB8FF]/40 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-ping"></div>
          </div>
        )}
      </div>
      <ArrowRight className="w-6 h-6 text-[#5DB8FF] animate-pulse" />
      <div className="text-[#8CD5FF] font-bold text-lg">
        {count === 1 ? "One Self" : count === 5 ? "Infinite Selves" : `${count} Selves`}
      </div>
    </div>
  );
};

const PricingCard = ({ plan, index, isVisible, isPopular = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      } ${isPopular ? 'scale-105 z-10' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full text-white text-sm font-bold shadow-lg">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Main card */}
      <div className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 h-full ${
        isPopular
          ? 'bg-gradient-to-br from-[#5DB8FF]/20 via-[#8CD5FF]/10 to-[#5DB8FF]/20 border-[#5DB8FF]/40 shadow-2xl shadow-[#5DB8FF]/20'
          : 'bg-gradient-to-br from-white/5 via-white/10 to-white/5 border-white/10 hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10'
      } group-hover:scale-105 group-hover:shadow-2xl`}>
        
        {/* Plan header */}
        <div className="text-center mb-8">
          <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl ${
            plan.gradient
          }`}>
            <plan.icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-4xl font-black text-white">{plan.price}</span>
            {plan.price !== 'Custom' && plan.price !== '$0' && (
              <span className="text-gray-400 text-lg">/ mo</span>
            )}
          </div>
          
          <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isPopular ? 'bg-[#5DB8FF]' : 'bg-gray-600'
              }`}>
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 group/btn ${
          isPopular
            ? 'bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] text-white hover:scale-105 hover:shadow-xl hover:shadow-[#5DB8FF]/30'
            : plan.name === 'Enterprise'
            ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}>
          <span>{plan.cta}</span>
          <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        {/* Hover effects */}
        {isHovered && (
          <>
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
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
            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl blur-xl opacity-20 -z-10`}></div>
          </>
        )}

        {/* Border animation for popular */}
        {isPopular && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
        )}
      </div>
    </div>
  );
};

const AddOnCard = ({ addon, index, isVisible }) => {
  return (
    <div
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:scale-105">
        
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center shadow-lg`}>
            <addon.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white group-hover:text-[#8CD5FF] transition-colors">
              {addon.name}
            </h4>
            <p className="text-gray-400 text-sm">{addon.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">{addon.price}</span>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors">
            Add
          </button>
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${addon.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [plansVisible, setPlansVisible] = useState(false);
  const [addonsVisible, setAddonsVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const addonsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for exploring",
      icon: Play,
      gradient: "from-gray-500 to-gray-600",
      features: [
        "1 basic persona (Text-only)",
        "Limited memory",
        "No voice layer",
        "Manual task execution",
        "Basic dashboard"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$39",
      description: "For power users",
      icon: Zap,
      gradient: "from-[#5DB8FF] to-[#8CD5FF]",
      features: [
        "3 advanced personas",
        "Smart memory per role",
        "Real-time SynthVoice (limited)",
        "Semi-autonomous actions",
        "Persona dashboard",
        "Email & chat integration"
      ],
      cta: "Upgrade to Pro"
    },
    {
      name: "Creator",
      price: "$99",
      description: "For content creators",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "10 personas with full memory",
        "Unlimited voice clone access",
        "Podcast & Zoom persona support",
        "Mobile + SDK integration",
        "Content-style tuning",
        "Priority support"
      ],
      cta: "Become a Creator"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Starts at $299/mo",
      icon: Building,
      gradient: "from-indigo-500 to-purple-600",
      features: [
        "10-50 Personas",
        "Custom voice packs",
        "API & AI-as-a-Service",
        "Org-level memory system",
        "Syncable clones across team",
        "AI agent training",
        "Dedicated support"
      ],
      cta: "Contact Sales"
    }
  ];

  const addons = [
    {
      name: "Additional Personas",
      description: "Scale beyond your plan limits",
      price: "$9/mo",
      icon: Users,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Premium Voice Packs",
      description: "Celebrity & custom voices",
      price: "$19/mo",
      icon: Mic,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Clone Marketplace",
      description: "Access community personas",
      price: "$14/mo",
      icon: Globe,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Integrations",
      description: "Slack, Notion, Zoom, Discord",
      price: "$29/mo",
      icon: Calendar,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible, threshold: 0.3 },
      { ref: plansRef, setter: setPlansVisible, threshold: 0.1 },
      { ref: addonsRef, setter: setAddonsVisible, threshold: 0.1 },
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
      {/* Particle field background */}
      <ParticleField />

      {/* Header Section */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>Choose Your Digital Evolution</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">Choose Your</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                Mindset
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Start with one self.{' '}
              <span className="text-[#8CD5FF] font-medium">Scale to infinite.</span>
            </p>

            {/* Persona multiplier animation */}
            <PersonaMultiplier />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={plansRef} className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                index={index}
                isVisible={plansVisible}
                isPopular={plan.name === 'Pro'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section ref={addonsRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Power <span className="text-[#5DB8FF]">Add-ons</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Extend your digital self with premium capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <AddOnCard
                key={index}
                addon={addon}
                index={index}
                isVisible={addonsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Quote */}
            <div className="relative mb-16">
              <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed italic">
                "This isn't productivity software.{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent font-medium">
                  This is your digital evolution.
                </span>"
              </blockquote>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#5DB8FF] rounded-full opacity-60"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `orbit ${12 + i * 2}s linear infinite`,
                      animationDelay: `${i * 1.5}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(${150 + i * 20}px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 mx-auto overflow-hidden border border-[#5DB8FF]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center gap-4">
                <Brain className="w-6 h-6 group-hover:animate-pulse" />
                <span>Train Your Twin Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            </button>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-400 mb-4">Trusted by innovators worldwide</div>
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
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 150px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 150px)); }
        }
      `}</style>
    </div>
  );
};

export default Pricing;