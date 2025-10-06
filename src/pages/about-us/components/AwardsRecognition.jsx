import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      title: "Industry Excellence Award 2024",
      organization: "Indian Chemical Council",
      year: "2024",
      category: "Manufacturing Excellence",
      description: "Recognized for outstanding contribution to PVC manufacturing industry and innovation leadership.",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
      icon: "Trophy",
      color: "bg-yellow-500"
    },
    {
      id: 2,
      title: "Sustainability Leadership Award",
      organization: "Green Manufacturing Council",
      year: "2023",
      category: "Environmental Excellence",
      description: "Honored for achieving carbon neutrality and implementing comprehensive sustainability practices.",
      image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=400&h=300&fit=crop",
      icon: "Leaf",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Export Excellence Award",
      organization: "Federation of Indian Export Organizations",
      year: "2023",
      category: "International Trade",
      description: "Recognized for significant contribution to India's export growth in PVC products.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      icon: "Globe",
      color: "bg-blue-500"
    },
    {
      id: 4,
      title: "Quality Excellence Certification",
      organization: "Bureau of Indian Standards",
      year: "2022",
      category: "Quality Assurance",
      description: "Achieved highest quality standards with 99.8% consistency across all product lines.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      icon: "Shield",
      color: "bg-purple-500"
    },
    {
      id: 5,
      title: "Innovation Pioneer Award",
      organization: "Technology Development Board",
      year: "2022",
      category: "Research & Development",
      description: "Recognized for breakthrough innovations in PVC manufacturing technology and processes.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      icon: "Lightbulb",
      color: "bg-orange-500"
    },
    {
      id: 6,
      title: "Best Employer Award",
      organization: "Great Place to Work Institute",
      year: "2021",
      category: "Human Resources",
      description: "Acknowledged for creating exceptional workplace culture and employee satisfaction.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      icon: "Users",
      color: "bg-red-500"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      validUntil: "2026",
      icon: "Shield"
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      validUntil: "2026",
      icon: "Leaf"
    },
    {
      name: "ISO 45001:2018",
      description: "Occupational Health & Safety",
      validUntil: "2025",
      icon: "Heart"
    },
    {
      name: "ISI Mark",
      description: "Indian Standards Institution",
      validUntil: "2025",
      icon: "Award"
    }
  ];

  const recognitions = [
    {
      title: "Top 100 Manufacturing Companies",
      source: "Business Today",
      year: "2024",
      rank: "42"
    },
    {
      title: "Most Trusted PVC Brand",
      source: "Brand Trust Report",
      year: "2023",
      rank: "1"
    },
    {
      title: "Fastest Growing Company",
      source: "Economic Times",
      year: "2023",
      rank: "15"
    },
    {
      title: "Best Corporate Governance",
      source: "Corporate Governance Magazine",
      year: "2022",
      rank: "Top 10"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-primary mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by leading industry organizations, 
            government bodies, and international certification agencies.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards?.map((award) => (
            <div 
              key={award?.id}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-industrial-lg precision-transition group"
            >
              {/* Award Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={award?.image}
                  alt={award?.title}
                  className="w-full h-full object-cover group-hover:scale-110 precision-transition duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Award Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${award?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={award?.icon} size={24} className="text-white" />
                </div>
                
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary">{award?.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-conversion-accent font-semibold mb-1">
                    {award?.category}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{award?.title}</h3>
                  <div className="text-sm text-text-secondary font-medium mb-3">
                    {award?.organization}
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {award?.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-industrial-green" />
                    <span className="text-sm text-text-secondary">{award?.year}</span>
                  </div>
                  <button className="text-industrial-green hover:text-conversion-accent precision-transition">
                    <Icon name="ExternalLink" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Quality Certifications</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our commitment to quality is validated by international certifications 
              and compliance with the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div 
                key={index}
                className="bg-surface p-6 rounded-xl text-center hover:shadow-md precision-transition group"
              >
                <div className="w-16 h-16 bg-industrial-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 precision-transition">
                  <Icon name={cert?.icon} size={32} className="text-white" />
                </div>
                
                <h4 className="font-bold text-primary mb-2">{cert?.name}</h4>
                <p className="text-sm text-text-secondary mb-3">{cert?.description}</p>
                
                <div className="text-xs text-conversion-accent font-semibold">
                  Valid until {cert?.validUntil}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="bg-gradient-to-br from-primary via-gray-800 to-industrial-green rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Newspaper" size={32} className="text-white" />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Media Recognition</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Featured in leading business publications and industry reports 
              for our innovation and market leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recognitions?.map((recognition, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/15 precision-transition"
              >
                <div className="text-2xl font-bold text-conversion-accent mb-2">
                  #{recognition?.rank}
                </div>
                <h4 className="font-semibold text-white mb-2">{recognition?.title}</h4>
                <div className="text-sm text-white/80 mb-1">{recognition?.source}</div>
                <div className="text-xs text-white/60">{recognition?.year}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12 text-center border-t border-white/20 pt-8">
            <blockquote className="text-xl font-medium text-white italic max-w-3xl mx-auto">
              "These recognitions validate our relentless pursuit of excellence and motivate us 
              to continue setting new benchmarks in the PVC manufacturing industry."
            </blockquote>
            <cite className="block mt-4 text-conversion-accent font-semibold">
              - Rajesh Kumar Sharma, Founder & Chairman
            </cite>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Achievement Timeline</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A chronological journey of our major achievements and milestones 
              that have shaped Rocket PVC's industry leadership.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-industrial-green/20"></div>
            
            <div className="space-y-12">
              {awards?.slice(0, 4)?.map((award, index) => (
                <div 
                  key={award?.id}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                      <div className="text-sm text-conversion-accent font-semibold mb-1">
                        {award?.year}
                      </div>
                      <h4 className="font-bold text-primary mb-2">{award?.title}</h4>
                      <p className="text-sm text-text-secondary">{award?.organization}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-industrial-green rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;