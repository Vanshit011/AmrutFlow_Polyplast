import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestingLaboratory = () => {
  const [activeTab, setActiveTab] = useState('equipment');

  const laboratoryEquipment = [
    {
      id: 1,
      name: "Universal Testing Machine",
      model: "UTM-5000X",
      capacity: "50 kN",
      purpose: "Tensile strength and elongation testing of PVC materials",
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600",
      specifications: ["Load capacity: 50 kN", "Crosshead speed: 0.01-500 mm/min", "Accuracy: ±0.5%", "Temperature range: -70°C to +250°C"],
      calibrationDate: "2024-12-01",
      nextCalibration: "2025-12-01"
    },
    {
      id: 2,
      name: "Impact Testing Machine",
      model: "ITM-300J",
      capacity: "300 Joules",
      purpose: "Charpy and Izod impact testing for material toughness",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600",
      specifications: ["Impact energy: 1-300 J", "Pendulum angle: 150°", "Striking velocity: 5.2 m/s", "Temperature range: -40°C to +80°C"],
      calibrationDate: "2024-11-15",
      nextCalibration: "2025-11-15"
    },
    {
      id: 3,
      name: "Pressure Testing System",
      model: "PTS-1000",
      capacity: "1000 PSI",
      purpose: "Hydrostatic pressure testing of pipes and fittings",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600",
      specifications: ["Pressure range: 0-1000 PSI", "Test duration: 1-1000 hours", "Accuracy: ±1%", "Multiple specimen testing"],
      calibrationDate: "2024-10-20",
      nextCalibration: "2025-10-20"
    },
    {
      id: 4,
      name: "Thermal Analysis System",
      model: "TAS-2000",
      capacity: "1600°C",
      purpose: "DSC, TGA, and thermal property analysis",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600",
      specifications: ["Temperature range: -150°C to 1600°C", "Heating rate: 0.1-200°C/min", "Sample size: 0.1-100 mg", "Atmosphere control"],
      calibrationDate: "2024-09-10",
      nextCalibration: "2025-09-10"
    }
  ];

  const testingMethodologies = [
    {
      id: 1,
      category: "Physical Properties",
      tests: [
        { name: "Tensile Strength", standard: "IS 4985:2000", frequency: "Every batch" },
        { name: "Impact Resistance", standard: "IS 4985:2000", frequency: "Daily" },
        { name: "Hardness Testing", standard: "ASTM D2240", frequency: "Weekly" },
        { name: "Density Measurement", standard: "IS 4985:2000", frequency: "Every batch" }
      ],
      icon: "Zap"
    },
    {
      id: 2,
      category: "Chemical Properties",
      tests: [
        { name: "Chemical Resistance", standard: "ASTM D543", frequency: "Monthly" },
        { name: "Thermal Stability", standard: "IS 4985:2000", frequency: "Weekly" },
        { name: "UV Resistance", standard: "ASTM G154", frequency: "Quarterly" },
        { name: "Oxidation Resistance", standard: "ASTM D3895", frequency: "Monthly" }
      ],
      icon: "Flask"
    },
    {
      id: 3,
      category: "Performance Testing",
      tests: [
        { name: "Pressure Testing", standard: "IS 4985:2000", frequency: "Every batch" },
        { name: "Burst Strength", standard: "ASTM D1599", frequency: "Daily" },
        { name: "Fatigue Testing", standard: "ASTM D7791", frequency: "Weekly" },
        { name: "Creep Testing", standard: "ASTM D2990", frequency: "Monthly" }
      ],
      icon: "Activity"
    },
    {
      id: 4,
      category: "Environmental Testing",
      tests: [
        { name: "Temperature Cycling", standard: "ASTM D1693", frequency: "Weekly" },
        { name: "Weathering Test", standard: "ASTM G155", frequency: "Quarterly" },
        { name: "Ozone Resistance", standard: "ASTM D1149", frequency: "Monthly" },
        { name: "Salt Spray Test", standard: "ASTM B117", frequency: "Monthly" }
      ],
      icon: "CloudRain"
    }
  ];

  const sampleReports = [
    {
      id: 1,
      title: "PVC Pipe Pressure Test Report",
      reportNumber: "RPT-2024-001",
      date: "2024-12-10",
      product: "110mm PVC Pipe",
      batchNumber: "BATCH-2024-1205",
      testResults: {
        "Hydrostatic Pressure": "Pass (16 Bar for 1 hour)",
        "Burst Pressure": "48 Bar (Min: 40 Bar)",
        "Ring Stiffness": "8.2 kN/m² (Min: 8 kN/m²)",
        "Impact Resistance": "Pass (No cracks at 0°C)"
      },
      conclusion: "Product meets IS 4985:2000 standards",
      status: "Approved"
    },
    {
      id: 2,
      title: "CPVC Fitting Chemical Resistance",
      reportNumber: "RPT-2024-002",
      date: "2024-12-08",
      product: "25mm CPVC Elbow",
      batchNumber: "BATCH-2024-1201",
      testResults: {
        "Chlorine Resistance": "Pass (500 ppm for 168 hours)",
        "Acid Resistance": "Pass (pH 2 for 24 hours)",
        "Alkali Resistance": "Pass (pH 12 for 24 hours)",
        "Thermal Stability": "Pass (95°C for 8760 hours)"
      },
      conclusion: "Product suitable for hot water applications",
      status: "Approved"
    }
  ];

  const tabs = [
    { id: 'equipment', label: 'Testing Equipment', icon: 'Microscope' },
    { id: 'methodology', label: 'Test Methods', icon: 'FileText' },
    { id: 'reports', label: 'Sample Reports', icon: 'BarChart3' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="Microscope" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Testing Laboratory
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our state-of-the-art testing facility ensures every product meets stringent quality 
            standards through comprehensive testing methodologies and advanced equipment.
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
                  ? 'bg-secondary text-white shadow-certification'
                  : 'bg-surface text-text-primary hover:bg-secondary hover:text-white border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'equipment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {laboratoryEquipment?.map((equipment) => (
              <div
                key={equipment?.id}
                className="bg-surface rounded-xl overflow-hidden hover:shadow-industrial-lg precision-transition"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={equipment?.image}
                    alt={equipment?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-headline font-bold text-primary mb-1">
                        {equipment?.name}
                      </h3>
                      <p className="text-sm text-industrial-green font-mono font-medium">
                        {equipment?.model}
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium border border-success/20">
                      Calibrated
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {equipment?.purpose}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Specifications:</h4>
                      <ul className="space-y-1">
                        {equipment?.specifications?.map((spec, index) => (
                          <li key={index} className="flex items-center space-x-2 text-xs text-text-secondary">
                            <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-text-secondary pt-4 border-t border-border">
                    <span>Last Calibrated: {new Date(equipment.calibrationDate)?.toLocaleDateString('en-IN')}</span>
                    <span>Next Due: {new Date(equipment.nextCalibration)?.toLocaleDateString('en-IN')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'methodology' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingMethodologies?.map((methodology) => (
              <div
                key={methodology?.id}
                className="bg-surface rounded-xl p-6 hover:shadow-industrial-lg precision-transition"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name={methodology?.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-headline font-bold text-primary">
                    {methodology?.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {methodology?.tests?.map((test, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-border"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary text-sm">{test?.name}</h4>
                        <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
                          {test?.frequency}
                        </span>
                      </div>
                      <p className="text-xs text-industrial-green font-mono">
                        Standard: {test?.standard}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-8">
            {sampleReports?.map((report) => (
              <div
                key={report?.id}
                className="bg-surface rounded-xl p-8 hover:shadow-industrial-lg precision-transition"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-primary mb-2">
                      {report?.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>Report #: {report?.reportNumber}</span>
                      <span>Date: {new Date(report.date)?.toLocaleDateString('en-IN')}</span>
                      <span>Batch: {report?.batchNumber}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium border border-success/20">
                    {report?.status}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Product Details</h4>
                    <p className="text-text-secondary">{report?.product}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Test Results</h4>
                    <div className="space-y-2">
                      {Object.entries(report?.testResults)?.map(([test, result]) => (
                        <div key={test} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">{test}:</span>
                          <span className="text-primary font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-primary mb-2">Conclusion</h4>
                  <p className="text-text-secondary text-sm">{report?.conclusion}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestingLaboratory;