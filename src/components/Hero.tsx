import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 animate-pulse">
            Professional Painting Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Space With <span className="text-blue-400">Expert</span> Painting Services
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Quality craftsmanship, attention to detail, and superior results for your home or business.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            {['Residential', 'Commercial', 'Interior', 'Exterior'].map((tag, index) => (
              <span key={index} className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 text-center shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-all duration-300 text-center transform hover:-translate-y-1"
            >
              Our Services
            </a>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                ].map((src, index) => (
                  <img 
                    key={index}
                    src={src} 
                    alt="Customer" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="ml-2 text-white text-sm">Trusted by 500+ happy customers</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-white text-sm">5.0 (200+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;