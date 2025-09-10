import React from 'react';
import { Shield, Phone, Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Solutions': [
      'VoIP Security',
      'Call Center Platform',
      'Enterprise Communications',
      'Threat Detection',
      'Compliance Solutions'
    ],
    'Resources': [
      'Documentation',
      'Security Whitepaper',
      'API Reference',
      'Best Practices',
      'Case Studies'
    ],
    'Company': [
      'About Us',
      'Careers',
      'Press',
      'Partners',
      'Contact'
    ],
    'Support': [
      'Help Center',
      '24/7 Support',
      'System Status',
      'Security Portal',
      'Training'
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-cyan-500/20 relative overflow-hidden mt-12 md:mt-16 lg:mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 py-8 md:py-12 lg:py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand section */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full animate-pulse"></div>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CyberVoIP
              </span>
            </div>
            
            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base">
              Next-generation VoIP security platform designed for enterprise call centers. 
              Military-grade encryption meets cutting-edge cybersecurity technology.
            </p>
            
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h4 className="text-white font-semibold mb-2 md:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base">{category}</h4>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security certifications */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="text-center mb-6">
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Security Certifications & Compliance</h4>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-8 text-gray-500">
              {['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'PCI DSS', 'GDPR'].map((cert) => (
                <div key={cert} className="mb-2 px-2 sm:px-3 md:px-4 py-1 md:py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <span className="text-xs sm:text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-gray-300 text-xs sm:text-sm md:text-base">+1 (800) CYBER-VOIP</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-gray-300 text-xs sm:text-sm md:text-base">security@cybervoip.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:col-span-2 md:col-span-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400" />
              <span className="text-gray-300 text-xs sm:text-sm md:text-base">Silicon Valley, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 CyberVoIP. All rights reserved. Built with enterprise-grade security.
            </div>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 md:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Security Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;