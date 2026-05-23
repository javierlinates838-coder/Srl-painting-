export const site = {
  name: "SRL Painting",
  tagline: "Licensed & bonded painting across California",
  description:
    "Professional residential and commercial painting, cabinet refurbishing, and new cabinet finishes. Serving Bakersfield, Shafter, Tehachapi, and Los Angeles.",
  license: "1108313",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
} as const;

export type ProjectCategory = "all" | "exterior" | "interior" | "cabinets" | "commercial";

export const trustBadges = [
  { label: "CSLB Licensed", detail: "Lic. #1108313" },
  { label: "Licensed & Bonded", detail: "Fully insured" },
  { label: "Free Estimates", detail: "No obligation" },
  { label: "4 Service Areas", detail: "Central & SoCal" },
] as const;

export const stats = [
  { value: "C-33", label: "Painting license" },
  { value: "4", label: "Specialties" },
  { value: "4", label: "Cities served" },
  { value: "100%", label: "Satisfaction focus" },
] as const;

export const services = [
  {
    number: "01",
    title: "Residential Painting",
    description:
      "Interior and exterior repaints with thorough prep, premium coatings, and clean job sites from start to finish.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Commercial Painting",
    description:
      "Retail, office, and multi-unit projects completed on schedule with minimal disruption to your operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Cabinet Refurbishing",
    description:
      "Transform existing cabinets with expert sanding, repair, and durable finishes—without a full remodel.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "New Cabinets",
    description:
      "Flawless spray finishes on new cabinet installs for kitchens and baths that look built-in from day one.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const beforeAfterProjects = [
  {
    id: "exterior-bakersfield",
    title: "Exterior repaint — Bakersfield",
    category: "exterior" as const,
    location: "Bakersfield, CA",
    description: "Full exterior refresh with new trim colors and weather-resistant finish.",
    before:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "exterior-modern",
    title: "Modern home exterior",
    category: "exterior" as const,
    location: "Kern County, CA",
    description: "Updated siding and garage door colors for a crisp, modern curb appeal.",
    before:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "interior-living",
    title: "Living room transformation",
    category: "interior" as const,
    location: "Shafter, CA",
    description: "Walls, trim, and ceiling refreshed with smooth, even coverage.",
    before:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: "interior-bedroom",
    title: "Bedroom refresh",
    category: "interior" as const,
    location: "Tehachapi, CA",
    description: "Soft neutral palette with clean trim lines and repaired drywall.",
    before:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1618221195710-dd6b41fa6046?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: "cabinets-kitchen",
    title: "Kitchen cabinet refinishing",
    category: "cabinets" as const,
    location: "Bakersfield, CA",
    description: "Dated oak cabinets transformed with durable spray finish and new hardware.",
    before:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "cabinets-white",
    title: "Cabinet color change",
    category: "cabinets" as const,
    location: "Los Angeles, CA",
    description: "Factory-smooth white finish on existing cabinet boxes and doors.",
    before:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd09?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: "commercial-office",
    title: "Commercial office repaint",
    category: "commercial" as const,
    location: "Los Angeles, CA",
    description: "After-hours commercial interior with low-VOC coatings and fast turnaround.",
    before:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
  {
    id: "commercial-retail",
    title: "Retail storefront",
    category: "commercial" as const,
    location: "Bakersfield, CA",
    description: "Exterior facade and signage area repainted on a tight schedule.",
    before:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    after:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    featured: false,
  },
] as const;

export const galleryCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "cabinets", label: "Cabinets" },
  { id: "commercial", label: "Commercial" },
];

export const serviceAreas = [
  { city: "Bakersfield", region: "Kern County" },
  { city: "Shafter", region: "Kern County" },
  { city: "Tehachapi", region: "Kern County" },
  { city: "Los Angeles", region: "LA County" },
] as const;

export const whyChoose = [
  {
    title: "Licensed & verifiable",
    text: "California C-33 contractor. Look up license #1108313 anytime on the CSLB website.",
  },
  {
    title: "Prep done right",
    text: "Masking, sanding, and surface repair before paint goes on—because finishes only last when prep is solid.",
  },
  {
    title: "Clean job sites",
    text: "We protect your floors, furniture, and landscaping, and leave every space tidy when we're done.",
  },
  {
    title: "Clear communication",
    text: "Scope, timeline, and updates upfront so you're never guessing where your project stands.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Consult & estimate",
    text: "Tell us about your project on Instagram. We'll discuss scope, timeline, and provide a free estimate.",
  },
  {
    step: "02",
    title: "Prep & protect",
    text: "We mask, cover, and prep every surface properly—because great paint starts before the first coat.",
  },
  {
    step: "03",
    title: "Paint & finish",
    text: "Skilled application with quality materials for a smooth, durable finish inside or out.",
  },
  {
    step: "04",
    title: "Final walkthrough",
    text: "We inspect every detail with you and leave your space clean and ready to enjoy.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Professional from start to finish. Our home looks brand new and they left everything spotless.",
    author: "Homeowner",
    location: "Bakersfield, CA",
  },
  {
    quote:
      "Great communication and quality work on our cabinet refresh. Highly recommend SRL Painting.",
    author: "Client",
    location: "Kern County, CA",
  },
  {
    quote:
      "They handled our commercial repaint on time and on budget. Will hire again.",
    author: "Business Owner",
    location: "Los Angeles, CA",
  },
] as const;

export const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Message us on Instagram with photos and a brief description of your project. We'll follow up with a free, no-obligation estimate.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Bakersfield, Shafter, Tehachapi, and Los Angeles. Contact us if you're nearby—we may be able to travel for larger projects.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. SRL Painting holds California C-33 (Painting & Decorating) license #1108313. We are licensed and bonded. Verify our license on the CSLB website anytime.",
  },
  {
    question: "How long does a typical exterior paint job take?",
    answer:
      "Most residential exteriors take several days depending on size, prep needed, and weather. We'll give you a clear timeline during your estimate.",
  },
  {
    question: "Do you paint cabinets without replacing them?",
    answer:
      "Absolutely. Cabinet refurbishing is one of our specialties—we prep, repair, and apply durable finishes that transform existing cabinets.",
  },
  {
    question: "What should I do to get started?",
    answer:
      "Send us a DM on Instagram with your location, what you'd like painted, and any photos. That's the fastest way to get on our schedule.",
  },
] as const;
