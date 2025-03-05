import React, { useState, useEffect } from 'react';
import { Paintbrush, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-blue-100' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Paintbrush className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>PrimeCoat</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? isScrolled 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-white bg-white/20 backdrop-blur-sm'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:bg-white/10 backdrop-blur-sm'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`px-4 py-3 rounded-md font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a 
                  href="#contact" 
                  className="mt-3 block text-center px-4 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;