
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-medium">
            <span className="bg-clip-text text-transparent beauty-gradient">
              Serenity
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? "text-beauty-pink"
                  : "hover:text-beauty-pink"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 beauty-gradient"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="lg:hidden text-gray-800"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white pt-16 lg:hidden">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 text-lg font-medium border-b border-gray-100 ${
                    location.pathname === link.path
                      ? "text-beauty-pink"
                      : "hover:text-beauty-pink"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="beauty-button mt-4 text-center">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
