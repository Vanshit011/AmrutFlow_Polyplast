import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "PVC Pipes", path: "/product-catalogue" },
        { name: "PVC Fittings", path: "/product-catalogue" },
        { name: "Electrical Conduits", path: "/product-catalogue" },
        { name: "Drainage Systems", path: "/product-catalogue" },
        { name: "Industrial Solutions", path: "/product-catalogue" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Our Network", path: "/our-network" },
        { name: "Quality Assurance", path: "/quality-assurance" },
        { name: "Gallery", path: "/gallery" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "#" }
      ]
    },

  ];

  const socialLinks = [
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "whatsApp", icon: "whatsApp", url: "#" }
  ];

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Head Office",
      details: ["Plot No. 123, Industrial Area", "Sector 45, Gurgaon - 122003", "Haryana, India"]
    },
    {
      icon: "Phone",
      title: "Phone",
      details: ["+91 98765 43210", "+91 1800 123 456 (Toll Free)"]
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@rocketpvc.com", "support@rocketpvc.com"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-industrial-green to-conversion-accent rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold">Amrut Flow</h3>
                {/* <p className="text-sm text-gray-400">Industrial Excellence</p> */}
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading India's PVC manufacturing revolution with 25+ years of excellence,
              innovative solutions, and unwavering commitment to quality and sustainability.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-industrial-green/20 text-conversion-accent px-3 py-1 rounded-full text-xs font-medium">
                ISI Certified
              </div>
              <div className="bg-industrial-green/20 text-conversion-accent px-3 py-1 rounded-full text-xs font-medium">
                ISO 9001:2015
              </div>
              <div className="bg-industrial-green/20 text-conversion-accent px-3 py-1 rounded-full text-xs font-medium">
                Eco-Friendly
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center precision-transition hover:bg-industrial-green hover:scale-110"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections?.map((section, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold mb-4">{section?.title}</h4>
                  <ul className="space-y-2">
                    {section?.links?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link?.path}
                          className="text-gray-300 hover:text-conversion-accent precision-transition text-sm"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h4 className="text-xl font-semibold mb-6 text-center">Get in Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo?.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-industrial-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contact?.icon} size={24} className="text-conversion-accent" />
                </div>
                <h5 className="font-semibold mb-2">{contact?.title}</h5>
                {contact?.details?.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">

            {/* Left - Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} AmrutFlow Polyplast. All rights reserved.
            </div>

            {/* Middle - Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-conversion-accent precision-transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-conversion-accent precision-transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-conversion-accent precision-transition">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-conversion-accent precision-transition">
                Sitemap
              </a>
            </div>

            {/* Right - Made in India + WhatsApp + Developed By */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              {/* Made in India */}
              <div className="flex items-center space-x-2">
                <span>Made in India</span>
                <div className="w-6 h-4 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm"></div>
              </div>
              {/* WhatsApp + Developed By */}
              <a
                href="https://wa.me/919499558009" // 👉 replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-500 hover:text-green-400"
              >
                <FaWhatsapp size={20} />
                <span className="text-gray-300">
                  Developed by <span className="font-semibold text-white">Vanshit Patel</span>
                </span>
              </a>


            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;