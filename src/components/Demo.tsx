import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Brain, 
  Zap, 
  FileStack, 
  RotateCcw, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  Eye,
  Users,
  Calendar,
  Mic,
  Monitor,
  ChevronRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Activity,
  Volume2,
  Pause
} from 'lucide-react';

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing neural patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="demoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5DB8FF" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#8CD5FF" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#5DB8FF" stopOpacity="0.1"/>
          </radialGradient>
          <filter id="demoBlur">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Dynamic neural connections */}
        {[...Array(10)].map((_, i) => (
          <path 
            key={i}
            d={`M${80 + i * 120},${180 + Math.sin(i * 0.6) * 120} Q${250 + i * 100},${120 + Math.cos(i * 0.8) * 100} ${400 + i * 110},${180 + Math.sin(i * 1.4) * 140} T${700 + i * 80},${160 + Math.cos(i * 1.8) * 120}`}
            stroke="url(#demoGlow)" 
            strokeWidth="1.5" 
            fill="none" 
            filter="url(#demoBlur)"
            className="animate-pulse"
            style={{
              animationDuration: `${5 + i * 0.7}s`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
        
        {/* Neural nodes */}
        {[...Array(25)].map((_, i) => (
          <circle
            key={i}
            cx={120 + (i * 48)}
            cy={220 + Math.sin(i * 0.9) * 160}
            r="2"
            fill="url(#demoGlow)"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3.5s'
            }}
            filter="url(#demoBlur)"
          />
        ))}
      </svg>

      {/* Floating ambient elements */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[#5DB8FF]/8 via-[#8CD5FF]/4 to-[#5DB8FF]/8 blur-2xl"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${12 + Math.random() * 18}s ease-in-out infinite ${Math.random() * 8}s`,
            animationDirection: Math.random() > 0.5 ? 'normal' : 'reverse'
          }}
        />
      ))}
    </div>
  );
};

const VideoPlayer = ({ isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  return (
    <div 
      className={`relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video container with glassmorphism */}
      <div className="relative aspect-video rounded-3xl bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl group hover:shadow-[#5DB8FF]/20 transition-all duration-500">
        
        {/* Placeholder video content */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#0D1117] flex items-center justify-center">
          
          {/* Neural activity visualization */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central brain */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Brain className="w-16 h-16 text-white" />
              </div>
              
              {/* Pulsing rings */}
              <div className="absolute inset-0 border-2 border-[#5DB8FF]/30 rounded-full animate-ping"></div>
              <div className="absolute inset-0 border-2 border-[#8CD5FF]/20 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              
              {/* Data streams */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-gradient-to-t from-[#5DB8FF] to-transparent"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    animation: `dataFlow ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-80px)`
                  }}
                />
              ))}
            </div>

            {/* Floating UI elements */}
            <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center gap-2 text-white text-sm">
                <Activity className="w-4 h-4 text-green-400" />
                <span>Neural Processing Active</span>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center gap-2 text-white text-sm">
                <Clock className="w-4 h-4 text-[#5DB8FF]" />
                <span>Real-time Learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Play button overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="group/play w-24 h-24 bg-gradient-to-br from-[#5DB8FF] to-[#8CD5FF] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/20 hover:border-white/40"
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white ml-1" />
            ) : (
              <Play className="w-10 h-10 text-white ml-1" />
            )}
            
            {/* Ripple effect */}
            <div className="absolute inset-0 bg-[#5DB8FF] rounded-full animate-ping opacity-30 group-hover/play:opacity-50"></div>
          </button>
        </div>

        {/* Video controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-300 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#5DB8FF] to-[#8CD5FF] rounded-full w-1/3 transition-all duration-300"></div>
            </div>
            
            <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <Volume2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5DB8FF]/10 via-transparent to-[#8CD5FF]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Video caption */}
      <div className="text-center mt-6">
        <p className="text-gray-400 text-lg italic">
          "This is how your second brain works for you."
        </p>
      </div>
    </div>
  );
};

const DemoFeature = ({ feature, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group transition-all duration-700 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/10 hover:via-white/15 hover:to-white/10 group-hover:scale-105">
        
        {/* Icon with animation */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <feature.icon className="w-7 h-7 text-white" />
          
          {/* Orbiting particles */}
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    animation: `orbit ${2 + i * 0.5}s linear infinite`,
                    animationDelay: `${i * 0.3}s`,
                    transformOrigin: '0 0',
                    transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(30px)`
                  }}
                />
              ))}
            </>
          )}
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8CD5FF] transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {feature.description}
        </p>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
      </div>
    </div>
  );
};

const Demo = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [whyVisible, setWhyVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const demoFeatures = [
    {
      icon: Brain,
      title: "Neural Learning",
      description: "Watch how NeuroTwin learns from your digital behavior patterns",
      gradient: "from-[#5DB8FF] to-[#8CD5FF]"
    },
    {
      icon: Zap,
      title: "Smart Decisions",
      description: "See it make intelligent choices exactly like you would",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileStack,
      title: "Life Organization",
      description: "Observe how it organizes your tasks, thoughts, and workflows",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: RotateCcw,
      title: "Adaptive Workflows",
      description: "Real-time workflow adaptation built around your preferences",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Experience fluid, natural interactions with your AI twin",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderVisible, threshold: 0.3 },
      { ref: videoRef, setter: setVideoVisible, threshold: 0.2 },
      { ref: featuresRef, setter: setFeaturesVisible, threshold: 0.1 },
      { ref: whyRef, setter: setWhyVisible, threshold: 0.2 },
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
      {/* Neural background */}
      <NeuralBackground />

      {/* Hero Section */}
      <section ref={headerRef} className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1200 transform ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium mb-8 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              <Play className="w-4 h-4 text-[#5DB8FF] animate-pulse" />
              <span>Live Demo Experience</span>
              <div className="w-2 h-2 bg-[#5DB8FF] rounded-full animate-pulse"></div>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.85] tracking-tight mb-8">
              <span className="block mb-4">Experience NeuroTwin</span>
              <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent relative inline-block">
                in Action
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF]/30 via-[#8CD5FF]/50 to-[#5DB8FF]/30 blur-3xl opacity-30 animate-pulse"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              See how your AI twin thinks, acts, and transforms your workflow —{' '}
              <span className="text-[#8CD5FF] font-medium">in real time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section ref={videoRef} className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <VideoPlayer isVisible={videoVisible} />
          
          {/* Watch Full Demo Button */}
          <div className="text-center mt-12">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-3 mx-auto overflow-hidden border border-[#5DB8FF]/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex items-center gap-3">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Full Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
            </button>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section ref={featuresRef} className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              What You'll See in This <span className="text-[#5DB8FF]">Demo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive look at how your digital twin operates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {demoFeatures.map((feature, index) => (
              <DemoFeature
                key={index}
                feature={feature}
                index={index}
                isVisible={featuresVisible}
              />
            ))}
          </div>

          {/* Additional features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Eye, label: "Visual Learning", color: "text-blue-400" },
              { icon: Users, label: "Multi-Persona", color: "text-green-400" },
              { icon: Calendar, label: "Smart Scheduling", color: "text-purple-400" },
              { icon: Mic, label: "Voice Synthesis", color: "text-pink-400" }
            ].map((item, index) => (
              <div key={index} className="group text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                <div className={`w-12 h-12 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 flex items-center justify-center mb-3 mx-auto transition-colors ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section ref={whyRef} className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 transform ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Why It <span className="text-[#5DB8FF]">Matters</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 text-center italic">
                "This isn't just an automation tool. NeuroTwin is an extension of your mind — a digital you that works tirelessly, learns continuously, and evolves with every click, task, or thought."
              </blockquote>
              
              <div className="text-center">
                <p className="text-lg text-gray-400 leading-relaxed">
                  Watch it in action to understand why this is the{' '}
                  <span className="text-[#8CD5FF] font-medium">future of productivity.</span>
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-16 h-16 border border-[#5DB8FF]/20 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-[#5DB8FF]/60" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border border-[#8CD5FF]/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-[#8CD5FF]/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            
            {/* Main CTA */}
            <div className="relative mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">
                  Digital Twin?
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
                      animation: `orbit ${10 + i * 2}s linear infinite`,
                      animationDelay: `${i * 1.7}s`,
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(${120 + i * 15}px)`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-[#5DB8FF] via-[#3A9EFF] to-[#5DB8FF] rounded-2xl text-white font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/30 flex items-center gap-4 overflow-hidden border border-[#5DB8FF]/30">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Try the Beta Now</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </button>
              
              <button className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-gray-600 group-hover:border-[#5DB8FF] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#5DB8FF]/10">
                  <Users className="w-5 h-5" />
                </div>
                <span className="underline underline-offset-4 decoration-gray-600 group-hover:decoration-[#5DB8FF] transition-colors font-medium">Join the Waitlist</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 10,000+ early adopters</span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["TechCorp", "InnovateAI", "FutureWorks", "DigitalEdge", "NextGen"].map((company, index) => (
                  <div key={index} className="text-gray-500 font-medium hover:text-gray-400 transition-colors">
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
          25% { transform: translateY(-15px) translateX(8px) rotate(90deg); }
          50% { transform: translateY(-8px) translateX(-4px) rotate(180deg); }
          75% { transform: translateY(-20px) translateX(12px) rotate(270deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius, 120px)); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius, 120px)); }
        }
        
        @keyframes dataFlow {
          0% { transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-80px) scaleY(0); opacity: 0; }
          50% { transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-80px) scaleY(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(var(--rotation)) translateY(-80px) scaleY(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Demo;