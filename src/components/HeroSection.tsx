
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
  withOverlay?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  bgImage,
  withOverlay = true,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {withOverlay && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        )}
      </motion.div>
      
      {/* Floating shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full bg-beauty-pink opacity-30 blur-2xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[15%] w-40 h-40 rounded-full bg-beauty-lavender opacity-30 blur-2xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premium Beauty Experience
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 text-white leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg"
            >
              {subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to={ctaLink} 
                className="beauty-button inline-flex items-center text-gray-800 group px-8 py-4"
              >
                <span>{ctaText}</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/services" 
                className="px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm text-white hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full beauty-gradient opacity-60 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-beauty-cream opacity-60 blur-xl"></div>
              
              {/* Image container with glass effect */}
              {/* <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3" 
                  alt="Beauty treatment" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-beauty-pink"></div>
                      <span className="text-white font-medium">Featured Service</span>
                    </div>
                    <p className="text-white/90 text-sm">Experience our signature facial treatment, designed to revitalize your skin</p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
