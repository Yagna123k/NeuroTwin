import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Zap, ArrowUpRight, Check } from 'lucide-react';

const CTA = () => {
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

  const benefits = [
    "Start with 1-hour free training session",
    "No credit card required to begin",
    "Export your twin to any platform",
    "24/7 customer support during setup"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#161B22] to-[#0D1117] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#5DB8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to <span className="bg-gradient-to-r from-[#5DB8FF] via-[#8CD5FF] to-[#5DB8FF] bg-clip-text text-transparent">Multiply</span> Yourself?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who've already created their digital twins. 
              Start your transformation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full text-white font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#5DB8FF]/25 flex items-center gap-4">
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                Create Your NeuroTwin
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
              </button>
              
              <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <span className="underline underline-offset-4">Schedule a demo call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Benefits list */}
            <div className="bg-gradient-to-r from-gray-800/30 via-gray-900/30 to-gray-800/30 rounded-2xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 bg-gradient-to-br from-[#5DB8FF] to-[#3A9EFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-6">Trusted by teams at</div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["TechCorp", "InnovateAI", "FutureWorks", "DigitalEdge", "NextGen"].map((company, index) => (
                <div key={index} className="text-gray-500 font-medium text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;