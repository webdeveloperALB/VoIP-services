import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    // Handle tutorials page navigation (not a section)
    if (sectionId === '/tutorials') {
      // Let the link navigate normally to tutorials page
      return;
    }
    
    // If we're on the home page, prevent default and scroll to section
    if (location.pathname === '/') {
      e.preventDefault();
      const targetSectionId = sectionId.replace('/#', '');
      const element = document.querySelector(`#${targetSectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If we're on another page (like /tutorials), navigate to home and then scroll
    else {
      // Navigate to home page first
      window.location.href = sectionId;
      // The browser will handle the hash scrolling after navigation
    }
  };
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full animate-pulse"></div>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CyberVoIP
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {location.pathname === '/tutorials' ? (
              // Show only Home button on tutorials page
              <a
                href="/"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group text-sm xl:text-base"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              // Show normal navigation on other pages
              [
                { name: 'Services', href: '/#services' },
                { name: 'Features', href: '/#features' },
                { name: 'Why Choose Us', href: '/#why-choose-us' },
                { name: 'Stats', href: '/#stats' },
                { name: 'Tutorials', href: '/tutorials' },
                { name: 'Contact', href: '/#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSectionClick(item.href, e)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group text-sm xl:text-base"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button className="px-4 xl:px-6 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg text-sm xl:text-base">
              Login
            </button>
            <button className="px-4 xl:px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-sm xl:text-base">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden text-cyan-400 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-cyan-500/20 bg-black/95 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              {location.pathname === '/tutorials' ? (
                // Show only Home button on tutorials page (mobile)
                <a
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base py-1"
                >
                  Home
                </a>
              ) : (
                // Show normal navigation on other pages (mobile)
                [
                  { name: 'Services', href: '/#services' },
                  { name: 'Features', href: '/#features' },
                  { name: 'Why Choose Us', href: '/#why-choose-us' },
                  { name: 'Stats', href: '/#stats' },
                  { name: 'Tutorials', href: '/tutorials' },
                  { name: 'Contact', href: '/#contact' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleSectionClick(item.href, e);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base py-1"
                  >
                    {item.name}
                  </a>
                ))
              )}
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4">
                {location.pathname !== '/tutorials' && (
                  <>
                    <button className="px-4 sm:px-6 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg text-sm sm:text-base">
                      Login
                    </button>
                    <button className="px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-sm sm:text-base">
                      Get Started
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;