import React from 'react';
import { Shield, Cpu, Globe, Lock, Zap, Eye } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "VoIP-Specific Encryption",
      description: "Advanced SRTP/ZRTP encryption protocols specifically designed for voice communications with end-to-end call protection."
    },
    {
      icon: Cpu,
      title: "Voice Traffic AI Analysis",
      description: "Machine learning algorithms analyze voice patterns, detect fraud attempts, and identify suspicious calling behavior in real-time."
    },
    {
      icon: Globe,
      title: "Global VoIP Infrastructure",
      description: "Worldwide voice network with redundant carriers, geo-distributed SBCs, and optimized routing for international call centers."
    },
    {
      icon: Lock,
      title: "SIP Security Framework",
      description: "Comprehensive SIP protocol security with registration authentication, call authorization, and real-time threat blocking."
    },
    {
      icon: Zap,
      title: "Real-Time Call Monitoring",
      description: "Continuous monitoring of voice quality, call completion rates, fraud detection, and network performance with instant alerts."
    },
    {
      icon: Eye,
      title: "VoIP Analytics & Reporting",
      description: "Comprehensive call analytics including agent performance, customer satisfaction, call routing efficiency, and security incident reporting."
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
            <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs md:text-sm text-cyan-400">Advanced Security Features</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Security Technology
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Cutting-edge cybersecurity features designed to protect your communications 
            against evolving threats in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group binary-hover relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900/85 to-black/75 backdrop-blur-sm border border-gray-700/60 rounded-2xl hover:border-cyan-400/70 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-cyan-400" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated dots */}
                <div className="flex space-x-1 mt-6">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ animationDelay: `${dot * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-bl from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <div className="inline-flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-6 bg-gradient-to-r from-gray-900/50 to-black/50 border border-cyan-500/20 rounded-2xl mx-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">Ready to secure your communications?</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Get started with our enterprise-grade VoIP security platform.</p>
            </div>
            <button className="px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;