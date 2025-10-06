import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const fmtRs = (n) => (typeof n === 'number' ? `₹${n.toFixed(2)}` : 'Price on request');
const isSWR = (p) => p?.category?.includes('swr');
const isAgri = (p) => p?.category?.includes('agri');

const getFromPrice = (product) => {
  const nums = (product?.variants || [])
    .map(v => v?.amount_rs)
    .filter(v => typeof v === 'number');
  return nums.length ? Math.min(...nums) : null;
};

const ProductModal = ({ product, isOpen, onClose, onDownloadPDF, onDownloadCAD }) => {
  if (!isOpen || !product) return null;

  const [sel, setSel] = React.useState(0);
  const variants = product?.variants || [];
  const active = variants[sel] || null;
  const from = getFromPrice(product);

  const specifications = [
    { label: 'Material', value: product?.material || 'PVC' },
    { label: 'Standard', value: product?.standard || (isSWR(product) ? 'IS 13592' : 'In-house Spec') },
    { label: 'Application', value: product?.application || '—' },
    { label: 'Temperature Range', value: product?.temperatureRange || (isSWR(product) ? '0°C to +40°C' : '5°C to +50°C') },
    { label: 'Color', value: product?.color || (isSWR(product) ? 'Grey' : 'Black/Grey') },
    { label: 'Joint Type', value: product?.jointType || (isSWR(product) ? 'Ring/Self' : 'Solvent') },
    // Variant-aware rollups
    { label: 'From Price', value: from != null ? `${fmtRs(from)} + GST & transport` : 'Price on request' },
    { label: 'Available Sizes', value: variants.map(v => v?.size).filter(Boolean).join(', ') || '—' }
  ];

  const features = [
    'Corrosion resistant',
    'Chemical inert',
    'Lightweight design',
    'Easy installation',
    'Long service life',
    'Cost effective',
    'Maintenance free',
    'Eco-friendly'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-industrial-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-industrial-green rounded-lg flex items-center justify-center">
              <Icon name="Package" size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-primary">{product?.name}</h2>
              <p className="text-sm text-text-secondary">Part No: {product?.partNumber || 'RPV-' + product?.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-lg precision-transition"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid lg:grid-cols-2 gap-6 p-6">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square bg-surface rounded-lg overflow-hidden">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => onDownloadPDF(product)}
                >
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={16}
                  onClick={() => onDownloadCAD(product)}
                >
                  CAD Files
                </Button>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Description</h3>
                <p className="text-text-secondary leading-relaxed">
                  {product?.detailedDescription || `${product?.description} This high-quality PVC product is manufactured using advanced technology and premium raw materials, ensuring superior performance and durability in various applications.`}
                </p>
              </div>

              {/* Variant selector and price block */}
              {variants?.length > 0 && (
                <div className="bg-surface rounded-lg p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-text-secondary">Select Size</div>
                    <div className="text-sm text-text-secondary">
                      {from != null ? `From ${fmtRs(from)} + GST` : 'Price on request'}
                    </div>
                  </div>
                  <select
                    className="w-full text-sm border border-border rounded px-3 py-2 bg-white"
                    value={sel}
                    onChange={(e) => setSel(Number(e.target.value))}
                  >
                    {variants.map((v, i) => (
                      <option key={i} value={i}>
                        {v?.size} {typeof v?.amount_rs === 'number' ? `• ${fmtRs(v.amount_rs)}` : '• POA'}
                      </option>
                    ))}
                  </select>

                  {/* Selected variant facts */}
                  {active && (
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Selected Size:</span>
                        <span className="font-medium text-primary">{active?.size || '—'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Price:</span>
                        <span className="font-medium text-primary">
                          {typeof active?.amount_rs === 'number' ? `${fmtRs(active.amount_rs)} + GST` : 'Price on request'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Weight (g):</span>
                        <span className="font-medium text-primary">{active?.weight_g ?? '—'}</span>
                      </div>
                      {isSWR(product) && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Right Fit:</span>
                            <span className="font-medium text-primary">{active?.rightFit ?? '—'}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-text-secondary">Self Fit:</span>
                            <span className="font-medium text-primary">{active?.selfFit ?? '—'}</span>
                          </div>
                        </>
                      )}
                      {isAgri(product) && (
                        <div className="flex items-center justify-between">
                          <span className="text-text-secondary">Packing (box):</span>
                          <span className="font-medium text-primary">{active?.packing ?? '—'}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Certifications */}
              <div>
                <h3 className="font-semibold text-primary mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.certifications?.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-surface px-3 py-2 rounded-lg">
                      <Icon name="Shield" size={16} className="text-industrial-green" />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="font-semibold text-primary mb-3">Technical Specifications</h3>
                <div className="space-y-2">
                  {specifications?.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="text-text-secondary">{spec?.label}:</span>
                      <span className="font-medium text-primary">{spec?.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-semibold text-primary mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-conversion-accent" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="border-t border-border p-6 bg-surface">
            <h3 className="font-semibold text-primary mb-3">Installation Guidelines</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-industrial-green rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Preparation</h4>
                  <p className="text-xs text-text-secondary">Clean and prepare the pipe ends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-industrial-green rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Application</h4>
                  <p className="text-xs text-text-secondary">Apply solvent cement evenly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-industrial-green rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Assembly</h4>
                  <p className="text-xs text-text-secondary">Join and hold for 30 seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-border p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="flex-1 bg-conversion-accent hover:bg-conversion-accent/90"
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={16}
              >
                Request Quote
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
              >
                Technical Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
