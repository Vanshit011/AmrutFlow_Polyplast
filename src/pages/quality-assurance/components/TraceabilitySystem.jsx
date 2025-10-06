import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TraceabilitySystem = () => {
  const [searchBatch, setSearchBatch] = useState('');
  const [traceabilityData, setTraceabilityData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const mockTraceabilityData = {
    "BATCH-2024-1205": {
      batchNumber: "BATCH-2024-1205",
      productName: "110mm PVC Pipe",
      productCode: "PVC-110-6M",
      manufacturingDate: "2024-12-05",
      shiftDetails: "Shift A - 06:00 to 14:00",
      operator: "Rajesh Kumar",
      supervisor: "Amit Sharma",
      rawMaterials: [
        {
          material: "PVC Resin",
          supplier: "Reliance Industries Ltd.",
          batchNumber: "REL-PVC-241201",
          quantity: "500 kg",
          testCertificate: "TC-REL-241201"
        },
        {
          material: "Calcium Carbonate",
          supplier: "Gujarat Mineral Corp.",
          batchNumber: "GMC-CC-241130",
          quantity: "150 kg",
          testCertificate: "TC-GMC-241130"
        },
        {
          material: "Titanium Dioxide",
          supplier: "Tronox Ltd.",
          batchNumber: "TRX-TIO2-241128",
          quantity: "25 kg",
          testCertificate: "TC-TRX-241128"
        }
      ],
      qualityTests: [
        {
          testName: "Dimensional Check",
          result: "Pass",
          standard: "IS 4985:2000",
          testDate: "2024-12-05",
          inspector: "Priya Patel"
        },
        {
          testName: "Pressure Test",
          result: "Pass - 16 Bar",
          standard: "IS 4985:2000",
          testDate: "2024-12-05",
          inspector: "Suresh Gupta"
        },
        {
          testName: "Impact Test",
          result: "Pass - No cracks",
          standard: "IS 4985:2000",
          testDate: "2024-12-05",
          inspector: "Meera Singh"
        }
      ],
      packagingDetails: {
        packagingDate: "2024-12-06",
        packagingOperator: "Vikram Yadav",
        bundleNumbers: ["BDL-001", "BDL-002", "BDL-003"],
        totalQuantity: "150 pieces",
        storageLocation: "Warehouse A - Section 3"
      },
      distributionHistory: [
        {
          date: "2024-12-08",
          distributor: "Mumbai Construction Supplies",
          quantity: "50 pieces",
          invoiceNumber: "INV-2024-5678",
          transportDetails: "Truck MH-01-AB-1234"
        },
        {
          date: "2024-12-10",
          distributor: "Delhi Building Materials",
          quantity: "100 pieces",
          invoiceNumber: "INV-2024-5679",
          transportDetails: "Truck DL-02-CD-5678"
        }
      ],
      certifications: [
        "ISI Mark - IS 4985:2000",
        "ISO 9001:2015 Quality Management",
        "ISO 14001:2015 Environmental Management"
      ]
    },
    "BATCH-2024-1201": {
      batchNumber: "BATCH-2024-1201",
      productName: "25mm CPVC Elbow",
      productCode: "CPVC-ELB-25",
      manufacturingDate: "2024-12-01",
      shiftDetails: "Shift B - 14:00 to 22:00",
      operator: "Sunita Devi",
      supervisor: "Ravi Verma",
      rawMaterials: [
        {
          material: "CPVC Compound",
          supplier: "Lubrizol Corporation",
          batchNumber: "LUB-CPVC-241128",
          quantity: "200 kg",
          testCertificate: "TC-LUB-241128"
        },
        {
          material: "Heat Stabilizer",
          supplier: "Baerlocher India",
          batchNumber: "BAE-HS-241125",
          quantity: "10 kg",
          testCertificate: "TC-BAE-241125"
        }
      ],
      qualityTests: [
        {
          testName: "Dimensional Check",
          result: "Pass",
          standard: "ASTM D2846",
          testDate: "2024-12-01",
          inspector: "Anita Sharma"
        },
        {
          testName: "Hydrostatic Pressure",
          result: "Pass - 25 Bar",
          standard: "ASTM D2846",
          testDate: "2024-12-01",
          inspector: "Deepak Kumar"
        }
      ],
      packagingDetails: {
        packagingDate: "2024-12-02",
        packagingOperator: "Mohan Lal",
        bundleNumbers: ["BDL-CPVC-001"],
        totalQuantity: "500 pieces",
        storageLocation: "Warehouse B - Section 1"
      },
      distributionHistory: [
        {
          date: "2024-12-04",
          distributor: "Chennai Plumbing Supplies",
          quantity: "200 pieces",
          invoiceNumber: "INV-2024-5680",
          transportDetails: "Truck TN-03-EF-9012"
        }
      ],
      certifications: [
        "NSF Certified",
        "ASTM D2846 Compliant",
        "ISO 9001:2015 Quality Management"
      ]
    }
  };

  const handleSearch = () => {
    if (!searchBatch?.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const data = mockTraceabilityData?.[searchBatch?.toUpperCase()];
      setTraceabilityData(data || null);
      setIsSearching(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
              <Icon name="Search" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Product Traceability System
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Complete product lifecycle tracking from raw materials to final delivery, 
            ensuring full accountability and quality documentation.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-surface rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-headline font-bold text-primary mb-6 text-center">
              Track Your Product Batch
            </h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter batch number (e.g., BATCH-2024-1205)"
                  value={searchBatch}
                  onChange={(e) => setSearchBatch(e?.target?.value)}
                  onKeyPress={handleKeyPress}
                  className="text-center"
                />
              </div>
              <Button
                onClick={handleSearch}
                loading={isSearching}
                iconName="Search"
                iconPosition="left"
                className="px-8"
              >
                Track
              </Button>
            </div>
            
            {/* Sample Batch Numbers */}
            <div className="mt-4 text-center">
              <p className="text-sm text-text-secondary mb-2">Try these sample batch numbers:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSearchBatch('BATCH-2024-1205')}
                  className="px-3 py-1 bg-white border border-border rounded text-xs hover:bg-industrial-green hover:text-white precision-transition"
                >
                  BATCH-2024-1205
                </button>
                <button
                  onClick={() => setSearchBatch('BATCH-2024-1201')}
                  className="px-3 py-1 bg-white border border-border rounded text-xs hover:bg-industrial-green hover:text-white precision-transition"
                >
                  BATCH-2024-1201
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Traceability Results */}
        {traceabilityData ? (
          <div className="space-y-8">
            {/* Product Overview */}
            <div className="bg-surface rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-headline font-bold text-primary">
                  Product Information
                </h3>
                <div className="px-4 py-2 bg-success/10 text-success rounded-lg text-sm font-medium border border-success/20">
                  Verified Batch
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Package" size={16} className="text-industrial-green" />
                    <span className="text-sm font-semibold text-primary">Product Details</span>
                  </div>
                  <p className="text-text-primary font-medium">{traceabilityData?.productName}</p>
                  <p className="text-sm text-text-secondary">Code: {traceabilityData?.productCode}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={16} className="text-industrial-green" />
                    <span className="text-sm font-semibold text-primary">Manufacturing</span>
                  </div>
                  <p className="text-text-primary font-medium">
                    {new Date(traceabilityData.manufacturingDate)?.toLocaleDateString('en-IN')}
                  </p>
                  <p className="text-sm text-text-secondary">{traceabilityData?.shiftDetails}</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={16} className="text-industrial-green" />
                    <span className="text-sm font-semibold text-primary">Personnel</span>
                  </div>
                  <p className="text-text-primary font-medium">Op: {traceabilityData?.operator}</p>
                  <p className="text-sm text-text-secondary">Sup: {traceabilityData?.supervisor}</p>
                </div>
              </div>
            </div>

            {/* Raw Materials */}
            <div className="bg-white rounded-xl p-8 shadow-industrial">
              <h3 className="text-xl font-headline font-bold text-primary mb-6">
                Raw Materials Traceability
              </h3>
              <div className="space-y-4">
                {traceabilityData?.rawMaterials?.map((material, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-primary">Material</span>
                        <p className="text-text-primary">{material?.material}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Supplier</span>
                        <p className="text-text-primary">{material?.supplier}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Batch & Quantity</span>
                        <p className="text-text-primary">{material?.batchNumber}</p>
                        <p className="text-sm text-text-secondary">{material?.quantity}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Certificate</span>
                        <p className="text-conversion-accent font-mono text-sm">{material?.testCertificate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Tests */}
            <div className="bg-white rounded-xl p-8 shadow-industrial">
              <h3 className="text-xl font-headline font-bold text-primary mb-6">
                Quality Test Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {traceabilityData?.qualityTests?.map((test, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-primary">{test?.testName}</h4>
                      <div className="px-2 py-1 bg-success/10 text-success rounded text-xs font-medium border border-success/20">
                        Pass
                      </div>
                    </div>
                    <p className="text-text-primary mb-2">{test?.result}</p>
                    <div className="text-sm text-text-secondary space-y-1">
                      <p>Standard: {test?.standard}</p>
                      <p>Date: {new Date(test.testDate)?.toLocaleDateString('en-IN')}</p>
                      <p>Inspector: {test?.inspector}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution History */}
            <div className="bg-white rounded-xl p-8 shadow-industrial">
              <h3 className="text-xl font-headline font-bold text-primary mb-6">
                Distribution History
              </h3>
              <div className="space-y-4">
                {traceabilityData?.distributionHistory?.map((distribution, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <span className="text-sm font-semibold text-primary">Date</span>
                        <p className="text-text-primary">
                          {new Date(distribution.date)?.toLocaleDateString('en-IN')}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Distributor</span>
                        <p className="text-text-primary">{distribution?.distributor}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Quantity</span>
                        <p className="text-text-primary">{distribution?.quantity}</p>
                        <p className="text-sm text-text-secondary">{distribution?.invoiceNumber}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">Transport</span>
                        <p className="text-text-primary">{distribution?.transportDetails}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-surface rounded-xl p-8">
              <h3 className="text-xl font-headline font-bold text-primary mb-6">
                Applicable Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {traceabilityData?.certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-border">
                    <Icon name="Shield" size={20} className="text-success" />
                    <span className="text-text-primary font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : searchBatch && !isSearching ? (
          <div className="text-center py-12">
            <Icon name="AlertCircle" size={48} className="text-warning mx-auto mb-4" />
            <h3 className="text-xl font-headline font-bold text-primary mb-2">
              Batch Not Found
            </h3>
            <p className="text-text-secondary">
              The batch number "{searchBatch}" was not found in our system. 
              Please check the batch number and try again.
            </p>
          </div>
        ) : null}

        {/* System Features */}
        <div className="mt-16 bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-headline font-bold text-primary mb-8 text-center">
            Traceability System Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Database" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Complete Records</h4>
              <p className="text-sm text-text-secondary">
                Full lifecycle documentation from raw materials to delivery
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Real-time Tracking</h4>
              <p className="text-sm text-text-secondary">
                Instant access to current product status and location
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="AlertTriangle" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Recall Management</h4>
              <p className="text-sm text-text-secondary">
                Quick identification and recall procedures when needed
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Compliance Reports</h4>
              <p className="text-sm text-text-secondary">
                Automated compliance documentation and audit trails
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraceabilitySystem;