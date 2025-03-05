import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Calendar, Phone, Clock, Star, PenTool as Tool, Shield } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    address: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Create references to the required documents and collections
      const handymanDocRef = doc(db, 'services', 'handyman');
      const company1DocRef = doc(handymanDocRef, 'companies', 'company1');
      const bookingsCollectionRef = collection(company1DocRef, 'bookings');
      
      // Generate a new document ID for the booking
      const newBookingRef = doc(bookingsCollectionRef);
      
      // Add the booking data
      await setDoc(newBookingRef, {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      
      // Reset form and show success message
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        address: '',
        service: ''
      });
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Licensed & insured professionals",
    "100% satisfaction guarantee",
    "Free, no-obligation quotes"
  ];

  return (
    <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-texture-pattern"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent-400 mr-2"></span>
              Professional Handyman Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Home Repairs & <span className="text-accent-400">Improvements</span>
            </h1>
            
            <p className="mt-6 text-xl text-primary-100 max-w-xl mx-auto lg:mx-0">
              From minor fixes to major renovations, our skilled professionals deliver quality workmanship for all your home improvement needs.
            </p>
            
            <ul className="mt-8 space-y-3 max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-primary-100">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#quote"
                className="btn btn-accent group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="tel:5551234567"
                className="btn bg-white/10 text-white hover:bg-white/20 focus:ring-white/30"
              >
                <Phone className="mr-2 h-5 w-5" />
                (555) 123-4567
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="text-white text-sm font-medium">Fast Response</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Tool className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="text-white text-sm font-medium">Expert Service</h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-6 w-6 text-accent-400" />
                </div>
                <h3 className="text-white text-sm font-medium">Fully Insured</h3>
              </div>
            </div>
          </div>
          
          {/* Hero form */}
          <div className="relative" id="quote">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                Fast Response
              </div>
              
              <h3 className="text-2xl font-bold text-dark-800 mb-6">Book Our Service</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-medium">Booking request submitted successfully!</p>
                      <p className="text-green-700 text-sm mt-1">We'll contact you shortly to confirm your appointment.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-dark-600 mb-1">Full Name*</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="input-field" 
                        placeholder="Your name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-600 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="input-field" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-600 mb-1">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="input-field" 
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-600 mb-1">Service Needed*</label>
                      <select 
                        id="service" 
                        className="input-field"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select a service...</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="flooring">Flooring</option>
                        <option value="general">General Repairs</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-dark-600 mb-1">Service Address*</label>
                    <input 
                      type="text" 
                      id="address" 
                      className="input-field" 
                      placeholder="123 Main St, City, State, Zip"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className={`btn btn-primary w-full group flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Service Now
                        <Calendar className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                  
                  <div className="text-center text-dark-500 text-sm">
                    <p>By submitting this form, you agree to our <a href="#" className="text-primary-600 hover:underline">terms of service</a>.</p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-1 text-dark-500 text-sm mt-4">
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <Star className="h-4 w-4 text-accent-500 fill-current" />
                    <span className="ml-1">500+ 5-star reviews</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;