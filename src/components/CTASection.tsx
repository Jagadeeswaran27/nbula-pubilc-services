import React from 'react';
import { Phone, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-texture-pattern"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 animate-float animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-xl text-primary-100 max-w-2xl">
              Contact us today for a free, no-obligation quote on your home repair or improvement project.
            </p>
            
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <a
                href="#quote"
                className="btn btn-accent group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Service
              </a>
              <a
                href="tel:5551234567"
                className="btn bg-white/10 text-white hover:bg-white/20 focus:ring-white/30"
              >
                <Phone className="mr-2 h-5 w-5" />
                (555) 123-4567
              </a>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-white mb-4">Our Service Guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-primary-100">100% satisfaction guarantee</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-primary-100">Licensed and insured professionals</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-primary-100">Upfront, transparent pricing</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">Emergency Service</h3>
                <p className="text-primary-100 mb-4">Available 24/7 for urgent repairs that can't wait.</p>
                <a href="tel:5551234567" className="inline-flex items-center text-accent-400 hover:text-accent-300">
                  Call Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">Maintenance Plans</h3>
                <p className="text-primary-100 mb-4">Regular maintenance to prevent costly repairs.</p>
                <a href="#quote" className="inline-flex items-center text-accent-400 hover:text-accent-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">Commercial Services</h3>
                <p className="text-primary-100 mb-4">Specialized solutions for business properties.</p>
                <a href="#quote" className="inline-flex items-center text-accent-400 hover:text-accent-300">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">Senior Discounts</h3>
                <p className="text-primary-100 mb-4">Special rates for our senior customers.</p>
                <a href="#quote" className="inline-flex items-center text-accent-400 hover:text-accent-300">
                  Check Eligibility
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;