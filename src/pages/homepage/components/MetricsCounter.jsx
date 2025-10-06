import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const MetricsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    quality: 0,
    products: 0
  });
  
  const sectionRef = useRef(null);

  const metrics = [
    {
      key: 'experience',
      icon: 'Calendar',
      value: 25,
      suffix: '+',
      label: 'Years Manufacturing Excellence',
      description: 'Decades of industry leadership and innovation'
    },
    {
      key: 'clients',
      icon: 'Users',
      value: 10000,
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Trusted by businesses across India'
    },
    {
      key: 'quality',
      icon: 'Shield',
      value: 99.8,
      suffix: '%',
      label: 'Quality Assurance Rating',
      description: 'Consistent excellence in every product'
    },
    {
      key: 'products',
      icon: 'Package',
      value: 500,
      suffix: '+',
      label: 'Product Variants',
      description: 'Comprehensive range for all applications'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    metrics?.forEach((metric) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = metric?.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(increment * step, metric?.value);
        
        setCounters(prev => ({
          ...prev,
          [metric?.key]: current
        }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  const formatNumber = (num, key) => {
    if (key === 'clients') {
      return Math.floor(num)?.toLocaleString('en-IN');
    } else if (key === 'quality') {
      return num?.toFixed(1);
    } else {
      return Math.floor(num);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-industrial-green to-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence, quality, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.key}
              className="text-center bg-white/10 backdrop-blur-industrial rounded-2xl p-8 precision-transition hover:bg-white/20 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon 
                    name={metric?.icon} 
                    size={32} 
                    className="text-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-headline font-bold text-white mb-2">
                  {formatNumber(counters?.[metric?.key], metric?.key)}
                  <span className="text-conversion-accent">{metric?.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {metric?.label}
                </h3>
                <p className="text-sm text-white/70">
                  {metric?.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-conversion-accent rounded-full precision-transition"
                  style={{ 
                    width: isVisible ? '100%' : '0%',
                    transitionDelay: `${index * 0.2}s`,
                    transitionDuration: '1.5s'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Customer Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">Pan-India</div>
              <div className="text-sm text-white/70">Distribution Network</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">Zero</div>
              <div className="text-sm text-white/70">Compromise on Quality</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/70">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsCounter;