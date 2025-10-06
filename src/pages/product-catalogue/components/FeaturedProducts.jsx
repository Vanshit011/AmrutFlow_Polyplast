import React from 'react';
import Icon from '../../../components/AppIcon';
import ProductCard from './ProductCard';

const fmtRs = (n) => (typeof n === 'number' ? `₹${n.toFixed(2)}` : 'Price on request');
const getFromPrice = (product) => {
  const nums = (product?.variants || [])
    .map(v => v?.amount_rs)
    .filter(v => typeof v === 'number');
  return nums.length ? Math.min(...nums) : null;
};
const getSizeList = (product) =>
  (product?.variants || []).map(v => v?.size).filter(Boolean).join(', ');

const FeaturedProducts = ({ 
  products, 
  onViewDetails, 
  onDownloadPDF, 
  onCompare, 
  comparisonProducts 
}) => {
  const featuredCategories = [
    {
      id: 'new-launches',
      title: 'New Launches',
      icon: 'Sparkles',
      description: 'Latest additions to our product range',
      products: products?.filter(p => p?.isNew)?.slice(0, 3)
    },
    {
      id: 'best-sellers',
      title: 'Best Sellers',
      icon: 'TrendingUp',
      description: 'Most popular products among our customers',
      products: products?.filter(p => p?.isBestSeller)?.slice(0, 3)
    },
    {
      id: 'seasonal',
      title: 'Seasonal Recommendations',
      icon: 'Calendar',
      description: 'Perfect for current season applications',
      products: products?.filter(p => p?.application === 'irrigation')?.slice(0, 3)
    }
  ];

  return (
    <div className="space-y-8">
      {featuredCategories?.map((category) => (
        <div key={category?.id} className="bg-white rounded-lg shadow-industrial border border-border overflow-hidden">
          {/* Category Header */}
          <div className="bg-surface p-6 border-b border-border">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-industrial-green rounded-lg flex items-center justify-center">
                <Icon name={category?.icon} size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-primary">{category?.title}</h2>
                <p className="text-text-secondary">{category?.description}</p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-6">
            {category?.products?.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category?.products?.map((product) => {
                  const from = getFromPrice(product);
                  const sizes = getSizeList(product);
                  return (
                    <div key={product?.id} className="space-y-2">
                      <ProductCard
                        product={product}
                        onViewDetails={onViewDetails}
                        onDownloadPDF={onDownloadPDF}
                        onCompare={onCompare}
                        isComparing={comparisonProducts?.some(p => p?.id === product?.id)}
                      />
                      {/* Variant-aware metadata strip under card */}
                      <div className="text-xs text-text-secondary flex items-center justify-between">
                        <span>Sizes: {sizes || '—'}</span>
                        <span className="font-medium text-primary">
                          {from != null ? `From ${fmtRs(from)} + GST` : 'Price on request'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="Package" size={48} className="text-text-secondary mx-auto mb-3" />
                <p className="text-text-secondary">No products available in this category</p>
              </div>
            )}
          </div>

          {/* View All Link */}
          {category?.products?.length > 0 && (
            <div className="px-6 pb-6">
              <button className="flex items-center space-x-2 text-industrial-green hover:text-industrial-green/80 precision-transition font-medium">
                <span>View All {category?.title}</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Case Studies Section */}
      <div className="bg-gradient-to-r from-industrial-green to-secondary rounded-lg text-white overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="FileText" size={24} />
            <h2 className="text-xl font-semibold">Success Stories</h2>
          </div>
          <p className="mb-6 opacity-90">
            Discover how our products have been successfully implemented in real-world projects across various industries.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Metro Water Supply Project',
                location: 'Mumbai, Maharashtra',
                products: 'PVC Pipes & Fittings',
                savings: '30% Cost Reduction'
              },
              {
                title: 'Industrial Complex Drainage',
                location: 'Pune, Maharashtra',
                products: 'Drainage Systems',
                savings: '25% Time Savings'
              },
              {
                title: 'Residential Township',
                location: 'Bangalore, Karnataka',
                products: 'Complete PVC Solutions',
                savings: '40% Maintenance Free'
              }
            ]?.map((study, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">{study?.title}</h3>
                <div className="space-y-1 text-sm opacity-90">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>{study?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Package" size={14} />
                    <span>{study?.products}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} />
                    <span className="font-medium">{study?.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
