
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, feedback, or to schedule an appointment"
        bgImage="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3"
      />

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-field min-h-[150px]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`beauty-button w-full ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Reach out to us directly or visit our salon.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="w-10 h-10 rounded-full beauty-gradient flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Beauty Street, Salon City, SC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="w-10 h-10 rounded-full beauty-gradient flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="w-10 h-10 rounded-full beauty-gradient flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600">info@serenitysalon.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <div className="w-10 h-10 rounded-full beauty-gradient flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1667864752632!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty salon location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "How far in advance should I book my appointment?",
              answer: "We recommend booking at least 1-2 weeks in advance for regular services and 3-4 weeks for specialized treatments or bridal services to ensure availability."
            },
            {
              question: "What is your cancellation policy?",
              answer: "We require a 24-hour notice for cancellations. Late cancellations or no-shows may be subject to a cancellation fee of 50% of the scheduled service."
            },
            {
              question: "Do you offer gift cards?",
              answer: "Yes! We offer digital and physical gift cards in any denomination, perfect for birthdays, holidays, or as a thoughtful gesture."
            },
            {
              question: "What forms of payment do you accept?",
              answer: "We accept cash, all major credit cards, and mobile payment methods like Apple Pay and Google Pay."
            },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="font-medium text-lg mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="py-16 beauty-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive beauty tips, exclusive offers, and updates about new services and products.
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
