import { } from 'react';
import { ArrowRight, Phone, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-20 relative overflow-hidden">
      {/* Animated elements */}
      <div className="absolute top-32 md:top-20 left-4 md:left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-48 md:top-40 right-4 md:right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-40 left-4 md:left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-500"></div>
      
      {/* Binary code floating elements */}
      <div className="absolute top-40 md:top-32 left-1/4 text-green-400 font-mono text-xs opacity-30 animate-pulse hidden sm:block">
        01001000 01100001 01100011 01101011
      </div>
      <div className="absolute bottom-32 right-1/4 text-cyan-400 font-mono text-xs opacity-30 animate-pulse delay-1000 hidden sm:block">
        11010011 10110101 01001110 11100001
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Enterprise VoIP
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Security Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Next-generation VoIP infrastructure designed specifically for call centers and contact centers. 
            Military-grade voice encryption, AI-powered fraud detection, and enterprise-scale reliability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 px-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-lg flex items-center space-x-2 transform hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg font-semibold text-lg flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {[
              { icon: Shield, title: "99.97% Call Success", desc: "Enterprise call completion" },
              { icon: Zap, title: "< 35ms Latency", desc: "Crystal clear voice quality" },
              { icon: Phone, title: "50M+ Daily Calls", desc: "Proven at scale" }
            ].map((item, index) => (
              <div key={index} className="group binary-hover p-4 md:p-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-xl hover:border-cyan-400/70 transition-all duration-300">
                <div className="relative mb-4">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mx-auto" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-gray-400 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;