import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import { Menu, X, CalendarCheck } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary-light">
      <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-amber-900">Pet Paradise</div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-amber-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-amber-800 hover:text-amber-950 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('schedule')} 
                className="text-amber-800 hover:text-amber-950 transition-colors"
              >
                A Day
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-amber-800 hover:text-amber-950 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={handleBookNow} 
                className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-amber-800 hover:text-amber-950 transition-colors text-left px-2 py-1"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('schedule')} 
                  className="text-amber-800 hover:text-amber-950 transition-colors text-left px-2 py-1"
                >
                  A Day
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-amber-800 hover:text-amber-950 transition-colors text-left px-2 py-1"
                >
                  Contact
                </button>
                <button 
                  onClick={handleBookNow} 
                  className="bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors flex items-center gap-2 w-fit"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Book Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <Hero handleBookNow={handleBookNow} />
        <div id="services">
          <Services />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="bg-amber-900 text-amber-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Pet Paradise</h3>
              <p className="text-amber-200">
                Where your pets feel like family. Premium pet care services in a safe, loving environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('schedule')} className="hover:text-white transition-colors">A Day</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-amber-200 mb-4">Subscribe to get updates about our services and special offers.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-amber-800 text-white placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button className="bg-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-amber-500 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-amber-800 text-center text-amber-400">
            <p>&copy; {new Date().getFullYear()} Pet Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;