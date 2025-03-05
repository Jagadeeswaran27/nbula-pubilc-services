import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">About Us</div>
          <h2 className="section-title">Your Trusted Home Improvement Partner</h2>
          <p className="section-subtitle">
            With over 15 years of experience, MrHandyMan has been providing exceptional handyman services to homeowners and businesses.
          </p>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="MrHandyMan team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Our Story</h3>
            <p className="text-dark-600 mb-6">
              Founded in 2008, MrHandyMan began with a simple mission: to provide reliable, high-quality handyman services that homeowners could trust. What started as a small family business has grown into a team of skilled professionals serving the entire Fixitville area.
            </p>
            <p className="text-dark-600 mb-8">
              Our commitment to quality workmanship, transparent pricing, and exceptional customer service has earned us a reputation as the area's most trusted handyman service.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Award Winning</h4>
                  <p className="text-dark-500 text-sm">Recognized for excellence in service</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Expert Team</h4>
                  <p className="text-dark-500 text-sm">Skilled professionals you can trust</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">15+ Years</h4>
                  <p className="text-dark-500 text-sm">Of industry experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Satisfaction</h4>
                  <p className="text-dark-500 text-sm">100% guaranteed on all work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;