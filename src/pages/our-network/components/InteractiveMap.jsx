import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const stateData = [
    {
      id: 1,
      name: "Maharashtra",
      distributors: 45,
      serviceCenters: 12,
      majorProjects: 8,
      lat: 19.7515,
      lng: 75.7139,
      specializations: ["Industrial Pipes", "Residential Fittings", "Agricultural Solutions"],
      contactPerson: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "maharashtra@rocketpvc.com"
    },
    {
      id: 2,
      name: "Gujarat",
      distributors: 38,
      serviceCenters: 10,
      majorProjects: 12,
      lat: 23.0225,
      lng: 72.5714,
      specializations: ["Chemical Resistant Pipes", "Industrial Fittings", "Water Management"],
      contactPerson: "Amit Patel",
      phone: "+91 98765 43211",
      email: "gujarat@rocketpvc.com"
    },
    {
      id: 3,
      name: "Tamil Nadu",
      distributors: 42,
      serviceCenters: 11,
      majorProjects: 9,
      lat: 11.1271,
      lng: 78.6569,
      specializations: ["Marine Applications", "Residential Systems", "Infrastructure"],
      contactPerson: "Suresh Raman",
      phone: "+91 98765 43212",
      email: "tamilnadu@rocketpvc.com"
    },
    {
      id: 4,
      name: "Karnataka",
      distributors: 35,
      serviceCenters: 9,
      majorProjects: 7,
      lat: 15.3173,
      lng: 75.7139,
      specializations: ["IT Infrastructure", "Residential Complexes", "Commercial Buildings"],
      contactPerson: "Venkat Rao",
      phone: "+91 98765 43213",
      email: "karnataka@rocketpvc.com"
    },
    {
      id: 5,
      name: "Uttar Pradesh",
      distributors: 52,
      serviceCenters: 15,
      majorProjects: 11,
      lat: 26.8467,
      lng: 80.9462,
      specializations: ["Metro Projects", "Housing Schemes", "Industrial Parks"],
      contactPerson: "Manoj Singh",
      phone: "+91 98765 43214",
      email: "uttarpradesh@rocketpvc.com"
    },
    {
      id: 6,
      name: "West Bengal",
      distributors: 28,
      serviceCenters: 8,
      majorProjects: 6,
      lat: 22.9868,
      lng: 87.8550,
      specializations: ["Port Infrastructure", "Residential Projects", "Educational Institutions"],
      contactPerson: "Subrata Das",
      phone: "+91 98765 43215",
      email: "westbengal@rocketpvc.com"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Locations', icon: 'MapPin' },
    { value: 'distributors', label: 'Distributors', icon: 'Building2' },
    { value: 'service', label: 'Service Centers', icon: 'Wrench' },
    { value: 'projects', label: 'Major Projects', icon: 'Construction' }
  ];

  const handleStateClick = (state) => {
    setSelectedState(selectedState?.id === state?.id ? null : state);
  };

  return (
    <div className="bg-white rounded-lg shadow-industrial overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-2">
              Interactive Network Map
            </h2>
            <p className="text-text-secondary">
              Click on states to explore our regional presence and capabilities
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setFilterType(option?.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition text-sm font-medium ${
                  filterType === option?.value
                    ? 'bg-industrial-green text-white shadow-certification'
                    : 'bg-surface text-text-primary hover:bg-white hover:shadow-industrial'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span>{option?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Map Section */}
        <div className="lg:col-span-2 relative bg-surface">
          <div className="aspect-video lg:aspect-auto lg:h-96 relative">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Rocket PVC Network Map"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=20.5937,78.9629&z=5&output=embed"
              className="absolute inset-0"
            />
            
            {/* State Markers Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {stateData?.map((state) => (
                <button
                  key={state?.id}
                  onClick={() => handleStateClick(state)}
                  className={`absolute w-8 h-8 rounded-full precision-transition pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 ${
                    selectedState?.id === state?.id
                      ? 'bg-conversion-accent shadow-lg scale-125'
                      : 'bg-industrial-green hover:bg-conversion-accent hover:scale-110'
                  }`}
                  style={{
                    left: `${((state?.lng - 68) / (97 - 68)) * 100}%`,
                    top: `${((37 - state?.lat) / (37 - 8)) * 100}%`
                  }}
                >
                  <Icon name="MapPin" size={16} className="text-white mx-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* State Details Panel */}
        <div className="bg-white p-6 lg:h-96 lg:overflow-y-auto">
          {selectedState ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-headline font-bold text-primary mb-2">
                  {selectedState?.name}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building2" size={16} className="text-industrial-green" />
                    <span>{selectedState?.distributors} Distributors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Wrench" size={16} className="text-conversion-accent" />
                    <span>{selectedState?.serviceCenters} Service Centers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Construction" size={16} className="text-secondary" />
                    <span>{selectedState?.majorProjects} Major Projects</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedState?.specializations?.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Regional Contact</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} className="text-text-secondary" />
                    <span>{selectedState?.contactPerson}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-text-secondary" />
                    <a href={`tel:${selectedState?.phone}`} className="text-industrial-green hover:underline">
                      {selectedState?.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-text-secondary" />
                    <a href={`mailto:${selectedState?.email}`} className="text-industrial-green hover:underline">
                      {selectedState?.email}
                    </a>
                  </div>
                </div>
              </div>

              <button className="w-full bg-industrial-green text-white py-2 px-4 rounded-lg precision-transition hover:bg-industrial-green/90 flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Contact Regional Team</span>
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                Select a State
              </h3>
              <p className="text-text-secondary text-sm">
                Click on any state marker to view detailed information about our regional presence and capabilities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;