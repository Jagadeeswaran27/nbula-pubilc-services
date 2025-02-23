import React, { useState } from 'react';
import { Sun, Droplets, Home as HomeIcon, X, Loader2, CheckCircle, Star, Shield, Clock, Trophy, Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

// Separate BookingForm component to handle form state
const BookingForm = ({ onSubmit, isSubmitting }: { onSubmit: (data: any) => Promise<void>, isSubmitting: boolean }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(current => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      address: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
          Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your contact number"
          value={formData.contact}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Service Address
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your complete address"
          value={formData.address}
          onChange={handleInputChange}
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
            Submitting...
          </>
        ) : (
          'Book Now'
        )}
      </button>
    </form>
  );
};

export function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      const servicesRef = doc(db, 'services', 'home-services');
      const companyRef = doc(collection(servicesRef, 'companies'), 'company2');
      const bookingRef = doc(collection(companyRef, 'bookings'));
      
      const bookingData = {
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString(),
        bookingId: bookingRef.id
      };

      await setDoc(bookingRef, bookingData);
      setBookingSuccess(true);

      setTimeout(() => {
        setShowBookingModal(false);
        setBookingSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const BookingModal = () => {
    if (!showBookingModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <button
            onClick={() => setShowBookingModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h3>
          {bookingSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Booking Successful!</h3>
              <p className="mt-2 text-sm text-gray-500">
                We'll contact you shortly to confirm your booking details.
              </p>
            </div>
          ) : (
            <BookingForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          )}
        </div>
      </div>
    );
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      comment: "The team did an amazing job with our solar panels. Energy efficiency improved significantly!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      comment: "Professional, punctual, and perfect results. Our windows have never looked better!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      comment: "Regular gutter maintenance from this team has prevented numerous potential issues.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <HomeIcon className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">CleanPro</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => setShowBookingModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced with animated gradient overlay */}
      <div 
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-6">
                <p className="text-sm font-medium text-blue-200">Professional & Reliable Service</p>
              </div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Transform Your Space with Expert Cleaning
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Elevate your property's appearance and efficiency with our premium cleaning solutions
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-blue-600 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="text-center text-white">
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="text-blue-100">Happy Clients</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl font-bold mb-2">15000+</p>
              <p className="text-blue-100">Projects Done</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-12 -mb-12"></div>
        </div>
      </div>

      {/* Services Section - Enhanced with hover effects and better spacing */}
      <div id="services" className="py-24 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-gray-600">
              We provide comprehensive cleaning solutions tailored to your specific needs,
              ensuring the highest quality results every time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Service Cards with enhanced styling */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Solar Panel Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Maximize your solar panels' efficiency with our professional cleaning service. 
                Regular cleaning can increase energy production by up to 30%.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  Improved energy efficiency
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  Extended panel lifespan
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-600 mr-2" />
                  Professional equipment
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Gutter Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Prevent water damage and maintain your home's integrity with our thorough 
                gutter cleaning service.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  Prevent water damage
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  Remove debris and blockages
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-600 mr-2" />
                  Maintenance inspection
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <HomeIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Window Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Crystal clear windows that enhance your view and let in more natural light. 
                Professional service for both residential and commercial properties.
              </p>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  Streak-free finish
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  Interior and exterior
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-600 mr-2" />
                  High-rise capable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8">
                Contact us today for a free quote or to schedule your service. 
                Our team is ready to help you achieve the cleanest, most efficient property possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@cleaningservices.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600">Greater Metropolitan Area</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8am-6pm, Sat: 9am-4pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Enhanced with better organization and styling */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <HomeIcon className="h-8 w-8 text-blue-400 mr-2" />
                <span className="font-bold text-xl">CleanPro</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner in professional cleaning services. 
                Delivering excellence in every project.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowBookingModal(true)} className="hover:text-white transition-colors">
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Solar Panel Cleaning</li>
                <li>Gutter Cleaning</li>
                <li>Window Cleaning</li>
                <li>Commercial Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@cleaningservices.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Metropolitan Area
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Professional Cleaning Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingModal />
    </div>
  );
}