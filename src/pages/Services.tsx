
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";

const serviceCategories = [
  { id: "all", name: "All Services" },
  { id: "hair", name: "Hair" },
  { id: "skin", name: "Skin" },
  { id: "nails", name: "Nails" },
  { id: "spa", name: "Spa" },
  { id: "bridal", name: "Bridal" },
];

const servicesData = [
  {
    id: 1,
    icon: "https://img.icons8.com/cotton/64/haircut.png",
    title: "Haircut & Styling",
    description: "Customized cuts and styling for all hair types and lengths.",
    category: "hair",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/cotton/64/mascara.png",
    title: "Hair Coloring",
    description: "From subtle highlights to bold transformations using premium hair dyes.",
    category: "hair",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/cotton/64/spa-care.png",
    title: "Hair Treatments",
    description: "Restorative treatments for damaged hair, including keratin and deep conditioning.",
    category: "hair",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/cotton/64/facial-mask.png",
    title: "Classic Facial",
    description: "Cleansing, exfoliating, and hydrating facial to revitalize your skin.",
    category: "skin",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/cotton/64/spa-care-2.png",
    title: "Advanced Facials",
    description: "Specialized treatments targeting specific skin concerns like aging or acne.",
    category: "skin",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/cotton/64/micro-needle.png",
    title: "Skin Rejuvenation",
    description: "Non-invasive treatments to improve skin texture and appearance.",
    category: "skin",
  },
  {
    id: 7,
    icon: "https://img.icons8.com/cotton/64/nail-polish.png",
    title: "Manicure",
    description: "Nail shaping, cuticle care, and polish application for beautiful hands.",
    category: "nails",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/cotton/64/pedicure.png",
    title: "Pedicure",
    description: "Foot soak, exfoliation, and nail care for refreshed feet.",
    category: "nails",
  },
  {
    id: 9,
    icon: "https://img.icons8.com/cotton/64/paint-palette.png",
    title: "Nail Art",
    description: "Creative designs and embellishments to make your nails stand out.",
    category: "nails",
  },
  {
    id: 10,
    icon: "https://img.icons8.com/cotton/64/spa.png",
    title: "Full Body Massage",
    description: "Relaxing massage techniques to release tension and promote relaxation.",
    category: "spa",
  },
  {
    id: 11,
    icon: "https://img.icons8.com/cotton/64/spa-flower.png",
    title: "Body Scrubs",
    description: "Exfoliating treatments that leave your skin smooth and glowing.",
    category: "spa",
  },
  {
    id: 12,
    icon: "https://img.icons8.com/cotton/64/meditation.png",
    title: "Aromatherapy",
    description: "Essential oil treatments to balance mind, body, and spirit.",
    category: "spa",
  },
  {
    id: 13,
    icon: "https://img.icons8.com/cotton/64/wedding-bouquet-2.png",
    title: "Bridal Hair & Makeup",
    description: "Customized looks for your special day, including trials and day-of services.",
    category: "bridal",
  },
  {
    id: 14,
    icon: "https://img.icons8.com/cotton/64/wedding-cake.png",
    title: "Bridal Party Packages",
    description: "Comprehensive beauty services for the entire wedding party.",
    category: "bridal",
  },
  {
    id: 15,
    icon: "https://img.icons8.com/cotton/64/wedding-rings.png",
    title: "Pre-Wedding Packages",
    description: "Multi-session treatments to prepare for your big day.",
    category: "bridal",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredServices(servicesData);
    } else {
      const filtered = servicesData.filter(
        (service) => service.category === activeCategory
      );
      setFilteredServices(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Discover our comprehensive range of beauty and wellness services"
        bgImage="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3"
      />

      <section className="section-container">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Detailed Service Process */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Service Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a personalized experience from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-beauty-pink/30 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {["Consultation", "Service Selection", "Expert Treatment", "Follow Up"].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-serif mb-4">{step}</h3>
                  <p className="text-gray-600">
                    {step === "Consultation" && 
                      "We begin with a thorough consultation to understand your needs, preferences, and goals for your visit."}
                    {step === "Service Selection" && 
                      "Our experts help you choose the perfect services and products tailored to your specific requirements."}
                    {step === "Expert Treatment" && 
                      "Relax and enjoy as our skilled professionals deliver exceptional service using premium products and techniques."}
                    {step === "Follow Up" && 
                      "We provide aftercare advice and product recommendations to maintain your results at home."}
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full beauty-gradient flex items-center justify-center z-10">
                  <span className="font-serif text-lg">{index + 1}</span>
                </div>
                <div className="md:w-1/2 p-6">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?beauty,salon,${step}&sig=${index}`}
                    alt={step}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Use */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Premium Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We use only the highest quality products for all our services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 text-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-gray-100">
                <img 
                  src={`https://source.unsplash.com/random/100x100?cosmetics,product&sig=${item}`}
                  alt="Product" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif">Premium Brand {item}</h3>
              <p className="text-sm text-gray-500">High-quality, sustainable products</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
