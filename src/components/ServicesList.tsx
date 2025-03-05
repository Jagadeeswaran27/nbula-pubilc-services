import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Droplet, Zap, Paintbrush, Hammer, Ruler, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  price: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'From leaky faucets to pipe installations, our plumbing experts can handle all your water-related issues.',
    icon: <Droplet className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'From $89',
    features: ['Leak repairs', 'Pipe installation', 'Drain cleaning', 'Fixture replacement']
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Safe and reliable electrical repairs, installations, and upgrades for your home or business.',
    icon: <Zap className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'From $99',
    features: ['Outlet installation', 'Lighting fixtures', 'Panel upgrades', 'Wiring repairs']
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    description: 'Custom woodworking, repairs, and installations from skilled carpenters with an eye for detail.',
    icon: <Hammer className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'From $79',
    features: ['Cabinet installation', 'Custom shelving', 'Door repairs', 'Trim work']
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description: 'Installation and repair of various flooring types including hardwood, laminate, tile, and vinyl.',
    icon: <Ruler className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'From $249',
    features: ['Hardwood installation', 'Laminate flooring', 'Tile work', 'Floor repairs']
  },
  {
    id: 'general',
    title: 'General Repairs',
    description: 'From furniture assembly to drywall repair, we can tackle all those small jobs on your to-do list.',
    icon: <Wrench className="h-6 w-6" />,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'From $69',
    features: ['Furniture assembly', 'Drywall repair', 'TV mounting', 'Gutter cleaning']
  },
];

const ServicesList: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">Our Services</div>
          <h2 className="section-title">Professional Solutions for Every Need</h2>
          <p className="section-subtitle">
            Quality craftsmanship and reliable service for all your home repair and improvement projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center">
                    <div className="service-icon flex items-center justify-center h-10 w-10 rounded-lg bg-white text-primary-600 mr-3 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge badge-accent">
                    {service.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-dark-600 mb-4">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-dark-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <a
                    href="#quote"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group/link"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;