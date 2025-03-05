import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Wrench } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-primary-600">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">MrHandyMan</span>
            </div>
            <p className="text-dark-300 mb-6">
              Professional handyman services for all your home repair and improvement needs. Quality workmanship guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">Plumbing</a></li>
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">Electrical</a></li>
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">Carpentry</a></li>
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">Painting</a></li>
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">Flooring</a></li>
              <li><a href="#services" className="text-dark-300 hover:text-primary-400 transition-colors">General Repairs</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-dark-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-dark-300 hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-dark-300">123 Repair Street, Fixitville, FX 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-dark-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-dark-300">info@mrhandyman.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-dark-200">Business Hours</h4>
              <p className="text-dark-300 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-dark-300 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-dark-300 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">&copy; {new Date().getFullYear()} MrHandyMan. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-dark-400 hover:text-primary-400 text-sm mr-6">Terms of Service</a>
            <a href="#" className="text-dark-400 hover:text-primary-400 text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;