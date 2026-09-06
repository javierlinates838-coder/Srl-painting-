export const site = {
  name: "SRL Painting",
  tagline: "Bakersfield & surrounding areas",
  description:
    "Residential and commercial painting, cabinet refurbishing, and new cabinet finishing. Licensed C-33 crew serving Bakersfield, Kern County, and Los Angeles.",
  heroHeadline: "The finish",
  heroHeadlineLine2: "starts before",
  heroHeadlineLine3: "the paint.",
  heroDescription:
    "Residential, commercial, and cabinet work — interior, exterior, and re-paints across Bakersfield and Southern California.",
  phone: "(661) 595-7530",
  phoneTel: "6615957530",
  license: "1108313",
  licenseClass: "C-33 Painting & Decorating",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
  instagramDm: "https://ig.me/m/srl_painting",
  siteUrl: "https://srl-painting.vercel.app",
} as const;

/** Desktop header — compact primary nav */
export const desktopNavLinks = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#about", label: "About", id: "about" },
] as const;

/** Mobile sheet — primary nav + contact paths */
export const mobileNavLinks = [
  ...desktopNavLinks,
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

/** Footer navigation */
export const footerNavLinks = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#contact", label: "Contact", id: "contact" },
  { href: "#contact", label: "Estimate", id: "estimate" },
] as const;

/** @deprecated Use desktopNavLinks / mobileNavLinks — kept for intersection observer */
export const navLinks = mobileNavLinks;

/** Verified business credentials for the credentials section */
export const businessCredentials = [
  { id: "class", label: "C-33", value: "Painting Contractor" },
  { id: "cslb", label: "CSLB", value: `#${site.license}` },
  { id: "bonded", label: "Bonded", value: "Yes" },
  { id: "estimates", label: "Estimates", value: "Complimentary" },
] as const;

export const services = [
  {
    id: "exterior",
    index: "01",
    title: "Exterior",
    short: "Exterior",
    statement: "Built for exposed surfaces.",
    description:
      "Exterior prep and painting for residential properties in the Central Valley.",
    scopeLabel: "Surfaces",
    scope: ["Stucco", "Trim and fascia", "Garage doors"],
    details: [
      "Scrape-and-prime on weathered areas",
      "Body, trim, and accent colors",
      "Drywall and stucco repair in scope",
    ],
  },
  {
    id: "interior",
    index: "02",
    title: "Interior",
    short: "Interior",
    statement: "Rooms finished, ready to move back in.",
    description: "Interior walls, ceilings, and trim with floors and furniture protected.",
    scopeLabel: "Areas",
    scope: ["Walls and ceilings", "Baseboards", "Accent walls"],
    details: [
      "Clean cut lines throughout",
      "Furniture and floors covered",
      "Color guidance on request",
    ],
  },
  {
    id: "cabinets",
    index: "03",
    title: "Cabinets",
    short: "Cabinets",
    statement: "Spray finish on existing boxes.",
    description: "Kitchen and bath cabinet refinishing on doors and frames.",
    scopeLabel: "Scope",
    scope: ["Doors and drawer fronts", "Frames and boxes", "Hardware refresh"],
    details: [
      "Factory-smooth spray application",
      "Minor repairs before coating",
      "Coatings rated for kitchens and baths",
    ],
  },
  {
    id: "commercial",
    index: "04",
    title: "Commercial",
    short: "Commercial",
    statement: "Scheduled around your operation.",
    description: "Retail, office, and industrial painting in Kern County.",
    scopeLabel: "Scheduling",
    scope: ["After-hours work", "Weekend availability", "Phased multi-unit plans"],
    details: [
      "Low-VOC options for occupied buildings",
      "Work planned around business hours",
      "Coordinated with property managers",
    ],
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const prepDetails = [
  { label: "Masking", text: "Floors, fixtures, and landscaping protected before work begins." },
  { label: "Priming", text: "Primer where surfaces need it — not skipped to save time." },
  { label: "Surface prep", text: "Scraping, sanding, and repairs before any finish coat." },
  { label: "Repairs", text: "Drywall and stucco addressed as part of scope." },
  { label: "Clean edges", text: "Cut lines and even coverage on walls, trim, and ceilings." },
  { label: "Coverage", text: "Second coats where the finish demands it." },
] as const;

export const colorDirections = [
  {
    id: "warm",
    label: "Warm",
    description: "Soft ivory and honey undertones. Welcoming without feeling dated.",
    panels: ["#f4efe6", "#e8dcc8", "#d4c4a8", "#b8a088"],
  },
  {
    id: "neutral",
    label: "Neutral",
    description: "Balanced stone and greige tones. Works with any architecture.",
    panels: ["#ebe8e2", "#d5d0c8", "#b8b2a8", "#8a847c"],
  },
  {
    id: "earth",
    label: "Earth",
    description: "Terracotta, clay, and muted olive. Grounded California warmth.",
    panels: ["#d4c4a8", "#a89078", "#7a6b58", "#4a4238"],
  },
  {
    id: "dark",
    label: "Dark",
    description: "Charcoal, deep navy, and near-black. Bold contrast and depth.",
    panels: ["#3a3835", "#2a2826", "#1a1917", "#151515"],
  },
  {
    id: "clean-white",
    label: "Clean White",
    description: "Crisp bright whites with cool undertones. Modern and airy.",
    panels: ["#faf9f6", "#f0eeea", "#e8e6e1", "#d9d6d0"],
  },
] as const;

export const serviceAreas = [
  { city: "Bakersfield", note: "Home base" },
  { city: "Shafter", note: "Residential & agricultural" },
  { city: "Tehachapi", note: "Mountain properties" },
  { city: "Lake Isabella", note: "Lake & mountain homes" },
  { city: "Los Angeles", note: "Commercial & residential" },
] as const;

export const process = [
  {
    num: "01",
    title: "Walkthrough",
    text: "We understand the space and scope. You get a written scope and firm price.",
  },
  {
    num: "02",
    title: "Preparation",
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
      "Steven took his time on our whole interior and cabinets — degreasing, sanding, clean lines, and he helped us pick colors we actually love.",
    name: "Michael Moreno",
    detail: "Interior & cabinets · Bakersfield",
    source: "Google",
  },
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
    q: "How do estimates work?",
    a: `Call ${site.phone}, use the estimate form on this page, or message ${site.instagramHandle} on Instagram with photos and a short description. We usually respond within one business day.`,
  },
  {
    q: "What areas do you serve?",
    a: "Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Larger commercial jobs elsewhere in Kern County or Southern California — ask.",
  },
  {
    q: "Are you licensed?",
    a: `Yes. C-33 Painting & Decorating, license #${site.license}, bonded. License details are available through the California CSLB.`,
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
  { id: "phone", label: "Phone call" },
  { id: "text", label: "Text message" },
  { id: "instagram", label: "Instagram DM" },
] as const;

export const quoteServiceOptions = [
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "cabinets", label: "Cabinets" },
  { id: "commercial", label: "Commercial" },
  { id: "other", label: "Other" },
] as const;

export const estimatorTypes = [
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "cabinets", label: "Cabinets" },
] as const;

export const estimatorSizes = [
  { id: "small", label: "Small", hint: "1–2 rooms or single elevation" },
  { id: "medium", label: "Medium", hint: "Several rooms or full exterior" },
  { id: "large", label: "Large", hint: "Whole home or multi-building" },
] as const;

export const estimatorConditions = [
  { id: "good", label: "Good condition", hint: "Minor touch-ups needed" },
  { id: "fair", label: "Fair condition", hint: "Some prep required" },
  { id: "heavy", label: "Heavy prep", hint: "Peeling, damage, or bare surfaces" },
] as const;

export const estimatorTiming = [
  { id: "flexible", label: "Flexible" },
  { id: "soon", label: "Within 30 days" },
  { id: "urgent", label: "As soon as possible" },
] as const;
