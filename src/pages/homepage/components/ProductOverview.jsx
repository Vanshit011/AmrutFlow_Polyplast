import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Img1 from "../assets/MIHIR/Amrutflow 21-4-25 1.JPG";
import Img2 from "../assets/MIHIR/Amrutflow 21-4-25 2.JPG";
import Img3 from "../assets/MIHIR/IMG_0284.JPG";
import Img4 from "../assets/MIHIR/Gemini_Generated_Image_a8z5l4a8z5l4a8z5.png";


const ProductOverview = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const productCategories = [
    {
      id: 1,
      name: "PVC Pipes",
      description: "High-quality pipes for water supply, drainage, and irrigation systems",
      image: Img1, // ✅ replaced
      icon: "Pipe",
      specifications: [
        "Diameter: 20mm to 315mm",
        "Pressure Rating: 2.5 to 16 kg/cm²",
        "Length: 3m & 6m standard"
      ],
      applications: ["Water Supply", "Sewerage", "Irrigation", "Industrial"],
      features: ["Corrosion Resistant", "Lightweight", "Easy Installation", "Long Lasting"]
    },
    {
      id: 2,
      name: "PVC Fittings",
      description: "Comprehensive range of fittings for seamless pipe connections",
      image: Img2, // ✅ replaced
      icon: "Settings",
      specifications: [
        "Size Range: 20mm to 200mm",
        "Socket & Threaded Types",
        "Pressure Tested"
      ],
      applications: ["Plumbing", "Industrial", "Agriculture", "Construction"],
      features: ["Leak Proof", "Chemical Resistant", "Precision Molded", "ISI Marked"]
    },
    {
      id: 3,
      name: "Electrical Conduits",
      description: "Protective conduits for electrical wiring and cable management",
      image: Img3, // ✅ replaced
      icon: "Zap",
      specifications: [
        "Diameter: 16mm to 50mm",
        "Heavy & Medium Duty",
        "Flame Retardant"
      ],
      applications: ["Residential Wiring", "Commercial Buildings", "Industrial Plants", "Infrastructure"],
      features: ["Fire Resistant", "Impact Resistant", "UV Stabilized", "Flexible Options"]
    },
    {
      id: 4,
      name: "Drainage Systems",
      description: "Complete drainage solutions for residential and commercial use",
      image: Img4, // ✅ replaced
      icon: "Droplets",
      specifications: [
        "Size: 75mm to 200mm",
        "SWR & Soil Waste Systems",
        "Ring Fit Technology"
      ],
      applications: ["Building Drainage", "Soil Waste", "Rainwater", "Storm Water"],
      features: ["Smooth Flow", "Odor Sealed", "Easy Maintenance", "Durable"]
    }
  ];


  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Comprehensive Product Range
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From pipes to fittings, electrical conduits to drainage systems -
            discover our complete range of premium PVC solutions engineered for excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {productCategories?.map((category, index) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg precision-transition font-medium ${activeCategory === index
                  ? 'bg-industrial-green text-white shadow-certification'
                  : 'bg-white text-text-primary hover:bg-industrial-green hover:text-white'
                }`}
            >
              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-2xl shadow-industrial-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={productCategories?.[activeCategory]?.image}
                alt={productCategories?.[activeCategory]?.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-industrial-green/20 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-industrial-green rounded-lg flex items-center justify-center">
                  <Icon
                    name={productCategories?.[activeCategory]?.icon}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary">
                  {productCategories?.[activeCategory]?.name}
                </h3>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {productCategories?.[activeCategory]?.description}
              </p>

              {/* Specifications */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Technical Specifications</h4>
                <ul className="space-y-2">
                  {productCategories?.[activeCategory]?.specifications?.map((spec, index) => (
                    <li key={index} className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="Check" size={16} className="text-conversion-accent" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {productCategories?.[activeCategory]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Star" size={14} className="text-conversion-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary mb-3">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {productCategories?.[activeCategory]?.applications?.map((app, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface text-text-secondary rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  variant="default"
                  className="bg-industrial-green hover:bg-industrial-green/90 text-white"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Specs
                </Button> */}
                <Button
                  variant="outline"
                  className="border-industrial-green text-industrial-green hover:bg-industrial-green hover:text-white"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            className="conversion-cta bg-conversion-accent hover:bg-conversion-accent/90 text-white font-semibold px-8"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={18}
          >
            View Complete Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;