
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Book Now", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for transparent navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "py-2 glassmorphism border-b border-white/10" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <span className="text-2xl font-serif font-medium">
              <span className={`${isScrolled ? "text-gray-800" : "text-white"} transition-colors duration-300`}>
              Sheboli<span className="bg-clip-text text-transparent beauty-gradient">Beauty</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                      location.pathname === link.path
                        ? isScrolled 
                          ? "text-gray-800 bg-beauty-pink/60" 
                          : "text-white bg-white/20"
                        : isScrolled 
                          ? "text-gray-800 hover:bg-beauty-pink/30" 
                          : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.span
                        layoutId="navbar-highlight"
                        className="absolute inset-0 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/booking" 
                  className={`beauty-button ml-2 ${isScrolled ? "text-gray-800" : "border-2 border-white text-white hover:bg-white hover:text-gray-800"}`}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`lg:hidden p-2 rounded-full ${
              isScrolled 
                ? "text-gray-800 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-20 lg:hidden overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg ${
                          location.pathname === link.path
                            ? "bg-beauty-pink/30 text-gray-800"
                            : "text-gray-800 hover:bg-beauty-pink/10"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-4"
                  >
                    <Link to="/booking" className="beauty-button w-full text-center block">
                      Book Appointment
                    </Link>
                  </motion.div>
                </nav>
                
                {/* Decorative elements */}
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full beauty-gradient opacity-20 blur-2xl"></div>
                <div className="absolute top-20 left-5 w-20 h-20 rounded-full bg-beauty-peach opacity-20 blur-xl"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
