import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationShowcase = () => {
  const certifications = [
    {
      id: 1,
      name: "ISI Mark",
      code: "IS 4985:2000",
      description: "Bureau of Indian Standards certification for PVC pipes and fittings",
      issueDate: "2022-03-15",
      expiryDate: "2025-03-14",
      status: "Active",
      verificationLink: "#verify-isi",
      logo: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Product Standards"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      code: "QMS-2023-001",
      description: "Quality Management System certification ensuring consistent product quality",
      issueDate: "2023-01-20",
      expiryDate: "2026-01-19",
      status: "Active",
      verificationLink: "#verify-iso9001",
      logo: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Quality Management"
    },
    {
      id: 3,
      name: "ISO 14001:2015",
      code: "EMS-2023-002",
      description: "Environmental Management System certification for sustainable manufacturing",
      issueDate: "2023-02-10",
      expiryDate: "2026-02-09",
      status: "Active",
      verificationLink: "#verify-iso14001",
      logo: "https://images.pexels.com/photos/9324302/pexels-photo-9324302.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Environmental"
    },
    {
      id: 4,
      name: "CPVC Certification",
      code: "CPVC-2023-003",
      description: "Chlorinated PVC pipes certification for hot water applications",
      issueDate: "2023-06-05",
      expiryDate: "2025-06-04",
      status: "Active",
      verificationLink: "#verify-cpvc",
      logo: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Specialized Products"
    },
    {
      id: 5,
      name: "Fire Safety Compliance",
      code: "FSC-2023-004",
      description: "Fire retardant PVC products certification for safety applications",
      issueDate: "2023-08-12",
      expiryDate: "2025-08-11",
      status: "Active",
      verificationLink: "#verify-fire",
      logo: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Safety Standards"
    },
    {
      id: 6,
      name: "Export Quality Certification",
      code: "EQC-2023-005",
      description: "International quality standards for export products",
      issueDate: "2023-09-01",
      expiryDate: "2025-08-31",
      status: "Active",
      verificationLink: "#verify-export",
      logo: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Export Standards"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-success bg-success/10 border-success/20';
      case 'Expiring':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Expired':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Product Standards':
        return 'Package';
      case 'Quality Management':
        return 'Shield';
      case 'Environmental':
        return 'Leaf';
      case 'Specialized Products':
        return 'Zap';
      case 'Safety Standards':
        return 'AlertTriangle';
      case 'Export Standards':
        return 'Globe';
      default:
        return 'Award';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
              <Icon name="Award" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Certifications & Standards
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our comprehensive certification portfolio demonstrates unwavering commitment to quality, 
            safety, and environmental responsibility in PVC manufacturing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications?.map((cert) => (
            <div
              key={cert?.id}
              className="bg-white rounded-xl border border-border hover:shadow-industrial-lg precision-transition group"
            >
              {/* Certificate Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={cert?.logo}
                      alt={cert?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert?.status)}`}>
                    {cert?.status}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <Icon 
                    name={getCategoryIcon(cert?.category)} 
                    size={16} 
                    className="text-industrial-green" 
                  />
                  <span className="text-sm text-text-secondary font-medium">
                    {cert?.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-headline font-bold text-primary mb-2">
                  {cert?.name}
                </h3>
                <p className="text-sm text-industrial-green font-mono font-medium mb-3">
                  {cert?.code}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cert?.description}
                </p>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Issue Date:</span>
                    <span className="text-primary font-medium">
                      {new Date(cert.issueDate)?.toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Expiry Date:</span>
                    <span className="text-primary font-medium">
                      {new Date(cert.expiryDate)?.toLocaleDateString('en-IN')}
                    </span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-surface hover:bg-industrial-green hover:text-white rounded-lg precision-transition text-sm font-medium">
                  <Icon name="ExternalLink" size={16} />
                  <span>Verify Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="bg-surface rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">6+</div>
              <div className="text-sm text-text-secondary">Active Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Calendar" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">2025</div>
              <div className="text-sm text-text-secondary">Latest Renewal</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-text-secondary">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-text-secondary">Years Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationShowcase;