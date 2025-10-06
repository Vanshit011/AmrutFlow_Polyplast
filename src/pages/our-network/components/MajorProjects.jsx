import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MajorProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Mumbai Metro Line 3",
      category: "infrastructure",
      location: "Mumbai, Maharashtra",
      client: "Mumbai Metro Rail Corporation",
      value: "₹45 Crores",
      duration: "24 Months",
      status: "Completed",
      year: "2023",
      description: `Comprehensive PVC piping solution for Mumbai's underground metro system including drainage, ventilation, and utility management. The project involved specialized chemical-resistant pipes for harsh underground conditions and high-pressure applications.`,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      specifications: {
        "Pipe Diameter": "100mm to 600mm",
        "Total Length": "15 KM",
        "Pressure Rating": "PN 16",
        "Material Grade": "uPVC Class 3"
      },
      challenges: [
        "Underground installation in congested urban area",
        "Chemical resistance requirements",
        "High-pressure applications",
        "Coordination with multiple contractors"
      ],
      solutions: [
        "Specialized chemical-resistant uPVC pipes",
        "Custom fittings for complex routing",
        "24/7 technical support during installation",
        "Phased delivery to match construction schedule"
      ]
    },
    {
      id: 2,
      title: "Prestige Lakeside Habitat",
      category: "residential",
      location: "Bangalore, Karnataka",
      client: "Prestige Group",
      value: "₹12 Crores",
      duration: "18 Months",
      status: "Completed",
      year: "2023",
      description: `Complete plumbing solution for luxury residential complex with 1200 apartments. Included hot and cold water distribution, sewage systems, and rainwater harvesting infrastructure with eco-friendly PVC solutions.`,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      specifications: {
        "Apartments Served": "1200 Units",
        "Pipe Diameter": "20mm to 200mm",
        "Total Length": "25 KM",
        "System Type": "Hot & Cold Water"
      },
      challenges: [
        "High-rise building requirements",
        "Hot water system integration",
        "Aesthetic integration with interiors",
        "Maintenance accessibility"
      ],
      solutions: [
        "CPVC pipes for hot water applications",
        "Concealed installation techniques",
        "Color-coded piping system",
        "Maintenance-friendly design"
      ]
    },
    {
      id: 3,
      title: "Tata Steel Plant Expansion",
      category: "industrial",
      location: "Jamshedpur, Jharkhand",
      client: "Tata Steel Limited",
      value: "₹28 Crores",
      duration: "30 Months",
      status: "Ongoing",
      year: "2024",
      description: `Industrial-grade PVC piping for steel plant's cooling water system, chemical processing units, and waste management. Heavy-duty applications requiring superior chemical resistance and high-temperature tolerance.`,
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      specifications: {
        "Pipe Diameter": "200mm to 800mm",
        "Total Length": "8 KM",
        "Temperature Rating": "Up to 80°C",
        "Chemical Resistance": "Acid & Alkali Resistant"
      },
      challenges: [
        "Extreme industrial environment",
        "Chemical exposure resistance",
        "High-temperature applications",
        "Continuous operation requirements"
      ],
      solutions: [
        "Industrial-grade CPVC pipes",
        "Special chemical-resistant coatings",
        "Reinforced joint systems",
        "Predictive maintenance protocols"
      ]
    },
    {
      id: 4,
      title: "Smart City Indore Water Grid",
      category: "infrastructure",
      location: "Indore, Madhya Pradesh",
      client: "Indore Municipal Corporation",
      value: "₹35 Crores",
      duration: "36 Months",
      status: "Completed",
      year: "2022",
      description: `City-wide water distribution network upgrade as part of Smart City initiative. Included smart metering integration, leak detection systems, and pressure management with IoT-enabled monitoring.`,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      specifications: {
        "Coverage Area": "150 Sq KM",
        "Population Served": "2.5 Million",
        "Pipe Diameter": "100mm to 1000mm",
        "Smart Features": "IoT Enabled"
      },
      challenges: [
        "City-wide implementation",
        "Minimal service disruption",
        "Integration with existing infrastructure",
        "Smart technology integration"
      ],
      solutions: [
        "Phased implementation approach",
        "Advanced leak detection systems",
        "Smart meter compatibility",
        "Real-time monitoring integration"
      ]
    },
    {
      id: 5,
      title: "IIT Delhi Campus Renovation",
      category: "institutional",
      location: "New Delhi",
      client: "Indian Institute of Technology Delhi",
      value: "₹8 Crores",
      duration: "12 Months",
      status: "Completed",
      year: "2023",
      description: `Complete plumbing infrastructure upgrade for academic buildings, hostels, and research facilities. Included laboratory-grade piping for specialized research requirements and sustainable water management systems.`,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      specifications: {
        "Buildings Covered": "25 Buildings",
        "Students Served": "15,000",
        "Lab-Grade Piping": "2 KM",
        "Sustainability Features": "Rainwater Harvesting"
      },
      challenges: [
        "Academic schedule coordination",
        "Laboratory-grade requirements",
        "Heritage building constraints",
        "Minimal disruption to operations"
      ],
      solutions: [
        "Vacation period installation",
        "Laboratory-certified materials",
        "Heritage-sensitive installation",
        "Temporary bypass systems"
      ]
    },
    {
      id: 6,
      title: "Mahindra Logistics Hub",
      category: "commercial",
      location: "Chennai, Tamil Nadu",
      client: "Mahindra Logistics",
      value: "₹15 Crores",
      duration: "15 Months",
      status: "Completed",
      year: "2023",
      description: `Comprehensive piping solution for large-scale logistics facility including fire safety systems, HVAC integration, and industrial water management. Focus on durability and low maintenance requirements.`,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      beforeImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      specifications: {
        "Facility Area": "50,000 Sq Ft",
        "Fire Safety Lines": "5 KM",
        "HVAC Integration": "Complete",
        "Maintenance Cycle": "10 Years"
      },
      challenges: [
        "Large-scale facility requirements",
        "Fire safety compliance",
        "HVAC system integration",
        "Operational continuity"
      ],
      solutions: [
        "Modular installation approach",
        "Fire-rated piping systems",
        "Integrated HVAC compatibility",
        "Predictive maintenance planning"
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', icon: 'Building2' },
    { value: 'infrastructure', label: 'Infrastructure', icon: 'Construction' },
    { value: 'residential', label: 'Residential', icon: 'Home' },
    { value: 'industrial', label: 'Industrial', icon: 'Factory' },
    { value: 'institutional', label: 'Institutional', icon: 'GraduationCap' },
    { value: 'commercial', label: 'Commercial', icon: 'Building' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects?.filter(p => p?.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-conversion-accent bg-green-50 border-green-200';
      case 'Ongoing': return 'text-warning bg-yellow-50 border-yellow-200';
      case 'Planned': return 'text-secondary bg-blue-50 border-blue-200';
      default: return 'text-text-secondary bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-industrial overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
            Major Project Showcase
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our successful implementations across diverse sectors, showcasing technical 
            expertise and project management capabilities in challenging environments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
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
      </div>
      <div className="p-6 lg:p-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredProjects?.map((project) => (
            <div 
              key={project?.id}
              className="bg-surface rounded-lg overflow-hidden hover:shadow-industrial-lg precision-transition group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-105 precision-transition"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project?.status)}`}>
                    {project?.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-semibold text-primary">
                  {project?.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-headline font-bold text-primary mb-2">
                    {project?.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary mb-1">
                    <Icon name="MapPin" size={14} />
                    <span>{project?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-industrial-green">
                    <Icon name="Building" size={14} />
                    <span>{project?.client}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project?.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-white rounded">
                    <div className="text-lg font-bold text-industrial-green">{project?.value}</div>
                    <div className="text-xs text-text-secondary">Project Value</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded">
                    <div className="text-lg font-bold text-conversion-accent">{project?.duration}</div>
                    <div className="text-xs text-text-secondary">Duration</div>
                  </div>
                </div>

                <button className="w-full bg-industrial-green text-white py-2 px-4 rounded-lg precision-transition hover:bg-industrial-green/90 flex items-center justify-center space-x-2">
                  <Icon name="Eye" size={16} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary mb-2">
              No Projects Found
            </h3>
            <p className="text-text-secondary">
              Try selecting a different category to view available projects.
            </p>
          </div>
        )}
      </div>
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-xl font-headline font-bold text-primary">
                {selectedProject?.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-surface rounded-lg precision-transition"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Before/After Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Before</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject?.beforeImage}
                      alt="Before implementation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">After</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject?.afterImage}
                      alt="After implementation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technical Specifications</h4>
                  <div className="space-y-2">
                    {Object.entries(selectedProject?.specifications)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border">
                        <span className="text-text-secondary">{key}</span>
                        <span className="font-medium text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Project Challenges</h4>
                  <div className="space-y-2">
                    {selectedProject?.challenges?.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="AlertTriangle" size={14} className="text-warning mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Our Solutions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject?.solutions?.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-conversion-accent mt-1 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-lg p-4">
                <p className="text-text-secondary">
                  {selectedProject?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MajorProjects;