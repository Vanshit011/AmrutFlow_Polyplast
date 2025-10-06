import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VirtualTour = () => {
  const [activeLocation, setActiveLocation] = useState('production');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourLocations = [
    {
      id: 'production',
      name: 'Production Floor',
      icon: 'Factory',
      description: 'State-of-the-art manufacturing equipment and automated production lines',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      hotspots: [
        { x: 25, y: 40, title: 'Injection Molding Unit', description: 'High-precision molding machines' },
        { x: 60, y: 30, title: 'Quality Control Station', description: 'Real-time quality monitoring' },
        { x: 80, y: 60, title: 'Automated Packaging', description: 'Robotic packaging systems' }
      ],
      stats: [
        { label: 'Production Capacity', value: '10,000 units/day' },
        { label: 'Automation Level', value: '85%' },
        { label: 'Quality Rating', value: '99.8%' }
      ]
    },
    {
      id: 'quality',
      name: 'Quality Lab',
      icon: 'Shield',
      description: 'Advanced testing facilities ensuring product excellence',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      hotspots: [
        { x: 30, y: 35, title: 'Material Testing', description: 'Tensile strength and durability tests' },
        { x: 70, y: 45, title: 'Dimensional Analysis', description: 'Precision measurement equipment' },
        { x: 50, y: 70, title: 'Chemical Resistance', description: 'Environmental stress testing' }
      ],
      stats: [
        { label: 'Tests Per Day', value: '500+' },
        { label: 'Accuracy Level', value: '±0.01mm' },
        { label: 'Certification', value: 'ISO 9001:2015' }
      ]
    },
    {
      id: 'warehouse',
      name: 'Storage Facility',
      icon: 'Package',
      description: 'Climate-controlled storage with automated inventory management',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg',
      hotspots: [
        { x: 20, y: 50, title: 'Raw Material Storage', description: 'Temperature-controlled environment' },
        { x: 55, y: 35, title: 'Finished Goods', description: 'Ready-to-ship inventory' },
        { x: 75, y: 65, title: 'Loading Dock', description: 'Efficient dispatch operations' }
      ],
      stats: [
        { label: 'Storage Capacity', value: '50,000 units' },
        { label: 'Inventory Turnover', value: '12x/year' },
        { label: 'Dispatch Time', value: '24 hours' }
      ]
    },
    {
      id: 'office',
      name: 'Corporate Office',
      icon: 'Building2',
      description: 'Modern workspace fostering innovation and collaboration',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      hotspots: [
        { x: 35, y: 40, title: 'Design Center', description: 'Product development and R&D' },
        { x: 65, y: 30, title: 'Conference Room', description: 'Client meetings and presentations' },
        { x: 50, y: 70, title: 'Innovation Lab', description: 'Future technology development' }
      ],
      stats: [
        { label: 'Team Members', value: '150+' },
        { label: 'R&D Investment', value: '15% revenue' },
        { label: 'Patents Filed', value: '25+' }
      ]
    }
  ];

  const currentLocation = tourLocations?.find(loc => loc?.id === activeLocation);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="py-16 bg-white">
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
                <Icon name="Camera" size={24} className="text-white" />
              </div>
              <span className="text-industrial-green font-semibold text-lg">360° Experience</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
              Virtual Facility Tour
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore our manufacturing facilities from anywhere in the world with our interactive virtual tour
            </p>
          </div>

          {/* Tour Interface */}
          <div className="bg-surface rounded-2xl overflow-hidden industrial-shadow-lg">
            {/* Location Navigation */}
            <div className="border-b border-border p-6">
              <div className="flex flex-wrap gap-3">
                {tourLocations?.map((location) => (
                  <button
                    key={location?.id}
                    onClick={() => setActiveLocation(location?.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg precision-transition font-medium ${
                      activeLocation === location?.id
                        ? 'bg-industrial-green text-white shadow-certification'
                        : 'bg-white text-text-primary hover:bg-gray-50 border border-border'
                    }`}
                  >
                    <Icon name={location?.icon} size={18} />
                    <span>{location?.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Tour Viewer */}
            <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
              <div className={`relative ${isFullscreen ? 'h-full' : 'aspect-video lg:aspect-[21/9]'}`}>
                <Image
                  src={currentLocation?.image}
                  alt={currentLocation?.name}
                  className="w-full h-full object-cover"
                />

                {/* Interactive Hotspots */}
                {currentLocation?.hotspots?.map((hotspot, index) => (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{ left: `${hotspot?.x}%`, top: `${hotspot?.y}%` }}
                  >
                    <div className="w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center animate-pulse-green">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Hotspot Tooltip */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 bg-white rounded-lg shadow-industrial-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible precision-transition">
                      <h4 className="font-semibold text-primary mb-2">{hotspot?.title}</h4>
                      <p className="text-sm text-text-secondary">{hotspot?.description}</p>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-border"></div>
                    </div>
                  </div>
                ))}

                {/* Tour Controls */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
                  >
                    <Icon name={isFullscreen ? "Minimize2" : "Maximize2"} size={16} />
                  </button>
                  
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70">
                    <Icon name="RotateCcw" size={16} />
                  </button>
                  
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70">
                    <Icon name="Share2" size={16} />
                  </button>
                </div>

                {/* Location Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{currentLocation?.name}</h3>
                        <p className="text-gray-300 text-sm">{currentLocation?.description}</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Eye" size={16} />
                        <span className="text-sm">360° View</span>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {currentLocation?.stats?.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-conversion-accent">
                            {stat?.value}
                          </div>
                          <div className="text-xs text-gray-300">
                            {stat?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                    <Icon name="MousePointer2" size={14} />
                    <span>Click hotspots to explore</span>
                  </div>
                </div>

                {/* Close Fullscreen */}
                {isFullscreen && (
                  <button
                    onClick={toggleFullscreen}
                    className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Tour Features */}
            <div className="p-6 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-conversion-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="MousePointer2" size={16} className="text-conversion-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Interactive Hotspots</h4>
                    <p className="text-sm text-text-secondary">Click to explore key areas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-conversion-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Maximize2" size={16} className="text-conversion-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Fullscreen Mode</h4>
                    <p className="text-sm text-text-secondary">Immersive viewing experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-conversion-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Share2" size={16} className="text-conversion-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Share Tour</h4>
                    <p className="text-sm text-text-secondary">Send to colleagues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-industrial-green to-conversion-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Schedule a Physical Visit
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Experience our facilities in person. Schedule a guided tour with our technical experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-industrial-green rounded-lg precision-transition hover:bg-gray-100 font-medium">
                  <Icon name="Calendar" size={16} />
                  <span>Schedule Visit</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-white/30 rounded-lg precision-transition hover:bg-white/10 font-medium">
                  <Icon name="Phone" size={16} />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;