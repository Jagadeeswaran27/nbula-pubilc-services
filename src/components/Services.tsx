import React from 'react';
import { Home, Building2, Paintbrush, Droplets, Brush, PaintBucket, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-12 w-12 text-blue-600" />,
    title: 'Residential Painting',
    description: 'Transform your home with our expert interior and exterior painting services tailored to your style and preferences.',
    features: ['Interior walls & ceilings', 'Exterior siding & trim', 'Custom color matching', 'Texture application']
  },
  {
    icon: <Building2 className="h-12 w-12 text-blue-600" />,
    title: 'Commercial Painting',
    description: 'Professional painting solutions for offices, retail spaces, and commercial buildings with minimal disruption to your business.',
    features: ['Office spaces & retail', 'Industrial facilities', 'After-hours service', 'Quick-dry solutions']
  },
  {
    icon: <Paintbrush className="h-12 w-12 text-blue-600" />,
    title: 'Custom Finishes',
    description: 'Specialty finishes including faux painting, textured walls, and decorative techniques to add unique character to your space.',
    features: ['Faux finishes', 'Venetian plaster', 'Metallic accents', 'Textured applications']
  },
  {
    icon: <Droplets className="h-12 w-12 text-blue-600" />,
    title: 'Cabinet Refinishing',
    description: 'Revitalize your kitchen or bathroom with our cabinet painting and refinishing services at a fraction of replacement cost.',
    features: ['Kitchen cabinets', 'Bathroom vanities', 'Built-ins & shelving', 'Custom color options']
  },
  {
    icon: <Brush className="h-12 w-12 text-blue-600" />,
    title: 'Deck & Fence Staining',
    description: 'Protect and beautify your outdoor wooden surfaces with our professional staining and sealing services.',
    features: ['Deck restoration', 'Fence preservation', 'Weatherproofing', 'UV protection coatings']
  },
  {
    icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
    title: 'Color Consultation',
    description: 'Expert color advice to help you select the perfect palette that complements your space and reflects your style.',
    features: ['Professional color advice', 'Digital color previews', 'Trend recommendations', 'Sample testing']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Painting Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of painting services to meet all your residential and commercial needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-gray-100"
            >
              <div className="bg-blue-50 p-4 rounded-full inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform"
              >
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
          >
            <span>Request a Free Estimate</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;