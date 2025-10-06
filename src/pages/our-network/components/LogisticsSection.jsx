import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LogisticsSection = () => {
  const [activeTab, setActiveTab] = useState('delivery');

  const deliveryCapabilities = [
    {
      id: 1,
      title: "Express Delivery",
      timeline: "24-48 Hours",
      coverage: "Metro Cities",
      description: "Urgent requirements fulfilled with priority handling and dedicated logistics",
      icon: "Zap",
      color: "text-conversion-accent"
    },
    {
      id: 2,
      title: "Standard Delivery",
      timeline: "3-5 Days",
      coverage: "Tier 1 & 2 Cities",
      description: "Regular delivery schedule with optimized routing and cost-effective solutions",
      icon: "Truck",
      color: "text-industrial-green"
    },
    {
      id: 3,
      title: "Bulk Transportation",
      timeline: "5-7 Days",
      coverage: "Pan-India",
      description: "Large volume orders with specialized handling and dedicated transport",
      icon: "Package",
      color: "text-secondary"
    },
    {
      id: 4,
      title: "Remote Area Delivery",
      timeline: "7-10 Days",
      coverage: "Rural & Remote",
      description: "Comprehensive coverage including remote locations with last-mile connectivity",
      icon: "MapPin",
      color: "text-warning"
    }
  ];

  const inventoryFeatures = [
    {
      id: 1,
      title: "Real-time Tracking",
      description: "Live inventory levels across all distribution centers with automated alerts",
      icon: "Activity",
      benefits: ["Stock Visibility", "Demand Forecasting", "Automated Reordering"]
    },
    {
      id: 2,
      title: "Quality Control",
      description: "Multi-stage quality checks at every distribution point ensuring consistency",
      icon: "Shield",
      benefits: ["Batch Tracking", "Quality Assurance", "Compliance Monitoring"]
    },
    {
      id: 3,
      title: "Smart Warehousing",
      description: "Climate-controlled storage with advanced inventory management systems",
      icon: "Database",
      benefits: ["Temperature Control", "Humidity Management", "Automated Systems"]
    },
    {
      id: 4,
      title: "Emergency Stock",
      description: "Strategic buffer inventory for critical requirements and emergency supplies",
      icon: "AlertTriangle",
      benefits: ["Emergency Response", "Critical Supply", "24/7 Availability"]
    }
  ];

  const emergencyProtocols = [
    {
      id: 1,
      step: "Immediate Response",
      timeline: "Within 2 Hours",
      description: "Emergency hotline activation and requirement assessment",
      actions: ["Hotline Activation", "Requirement Analysis", "Stock Verification"]
    },
    {
      id: 2,
      step: "Resource Mobilization",
      timeline: "Within 6 Hours",
      description: "Inventory allocation and logistics arrangement for urgent delivery",
      actions: ["Inventory Allocation", "Transport Arrangement", "Route Optimization"]
    },
    {
      id: 3,
      step: "Priority Dispatch",
      timeline: "Within 12 Hours",
      description: "Expedited processing and dispatch with real-time tracking",
      actions: ["Priority Processing", "Expedited Dispatch", "Live Tracking"]
    },
    {
      id: 4,
      step: "Delivery & Support",
      timeline: "Within 24 Hours",
      description: "On-site delivery with technical support and installation assistance",
      actions: ["On-site Delivery", "Technical Support", "Installation Help"]
    }
  ];

  const tabs = [
    { id: 'delivery', label: 'Delivery Capabilities', icon: 'Truck' },
    { id: 'inventory', label: 'Inventory Management', icon: 'Database' },
    { id: 'emergency', label: 'Emergency Protocols', icon: 'AlertTriangle' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-industrial overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
            Logistics & Supply Chain
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Advanced logistics infrastructure ensuring reliable, timely delivery with comprehensive 
            inventory management and emergency response capabilities.
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
        {/* Delivery Capabilities */}
        {activeTab === 'delivery' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliveryCapabilities?.map((capability) => (
                <div 
                  key={capability?.id}
                  className="p-6 bg-surface rounded-lg hover:bg-white hover:shadow-industrial precision-transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white shadow-industrial ${capability?.color}`}>
                      <Icon name={capability?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {capability?.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary mb-2">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{capability?.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{capability?.coverage}</span>
                        </div>
                      </div>
                      <p className="text-text-secondary text-sm">
                        {capability?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-industrial-green/10 to-conversion-accent/10 rounded-lg p-6 border border-industrial-green/20">
              <div className="text-center">
                <Icon name="Truck" size={32} className="text-industrial-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Real-time Tracking Available
                </h3>
                <p className="text-text-secondary mb-4">
                  Track your orders in real-time with SMS and email notifications at every milestone
                </p>
                <button className="bg-industrial-green text-white px-6 py-2 rounded-lg precision-transition hover:bg-industrial-green/90 flex items-center space-x-2 mx-auto">
                  <Icon name="Search" size={16} />
                  <span>Track Your Order</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Management */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inventoryFeatures?.map((feature) => (
                <div 
                  key={feature?.id}
                  className="p-6 bg-surface rounded-lg hover:bg-white hover:shadow-industrial precision-transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-white shadow-industrial text-industrial-green">
                      <Icon name={feature?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {feature?.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-3">
                        {feature?.description}
                      </p>
                      <div className="space-y-1">
                        {feature?.benefits?.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" size={14} className="text-conversion-accent" />
                            <span className="text-text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                Inventory Distribution Network
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-industrial-green mb-1">150+</div>
                  <div className="text-sm text-text-secondary">Distribution Centers</div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-conversion-accent mb-1">50K+</div>
                  <div className="text-sm text-text-secondary">SKUs Managed</div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-secondary mb-1">99.5%</div>
                  <div className="text-sm text-text-secondary">Accuracy Rate</div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-warning mb-1">24/7</div>
                  <div className="text-sm text-text-secondary">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Protocols */}
        {activeTab === 'emergency' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg mb-4">
                <Icon name="AlertTriangle" size={20} />
                <span className="font-semibold">Emergency Response Protocol</span>
              </div>
              <p className="text-text-secondary">
                Rapid response system for critical supply requirements and emergency situations
              </p>
            </div>

            <div className="space-y-4">
              {emergencyProtocols?.map((protocol, index) => (
                <div 
                  key={protocol?.id}
                  className="flex items-start space-x-4 p-6 bg-surface rounded-lg hover:bg-white hover:shadow-industrial precision-transition"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-industrial-green text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {protocol?.step}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-conversion-accent font-medium">
                        <Icon name="Clock" size={14} />
                        <span>{protocol?.timeline}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">
                      {protocol?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {protocol?.actions?.map((action, actionIndex) => (
                        <span
                          key={actionIndex}
                          className="px-3 py-1 bg-white text-text-secondary text-xs rounded-full border"
                        >
                          {action}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-center">
                <Icon name="Phone" size={32} className="text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-red-700 mb-4">
                  24/7 emergency support for critical supply requirements
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+911800123456"
                    className="bg-red-600 text-white px-6 py-2 rounded-lg precision-transition hover:bg-red-700 flex items-center justify-center space-x-2"
                  >
                    <Icon name="Phone" size={16} />
                    <span>+91 1800 123 456</span>
                  </a>
                  <a 
                    href="mailto:emergency@rocketpvc.com"
                    className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded-lg precision-transition hover:bg-red-50 flex items-center justify-center space-x-2"
                  >
                    <Icon name="Mail" size={16} />
                    <span>emergency@rocketpvc.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogisticsSection;