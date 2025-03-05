import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  jobType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Fixitville',
    quote: 'MrHandyMan fixed my leaky faucet and replaced some damaged drywall in one visit. Professional, punctual, and reasonably priced. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    jobType: 'Plumbing & Drywall Repair'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    location: 'Repairtown',
    quote: 'I needed several electrical outlets installed in my home office. The technician was knowledgeable, efficient, and left everything spotless. Great service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    jobType: 'Electrical Installation'
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Fixitville',
    quote: 'From start to finish, my experience with MrHandyMan was excellent. They installed new flooring throughout my house and the results are beautiful.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    jobType: 'Flooring Installation'
  },
  {
    id: 4,
    name: 'David Wilson',
    location: 'Repairtown',
    quote: "I've hired MrHandyMan for multiple projects over the years and they never disappoint. Their attention to detail and quality of work is outstanding.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    jobType: 'Multiple Projects'
  },
  {
    id: 5,
    name: 'Jennifer Martinez',
    location: 'Fixitville',
    quote: 'The team at MrHandyMan completely renovated my bathroom and kitchen. They were professional, stayed on budget, and finished ahead of schedule!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    jobType: 'Kitchen & Bathroom Renovation'
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setAnimating(true);
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setTimeout(() => setAnimating(false), 500);
  };

  const previous = () => {
    if (animating) return;
    setAnimating(true);
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">Testimonials</div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Featured testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative testimonial-card">
            <div className="absolute -top-6 -left-6 text-primary-500 opacity-20">
              <Quote size={80} />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-2 shadow-md">
                    <Quote size={16} />
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)]. map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonials[activeIndex].rating ? 'text-accent-400 fill-current' : 'text-dark-200'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold text-dark-800">{testimonials[activeIndex].name}</h4>
                  <p className="text-dark-500">{testimonials[activeIndex].location}</p>
                  <span className="inline-block mt-2 badge badge-primary">
                    {testimonials[activeIndex].jobType}
                  </span>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-dark-700 text-lg md:text-xl italic leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={previous}
                className="p-2 rounded-full bg-dark-100 hover:bg-dark-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-dark-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary-600 w-6' : 'bg-dark-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-2 rounded-full bg-dark-100 hover:bg-dark-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-dark-600" />
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-primary-600">500+</p>
              <p className="text-dark-500">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-primary-600">1,200+</p>
              <p className="text-dark-500">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-primary-600">15+</p>
              <p className="text-dark-500">Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold text-primary-600">4.9/5</p>
              <p className="text-dark-500">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;