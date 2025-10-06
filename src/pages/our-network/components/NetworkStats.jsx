import React from 'react';
import Icon from '../../../components/AppIcon';

const NetworkStats = () => {
  const stats = [
    {
      id: 1,
      title: "States Covered",
      value: "28+",
      description: "Pan-India presence with comprehensive coverage",
      icon: "MapPin",
      color: "text-industrial-green"
    },
    {
      id: 2,
      title: "Distribution Centers",
      value: "150+",
      description: "Strategic locations for faster delivery",
      icon: "Building2",
      color: "text-conversion-accent"
    },
    {
      id: 3,
      title: "Service Partners",
      value: "500+",
      description: "Authorized dealers and distributors",
      icon: "Users",
      color: "text-secondary"
    },
    {
      id: 4,
      title: "Average Delivery",
      value: "48hrs",
      description: "Quick turnaround for urgent requirements",
      icon: "Clock",
      color: "text-warning"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-industrial p-6 lg:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
          Network at a Glance
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our extensive distribution network ensures reliable supply and support across India, 
          backed by strategic partnerships and efficient logistics.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat) => (
          <div 
            key={stat?.id}
            className="text-center p-6 rounded-lg bg-surface hover:bg-white precision-transition hover:shadow-industrial group"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-industrial mb-4 group-hover:scale-110 precision-transition ${stat?.color}`}>
              <Icon name={stat?.icon} size={28} />
            </div>
            <div className="text-3xl font-headline font-bold text-primary mb-2">
              {stat?.value}
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {stat?.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {stat?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-6 bg-gradient-to-r from-industrial-green/10 to-conversion-accent/10 rounded-lg border border-industrial-green/20">
        <div className="flex items-center justify-center space-x-4 text-center">
          <Icon name="Shield" size={24} className="text-industrial-green" />
          <div>
            <h4 className="font-semibold text-primary">Quality Assured Network</h4>
            <p className="text-sm text-text-secondary">All partners certified and regularly audited for quality standards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkStats;