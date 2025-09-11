import { } from 'react';
import { Download, FileText, Shield, Phone, Network, Settings, Users, BarChart3, Target, Play, LogIn } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';


const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Upload lists in vicidial and create list id",
      description: "Learn how to efficiently upload contact lists in Vicidial and create proper list IDs for your call center campaigns.",
      category: "VoIP Management",
      icon: FileText,
      pdfFile: "vicidial-upload-lists.pdf"
    },
    {
      id: 2,
      title: "How to make a MTR test for packet loss",
      description: "Master network diagnostics with MTR (My Traceroute) to identify packet loss and network performance issues.",
      category: "Network Security",
      icon: Network,
      pdfFile: "mtr-packet-loss-test.pdf"
    },
    {
      id: 3,
      title: "Change Caller ID in sipdirect",
      description: "Configure and customize caller ID settings in SIPDirect for professional call center operations.",
      category: "SIP Configuration",
      icon: Phone,
      pdfFile: "sipdirect-caller-id.pdf"
    },
    {
      id: 4,
      title: "Change caller ID in Dialplan Vicidial",
      description: "Advanced dialplan configuration in Vicidial to dynamically change caller ID based on campaigns.",
      category: "VoIP Security",
      icon: Shield,
      pdfFile: "vicidial-dialplan-caller-id.pdf"
    },
    {
      id: 5,
      title: "Remove seconds in anydesk, and delete folder",
      description: "Optimize AnyDesk performance by removing unnecessary files and configuring time display settings.",
      category: "System Management",
      icon: Settings,
      pdfFile: "anydesk-optimization.pdf"
    },
    {
      id: 6,
      title: "Create Users in vicidial & add new sip on phones vicidial",
      description: "Complete guide to user management in Vicidial including SIP phone configuration and setup.",
      category: "User Management",
      icon: Users,
      pdfFile: "vicidial-user-sip-setup.pdf"
    },
    {
      id: 7,
      title: "Check report for robocall, who type 1",
      description: "Analyze robocall reports and identify callers who pressed 1 for lead qualification and follow-up.",
      category: "Call Analytics",
      icon: BarChart3,
      pdfFile: "robocall-report-analysis.pdf"
    },
    {
      id: 8,
      title: "Add prefix (as random or static) in campaign autodial & Omit Phone Code Meaning",
      description: "Configure campaign prefixes for autodialing and understand phone code omission strategies.",
      category: "Campaign Management",
      icon: Target,
      pdfFile: "campaign-prefix-configuration.pdf"
    },
    {
      id: 9,
      title: "Activate robocall, and reset list",
      description: "Step-by-step guide to activating robocall campaigns and properly resetting contact lists.",
      category: "Campaign Operations",
      icon: Play,
      pdfFile: "robocall-activation-reset.pdf"
    },
    {
      id: 10,
      title: "Login Users in campaign autodial",
      description: "Manage user authentication and login procedures for automated dialing campaigns.",
      category: "User Authentication",
      icon: LogIn,
      pdfFile: "campaign-user-login.pdf"
    },
  ];

  const handleDownload = (pdfFile: string, title: string) => {
    try {
      const pdfUrl = `/pdfs/${pdfFile}`;

      // Create download link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${title.replace(/[^a-zA-Z0-9\s]/g, '-').replace(/\s+/g, '-')}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert(`Error downloading PDF: ${pdfFile}\n\nPlease check if the file exists in /public/pdfs/ folder.`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header />
      
      {/* Enhanced Hacking/VoIP Background */}
      <div className="fixed inset-0 z-0">
        {/* Matrix-style background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Floating binary code */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-green-400 font-mono text-xs opacity-20 animate-pulse binary-float-${i % 4}`}
            >
              {Math.random() > 0.5 ? '01001000' : '11010011'}
            </div>
          ))}
        </div>

        {/* VoIP network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="voipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff41" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00bcd4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#9c27b0" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#voipGradient)"
              strokeWidth="1"
              className="opacity-40"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          ))}
        </svg>

        {/* Cybersecurity hexagon pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="hexPattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon
                points="50,1 93,25 93,62 50,86 7,62 7,25"
                fill="none"
                stroke="#00ff41"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Tutorials</span>
            </h1>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="group relative p-8 bg-gradient-to-br from-gray-900/90 to-black/80 backdrop-blur-sm border border-green-500/40 rounded-2xl hover:border-green-400/70 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Category badge */}
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full px-3 py-1 mb-4">
                    <tutorial.icon className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400 font-mono">{tutorial.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {tutorial.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {tutorial.description}
                  </p>

                  {/* Download button */}
                  <button
                    onClick={() => handleDownload(tutorial.pdfFile, tutorial.title)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 transition-all duration-300 rounded-lg font-semibold text-black group-hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>

                  {/* Tutorial number */}
                  <div className="absolute top-2 right-8 w-8 h-8 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                    <span className="text-green-400 font-mono text-sm">{tutorial.id}</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 border border-green-500/20 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Need Custom Training?</h4>
                <p className="text-gray-400">Contact our security experts for personalized VoIP security training.</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 transition-all duration-300 rounded-lg font-semibold text-black">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tutorials;