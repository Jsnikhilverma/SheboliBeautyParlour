
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const serviceData = [
  {
    icon: "https://img.icons8.com/cotton/64/spa-care.png",
    title: "Hair Styling",
    description: "Get a fresh look with our expert styling services including cuts, coloring, and treatments."
  },
  {
    icon: "https://img.icons8.com/cotton/64/facial-mask.png",
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our premium facial treatments tailored to your skin type."
  },
  {
    icon: "https://img.icons8.com/cotton/64/micro-needle.png",
    title: "Nail Services",
    description: "Express yourself with our professional manicure and pedicure services."
  },
  {
    icon: "https://img.icons8.com/cotton/64/spa.png",
    title: "Body Massage",
    description: "Relax and unwind with our therapeutic massage techniques for ultimate relaxation."
  },
];

const testimonialData = [
  {
    quote: "The stylist was amazing and really understood exactly what I wanted. My hair has never looked better!",
    author: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    service: "Hair Styling"
  },
  {
    quote: "The facial treatment was so relaxing and my skin is glowing! I've already booked my next appointment.",
    author: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    service: "Facial Treatment"
  },
  {
    quote: "The massage was exactly what I needed. The therapist was professional and the atmosphere was so peaceful.",
    author: "Emma Williams",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    service: "Body Massage"
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection 
        title="Elevate Your Beauty Experience"
        subtitle="Discover our premium beauty services tailored just for you. Look and feel your absolute best."
        ctaText="Book Now"
        ctaLink="/booking"
        bgImage="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3"
      />

      {/* About Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Welcome to Serenity</h2>
            <p className="mb-6 text-gray-600">
              At Serenity Beauty Salon, we believe everyone deserves to look and feel their best. Our expert team of stylists and therapists are dedicated to providing personalized services that enhance your natural beauty.
            </p>
            <p className="mb-6 text-gray-600">
              With years of experience and a passion for beauty, our professionals use only premium products to deliver outstanding results in a relaxing atmosphere.
            </p>
            <Link to="/about" className="beauty-button inline-block text-gray-800">
              About Us
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3" 
              alt="Salon interior" 
              className="rounded-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 p-4 beauty-gradient rounded-lg shadow-lg">
              <p className="text-lg font-serif">10+ Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our comprehensive range of beauty services designed to make you look and feel amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="beauty-button inline-block text-gray-800">
            View All Services
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section 
        className="py-24 relative"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-white mb-4"
          >
            Ready to Transform Your Look?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Book your appointment today and experience the ultimate beauty treatment from our expert stylists.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/booking" className="beauty-button inline-block text-gray-800">
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experiences at Serenity Beauty Salon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
              service={testimonial.service}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Follow Us on Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out our latest work and get inspired for your next visit.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-md"
            >
              <img 
                src={`https://source.unsplash.com/random/600x600?beauty,salon&sig=${index}`} 
                alt="Instagram post" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="beauty-button inline-flex items-center text-gray-800"
          >
            <Instagram className="mr-2" size={18} />
            Follow Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
