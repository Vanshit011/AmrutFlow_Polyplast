import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FutureVision = () => {
  const visionPillars = [
    {
      id: 1,
      title: "Technology Leadership",
      description: "Pioneering Industry 4.0 technologies with AI-driven manufacturing, IoT integration, and smart factory automation.",
      icon: "Cpu",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      goals: [
        "100% automated production lines",
        "AI-powered quality control",
        "Predictive maintenance systems",
        "Digital twin technology"
      ],
      timeline: "2025-2027"
    },
    {
      id: 2,
      title: "Global Expansion",
      description: "Establishing international presence with manufacturing facilities and distribution networks across emerging markets.",
      icon: "Globe",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
      goals: [
        "5 international facilities",
        "50+ export countries",
        "Strategic partnerships",
        "Local market adaptation"
      ],
      timeline: "2024-2028"
    },
    {
      id: 3,
      title: "Sustainable Innovation",
      description: "Developing next-generation eco-friendly PVC products with biodegradable additives and circular economy principles.",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      goals: [
        "Bio-based PVC alternatives",
        "Carbon-negative products",
        "Circular manufacturing",
        "Zero environmental impact"
      ],
      timeline: "2025-2030"
    }
  ];

  const roadmapMilestones = [
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Complete digitization of all manufacturing processes with real-time monitoring and control systems.",
      status: "in-progress",
      achievements: [
        "IoT sensor deployment",
        "Data analytics platform",
        "Mobile workforce apps"
      ]
    },
    {
      year: "2025",
      title: "Market Expansion",
      description: "Launch operations in Southeast Asian markets with localized product offerings and partnerships.",
      status: "planned",
      achievements: [
        "Thailand facility setup",
        "Vietnam distribution network",
        "Regional partnerships"
      ]
    },
    {
      year: "2026",
      title: "Innovation Breakthrough",
      description: "Introduction of revolutionary bio-based PVC products with enhanced sustainability features.",
      status: "research",
      achievements: [
        "Bio-PVC product line",
        "Patent applications",
        "Market validation"
      ]
    },
    {
      year: "2027",
      title: "Industry Leadership",
      description: "Establish Rocket PVC as the leading sustainable PVC manufacturer in Asia-Pacific region.",
      status: "vision",
      achievements: [
        "Market leadership position",
        "Sustainability benchmarks",
        "Technology licensing"
      ]
    }
  ];

  const commitments = [
    {
      title: "Net Zero Emissions",
      target: "2030",
      description: "Achieve complete carbon neutrality across entire value chain including suppliers and distributors.",
      icon: "Target",
      progress: 65
    },
    {
      title: "Circular Economy",
      target: "2028",
      description: "Implement 100% circular manufacturing with zero waste to landfill and complete material recycling.",
      icon: "Recycle",
      progress: 80
    },
    {
      title: "Innovation Investment",
      target: "Ongoing",
      description: "Invest 5% of annual revenue in R&D for sustainable technologies and product innovation.",
      icon: "Lightbulb",
      progress: 100
    },
    {
      title: "Community Impact",
      target: "2025",
      description: "Create 5,000 direct and indirect jobs while supporting local communities and skill development.",
      icon: "Users",
      progress: 45
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Vision for the Future
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Shaping the future of PVC manufacturing through innovation, sustainability, 
            and global expansion while maintaining our commitment to quality excellence.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="space-y-16 mb-20">
          {visionPillars?.map((pillar, index) => (
            <div 
              key={pillar?.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-industrial-green rounded-xl flex items-center justify-center">
                    <Icon name={pillar?.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary">{pillar?.title}</h3>
                    <div className="text-sm text-conversion-accent font-semibold">{pillar?.timeline}</div>
                  </div>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {pillar?.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">Strategic Goals:</h4>
                  <ul className="space-y-3">
                    {pillar?.goals?.map((goal, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-conversion-accent rounded-full"></div>
                        <span className="text-text-secondary">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center space-x-2 bg-industrial-green hover:bg-industrial-green/90 text-white px-6 py-3 rounded-lg font-semibold precision-transition">
                  <Icon name="ArrowRight" size={20} />
                  <span>Learn More</span>
                </button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <Image 
                    src={pillar?.image}
                    alt={pillar?.title}
                    className="w-full h-full object-cover hover:scale-110 precision-transition duration-700"
                  />
                </div>
                
                {/* Timeline Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-industrial-green" />
                    <span className="text-sm font-semibold text-primary">{pillar?.timeline}</span>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-conversion-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-industrial-green/20 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Strategic Roadmap</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our comprehensive plan for achieving industry leadership through 
              innovation, expansion, and sustainable growth.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-industrial-green/20 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {roadmapMilestones?.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-industrial-green rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg precision-transition">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-industrial-green mb-1">{milestone?.year}</div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone?.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        milestone?.status === 'planned' ? 'bg-yellow-100 text-yellow-800' :
                        milestone?.status === 'research'? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone?.status?.replace('-', ' ')?.toUpperCase()}
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-primary mb-3 text-center">{milestone?.title}</h4>
                    <p className="text-sm text-text-secondary mb-4 text-center">{milestone?.description}</p>
                    
                    <div className="space-y-2">
                      {milestone?.achievements?.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-conversion-accent rounded-full"></div>
                          <span className="text-xs text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Commitments */}
        <div className="bg-gradient-to-br from-primary via-gray-800 to-industrial-green rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Compass" size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Our Commitments</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Measurable commitments that guide our strategic decisions and 
              ensure accountability in achieving our vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commitments?.map((commitment, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 precision-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={commitment?.icon} size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white">{commitment?.title}</h4>
                      <span className="text-sm text-conversion-accent font-semibold">{commitment?.target}</span>
                    </div>
                    
                    <p className="text-white/80 text-sm mb-4">{commitment?.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/60">Progress</span>
                        <span className="text-xs text-white font-semibold">{commitment?.progress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-conversion-accent h-2 rounded-full precision-transition"
                          style={{ width: `${commitment?.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center border-t border-white/20 pt-8">
            <h4 className="text-2xl font-bold mb-4">Join Our Journey</h4>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of the future of sustainable manufacturing. Partner with us as we 
              transform the PVC industry and create a better tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-industrial-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold precision-transition">
                Partnership Opportunities
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-industrial-green px-8 py-4 rounded-lg font-semibold precision-transition">
                Investment Relations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVision;