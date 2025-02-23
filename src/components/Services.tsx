import React from 'react';
import { Sun, Moon, Heart, Coffee, Music, Camera } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: "Day Care",
    description: "Full-day care with supervised play and activities"
  },
  {
    icon: Moon,
    title: "Overnight Boarding",
    description: "Cozy overnight stays with 24/7 supervision"
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Regular health checks and medication administration"
  },
  {
    icon: Coffee,
    title: "Grooming",
    description: "Professional grooming and spa services"
  },
  {
    icon: Music,
    title: "Training",
    description: "Behavioral training and socialization"
  },
  {
    icon: Camera,
    title: "Webcam Access",
    description: "Watch your pet play in real-time"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Services</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            We offer comprehensive care services tailored to your pet's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{service.title}</h3>
              <p className="text-amber-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}