import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import GalleryHero from './components/GalleryHero';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryGrid from './components/GalleryGrid';
import FeaturedShowcase from './components/FeaturedShowcase';
import VideoTestimonials from './components/VideoTestimonials';
import VirtualTour from './components/VirtualTour';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  // Gallery categories
  const categories = [
    { id: 'all', name: 'All Gallery', icon: 'Grid3X3', count: 48 },
    { id: 'manufacturing', name: 'Manufacturing', icon: 'Factory', count: 12 },
    { id: 'projects', name: 'Projects', icon: 'Building2', count: 15 },
    { id: 'products', name: 'Products', icon: 'Package', count: 18 },
    { id: 'team', name: 'Team & Culture', icon: 'Users', count: 8 },
    { id: 'sustainability', name: 'Sustainability', icon: 'Leaf', count: 6 }
  ];

  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Advanced Injection Molding Unit",
      description: "State-of-the-art German machinery ensuring precision manufacturing with automated quality control systems.",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      category: "Manufacturing",
      type: "image",
      date: "2024-08-15",
      location: "Mumbai Facility",
      specifications: ["Capacity: 500 units/hour", "Precision: ±0.1mm", "Automation: 95%"]
    },
    {
      id: 2,
      title: "Quality Control Laboratory",
      description: "Advanced testing facilities with dimensional analysis, material testing, and chemical resistance verification.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      category: "Manufacturing",
      type: "image",
      date: "2024-08-10",
      location: "Mumbai Facility",
      specifications: ["ISO 9001:2015", "Tests: 500+/day", "Accuracy: ±0.01mm"]
    },
    {
      id: 3,
      title: "Metro Infrastructure Project",
      description: "Major PVC pipe installation for Delhi Metro Phase 4 expansion with specialized fittings and joints.",
      image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
      category: "Projects",
      type: "image",
      date: "2024-07-20",
      location: "Delhi",
      specifications: ["Length: 15km", "Diameter: 200-800mm", "Pressure: 16 bar"]
    },
    {
      id: 4,
      title: "Residential Complex Installation",
      description: "Complete plumbing solution for 500-unit residential complex with eco-friendly PVC systems.",
      image: "https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg",
      category: "Projects",
      type: "image",
      date: "2024-07-15",
      location: "Pune",
      specifications: ["Units: 500", "Pipes: 50km", "Fittings: 10,000+"]
    },
    {
      id: 5,
      title: "PVC Pipe Product Range",
      description: "Comprehensive range of PVC pipes from 20mm to 800mm diameter with various pressure ratings.",
      image: "https://images.pexels.com/photos/1108103/pexels-photo-1108103.jpeg",
      category: "Products",
      type: "image",
      date: "2024-08-01",
      specifications: ["Sizes: 20-800mm", "Pressure: 2.5-25 bar", "Standards: ISI, ISO"]
    },
    {
      id: 6,
      title: "Specialized Fittings Collection",
      description: "Precision-engineered fittings including elbows, tees, reducers, and custom solutions for industrial applications.",
      image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg",
      category: "Products",
      type: "image",
      date: "2024-07-28",
      specifications: ["Types: 200+", "Materials: uPVC, cPVC", "Certifications: ISI"]
    },
    {
      id: 7,
      title: "Manufacturing Process Documentation",
      description: "Time-lapse video showing complete manufacturing process from raw material to finished product.",
      image: "https://images.pexels.com/photos/1108105/pexels-photo-1108105.jpeg",
      category: "Manufacturing",
      type: "video",
      date: "2024-08-05",
      location: "Mumbai Facility",
      specifications: ["Duration: 5:30", "Process: Complete", "Quality: 4K"]
    },
    {
      id: 8,
      title: "Team Innovation Workshop",
      description: "Our engineering team collaborating on next-generation sustainable PVC solutions and product development.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      category: "Team & Culture",
      type: "image",
      date: "2024-08-12",
      location: "R&D Center",
      specifications: ["Team: 25 engineers", "Focus: Sustainability", "Duration: 2 days"]
    },
    {
      id: 9,
      title: "Eco-Friendly Production Line",
      description: "Zero-waste manufacturing process with 100% recyclable materials and energy-efficient operations.",
      image: "https://images.pexels.com/photos/1108106/pexels-photo-1108106.jpeg",
      category: "Sustainability",
      type: "image",
      date: "2024-08-08",
      location: "Green Facility",
      specifications: ["Waste: 0%", "Energy: -40%", "Recycling: 100%"]
    },
    {
      id: 10,
      title: "Industrial Plant Installation",
      description: "Large-scale chemical plant piping system with corrosion-resistant PVC solutions and safety compliance.",
      image: "https://images.pexels.com/photos/1108107/pexels-photo-1108107.jpeg",
      category: "Projects",
      type: "image",
      date: "2024-07-10",
      location: "Gujarat",
      specifications: ["Capacity: 1000m³/hr", "Pressure: 25 bar", "Temperature: 60°C"]
    },
    {
      id: 11,
      title: "Quality Assurance Team",
      description: "Dedicated quality control specialists ensuring every product meets international standards and certifications.",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg",
      category: "Team & Culture",
      type: "image",
      date: "2024-08-18",
      location: "Quality Lab",
      specifications: ["Team: 15 specialists", "Experience: 10+ years", "Certifications: Multiple"]
    },
    {
      id: 12,
      title: "Automated Packaging System",
      description: "Robotic packaging and labeling system ensuring consistent product presentation and protection.",
      image: "https://images.pexels.com/photos/1108108/pexels-photo-1108108.jpeg",
      category: "Manufacturing",
      type: "image",
      date: "2024-08-03",
      location: "Packaging Unit",
      specifications: ["Speed: 1000 units/hr", "Accuracy: 99.9%", "Automation: 90%"]
    }
  ];

  // Filter items based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      const categoryName = categories?.find(cat => cat?.id === activeCategory)?.name;
      setFilteredItems(galleryItems?.filter(item => 
        item?.category?.toLowerCase() === categoryName?.toLowerCase()
      ));
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Manufacturing Excellence | Rocket PVC</title>
        <meta name="description" content="Explore Rocket PVC's manufacturing capabilities, project installations, and innovation through our comprehensive visual gallery. See our state-of-the-art facilities and successful projects." />
        <meta name="keywords" content="PVC manufacturing gallery, industrial facility tour, project installations, quality control, manufacturing process, Rocket PVC" />
        <meta property="og:title" content="Gallery - Manufacturing Excellence | Rocket PVC" />
        <meta property="og:description" content="Visual showcase of Rocket PVC's manufacturing excellence, project installations, and innovation capabilities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <GalleryHero />

        {/* Featured Showcase */}
        <FeaturedShowcase />

        {/* Gallery Navigation */}
        <GalleryNavigation
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <GalleryGrid 
                items={filteredItems} 
                category={activeCategory}
              />

              {/* Load More Section */}
              {filteredItems?.length > 0 && (
                <div className="mt-12 text-center">
                  <button className="flex items-center justify-center space-x-2 mx-auto px-8 py-3 border border-border rounded-lg precision-transition hover:bg-surface font-medium">
                    <span>Load More Images</span>
                    <div className="w-5 h-5 border-2 border-text-secondary border-t-transparent rounded-full animate-spin"></div>
                  </button>
                  <p className="text-sm text-text-secondary mt-3">
                    Showing {filteredItems?.length} of {categories?.find(cat => cat?.id === activeCategory)?.count || 48} items
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <VirtualTour />

        {/* Video Testimonials */}
        <VideoTestimonials />

        {/* Download Section */}
        <section className="py-16 bg-surface">
          <div className="px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 industrial-shadow">
                <div className="w-16 h-16 bg-industrial-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-headline font-bold text-primary mb-4">
                  Download Our Complete Gallery
                </h2>
                <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                  Get high-resolution images of our manufacturing facilities, products, and project installations for your presentations and documentation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-conversion-accent text-white rounded-lg precision-transition hover:bg-conversion-accent/90 font-medium">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    <span>Download Gallery (25MB)</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-border rounded-lg precision-transition hover:bg-surface font-medium">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                      <polyline points="16,6 12,2 8,6"/>
                      <line x1="12" y1="2" x2="12" y2="15"/>
                    </svg>
                    <span>Request Custom Images</span>
                  </button>
                </div>
                
                <div className="mt-6 text-sm text-text-secondary">
                  <p>Available formats: JPG, PNG, PDF • High resolution • Commercial use permitted</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-conversion-accent to-secondary rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold">Rocket PVC</h3>
                  <p className="text-sm text-gray-400">Industrial Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Discover the precision, innovation, and quality that makes Rocket PVC the trusted choice for industrial applications across India.
              </p>
              
              <div className="flex justify-center space-x-6 text-sm text-gray-400">
                <span>© {new Date()?.getFullYear()} Rocket PVC. All rights reserved.</span>
                <span>•</span>
                <span>ISO 9001:2015 Certified</span>
                <span>•</span>
                <span>Made in India</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Gallery;