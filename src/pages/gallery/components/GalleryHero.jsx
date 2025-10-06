import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GalleryHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-gray-900 to-industrial-green text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="manufacturing-grid h-full">
          {Array.from({ length: 24 })?.map((_, i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
      </div>
      <div className="relative px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
                    <Icon name="Camera" size={24} className="text-white" />
                  </div>
                  <span className="text-conversion-accent font-semibold text-lg">Visual Excellence</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
                  Manufacturing
                  <span className="block text-conversion-accent">Gallery</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Explore our state-of-the-art manufacturing facilities, precision engineering processes, and successful project installations across India.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-conversion-accent">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-conversion-accent">25+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-conversion-accent">50,000+</div>
                  <div className="text-sm text-gray-400">Products Manufactured</div>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg precision-transition hover:bg-white/20">
                  <Icon name="Factory" size={16} />
                  <span className="text-sm font-medium">Manufacturing</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg precision-transition hover:bg-white/20">
                  <Icon name="Building2" size={16} />
                  <span className="text-sm font-medium">Projects</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg precision-transition hover:bg-white/20">
                  <Icon name="Users" size={16} />
                  <span className="text-sm font-medium">Team</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden industrial-shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                  alt="Rocket PVC Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse-green"></div>
                    <span className="text-white font-medium">Live Production Floor</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 industrial-shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">ISO 9001</div>
                    <div className="text-sm text-text-secondary">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;