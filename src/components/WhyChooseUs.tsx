import React from 'react';
import { useState, useEffect } from 'react';
import { Shield, Globe, Cpu, Lock, Zap, Code } from 'lucide-react';

const WhyChooseUs = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const voipSecurityCommands = [
    { 
      command: 'voip-scanner --scan-network 192.168.1.0/24',
      responses: [
        'Scanning VoIP devices on network...',
        'Found 12 SIP endpoints',
        'Found 3 PBX systems',
        'Found 1 SBC (Session Border Controller)',
        'Scan complete - All devices secured'
      ]
    },
    {
      command: 'sip-security --enable-encryption',
      responses: [
        'Enabling SRTP encryption...',
        'Configuring TLS for SIP signaling...',
        'Setting up ZRTP key exchange...',
        'VoIP encryption: ACTIVE',
        'All calls now encrypted end-to-end'
      ]
    },
    {
      command: 'call-center-monitor --status',
      responses: [
        'Active agents: 156',
        'Current calls: 2,847',
        'Call quality: 99.8% HD',
        'Latency: 28ms average',
        'Security threats blocked: 0'
      ]
    },
    {
      command: 'voip-firewall --update-rules',
      responses: [
        'Updating SIP firewall rules...',
        'Blocking suspicious traffic patterns',
        'Enabling DDoS protection',
        'Rate limiting configured',
        'VoIP firewall: SECURED'
      ]
    },
    {
      command: 'fraud-detection --analyze-calls',
      responses: [
        'Analyzing call patterns...',
        'Checking for toll fraud...',
        'Validating caller authentication...',
        'No fraudulent activity detected',
        'Call center security: OPTIMAL'
      ]
    }
  ];

  useEffect(() => {
    let commandIndex = 0;
    let responseIndex = 0;
    let charIndex = 0;
    let isShowingCommand = true;

    const typeText = () => {
      if (isShowingCommand) {
        const command = voipSecurityCommands[commandIndex].command;
        if (charIndex < command.length) {
          setCurrentLine(command.substring(0, charIndex + 1));
          charIndex++;
          setIsTyping(true);
          setTimeout(typeText, 50 + Math.random() * 50);
        } else {
          // Command complete
          setTerminalLines(prev => {
            const newLines = [...prev];
            if (newLines.length > 20) newLines.shift();
            newLines.push(`root@cybervoip:~# ${command}`);
            return newLines;
          });
          setCurrentLine('');
          setIsTyping(false);
          isShowingCommand = false;
          charIndex = 0;
          responseIndex = 0;
          setTimeout(typeText, 500);
        }
      } else {
        // Show responses
        const responses = voipSecurityCommands[commandIndex].responses;
        if (responseIndex < responses.length) {
          setTerminalLines(prev => {
            const newLines = [...prev];
            if (newLines.length > 20) newLines.shift();
            newLines.push(responses[responseIndex]);
            return newLines;
          });
          responseIndex++;
          setTimeout(typeText, 800 + Math.random() * 400);
        } else {
          // Move to next command
          commandIndex = (commandIndex + 1) % voipSecurityCommands.length;
          isShowingCommand = true;
          setTimeout(typeText, 2000);
        }
      }
    };

    const initialDelay = setTimeout(typeText, 1000);
    return () => clearTimeout(initialDelay);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Advanced encryption and threat detection"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Worldwide network coverage and reliability"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Smart monitoring and optimization"
    },
    {
      icon: Lock,
      title: "Enterprise Compliance",
      description: "SOC 2, HIPAA, and GDPR certified"
    },
    {
      icon: Zap,
      title: "99.97% Uptime",
      description: "Guaranteed service availability"
    },
    {
      icon: Code,
      title: "Custom Integration",
      description: "Seamless API and webhook support"
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-black min-h-screen flex">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 z-1"></div>
      
      <div className="w-full px-6 relative z-20 flex items-center justify-start h-full">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="relative z-10 bg-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mr-8">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/40 rounded-full px-4 py-2 mb-4">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-mono">SECURE_PROTOCOL_ACTIVE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                <span className="text-white">Why Choose </span>
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  CyberVoIP?
                </span>
              </h2>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                Reliable, Scalable & Secure
                <br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Communication Solutions
                </span>
              </h3>
              
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                At <span className="text-green-400 font-semibold">CyberVoIP</span>, we specialize in delivering 
                <span className="text-cyan-400"> professional-grade VoIP</span>, 
                <span className="text-green-400"> IT support</span>, and 
                <span className="text-cyan-400"> remote infrastructure services</span>.
              </p>
              
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Whether you're running a call center, launching a startup, or scaling your business, 
                our tailored solutions — from CRM systems to secure VPNs and custom software — 
                ensure seamless operations and connectivity.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 bg-gradient-to-br from-gray-900/95 to-black/90 border border-green-500/60 rounded-lg hover:border-green-400/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - VoIP Security Terminal */}
          <div className="hidden lg:block relative z-10 bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-green-500/50 max-w-xl w-full">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-green-500/30">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-green-400 font-mono text-sm">VoIP Security Console</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-mono">SECURE</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="font-mono text-xs h-80 overflow-hidden">
              <div className="space-y-1">
                {terminalLines.filter(line => typeof line === 'string').map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith('root@cybervoip:~#') 
                        ? 'text-green-400' 
                        : line.includes('ACTIVE') || line.includes('SECURED') || line.includes('OPTIMAL')
                          ? 'text-cyan-400'
                          : line.includes('Found') || line.includes('agents:') || line.includes('calls:')
                            ? 'text-yellow-400'
                            : line.includes('Enabling') || line.includes('Configuring') || line.includes('Setting')
                              ? 'text-purple-400'
                              : 'text-gray-300'
                    } leading-relaxed`}
                    style={{ 
                      animation: 'fadeIn 0.5s ease-in',
                      animationDelay: `${index * 0.05}s` 
                    }}
                  >
                    {line}
                  </div>
                ))}
                
                {currentLine && (
                  <div className="text-green-400 leading-relaxed">
                    root@cybervoip:~# {currentLine}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </div>
                )}
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-4 pt-3 border-t border-green-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-4 text-gray-400">
                <span>CPU: 12%</span>
                <span>RAM: 2.1GB</span>
                <span>Network: 847Mbps</span>
              </div>
              <div className="text-green-400">
                Uptime: 99.97%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;