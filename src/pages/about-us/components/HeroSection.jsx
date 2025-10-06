import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-gray-800 to-industrial-green text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-30 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <span className="text-conversion-accent font-semibold text-lg">About Rocket PVC</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
                Pioneering Excellence in 
                <span className="text-conversion-accent"> PVC Manufacturing</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                From humble beginnings to industry leadership, discover the story of innovation, 
                quality, and sustainable manufacturing that defines Rocket PVC's journey.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion-accent">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion-accent">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion-accent">50+</div>
                <div className="text-sm text-gray-300">Cities Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-conversion-accent hover:bg-conversion-accent/90 text-white px-8 py-4 rounded-lg font-semibold precision-transition">
                <Icon name="Play" size={20} />
                <span>Watch Our Story</span>
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold precision-transition">
                <Icon name="Download" size={20} />
                <span>Company Profile</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                alt="Rocket PVC Manufacturing Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">ISO 9001:2015</div>
                    <div className="text-sm text-text-secondary">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-conversion-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-industrial-green/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;