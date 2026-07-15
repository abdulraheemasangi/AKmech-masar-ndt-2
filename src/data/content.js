// Centralized site copy, sourced from AKMEC GROUP / Masar NDT reference documents.
// Edit this file to update text across the whole site.

export const company = {
  name: 'Masar NDT',
  legalName: 'AKMEC Group',
  tagline: 'Inspection. Integrity. Assurance.',
  intro:
    'Masar NDT (AKMEC Group) is an ISO 9001:2015 certified inspection, NDT and asset-integrity engineering organisation, delivering accurate, first-time-right results across the Kingdom of Saudi Arabia and India.',
  mission:
    'We strive to render services reflective of our efficiency and are committed to providing superior quality and results.',
  vision:
    'We aim to provide our clients with outstanding service, value, and quality — through total commitment to exceeding client expectations, personal attention, dedication, and hard work.',
  about: [
    'AKMEC GROUP is an ISO 9001:2015 certified company and a trusted name for vigorous, sustainable, and tailored facilities-management and technical services to public and private organisations, creating value through expertise since 2021.',
    'AKMEC is a leader in Inspection, NDT, Advanced NDT, Trading, Filtration Systems, Construction and Facility Management, translating professionalism and excellence into every engagement.',
    'Whatever the challenge — difficult access locations, large industrial sites, Upstream, Downstream, Midstream, Marine, Energy & Power, laboratories, plants and factories — Masar NDT brings the engineers, inspectors, field technicians, trade professionals and technology to get the job done right.',
  ],
}

export const offices = [
  {
    label: 'Saudi Arabia Office',
    lines: [
      'Building No. 4258, Al Safat District,',
      'Al Jubail – 35514, Kingdom of Saudi Arabia',
    ],
    mobile: '+966 57 103 3252',
    email: 'sales@masarndt.com',
    website: 'www.masarndt.com',
  },
  {
    label: 'India Office',
    lines: ['AKMEC Group'],
    mobile: null,
    email: 'inquiry@akmecgroup.com',
    website: 'www.akmecgroup.com',
  },
]

export const stats = [
  { value: '150+', label: 'VT Level II / III Inspectors' },
  { value: '400+', label: 'API Certified Inspectors' },
  { value: '90,000+', label: 'Manpower Resume Database' },
  { value: 'ISO 9001:2015', label: 'Certified Organisation' },
]

// ---------------- SERVICE CATEGORIES (for nav + home overview) ----------------
export const serviceCategories = [
  {
    id: 'inspection',
    tag: 'Inspection',
    title: 'Inspection & Audit',
    summary:
      'Shutdown, turnaround inspection and planning — a one-stop shop that reduces cost and time spent on outside resources.',
    path: '/services/inspection',
  },
  {
    id: 'conventional-ndt',
    tag: 'Conventional NDT',
    title: 'Conventional NDT',
    summary:
      'Penetrant, Magnetic Particle, Ultrasonic, Holiday, Ferrite, Visual, Hardness, Vacuum Box testing and metallography.',
    path: '/services/conventional-ndt',
  },
  {
    id: 'advanced-ndt',
    tag: 'Advanced NDT',
    title: 'Advanced NDT',
    summary:
      'PMI, Eddy Current, Remote Field, Magnetic Flux Leakage, IRIS, Boroscopic Inspection and Thermography.',
    path: '/services/advanced-ndt',
  },
  {
    id: 'asset-integrity',
    tag: 'Asset Integrity',
    title: 'Asset Integrity Engineering',
    summary:
      'Corrosion loop development, RBI studies, fitness-for-service, RCA/RLA and full inspection-data management.',
    path: '/services/asset-integrity',
  },
  {
    id: 'manpower',
    tag: 'Manpower',
    title: 'Manpower & Outsourcing',
    summary:
      'Qualified, well-trained technical and non-technical manpower for shutdowns, EPC, O&M and turnkey projects.',
    path: '/services/manpower',
  },
]

// ---------------- 1. INSPECTION & AUDIT ----------------
export const inspection = {
  title: 'Inspection & Audit',
  tag: 'Inspection & Audit',
  lead:
    'AKMEC is an ISO 9001:2015 approved certified inspection organisation. We deliver accurate, reliable results the first time, every time — improving productivity, saving time and lowering costs.',
  body: [
    'Our solutions are designed to meet your precise requirements for reliability, timeliness and cost-efficiency. No matter what integrity challenge you face, you can rely on Masar NDT to have the engineers, inspectors, field technicians, trade people and technology to get the job done right.',
    'Whatever your challenge, we have the answer — in difficult access locations, large industrial sites, Upstream, Downstream, Midstream, Marine, Energy & Power, laboratories, plants and factories. Wherever you need us.',
  ],
  highlight: {
    title: 'Specialized in Shutdown & Turnaround Inspection and Planning',
    body: [
      'AKMEC allows a "one-stop shop" for the client, reducing cost and time spent acquiring outside resources.',
      'Planning the turnaround is one of the most important steps toward a successful turnaround. Our experienced team of inspectors and planners assists clients at the planning stage, and we staff all inspection crafts necessary to plan any size turnaround.',
      'The final and major step for any successful turnaround is the post-turnaround work and documentation. Masar NDT ensures all inspection activities are properly updated and documented per API, ASME PCC and/or client-specific standards and guidelines — including Pre-Startup Audits, updating existing mechanical-integrity programs, and participating in post-turnaround reviews.',
    ],
  },
}

// ---------------- 2. CONVENTIONAL NDT ----------------
export const conventionalNdt = {
  title: 'Conventional NDT',
  tag: 'Conventional NDT',
  lead:
    'A full suite of established, code-compliant testing methods for pipes, structures, pressure vessels and process equipment on construction projects and process plants.',
  methods: [
    {
      code: '2.1',
      name: 'Penetrant Testing (PT)',
      description:
        'Inspection of surface discontinuities in materials and welds of pipes, structures, pressure vessels and other process equipment.',
      advantages: [
        'Efficient, portable, fast, relatively inexpensive and does not require high-technology equipment',
        'Easy to inspect parts with complex shapes, large areas and large volumes of parts',
        'Able to test a wide range of materials, including ferritic and composite items',
        'Indicates the relative shape, size and depth of a flaw',
        'High sensitivity to small surface discontinuities',
      ],
      limitations: [
        'Surface finish and roughness can affect inspection sensitivity',
        'Only surface-breaking defects can be detected',
        'Chemical handling and proper disposal is required',
        'Requires direct access to the surfaces to be examined',
        'Cannot examine porous surfaces',
      ],
    },
    {
      code: '2.2',
      name: 'Magnetic Particle Testing (MT)',
      description:
        'Surface and subsurface discontinuity testing using permanent or electromagnetic yokes on pipes, pressure vessels and process equipment.',
      advantages: [
        'Can detect both surface and near sub-surface defects',
        'Some inspection formats are extremely portable and low cost',
        'Indications are visible to the inspector directly on the specimen surface',
        'Relatively safe technique; materials generally not combustible or hazardous',
        'Rapid inspection with immediate results',
        'Can inspect parts with irregular shapes',
      ],
      limitations: [
        'The specimen must be ferromagnetic material',
        'Not always effective on parts with complex surface geometry',
        'Alignment between magnetic flux and defect is important',
      ],
    },
    {
      code: '2.3',
      name: 'Ultrasonic Testing (UT)',
      description:
        'Shear-wave inspection of castings and welds in piping, plate, vessels and process equipment, plus longitudinal-wave thickness measurement, corrosion scanning and mapping — used across Oil & Gas, petrochemical, chemical, fertilizer, marine, aerospace, automotive, construction, medical, metallurgy and manufacturing.',
      advantages: [
        'High penetration power, allowing flaw detection deep within a part',
        'High sensitivity, allowing detection of very small flaws',
        'Can be used when only one side of an object is accessible',
        'Greater accuracy for determining depth of internal flaws and thickness of parallel-surface parts',
        'Able to estimate size, shape, orientation and nature of defects',
        'Non-hazardous to nearby personnel, equipment or materials',
        'Highly automated and portable operations possible',
        'Immediate results allow immediate decisions',
      ],
      limitations: [
        'Requires experienced technicians for inspection and data interpretation',
        'Rough, irregularly shaped, very small, thin, or non-homogeneous objects are difficult to inspect',
        'Reduced sensitivity for volumetric flaws, particularly metal inclusions, versus radiographic testing',
      ],
    },
    {
      code: '2.4',
      name: 'Holiday / Spark Testing',
      description:
        'Checks for inconsistencies such as pinholes, discontinuities, holidays and voids in coatings covering metallic surfaces. A voltage applied across metal fibres on the coated surface creates a spark wherever a holiday exposes the underlying metal — critical for anti-corrosive coating applications, since undetected holidays leave the surface prone to corrosion.',
    },
    {
      code: '2.5',
      name: 'Ferrite Testing',
      description:
        'Fast, inexpensive and accurate on-site measurement of ferrite percentage in stainless steel — specifically austenitic and duplex grades — to ensure proper toughness, corrosion resistance and crack prevention. Results are interpreted per API 938C, API 582, NACE MR0175, NACE MR0103 and/or customer requirements. In austenitic weld metal ferrite influences mechanical properties, weldability and corrosion resistance; in duplex stainless steels it influences mechanical properties and corrosion performance.',
    },
    {
      code: '2.6',
      name: 'Visual Inspection (VT)',
      description:
        'The original and most effective NDT technique for detecting surface defects. Our inspectors bring a deep understanding of applicable code requirements, products, processes, service conditions and acceptance criteria — backed by over 150 VT Level II/III inspectors and 400 API-certified inspectors.',
      uses: [
        'Welding inspection',
        'API tank, pressure vessel and process piping inspections',
        'Quality assurance during manufacture or repair',
        'Coating inspection',
        'Lift/aerial equipment inspection',
        'On-site surveillance',
      ],
    },
    {
      code: '2.7',
      name: 'Hardness Testing',
      description:
        'Provides a relevant indication of strength, wear resistance and other material properties, using the latest hardness-testing technology for reliable, on-the-spot results.',
    },
    {
      code: '2.8',
      name: 'Vacuum Box Testing',
      description:
        'Locates weld-seam leaks using a vacuum box and compressor to create a pressure envelope while a detergent solution is applied; leaks become visible as bubbles. Systems comply with ASTM E515, with inspections conducted per ASME Section V Article 10, Appendix II or client specification.',
      advantages: [
        'Provides an immediate visual indication of the location of any leaks present',
        'Can detect small leaks within a given area',
      ],
      limitations: [
        'Size and orientation of leaks must be analyzed with a secondary NDT method',
        'Surface temperature of the test material must be between 5°C and 50°C, unless a procedure effective outside this range is demonstrated',
      ],
    },
    {
      code: '2.9',
      name: 'Metallography',
      description:
        'Used across the lifetime of a component — from initial materials development through inspection, production, manufacturing process control and failure analysis — to ensure product reliability. Steps include sampling, specimen preparation (sectioning, mounting, grinding, polishing, etching), microscopic observation, digital imaging and quantitative data extraction.',
    },
    {
      code: '2.10',
      name: 'NDT Procedure Qualification',
      description:
        'Conventional NDT procedure review and approval by a certified Level III, outlining all requirements from codes, specifications and/or standards to ensure inspection requirements are met.',
      uses: ['Procedures', 'Inspection Equipment', 'Inspection Personnel', 'Documentation'],
    },
  ],
}

// ---------------- 3. ADVANCED NDT ----------------
export const advancedNdt = {
  title: 'Advanced NDT',
  tag: 'Advanced NDT',
  lead:
    'Specialised, high-technology inspection techniques for tubing, heat exchangers and hard-to-reach assets, delivered by an in-house team of advanced-NDT specialists.',
  methods: [
    {
      code: '3.1',
      name: 'Positive Material Identification (PMI)',
      description:
        'On-the-spot chemical-composition verification, certified in a written report, confirming that metallic parts contain the correct percentage of key elements so properties such as corrosion resistance meet requirements. Used across oil & gas, power generation, chemical, pharmaceutical, nuclear, aerospace and metal fabrication for quality control and safety compliance.',
      advantages: [
        'Rapid non-destructive verification that supplied materials conform to proper standards and specifications',
        'Finds potentially mixed-up alloys',
        'Identifies if the wrong material has been used',
        'Ensures welded components use the correct filler material',
        'Ensures products and components are manufactured with the correct alloy',
      ],
    },
    {
      code: '3.2',
      name: 'Eddy Current Testing (ECT)',
      description:
        'Rapid, accurate electromagnetic-induction technique to detect discontinuities in tubing, heat exchangers, condensers, steam generators, air coolers, feed-water heaters, wires and plates — including very small cracks in or near the surface, with minimal surface preparation. Our equipment operates at test frequencies up to 8 kHz with inspection speeds up to 2 metres per second.',
      note:
        'Prior to testing, tubes are cleaned via hydro-jetting (typical pressures 280–560 kg/cm²) and cleaning adequacy is verified with a dummy probe/rod. Signals from the tubes under test are compared against calibration-standard signals by expert technicians.',
    },
    {
      code: '3.3',
      name: 'Remote Field Eddy Current Testing (RFET)',
      description:
        'Electromagnetic method for detecting and sizing wall thinning caused by corrosion, erosion, wear, pitting and baffle cuts in ferromagnetic tubes of boilers, feed-water heaters, air coolers and carbon-steel heat exchangers — often combined with Near Field Testing (NFT) depending on equipment capability.',
    },
    {
      code: '3.4',
      name: 'Magnetic Flux Leakage (MFL) Testing',
      description:
        'Electromagnetic technique that magnetises the conductive test material; wherever corrosion or material loss exists, the magnetic field leaks and is detected.',
      uses: [
        'Suitable for wall-loss detection and measurement of sharp defects such as pitting, grooving and circumferential cracks',
        'Applicable to ferromagnetic tubing',
        'Effective for aluminium-finned carbon-steel tubes, as the field is largely unaffected by the fins',
        'A strong back-up inspection to Remote Field Testing',
      ],
    },
    {
      code: '3.5',
      name: 'Internal Rotary Inspection System (IRIS)',
      description:
        'Ultrasonic method for tube inspection: a probe is inserted into a water-flooded tube and pulled out slowly while data is recorded, allowing detection of metal loss from both the inside and outside of the tube wall.',
      advantages: [
        'Provides flaw location along both the length and circumference of the tube',
        'Defect detection is better than RFET in ferrous materials, though inferior to ECT in non-magnetic materials',
      ],
      limitations: [
        'A slow technique (roughly 1 inch per second scanning speed), though accurate to about 0.15 mm in ferrous tube wall measurement',
        'Requires better surface cleaning than eddy current testing',
      ],
    },
    {
      code: '3.6',
      name: 'Boroscopic / Videoscopic Inspection',
      description:
        'A small camera visually inspects hard-to-reach zones — electrical generators and transformers, boilers, pressure vessels, pipelines, gas/steam/wind turbines, condenser tubes, drums, pumps, heat exchangers and other plant components — without teardown, checking for pitting, cracks, corrosion, erosion and weld defects.',
    },
    {
      code: '3.7',
      name: 'Thermography',
      description:
        'Infrared thermography finds temperature anomalies during equipment operation using remote, non-contact viewing. Useful for deposits or blockages in pipelines carrying hot or cold fluids, and for refractory or insulation deterioration in furnaces, boilers, heaters and converters.',
      advantages: [
        'Reformers, furnaces and boilers are ideal candidates for detecting chocking, deposits and hot/cold spots',
        'Easily determines hot-spots, especially in electrical systems where overheating can produce catastrophic hazards',
        'Qualified team of thermography inspectors',
      ],
      limitations: [
        'Requires trained and skilled technicians',
        'Effective parameters (temperature range, emissivity, focal distance) must be correctly set',
      ],
    },
  ],
}

// ---------------- 4. ASSET INTEGRITY ENGINEERING ----------------
export const assetIntegrity = {
  title: 'Asset Integrity Engineering',
  tag: 'Asset Integrity Engineering',
  lead:
    'AKMEC GROUP offers engineering and technical consultancy to customers, industries, manufacturers and cross-country businesses trading products internationally.',
  services: [
    'Corrosion Loop Development and Marking',
    'Damage Mechanisms Identification',
    'CML Identification and Optimization',
    'Injection and Mix Point Assessment',
    'Dead Leg Identification and Risk Ranking',
    'Corrosion Control Document (CCD)',
    'Risk Based Inspection (RBI) Study',
    'Develop Inspection Scope and Technique',
    'Inspection Data Management and Automation',
    'Asset Integrity Management System',
    'Isometric, P&ID and PFD Drafting',
    'Asset Life Extension Study',
    'Fitness for Service (API 579 / ASME)',
    'Assessment of UG / Cross-Country Pipeline',
    'Study of Online Corrosion Probes and Coupons',
    'Root Cause Analysis (RCA) / Remaining Life Assessment (RLA)',
    'Analysis of Industrial Failure, Delivering Effective Remedies',
    'Assessment of Small-Bore Piping / Critical Equipment',
  ],
}

// ---------------- 5. MANPOWER / OUTSOURCING ----------------
export const manpower = {
  title: 'Manpower & Outsourcing',
  tag: 'Manpower & Outsourcing',
  lead:
    'AKMEC HR provides qualified, well-trained manpower supporting commercial, industrial, technical and domestic-sector activities for both public and private clients.',
  body: [
    'We provide well-trained, qualified candidates of various professions and nationalities for all customer requirements, and can mobilize large manpower for shutdown / turnaround assignments ranging from 15 days to several months.',
    'AKMEC maintains an in-house database of more than 90,000 resumes and a strong referral programme to attract talent from the industry. Our recruiters are trained to identify candidates who meet your exact project requirements — technical, non-technical, highly skilled, skilled and non-skilled.',
    'Manpower is supplied on client payroll and works at the client\u2019s location across the sectors listed in Industries We Serve, and more.',
  ],
  disciplines: [
    'Engineering Services',
    'EPC, Turnkey Projects',
    'Shutdown and Turnaround',
    'Operation and Maintenance',
    'Project Management',
    'Testing and Commissioning',
    'Vigilance and Surveillance',
    'Construction and Manufacturing',
    'Technical Staffing',
  ],
}

// ---------------- INDUSTRIES WE SERVE ----------------
export const industries = [
  'Oil and Gas',
  'Refinery',
  'Petrochemical',
  'Chemical',
  'Fertilizer',
  'Nuclear',
  'Marine',
  'Mining',
  'Sugar Industries',
  'Port / Shipping',
  'Cement',
  'Power Generation',
  'Metal Fabrication',
  'Forging and Casting',
  'Manufacturing',
  'Pipeline',
  'Tanks',
  'EPC and Turnkey',
  'Electronic and Electricals',
  'Construction',
  'Solar',
  'Wind',
  'Building and Infrastructure',
  'Food & Beverages Industry',
  'Railways and Metro',
  'Aerospace and Defense',
  'Pharmaceutical / Medical',
  'Automobile',
  'Textile',
  'Transportation',
  'General Industries',
  'Pulp and Paper',
  'Renewable Energy',
]



// ---------------- NEW CORPORATE DATA MODELS ----------------

export const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We align on project specifications, standard compliance protocols, and key client objectives to structure the engagement roadmap.'
  },
  {
    step: '02',
    title: 'Technical Planning',
    description: 'Our certified engineers draw up detailed testing procedures, hazard worksheets, and personnel scheduling matrices.'
  },
  {
    step: '03',
    title: 'Inspection Design',
    description: 'We draft specialized NDT and corrosion mapping layouts tailored to the structural geometry and materials involved.'
  },
  {
    step: '04',
    title: 'Equipment & Prep',
    description: 'Advanced instruments are calibrated, and dummy rods/probes are checked to ensure full field reliability.'
  },
  {
    step: '05',
    title: 'On-site Execution',
    description: 'Our ASNT Level II/III and API inspectors execute on-site testing under rigorous QA/QC safety standards.'
  },
  {
    step: '06',
    title: 'Reporting & Support',
    description: 'Detailed mechanical integrity and fitness-for-service reports are delivered with lifetime engineering consultancy.'
  }
]

export const testimonials = [
  {
    name: 'Eng. Khalid Al-Otaibi',
    position: 'Turnaround Manager',
    company: 'Sabic Refinery Group',
    rating: 5,
    review: 'Masar NDT managed the inspection scope for our Jubail refinery turnaround. Their technicians mobilized rapidly and finished the vacuum box and advanced tube inspection 2 days ahead of schedule, enabling a safe pre-startup audit.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Rahul Sharma',
    position: 'VP Operations',
    company: 'Larsen & Toubro Ltd.',
    rating: 5,
    review: 'For our complex cross-country pipeline projects, their asset integrity engineering team provided corrosion loop development and RBI studies of the highest caliber. They are our go-to partner for safety assurance.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    name: 'Marcus Vance',
    position: 'HSE Director',
    company: 'Aramco Offshore Operations',
    rating: 5,
    review: 'We have utilized Masar NDT for critical advanced NDT tube inspections. Their IRIS and Remote Field testing reports were clean, comprehensive, and fully compliant with ASME Section V standards. Exceptional professionalism.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  }
]

export const faqs = [
  {
    question: 'What certifications do Masar NDT inspectors hold?',
    answer: 'Our field inspectors hold globally recognized qualifications including ISO 9001:2015, ASNT/VT Level II/III certifications, API 510, API 570, API 653 inspector qualifications, and specialized NACE / BGAS certifications for coating inspections.'
  },
  {
    question: 'How quickly can your team mobilize for shutdown assignments?',
    answer: 'For planned shutdowns in Saudi Arabia and India, we can coordinate with turnaround planners weeks in advance. For emergency outages, our mobilization time ranges from 24 to 48 hours depending on scope and visa clearance, backed by our resume database of over 90,000 specialists.'
  },
  {
    question: 'What advanced NDT techniques do you provide for heat exchanger tubes?',
    answer: 'We provide Eddy Current Testing (ECT) for non-ferrous materials, Remote Field Eddy Current Testing (RFET) and Near Field Testing (NFT) for ferrous materials, Internal Rotary Inspection System (IRIS) for high-accuracy ultrasonic wall thickness measurements, and Magnetic Flux Leakage (MFL).'
  },
  {
    question: 'What is Fitness-For-Service (FFS) assessment?',
    answer: 'Fitness-For-Service assessments (conducted per API 579-1/ASME FFS-1) are engineering evaluations that determine the structural integrity of pressurized equipment, piping, or storage tanks containing flaws or damage, establishing whether they can continue to run safely.'
  },
  {
    question: 'Are your testing procedures compliant with international standards?',
    answer: 'Yes. All NDT procedures (conventional and advanced) are drafted, reviewed, and approved by in-house Level III certified experts in strict accordance with ASME Section V, ASTM, API, and client-specified standards.'
  }
]

export const teamMembers = [
  {
    name: 'Mr. A. K. Mehra',
    position: 'Chairman & Managing Director',
    bio: 'Over 25 years of leadership in industrial services, infrastructure management, and technical QA/QC services across India and the GCC.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80',
    linkedin: '#'
  },
  {
    name: 'Engr. Tariq Al-Ghamdi',
    position: 'Director of Operations (KSA)',
    bio: 'Lead inspector and advisor on pipeline integrity, holding multiple API credentials and directing turnaround inspection logistics.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
    linkedin: '#'
  },
  {
    name: 'Dr. S. K. Nair',
    position: 'Chief Technical Officer (NDT Level III)',
    bio: 'ASNT Level III consultant in UT, RT, MT, PT, and ECT. Pioneer in engineering failure analysis and metallurgical studies.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
    linkedin: '#'
  }
]

export const blogPosts = [
  {
    id: 'post-1',
    title: 'The Critical Role of Advanced NDT in Modern Refinery Turnarounds',
    category: 'Advanced NDT',
    date: 'June 28, 2026',
    author: 'Dr. S. K. Nair',
    excerpt: 'Refinery turnarounds are complex logistics operations. Discover how electromagnetic techniques like RFET and MFL reduce tube bundle assessment times and extend asset lifespan.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '6 min read'
  },
  {
    id: 'post-2',
    title: 'Understanding API 579 Fitness-For-Service (FFS) Guidelines',
    category: 'Asset Integrity',
    date: 'May 15, 2026',
    author: 'Engr. Tariq Al-Ghamdi',
    excerpt: 'An in-depth look at how pressurized structures containing localized corrosion or cracking are assessed for safe operations using API 579-1 standard levels.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '8 min read'
  },
  {
    id: 'post-3',
    title: 'Best Practices for Industrial Coating Inspection: Holiday & Spark Testing',
    category: 'Inspection & Audit',
    date: 'April 02, 2026',
    author: 'Mr. A. K. Mehra',
    excerpt: 'Preventing corrosion starts at the coating layer. Learn why high-voltage holiday testing is vital for identifying microscopic pinholes before equipment deployment.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&h=400&q=80',
    readTime: '5 min read'
  }
]

export const projectsList = [
  {
    id: 'proj-1',
    title: 'Jubail Plant Turnaround Inspection',
    category: 'Inspection',
    client: 'AKMEC Petrochemicals KSA',
    location: 'Al Jubail, KSA',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Complete shutdown planning, VT inspections, and post-turnaround documentation update per API 510/570 requirements for a major processing plant.'
  },
  {
    id: 'proj-2',
    title: 'Cross-Country Gas Pipeline NDT Scope',
    category: 'Advanced NDT',
    client: 'National Gas Utility',
    location: 'Eastern Province, KSA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Ultrasonic thickness mapping, automated weld testing, and magnetic particle scanning across 120km of high-pressure utility pipeline structures.'
  },
  {
    id: 'proj-3',
    title: 'Duplex Stainless Steel Ferrite Audit',
    category: 'Inspection',
    client: 'Offshore Drilling Contractors',
    location: 'Mumbai Port, India',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'On-site ferrite percentage audits and metallographic testing of offshore structural welds in accordance with API 582 standard specifications.'
  },
  {
    id: 'proj-4',
    title: 'Heat Exchanger Eddy Current Tube Scan',
    category: 'Advanced NDT',
    client: 'Chemical Fertilizer Plant',
    location: 'Gujarat, India',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'ECT scans and dummy rod testing of 1,200 non-ferrous condenser tubes to discover wall-loss cracks under 2.0m/s velocities.'
  },
  {
    id: 'proj-5',
    title: 'Fitness-for-Service (FFS) Pressure Vessel Audit',
    category: 'Asset Integrity',
    client: 'Refining Operations Group',
    location: 'Yanbu, KSA',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Critical finite element analysis and structural evaluation of a hydrocracker reactor vessel with corrosion damage per API 579 guidelines.'
  },
  {
    id: 'proj-6',
    title: 'Technical Staffing for Turnaround Program',
    category: 'Manpower',
    client: 'Energy & Power Corporation',
    location: 'Jubail Industrial City, KSA',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&h=600&q=80',
    description: 'Mobilized 70+ certified API inspectors, safety supervisors, and VT technicians for a complex 30-day turnaround assignment.'
  }
]

export const galleryPhotos = [
  {
    title: 'API Tank Inspection Operations',
    category: 'Inspection',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Conventional UT Scan Procedures',
    category: 'Conventional NDT',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Advanced Tube Bundle Analysis',
    category: 'Advanced NDT',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Asset Life Extension Consultations',
    category: 'Asset Integrity',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Offshore Marine Inspection Work',
    category: 'Inspection',
    image: 'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobilized Inspection Team Briefings',
    category: 'Manpower',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Refinery Process Pipe Auditing',
    category: 'Inspection',
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Safety Compliance Checklists',
    category: 'Asset Integrity',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  }
]

export const activeCareers = [
  {
    id: 'job-1',
    title: 'API 510/570 Certified Inspector',
    department: 'Inspection Operations',
    location: 'Al Jubail, KSA',
    type: 'Full-Time',
    description: 'Execute pressure vessel and piping inspections during major refining shutdowns in Saudi Arabia.',
    requirements: [
      'Valid API 510 & API 570 certifications.',
      'Minimum 5 years of experience in oil & gas turnarounds.',
      'Strong knowledge of ASME Section VIII, IX, and B31.3 codes.'
    ]
  },
  {
    id: 'job-2',
    title: 'Advanced NDT Tube Testing Technician',
    department: 'Advanced NDT division',
    location: 'Gujarat, India',
    type: 'Contract (6 Months)',
    description: 'Perform Eddy Current (ECT) and Remote Field (RFET) inspections on heat exchanger tubes.',
    requirements: [
      'ASNT Level II in Electromagnetic Testing (ET) / Eddy Current.',
      'Experience with Olympus MultiScan / MS5800 equipment.',
      'Capable of generating and interpreting tube calibration reports.'
    ]
  },
  {
    id: 'job-3',
    title: 'Asset Integrity Engineer (RBI Specialist)',
    department: 'Consultancy Services',
    location: 'Al Jubail, KSA',
    type: 'Full-Time',
    description: 'Develop Risk-Based Inspection (RBI) scopes and corrosion loop marking diagrams for downstream facilities.',
    requirements: [
      'B.Tech / B.E in Mechanical or Metallurgical Engineering.',
      'Proficiency with RBI software (e.g., APM, Shell-RBI).',
      'Knowledge of API 580 and API 581 standards.'
    ]
  }
]

