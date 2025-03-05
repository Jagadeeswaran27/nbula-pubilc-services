import React from 'react';
import { Paintbrush, Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-600/20 rounded-full">
                <Paintbrush className="h-8 w-8 text-blue-500" />
              </div>
              <span className="text-2xl font-bold">PrimeCoat</span>
            </div>
            <p className="text-gray-400 mb-8">
              Professional painting services for residential and commercial properties. Quality craftsmanship and superior results guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 mr-3"></span>
              Services
            </h3>
            <ul className="space-y-4">
              {[
                'Residential Painting', 
                'Commercial Painting', 
                'Custom Finishes', 
                'Cabinet Refinishing', 
                'Deck & Fence Staining', 
                'Color Consultation'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Work', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
                { name: 'Get a Quote', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Painter Street<br />
                  Colorville, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3" />
                <a href="mailto:info@primecoat.com" className="text-gray-400 hover:text-white transition-colors">
                  info@primecoat.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  Mon-Fri: 8am-6pm<br />
                  Sat: 9am-2pm, Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-6 md:mb-0">
              &copy; {currentYear} PrimeCoat Painting. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-blue-600 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm mb-4 md:mb-0">
              Ready to transform your space? Get a free consultation today!
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center"
            >
              <span>Free Estimate</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;