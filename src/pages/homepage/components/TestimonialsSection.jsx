import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Project Manager",
      company: "Delhi Metro Rail Corporation",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content: `Rocket PVC has been our trusted partner for over 8 years. Their pipes and fittings have consistently exceeded our quality expectations in metro construction projects. The technical support team is exceptional, and their products have shown remarkable durability in challenging underground environments.`,
      project: "Delhi Metro Phase IV",
      location: "New Delhi",
      testimonialType: "Infrastructure"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Engineer",
      company: "Larsen & Toubro Construction",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      content: `The quality consistency and timely delivery of Rocket PVC products have made them our preferred supplier for residential and commercial projects. Their electrical conduits meet all safety standards, and the technical documentation is comprehensive. Highly recommended for large-scale construction.`,
      project: "Smart City Bhubaneswar",
      location: "Odisha",
      testimonialType: "Construction"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Operations Head",
      company: "Gujarat Water Supply Board",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      content: `For our state-wide water supply network, Rocket PVC pipes have proven to be the most reliable choice. Zero leakage issues, excellent pressure handling, and cost-effective solutions. Their after-sales service and technical guidance have been invaluable for our operations team.`,
      project: "Jal Jeevan Mission Gujarat",
      location: "Ahmedabad",
      testimonialType: "Water Supply"
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      position: "Facility Manager",
      company: "Apollo Hospitals",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      content: `Healthcare facilities require the highest quality standards, and Rocket PVC delivers exactly that. Their drainage systems and electrical conduits are perfect for hospital environments. The products are easy to maintain, hygienic, and meet all medical facility requirements.`,
      project: "Apollo Hospital Expansion",
      location: "Hyderabad",
      testimonialType: "Healthcare"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-surface to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-industrial-green/10 text-industrial-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Hear from our valued clients about their experience with Rocket PVC products 
            and services across diverse industries and challenging projects.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white rounded-2xl shadow-industrial-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Testimonial Content */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {testimonials?.[activeTestimonial]?.name}
                  </h3>
                  <p className="text-text-secondary">
                    {testimonials?.[activeTestimonial]?.position}
                  </p>
                  <p className="text-sm text-industrial-green font-medium">
                    {testimonials?.[activeTestimonial]?.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                {renderStars(testimonials?.[activeTestimonial]?.rating)}
                <span className="text-sm text-text-secondary ml-2">
                  {testimonials?.[activeTestimonial]?.rating}.0 out of 5
                </span>
              </div>

              <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                "{testimonials?.[activeTestimonial]?.content}"
              </blockquote>

              <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Building2" size={14} className="text-industrial-green" />
                  <span>{testimonials?.[activeTestimonial]?.project}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} className="text-industrial-green" />
                  <span>{testimonials?.[activeTestimonial]?.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Tag" size={14} className="text-industrial-green" />
                  <span>{testimonials?.[activeTestimonial]?.testimonialType}</span>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Project showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-green/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm font-medium text-primary">
                    {testimonials?.[activeTestimonial]?.project}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {testimonials?.[activeTestimonial]?.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 rounded-full precision-transition ${
                activeTestimonial === index
                  ? 'bg-industrial-green' :'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client Logos */}
        {/* <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Trusted by Leading Organizations
            </h3>
            <p className="text-text-secondary">
              Join thousands of satisfied clients across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "Delhi Metro", "L&T Construction", "Apollo Hospitals", 
              "GWSSB", "Tata Projects", "Godrej Properties"
            ]?.map((client, index) => (
              <div
                key={index}
                className="text-center p-4 precision-transition hover:opacity-100"
              >
                <div className="text-sm font-medium text-text-secondary">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;