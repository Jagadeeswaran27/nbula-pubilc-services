import React from 'react';
import { CheckCircle, Award, Clock, Users, Shield, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: 'Licensed and insured professionals'
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: 'Premium quality paints and materials'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: 'Meticulous preparation and clean-up'
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: 'On-time project completion'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: 'Detailed quotes with no hidden costs'
  },
  {
    icon: <ThumbsUp className="h-6 w-6 text-blue-600 flex-shrink-0" />,
    text: '100% satisfaction guarantee'
  }
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2,500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Professional Painters' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">About PrimeCoat Painting</h2>
            <div className="w-24 h-1 bg-blue-600 mb-6 rounded-full"></div>
            
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience, PrimeCoat Painting has established itself as a leader in the painting industry, 
              delivering exceptional results for homeowners and businesses alike.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of skilled painters combines craftsmanship with attention to detail to ensure every project exceeds expectations. 
              We take pride in our work and stand behind our commitment to quality and customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              <span>Schedule a Consultation</span>
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional painter at work" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-lg shadow-xl z-20">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;