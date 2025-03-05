import React from 'react';
import Hero from '../components/Hero';
import ServicesList from '../components/ServicesList';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesList />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;