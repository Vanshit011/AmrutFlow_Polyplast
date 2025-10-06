import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CertificationShowcase from './components/CertificationShowcase';
import QualityProcessTimeline from './components/QualityProcessTimeline';
import TestingLaboratory from './components/TestingLaboratory';
import QualityMetricsDashboard from './components/QualityMetricsDashboard';
import TraceabilitySystem from './components/TraceabilitySystem';
import CustomerFeedback from './components/CustomerFeedback';
import WarrantyGuarantee from './components/WarrantyGuarantee';
import Icon from '../../components/AppIcon';

const QualityAssurance = () => {
  return (
    <>
      <Helmet>
        <title>Quality Assurance - Manufacturing Excellence | Rocket PVC</title>
        <meta 
          name="description" 
          content="Discover Rocket PVC's comprehensive quality assurance program featuring ISI certification, ISO standards, advanced testing facilities, and complete product traceability for manufacturing excellence." 
        />
        <meta 
          name="keywords" 
          content="quality assurance, PVC testing, ISI certification, ISO 9001, manufacturing excellence, product traceability, quality control, testing laboratory" 
        />
        <meta property="og:title" content="Quality Assurance - Manufacturing Excellence | Rocket PVC" />
        <meta 
          property="og:description" 
          content="Comprehensive quality assurance program with advanced testing facilities, certifications, and complete product traceability ensuring manufacturing excellence." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rocketpvc.com/quality-assurance" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-industrial-green to-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Icon name="Shield" size={40} className="text-white" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 animate-fade-in-up">
                Quality Assurance
                <span className="block text-2xl lg:text-3xl font-normal mt-2 opacity-90">
                  Manufacturing Excellence Through Precision
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Comprehensive quality management system ensuring every Rocket PVC product 
                meets the highest standards of reliability, durability, and performance.
              </p>

              {/* Key Quality Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Icon name="Award" size={32} className="text-white mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">6+</div>
                  <div className="text-sm opacity-90">Active Certifications</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Icon name="Target" size={32} className="text-white mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">99.2%</div>
                  <div className="text-sm opacity-90">Quality Score</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Icon name="Clock" size={32} className="text-white mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Quality Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main>
          <CertificationShowcase />
          <QualityProcessTimeline />
          <TestingLaboratory />
          <QualityMetricsDashboard />
          <TraceabilitySystem />
          <CustomerFeedback />
          <WarrantyGuarantee />
        </main>

        {/* Call to Action Section */}
        <section className="py-16 bg-industrial-green text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={32} className="text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-6">
                Experience Quality Excellence
              </h2>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Partner with Rocket PVC for products backed by comprehensive quality assurance, 
                advanced testing protocols, and unwavering commitment to manufacturing excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-industrial-green rounded-lg font-semibold hover:bg-gray-100 precision-transition flex items-center justify-center space-x-2">
                  <Icon name="Download" size={20} />
                  <span>Download Quality Certificates</span>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-industrial-green precision-transition flex items-center justify-center space-x-2">
                  <Icon name="Phone" size={20} />
                  <span>Contact Quality Team</span>
                </button>
              </div>
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
                    <p className="text-xs opacity-80">Quality Excellence</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Leading manufacturer of premium PVC products with unwavering commitment to quality and innovation.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quality Standards</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>ISI Certification</li>
                  <li>ISO 9001:2015</li>
                  <li>ISO 14001:2015</li>
                  <li>Export Quality</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Testing Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Material Testing</li>
                  <li>Pressure Testing</li>
                  <li>Chemical Analysis</li>
                  <li>Performance Testing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Technical Support</li>
                  <li>Warranty Claims</li>
                  <li>Quality Assistance</li>
                  <li>Documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80">
                © {new Date().getFullYear()} Rocket PVC. All rights reserved. | Quality Assured Manufacturing
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default QualityAssurance;