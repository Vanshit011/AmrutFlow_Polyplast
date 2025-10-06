import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GalleryGrid = ({ items, category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const openLightbox = (item, index) => {
    setSelectedImage({ ...item, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage?.index;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % items?.length
      : (currentIndex - 1 + items?.length) % items?.length;
    
    setSelectedImage({ ...items?.[newIndex], index: newIndex });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items?.map((item, index) => (
          <div
            key={item?.id}
            className="group relative bg-white rounded-xl overflow-hidden industrial-shadow precision-transition hover:shadow-industrial-lg cursor-pointer"
            onClick={() => openLightbox(item, index)}
          >
            {/* Image Container */}
            <div className="aspect-4/3 overflow-hidden relative">
              {!loadedImages?.has(index) && (
                <div className="absolute inset-0 bg-surface animate-pulse flex items-center justify-center">
                  <Icon name="Image" size={24} className="text-text-secondary" />
                </div>
              )}
              
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-full object-cover precision-transition group-hover:scale-105"
                onLoad={() => handleImageLoad(index)}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 precision-transition">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="Eye" size={16} className="text-white" />
                      <span className="text-white text-sm font-medium">View Details</span>
                    </div>
                    {item?.type === 'video' && (
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon name="Play" size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-industrial-green text-white text-xs font-medium rounded-full">
                  {item?.category}
                </span>
              </div>

              {/* Type Icon */}
              {item?.type === 'video' && (
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="Video" size={14} className="text-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-primary mb-2 line-clamp-2">
                {item?.title}
              </h3>
              <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                {item?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={14} className="text-text-secondary" />
                  <span className="text-xs text-text-secondary">{item?.date}</span>
                </div>
                
                {item?.location && (
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} className="text-text-secondary" />
                    <span className="text-xs text-text-secondary">{item?.location}</span>
                  </div>
                )}
              </div>

              {/* Technical Details */}
              {item?.specifications && (
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {item?.specifications?.slice(0, 2)?.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-surface text-xs text-text-secondary rounded"
                      >
                        {spec}
                      </span>
                    ))}
                    {item?.specifications?.length > 2 && (
                      <span className="px-2 py-1 bg-surface text-xs text-text-secondary rounded">
                        +{item?.specifications?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
            >
              <Icon name="X" size={20} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Image */}
            <div className="relative bg-white rounded-lg overflow-hidden">
              <div className="aspect-video max-h-[80vh]">
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {selectedImage?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {selectedImage?.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 border border-border rounded-lg precision-transition hover:bg-surface">
                      <Icon name="Download" size={16} />
                    </button>
                    <button className="p-2 border border-border rounded-lg precision-transition hover:bg-surface">
                      <Icon name="Share2" size={16} />
                    </button>
                  </div>
                </div>

                {/* Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-text-secondary">Date:</span>
                    <div className="font-medium">{selectedImage?.date}</div>
                  </div>
                  {selectedImage?.location && (
                    <div>
                      <span className="text-text-secondary">Location:</span>
                      <div className="font-medium">{selectedImage?.location}</div>
                    </div>
                  )}
                  <div>
                    <span className="text-text-secondary">Category:</span>
                    <div className="font-medium">{selectedImage?.category}</div>
                  </div>
                  <div>
                    <span className="text-text-secondary">Type:</span>
                    <div className="font-medium capitalize">{selectedImage?.type}</div>
                  </div>
                </div>

                {/* Specifications */}
                {selectedImage?.specifications && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-medium text-primary mb-2">Technical Specifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedImage?.specifications?.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-surface text-text-secondary rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;