import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const qualitySteps = [
    {
      id: 1,
      title: "Raw Material Inspection",
      description: "Comprehensive testing of incoming PVC resin, additives, and colorants",
      details: `Every batch of raw materials undergoes rigorous inspection including:\n• Chemical composition analysis\n• Purity testing and contamination checks\n• Physical property verification\n• Supplier certification validation\n• Batch traceability documentation`,
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Package",
      duration: "2-4 hours",
      tests: ["Chemical Analysis", "Purity Test", "Contamination Check", "Supplier Audit"],
      status: "Active"
    },
    {
      id: 2,
      title: "Manufacturing Process Control",
      description: "Real-time monitoring and control of extrusion and molding processes",
      details: `Continuous monitoring throughout manufacturing includes:\n• Temperature and pressure control\n• Extrusion speed optimization\n• Wall thickness measurement\n• Dimensional accuracy verification\n• Process parameter documentation`,
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Settings",
      duration: "Continuous",
      tests: ["Temperature Control", "Pressure Monitoring", "Dimension Check", "Speed Control"],
      status: "Active"
    },
    {
      id: 3,
      title: "In-Process Quality Checks",
      description: "Multiple quality checkpoints during production for immediate correction",
      details: `Strategic quality checkpoints ensure consistent quality:\n• Visual inspection at each stage\n• Dimensional measurements\n• Color consistency verification\n• Surface finish evaluation\n• Immediate corrective actions`,
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Search",
      duration: "Every 30 minutes",
      tests: ["Visual Inspection", "Dimension Test", "Color Check", "Surface Analysis"],
      status: "Active"
    },
    {
      id: 4,
      title: "Finished Product Testing",
      description: "Comprehensive testing of completed products before packaging",
      details: `Final product validation includes:\n• Pressure testing and burst strength\n• Impact resistance testing\n• Chemical resistance verification\n• Dimensional accuracy confirmation\n• Performance under stress conditions`,
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "TestTube",
      duration: "1-2 hours",
      tests: ["Pressure Test", "Impact Test", "Chemical Resistance", "Stress Test"],
      status: "Active"
    },
    {
      id: 5,
      title: "Packaging & Final Inspection",
      description: "Quality verification during packaging and final product approval",
      details: `Final quality assurance before dispatch:\n• Packaging integrity verification\n• Label accuracy confirmation\n• Batch documentation completion\n• Final visual inspection\n• Quality certificate generation`,
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Package2",
      duration: "30 minutes",
      tests: ["Package Integrity", "Label Check", "Documentation", "Final Inspection"],
      status: "Active"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
              <Icon name="GitBranch" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Quality Process Timeline
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our systematic quality control process ensures every product meets the highest 
            standards from raw material to final packaging.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {qualitySteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={() => setActiveStep(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition font-medium text-sm ${
                activeStep === index
                  ? 'bg-industrial-green text-white shadow-certification'
                  : 'bg-white text-text-primary hover:bg-industrial-green hover:text-white border border-border'
              }`}
            >
              <Icon name={step?.icon} size={16} />
              <span className="hidden sm:inline">Step {index + 1}</span>
              <span className="sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="bg-white rounded-xl shadow-industrial-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Step Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={qualitySteps?.[activeStep]?.image}
                alt={qualitySteps?.[activeStep]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center space-x-2 text-white">
                  <Icon name={qualitySteps?.[activeStep]?.icon} size={20} />
                  <span className="font-medium">Step {activeStep + 1} of {qualitySteps?.length}</span>
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-industrial-green rounded-lg flex items-center justify-center">
                    <Icon name={qualitySteps?.[activeStep]?.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-primary">
                      {qualitySteps?.[activeStep]?.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Duration: {qualitySteps?.[activeStep]?.duration}
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium border border-success/20">
                  {qualitySteps?.[activeStep]?.status}
                </div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {qualitySteps?.[activeStep]?.description}
              </p>

              {/* Detailed Process */}
              <div className="mb-6">
                <h4 className="text-lg font-headline font-semibold text-primary mb-3">
                  Process Details
                </h4>
                <div className="bg-surface rounded-lg p-4">
                  <pre className="text-sm text-text-secondary whitespace-pre-line font-sans">
                    {qualitySteps?.[activeStep]?.details}
                  </pre>
                </div>
              </div>

              {/* Quality Tests */}
              <div>
                <h4 className="text-lg font-headline font-semibold text-primary mb-3">
                  Quality Tests Performed
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {qualitySteps?.[activeStep]?.tests?.map((test, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 bg-surface rounded-lg"
                    >
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-primary font-medium">{test}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-industrial">
            <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-headline font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-text-secondary">Quality Monitoring</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-industrial">
            <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Target" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-headline font-bold text-primary mb-1">99.8%</div>
            <div className="text-sm text-text-secondary">Quality Pass Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-industrial">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-headline font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-text-secondary">Quality Inspectors</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-industrial">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name="BarChart3" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-headline font-bold text-primary mb-1">200+</div>
            <div className="text-sm text-text-secondary">Daily Tests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityProcessTimeline;