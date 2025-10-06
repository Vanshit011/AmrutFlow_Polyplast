import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: "Precision Manufacturing",
      description: "Every product meets exact specifications through rigorous quality control and advanced manufacturing processes.",
      icon: "Target",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      stats: "99.8% Quality Consistency",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Environmental Responsibility",
      description: "Committed to sustainable practices, renewable energy, and carbon-neutral manufacturing for a greener future.",
      icon: "Leaf",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
      stats: "100% Carbon Neutral",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Customer Partnership",
      description: "Building long-term relationships through exceptional service, technical support, and customized solutions.",
      icon: "Handshake",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      stats: "95% Customer Retention",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Innovation Excellence",
      description: "Continuous research and development to create cutting-edge products that exceed industry standards.",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      stats: "15+ Patents Filed",
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Safety First",
      description: "Maintaining the highest safety standards in manufacturing processes and workplace environment.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      stats: "Zero Accident Record",
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Community Impact",
      description: "Contributing to local communities through employment, skill development, and social responsibility initiatives.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      stats: "1000+ Jobs Created",
      color: "bg-industrial-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The fundamental principles that guide every decision, drive our innovation, 
            and shape our commitment to excellence in PVC manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div 
              key={value?.id}
              className="group bg-surface rounded-2xl overflow-hidden hover:shadow-industrial-lg precision-transition"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={value?.image}
                  alt={value?.title}
                  className="w-full h-full object-cover group-hover:scale-110 precision-transition duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${value?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={value?.icon} size={24} className="text-white" />
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary">{value?.stats}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${value?.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={value?.icon} size={16} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{value?.title}</h3>
                </div>
                
                <p className="text-text-secondary leading-relaxed">
                  {value?.description}
                </p>

                {/* Action Button */}
                <button className="flex items-center space-x-2 text-industrial-green hover:text-conversion-accent precision-transition font-semibold">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="mt-20 bg-gradient-to-br from-surface to-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Values in Action</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              See how our core values translate into real-world impact across our operations, 
              community initiatives, and customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-industrial-green rounded-full flex items-center justify-center mx-auto">
                <Icon name="Factory" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-text-secondary">Manufacturing Facilities</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-conversion-accent rounded-full flex items-center justify-center mx-auto">
                <Icon name="Recycle" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-secondary">Waste Recycling</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2500+</div>
                <div className="text-sm text-text-secondary">Employees</div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-text-secondary">Industry Awards</div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-2xl font-medium text-primary italic max-w-4xl mx-auto">
              "Our values are not just words on a wall – they are the foundation of every decision we make, 
              every product we create, and every relationship we build."
            </blockquote>
            <cite className="block mt-4 text-industrial-green font-semibold">
              - Rajesh Kumar Sharma, Founder & Chairman
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;