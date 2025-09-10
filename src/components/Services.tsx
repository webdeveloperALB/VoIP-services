import React from 'react';
import { Shield, Phone, Headphones, Users, Lock, Zap, Globe, Monitor, CreditCard, MessageSquare, Wifi, Code, Router, Settings, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Router,
      title: "Call Routing & Management",
      description: "Advanced call management systems for optimal performance and reliability.",
      features: ["Intelligent call routing", "Load balancing", "Failover systems", "Call queuing"]
    },
    {
      icon: Zap,
      title: "Voice Quality & Optimization",
      description: "Superior voice quality through advanced optimization technologies.",
      features: ["Codec selection (G.711, G.729, etc.)", "Bandwidth optimization", "Jitter buffer management", "Echo cancellation"]
    },
    {
      icon: Shield,
      title: "Security & Encryption",
      description: "Military-grade security protocols to protect your communications.",
      features: ["SRTP/ZRTP encryption", "SIP authentication", "Firewall traversal", "Fraud detection"]
    },
    {
      icon: Settings,
      title: "Integration Services",
      description: "Seamless integration with your existing business systems and applications.",
      features: ["CRM integration", "API connectivity", "Webhook support", "Third-party app connections"]
    },
    {
      icon: Phone,
      title: "Inbound Numbers",
      description: "Receive calls and trigger email notifications through remote servers for enhanced communication.",
      features: ["Call reception", "Email notifications", "Remote server integration", "Automated responses"]
    },
    {
      icon: Phone,
      title: "Outbound Numbers",
      description: "Verification calls that integrate seamlessly with email services for complete communication solutions.",
      features: ["Verification calls", "Email service integration", "Automated calling", "Communication tracking"]
    },
    {
      icon: Mail,
      title: "Remote Email Server - Financial & Crypto",
      description: "Integrated email services with financial and cryptocurrency platforms for secure verification and automated communications.",
      features: ["Financial verification emails", "Crypto platform integration", "Email-to-voice notifications", "Automated transaction responses"]
    },
    {
      icon: Mail,
      title: "Remote Email Server - Enterprise",
      description: "Enterprise-grade email services for business communications, notifications, and seamless voice integration.",
      features: ["Business notifications", "Enterprise integrations", "Voice-email synchronization", "Custom API connections"]
    },
    {
      icon: Globe,
      title: "Unified Communication Platform",
      description: "Complete integration where voice and email services work together seamlessly across all channels.",
      features: ["Voice-email synchronization", "Cross-channel communication", "Unified messaging", "Seamless integration"]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VoIP Services Subcategories
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive VoIP solutions with integrated email services creating a unified communication platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group binary-hover p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900/90 to-black/80 border border-cyan-500/40 rounded-xl hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <div className="absolute -top-2 -left-2 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-1 md:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/50">
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-xs sm:text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300">
                  <span>Learn More</span>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border border-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;