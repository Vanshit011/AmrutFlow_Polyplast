import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStatistics = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    states: 0,
    employees: 0,
    capacity: 0,
    distributors: 0
  });

  const finalValues = {
    experience: 25,
    projects: 500,
    states: 28,
    employees: 2500,
    capacity: 50000,
    distributors: 200
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues?.[key]) {
          currentValue = finalValues?.[key];
          clearInterval(intervals?.find(interval => interval === this));
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals?.forEach(interval => clearInterval(interval));
  }, []);

  const statistics = [
    {
      id: 1,
      title: "Years of Excellence",
      value: counters?.experience,
      suffix: "+",
      icon: "Calendar",
      description: "Decades of industry leadership and innovation",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Projects Completed",
      value: counters?.projects,
      suffix: "+",
      icon: "Building",
      description: "Major infrastructure and industrial projects",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "States Served",
      value: counters?.states,
      suffix: "/28",
      icon: "MapPin",
      description: "Pan-India presence and distribution network",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Team Members",
      value: counters?.employees,
      suffix: "+",
      icon: "Users",
      description: "Skilled professionals driving excellence",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Annual Capacity",
      value: counters?.capacity,
      suffix: " MT",
      icon: "Factory",
      description: "Manufacturing capacity in metric tons",
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Distribution Partners",
      value: counters?.distributors,
      suffix: "+",
      icon: "Truck",
      description: "Authorized dealers and distributors",
      color: "bg-industrial-green"
    }
  ];

  const achievements = [
    {
      title: "Market Leadership",
      description: "Leading PVC manufacturer in Western India with expanding national presence",
      icon: "Trophy",
      color: "text-yellow-500"
    },
    {
      title: "Quality Excellence",
      description: "ISI certified with 99.8% quality consistency across all product lines",
      icon: "Shield",
      color: "text-green-500"
    },
    {
      title: "Innovation Pioneer",
      description: "15+ patents filed with continuous R&D investment for next-gen products",
      icon: "Lightbulb",
      color: "text-blue-500"
    },
    {
      title: "Sustainability Leader",
      description: "100% carbon-neutral operations with renewable energy integration",
      icon: "Leaf",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-gray-800 to-industrial-green text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-6">
            Numbers That Define Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to quality and innovation is reflected in these impressive milestones 
            that showcase our impact on India's infrastructure development.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {statistics?.map((stat, index) => (
            <div 
              key={stat?.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 precision-transition group"
            >
              <div className={`w-16 h-16 ${stat?.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 precision-transition`}>
                <Icon name={stat?.icon} size={32} className="text-white" />
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-white">
                  {stat?.value?.toLocaleString()}{stat?.suffix}
                </div>
                <h3 className="text-xl font-semibold text-conversion-accent">{stat?.title}</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {stat?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Recognition and milestones that establish Rocket PVC as a trusted leader 
              in the PVC manufacturing industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements?.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 precision-transition"
              >
                <div className="flex-shrink-0">
                  <Icon name={achievement?.icon} size={24} className={achievement?.color} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement?.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Trajectory */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Growth Trajectory</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-conversion-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">300%</div>
                  <div className="text-sm text-gray-300">Revenue Growth (5 Years)</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-conversion-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Target" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm text-gray-300">Customer Satisfaction</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-conversion-accent rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-300">Export Countries</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-lg text-gray-300 italic">
                "These numbers represent more than statistics – they reflect our unwavering commitment 
                to excellence and the trust our customers place in Rocket PVC."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatistics;