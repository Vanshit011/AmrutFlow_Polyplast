import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WarrantyGuarantee = () => {
  const [activeTab, setActiveTab] = useState('warranty');
  const [claimForm, setClaimForm] = useState({
    productType: '',
    batchNumber: '',
    purchaseDate: '',
    issueDescription: '',
    customerName: '',
    contactNumber: '',
    email: ''
  });

  const warrantyPlans = [
    {
      id: 1,
      name: "Standard Warranty",
      duration: "10 Years",
      coverage: "Manufacturing defects, material failure, dimensional variations",
      products: ["PVC Pipes", "PVC Fittings", "Standard Applications"],
      features: [
        "Free replacement for manufacturing defects",
        "Technical support and guidance",
        "Quality assurance documentation",
        "Pan-India service network"
      ],
      icon: "Shield",
      color: "industrial-green"
    },
    {
      id: 2,
      name: "Premium Warranty",
      duration: "15 Years",
      coverage: "Comprehensive coverage including installation support",
      products: ["CPVC Pipes", "CPVC Fittings", "Hot Water Applications"],
      features: [
        "Extended coverage period",
        "Installation guidance support",
        "Priority technical assistance",
        "Performance guarantee",
        "Expedited claim processing"
      ],
      icon: "Star",
      color: "conversion-accent"
    },
    {
      id: 3,
      name: "Industrial Warranty",
      duration: "20 Years",
      coverage: "Heavy-duty applications with performance guarantee",
      products: ["Industrial Grade Pipes", "Pressure Systems", "Commercial Projects"],
      features: [
        "Maximum coverage duration",
        "Performance under stress guarantee",
        "Dedicated technical team",
        "Custom solution support",
        "Regular performance monitoring",
        "Preventive maintenance guidance"
      ],
      icon: "Award",
      color: "secondary"
    }
  ];

  const claimProcess = [
    {
      step: 1,
      title: "Report Issue",
      description: "Contact our support team or submit online claim form",
      icon: "Phone",
      timeframe: "Immediate"
    },
    {
      step: 2,
      title: "Initial Assessment",
      description: "Technical team reviews the claim and requests documentation",
      icon: "FileText",
      timeframe: "24 hours"
    },
    {
      step: 3,
      title: "Site Inspection",
      description: "If required, our technical expert visits for assessment",
      icon: "Search",
      timeframe: "2-3 days"
    },
    {
      step: 4,
      title: "Claim Approval",
      description: "Claim evaluation and approval based on warranty terms",
      icon: "CheckCircle",
      timeframe: "3-5 days"
    },
    {
      step: 5,
      title: "Resolution",
      description: "Product replacement or repair as per warranty coverage",
      icon: "Package",
      timeframe: "5-7 days"
    }
  ];

  const supportChannels = [
    {
      channel: "Phone Support",
      contact: "+91-1800-123-4567",
      availability: "24/7",
      icon: "Phone",
      description: "Immediate assistance for urgent warranty claims"
    },
    {
      channel: "Email Support",
      contact: "warranty@rocketpvc.com",
      availability: "24 hours response",
      icon: "Mail",
      description: "Detailed claim submission with documentation"
    },
    {
      channel: "WhatsApp Support",
      contact: "+91-98765-43210",
      availability: "9 AM - 9 PM",
      icon: "MessageCircle",
      description: "Quick queries and status updates"
    },
    {
      channel: "Online Portal",
      contact: "www.rocketpvc.com/warranty",
      availability: "24/7",
      icon: "Globe",
      description: "Self-service claim tracking and documentation"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setClaimForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClaimSubmit = (e) => {
    e?.preventDefault();
    // Handle claim submission
    alert('Warranty claim submitted successfully! You will receive a confirmation email shortly.');
    setClaimForm({
      productType: '',
      batchNumber: '',
      purchaseDate: '',
      issueDescription: '',
      customerName: '',
      contactNumber: '',
      email: ''
    });
  };

  const tabs = [
    { id: 'warranty', label: 'Warranty Plans', icon: 'Shield' },
    { id: 'process', label: 'Claim Process', icon: 'GitBranch' },
    { id: 'support', label: 'Support Channels', icon: 'Headphones' },
    { id: 'claim', label: 'Submit Claim', icon: 'FileText' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Warranty & Guarantee
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive warranty coverage and guarantee programs ensuring complete 
            peace of mind with every Rocket PVC product purchase.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg precision-transition font-medium ${
                activeTab === tab?.id
                  ? 'bg-success text-white shadow-certification'
                  : 'bg-surface text-text-primary hover:bg-success hover:text-white border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'warranty' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warrantyPlans?.map((plan) => (
              <div
                key={plan?.id}
                className="bg-surface rounded-xl p-6 hover:shadow-industrial-lg precision-transition border-2 border-transparent hover:border-success/20"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-${plan?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={plan?.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary mb-2">
                    {plan?.name}
                  </h3>
                  <div className="text-3xl font-headline font-bold text-success mb-2">
                    {plan?.duration}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {plan?.coverage}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Applicable Products:</h4>
                  <ul className="space-y-1">
                    {plan?.products?.map((product, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {plan?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  className="border-success text-success hover:bg-success hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'process' && (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {claimProcess?.map((step, index) => (
                <div key={step?.step} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white font-bold">
                      {step?.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-surface rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Icon name={step?.icon} size={20} className="text-success" />
                        <h3 className="text-xl font-headline font-bold text-primary">
                          {step?.title}
                        </h3>
                      </div>
                      <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium border border-success/20">
                        {step?.timeframe}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      {step?.description}
                    </p>
                  </div>
                  {index < claimProcess?.length - 1 && (
                    <div className="absolute left-6 mt-12 w-0.5 h-8 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels?.map((channel, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 hover:shadow-industrial-lg precision-transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Icon name={channel?.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-headline font-bold text-primary">
                      {channel?.channel}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Available: {channel?.availability}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-conversion-accent font-semibold text-lg">
                    {channel?.contact}
                  </p>
                </div>
                
                <p className="text-text-secondary text-sm mb-4">
                  {channel?.description}
                </p>
                
                <Button
                  variant="outline"
                  fullWidth
                  className="border-success text-success hover:bg-success hover:text-white"
                  iconName={channel?.icon}
                  iconPosition="left"
                >
                  Contact Now
                </Button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'claim' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-surface rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                  Submit Warranty Claim
                </h3>
                <p className="text-text-secondary">
                  Fill out the form below to initiate your warranty claim process
                </p>
              </div>

              <form onSubmit={handleClaimSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Customer Name"
                    type="text"
                    name="customerName"
                    value={claimForm?.customerName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    label="Contact Number"
                    type="tel"
                    name="contactNumber"
                    value={claimForm?.contactNumber}
                    onChange={handleInputChange}
                    placeholder="+91-XXXXX-XXXXX"
                    required
                  />
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={claimForm?.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Product Type"
                    type="text"
                    name="productType"
                    value={claimForm?.productType}
                    onChange={handleInputChange}
                    placeholder="e.g., 110mm PVC Pipe"
                    required
                  />
                  <Input
                    label="Batch Number"
                    type="text"
                    name="batchNumber"
                    value={claimForm?.batchNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., BATCH-2024-1205"
                    required
                  />
                </div>

                <Input
                  label="Purchase Date"
                  type="date"
                  name="purchaseDate"
                  value={claimForm?.purchaseDate}
                  onChange={handleInputChange}
                  required
                />

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Issue Description *
                  </label>
                  <textarea
                    name="issueDescription"
                    value={claimForm?.issueDescription}
                    onChange={handleInputChange}
                    placeholder="Please describe the issue in detail..."
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-success focus:border-transparent resize-none"
                  />
                </div>

                <div className="bg-white rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-primary mb-2">Required Documents:</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>Purchase invoice/receipt</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>Product photographs showing the issue</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>Installation details (if applicable)</span>
                    </li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  fullWidth
                  className="bg-success hover:bg-success/90"
                  iconName="Send"
                  iconPosition="left"
                >
                  Submit Warranty Claim
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Warranty Statistics */}
        <div className="mt-16 bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-headline font-bold text-primary mb-8 text-center">
            Warranty Performance Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">24 hrs</div>
              <div className="text-sm text-text-secondary">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="CheckCircle" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">98.5%</div>
              <div className="text-sm text-text-secondary">Claim Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">15,000+</div>
              <div className="text-sm text-text-secondary">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-headline font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-text-secondary">Service Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarrantyGuarantee;