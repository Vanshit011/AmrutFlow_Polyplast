import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  activeFiltersCount 
}) => {
  // Updated sections to reflect AGRI and SWR catalogues
  const filterSections = [
    {
      id: 'application',
      title: 'Application',
      icon: 'Wrench',
      options: [
        { value: 'irrigation', label: 'Irrigation Networks', count: 0 },
        { value: 'drainage', label: 'Drainage Systems', count: 0 },
        // Keep others for future categories if present in data
        { value: 'plumbing', label: 'Plumbing Systems', count: 0 },
        { value: 'electrical', label: 'Electrical Conduits', count: 0 },
        { value: 'industrial', label: 'Industrial Applications', count: 0 }
      ]
    },
    {
      id: 'category',
      title: 'Product Category',
      icon: 'Package',
      options: [
        { value: 'agri-fittings', label: 'Agri Fittings', count: 0 },
        { value: 'swr-fittings', label: 'SWR Fittings', count: 0 },
        { value: 'swr-accessories', label: 'SWR Accessories', count: 0 },
        // Generic categories retained if other SKUs exist
        { value: 'pipes', label: 'Pipes & Tubes', count: 0 },
        { value: 'fittings', label: 'Fittings & Joints', count: 0 },
        { value: 'valves', label: 'Valves & Controls', count: 0 },
        { value: 'accessories', label: 'Accessories', count: 0 }
      ]
    },
    {
      // Size filtering mapped to variant sizes, grouped as common ranges
      id: 'sizeRange',
      title: 'Size Range',
      icon: 'Ruler',
      options: [
        { value: '15-25mm', label: '15-25mm', count: 0 },
        { value: '32-50mm', label: '32-50mm', count: 0 },
        { value: '63-90mm', label: '63-90mm', count: 0 },
        { value: '110-160mm', label: '110-160mm', count: 0 },
        { value: '200mm+', label: '200mm & Above', count: 0 }
      ]
    },
    {
      id: 'certification',
      title: 'Certifications',
      icon: 'Shield',
      options: [
        { value: 'isi', label: 'ISI Certified', count: 0 },
        { value: 'iso', label: 'ISO 9001:2015', count: 0 },
        { value: 'bis', label: 'BIS Approved', count: 0 },
        { value: 'eco', label: 'Eco-Friendly', count: 0 }
      ]
    }
  ];

  // Map UI size ranges to a predicate so consumers can filter by variants
  // Consumers: ensure the catalogue list/filter logic checks product.variants.some(size in range)
   const sizeRangePredicate = (range, variantSizeText) => {
    // Extract primary numeric from sizes like "75MM", "110", or "110×75"
    const firstNum = (() => {
      if (!variantSizeText) return null;
      const txt = String(variantSizeText).toLowerCase().replace('mm','');
      const parts = txt.split(/[x×/ -]/).filter(Boolean);
      const n = parseFloat(parts[0]);
      return Number.isFinite(n) ? n : null;
    })();

    if (firstNum == null) return false;
    switch (range) {
      case '15-25mm': return firstNum >= 15 && firstNum <= 25;
      case '32-50mm': return firstNum >= 32 && firstNum <= 50;
      case '63-90mm': return firstNum >= 63 && firstNum <= 90;
      case '110-160mm': return firstNum >= 110 && firstNum <= 160;
      case '200mm+': return firstNum >= 200;
      default: return false;
    }
  };

  const handleCheckboxChange = (sectionId, optionValue, checked) => {
    const currentValues = filters?.[sectionId] || [];
    const newValues = checked 
      ? [...currentValues, optionValue]
      : currentValues?.filter(v => v !== optionValue);
    onFilterChange(sectionId, newValues);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          iconSize={16}
          className="w-full"
        >
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>

      {/* Filter Sidebar */}
      <div className={`bg-white rounded-lg shadow-industrial border border-border overflow-hidden precision-transition lg:block ${isOpen ? 'block' : 'hidden'}`}>
        {/* Header */}
        <div className="p-4 border-b border-border bg-surface">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={18} className="text-industrial-green" />
              <h3 className="font-semibold text-primary">Filters</h3>
              {activeFiltersCount > 0 && (
                <span className="bg-industrial-green text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-1 hover:bg-white rounded precision-transition"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="mt-2 text-destructive hover:text-destructive"
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Filter Sections */}
        <div className="max-h-96 lg:max-h-none overflow-y-auto">
          {filterSections?.map((section) => (
            <div key={section?.id} className="border-b border-border last:border-b-0">
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name={section?.icon} size={16} className="text-industrial-green" />
                  <h4 className="font-medium text-primary">{section?.title}</h4>
                </div>
                <div className="space-y-2">
                  {section?.options?.map((option) => (
                    <div key={option?.value} className="flex items-center justify-between">
                      <Checkbox
                        label={option?.label}
                        checked={(filters?.[section?.id] || [])?.includes(option?.value)}
                        onChange={(e) => handleCheckboxChange(section?.id, option?.value, e?.target?.checked)}
                        size="sm"
                      />
                      <span className="text-xs text-text-secondary bg-surface px-2 py-1 rounded">
                        {option?.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
