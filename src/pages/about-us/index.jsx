import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import LeadershipTeam from './components/LeadershipTeam';
import CoreValues from './components/CoreValues';
import CompanyStatistics from './components/CompanyStatistics';
import FacilityTour from './components/FacilityTour';
import SustainabilityStory from './components/SustainabilityStory';
import AwardsRecognition from './components/AwardsRecognition';
import FutureVision from './components/FutureVision';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Rocket PVC | Leading PVC Manufacturer in India</title>
        <meta 
          name="description" 
          content="Discover Rocket PVC's journey from startup to industry leader. Learn about our commitment to quality, sustainability, and innovation in PVC manufacturing across India." 
        />
        <meta name="keywords" content="Rocket PVC, about us, PVC manufacturer, company history, leadership team, sustainability, awards, quality certification" />
        <meta property="og:title" content="About Us - Rocket PVC | Leading PVC Manufacturer" />
        <meta property="og:description" content="25+ years of excellence in PVC manufacturing with ISO certification, sustainable practices, and pan-India presence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Main Content */}
        <main className="pt-22">
          <HeroSection />
          <CompanyTimeline />
          <LeadershipTeam />
          <CoreValues />
          <CompanyStatistics />
          <FacilityTour />
          <SustainabilityStory />
          <AwardsRecognition />
          <FutureVision />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-industrial-green to-conversion-accent rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Amrut Flow</h3>
                    <p className="text-sm text-gray-300">Industrial Excellence</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leading PVC manufacturer committed to quality, innovation, and sustainable manufacturing practices across India.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about-us" className="text-gray-300 hover:text-white precision-transition">About Us</a></li>
                  <li><a href="/our-network" className="text-gray-300 hover:text-white precision-transition">Our Network</a></li>
                  <li><a href="/quality-assurance" className="text-gray-300 hover:text-white precision-transition">Quality</a></li>
                  <li><a href="/gallery" className="text-gray-300 hover:text-white precision-transition">Gallery</a></li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/product-catalogue" className="text-gray-300 hover:text-white precision-transition">Product Catalogue</a></li>
                  <li><span className="text-gray-300">Pipes & Fittings</span></li>
                  <li><span className="text-gray-300">Industrial Solutions</span></li>
                  <li><span className="text-gray-300">Custom Products</span></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Mumbai, Maharashtra</li>
                  <li>+91 98765 43210</li>
                  <li>info@rocketpvc.com</li>
                  <li>www.rocketpvc.com</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © {new Date()?.getFullYear()} Amrut Flow. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white precision-transition text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white precision-transition text-sm">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white precision-transition text-sm">Sitemap</a>
              </div>
            </div>            
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;