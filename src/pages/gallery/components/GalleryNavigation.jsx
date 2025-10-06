import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GalleryNavigation = ({ activeCategory, onCategoryChange, categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-industrial border-b border-border">
      <div className="px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => onCategoryChange(category?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition font-medium text-sm ${
                    activeCategory === category?.id
                      ? 'bg-industrial-green text-white shadow-certification'
                      : 'text-text-primary hover:bg-surface hover:text-industrial-green'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category?.id
                      ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
                  }`}>
                    {category?.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg precision-transition hover:bg-surface">
                <Icon name="Grid3X3" size={16} />
                <span className="text-sm font-medium">Grid View</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg precision-transition hover:bg-surface">
                <Icon name="Download" size={16} />
                <span className="text-sm font-medium">Download All</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 px-4 py-2 bg-surface rounded-lg precision-transition"
              >
                <Icon name="Filter" size={16} />
                <span className="font-medium">
                  {categories?.find(cat => cat?.id === activeCategory)?.name || 'All Categories'}
                </span>
                <Icon 
                  name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                />
              </button>

              <div className="flex items-center space-x-2">
                <button className="p-2 border border-border rounded-lg precision-transition hover:bg-surface">
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button className="p-2 border border-border rounded-lg precision-transition hover:bg-surface">
                  <Icon name="Download" size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`mt-4 space-y-2 precision-transition overflow-hidden ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => {
                    onCategoryChange(category?.id);
                    setIsExpanded(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg precision-transition font-medium ${
                    activeCategory === category?.id
                      ? 'bg-industrial-green text-white shadow-certification'
                      : 'bg-surface text-text-primary hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={category?.icon} size={16} />
                    <span>{category?.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category?.id
                      ? 'bg-white/20 text-white' :'bg-gray-200 text-text-secondary'
                  }`}>
                    {category?.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryNavigation;