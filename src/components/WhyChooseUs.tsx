import React from 'react';
import { Clock, Award, DollarSign, Shield, ThumbsUp, PenTool as Tool } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    title: 'Prompt & Reliable',
    description: 'We arrive on time and complete projects within the agreed timeframe, respecting your schedule.',
    icon: <Clock className="h-6 w-6" />,
    color: 'bg-primary-100 text-primary-700'
  },
  {
    title: 'Quality Workmanship',
    description: 'Our skilled professionals deliver exceptional results with attention to detail on every job.',
    icon: <Award className="h-6 w-6" />,
    color: 'bg-secondary-100 text-secondary-700'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprises. We provide clear, upfront quotes before starting any work.',
    icon: <DollarSign className="h-6 w-6" />,
    color: 'bg-accent-100 text-accent-700'
  },
  {
    title: 'Fully Insured',
    description: 'Rest easy knowing our work is backed by comprehensive insurance coverage for your protection.',
    icon: <Shield className="h-6 w-6" />,
    color: 'bg-primary-100 text-primary-700'
  },
  {
    title: '100% Satisfaction',
    description: "We're not satisfied until you are. Our work is guaranteed to meet your expectations.",
    icon: <ThumbsUp className="h-6 w-6" />,
    color: 'bg-secondary-100 text-secondary-700'
  },
  {
    title: 'Experienced Team',
    description: 'With over 15 years of experience, our team has the expertise to handle any project.',
    icon: <Tool className="h-6 w-6" />,
    color: 'bg-accent-100 text-accent-700'
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">Why Choose Us</div>
          <h2 className="section-title">The MrHandyMan Difference</h2>
          <p className="section-subtitle">
            With years of experience serving homeowners and businesses, we've built our reputation on reliability, quality, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4 tool-icon-container">
              <div className={`flex-shrink-0 h-14 w-14 rounded-xl ${feature.color} flex items-center justify-center tool-icon`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-800 mb-2">{feature.title}</h3>
                <p className="text-dark-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-dark-50 rounded-2xl p-8 lg:p-12 overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30 bg-pattern"></div>
          
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Our Commitment to Excellence</h3>
              <p className="text-dark-600 mb-6">
                At MrHandyMan, we believe in doing the job right the first time. Our team of skilled professionals takes pride in their work and is committed to delivering exceptional results on every project, no matter how big or small.
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="Company founder" 
                  className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <p className="text-lg font-semibold text-dark-800">Michael Thompson</p>
                  <p className="text-dark-500">Founder & CEO</p>
                </div>
              </div>
              
              <blockquote className="mt-6 pl-4 border-l-4 border-primary-500 italic text-dark-600">
                "Our mission is simple: provide exceptional service that exceeds expectations, every time."
              </blockquote>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-64 sm:h-80 lg:h-96">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Handyman working on a project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white mt-2 font-medium">Over 500 5-star reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;