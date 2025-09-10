import React, { useState } from 'react';
import { Mail, Phone, MapPin, Shield, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Secure Your Communications Today
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Ready to implement enterprise-grade VoIP security? Our cybersecurity experts 
            are standing by to design a custom solution for your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              {[
                {
                  icon: Phone,
                  title: "24/7 Security Hotline",
                  info: "+1 (800) CYBER-VOIP",
                  description: "Immediate response for security incidents"
                },
                {
                  icon: Mail,
                  title: "Enterprise Sales",
                  info: "enterprise@cybervoip.com",
                  description: "Custom solutions and pricing"
                },
                {
                  icon: MapPin,
                  title: "Global Headquarters",
                  info: "Silicon Valley, CA",
                  description: "Secure facilities worldwide"
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="binary-hover p-3 sm:p-4 md:p-6 bg-gradient-to-br from-gray-900/30 to-black/30 border border-gray-700/30 rounded-xl hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">{contact.title}</h4>
                      <p className="text-cyan-400 font-medium mb-1 md:mb-2 text-xs sm:text-sm md:text-base">{contact.info}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Assurance */}
            <div className="binary-hover p-3 sm:p-4 md:p-6 bg-gradient-to-br from-cyan-500/25 to-purple-500/25 border border-cyan-500/50 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Security Guarantee</h4>
                  <p className="text-gray-300 text-xs sm:text-sm mb-2 md:mb-3 leading-relaxed">
                    All communications are encrypted end-to-end. Your data never leaves our secure infrastructure.
                  </p>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-cyan-400">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Response time: &lt; 15 minutes</span>
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

export default Contact;