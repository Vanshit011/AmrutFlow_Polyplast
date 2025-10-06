import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirement: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! Our technical team will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirement: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      description: 'Speak with our technical experts',
      value: '+91 98765 43210',
      action: 'tel:+919876543210'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Get detailed product information',
      value: 'info@rocketpvc.com',
      action: 'mailto:info@rocketpvc.com'
    },
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Instant support available',
      value: 'Chat Now',
      action: '#'
    },
    {
      icon: 'MapPin',
      title: 'Visit Us',
      description: 'Manufacturing facility tours',
      value: 'Schedule Visit',
      action: '#'
    }
  ];

  const benefits = [
    {
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'Quick technical consultation'
    },
    {
      icon: 'FileText',
      title: 'Detailed Quotation',
      description: 'Comprehensive pricing with specs'
    },
    {
      icon: 'Truck',
      title: 'Free Samples',
      description: 'Product samples for evaluation'
    },
    {
      icon: 'Users',
      title: 'Expert Guidance',
      description: 'Technical support throughout'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-industrial-green to-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Get expert technical consultation, detailed quotations, and comprehensive support 
            for your PVC requirements. Our team is ready to help you choose the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-industrial-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                Request Technical Consultation
              </h3>
              <p className="text-text-secondary">
                Fill out the form below and our experts will contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  value={formData?.company}
                  onChange={handleInputChange}
                  placeholder="Your company"
                />
              </div>

              <Input
                label="Requirement Type"
                type="text"
                name="requirement"
                value={formData?.requirement}
                onChange={handleInputChange}
                placeholder="e.g., PVC Pipes for Water Supply, Electrical Conduits"
                required
              />

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-industrial-green focus:border-transparent resize-none"
                  placeholder="Tell us about your project requirements, quantities, timeline, etc."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                className="conversion-cta bg-industrial-green hover:bg-industrial-green/90 text-white font-semibold"
                iconName="Send"
                iconPosition="right"
                iconSize={18}
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-industrial-green/10 rounded-full flex items-center justify-center">
                      <Icon 
                        name={benefit?.icon} 
                        size={16} 
                        className="text-industrial-green"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary">
                        {benefit?.title}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {benefit?.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-headline font-bold text-white mb-2">
                Multiple Ways to Connect
              </h3>
              <p className="text-white/80">
                Choose the most convenient way to reach our technical team
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods?.map((method, index) => (
                <a
                  key={index}
                  href={method?.action}
                  className="bg-white/10 backdrop-blur-industrial rounded-xl p-6 precision-transition hover:bg-white/20 hover:scale-105 block"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon 
                        name={method?.icon} 
                        size={24} 
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {method?.title}
                      </h4>
                      <p className="text-sm text-white/70 mb-1">
                        {method?.description}
                      </p>
                      <p className="text-sm font-medium text-conversion-accent">
                        {method?.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 backdrop-blur-industrial rounded-xl p-6 border border-red-400/30">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="AlertCircle" size={20} className="text-red-300" />
                <h4 className="text-lg font-semibold text-white">
                  Emergency Support
                </h4>
              </div>
              <p className="text-white/80 text-sm mb-3">
                For urgent technical issues or project emergencies
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+911800123456"
                  className="text-red-300 font-medium hover:text-red-200 precision-transition"
                >
                  +91 1800 123 456
                </a>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm">24/7 Available</span>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/10 backdrop-blur-industrial rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Monday - Tuesday</span>
                  <span className="text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">wednesday </span>
                  <span className="text-white/60">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Thuesday - Sunday</span>
                  <span className="text-white">8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;