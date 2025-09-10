import React, { useEffect, useState } from 'react';
import { Shield, Users, Globe, Zap } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Shield,
      value: "99.97%",
      label: "Call Completion Rate",
      description: "Enterprise reliability"
    },
    {
      icon: Users,
      value: "50M+",
      label: "VoIP Calls Daily",
      description: "Call center volume"
    },
    {
      icon: Globe,
      value: "200+",
      label: "Countries Covered",
      description: "Global VoIP reach"
    },
    {
      icon: Zap,
      value: "<35ms",
      label: "Voice Latency",
      description: "Crystal clear calls"
    }
  ];

  const CountUp = ({ end, duration = 2000 }: { end: string; duration?: number }) => {
    const [count, setCount] = useState('0');

    useEffect(() => {
      if (!isVisible) return;

      // Extract numeric value from string like "99.99%" or "10M+"
      let numericValue: number;
      let suffix: string;
      
      if (end.includes('M+')) {
        numericValue = parseFloat(end.replace('M+', ''));
        suffix = 'M+';
      } else if (end.includes('%')) {
        numericValue = parseFloat(end.replace('%', ''));
        suffix = '%';
      } else if (end.includes('+')) {
        numericValue = parseFloat(end.replace('+', ''));
        suffix = '+';
      } else if (end.includes('ms')) {
        numericValue = parseFloat(end.replace('<', '').replace('ms', ''));
        suffix = 'ms';
      } else {
        numericValue = parseFloat(end.replace(/[^\d.]/g, ''));
        suffix = end.replace(/[\d.]/g, '');
      }
      
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentValue = progress * numericValue;
        
        if (end.includes('<')) {
          setCount('<' + Math.round(currentValue) + suffix);
        } else if (end.includes('.')) {
          setCount(currentValue.toFixed(2) + suffix);
        } else {
          setCount(Math.round(currentValue) + suffix);
        }
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Trusted by Enterprises Worldwide
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Our cybersecurity-first VoIP platform powers mission-critical communications 
            for organizations that can't afford downtime or security breaches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group binary-hover text-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900/85 to-black/75 backdrop-blur-sm border border-gray-700/60 rounded-2xl hover:border-cyan-400/70 transition-all duration-500"
            >
              {/* Icon with glow effect */}
              <div className="relative mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated counter */}
              <div className="mb-4">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {stat.description}
                </p>
              </div>

              {/* Progress bar animation */}
              <div className="w-full bg-gray-700/30 rounded-full h-0.5 sm:h-1 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-2000 ease-out"
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <p className="text-gray-400 mb-4 md:mb-8 px-4 text-sm md:text-base">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 opacity-50 px-4">
            {['Enterprise Corp', 'Global Tech', 'Secure Systems', 'CyberGuard Inc'].map((company, index) => (
              <div key={index} className="text-gray-500 font-semibold text-xs sm:text-sm md:text-lg mb-2 md:mb-4">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;