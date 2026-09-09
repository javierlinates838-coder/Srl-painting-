export const site = {
  name: "SRL Painting",
  tagline: "Bakersfield & surrounding areas",
  description:
    "Residential and commercial painting, cabinet refurbishing, and new cabinet finishing. Licensed C-33 crew serving Bakersfield, Kern County, and Los Angeles.",
  heroHeadline: "Good painting",
  heroHeadlineAccent: "starts before the paint.",
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
  googleReviews:
    "https://www.google.com/maps/place/SRL+Painting/@35.2935235,-118.9054431,9z/data=!4m8!3m7!1s0x6254c68840d28bd5:0xe19578bc03c18746!8m2!3d35.2935235!4d-118.905443!9m1!1b1!16s%2Fg%2F11xrl4r8p_?entry=ttu",
  instagramDm: "https://ig.me/m/srl_painting",
  siteUrl: "https://srl-painting.vercel.app",
} as const;

export const navLinks = [
  { href: "#services", label: "Services", id: "services", num: "01" },
  { href: "#process", label: "Process", id: "process", num: "02" },
  { href: "#areas", label: "Areas", id: "areas", num: "03" },
  { href: "#reviews", label: "Reviews", id: "reviews", num: "04" },
  { href: "#faq", label: "FAQ", id: "faq", num: "05" },
  { href: "#contact", label: "Contact", id: "contact", num: "06" },
] as const;

export const trustFacts = [
  { label: "C-33", detail: "Painting Contractor" },
  { label: "CSLB", detail: `#${site.license}` },
  { label: "Local", detail: "Bakersfield" },
  { label: "Estimates", detail: "Complimentary" },
] as const;

export const paintingOptions = [
  { id: "exterior", label: "House Exterior", short: "Exterior" },
  { id: "interior", label: "Interior", short: "Interior" },
  { id: "cabinets", label: "Cabinets", short: "Cabinets" },
  { id: "commercial", label: "Commercial", short: "Commercial" },
  { id: "other", label: "Other", short: "Other" },
] as const;

export const services = [
  {
    id: "exterior",
    index: "01",
    title: "Exterior Painting",
    summary:
      "Stucco, trim, fascia, garage doors — built for Central Valley heat.",
    details: [
      "Full scrape-and-prime on weathered surfaces",
      "Body, trim, and accent color coordination",
      "Drywall and stucco repair included in scope",
    ],
  },
  {
    id: "interior",
    index: "02",
    title: "Interior Painting",
    summary: "Rooms finished with clean lines and move-in-ready cleanup.",
    details: [
      "Walls, ceilings, baseboards, accent walls",
      "Furniture and floors protected throughout",
      "Color guidance when you want a second opinion",
    ],
  },
  {
    id: "cabinets",
    index: "03",
    title: "Cabinet Finishing",
    summary: "Spray refinishing on existing kitchen and bath boxes.",
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
    details: [
      "After-hours and weekend scheduling",
      "Low-VOC options for occupied buildings",
      "Phased plans for multi-unit properties",
    ],
  },
] as const;

export const prepDetails = [
  {
    label: "Masking",
    text: "Floors, fixtures, and landscaping protected before work begins.",
  },
  {
    label: "Priming",
    text: "Primer where surfaces need it — not skipped to save time.",
  },
  {
    label: "Surface prep",
    text: "Scraping, sanding, and repairs before any finish coat.",
  },
  { label: "Repairs", text: "Drywall and stucco addressed as part of scope." },
  {
    label: "Clean edges",
    text: "Cut lines and even coverage on walls, trim, and ceilings.",
  },
  { label: "Coverage", text: "Second coats where the finish demands it." },
] as const;

export const colorDirections = [
  {
    id: "warm",
    label: "Warm",
    description:
      "Soft ivory and honey undertones. Welcoming without feeling dated.",
    panels: ["#f4efe6", "#e8dcc8", "#d4c4a8", "#b8a088"],
  },
  {
    id: "neutral",
    label: "Neutral",
    description:
      "Balanced stone and greige tones. Works with any architecture.",
    panels: ["#ebe8e2", "#d5d0c8", "#b8b2a8", "#8a847c"],
  },
  {
    id: "earth",
    label: "Earth",
    description:
      "Terracotta, clay, and muted olive. Grounded California warmth.",
    panels: ["#d4c4a8", "#a89078", "#7a6b58", "#4a4238"],
  },
  {
    id: "dark",
    label: "Dark",
    description:
      "Charcoal, deep navy, and near-black. Bold contrast and depth.",
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
    text: "We discuss your space, preparation needs, and timing so the proposed scope and pricing can be put in writing.",
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

export const faqs = [
  {
    q: "How do estimates work?",
    a: `Call ${site.phone}, use the estimate form, or message ${site.instagramHandle} on Instagram. An inquiry is free and does not book work or create a construction contract. Scope, pricing, and scheduling must be confirmed separately in writing.`,
  },
  {
    q: "What areas do you serve?",
    a: "Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Larger commercial jobs elsewhere in Kern County or Southern California — ask.",
  },
  {
    q: "Are you licensed?",
    a: `SRL Painting lists California C-33 Painting & Decorating license #${site.license}. Check the current license status and business details directly with CSLB before hiring.`,
  },
  {
    q: "Interior and exterior?",
    a: "Interior and exterior painting, commercial painting, and cabinet finishing are available. The services and preparation included in your project are set out in your written scope.",
  },
  {
    q: "How long does it take?",
    a: "Timing depends on the scope, surface condition, drying time, weather, and access. A project-specific schedule is discussed before work is booked; website descriptions are not guaranteed completion dates.",
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
  {
    id: "heavy",
    label: "Heavy prep",
    hint: "Peeling, damage, or bare surfaces",
  },
] as const;

export const estimatorTiming = [
  { id: "flexible", label: "Flexible" },
  { id: "soon", label: "Within 30 days" },
  { id: "urgent", label: "As soon as possible" },
] as const;
