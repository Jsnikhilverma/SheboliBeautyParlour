
import { useState } from "react";
import { motion } from "framer-motion";

interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
  index: number;
}

const GalleryItem = ({ image, category, title, index }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="gallery-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ 
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: isHovered ? 1 : 0
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 transition-transform duration-300"
        style={{ 
          transform: isHovered ? 'translateY(0)' : 'translateY(1rem)',
          opacity: isHovered ? 1 : 0
        }}
      >
        <span className="text-xs text-beauty-pink uppercase font-medium">{category}</span>
        <h4 className="text-white font-serif">{title}</h4>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
