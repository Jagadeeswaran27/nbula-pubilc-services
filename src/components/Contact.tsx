import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { saveBooking } from '../firebase/firebaseService';

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6 text-blue-600" />,
    title: 'Phone',
    details: '(555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: 'Email',
    details: 'info@primecoat.com',
    link: 'mailto:info@primecoat.com'
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: 'Address',
    details: '123 Painter Street, Colorville, CA 90210',
    link: 'https://maps.google.com'
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: 'Hours',
    details: 'Mon-Fri: 8am-6pm, Sat: 9am-2pm',
    link: null
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Save booking to Firebase
      const result = await saveBooking(formData);
      
      if (result.success) {
        console.log('Form submitted successfully:', result);
        setIsSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          service: ''
        });
      } else {
        setError('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
      
      // Reset submission status after 5 seconds
      if (isSubmitted) {
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch for a free consultation and estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </span>
                Get a Free Quote
              </h3>
              
              {isSubmitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded mb-6 shadow-md">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded mb-6 shadow-md">
                  <div className="flex">
                    <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p>{error}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="John Doe"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="john@example.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                      placeholder="(555) 123-4567"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      required
                      disabled={isLoading}
                    >
                      <option value="">Select a service</option>
                      <option value="Residential Interior">Residential Interior</option>
                      <option value="Residential Exterior">Residential Exterior</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Cabinet Refinishing">Cabinet Refinishing</option>
                      <option value="Deck & Fence">Deck & Fence</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2 font-medium">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                    placeholder="123 Main St, City, State, Zip"
                    disabled={isLoading}
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 mb-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                </span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-blue-600 hover:underline">
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </span>
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  'Free, no-obligation estimates',
                  'Licensed and insured professionals',
                  'Premium quality materials',
                  'Detailed project planning',
                  'Clean and respectful work environment',
                  '100% satisfaction guarantee'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;