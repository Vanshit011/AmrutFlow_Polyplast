import React from 'react';
import Icon from '../../../components/AppIcon';

const CertificationShowcase = () => {
  const certifications = [
    {
      id: 1,
      name: "ISI Certified",
      description: "Bureau of Indian Standards Certification",
      icon: "Shield",
      color: "text-industrial-green"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "Award",
      color: "text-conversion-accent"
    },
    {
      id: 3,
      name: "Environmental Compliance",
      description: "Green Manufacturing Standards",
      icon: "Leaf",
      color: "text-industrial-green"
    },
    {
      id: 4,
      name: "CRISIL Rated",
      description: "Financial Stability & Credibility",
      icon: "TrendingUp",
      color: "text-conversion-accent"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our commitment to quality is validated by industry-leading certifications 
            and compliance standards that ensure reliability and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications?.map((cert, index) => (
            <div
              key={cert?.id}
              className="certification-badge bg-surface rounded-lg p-6 text-center hover:shadow-industrial-lg precision-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-industrial">
                  <Icon 
                    name={cert?.icon} 
                    size={32} 
                    className={cert?.color}
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-primary mb-2">
                {cert?.name}
              </h3>
              
              <p className="text-sm text-text-secondary mb-4">
                {cert?.description}
              </p>
              
              {/* <a
                href={cert?.verificationLink}
                className="inline-flex items-center space-x-2 text-sm text-industrial-green hover:text-conversion-accent precision-transition font-medium"
              >
                <span>Verify Certificate</span>
                <Icon name="ExternalLink" size={14} />
              </a> */}
            </div>
          ))}
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-industrial-green" />
              <span className="text-sm">25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-industrial-green" />
              <span className="text-sm">10,000+ Satisfied Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-industrial-green" />
              <span className="text-sm">Pan-India Presence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={16} className="text-industrial-green" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationShowcase;