import React, { useEffect, useState } from 'react';

const CodeRain = () => {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const hackingCode = [
    'VOIP_SECURE_CHANNEL_INIT...',
    'CALL_ENCRYPTION_AES256_ON',
    'SIP_PROTOCOL_HARDENED',
    'VOICE_TRAFFIC_ENCRYPTED',
    'CALL_CENTER_FIREWALL_UP',
    'RTP_STREAM_SECURED',
    'PBXSEC_MONITORING_ACTIVE',
    'VOIP_INTRUSION_BLOCKED',
    'CALL_QUALITY_OPTIMIZED',
    'ENDPOINT_AUTH_VERIFIED',
    'VOICE_AI_THREAT_SCAN',
    'SBC_SECURITY_ENABLED',
    'CALL_ROUTING_SECURED',
    'VOIP_DDOS_PROTECTION_ON',
    'QUANTUM_VOICE_ENCRYPTION'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        if (newLines.length > 8) {
          newLines.shift();
        }
        const randomCode = hackingCode[Math.floor(Math.random() * hackingCode.length)];
        newLines.push(randomCode);
        return newLines;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 pointer-events-none z-10 opacity-80">
      <div className="bg-black/90 border border-green-500/50 rounded-lg p-4 font-mono text-xs max-w-xs shadow-2xl shadow-green-500/20">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400">VOIP_SEC_TERMINAL</span>
        </div>
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className="text-green-400 opacity-90 animate-pulse"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-green-600">$</span> {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeRain;