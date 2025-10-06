import React from 'react';
import Header from '../../components/ui/Header';
import NetworkStats from './components/NetworkStats';
import InteractiveMap from './components/InteractiveMap';
import DistributorProfiles from './components/DistributorProfiles';
import LogisticsSection from './components/LogisticsSection';
import MajorProjects from './components/MajorProjects';
import PartnershipOpportunities from './components/PartnershipOpportunities';
import Icon from '../../components/AppIcon';

const OurNetwork = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-industrial-green via-secondary to-conversion-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Icon name="MapPin" size={16} className="text-white" />
            <span className="text-white text-sm font-medium">Pan-India Network</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-white mb-6">
            Our Extensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Distribution Network
            </span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive coverage across India with strategic partnerships, advanced logistics, 
            and dedicated support ensuring reliable supply and exceptional service nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-industrial-green px-8 py-3 rounded-lg font-semibold precision-transition hover:bg-white/90 hover:shadow-lg flex items-center justify-center space-x-2">
              <Icon name="Search" size={18} />
              <span>Find Local Partner</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold precision-transition hover:bg-white/30 flex items-center justify-center space-x-2">
              <Icon name="Phone" size={18} />
              <span>Contact Network Team</span>
            </button>
          </div>
        </div>
      </section>
      {/* Network Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <NetworkStats />
        </div>
      </section>
      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <InteractiveMap />
        </div>
      </section>
      {/* Distributor Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <DistributorProfiles />
        </div>
      </section>
      {/* Logistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LogisticsSection />
        </div>
      </section>
      {/* Major Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <MajorProjects />
        </div>
      </section>
      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <PartnershipOpportunities />
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-industrial-green to-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Icon name="Users" size={48} className="text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">
            Ready to Join Our Network?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become part of India's most trusted PVC distribution network. 
            Comprehensive support, quality products, and growth opportunities await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-industrial-green px-8 py-3 rounded-lg font-semibold precision-transition hover:bg-white/90 hover:shadow-lg flex items-center justify-center space-x-2">
              <Icon name="UserPlus" size={18} />
              <span>Become a Partner</span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold precision-transition hover:bg-white/30 flex items-center justify-center space-x-2">
              <Icon name="Download" size={18} />
              <span>Download Network Guide</span>
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-industrial-green to-secondary rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-headline font-bold">Rocket PVC</h3>
                  <p className="text-xs text-white/70">Industrial Excellence</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Leading PVC manufacturer with comprehensive distribution network across India.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/homepage" className="block text-white/80 hover:text-white precision-transition">Home</a>
                <a href="/about-us" className="block text-white/80 hover:text-white precision-transition">About Us</a>
                <a href="/product-catalogue" className="block text-white/80 hover:text-white precision-transition">Products</a>
                <a href="/quality-assurance" className="block text-white/80 hover:text-white precision-transition">Quality</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Network</h4>
              <div className="space-y-2 text-sm">
                <div className="text-white/80">150+ Distribution Centers</div>
                <div className="text-white/80">500+ Service Partners</div>
                <div className="text-white/80">28+ States Covered</div>
                <div className="text-white/80">Pan-India Presence</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Phone" size={14} />
                  <span>+91 1800 123 456</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="Mail" size={14} />
                  <span>network@rocketpvc.com</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Icon name="MapPin" size={14} />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date()?.getFullYear()} Rocket PVC. All rights reserved. | Built with precision and quality.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurNetwork;