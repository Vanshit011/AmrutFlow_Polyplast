import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SustainabilityStory = () => {
  const sustainabilityMetrics = [
    {
      id: 1,
      title: "Carbon Neutral",
      value: "100%",
      description: "Achieved complete carbon neutrality across all operations",
      icon: "Leaf",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Renewable Energy",
      value: "2MW",
      description: "Solar power generation capacity installed",
      icon: "Sun",
      color: "bg-yellow-500"
    },
    {
      id: 3,
      title: "Waste Recycling",
      value: "100%",
      description: "Zero waste to landfill policy implementation",
      icon: "Recycle",
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Water Conservation",
      value: "80%",
      description: "Water recycling and conservation systems",
      icon: "Droplets",
      color: "bg-cyan-500"
    }
  ];

  const initiatives = [
    {
      title: "Green Manufacturing",
      description: "Implementing eco-friendly production processes with minimal environmental impact and maximum resource efficiency.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      features: [
        "Low-emission production technology",
        "Energy-efficient machinery",
        "Sustainable raw material sourcing",
        "Green chemistry applications"
      ]
    },
    {
      title: "Renewable Energy",
      description: "Transitioning to 100% renewable energy sources with solar installations and energy storage systems.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      features: [
        "2MW solar power installation",
        "Battery storage systems",
        "Grid-tie renewable integration",
        "Energy monitoring systems"
      ]
    },
    {
      title: "Circular Economy",
      description: "Creating a closed-loop system where waste becomes input for new products, minimizing environmental impact.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      features: [
        "100% material recycling",
        "Waste-to-energy conversion",
        "Byproduct utilization",
        "Circular design principles"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      icon: "Shield",
      verified: true
    },
    {
      name: "Carbon Trust Standard",
      description: "Carbon Footprint Verification",
      icon: "Award",
      verified: true
    },
    {
      name: "Green Building Council",
      description: "Sustainable Facility Certification",
      icon: "Building",
      verified: true
    },
    {
      name: "Energy Star",
      description: "Energy Efficiency Recognition",
      icon: "Zap",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Our Sustainability Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Leading the industry toward a greener future through innovative sustainable practices, 
            renewable energy adoption, and environmental stewardship.
          </p>
        </div>

        {/* Sustainability Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {sustainabilityMetrics?.map((metric) => (
            <div 
              key={metric?.id}
              className="bg-surface rounded-2xl p-8 text-center hover:shadow-industrial-lg precision-transition group"
            >
              <div className={`w-16 h-16 ${metric?.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 precision-transition`}>
                <Icon name={metric?.icon} size={32} className="text-white" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-4xl font-bold text-primary">{metric?.value}</div>
                <h3 className="text-xl font-semibold text-industrial-green">{metric?.title}</h3>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="space-y-16">
          {initiatives?.map((initiative, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{initiative?.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {initiative?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Key Features:</h4>
                  <ul className="space-y-3">
                    {initiative?.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-conversion-accent rounded-full"></div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center space-x-2 text-industrial-green hover:text-conversion-accent precision-transition font-semibold">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <Image 
                    src={initiative?.image}
                    alt={initiative?.title}
                    className="w-full h-full object-cover hover:scale-110 precision-transition duration-700"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-conversion-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-industrial-green/20 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="mt-20 bg-gradient-to-br from-surface to-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Environmental Impact</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Measurable results from our comprehensive sustainability initiatives 
              and environmental responsibility programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="TreePine" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50,000</div>
                <div className="text-sm text-text-secondary">Trees Equivalent CO₂ Saved</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Droplets" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2M</div>
                <div className="text-sm text-text-secondary">Liters Water Saved Annually</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5GWh</div>
                <div className="text-sm text-text-secondary">Clean Energy Generated</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Recycle" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">1000</div>
                <div className="text-sm text-text-secondary">Tons Material Recycled</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t border-border pt-8">
            <h4 className="text-xl font-semibold text-primary text-center mb-8">
              Environmental Certifications
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications?.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:shadow-md precision-transition"
                >
                  <div className="w-10 h-10 bg-industrial-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={cert?.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary text-sm">{cert?.name}</div>
                    <div className="text-xs text-text-secondary">{cert?.description}</div>
                  </div>
                  {cert?.verified && (
                    <Icon name="CheckCircle" size={16} className="text-conversion-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Commitments */}
        <div className="mt-16 bg-gradient-to-r from-industrial-green to-conversion-accent rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Target" size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-6">Our 2030 Sustainability Goals</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">Net Zero</div>
                <div className="text-white/90">Carbon emissions across entire value chain</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/90">Renewable energy for all operations</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Zero Waste</div>
                <div className="text-white/90">Complete circular economy implementation</div>
              </div>
            </div>

            <p className="text-xl text-white/90 mb-8">
              "Our commitment to sustainability goes beyond compliance – it's about creating 
              a better world for future generations while maintaining industrial excellence."
            </p>

            <button className="bg-white text-industrial-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold precision-transition">
              Download Sustainability Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityStory;