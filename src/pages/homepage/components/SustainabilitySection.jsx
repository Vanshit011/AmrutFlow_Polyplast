import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SustainabilitySection = () => {
  // const initiatives = [
  //   {
  //     id: 1,
  //     title: "Carbon Neutral Manufacturing",
  //     description: "Achieved 40% reduction in carbon emissions through renewable energy adoption and process optimization.",
  //     icon: "Leaf",
  //     impact: "40% CO₂ Reduction",
  //     beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //     afterImage: "https://images.unsplash.com/photo-1497436072909-f5e4be1713a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  //   },
  //   {
  //     id: 2,
  //     title: "Water Conservation",
  //     description: "Implemented closed-loop water recycling systems reducing water consumption by 60%.",
  //     icon: "Droplets",
  //     impact: "60% Water Saved",
  //     beforeImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //     afterImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  //   },
  //   {
  //     id: 3,
  //     title: "Waste to Energy",
  //     description: "Converting manufacturing waste into renewable energy, achieving zero waste to landfill.",
  //     icon: "Recycle",
  //     impact: "Zero Waste",
  //     beforeImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //     afterImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  //   }
  // ];

  const certifications = [
    { name: "Green Building Council", icon: "Building2" },
    { name: "Environmental ISO 14001", icon: "Award" },
    { name: "Carbon Trust Standard", icon: "Leaf" },
    { name: "Energy Star Certified", icon: "Zap" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion-accent/10 text-conversion-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Leaf" size={16} />
            <span>Sustainability Commitment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Green Manufacturing Excellence
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Leading the industry towards a sustainable future through innovative green technologies, 
            responsible manufacturing practices, and environmental stewardship.
          </p>
        </div>


        {/* Environmental Certifications */}
        <div className="bg-gradient-to-r from-conversion-accent/5 to-industrial-green/5 rounded-2xl p-8 mb-12">
          {/* <div className="text-center mb-8">
            <h3 className="text-2xl font-headline font-bold text-primary mb-2">
              Environmental Certifications
            </h3>
            <p className="text-text-secondary">
              Recognized by leading environmental organizations for our sustainable practices
            </p>
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-industrial precision-transition hover:scale-105"
              >
                <div className="w-12 h-12 bg-conversion-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon 
                    name={cert?.icon} 
                    size={24} 
                    className="text-conversion-accent"
                  />
                </div>
                <div className="text-sm font-medium text-primary">
                  {cert?.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion-accent mb-2">2.5M</div>
            <div className="text-sm text-text-secondary">Tons CO₂ Saved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion-accent mb-2">85%</div>
            <div className="text-sm text-text-secondary">Renewable Energy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion-accent mb-2">100%</div>
            <div className="text-sm text-text-secondary">Recyclable Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-conversion-accent mb-2">50+</div>
            <div className="text-sm text-text-secondary">Green Initiatives</div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="conversion-cta bg-conversion-accent hover:bg-conversion-accent/90 text-white font-semibold px-8"
            iconName="Download"
            iconPosition="left"
            iconSize={18}
          >
            Download Sustainability Report
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default SustainabilitySection;