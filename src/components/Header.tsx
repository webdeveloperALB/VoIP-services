import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // Mobile dropdown
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string, e: React.MouseEvent) => {
    if (sectionId === "/tutorials") return;

    if (location.pathname === "/") {
      e.preventDefault();
      const targetSectionId = sectionId.replace("/#", "");
      const element = document.querySelector(`#${targetSectionId}`);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = sectionId;
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-cyan-500/20 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="px-0 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between px-4 sm:px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Voixel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 ">
            {location.pathname === "/tutorials" ? (
              <a
                href="/"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group text-sm xl:text-base"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <>
                {[
                  { name: "Services", href: "/#services" },
                  { name: "Features", href: "/#features" },
                  { name: "Why Choose Us", href: "/#why-choose-us" },
                  { name: "Stats", href: "/#stats" },
                  { name: "Tutorials", href: "/tutorials" },
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
                ))}

                {/* Contact Dropdown Desktop */}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 text-sm xl:text-base">
                    <span>Contact</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-black/95 border border-cyan-500/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a
                      href="https://wa.me/447423163505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/+447423163505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </>
            )}
          </nav>

          {/* Platform Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="http://212.83.133.34/mbilling/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-sm xl:text-base inline-block"
            >
              Platform 1
            </a>
            <a
              href="https://callcenter-obs.mmdsmart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-sm xl:text-base inline-block"
            >
              Platform 2
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-cyan-400 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-cyan-500/20 bg-black/95 backdrop-blur-md rounded-b-lg px-4 sm:px-4">
            <nav className="flex flex-col space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              {location.pathname === "/tutorials" ? (
                <a
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base py-1"
                >
                  Home
                </a>
              ) : (
                <>
                  {[ 
                    { name: "Services", href: "/#services" },
                    { name: "Features", href: "/#features" },
                    { name: "Why Choose Us", href: "/#why-choose-us" },
                    { name: "Stats", href: "/#stats" },
                    { name: "Tutorials", href: "/tutorials" },
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
                  ))}

                  {/* Contact dropdown Mobile */}
                  <div className="flex flex-col w-full">
                    <button
                      onClick={() => setIsContactOpen(!isContactOpen)}
                      className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 text-sm sm:text-base py-2"
                    >
                      <span>Contact</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isContactOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isContactOpen && (
                      <div className="flex flex-col w-full">
                        <a
                          href="https://wa.me/447423163505"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-gray-300 hover:text-cyan-400 text-sm sm:text-base py-2 px-6"
                        >
                          WhatsApp
                        </a>
                        <a
                          href="https://t.me/+447423163505"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-gray-300 hover:text-cyan-400 text-sm sm:text-base py-2 px-6"
                        >
                          Telegram
                        </a>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Mobile Platform Buttons */}
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4">
                {location.pathname !== "/tutorials" && (
                  <>
                    <a
                      href="http://212.83.133.34/mbilling/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg text-sm sm:text-base"
                    >
                      Platform 1
                    </a>
                    <a
                      href="https://callcenter-obs.mmdsmart.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 rounded-lg font-semibold text-sm sm:text-base"
                    >
                      Platform 2
                    </a>
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
