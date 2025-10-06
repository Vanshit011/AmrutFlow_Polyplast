import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const fmtRs = (n) => (typeof n === 'number' ? `₹${n.toFixed(2)}` : 'Price on request');
const getFromPrice = (product) => {
  const nums = (product?.variants || [])
    .map(v => v?.amount_rs)
    .filter(v => typeof v === 'number');
  return nums.length ? Math.min(...nums) : null;
};
const getSizeList = (product) =>
  (product?.variants || []).map(v => v?.size).filter(Boolean).join(', ');

const ProductCard = ({ product, onViewDetails, onDownloadPDF, onCompare, isComparing }) => {
  const from = getFromPrice(product);
  const sizes = getSizeList(product);

  return (
    <div className="bg-white rounded-lg shadow-industrial hover:shadow-industrial-lg precision-transition border border-border overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-surface">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover precision-transition hover:scale-105"
        />
        {product?.isNew && (
          <div className="absolute top-3 left-3 bg-conversion-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
            New
          </div>
        )}
        {product?.isBestSeller && (
          <div className="absolute top-3 right-3 bg-industrial-green text-white px-2 py-1 rounded-full text-xs font-semibold">
            Best Seller
          </div>
        )}
        <div className="absolute bottom-3 right-3">
          <button
            onClick={() => onCompare(product)}
            className={`p-2 rounded-full precision-transition ${
              isComparing 
                ? 'bg-industrial-green text-white' : 'bg-white/90 text-primary hover:bg-white'
            }`}
            title="Compare Product"
          >
            <Icon name="GitCompare" size={16} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-primary text-lg leading-tight">{product?.name}</h3>
          <div className="flex items-center space-x-1 ml-2">
            {product?.certifications?.map((cert, index) => (
              <div key={index} className="w-6 h-6 bg-industrial-green/10 rounded-full flex items-center justify-center" title={cert}>
                <Icon name="Shield" size={12} className="text-industrial-green" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">{product?.description}</p>

        {/* Variant-aware quick specs */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">Available Sizes:</span>
            <span className="font-medium text-primary truncate max-w-[60%]">{sizes || '—'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">From Price:</span>
            <span className="font-medium text-primary">
              {from != null ? `${fmtRs(from)} + GST` : 'Price on request'}
            </span>
          </div>
          {/* Optional legacy fields retained if present in product for other categories */}
          {product?.sizeRange && (
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Size Range:</span>
              <span className="font-medium text-primary">{product?.sizeRange}</span>
            </div>
          )}
          {product?.application && (
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Application:</span>
              <span className="font-medium text-primary">{product?.application}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
            iconSize={14}
            onClick={() => onViewDetails(product)}
          >
            Details
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            iconSize={14}
            onClick={() => onDownloadPDF(product)}
            title="Download PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
