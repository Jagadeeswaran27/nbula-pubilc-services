import { Leaf, Snowflake, Phone, Mail, MapPin, Clock, ChevronRight, Users, Camera, ListChecks, Menu, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBookingStatus({ type: null, message: '' });

    try {
      // Reference to the services collection > Landscaping document
      const landscapingDocRef = doc(db, 'services', 'Landscaping');
      
      // Reference to the companies collection > company1 document
      const companyDocRef = doc(landscapingDocRef, 'companies', 'company1');
      
      // Reference to the bookings subcollection
      const bookingsCollectionRef = collection(companyDocRef, 'bookings');

      // Add the booking to the bookings subcollection
      await addDoc(bookingsCollectionRef, {
        ...bookingForm,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });

      // Show success message
      setBookingStatus({
        type: 'success',
        message: 'Booking submitted successfully! We will contact you soon.'
      });

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setBookingForm({
          name: '',
          email: '',
          contact: '',
          address: ''
        });
        setIsBookingModalOpen(false);
        setBookingStatus({ type: null, message: '' });
      }, 2000);

    } catch (error) {
      console.error('Error submitting booking:', error);
      setBookingStatus({
        type: 'error',
        message: 'Failed to submit booking. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a Service</h2>
            
            {/* Status Messages */}
            {bookingStatus.type && (
              <div 
                className={`mb-4 p-4 rounded-md flex items-center ${
                  bookingStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700' 
                    : 'bg-red-50 text-red-700'
                }`}
              >
                {bookingStatus.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <span>{bookingStatus.message}</span>
              </div>
            )}
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
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
                  value={bookingForm.contact}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your contact number"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={bookingForm.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full address"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 disabled:bg-green-300"
              >
                {isSubmitting ? 'Submitting...' : 'Book Now'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01" 
            alt="Beautiful landscaped garden" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
        
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'py-6'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold text-white">GreenScape Pro</span>
              </div>

              <div className="flex items-center space-x-6">
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="nav-link">
                      {link.label}
                    </a>
                  ))}
                </div>

                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                >
                  Book Now
                </button>

                {/* Mobile Menu Button */}
                <button 
                  className="md:hidden text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-white/10">
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-white hover:text-green-400 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your <span className="text-green-400">Outdoor Space</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Professional lawn care, landscaping, and snow removal services for your home or business
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105"
            >
              Book Now
            </button>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive landscaping and maintenance services to keep your property looking its best all year round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lawn Care */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1584479898061-15742e14f50d"
                alt="Lawn Care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Lawn Care</h3>
                <p className="text-gray-600 mb-4">Professional lawn maintenance services including mowing, edging, and fertilization.</p>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Book Now <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Landscaping */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1592595896616-c37162298647"
                alt="Landscaping"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Landscaping</h3>
                <p className="text-gray-600 mb-4">Custom landscape design and installation to enhance your outdoor living space.</p>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Book Now <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Snow Removal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img 
                src="https://images.unsplash.com/photo-1516728778615-2d590ea1855e"
                alt="Snow Removal"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Snow Removal</h3>
                <p className="text-gray-600 mb-4">Reliable snow removal services to keep your property safe and accessible during winter.</p>
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Book Now <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects and get inspired for your next outdoor transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1558904541-efa843a96f01",
              "https://images.unsplash.com/photo-1584479898061-15742e14f50d",
              "https://images.unsplash.com/photo-1592595896616-c37162298647",
              "https://images.unsplash.com/photo-1516728778615-2d590ea1855e",
              "https://images.unsplash.com/photo-1589923188900-85dae523342b",
              "https://images.unsplash.com/photo-1598902108854-10e335adac99"
            ].map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img 
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-white h-12 w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About GreenScape Pro</h2>
              <p className="text-xl text-gray-600 mb-8">
                With over 15 years of experience in landscaping and property maintenance, we take pride in delivering exceptional service and creating beautiful outdoor spaces that exceed our clients' expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600">Skilled professionals</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <ListChecks className="h-8 w-8 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Work</h4>
                    <p className="text-gray-600">Guaranteed satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b"
                alt="Team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a simple but effective process to ensure your complete satisfaction with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "1. Contact Us",
                description: "Schedule a consultation through our easy online booking system."
              },
              {
                icon: Users,
                title: "2. Consultation",
                description: "Meet with our experts to discuss your vision and requirements."
              },
              {
                icon: ListChecks,
                title: "3. Planning",
                description: "Receive a detailed proposal including timeline and pricing."
              },
              {
                icon: Camera,
                title: "4. Execution",
                description: "Watch as we transform your outdoor space with precision and care."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for a free consultation and estimate for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Phone className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <Mail className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@greenscapepro.com</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <MapPin className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">123 Landscape Ave, Garden City, GC 12345</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h3>
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;