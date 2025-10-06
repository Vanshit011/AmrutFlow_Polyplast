import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2020);

  const timelineData = [
    {
      year: 1998,
      title: "Foundation & Vision",
      description: "Rocket PVC was established with a vision to revolutionize the PVC manufacturing industry in India. Started with a small facility in Mumbai with just 10 employees.",
      achievements: [
        "Initial investment of ₹50 lakhs",
        "First production line installed",
        "Local market penetration"
      ],
      icon: "Rocket",
      color: "bg-blue-500"
    },
    {
      year: 2003,
      title: "Quality Certification",
      description: "Achieved ISI certification and expanded production capacity. Introduced quality control processes that became industry benchmarks.",
      achievements: [
        "ISI certification obtained",
        "Production capacity doubled",
        "Quality lab established"
      ],
      icon: "Shield",
      color: "bg-green-500"
    },
    {
      year: 2008,
      title: "Market Expansion",
      description: "Expanded operations across Western India and established distribution network. Launched premium product lines for industrial applications.",
      achievements: [
        "50+ distributors network",
        "Premium product line launch",
        "Regional market leadership"
      ],
      icon: "TrendingUp",
      color: "bg-purple-500"
    },
    {
      year: 2012,
      title: "Technology Upgrade",
      description: "Invested in state-of-the-art German manufacturing equipment and automated production lines. Achieved 99.5% quality consistency.",
      achievements: [
        "German machinery installation",
        "Automation implementation",
        "Quality consistency improved"
      ],
      icon: "Settings",
      color: "bg-orange-500"
    },
    {
      year: 2016,
      title: "Pan-India Presence",
      description: "Established manufacturing facilities in 5 states and achieved pan-India distribution. Became preferred supplier for major infrastructure projects.",
      achievements: [
        "5 manufacturing facilities",
        "Pan-India distribution",
        "Major project partnerships"
      ],
      icon: "MapPin",
      color: "bg-red-500"
    },
    {
      year: 2020,
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program with renewable energy adoption and waste reduction. Achieved carbon-neutral manufacturing.",
      achievements: [
        "Solar power integration",
        "Zero waste to landfill",
        "Carbon neutral operations"
      ],
      icon: "Leaf",
      color: "bg-green-600"
    },
    {
      year: 2024,
      title: "Digital Transformation",
      description: "Implemented Industry 4.0 technologies with IoT-enabled production monitoring and AI-driven quality control systems.",
      achievements: [
        "IoT implementation",
        "AI quality control",
        "Digital supply chain"
      ],
      icon: "Cpu",
      color: "bg-industrial-green"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Our Journey of Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From a small startup to India's leading PVC manufacturer, explore the milestones 
            that shaped our commitment to quality and innovation.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData?.map((item) => (
            <button
              key={item?.year}
              onClick={() => setActiveYear(item?.year)}
              className={`px-6 py-3 rounded-full font-semibold precision-transition ${
                activeYear === item?.year
                  ? 'bg-industrial-green text-white shadow-lg'
                  : 'bg-white text-text-secondary hover:bg-gray-100'
              }`}
            >
              {item?.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {timelineData?.map((item) => (
            <div
              key={item?.year}
              className={`precision-transition duration-500 ${
                activeYear === item?.year ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
              }`}
            >
              {activeYear === item?.year && (
                <div className="bg-white rounded-2xl shadow-industrial-lg p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${item?.color} rounded-xl flex items-center justify-center`}>
                          <Icon name={item?.icon} size={32} className="text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary">{item?.year}</div>
                          <div className="text-lg font-semibold text-industrial-green">{item?.title}</div>
                        </div>
                      </div>

                      <p className="text-lg text-text-secondary leading-relaxed">
                        {item?.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {item?.achievements?.map((achievement, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-conversion-accent rounded-full"></div>
                              <span className="text-text-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <div className={`w-32 h-32 ${item?.color} rounded-full flex items-center justify-center shadow-2xl`}>
                          <Icon name={item?.icon} size={64} className="text-white" />
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-conversion-accent rounded-full opacity-60"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-industrial-green rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Progress */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-gradient-to-r from-industrial-green to-conversion-accent rounded-full precision-transition duration-500"
                style={{ 
                  width: `${((timelineData?.findIndex(item => item?.year === activeYear) + 1) / timelineData?.length) * 100}%` 
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-text-secondary">1998</span>
              <span className="text-sm text-text-secondary">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;