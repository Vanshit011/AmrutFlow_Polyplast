import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FacilityTour = () => {
  const [activeSection, setActiveSection] = useState('manufacturing');

  const facilityData = {
    manufacturing: {
      title: "Manufacturing Excellence",
      description: "State-of-the-art production lines with German precision machinery ensuring consistent quality and optimal efficiency.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop",
      features: [
        "Automated production lines with IoT monitoring",
        "German precision machinery for consistent quality",
        "Real-time quality control systems",
        "Capacity: 50,000 MT annually"
      ],
      stats: {
        efficiency: "98%",
        automation: "85%",
        capacity: "50K MT"
      }
    },
    quality: {
      title: "Quality Assurance Lab",
      description: "Advanced testing facilities with international standard equipment for comprehensive quality validation and certification.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop",
      features: [
        "ISO 17025 accredited testing laboratory",
        "Advanced material testing equipment",
        "Chemical composition analysis",
        "Mechanical properties validation"
      ],
      stats: {
        accuracy: "99.9%",
        tests: "50+",
        certification: "ISO"
      }
    },
    storage: {
      title: "Raw Material Storage",
      description: "Climate-controlled warehouses with advanced inventory management systems ensuring optimal material quality and availability.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      features: [
        "Climate-controlled storage environment",
        "Automated inventory management system",
        "Quality preservation protocols",
        "Strategic material sourcing"
      ],
      stats: {
        capacity: "10K MT",
        temperature: "±2°C",
        humidity: "45%"
      }
    },
    sustainability: {
      title: "Sustainability Center",
      description: "Renewable energy systems and waste management facilities supporting our commitment to environmental responsibility.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=500&fit=crop",
      features: [
        "Solar power generation facility",
        "Waste recycling and treatment plant",
        "Water conservation systems",
        "Carbon footprint monitoring"
      ],
      stats: {
        solar: "2MW",
        recycling: "100%",
        water: "80%"
      }
    }
  };

  const sections = [
    { key: 'manufacturing', name: 'Manufacturing', icon: 'Factory' },
    { key: 'quality', name: 'Quality Lab', icon: 'Shield' },
    { key: 'storage', name: 'Storage', icon: 'Package' },
    { key: 'sustainability', name: 'Sustainability', icon: 'Leaf' }
  ];

  const currentData = facilityData?.[activeSection];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Virtual Facility Tour
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our state-of-the-art manufacturing facilities, quality labs, and sustainability 
            initiatives through our interactive virtual tour experience.
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections?.map((section) => (
            <button
              key={section?.key}
              onClick={() => setActiveSection(section?.key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold precision-transition ${
                activeSection === section?.key
                  ? 'bg-industrial-green text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-gray-100'
              }`}
            >
              <Icon name={section?.icon} size={20} />
              <span>{section?.name}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-industrial-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto">
              <Image 
                src={currentData?.image}
                alt={currentData?.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with 360° indicator */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="RotateCcw" size={16} className="text-industrial-green" />
                    <span className="text-sm font-semibold text-primary">360° View</span>
                  </div>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentData?.stats)?.map(([key, value]) => (
                      <div key={key} className="bg-white/90 backdrop-blur-sm p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-text-secondary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">{currentData?.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {currentData?.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Key Features:</h4>
                <ul className="space-y-3">
                  {currentData?.features?.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-conversion-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="flex items-center justify-center space-x-2 bg-industrial-green hover:bg-industrial-green/90 text-white px-6 py-3 rounded-lg font-semibold precision-transition">
                  <Icon name="Video" size={20} />
                  <span>Watch Video Tour</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border-2 border-industrial-green text-industrial-green hover:bg-industrial-green hover:text-white px-6 py-3 rounded-lg font-semibold precision-transition">
                  <Icon name="Calendar" size={20} />
                  <span>Schedule Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-primary mb-2">5 Locations</h4>
            <p className="text-sm text-text-secondary">Manufacturing facilities across India</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-primary mb-2">2500+ Employees</h4>
            <p className="text-sm text-text-secondary">Skilled workforce driving excellence</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-primary mb-2">ISO Certified</h4>
            <p className="text-sm text-text-secondary">International quality standards</p>
          </div>

          <div className="bg-white p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-primary mb-2">100% Renewable</h4>
            <p className="text-sm text-text-secondary">Clean energy operations</p>
          </div>
        </div>

        {/* Contact for Visit */}
        <div className="mt-16 bg-gradient-to-r from-industrial-green to-conversion-accent rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Building" size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Experience Our Facilities</h3>
            <p className="text-xl text-white/90 mb-8">
              Schedule a personalized facility tour and witness our commitment to quality, 
              innovation, and sustainability firsthand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-industrial-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold precision-transition">
                Schedule Factory Visit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-industrial-green px-8 py-4 rounded-lg font-semibold precision-transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityTour;