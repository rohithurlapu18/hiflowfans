export const productsData = [
  {
    id: 'frp-cooling-tower-fans',
    name: 'FRP Cooling Tower Fans',
    category: 'FRP Fans',
    description: 'High efficiency, aerodynamically designed fiber reinforced plastic (FRP) fan assemblies specifically engineered for modern wet and dry industrial cooling towers.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
    specs: {
      diameter: '4 ft (1200 mm) to 34 ft (10360 mm)',
      airflow: 'Up to 1,200,000 CFM',
      blades: '4 to 12 adjustable pitch blades',
      material: 'Vinylester / Epoxy FRP resin with UV stabilizers',
      hubMaterial: 'Hot Dip Galvanized Steel / SS 304 / SS 316',
      efficiency: 'Up to 88% overall static efficiency'
    },
    features: [
      'Twisted and tapered aerofoil profile for uniform air velocity distribution.',
      'Significant power savings (up to 20-30%) compared to conventional aluminum/cast iron fans.',
      'Low moment of inertia reduces start-up torque, extending gearbox and motor life.',
      'Extremely lightweight yet offers high structural strength.',
      'Highly corrosion-resistant against hot, humid, and chemical environments.'
    ]
  },
  {
    id: 'axial-flow-ventilation-fans',
    name: 'Industrial Axial Flow Fans',
    category: 'Axial Fans',
    description: 'Heavy-duty axial ventilation systems designed for high-volume air displacement in industrial plants, warehouses, mines, and marine applications.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    specs: {
      diameter: '300 mm to 1800 mm',
      capacity: '2,000 to 150,000 m³/h',
      staticPressure: '10 mm to 80 mm W.G.',
      motorRating: '0.5 HP to 50 HP (IP55 Flameproof optional)',
      driveType: 'Direct Driven or V-Belt Driven',
      construction: 'Mild Steel / Stainless Steel housing with FRP or Al blades'
    },
    features: [
      'Adjustable pitch aerofoil blades for precise airflow calibration.',
      'Dynamically balanced impeller (Grade G2.5 per ISO 1940) for vibration-free running.',
      'Robust casing with double-flanged inlets for high durability.',
      'Suitable for exhaust, fresh air supply, ventilation, and spot cooling.',
      'Low noise operation with special aerodynamic bellmouth designs.'
    ]
  },
  {
    id: 'aluminum-alloy-axial-fans',
    name: 'Aluminum Alloy Fans',
    category: 'Axial Fans',
    description: 'Precision cast aluminum alloy fan impellers designed for air-cooled heat exchangers, radiators, ventilation, and high-temperature airflow processes.',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop',
    specs: {
      diameter: '500 mm to 2400 mm',
      airflow: 'Up to 220,000 CFM',
      bladeMaterial: 'High-strength Die-Cast Aluminum (LM-6 grade)',
      maxTemperature: 'Up to 250°C continuous operation',
      hubMaterial: 'Cast Iron or Grade-A LM-6 Aluminum',
      bladesCount: '3, 4, 6, 8, or 10 blades'
    },
    features: [
      'High-grade spark-proof aluminum alloy for flammable oil & gas environments.',
      'Excellent performance under extremely high ambient temperature profiles.',
      'Adjustable pitch blades allowing custom torque and duty optimization.',
      'X-ray tested blade castings ensuring internal structural integrity.',
      'Corrosion protection coatings available upon request.'
    ]
  },
  {
    id: 'high-pressure-centrifugal-blowers',
    name: 'Centrifugal Blowers & Fans',
    category: 'Blowers',
    description: 'High-pressure radial, forward-curved, and backward-inclined industrial blowers designed for dust extraction, chemical fumes exhaustion, and combustion air supply.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    specs: {
      impellerDiameter: '250 mm to 2000 mm',
      capacity: '500 to 250,000 m³/h',
      staticPressure: '50 mm W.G. to 1500 mm W.G.',
      motorRating: '1 HP to 350 HP',
      arrangement: 'Direct, Belt, or Flexible Coupling',
      housingMaterial: 'M.S., SS 304, SS 316, FRP Lined, or solid FRP'
    },
    features: [
      'Available in radial, backward-curved, and forward-curved impeller designs.',
      'Heavy-duty shafting and self-aligning bearings with water-cooling blocks for hot gas handling.',
      'Vibration isolators and matching silencers for silent operations.',
      'Specially designed high-efficiency scrolls for lower power usage.',
      'Acid/alkali-resistant FRP lining options for chemical chemical exhaust.'
    ]
  },
  {
    id: 'cooling-tower-components',
    name: 'Cooling Tower Internals & Spares',
    category: 'Components',
    description: 'OEM quality, high-performance spare components and internal accessories for all makes and models of crossflow and counterflow cooling towers.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop',
    specs: {
      fillsMaterial: 'PVC Honeycomb / PP Splash Grid / Clog-resistant fills',
      driftEliminators: 'PVC S-shaped or C-shaped profiles with high efficiency',
      nozzles: 'Non-clogging target nozzles, spiral nozzles, and target flow',
      driveShaft: 'Carbon Fiber / Stainless Steel dynamic-balanced shafts',
      gearboxRatio: 'Custom standard reductions (1:1 up to 1:12)'
    },
    features: [
      'High surface area PVC fills for maximum heat transfer rates.',
      'FRP drift eliminators reducing drift loss to less than 0.005% of circulating water.',
      'Corrosion-free composite drive shafts that require zero lubrication.',
      'Heavy duty spiral bevel gearboxes offering 98% mechanical transmission efficiency.',
      'Fully customizable spray distribution piping and nozzle layouts.'
    ]
  },
  {
    id: 'custom-aerofoil-impellers',
    name: 'Custom Aerofoil Impellers',
    category: 'FRP Fans',
    description: 'Bespoke custom-engineered aerofoil impellers manufactured using specialized compression molding for retrofitting and upgrading existing cooling fan systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    specs: {
      diameterRange: '1.2m to 12m',
      bladeMaterial: 'Urethane foam core with glass reinforcement',
      hubDesign: 'Split hub or solid hub with split clamp designs',
      shaftSizes: 'Standard keyway fittings or taper lock bushes',
      gradeBalancing: 'Dynamic ISO 1940 G1.0/G2.5'
    },
    features: [
      'Tailored blade twist and width designed via advanced computational fluid dynamics (CFD).',
      'Perfect drop-in replacement for worn out cast iron, wood, or aluminum blades.',
      'Extremely high strength-to-weight ratio.',
      'Guaranteed power drop with increased airflow on retrofits.',
      'Polyurethane leading-edge protection against water droplet erosion.'
    ]
  }
];
