
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <section 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {withOverlay && (
        <div className="absolute inset-0 bg-black/25"></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-4 text-white"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to={ctaLink} 
              className="beauty-button inline-block text-gray-800 font-medium"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
