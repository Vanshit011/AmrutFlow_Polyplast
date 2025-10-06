import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerFeedback = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const customerTestimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      company: "Mehta Construction Ltd.",
      location: "Mumbai, Maharashtra",
      rating: 5,
      category: "reliability",
      testimonial: `We have been using Rocket PVC pipes for our residential projects for over 3 years. The consistency in quality and reliability is exceptional. Zero leakage issues and excellent durability even in challenging soil conditions.`,
      project: "Residential Complex - 200 Units",
      productUsed: "110mm & 160mm PVC Pipes",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2024-11-15",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Delhi Infrastructure Pvt. Ltd.",
      location: "New Delhi",
      rating: 5,
      category: "durability",
      testimonial: `Outstanding product quality! We used Rocket PVC fittings in our commercial project and the precision in manufacturing is remarkable. Perfect fit every time, which significantly reduces installation time and costs.`,
      project: "Commercial Mall - Water Supply System",
      productUsed: "CPVC Fittings & Pipes",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2024-11-08",
      verified: true
    },
    {
      id: 3,
      name: "Suresh Kumar",
      company: "Kumar Plumbing Services",
      location: "Bangalore, Karnataka",
      rating: 4,
      category: "performance",
      testimonial: `As a plumbing contractor, I rely on quality products. Rocket PVC has never disappointed. The pressure handling capacity is excellent and the smooth inner surface ensures optimal flow rates. Highly recommended for professional use.`,
      project: "Multiple Residential Projects",
      productUsed: "PVC Pipes & Fittings",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      date: "2024-10-28",
      verified: true
    },
    {
      id: 4,
      name: "Anita Patel",
      company: "Gujarat Housing Board",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      category: "reliability",
      testimonial: `We have installed Rocket PVC pipes in over 500 housing units. The quality consistency across batches is impressive. No complaints from residents regarding water supply issues. Excellent after-sales support as well.`,
      project: "Mass Housing Project - 500 Units",
      productUsed: "PVC Pipes 90mm to 200mm",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      date: "2024-10-20",
      verified: true
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Singh Engineering Works",
      location: "Jaipur, Rajasthan",
      rating: 5,
      category: "durability",
      testimonial: `Working in Rajasthan's harsh climate conditions, we need products that can withstand extreme temperatures. Rocket PVC pipes have performed exceptionally well. No cracking or deformation even in 45°C+ temperatures.`,
      project: "Industrial Water Treatment Plant",
      productUsed: "Heavy Duty PVC Pipes",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      date: "2024-10-12",
      verified: true
    },
    {
      id: 6,
      name: "Meera Reddy",
      company: "Hyderabad Metro Water",
      location: "Hyderabad, Telangana",
      rating: 4,
      category: "performance",
      testimonial: `For municipal water supply projects, quality cannot be compromised. Rocket PVC pipes meet all our stringent requirements. The dimensional accuracy and pressure ratings are consistently within specifications.`,
      project: "Municipal Water Supply Network",
      productUsed: "Large Diameter PVC Pipes",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      date: "2024-09-30",
      verified: true
    }
  ];

  const satisfactionMetrics = [
    {
      metric: "Overall Satisfaction",
      score: 4.8,
      maxScore: 5,
      responses: 1247,
      trend: "+0.2",
      icon: "Star"
    },
    {
      metric: "Product Quality",
      score: 4.9,
      maxScore: 5,
      responses: 1247,
      trend: "+0.1",
      icon: "Shield"
    },
    {
      metric: "Reliability",
      score: 4.7,
      maxScore: 5,
      responses: 1247,
      trend: "+0.3",
      icon: "CheckCircle"
    },
    {
      metric: "Value for Money",
      score: 4.6,
      maxScore: 5,
      responses: 1247,
      trend: "+0.2",
      icon: "DollarSign"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Feedback', count: 6 },
    { id: 'reliability', label: 'Reliability', count: 2 },
    { id: 'durability', label: 'Durability', count: 2 },
    { id: 'performance', label: 'Performance', count: 2 }
  ];

  const filteredTestimonials = activeCategory === 'all' 
    ? customerTestimonials 
    : customerTestimonials?.filter(testimonial => testimonial?.category === activeCategory);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-border"}
      />
    ));
  };

  const getScoreColor = (score) => {
    if (score >= 4.5) return 'text-success';
    if (score >= 4.0) return 'text-warning';
    return 'text-error';
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Customer Quality Feedback
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real testimonials from our customers highlighting product reliability, 
            durability, and performance in diverse applications and environments.
          </p>
        </div>

        {/* Satisfaction Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {satisfactionMetrics?.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-industrial hover:shadow-industrial-lg precision-transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-industrial-green rounded-lg flex items-center justify-center">
                  <Icon name={metric?.icon} size={20} className="text-white" />
                </div>
                <div className="flex items-center space-x-1 text-success">
                  <Icon name="TrendingUp" size={14} />
                  <span className="text-xs font-medium">{metric?.trend}</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className={`text-2xl font-headline font-bold mb-1 ${getScoreColor(metric?.score)}`}>
                  {metric?.score}/{metric?.maxScore}
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {metric?.metric}
                </h3>
              </div>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{metric?.responses} responses</span>
                <div className="flex space-x-1">
                  {renderStars(Math.round(metric?.score))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition font-medium text-sm ${
                activeCategory === category?.id
                  ? 'bg-conversion-accent text-white shadow-certification'
                  : 'bg-white text-text-primary hover:bg-conversion-accent hover:text-white border border-border'
              }`}
            >
              <span>{category?.label}</span>
              <span className="px-2 py-1 bg-black/10 rounded-full text-xs">
                {category?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredTestimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-white rounded-xl p-6 shadow-industrial hover:shadow-industrial-lg precision-transition"
            >
              {/* Customer Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-primary">{testimonial?.name}</h4>
                      {testimonial?.verified && (
                        <Icon name="CheckCircle" size={16} className="text-success" />
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">{testimonial?.company}</p>
                    <p className="text-xs text-text-secondary">{testimonial?.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex space-x-1 mb-1">
                    {renderStars(testimonial?.rating)}
                  </div>
                  <p className="text-xs text-text-secondary">
                    {new Date(testimonial.date)?.toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-text-secondary leading-relaxed mb-4 italic">
                "{testimonial?.testimonial}"
              </blockquote>

              {/* Project Details */}
              <div className="bg-surface rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Project:</span>
                  <span className="text-primary font-medium">{testimonial?.project}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Products Used:</span>
                  <span className="text-primary font-medium">{testimonial?.productUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Promise */}
        <div className="bg-white rounded-xl p-8 shadow-industrial text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-industrial-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Heart" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-4">
              Our Quality Promise
            </h3>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Every piece of feedback drives our continuous improvement. We are committed to 
              maintaining the highest quality standards and exceeding customer expectations 
              in every product we manufacture.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-primary mb-1">24/7 Support</h4>
                <p className="text-sm text-text-secondary">Round-the-clock technical assistance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="RefreshCw" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Continuous Improvement</h4>
                <p className="text-sm text-text-secondary">Regular product enhancement based on feedback</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-conversion-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Quality Guarantee</h4>
                <p className="text-sm text-text-secondary">Comprehensive warranty on all products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;