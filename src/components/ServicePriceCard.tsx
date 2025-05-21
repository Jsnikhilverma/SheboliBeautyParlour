
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

interface ServicePriceCardProps {
  category: string;
  services: ServiceItem[];
  index: number;
}

const ServicePriceCard = ({ category, services, index }: ServicePriceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg shadow-md bg-white"
    >
      <h3 className="text-xl font-serif mb-6 pb-2 border-b">{category}</h3>
      
      <div className="space-y-6">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col md:flex-row justify-between">
            <div className="mb-2 md:mb-0">
              <h4 className="font-medium">{service.name}</h4>
              {service.description && (
                <p className="text-sm text-gray-500">{service.description}</p>
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
              <span className="text-sm text-gray-500">{service.duration}</span>
              <span className="font-medium">${service.price}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/booking" className="beauty-button inline-block text-gray-800 text-sm">
          Book Appointment
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicePriceCard;
