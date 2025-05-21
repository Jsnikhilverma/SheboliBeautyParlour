import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
    }, 1500);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you! Get in touch with us for any inquiries or appointments."
        bgImage="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3"
      />

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="john.doe@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="input-field"
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="beauty-button"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
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
              Feel free to reach out to us through any of the channels below:
            </p>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="text-beauty-pink h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Beauty Street, Cityville, State 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="text-beauty-pink h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    (123) 456-7890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="text-beauty-pink h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    info@ Sheboli Beauty Salon.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-beauty-pink transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-beauty-pink transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-beauty-pink transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at our conveniently located salon for a premium beauty experience.
          </p>
        </div>
        
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.214192152984!2d-73.99033798458638!3d40.70382747932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2fa4399%3A0x9a0c694573614861!2sWall%20Street!5e0!3m2!1sen!2sus!4v1629975068989!5m2!1sen!2sus"
            width="100%" 
            height="500" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Serenity Beauty Salon Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
