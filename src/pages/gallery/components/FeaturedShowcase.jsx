import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredItems = [
    {
      id: 1,
      title: "State-of-the-Art Manufacturing Facility",
      description: "Our 50,000 sq ft manufacturing facility equipped with German precision machinery and automated quality control systems.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      type: "facility",
      stats: [
        { label: "Production Capacity", value: "10,000 units/day" },
        { label: "Quality Rating", value: "99.8%" },
        { label: "Automation Level", value: "85%" }
      ]
    },
    {
      id: 2,
      title: "Precision Engineering in Action",
      description: "Advanced CNC machinery and robotic systems ensure consistent quality and dimensional accuracy in every product.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      type: "manufacturing",
      stats: [
        { label: "Tolerance Level", value: "±0.1mm" },
        { label: "Efficiency Rate", value: "96%" },
        { label: "Zero Defect Days", value: "180+" }
      ]
    },
    {
      id: 3,
      title: "Sustainable Production Practices",
      description: "Eco-friendly manufacturing processes with 100% recyclable materials and zero-waste production systems.",
      image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
      type: "sustainability",
      stats: [
        { label: "Waste Reduction", value: "95%" },
        { label: "Energy Efficiency", value: "40% savings" },
        { label: "Carbon Footprint", value: "-60%" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredItems?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems?.length) % featuredItems?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <span className="text-industrial-green font-semibold text-lg">Featured Showcase</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Discover the precision, innovation, and sustainability that drives our manufacturing processes
            </p>
          </div>

          {/* Featured Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl industrial-shadow-lg">
              <div 
                className="flex precision-transition duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems?.map((item, index) => (
                  <div key={item?.id} className="w-full flex-shrink-0">
                    <div className="relative aspect-video lg:aspect-[21/9]">
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent">
                        <div className="absolute inset-0 flex items-center">
                          <div className="px-8 lg:px-16 py-8 max-w-2xl">
                            <div className="space-y-6">
                              <div>
                                <div className="flex items-center space-x-2 mb-3">
                                  <span className="px-3 py-1 bg-conversion-accent text-white text-sm font-medium rounded-full">
                                    {item?.type?.charAt(0)?.toUpperCase() + item?.type?.slice(1)}
                                  </span>
                                </div>
                                
                                <h3 className="text-2xl lg:text-4xl font-headline font-bold text-white mb-4">
                                  {item?.title}
                                </h3>
                                
                                <p className="text-lg text-gray-200 leading-relaxed">
                                  {item?.description}
                                </p>
                              </div>

                              {/* Stats */}
                              <div className="grid grid-cols-3 gap-6">
                                {item?.stats?.map((stat, idx) => (
                                  <div key={idx} className="text-center">
                                    <div className="text-2xl font-bold text-conversion-accent">
                                      {stat?.value}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                      {stat?.label}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white precision-transition hover:bg-black/70"
              >
                <Icon name="ChevronRight" size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {featuredItems?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full precision-transition ${
                      currentSlide === index
                        ? 'bg-conversion-accent' :'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Indicator */}
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 px-3 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white precision-transition hover:bg-black/70"
                >
                  <Icon 
                    name={isAutoPlaying ? "Pause" : "Play"} 
                    size={14} 
                  />
                  <span className="text-sm">
                    {isAutoPlaying ? "Pause" : "Play"}
                  </span>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 bg-gray-200 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-conversion-accent precision-transition duration-500"
                style={{ 
                  width: `${((currentSlide + 1) / featuredItems?.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;