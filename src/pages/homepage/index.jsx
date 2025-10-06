import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CertificationShowcase from './components/CertificationShowcase';
import ProductOverview from './components/ProductOverview';
import MetricsCounter from './components/MetricsCounter';
import SustainabilitySection from './components/SustainabilitySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <CertificationShowcase />
        <ProductOverview />
        <MetricsCounter />
        <SustainabilitySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;