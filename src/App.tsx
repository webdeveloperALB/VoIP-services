import React from 'react';
import Header from './components/Header';
import CodeMatrix from './components/CodeMatrix';
import HexGrid from './components/HexGrid';
import HackingTerminal from './components/HackingTerminal';
import SystemStatus from './components/SystemStatus';
import CircuitBoard from './components/CircuitBoard';
import NetworkLines from './components/NetworkLines';
import NetworkTopology from './components/NetworkTopology';
import DataStream from './components/DataStream';
import GlitchEffect from './components/GlitchEffect';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        {/* Cybersecurity Background Effects */}
        <CodeMatrix />
        <NetworkTopology />
        <HexGrid />
        <CircuitBoard />
        <NetworkLines />
        <DataStream />
        <GlitchEffect />
        <HackingTerminal />
        <SystemStatus />
        
        {/* Base background */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 -z-10"></div>
        
        <div className="relative z-10">
          <Header />
          <Hero />
          <WhyChooseUs />
          <Services />
          <Features />
          <Stats />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;