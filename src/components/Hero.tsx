import React from 'react';
import { CalendarCheck, Star, Shield, Clock } from 'lucide-react';

interface HeroProps {
  handleBookNow: () => void;
}

export default function Hero({ handleBookNow }: HeroProps) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
          alt="Happy dogs playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-600/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Where Your Pets Feel Like Family
          </h1>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto">
            Premium pet care services in a safe, loving environment. Give your furry friend the vacation they deserve!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex justify-center mb-4">
                <Star className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Care</h3>
              <p className="text-amber-100 text-sm">
                Personalized attention and care for every pet's unique needs
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex justify-center mb-4">
                <Shield className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe Environment</h3>
              <p className="text-amber-100 text-sm">
                Secure, monitored facilities with trained professionals
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Care</h3>
              <p className="text-amber-100 text-sm">
                Round-the-clock attention for overnight stays
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-amber-100">⭐ 4.9/5 from 500+ reviews</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-amber-100">🏆 Best Pet Care 2024</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-amber-100">💕 10,000+ Happy Pets</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={handleBookNow}
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}