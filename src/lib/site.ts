export const site = {
  name: "SRL Painting",
  tagline: "Licensed & bonded · California C-33 contractor",
  description:
    "Residential and commercial painting, cabinet refurbishing, and new cabinet finishes across Bakersfield, Shafter, Tehachapi, and Los Angeles.",
  license: "1108313",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
} as const;

export const trustItems = [
  "CSLB Lic. #1108313",
  "Licensed & Bonded",
  "Free Estimates",
  "Residential & Commercial",
  "Cabinet Specialists",
  "4 Service Areas",
] as const;

export const services = [
  {
    title: "Residential Painting",
    description:
      "Interior and exterior repaints with full prep, premium coatings, and spotless cleanup.",
    icon: "home",
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail, and multi-unit properties — on schedule, minimal disruption.",
    icon: "building",
  },
  {
    title: "Cabinet Refurbishing",
    description:
      "Sand, repair, and refinish existing cabinets without a full kitchen remodel.",
    icon: "cabinet",
  },
  {
    title: "New Cabinets",
    description:
      "Factory-smooth spray finishes on new installs for a built-in look from day one.",
    icon: "sparkle",
  },
] as const;

/** Only 3 showcase projects — swap with real Instagram before/after pairs */
export const beforeAfterProjects = [
  {
    id: "exterior",
    title: "Exterior Repaint",
    category: "Exterior",
    location: "Bakersfield, CA",
    description:
      "Full exterior refresh — new body and trim colors, weather-sealed finish, clean lines on every edge.",
    before:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cabinets",
    title: "Cabinet Refinishing",
    category: "Cabinets",
    location: "Kern County, CA",
    description:
      "Dated oak transformed with durable spray finish and updated hardware — fraction of replacement cost.",
    before:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "interior",
    title: "Interior Transformation",
    category: "Interior",
    location: "Los Angeles, CA",
    description:
      "Walls, trim, and ceiling refreshed with smooth coverage and repaired surfaces throughout.",
    before:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

export const serviceAreas = [
  "Bakersfield",
  "Shafter",
  "Tehachapi",
  "Los Angeles",
] as const;

export const process = [
  {
    step: "01",
    title: "Free consultation",
    text: "Message us on Instagram with photos and project details. We respond fast with scope and pricing.",
  },
  {
    step: "02",
    title: "Surface prep",
    text: "Masking, sanding, repairs, and priming — the foundation every lasting finish depends on.",
  },
  {
    step: "03",
    title: "Expert application",
    text: "Premium products applied by skilled painters for even coverage inside or out.",
  },
  {
    step: "04",
    title: "Walkthrough & cleanup",
    text: "Final inspection together. We leave your space cleaner than we found it.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Professional from start to finish. Our home looks brand new and they left everything spotless.",
    author: "Homeowner",
    location: "Bakersfield, CA",
    rating: 5,
  },
  {
    quote:
      "Great communication and quality cabinet work. Already recommended them to neighbors.",
    author: "Client",
    location: "Kern County, CA",
    rating: 5,
  },
  {
    quote:
      "Commercial repaint done on time, on budget. Will absolutely hire again.",
    author: "Business Owner",
    location: "Los Angeles, CA",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "How do I get a free estimate?",
    a: "DM us on Instagram (@srl_painting) with photos and a brief description. That's the fastest way — we typically respond within 24 hours.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. California C-33 Painting & Decorating, license #1108313. Licensed, bonded, and verifiable on the CSLB website anytime.",
  },
  {
    q: "What areas do you cover?",
    a: "Bakersfield, Shafter, Tehachapi, and Los Angeles. Reach out if you're nearby — we may travel for larger projects.",
  },
  {
    q: "Do you refinish cabinets without replacing them?",
    a: "Yes — cabinet refurbishing is a core service. We prep, repair, and apply durable finishes that transform existing cabinets.",
  },
] as const;
