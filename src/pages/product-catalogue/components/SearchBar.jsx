import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

// Utilities to support size-aware sort on the consumer side
export const parsePrimarySize = (sizeText) => {
  if (!sizeText) return null;
  const txt = String(sizeText).toLowerCase().replace('mm','');
  const parts = txt.split(/[x×/ -]/).filter(Boolean);
  const n = parseFloat(parts[0]);
  return Number.isFinite(n) ? n : null;
};

const SearchBar = ({ onSearch, onSortChange, sortBy, searchQuery }) => {
  const [localSearch, setLocalSearch] = useState(searchQuery || '');

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    // size-asc/desc will be implemented by the parent using product.variants and parsePrimarySize
    { value: 'size-asc', label: 'Size (Small to Large)' },
    { value: 'size-desc', label: 'Size (Large to Small)' }
  ];

  const handleSearch = (e) => {
    e?.preventDefault();
    onSearch(localSearch);
  };

  const handleQuickSearch = (term) => {
    setLocalSearch(term);
    onSearch(term);
  };

  // Quick tags aligned to AGRI/SWR catalogues from the sheets
  const quickSearchTerms = [
    'Agri Elbow',
    'Agri Tee',
    'Agri Coupler',
    'Agri Endcap',
    'Agri Reducer',
    'Agri Shoe Bend',
    'SWR Bend 87.5',
    'SWR Single Tee',
    'SWR Coupler',
    'SWR Shoe Bend 45°',
    'SWR Reducing Tee',
    'SWR Nahani Trap'
  ];

  return (
    <div className="bg-white rounded-lg shadow-industrial border border-border p-4 mb-6">
      {/* Main Search */}
      <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4 mb-4">
        <div className="flex-1">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search by name, size (e.g., 75MM or 110×75), or application..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e?.target?.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              size={18} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <div className="min-w-48">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder="Sort by..."
            />
          </div>
          <Button
            type="submit"
            variant="default"
            iconName="Search"
            iconPosition="left"
            iconSize={16}
            className="bg-industrial-green hover:bg-industrial-green/90"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Quick Search Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-text-secondary font-medium">Quick Search:</span>
        {quickSearchTerms?.map((term) => (
          <button
            key={term}
            onClick={() => handleQuickSearch(term)}
            className="text-xs bg-surface hover:bg-industrial-green hover:text-white px-3 py-1 rounded-full precision-transition border border-border"
          >
            {term}
          </button>
        ))}
      </div>

      {/* Advanced Search Toggle */}
      <div className="mt-4 pt-4 border-t border-border">
        <button className="flex items-center space-x-2 text-sm text-industrial-green hover:text-industrial-green/80 precision-transition">
          <Icon name="Settings" size={14} />
          <span>Advanced Search Options</span>
          <Icon name="ChevronDown" size={14} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
