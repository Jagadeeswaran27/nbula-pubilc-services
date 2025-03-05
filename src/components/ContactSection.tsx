import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge badge-primary mb-4">Contact Us</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or ready to schedule a service? Contact our friendly team today.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-50 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Phone</h4>
                  <p className="text-dark-600">(555) 123-4567</p>
                  <p className="text-dark-500 text-sm">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Email</h4>
                  <p className="text-dark-600">info@mrhandyman.com</p>
                  <p className="text-dark-500 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Office</h4>
                  <p className="text-dark-600">123 Repair Street, Fixitville, FX 12345</p>
                  <p className="text-dark-500 text-sm">Serving the entire Fixitville area</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-800">Hours</h4>
                  <p className="text-dark-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-dark-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-dark-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;