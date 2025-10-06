import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import ProductModal from './components/ProductModal';
import ComparisonPanel from './components/ComparisonPanel';
import FeaturedProducts from './components/FeaturedProducts';

const ProductCatalogue = () => {
 const [products] = useState([
  // AGRI FITTING
  {
    id: 101,
    name: "Agri Elbow",
    description: "PVC elbow for agricultural irrigation lines with smooth flow turn",
    detailedDescription: "Durable PVC elbows for agri pipelines, optimized for low-pressure irrigation flows; manufactured with consistent wall thickness and reliable sealing faces.",
    image: "/images/agri/elbow.jpg",
    sizeRange: "75mm - 110mm",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: true,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75MM", weight_g: 88, amount_rs: 30.8, packing: 350 },
      { size: "90MM", weight_g: 122, amount_rs: 42.7, packing: 350 },
      { size: "110MM", weight_g: 218, amount_rs: 76.3, packing: 350 }
    ]
  },
  {
    id: 102,
    name: "Agri Tee",
    description: "Three-way tee for branch connections in agri lines",
    detailedDescription: "Precision molded tee for uniform irrigation distribution; suitable for equal branch connections in agri pipelines.",
    image: "/images/agri/tee.jpg",
    sizeRange: "75mm - 110mm",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: true,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75MM", weight_g: 114, amount_rs: 39.9, packing: 350 },
      { size: "90MM", weight_g: 163, amount_rs: 57.05, packing: 350 },
      { size: "110MM", weight_g: 290, amount_rs: 101.5, packing: 350 }
    ]
  },
  {
    id: 103,
    name: "Agri Coupler",
    description: "Joining coupler for same-diameter agri pipes",
    detailedDescription: "Reliable straight coupler for extending agri pipelines with leak-resistant bonding surfaces.",
    image: "/images/agri/coupler.jpg",
    sizeRange: "75mm - 110mm",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75MM", weight_g: 78, amount_rs: 27.3, packing: 350 },
      { size: "90MM", weight_g: 110, amount_rs: 38.5, packing: 350 },
      { size: "110MM", weight_g: 162, amount_rs: 56.7, packing: 350 }
    ]
  },
  {
    id: 104,
    name: "Agri Endcap",
    description: "End closure cap for agri pipelines",
    detailedDescription: "End caps for securely sealing the end of irrigation lines to maintain pressure and prevent ingress.",
    image: "/images/agri/endcap.jpg",
    sizeRange: "75mm - 110mm",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75MM", weight_g: 65, amount_rs: 22.75, packing: 350 },
      { size: "90MM", weight_g: 90, amount_rs: 31.5, packing: 350 },
      { size: "110MM", weight_g: 147, amount_rs: 51.45, packing: 350 }
    ]
  },
  {
    id: 105,
    name: "Agri Reducer",
    description: "Reducing fitting for transitioning pipe sizes",
    detailedDescription: "Reducers for smooth transition between agri pipe sizes with minimal head loss.",
    image: "/images/agri/reducer.jpg",
    sizeRange: "63mm - 110mm (reducing)",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75×63MM", weight_g: 77, amount_rs: 26.95, packing: 350 },
      { size: "90×63MM", weight_g: 98, amount_rs: 34.3, packing: 350 },
      { size: "90×75MM", weight_g: 100, amount_rs: 35, packing: 350 },
      { size: "110×90MM", weight_g: 149, amount_rs: 52.15, packing: 350 }
    ]
  },
  {
    id: 106,
    name: "Agri Shoe Bend",
    description: "Shoe bend for directional change near outlets",
    detailedDescription: "Shoe bends for agri pipelines providing controlled redirection with compact geometry.",
    image: "/images/agri/shoe-bend.jpg",
    sizeRange: "75mm - 110mm",
    application: "irrigation",
    category: "agri-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "5°C to +50°C",
    color: "Black/Grey",
    jointType: "Solvent",
    variants: [
      { size: "75MM", weight_g: 72, amount_rs: 25.2, packing: 350 },
      { size: "90MM", weight_g: 98, amount_rs: 34.3, packing: 350 },
      { size: "110MM", weight_g: 160, amount_rs: 56, packing: 350 }
    ]
  },

  // SWR FITTING
  {
    id: 201,
    name: "SWR Bend 87.5°",
    description: "SWR bend for 87.5° directional change",
    detailedDescription: "High-quality SWR bend suitable for soil, waste and rainwater systems; available in multiple sizes with robust sealing performance.",
    image: "/images/swr/bend-87-5.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: true,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 120, rightFit: 100, selfFit: 100, amount_rs: 54 },
      { size: "110", weight_g: 255, rightFit: 36, selfFit: 42, amount_rs: 114.75 }
    ]
  },
  {
    id: 202,
    name: "SWR Single Tee",
    description: "SWR single tee for branch connection",
    detailedDescription: "Tee fitting for SWR stacks enabling branch connection; precision molded for tight seals.",
    image: "/images/swr/single-tee.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: true,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 170, rightFit: 72, selfFit: 72, amount_rs: 76.5 },
      { size: "110", weight_g: 349, rightFit: 26, selfFit: 26, amount_rs: 157.05 }
    ]
  },
  {
    id: 203,
    name: "SWR Coupler",
    description: "SWR straight coupler",
    detailedDescription: "Straight coupling for joining SWR pipes of same diameter; ring-fit or self-fit options.",
    image: "/images/swr/coupler.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 80, rightFit: 180, selfFit: 208, amount_rs: 36 },
      { size: "110", weight_g: 155, rightFit: 64, selfFit: 70, amount_rs: 69.75 }
    ]
  },
  {
    id: 204,
    name: "SWR Shoe Bend 45°",
    description: "SWR 45° shoe bend",
    detailedDescription: "Compact shoe bend for 45° direction change in SWR lines.",
    image: "/images/swr/shoe-bend-45.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 100, rightFit: 125, selfFit: 180, amount_rs: 45 },
      { size: "110", weight_g: 205, rightFit: 48, selfFit: 48, amount_rs: 92.25 }
    ]
  },
  {
    id: 205,
    name: "SWR Bend 87.5° with Door",
    description: "SWR bend 87.5° with cleanout door",
    detailedDescription: "Bend with access door for maintenance and cleaning in SWR stacks.",
    image: "/images/swr/bend-door.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 163, rightFit: 80, selfFit: 80, amount_rs: 73.35 },
      { size: "110", weight_g: 335, rightFit: 30, selfFit: 34, amount_rs: 150.75 }
    ]
  },
  {
    id: 206,
    name: "SWR Single Tee with Door",
    description: "SWR tee with cleanout door",
    detailedDescription: "Tee fitting including door for inspection/cleaning in SWR systems.",
    image: "/images/swr/tee-door.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 215, rightFit: 52, selfFit: 58, amount_rs: 96.75 },
      { size: "110", weight_g: 429, rightFit: 20, selfFit: 20, amount_rs: 193.05 }
    ]
  },
  {
    id: 207,
    name: "SWR Single Y",
    description: "SWR Y branch fitting",
    detailedDescription: "Single Y for smooth branch connection reducing head loss versus 90° tees.",
    image: "/images/swr/single-y.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 215, rightFit: 54, selfFit: 54, amount_rs: 96.75 },
      { size: "110", weight_g: 455, rightFit: 20, selfFit: 20, amount_rs: 204.75 }
    ]
  },
  {
    id: 208,
    name: "SWR Single Door Y",
    description: "SWR Y with cleanout door",
    detailedDescription: "Single Y including access door for maintenance.",
    image: "/images/swr/single-door-y.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 260, rightFit: 40, selfFit: 40, amount_rs: 117 },
      { size: "110", weight_g: 535, rightFit: 20, selfFit: 20, amount_rs: 240.75 }
    ]
  },
  {
    id: 209,
    name: "SWR Nahani Trap",
    description: "Nahani trap for floor drain connection",
    detailedDescription: "Trap assembly for SWR systems to prevent foul air ingress; various outlet reductions.",
    image: "/images/swr/nahani-trap.jpg",
    sizeRange: "110×75 - 110×110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110×75", weight_g: 265, rightFit: null, selfFit: 55, amount_rs: 119.25 },
      { size: "110×90", weight_g: 280, rightFit: null, selfFit: 48, amount_rs: 126 },
      { size: "110×110", weight_g: 325, rightFit: null, selfFit: 40, amount_rs: 146.25 }
    ]
  },
  {
    id: 210,
    name: "SWR Reducer",
    description: "Reducer for SWR size transitions",
    detailedDescription: "Reducers to step down from 110 to 75 in SWR stacks; ring or self-fit.",
    image: "/images/swr/reducer.jpg",
    sizeRange: "110×75",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "110×75", weight_g: 152, rightFit: 100, selfFit: 100, amount_rs: 68.4 }
    ]
  },
  {
    id: 211,
    name: "SWR Reducing Tee",
    description: "Reducing tee for 110×75 branch",
    detailedDescription: "Reducing tee to branch from 110 main to 75 line with compact geometry.",
    image: "/images/swr/reducing-tee.jpg",
    sizeRange: "110×75",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "110×75", weight_g: 315, rightFit: 26, selfFit: 26, amount_rs: 141.75 }
    ]
  },
  {
    id: 212,
    name: "SWR Reducing Tee with Door",
    description: "Reducing tee with door",
    detailedDescription: "Reducing tee including door for inspection and cleaning.",
    image: "/images/swr/reducing-tee-door.jpg",
    sizeRange: "110×75",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "110×75", weight_g: 399, rightFit: 20, selfFit: 20, amount_rs: 179.55 }
    ]
  },
  {
    id: 213,
    name: "SWR P Trap",
    description: "SWR P trap",
    detailedDescription: "P trap for sanitary fixtures maintaining water seal in SWR systems.",
    image: "/images/swr/p-trap.jpg",
    sizeRange: "110×110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110×110", weight_g: 550, rightFit: null, selfFit: 18, amount_rs: 247.5 }
    ]
  },
  {
    id: 214,
    name: "SWR Q Trap",
    description: "SWR Q trap",
    detailedDescription: "Q trap configuration for specific sanitary layouts.",
    image: "/images/swr/q-trap.jpg",
    sizeRange: "110×110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110×110", weight_g: 615, rightFit: null, selfFit: 16, amount_rs: null }
    ]
  },
  {
    id: 215,
    name: "SWR S Trap",
    description: "SWR S trap",
    detailedDescription: "S trap for vertical outlet fixtures maintaining water seal.",
    image: "/images/swr/s-trap.jpg",
    sizeRange: "110×110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110×110", weight_g: 720, rightFit: null, selfFit: 16, amount_rs: 324 }
    ]
  },
  {
    id: 216,
    name: "SWR Double Tee",
    description: "SWR double tee",
    detailedDescription: "Double tee junction for multi-branch SWR configurations.",
    image: "/images/swr/double-tee.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 211, rightFit: 45, selfFit: 51, amount_rs: 94.95 },
      { size: "110", weight_g: 425, rightFit: 16, selfFit: 16, amount_rs: 191.25 }
    ]
  },
  {
    id: 217,
    name: "SWR End Cap",
    description: "SWR pipeline end cap",
    detailedDescription: "End cap to terminate SWR pipeline runs securely.",
    image: "/images/swr/end-cap.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110", weight_g: 145, rightFit: null, selfFit: 125, amount_rs: 65.25 },
      { size: "75", weight_g: 80, rightFit: null, selfFit: 250, amount_rs: 36 }
    ]
  },
  {
    id: 218,
    name: "SWR Cleansing Pipe with Door",
    description: "Cleansing access pipe for SWR",
    detailedDescription: "Access pipe with removable door for cleaning and inspection of SWR stacks.",
    image: "/images/swr/cleansing-door.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Ring/Self",
    variants: [
      { size: "75", weight_g: 178, rightFit: 96, selfFit: 96, amount_rs: 80.1 },
      { size: "110", weight_g: 363, rightFit: 30, selfFit: 32, amount_rs: 163.35 }
    ]
  },
  {
    id: 219,
    name: "SWR Door Cap",
    description: "Door cap for SWR access",
    detailedDescription: "Door cap closures for SWR cleaning points.",
    image: "/images/swr/door-cap.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "75", weight_g: 33, rightFit: 400, selfFit: 400, amount_rs: 14.85 },
      { size: "110", weight_g: 63, rightFit: 300, selfFit: 300, amount_rs: 28.35 }
    ]
  },
  {
    id: 220,
    name: "SWR Vent Cowl",
    description: "Vent cowl for SWR stacks",
    detailedDescription: "Vent cowls to cap vent stacks while allowing airflow in SWR systems.",
    image: "/images/swr/vent-cowl.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "75", weight_g: null, rightFit: null, selfFit: 348, amount_rs: null },
      { size: "110", weight_g: null, rightFit: null, selfFit: 144, amount_rs: null }
    ]
  },
  {
    id: 221,
    name: "SWR Zali",
    description: "SWR floor trap grating (Zali)",
    detailedDescription: "Zali for floor drain tops compatible with SWR traps.",
    image: "/images/swr/zali.jpg",
    sizeRange: "110",
    application: "drainage",
    category: "swr-fittings",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "IS 13592",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Self",
    variants: [
      { size: "110", weight_g: null, rightFit: null, selfFit: 500, amount_rs: null }
    ]
  },
  {
    id: 222,
    name: "SWR Nail Clamp",
    description: "Nail clamp for SWR pipe support",
    detailedDescription: "Durable clamps for mounting SWR pipes on walls and ceilings.",
    image: "/images/swr/nail-clamp.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-accessories",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "PVC",
    standard: "In-house Spec",
    temperatureRange: "0°C to +40°C",
    color: "Grey",
    jointType: "Clamp",
    variants: [
      { size: "75", weight_g: null, rightFit: null, selfFit: 720, amount_rs: null },
      { size: "110", weight_g: null, rightFit: null, selfFit: 360, amount_rs: null }
    ]
  },
  {
    id: 223,
    name: "SWR Ring",
    description: "Sealing ring for SWR joints",
    detailedDescription: "Elastomer ring for ring-fit SWR joints ensuring leak-tight sealing.",
    image: "/images/swr/ring.jpg",
    sizeRange: "75 - 110",
    application: "drainage",
    category: "swr-accessories",
    certifications: ["ISO 9001"],
    isNew: false,
    isBestSeller: false,
    material: "Elastomer",
    standard: "In-house Spec",
    temperatureRange: "0°C to +60°C",
    color: "Black",
    jointType: "Ring",
    variants: [
      { size: "75", weight_g: null, rightFit: null, selfFit: 500, amount_rs: null },
      { size: "110", weight_g: null, rightFit: null, selfFit: 500, amount_rs: null }
    ]
  }
]);


  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'featured'
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  // Filter and search logic
  useEffect(() => {
    let filtered = products;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(product =>
        product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        product?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        product?.application?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply category filters
    Object.keys(filters)?.forEach(filterKey => {
      if (filters?.[filterKey] && filters?.[filterKey]?.length > 0) {
        filtered = filtered?.filter(product => {
          if (filterKey === 'certification') {
            return filters?.[filterKey]?.some(cert => 
              product?.certifications?.some(productCert => 
                productCert?.toLowerCase()?.includes(cert?.toLowerCase())
              )
            );
          }
          return filters?.[filterKey]?.includes(product?.[filterKey]);
        });
      }
    });

    // Apply sorting
    filtered = [...filtered]?.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a?.name?.localeCompare(b?.name);
        case 'name-desc':
          return b?.name?.localeCompare(a?.name);
        case 'newest':
          return b?.isNew - a?.isNew;
        case 'popular':
          return b?.isBestSeller - a?.isBestSeller;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, filters, searchQuery, sortBy]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts?.length / productsPerPage);

  const handleFilterChange = (filterKey, values) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDownloadPDF = (product) => {
    // Simulate PDF download
    console.log(`Downloading PDF for ${product?.name}`);
    alert(`PDF specification sheet for ${product?.name} would be downloaded.`);
  };

  const handleDownloadCAD = (product) => {
    // Simulate CAD download
    console.log(`Downloading CAD files for ${product?.name}`);
    alert(`CAD files for ${product?.name} would be downloaded.`);
  };

  const handleCompare = (product) => {
    if (comparisonProducts?.find(p => p?.id === product?.id)) {
      setComparisonProducts(prev => prev?.filter(p => p?.id !== product?.id));
    } else if (comparisonProducts?.length < 3) {
      setComparisonProducts(prev => [...prev, product]);
      if (!isComparisonOpen) {
        setIsComparisonOpen(true);
      }
    } else {
      alert('You can compare up to 3 products at a time.');
    }
  };

  const handleRemoveFromComparison = (productId) => {
    setComparisonProducts(prev => prev?.filter(p => p?.id !== productId));
  };

  const handleClearComparison = () => {
    setComparisonProducts([]);
    setIsComparisonOpen(false);
  };

  const activeFiltersCount = Object.values(filters)?.reduce((count, filterValues) => {
    return count + (Array.isArray(filterValues) ? filterValues?.length : 0);
  }, 0);

  return (
    <>
      <Helmet>
        <title>Product Catalogue - Rocket PVC | Premium PVC Pipes & Fittings</title>
        <meta name="description" content="Explore Rocket PVC's comprehensive product catalogue featuring high-quality PVC pipes, fittings, valves, and accessories for plumbing, electrical, and industrial applications." />
        <meta name="keywords" content="PVC pipes, PVC fittings, ball valves, electrical conduits, irrigation systems, drainage pipes, ISI certified, industrial PVC" />
      </Helmet>
      <div className="min-h-screen bg-surface">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-8 bg-gradient-to-r from-industrial-green to-secondary text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Product Catalogue
              </h1>
              <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
                Discover our comprehensive range of premium PVC products designed for excellence in every application
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="Package" size={16} />
                  <span>200+ Products</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="Shield" size={16} />
                  <span>ISI Certified</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="Download" size={16} />
                  <span>Technical Specs</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Icon name="FileText" size={16} />
                  <span>CAD Files</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)}
                activeFiltersCount={activeFiltersCount}
              />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Search and Controls */}
              <SearchBar
                onSearch={handleSearch}
                onSortChange={handleSortChange}
                sortBy={sortBy}
                searchQuery={searchQuery}
              />

              {/* View Mode Toggle */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text-secondary">
                    Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts?.length)} of {filteredProducts?.length} products
                  </span>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      iconName="X"
                      iconPosition="left"
                      iconSize={14}
                      className="text-destructive hover:text-destructive"
                    >
                      Clear Filters ({activeFiltersCount})
                    </Button>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('featured')}
                    className={`p-2 rounded-lg precision-transition ${
                      viewMode === 'featured' ?'bg-industrial-green text-white' :'bg-white text-text-secondary hover:text-primary'
                    }`}
                    title="Featured View"
                  >
                    <Icon name="Star" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg precision-transition ${
                      viewMode === 'grid' ?'bg-industrial-green text-white' :'bg-white text-text-secondary hover:text-primary'
                    }`}
                    title="Grid View"
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg precision-transition ${
                      viewMode === 'list' ?'bg-industrial-green text-white' :'bg-white text-text-secondary hover:text-primary'
                    }`}
                    title="List View"
                  >
                    <Icon name="List" size={16} />
                  </button>
                </div>
              </div>

              {/* Products Display */}
              {viewMode === 'featured' ? (
                <FeaturedProducts
                  products={products}
                  onViewDetails={handleViewDetails}
                  onDownloadPDF={handleDownloadPDF}
                  onCompare={handleCompare}
                  comparisonProducts={comparisonProducts}
                />
              ) : (
                <>
                  {currentProducts?.length > 0 ? (
                    <div className={`grid gap-6 ${
                      viewMode === 'grid' ?'md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
                    }`}>
                      {currentProducts?.map((product) => (
                        <ProductCard
                          key={product?.id}
                          product={product}
                          onViewDetails={handleViewDetails}
                          onDownloadPDF={handleDownloadPDF}
                          onCompare={handleCompare}
                          isComparing={comparisonProducts?.some(p => p?.id === product?.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-lg shadow-industrial">
                      <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-primary mb-2">No products found</h3>
                      <p className="text-text-secondary mb-4">
                        Try adjusting your search criteria or filters
                      </p>
                      <Button
                        variant="outline"
                        onClick={handleClearFilters}
                        iconName="RotateCcw"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-2 mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        iconName="ChevronLeft"
                        iconSize={16}
                      />
                      
                      <div className="flex space-x-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-8 h-8 rounded precision-transition text-sm font-medium ${
                                currentPage === pageNum
                                  ? 'bg-industrial-green text-white' :'bg-white text-text-secondary hover:text-primary hover:bg-surface'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        iconName="ChevronRight"
                        iconSize={16}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onDownloadPDF={handleDownloadPDF}
          onDownloadCAD={handleDownloadCAD}
        />

        {/* Comparison Panel */}
        <ComparisonPanel
          products={comparisonProducts}
          onRemoveProduct={handleRemoveFromComparison}
          onClearAll={handleClearComparison}
          isOpen={isComparisonOpen}
          onToggle={() => setIsComparisonOpen(!isComparisonOpen)}
        />

        {/* Quick Actions FAB */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-30">
          <Button
            variant="default"
            size="icon"
            className="w-12 h-12 rounded-full bg-conversion-accent hover:bg-conversion-accent/90 shadow-industrial-lg"
            iconName="MessageCircle"
            iconSize={20}
            title="Quick Quote"
          />
          <Button
            variant="default"
            size="icon"
            className="w-12 h-12 rounded-full bg-industrial-green hover:bg-industrial-green/90 shadow-industrial-lg"
            iconName="Phone"
            iconSize={20}
            title="Call Support"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCatalogue;