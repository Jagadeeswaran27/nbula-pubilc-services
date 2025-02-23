import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, MessageSquare, Calendar, Users } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-amber-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Get in Touch</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            We're here to answer any questions about our pet care services and how we can provide the best experience for your furry friend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Contact Options */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Phone className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 text-lg mb-2">Call Us</h3>
                  <p className="text-amber-700 mb-2">(555) 123-4567</p>
                  <p className="text-amber-600 text-sm">Available 7:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 text-lg mb-2">Email Us</h3>
                  <p className="text-amber-700 mb-2">info@petparadise.com</p>
                  <p className="text-amber-600 text-sm">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Calendar className="w-10 h-10 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 text-lg mb-2">Business Hours</h3>
                  <p className="text-amber-700">Mon - Fri: 7:00 AM - 7:00 PM</p>
                  <p className="text-amber-700">Sat: 8:00 AM - 5:00 PM</p>
                  <p className="text-amber-700">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-amber-900 mb-1">Pet Information</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Type and name of your pet"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-amber-900 mb-1">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="font-semibold text-amber-900 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}