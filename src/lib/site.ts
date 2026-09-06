export const site = {
  name: "SRL Painting",
  tagline: "C-33 · Kern County & Los Angeles",
  description:
    "Interior, exterior, commercial, and cabinet painting by a licensed California crew. Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles.",
  heroHeadline: "A better finish",
  heroHeadlineAccent: "starts before the paint.",
  heroDescription:
    "Interior, exterior, cabinets, and commercial work — scoped in writing, prepped properly, finished for California sun and mountain weather.",
  license: "1108313",
  licenseClass: "C-33 Painting & Decorating",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
  instagramDm: "https://ig.me/m/srl_painting",
  siteUrl: "https://srl-painting.vercel.app",
  colorExplorerEnabled: false,
} as const;

export const navLinks = [
  { href: "#work", label: "Our Work", id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#reviews", label: "Reviews", id: "reviews" },
  { href: "#about", label: "About", id: "about" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const pillars = [
  {
    title: "Surface prep before color",
    text: "Cracks repaired, old paint scraped, primer where it belongs. We spend more time on what goes underneath than what goes on top.",
  },
  {
    title: "Your house stays yours",
    text: "Floors covered, plants protected, tools off the lawn at the end of every day. When we leave, you shouldn't be reaching for a vacuum.",
  },
  {
    title: "The price you agree to",
    text: "Written scope. Fixed number. No add-ons mid-job because we 'found something.' If the scope changes, we talk first.",
  },
] as const;

export const craftDetails = [
  {
    label: "Scrape & prime",
    caption: "Full exterior prep before a single finish coat.",
    image: "/projects/exterior-before.jpg",
    aspect: "tall" as const,
  },
  {
    label: "Clean cut lines",
    caption: "Walls, trim, and ceilings with even second coats.",
    image: "/projects/interior-after.jpg",
    aspect: "wide" as const,
  },
  {
    label: "Spray cabinet finish",
    caption: "Existing boxes refinished — no demolition.",
    image: "/projects/cabinets-after.jpg",
    aspect: "square" as const,
  },
  {
    label: "Masked & protected",
    caption: "Floors, landscaping, and fixtures covered throughout.",
    image: "/projects/interior-before.jpg",
    aspect: "wide" as const,
  },
  {
    label: "Stain & seal",
    caption: "SuperDeck semi-transparent on exterior wood.",
    image: "/projects/gazebo-after.jpg",
    aspect: "tall" as const,
  },
  {
    label: "Mountain-ready exterior",
    caption: "Two-tone scheme with stucco repair at elevation.",
    image: "/projects/lake-after.jpg",
    aspect: "square" as const,
  },
] as const;

export const services = [
  {
    id: "exterior",
    index: "01",
    title: "Exterior",
    summary: "Stucco, trim, fascia, garage doors — built for Central Valley heat.",
    image: "/projects/exterior-after.jpg",
    details: [
      "Full scrape-and-prime on weathered surfaces",
      "Body, trim, and accent color coordination",
      "Drywall and stucco repair included in scope",
    ],
  },
  {
    id: "interior",
    index: "02",
    title: "Interior",
    summary: "Rooms finished with clean lines and move-in-ready cleanup.",
    image: "/projects/interior-after.jpg",
    details: [
      "Walls, ceilings, baseboards, accent walls",
      "Furniture and floors protected throughout",
      "Color guidance when you want a second opinion",
    ],
  },
  {
    id: "cabinets",
    index: "03",
    title: "Cabinets",
    summary: "Spray refinishing on existing kitchen and bath boxes.",
    image: "/projects/cabinets-after.jpg",
    details: [
      "Factory-smooth spray on doors and frames",
      "Hardware refresh and minor repairs",
      "Coatings rated for kitchens and baths",
    ],
  },
  {
    id: "commercial",
    index: "04",
    title: "Commercial",
    summary: "Retail, office, and industrial — scheduled around your hours.",
    image: "/projects/interior-after.jpg",
    details: [
      "After-hours and weekend scheduling",
      "Low-VOC options for occupied buildings",
      "Phased plans for multi-unit properties",
    ],
  },
] as const;

export const beforeAfterProjects = [
  {
    id: "exterior",
    index: "01",
    title: "Kern County exterior",
    category: "Residential exterior",
    location: "Kern County, CA",
    scope: "Off-white body · Bold trim · Full prep & prime",
    description: "Off-white body, bold trim, full scrape-and-prime. Built for Central Valley sun.",
    before: "/projects/exterior-before.jpg",
    after: "/projects/exterior-after.jpg",
    layout: "wide" as const,
  },
  {
    id: "cabinets",
    index: "02",
    title: "Kitchen cabinet refinishing",
    category: "Cabinets",
    location: "Kern County, CA",
    scope: "Spray finish · Hardware refresh",
    description: "Dated wood tones to a bright spray finish. Same layout, no demolition.",
    before: "/projects/cabinets-before.jpg",
    after: "/projects/cabinets-after.jpg",
    layout: "offset-right" as const,
  },
  {
    id: "interior",
    index: "03",
    title: "Living room refresh",
    category: "Interior",
    location: "Kern County, CA",
    scope: "Walls & trim · New palette",
    description: "New color throughout. Clean cut lines, even second coat.",
    before: "/projects/interior-before.jpg",
    after: "/projects/interior-after.jpg",
    layout: "wide" as const,
  },
  {
    id: "lake-isabella",
    index: "04",
    title: "Lake Isabella exterior",
    category: "Exterior",
    location: "Lake Isabella, CA",
    scope: "Two-tone · Stucco repair",
    description: "Mountain home, two-tone scheme, minor stucco work.",
    before: "/projects/lake-before.jpg",
    after: "/projects/lake-after.jpg",
    layout: "offset-left" as const,
  },
  {
    id: "gazebo",
    index: "05",
    title: "Gazebo stain",
    category: "Exterior wood",
    location: "Kern County, CA",
    scope: "SuperDeck semi-transparent",
    description: "Sherwin-Williams SuperDeck semi-transparent. Wood grain still visible.",
    before: "/projects/gazebo-before.jpg",
    after: "/projects/gazebo-after.jpg",
    layout: "wide" as const,
  },
] as const;

export const heroProject = beforeAfterProjects[0];

export const serviceAreas = [
  { city: "Bakersfield", note: "Home base" },
  { city: "Shafter", note: "Residential & agricultural" },
  { city: "Tehachapi", note: "Mountain properties" },
  { city: "Los Angeles", note: "Commercial & residential" },
  { city: "Lake Isabella", note: "Lake & mountain homes" },
] as const;

export const process = [
  {
    num: "01",
    title: "Walkthrough",
    text: "We assess surfaces, prep needs, and timeline. You get a written scope and firm price.",
  },
  {
    num: "02",
    title: "Prep",
    text: "Masking, repairs, scraping, and primer — the work that determines how long the finish lasts.",
  },
  {
    num: "03",
    title: "Paint",
    text: "Coats applied with products selected for your surfaces and climate.",
  },
  {
    num: "04",
    title: "Final walkthrough",
    text: "Room by room with you. Touch-ups as needed. Site left clean.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Repainted the whole exterior — stucco, trim, all of it. Yard stayed clean. House looks like someone actually cared.",
    name: "Maria G.",
    detail: "Exterior · Bakersfield",
  },
  {
    quote:
      "Cabinets from the nineties. Now they're white and smooth. Saved us a full kitchen remodel.",
    name: "James T.",
    detail: "Cabinets · Shafter",
  },
  {
    quote:
      "Office done over a weekend. Open Monday morning. Still looks good six months later.",
    name: "David R.",
    detail: "Commercial · Los Angeles",
  },
] as const;

export const faqs = [
  {
    q: "How do I get an estimate?",
    a: `Use the estimate form on this page, or message ${site.instagramHandle} on Instagram with photos and a short description — interior, exterior, or cabinets, plus your city. We usually respond within one business day.`,
  },
  {
    q: "Are you licensed?",
    a: `Yes. C-33 Painting & Decorating, license #${site.license}, bonded. License details are available through the California CSLB.`,
  },
  {
    q: "Where do you work?",
    a: "Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Larger commercial jobs elsewhere in Kern County or Southern California — ask.",
  },
  {
    q: "Interior and exterior?",
    a: "Both. Plus commercial and cabinets. Most clients start with one room or one elevation and call us back for the rest.",
  },
  {
    q: "How long does it take?",
    a: "Depends on scope. A room: a day or two. A full exterior: several days with proper prep. We tell you upfront and hold to it.",
  },
] as const;

export const contactMethods = [
  { id: "instagram", label: "Instagram DM" },
  { id: "form", label: "Email or phone from the form" },
] as const;

export const quoteServiceOptions = [
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "cabinets", label: "Cabinets" },
  { id: "commercial", label: "Commercial" },
] as const;

export const colorMoods = [
  { id: "warm", label: "Warm white", swatch: "#f4efe6", sample: "/projects/interior-after.jpg" },
  { id: "natural", label: "Natural", swatch: "#d4c4a8", sample: "/projects/gazebo-after.jpg" },
  { id: "modern", label: "Modern", swatch: "#e8e6e1", sample: "/projects/cabinets-after.jpg" },
  { id: "bold", label: "Bold", swatch: "#8b1a3a", sample: "/projects/exterior-after.jpg" },
] as const;
