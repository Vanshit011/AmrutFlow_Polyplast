import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonPanel = ({ products, onRemoveProduct, onClearAll, isOpen, onToggle }) => {
  if (products?.length === 0) return null;

  // Helpers driven by AGRI.xlsx and SWR-FITTING.xlsx
  const fmtRs = (n) => (typeof n === 'number' ? `₹${n.toFixed(2)}` : 'Price on request');
  const isSWR = (product) => product?.category?.includes('swr');
  const isAgri = (product) => product?.category?.includes('agri');

  const getFromPrice = (product) => {
    const nums = (product?.variants || [])
      .map(v => v?.amount_rs)
      .filter(v => typeof v === 'number');
    return nums.length ? Math.min(...nums) : null;
  };

  const getSizeList = (product) =>
    (product?.variants || []).map(v => v?.size).filter(Boolean).join(', ');

  const getVariantSummary = (product) => {
    const sizes = getSizeList(product);
    if (isSWR(product)) return `Sizes: ${sizes} • Ring/Self options`;
    if (isAgri(product)) return `Sizes: ${sizes} • Packing per box shown`;
    return `Sizes: ${sizes}`;
  };

  // Variant selection per compared product
  const [sel, setSel] = React.useState({}); // { [productId]: index }
  const getActiveVariant = (product) => {
    const idx = sel?.[product?.id] ?? 0;
    return (product?.variants || [])[idx] || null;
  };

  // Comparison spec rows (generic)
  const specifications = [
    'fromPrice',
    'sizes',
    'application',
    'material',
    'standard',
    'temperatureRange'
  ];

  const getSpecLabel = (spec) => {
    const labels = {
      fromPrice: 'From Price',
      sizes: 'Available Sizes',
      application: 'Application',
      material: 'Material',
      standard: 'Standard',
      temperatureRange: 'Temperature Range'
    };
    return labels?.[spec] || spec;
  };

  const getSpecValue = (product, spec) => {
    const defaults = {
      material: 'PVC',
      standard: isSWR(product) ? 'IS 13592' : 'In-house Spec',
      temperatureRange: isSWR(product) ? '0°C to +40°C' : '5°C to +50°C'
    };
    if (spec === 'fromPrice') {
      const v = getFromPrice(product);
      return v != null ? `${fmtRs(v)} + GST & transport` : 'Price on request';
    }
    if (spec === 'sizes') return getSizeList(product) || 'N/A';
    return product?.[spec] || defaults?.[spec] || 'N/A';
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-industrial-lg precision-transition ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-surface">
        <div className="flex items-center space-x-3">
          <Icon name="GitCompare" size={20} className="text-industrial-green" />
          <h3 className="font-semibold text-primary">Product Comparison ({products?.length})</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            iconName="Trash2"
            iconSize={14}
            className="text-destructive hover:text-destructive"
          >
            Clear All
          </Button>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-white rounded-lg precision-transition"
          >
            <Icon name={isOpen ? "ChevronDown" : "ChevronUp"} size={16} />
          </button>
        </div>
      </div>

      {/* Comparison Content */}
      <div className="max-h-96 overflow-auto">
        <div className="p-4">
          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {products?.map((product) => (
              <div key={product?.id} className="bg-surface rounded-lg p-4 relative">
                <button
                  onClick={() => onRemoveProduct(product?.id)}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-destructive hover:text-white precision-transition"
                >
                  <Icon name="X" size={14} />
                </button>

                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-primary text-sm leading-tight">{product?.name}</h4>
                    <p className="text-xs text-text-secondary">Part: RPV-{product?.id}</p>
                  </div>
                </div>

                {/* Variant quick info */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">From Price:</span>
                    <span className="font-medium text-primary">{getSpecValue(product, 'fromPrice')}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-text-secondary">Sizes:</span>
                    <span className="font-medium text-primary truncate max-w-[60%]">{getSpecValue(product, 'sizes')}</span>
                  </div>
                  <div className="text-[11px] text-text-secondary">{getVariantSummary(product)}</div>
                </div>

                {/* Size selector */}
                {(product?.variants?.length > 0) && (
                  <div className="mt-2">
                    <select
                      className="w-full text-xs border border-border rounded px-2 py-1 bg-white"
                      value={sel?.[product?.id] ?? 0}
                      onChange={(e) => setSel(prev => ({ ...prev, [product?.id]: Number(e.target.value) }))}
                    >
                      {product?.variants?.map((v, i) => (
                        <option key={i} value={i}>
                          {v?.size} {typeof v?.amount_rs === 'number' ? `• ${fmtRs(v.amount_rs)}` : '• POA'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Comparison Table */}
          {products?.length > 1 && (
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left p-3 font-medium text-primary">Specification</th>
                      {products?.map((product) => (
                        <th key={product?.id} className="text-left p-3 font-medium text-primary min-w-48">
                          {product?.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {specifications?.map((spec, index) => (
                      <tr key={spec} className={index % 2 === 0 ? 'bg-surface/50' : 'bg-white'}>
                        <td className="p-3 font-medium text-text-secondary">{getSpecLabel(spec)}</td>
                        {products?.map((product) => (
                          <td key={product?.id} className="p-3 text-primary">
                            {getSpecValue(product, spec)}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Variant-driven rows */}
                    {[
                      { key: 'size', label: 'Selected Size' },
                      { key: 'amount_rs', label: 'Selected Size Price' },
                      { key: 'weight_g', label: 'Selected Size Weight (g)' },
                      { key: 'rightFit', label: 'Right Fit (SWR)' },
                      { key: 'selfFit', label: 'Self Fit (SWR)' },
                      { key: 'packing', label: 'Packing (AGRI)' }
                    ].map((row, rIdx) => (
                      <tr key={row.key} className={((specifications.length + rIdx) % 2 === 0) ? 'bg-surface/50' : 'bg-white'}>
                        <td className="p-3 font-medium text-text-secondary">{row.label}</td>
                        {products?.map((product) => {
                          const v = getActiveVariant(product);
                          let val = v?.[row.key];
                          if (row.key === 'amount_rs') val = (typeof val === 'number') ? `${fmtRs(val)} + GST` : 'Price on request';
                          if ((row.key === 'rightFit' || row.key === 'selfFit' || row.key === 'packing') && (val == null || val === '-')) {
                            val = '—';
                          }
                          return (
                            <td key={product?.id} className="p-3 text-primary">
                              {val != null ? String(val) : '—'}
                            </td>
                          );
                        })}
                      </tr>
                    ))}

                    {/* Certifications */}
                    <tr className="bg-surface">
                      <td className="p-3 font-medium text-text-secondary">Certifications</td>
                      {products?.map((product) => (
                        <td key={product?.id} className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {product?.certifications?.map((cert, index) => (
                              <span key={index} className="text-xs bg-industrial-green/10 text-industrial-green px-2 py-1 rounded">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center mt-6">
            <Button
              variant="default"
              className="bg-conversion-accent hover:bg-conversion-accent/90"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
            >
              Request Quote for Selected Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;
