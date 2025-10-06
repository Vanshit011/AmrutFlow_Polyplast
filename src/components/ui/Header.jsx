import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Logo from "../assets/MIHIR/AMRUT_FLOW_logo-1-removebg-preview.png"; // ✅ import your logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'About Us', path: '/about-us', icon: 'Building2' },
    { name: 'Products', path: '/product-catalogue', icon: 'Package' },
    { name: 'Network', path: '/our-network', icon: 'MapPin' },
    { name: 'Quality', path: '/quality-assurance', icon: 'Shield' },
    { name: 'Contact Us', path: '/contact-us', icon: 'Phone' },
  ];

  const secondaryItems = [
    { name: 'Gallery', path: '/gallery', icon: 'Image' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 precision-transition
    ${isScrolled
          ? 'bg-white/30 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }`}
    >

      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              to="/homepage"
              className="flex items-center space-x-3 precision-transition hover:opacity-80"
              onClick={closeMenu}
            >
              {/* ✅ Logo */}
              <img
                src={Logo}
                alt="Rocket PVC Logo"
                className="w-13 h-12 object-contain"
              />

              {/* ✅ Branding Text (same font + CSS as navbar) */}
              {/* <div className="hidden sm:block">
                <h1 className="text-xl font-headline font-bold text-primary">
                  AmrutFlow Polyplast
                </h1>
                <p className="text-xs text-text-secondary font-medium">
                  Industrial Excellence
                </p>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition font-medium text-sm ${isActivePath(item?.path)
                    ? 'bg-industrial-green text-white shadow-certification'
                    : `${isScrolled ? 'text-black hover:text-industrial-green' : 'text-white hover:text-industrial-green'} hover:bg-surface`
                  }`}


              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg precision-transition font-medium text-sm text-white hover:bg-surface hover:text-industrial-green">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-industrial-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible precision-transition">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 precision-transition text-sm ${isActivePath(item?.path)
                        ? 'bg-industrial-green text-white' : 'text-text-primary hover:bg-surface hover:text-industrial-green'
                        }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button
                variant="default"
                className="conversion-cta bg-conversion-accent hover:bg-conversion-accent/90 text-white font-semibold"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg precision-transition hover:bg-surface"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? "X" : "Menu"}
                size={24}
                className="text-primary"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden precision-transition overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-6 py-4 bg-white border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...secondaryItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg precision-transition font-medium ${isActivePath(item?.path)
                    ? 'bg-industrial-green text-white shadow-certification'
                    : 'text-text-primary hover:bg-surface hover:text-industrial-green'
                    }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}

              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="default"
                  fullWidth
                  className="conversion-cta bg-conversion-accent hover:bg-conversion-accent/90 text-white font-semibold"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Certification Strip */}
      {/* <div className={`bg-surface border-t border-border precision-transition ${isScrolled ? 'py-1' : 'py-2'
        }`}>
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-xs text-text-secondary">
            <div className="flex items-center space-x-2 certification-badge">
              <Icon name="Shield" size={14} className="text-industrial-green" />
              <span className="font-medium">ISI Certified</span>
            </div>
            <div className="flex items-center space-x-2 certification-badge">
              <Icon name="Award" size={14} className="text-industrial-green" />
              <span className="font-medium">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2 certification-badge">
              <Icon name="Leaf" size={14} className="text-industrial-green" />
              <span className="font-medium">Eco-Friendly</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 certification-badge">
              <Icon name="MapPin" size={14} className="text-industrial-green" />
              <span className="font-medium">Pan-India Network</span>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;