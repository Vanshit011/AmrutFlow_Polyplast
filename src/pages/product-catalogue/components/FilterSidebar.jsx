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
      id: 'category',
      title: 'Product Category',
      icon: 'Package',
      options: [
        { value: 'agri-fittings', label: 'Agri Fittings', count: 0 },
        { value: 'swr-fittings', label: 'SWR Fittings', count: 0 },
        { value: 'swr-accessories', label: 'SWR Accessories', count: 0 },
      ]
    },
    {
      id: 'application',
      title: 'Application',
      icon: 'Wrench',
      options: [
        { value: 'irrigation', label: 'Irrigation Networks', count: 0 },
        { value: 'drainage', label: 'Drainage Systems', count: 0 },
      ]
    },
  
    // {
    //   // ✅ Actual size ranges based on your dataset
    //   id: 'sizeRange',
    //   title: 'Size Range',
    //   icon: 'Ruler',
    //   options: [
    //     { value: '63mm-110mm', label: '63mm - 110mm', count: 0 },
    //     { value: '75mm-110mm', label: '75mm - 110mm', count: 0 },
    //     { value: '110x75', label: '110×75', count: 0 },
    //     { value: '110x110', label: '110×110', count: 0 },
    //     { value: '110x75-110x110', label: '110×75 - 110×110', count: 0 },
    //   ]
    // },
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
