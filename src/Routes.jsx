import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProductCatalogue from './pages/product-catalogue';
import QualityAssurance from './pages/quality-assurance';
import OurNetwork from './pages/our-network';
import Gallery from './pages/gallery';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';
import ContactUs from './pages/contact-us/components/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutUs />} />
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/our-network" element={<OurNetwork />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
