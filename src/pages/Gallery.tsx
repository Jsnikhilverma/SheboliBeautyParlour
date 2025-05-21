
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Instagram } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryItem from "@/components/GalleryItem";

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "hair", name: "Hair" },
  { id: "skin", name: "Skin" },
  { id: "nails", name: "Nails" },
  { id: "spa", name: "Spa" },
  { id: "bridal", name: "Bridal" },
];

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3",
    category: "hair",
    title: "Modern Bob Cut",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3",
    category: "hair",
    title: "Balayage Highlights",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-4.0.3",
    category: "skin",
    title: "Rejuvenating Facial",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3",
    category: "nails",
    title: "French Manicure",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3",
    category: "spa",
    title: "Hot Stone Massage",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3",
    category: "bridal",
    title: "Bridal Makeup",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
    category: "hair",
    title: "Classic Updo",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-4.0.3",
    category: "nails",
    title: "Nail Art Design",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3",
    category: "skin",
    title: "Hydrating Treatment",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3",
    category: "spa",
    title: "Aromatherapy Session",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3",
    category: "hair",
    title: "Hair Extensions",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3",
    category: "bridal",
    title: "Wedding Day Style",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(galleryItems);
    } else {
      const filtered = galleryItems.filter(
        (item) => item.category === activeCategory
      );
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  const openLightbox = (item) => {
    setCurrentImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <PageHeader 
        title="Our Gallery" 
        subtitle="Browse through our portfolio of beauty transformations"
        bgImage="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3"
      />

      <section className="section-container">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "beauty-gradient text-gray-800 shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id} onClick={() => openLightbox(item)} className="cursor-pointer">
              <GalleryItem 
                image={item.image}
                category={item.category}
                title={item.title}
                index={index}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[80vh]"
          >
            <img 
              src={currentImage.image} 
              alt={currentImage.title} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-xl font-serif">{currentImage.title}</h3>
              <p className="text-sm text-white/80 capitalize">{currentImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Instagram Banner */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-4">Follow Our Journey on Instagram</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest styles, transformations, and beauty tips by following us on Instagram.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beauty-button inline-flex items-center text-gray-800"
          >
            <Instagram className="mr-2" size={18} />
            @serenitybeauty
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
