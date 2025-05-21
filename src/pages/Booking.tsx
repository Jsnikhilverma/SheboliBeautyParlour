
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const services = {
  hair: ["Women's Haircut", "Men's Haircut", "Hair Color", "Highlights", "Balayage", "Blowout"],
  skin: ["Express Facial", "Classic Facial", "Premium Facial", "Acne Treatment", "Anti-Aging Treatment"],
  nails: ["Classic Manicure", "Gel Manicure", "Classic Pedicure", "Spa Pedicure", "Nail Art"],
  spa: ["Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage", "Body Scrub", "Aromatherapy"],
};

const stylists = [
  { id: 1, name: "Sophia Reynolds", specialties: ["hair", "bridal"] },
  { id: 2, name: "Daniel Chen", specialties: ["hair"] },
  { id: 3, name: "Olivia Martinez", specialties: ["skin"] },
  { id: 4, name: "James Wilson", specialties: ["nails"] },
  { id: 5, name: "Elena Kim", specialties: ["spa", "skin"] },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceCategory: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [availableStylists, setAvailableStylists] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (formData.serviceCategory) {
      const filtered = stylists.filter(stylist => 
        stylist.specialties.includes(formData.serviceCategory)
      );
      setAvailableStylists(filtered);
    } else {
      setAvailableStylists([]);
    }
  }, [formData.serviceCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4);
      toast({
        title: "Appointment Booked!",
        description: "Your appointment has been successfully scheduled.",
      });
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Book an Appointment" 
        subtitle="Schedule your beauty service with our expert team"
        bgImage="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3"
      />

      <section className="section-container max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between">
            {["Choose Service", "Select Date & Time", "Your Details", "Confirmation"].map((step, index) => (
              <div 
                key={index} 
                className={`text-sm font-medium relative flex flex-col items-center ${
                  currentStep > index + 1 ? "text-beauty-pink" : 
                  currentStep === index + 1 ? "text-gray-800" : 
                  "text-gray-400"
                }`}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full mb-2 ${
                  currentStep > index + 1 ? "beauty-gradient" : 
                  currentStep === index + 1 ? "border-2 border-beauty-pink" :
                  "border-2 border-gray-200"
                }`}>
                  {currentStep > index + 1 ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="hidden sm:block">{step}</span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
            <div 
              className="absolute top-0 h-1 beauty-gradient transition-all duration-300"
              style={{ width: `${(currentStep - 1) * 33.3}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-serif mb-6">Choose Your Service</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Category
              </label>
              <select
                name="serviceCategory"
                value={formData.serviceCategory}
                onChange={handleInputChange}
                className="input-field"
                required
              >
                <option value="">Select a category</option>
                <option value="hair">Hair</option>
                <option value="skin">Skin</option>
                <option value="nails">Nails</option>
                <option value="spa">Spa</option>
              </select>
            </div>

            {formData.serviceCategory && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select a service</option>
                  {services[formData.serviceCategory]?.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.service && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stylist
                </label>
                <select
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Choose a stylist</option>
                  <option value="any">Any available stylist</option>
                  {availableStylists.map((stylist) => (
                    <option key={stylist.id} value={stylist.name}>
                      {stylist.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={!formData.service || !formData.stylist}
                className={`beauty-button ${
                  !formData.service || !formData.stylist ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Date & Time */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-serif mb-6">Select Date & Time</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="input-field"
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            {formData.date && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-3 text-sm border rounded-md transition-all ${
                        formData.time === time
                          ? "beauty-gradient border-beauty-pink"
                          : "border-gray-300 hover:border-beauty-pink"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={handlePrevious}
                className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!formData.date || !formData.time}
                className={`beauty-button ${
                  !formData.date || !formData.time ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Personal Details */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-serif mb-6">Your Details</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
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
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="input-field min-h-[100px]"
                />
              </div>
              
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  className={`beauty-button ${
                    isSubmitting || !formData.name || !formData.email || !formData.phone 
                      ? "opacity-50 cursor-not-allowed" 
                      : ""
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto beauty-gradient rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-2xl font-serif mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for booking with us. We've sent a confirmation email to {formData.email} with your appointment details.
            </p>
            
            <div className="max-w-md mx-auto p-6 border border-gray-200 rounded-lg bg-gray-50 mb-8">
              <h3 className="font-medium mb-4">Appointment Summary</h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stylist:</span>
                  <span className="font-medium">{formData.stylist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Need to make changes? Contact us at (123) 456-7890 or info@serenity.com
              </p>
              <button 
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    serviceCategory: "",
                    service: "",
                    stylist: "",
                    date: "",
                    time: "",
                    name: "",
                    email: "",
                    phone: "",
                    notes: "",
                  });
                }}
                className="beauty-button"
              >
                Book Another Appointment
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Service Process */}
      {currentStep !== 4 && (
        <section className="section-container bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">What to Expect</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 beauty-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif">1</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Booking</h3>
              <p className="text-gray-600">
                Choose your service, select your preferred stylist, and pick a date and time that works for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 beauty-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif">2</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Confirmation</h3>
              <p className="text-gray-600">
                Receive an email confirmation with all your appointment details and any pre-visit instructions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 beauty-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-serif">3</span>
              </div>
              <h3 className="text-xl font-serif mb-2">Your Visit</h3>
              <p className="text-gray-600">
                Arrive 5-10 minutes before your appointment to get settled. Then relax and enjoy your service!
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Booking;
