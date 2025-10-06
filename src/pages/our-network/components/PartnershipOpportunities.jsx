import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PartnershipOpportunities = () => {
  const [activeTab, setActiveTab] = useState('requirements');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    businessType: '',
    experience: '',
    currentTurnover: '',
    territoryInterest: '',
    message: ''
  });

  const partnershipTypes = [
    {
      id: 1,
      title: "Authorized Distributor",
      description: "Exclusive territory rights with comprehensive product range access",
      icon: "Building2",
      benefits: [
        "Exclusive territory rights",
        "Competitive pricing structure",
        "Marketing support",
        "Technical training",
        "Inventory management support"
      ],
      requirements: [
        "Minimum 5 years industry experience",
        "₹50 Lakh annual turnover",
        "Dedicated sales team",
        "Warehouse facility",
        "Local market knowledge"
      ],
      investment: "₹25-50 Lakhs",
      territory: "District/City Level"
    },
    {
      id: 2,
      title: "Regional Partner",
      description: "Multi-state operations with strategic business development support",
      icon: "MapPin",
      benefits: [
        "Multi-state territory",
        "Strategic planning support",
        "Co-marketing opportunities",
        "Priority product access",
        "Business development assistance"
      ],
      requirements: [
        "Minimum 10 years experience",
        "₹2 Crore annual turnover",
        "Multi-location presence",
        "Strong distribution network",
        "Financial stability"
      ],
      investment: "₹1-2 Crores",
      territory: "State/Regional Level"
    },
    {
      id: 3,
      title: "Service Partner",
      description: "Technical service and installation support with certified expertise",
      icon: "Wrench",
      benefits: [
        "Technical certification",
        "Installation contracts",
        "Service revenue sharing",
        "Training programs",
        "Equipment support"
      ],
      requirements: [
        "Technical expertise",
        "Certified technicians",
        "Service equipment",
        "Local presence",
        "Quality standards compliance"
      ],
      investment: "₹10-25 Lakhs",
      territory: "Local/Regional"
    }
  ];

  const supportPrograms = [
    {
      id: 1,
      title: "Business Development",
      description: "Comprehensive support for market expansion and growth strategies",
      icon: "TrendingUp",
      features: [
        "Market analysis and insights",
        "Business planning assistance",
        "Growth strategy development",
        "Performance monitoring",
        "Regular business reviews"
      ]
    },
    {
      id: 2,
      title: "Marketing Support",
      description: "Complete marketing ecosystem with brand guidelines and promotional materials",
      icon: "Megaphone",
      features: [
        "Brand guidelines and materials",
        "Digital marketing support",
        "Trade show participation",
        "Local advertising co-op",
        "Product demonstration tools"
      ]
    },
    {
      id: 3,
      title: "Technical Training",
      description: "Continuous skill development and product knowledge enhancement programs",
      icon: "GraduationCap",
      features: [
        "Product knowledge training",
        "Installation techniques",
        "Troubleshooting skills",
        "Certification programs",
        "Regular skill updates"
      ]
    },
    {
      id: 4,
      title: "Operational Excellence",
      description: "Systems and processes for efficient operations and quality management",
      icon: "Settings",
      features: [
        "Inventory management systems",
        "Order processing automation",
        "Quality control processes",
        "Performance dashboards",
        "Best practice sharing"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit your partnership application with business details",
      timeline: "Day 1",
      icon: "FileText"
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our team reviews your application and supporting documents",
      timeline: "Days 2-5",
      icon: "Search"
    },
    {
      step: 3,
      title: "Business Evaluation",
      description: "Detailed assessment of business capabilities and market potential",
      timeline: "Days 6-10",
      icon: "BarChart"
    },
    {
      step: 4,
      title: "Site Visit & Interview",
      description: "On-site evaluation and detailed discussion with our team",
      timeline: "Days 11-15",
      icon: "Users"
    },
    {
      step: 5,
      title: "Agreement & Onboarding",
      description: "Partnership agreement signing and comprehensive onboarding process",
      timeline: "Days 16-30",
      icon: "CheckCircle"
    }
  ];

  const tabs = [
    { id: 'requirements', label: 'Partnership Types', icon: 'Building2' },
    { id: 'support', label: 'Support Programs', icon: 'Heart' },
    { id: 'process', label: 'Application Process', icon: 'FileText' },
    { id: 'apply', label: 'Apply Now', icon: 'Send' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Partnership application submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-lg shadow-industrial overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join our growing network of successful partners and build a profitable business 
            with India's leading PVC manufacturer. Comprehensive support and growth opportunities await.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition text-sm font-medium ${
                activeTab === tab?.id
                  ? 'bg-industrial-green text-white shadow-certification'
                  : 'bg-surface text-text-primary hover:bg-white hover:shadow-industrial'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6 lg:p-8">
        {/* Partnership Types */}
        {activeTab === 'requirements' && (
          <div className="space-y-6">
            {partnershipTypes?.map((type) => (
              <div 
                key={type?.id}
                className="bg-surface rounded-lg p-6 hover:bg-white hover:shadow-industrial precision-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-industrial-green text-white rounded-lg">
                    <Icon name={type?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-headline font-bold text-primary mb-2">
                          {type?.title}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {type?.description}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Icon name="DollarSign" size={14} className="text-conversion-accent" />
                          <span className="font-medium">{type?.investment}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" size={14} className="text-industrial-green" />
                          <span className="font-medium">{type?.territory}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                        <div className="space-y-2">
                          {type?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Icon name="Check" size={14} className="text-conversion-accent mt-1 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Requirements</h4>
                        <div className="space-y-2">
                          {type?.requirements?.map((requirement, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Icon name="AlertCircle" size={14} className="text-warning mt-1 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Programs */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportPrograms?.map((program) => (
              <div 
                key={program?.id}
                className="bg-surface rounded-lg p-6 hover:bg-white hover:shadow-industrial precision-transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-conversion-accent text-white rounded-lg">
                    <Icon name={program?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-headline font-bold text-primary mb-2">
                      {program?.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {program?.description}
                    </p>
                    <div className="space-y-2">
                      {program?.features?.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-industrial-green mt-1 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Application Process */}
        {activeTab === 'process' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-headline font-bold text-primary mb-2">
                Simple 5-Step Application Process
              </h3>
              <p className="text-text-secondary">
                From application to partnership - we make it easy and transparent
              </p>
            </div>

            <div className="space-y-4">
              {applicationSteps?.map((step, index) => (
                <div 
                  key={step?.step}
                  className="flex items-start space-x-4 p-6 bg-surface rounded-lg hover:bg-white hover:shadow-industrial precision-transition"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-industrial-green text-white rounded-full flex items-center justify-center font-bold">
                      {step?.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary flex items-center space-x-2">
                        <Icon name={step?.icon} size={18} />
                        <span>{step?.title}</span>
                      </h4>
                      <div className="flex items-center space-x-1 text-sm text-conversion-accent font-medium">
                        <Icon name="Clock" size={14} />
                        <span>{step?.timeline}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary">
                      {step?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-industrial-green/10 to-conversion-accent/10 rounded-lg p-6 border border-industrial-green/20 text-center">
              <Icon name="Clock" size={32} className="text-industrial-green mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary mb-2">
                Average Processing Time: 30 Days
              </h4>
              <p className="text-text-secondary">
                We ensure quick and efficient processing of all partnership applications
              </p>
            </div>
          </div>
        )}

        {/* Application Form */}
        {activeTab === 'apply' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-headline font-bold text-primary mb-2">
                Partnership Application Form
              </h3>
              <p className="text-text-secondary">
                Fill out the form below to start your partnership journey with Rocket PVC
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company Name"
                  type="text"
                  name="companyName"
                  value={formData?.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  required
                />
                <Input
                  label="Contact Person"
                  type="text"
                  name="contactPerson"
                  value={formData?.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Enter contact person name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Location"
                  type="text"
                  name="location"
                  value={formData?.location}
                  onChange={handleInputChange}
                  placeholder="City, State"
                  required
                />
                <Input
                  label="Business Type"
                  type="text"
                  name="businessType"
                  value={formData?.businessType}
                  onChange={handleInputChange}
                  placeholder="e.g., Distributor, Retailer"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Years of Experience"
                  type="text"
                  name="experience"
                  value={formData?.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 5+ years"
                  required
                />
                <Input
                  label="Current Annual Turnover"
                  type="text"
                  name="currentTurnover"
                  value={formData?.currentTurnover}
                  onChange={handleInputChange}
                  placeholder="e.g., ₹50 Lakhs"
                  required
                />
              </div>

              <Input
                label="Territory of Interest"
                type="text"
                name="territoryInterest"
                value={formData?.territoryInterest}
                onChange={handleInputChange}
                placeholder="Specify the area/region you're interested in"
                required
              />

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-industrial-green focus:border-transparent resize-none"
                  placeholder="Tell us more about your business and partnership goals..."
                />
              </div>

              <div className="bg-surface rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-industrial-green mt-1 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    <p className="font-medium text-primary mb-1">Application Review Process</p>
                    <p>
                      Our team will review your application within 2-3 business days. 
                      You'll receive an email confirmation and next steps information.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                fullWidth
                className="bg-industrial-green hover:bg-industrial-green/90 text-white font-semibold py-3"
                iconName="Send"
                iconPosition="left"
              >
                Submit Partnership Application
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnershipOpportunities;