import { MdOutlineAssessment, MdDynamicFeed, MdBuildCircle, MdDesignServices } from 'react-icons/md';

export const servicesData = [
  {
    id: 'dynamic-balancing',
    name: 'Dynamic Balancing Services',
    iconName: 'MdDynamicFeed',
    shortDesc: 'Precision dynamic balancing of industrial fan impellers, rollers, and rotary machinery to eliminate vibrations and extend equipment life.',
    longDesc: 'Unbalanced rotating equipment can lead to structural damage, rapid bearing wear, and high noise levels. Our dynamic balancing division provides professional G2.5 and G1.0 balancing according to ISO 1940 standards. We leverage state-of-the-art computerized vibration analyzers to perform on-site (in-situ) dynamic balancing without dismantling the fan casing, as well as workshop balancing for high-speed rotors.',
    benefits: [
      'Increases structural life of motors, gearboxes, and bearings.',
      'Reduces ambient mechanical noise and localized floor vibrations.',
      'Prevents catastrophic failures of fan blades and hubs.',
      'Optimizes energy efficiency by reducing frictional losses.'
    ],
    steps: [
      'Initial vibration analysis and speed scanning.',
      'Determining trial mass placement and phase angles.',
      'Adding calibration correction weights.',
      'Final verification and generating an ISO-standard compliance report.'
    ]
  },
  {
    id: 'aerodynamic-optimization',
    name: 'Airflow Audits & Energy Optimization',
    iconName: 'MdOutlineAssessment',
    shortDesc: 'Comprehensive engineering audits to analyze cooling tower efficiency, identify air bypass, and reduce energy consumption.',
    longDesc: 'Many older industrial plants operate fans that run inefficiently due to improper pitch settings, wear and tear, or outdated aerodynamic blade profiles. Our airflow audit engineers perform detailed measurements of static pressure, temperature gradients, motor current draw, and velocity distributions. We then calculate exact efficiency points and present a retrofitting roadmap demonstrating guaranteed energy savings.',
    benefits: [
      'Identifies power-saving opportunities of up to 25%.',
      'Optimizes cooling tower heat transfer rates (L/G ratio).',
      'Corrects airflow distribution problems and drift losses.',
      'Delivers an ROI calculation based on local electrical tariffs.'
    ],
    steps: [
      'Physical survey and anemometer airflow charting.',
      'Electrical power logging under varying process loads.',
      'CFD simulation of airflow profiles around the fan cylinder.',
      'Formal retrofitting and pitch-adjustment recommendations.'
    ]
  },
  {
    id: 'retrofitting-and-overhauling',
    name: 'Retrofitting & Overhauling Services',
    iconName: 'MdBuildCircle',
    shortDesc: 'Upgrading metal or wooden fans to modern aerofoil FRP fans, complete with dynamic alignment, gearbox overhauling, and structural repair.',
    longDesc: 'We specialize in "turnkey upgrades" for existing cooling towers and air-cooled heat exchangers. By replacing heavy, inefficient aluminum, wood, or solid steel fans with our custom high-flow FRP impellers, we increase air output while drastically decreasing current load. Our specialized field crew handles the complete removal, structural reinforcement, gearbox rebuild, and precision shaft alignment.',
    benefits: [
      'Quick turnaround times to minimize plant downtime.',
      'Increases cold water production capacities of the cooling tower.',
      'Upgrades structural framework to handle dynamic loads.',
      'Restores gearbox and drive shafts to factory specifications.'
    ],
    steps: [
      'Pre-shutdown performance baseline measurements.',
      'Removal of legacy assemblies and inspection of support structures.',
      'Installation of customized high-flow FRP blades and hubs.',
      'Laser alignment of motor-gearbox coupling and dynamic commission testing.'
    ]
  },
  {
    id: 'custom-fabrication',
    name: 'Bespoke FRP Engineering & Custom Fabrication',
    iconName: 'MdDesignServices',
    shortDesc: 'Custom designing and manufacturing of specialized fan casings, ducting systems, dampers, and drift eliminators using custom resin matrices.',
    longDesc: 'Certain chemical and petrochemical plants require customized resistance profiles. We engineer bespoke fiberglass reinforced plastic (FRP) structures, cylindrical casings, bellmouth inlets, ventilation hoods, and duct systems. Each component is custom fabricated using specialized hand lay-up and compression molding techniques with resins specifically matched to temperature and chemical exposure.',
    benefits: [
      'Tailored chemical, acid, and alkali corrosion resistance.',
      'Lightweight structures that reduce structural support requirements.',
      'Aerodynamically smooth surfaces that minimize friction and pressure drops.',
      'Excellent flame retardant properties in hazardous environments.'
    ],
    steps: [
      'Reviewing chemical, temperature, and pressure boundary criteria.',
      'CAD layout modeling and structural finite element analysis.',
      'Precision tooling, mold preparation, and composite lay-up.',
      'Curing, post-curing baking, and rigorous quality testing.'
    ]
  }
];
