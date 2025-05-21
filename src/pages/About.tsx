
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const teamMembers = [
  {
    name: "Sophia Reynolds",
    role: "Founder & Master Stylist",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3",
    bio: "With over 15 years of experience, Sophia founded Serenity to create a sanctuary of beauty and wellness."
  },
  {
    name: "Daniel Chen",
    role: "Senior Hair Stylist",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3",
    bio: "Trained in Paris, Daniel specializes in cutting-edge hair techniques and color transformations."
  },
  {
    name: "Olivia Martinez",
    role: "Skin Care Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3",
    bio: "Certified esthetician with expertise in advanced facial treatments and skin rejuvenation."
  },
  {
    name: "James Wilson",
    role: "Nail Technician",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    bio: "James brings artistry to nails with his keen eye for detail and trendsetting designs."
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Meet our team and discover the story behind Sheboli Beauty Salon"
        bgImage="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3"
      />

      {/* Our Story Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6 text-gray-600">
            Sheboli Beauty Salon was founded in 2010 with a simple mission: to provide exceptional beauty services in a tranquil environment where clients can relax, rejuvenate, and leave feeling confident and beautiful.
            </p>
            <p className="mb-6 text-gray-600">
              What started as a small salon with three chairs has grown into a comprehensive beauty destination offering a wide range of services from hair styling to advanced skin treatments. Throughout our growth, we've maintained our commitment to personalized care and premium quality.
            </p>
            <p className="text-gray-600">
              Today, Serenity is proud to be a trusted name in beauty, with a loyal clientele who value our expertise, attention to detail, and warm, welcoming atmosphere.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3" 
                    alt="Salon interior" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3" 
                    alt="Beauty treatment" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3" 
                    alt="Hair styling" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-4.0.3" 
                    alt="Nail service" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Mission & Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white shadow-md"
          >
            <div className="beauty-gradient rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-serif text-xl">01</span>
            </div>
            <h3 className="text-xl font-serif mb-3">Excellence</h3>
            <p className="text-gray-600">We strive for perfection in every service we provide, using premium products and staying current with the latest techniques.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white shadow-md"
          >
            <div className="beauty-gradient rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-serif text-xl">02</span>
            </div>
            <h3 className="text-xl font-serif mb-3">Personalization</h3>
            <p className="text-gray-600">We believe in tailored approaches, understanding each client's unique needs to deliver customized beauty solutions.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white shadow-md"
          >
            <div className="beauty-gradient rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="font-serif text-xl">03</span>
            </div>
            <h3 className="text-xl font-serif mb-3">Sanctuary</h3>
            <p className="text-gray-600">We create a peaceful environment where clients can escape daily stress and enjoy moments of tranquility and self-care.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented professionals are passionate about making you look and feel beautiful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 rounded-lg overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif">{member.name}</h3>
              <p className="text-beauty-pink mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Certifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on maintaining the highest standards in the beauty industry.
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
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full flex items-center justify-center beauty-gradient">
                <img 
                  src={`https://img.icons8.com/cotton/100/medal--v1.png`} 
                  alt="Certification" 
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-lg font-serif text-center">Professional Beauty Association</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
