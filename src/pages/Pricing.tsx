
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ServicePriceCard from "@/components/ServicePriceCard";

const pricingCategories = [
  {
    category: "Hair Services",
    services: [
      { name: "Women's Haircut", price: "45", duration: "45 min" },
      { name: "Men's Haircut", price: "30", duration: "30 min" },
      { name: "Blowout & Styling", price: "35", duration: "45 min" },
      { name: "Full Color", price: "85", duration: "2 hrs", description: "Includes toner and styling" },
      { name: "Highlights", price: "120", duration: "2.5 hrs", description: "Partial or full highlights" },
      { name: "Balayage", price: "150", duration: "3 hrs" },
      { name: "Hair Treatment", price: "55", duration: "1 hr", description: "Deep conditioning or keratin" },
    ]
  },
  {
    category: "Skin Care",
    services: [
      { name: "Express Facial", price: "50", duration: "30 min" },
      { name: "Classic Facial", price: "85", duration: "1 hr" },
      { name: "Premium Facial", price: "120", duration: "1.5 hrs", description: "Includes massage and mask" },
      { name: "Acne Treatment", price: "95", duration: "1 hr" },
      { name: "Anti-Aging Treatment", price: "135", duration: "1.5 hrs" },
      { name: "Microdermabrasion", price: "110", duration: "45 min" },
    ]
  },
  {
    category: "Nail Services",
    services: [
      { name: "Classic Manicure", price: "25", duration: "30 min" },
      { name: "Gel Manicure", price: "40", duration: "45 min" },
      { name: "Classic Pedicure", price: "35", duration: "45 min" },
      { name: "Spa Pedicure", price: "55", duration: "1 hr" },
      { name: "Nail Art (per nail)", price: "5+", duration: "Varies" },
      { name: "Polish Change", price: "15", duration: "15 min" },
    ]
  },
  {
    category: "Spa Treatments",
    services: [
      { name: "Swedish Massage", price: "80", duration: "1 hr" },
      { name: "Deep Tissue Massage", price: "95", duration: "1 hr" },
      { name: "Hot Stone Massage", price: "110", duration: "1.5 hrs" },
      { name: "Aromatherapy Massage", price: "90", duration: "1 hr" },
      { name: "Body Scrub", price: "75", duration: "45 min" },
      { name: "Body Wrap", price: "85", duration: "1 hr" },
    ]
  },
];

const packageData = [
  {
    name: "Relaxation Package",
    price: "199",
    description: "Perfect for a day of ultimate relaxation and self-care",
    includes: [
      "Classic Facial (1 hr)",
      "Swedish Massage (1 hr)",
      "Spa Pedicure (1 hr)",
      "Complimentary herbal tea"
    ]
  },
  {
    name: "Bridal Package",
    price: "350",
    description: "Everything you need to look perfect on your special day",
    includes: [
      "Trial makeup and hair session",
      "Wedding day makeup application",
      "Wedding day hairstyling",
      "Classic Manicure & Pedicure",
      "Complimentary champagne"
    ]
  },
  {
    name: "Men's Grooming",
    price: "120",
    description: "A complete refresh for the modern gentleman",
    includes: [
      "Men's Haircut (30 min)",
      "Express Facial (30 min)",
      "Hand & Foot Grooming (45 min)",
      "Shoulder Massage (15 min)"
    ]
  },
];

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader 
        title="Our Pricing" 
        subtitle="Transparent pricing for all our services - quality beauty care at competitive rates"
        bgImage="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3"
      />

      {/* Individual Services */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Service Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive list of beauty services and their pricing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pricingCategories.map((category, index) => (
            <ServicePriceCard 
              key={index}
              category={category.category}
              services={category.services}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Packages & Specials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save with our carefully curated beauty packages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageData.map((pkg, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white shadow-md border border-gray-100 flex flex-col"
            >
              <h3 className="text-xl font-serif mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-serif">${pkg.price}</span>
                <span className="text-gray-500 ml-2">package</span>
              </div>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <div className="mb-8">
                <h4 className="font-medium mb-2">Includes:</h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-beauty-pink">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto text-center">
                <Link to="/booking" className="beauty-button inline-block text-gray-800 text-sm w-full">
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Membership Program</h2>
            <p className="mb-6 text-gray-600">
              Join our membership program and enjoy exclusive benefits including discounted services, priority booking, and special member-only events.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-beauty-pink">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">15% off all regular services</h3>
                  <p className="text-sm text-gray-500">Save on every visit with members-only pricing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-beauty-pink">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Priority Booking</h3>
                  <p className="text-sm text-gray-500">Book appointments before they're available to the public</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-beauty-pink">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Monthly Product Credit</h3>
                  <p className="text-sm text-gray-500">$10 monthly credit toward retail products</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-serif">$49</span>
              <span className="text-gray-500 ml-2">/ month</span>
            </div>

            <button className="beauty-button inline-block text-gray-800">
              Learn More
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3" 
              alt="Membership benefits" 
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 p-4 beauty-gradient rounded-lg shadow-lg">
              <p className="text-lg font-serif">Exclusive Benefits</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-container bg-gray-50">
        <div className="text-center">
          <h2 className="section-title mx-auto">Gift Cards</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Give the gift of beauty and relaxation with our gift cards, available in any denomination.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto p-6 rounded-xl beauty-gradient shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mb-16"></div>
            
            <h3 className="text-xl font-serif mb-1">Serenity Beauty Salon</h3>
            <p className="text-sm mb-6 opacity-75">Gift Card</p>
            
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-lg mb-4 border border-white/40">
              <p className="text-sm mb-1 opacity-75">Value</p>
              <p className="text-2xl font-serif">$100.00</p>
            </div>
            
            <button className="w-full py-3 bg-white text-gray-800 rounded-lg font-medium">
              Purchase Gift Card
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
