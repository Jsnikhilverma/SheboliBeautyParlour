
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Serenity</h3>
            <p className="text-gray-600 mb-6">
              Elevate your beauty experience with our premium salon services delivered by certified professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-beauty-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-beauty-pink transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-beauty-pink transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-beauty-pink transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-beauty-pink transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-beauty-pink transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-beauty-pink transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-beauty-pink transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Clock size={16} className="mr-2" />
                <span>Mon - Fri: 9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Clock size={16} className="mr-2" />
                <span>Saturday: 9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Clock size={16} className="mr-2" />
                <span>Sunday: 10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Beauty Street, Salon City, SC 12345</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@serenitysalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Serenity Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
