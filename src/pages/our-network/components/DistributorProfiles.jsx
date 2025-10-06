import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const DistributorProfiles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const distributors = [
    {
      id: 1,
      name: "Metro Industrial Solutions",
      location: "Mumbai, Maharashtra",
      category: "industrial",
      specialization: "Industrial Pipes & Fittings",
      experience: "15+ Years",
      coverage: "Western Maharashtra",
      rating: 4.8,
      projects: 250,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      contact: {
        person: "Rajesh Sharma",
        phone: "+91 98765 43210",
        email: "info@metroindustrial.com"
      },
      services: ["Technical Support", "Installation", "Maintenance", "Training"],
      testimonial: "Rocket PVC\'s quality and support have been exceptional. Their products consistently meet our industrial requirements.",
      certifications: ["ISI Certified", "ISO 9001:2015"]
    },
    {
      id: 2,
      name: "Green Valley Distributors",
      location: "Ahmedabad, Gujarat",
      category: "residential",
      specialization: "Residential & Commercial Systems",
      experience: "12+ Years",
      coverage: "Gujarat & Rajasthan",
      rating: 4.9,
      projects: 180,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      contact: {
        person: "Amit Patel",
        phone: "+91 98765 43211",
        email: "contact@greenvalley.com"
      },
      services: ["Design Consultation", "Installation", "After-sales Support", "Warranty"],
      testimonial: "The partnership with Rocket PVC has enabled us to deliver superior quality solutions to our residential clients.",
      certifications: ["Authorized Dealer", "Technical Certified"]
    },
    {
      id: 3,
      name: "South India Pipes Co.",
      location: "Chennai, Tamil Nadu",
      category: "infrastructure",
      specialization: "Infrastructure & Marine Applications",
      experience: "18+ Years",
      coverage: "Tamil Nadu & Kerala",
      rating: 4.7,
      projects: 320,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      contact: {
        person: "Suresh Raman",
        phone: "+91 98765 43212",
        email: "sales@southindiapipes.com"
      },
      services: ["Project Planning", "Bulk Supply", "Logistics", "Technical Support"],
      testimonial: "Rocket PVC\'s marine-grade products have been crucial for our coastal infrastructure projects.",
      certifications: ["Marine Certified", "Infrastructure Approved"]
    },
    {
      id: 4,
      name: "North Zone Enterprises",
      location: "Delhi NCR",
      category: "commercial",
      specialization: "Commercial & Institutional Projects",
      experience: "20+ Years",
      coverage: "North India",
      rating: 4.8,
      projects: 400,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      contact: {
        person: "Vikram Singh",
        phone: "+91 98765 43213",
        email: "info@northzone.com"
      },
      services: ["Project Management", "Bulk Orders", "Custom Solutions", "Training"],
      testimonial: "Their comprehensive product range and reliable supply chain make them our preferred partner.",
      certifications: ["Government Approved", "Quality Assured"]
    },
    {
      id: 5,
      name: "Eastern Pipes & Fittings",
      location: "Kolkata, West Bengal",
      category: "industrial",
      specialization: "Port & Industrial Applications",
      experience: "14+ Years",
      coverage: "Eastern India",
      rating: 4.6,
      projects: 190,
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      contact: {
        person: "Subrata Das",
        phone: "+91 98765 43214",
        email: "contact@easternpipes.com"
      },
      services: ["Port Solutions", "Industrial Supply", "Maintenance", "Emergency Support"],
      testimonial: "Excellent quality products with reliable delivery schedules. Perfect for our port infrastructure needs.",
      certifications: ["Port Approved", "Industrial Grade"]
    },
    {
      id: 6,
      name: "Central India Solutions",
      location: "Bhopal, Madhya Pradesh",
      category: "agricultural",
      specialization: "Agricultural & Irrigation Systems",
      experience: "16+ Years",
      coverage: "Central India",
      rating: 4.9,
      projects: 280,
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=300&fit=crop",
      contact: {
        person: "Ramesh Gupta",
        phone: "+91 98765 43215",
        email: "info@centralsolutions.com"
      },
      services: ["Irrigation Design", "Agricultural Solutions", "Farmer Training", "Subsidies"],
      testimonial: "Their agricultural pipe systems have significantly improved crop yields in our region.",
      certifications: ["Agricultural Certified", "Subsidy Approved"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: 'Building2' },
    { value: 'industrial', label: 'Industrial', icon: 'Factory' },
    { value: 'residential', label: 'Residential', icon: 'Home' },
    { value: 'infrastructure', label: 'Infrastructure', icon: 'Construction' },
    { value: 'commercial', label: 'Commercial', icon: 'Building' },
    { value: 'agricultural', label: 'Agricultural', icon: 'Leaf' }
  ];

  const filteredDistributors = selectedCategory === 'all' 
    ? distributors 
    : distributors?.filter(d => d?.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-industrial p-6 lg:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Meet our certified distributors and service partners who ensure quality delivery 
          and support across different regions and specializations.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories?.map((category) => (
          <button
            key={category?.value}
            onClick={() => setSelectedCategory(category?.value)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition text-sm font-medium ${
              selectedCategory === category?.value
                ? 'bg-industrial-green text-white shadow-certification'
                : 'bg-surface text-text-primary hover:bg-white hover:shadow-industrial'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.label}</span>
          </button>
        ))}
      </div>
      {/* Distributors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDistributors?.map((distributor) => (
          <div 
            key={distributor?.id}
            className="bg-surface rounded-lg overflow-hidden hover:shadow-industrial-lg precision-transition group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={distributor?.image}
                alt={distributor?.name}
                className="w-full h-full object-cover group-hover:scale-105 precision-transition"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-warning fill-current" />
                <span className="text-sm font-semibold">{distributor?.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-headline font-bold text-primary mb-1">
                  {distributor?.name}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
                  <Icon name="MapPin" size={14} />
                  <span>{distributor?.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-industrial-green">
                  <Icon name="Award" size={14} />
                  <span>{distributor?.specialization}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="text-center p-2 bg-white rounded">
                  <div className="font-semibold text-primary">{distributor?.experience}</div>
                  <div className="text-text-secondary">Experience</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="font-semibold text-primary">{distributor?.projects}+</div>
                  <div className="text-text-secondary">Projects</div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">Services</h4>
                <div className="flex flex-wrap gap-1">
                  {distributor?.services?.slice(0, 3)?.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white text-text-secondary text-xs rounded"
                    >
                      {service}
                    </span>
                  ))}
                  {distributor?.services?.length > 3 && (
                    <span className="px-2 py-1 bg-industrial-green text-white text-xs rounded">
                      +{distributor?.services?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-4 p-3 bg-white rounded border-l-4 border-industrial-green">
                <p className="text-sm text-text-secondary italic">
                  "{distributor?.testimonial?.substring(0, 80)}..."
                </p>
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={14} className="text-text-secondary" />
                  <span>{distributor?.contact?.person}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-text-secondary" />
                  <a href={`tel:${distributor?.contact?.phone}`} className="text-industrial-green hover:underline">
                    {distributor?.contact?.phone}
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-industrial-green text-white py-2 px-4 rounded-lg precision-transition hover:bg-industrial-green/90 flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Contact Partner</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredDistributors?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary mb-2">
            No Partners Found
          </h3>
          <p className="text-text-secondary">
            Try selecting a different category to view available partners.
          </p>
        </div>
      )}
    </div>
  );
};

export default DistributorProfiles;