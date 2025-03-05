import React from 'react';
import Hero from '../components/Hero';
import ServicesList from '../components/ServicesList';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesList />
      <WhyChooseUs />
      <AboutSection />
      <ContactSection />
      <CTASection />
    </div>
  );
};

export default HomePage;