import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
// import BgImage from "../assets/MIHIR/Gemini_Generated_Image_6bspoa6bspoa6bsp.png/"; // ✅ import your image
import BgImage from '../assets/MIHIR/bg-2.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-industrial-green">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BgImage} // ✅ use your image instead of URL
          alt="Background"
          className="w-full h-full object-cover opacity-60"
          priority // helps Next.js optimize loading
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-industrial-green/70"></div>
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-white mb-6 leading-tight">
            Precision Engineering.
            <br />
            <span className="text-conversion-accent">Sustainable Solutions.</span>
            <br />
            <span className="text-metallic">Trusted Partnership.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading India's PVC manufacturing revolution with 25+ years of industrial excellence,
            cutting-edge technology, and unwavering commitment to quality and sustainability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

            <Link to="/product-catalogue">
              <Button
                variant="default"
                size="lg"
                className="conversion-cta bg-conversion-accent hover:bg-conversion-accent/90 text-white font-semibold px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
              >
                Explore Products
              </Button>
            </Link>


            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-industrial-green font-semibold px-8 py-4"
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
            >
              Request Quote
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse-green"></div>
              <span className="text-sm font-medium">ISI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse-green"></div>
              <span className="text-sm font-medium">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse-green"></div>
              <span className="text-sm font-medium">Pan-India Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse-green"></div>
              <span className="text-sm font-medium">Eco-Friendly Manufacturing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;