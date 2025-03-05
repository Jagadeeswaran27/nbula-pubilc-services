import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jennifer Anderson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'PrimeCoat transformed our home with their exceptional painting service. The team was professional, punctual, and paid incredible attention to detail. Our walls have never looked better!',
    rating: 5,
    project: 'Interior Home Painting'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'We hired PrimeCoat for our office renovation, and they exceeded all expectations. They worked around our schedule to minimize disruption and delivered outstanding results on time and within budget.',
    rating: 5,
    project: 'Commercial Office Renovation'
  },
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'As an interior designer, I have high standards for the contractors I recommend to clients. PrimeCoat consistently delivers exceptional quality and has become my go-to painting service for all my design projects.',
    rating: 5,
    project: 'Multiple Residential Projects'
  },
  {
    name: 'David Thompson',
    role: 'Property Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    quote: 'Managing multiple properties requires reliable contractors. PrimeCoat has been our painting partner for years, consistently delivering quality work across all our properties with minimal supervision needed.',
    rating: 4,
    project: 'Multi-Unit Property Maintenance'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 text-blue-100 opacity-50">
            <Quote className="h-24 w-24" />
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative z-10 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-12 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-blue-100 absolute -top-2 -left-2"></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-1 text-center">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-600 font-medium mb-3 text-center">{testimonials[currentIndex].role}</p>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {testimonials[currentIndex].project}
                </span>
              </div>
              
              <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <blockquote className="text-gray-700 italic text-lg md:text-xl leading-relaxed mb-6 relative">
                  <span className="text-blue-600 text-4xl absolute -top-2 -left-4">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-blue-600 text-4xl absolute -bottom-6 -right-4">"</span>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;