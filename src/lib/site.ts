export const site = {
  name: "SRL Painting",
  tagline: "Licensed painting contractor · Kern County & Los Angeles",
  description:
    "Interior, exterior, commercial, and cabinet painting for homeowners and businesses across Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Licensed, bonded, and built on prep work that lasts.",
  heroDescription:
    "Licensed interior, exterior, commercial, and cabinet painting across Kern County and Los Angeles — prep-first work that holds up to California sun.",
  license: "1108313",
  licenseClass: "C-33 Painting & Decorating",
  licenseVerifyUrl:
    "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  instagram: "https://www.instagram.com/srl_painting/",
  instagramHandle: "@srl_painting",
  instagramDm: "https://ig.me/m/srl_painting",
  siteUrl: "https://srl-painting.vercel.app",
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

export const credentials = [
  { label: "License", value: "CSLB #1108313" },
  { label: "Classification", value: "C-33 Painting" },
  { label: "Status", value: "Licensed & Bonded" },
  { label: "Estimates", value: "Always Free" },
] as const;

export const pillars = [
  {
    title: "Prep before paint",
    text: "We fix cracks, sand surfaces, prime properly, and mask everything that shouldn't get color. That's why our finishes hold up to California sun and daily wear.",
  },
  {
    title: "Clean, protected job sites",
    text: "Floors covered, landscaping protected, tools organized. When we leave, your space is ready to use — not a mess to clean up.",
  },
  {
    title: "Clear scope & pricing upfront",
    text: "You know what's included before we start. No surprise add-ons, no vague quotes — just honest work from a licensed crew you can trust.",
  },
] as const;

export const services = [
  {
    id: "residential",
    title: "Residential Painting",
    summary: "Homes that look fresh inside and out.",
    details: [
      "Full exterior repaints with trim, fascia, and garage doors",
      "Interior walls, ceilings, and baseboards",
      "Drywall repair and surface prep included",
      "Color consultation to match your vision",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    summary: "Minimal downtime for your business.",
    details: [
      "Retail, office, and industrial spaces",
      "After-hours and weekend scheduling available",
      "Low-VOC options for occupied buildings",
      "Phased work plans for multi-unit properties",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinet Refurbishing",
    summary: "New-kitchen look without the demolition.",
    details: [
      "Spray-finish on existing cabinet boxes and doors",
      "Hardware updates and minor repairs",
      "Durable coatings built for kitchens and baths",
      "Fraction of the cost of full replacement",
    ],
  },
  {
    id: "new-cabinets",
    title: "New Cabinet Finishing",
    summary: "Factory-smooth results on new installs.",
    details: [
      "Finish work on new cabinet installations",
      "Even coverage on doors, frames, and panels",
      "Coordinated with your contractor or builder",
      "Built-in quality from day one",
    ],
  },
] as const;

export const beforeAfterProjects = [
  {
    id: "exterior",
    title: "Exterior Transformation",
    category: "Exterior",
    location: "Kern County, CA",
    scope: "Off-white body · Bold trim · Full prep & prime",
    description:
      "We revitalized this home with a sleek off-white exterior and bold trim accents — full surface prep, prime, and a finish built for Central Valley sun.",
    before: "/projects/exterior-before.jpg",
    after: "/projects/exterior-after.jpg",
  },
  {
    id: "cabinets",
    title: "Kitchen Cabinet Refinishing",
    category: "Cabinets",
    location: "Kern County, CA",
    scope: "Existing cabinets · Spray finish · Hardware refresh",
    description:
      "This kitchen was refinished from dated wood tones to a bright, durable spray finish — same layout, completely transformed without a full remodel.",
    before: "/projects/cabinets-before.jpg",
    after: "/projects/cabinets-after.jpg",
  },
  {
    id: "interior",
    title: "Living Space Refresh",
    category: "Interior",
    location: "Kern County, CA",
    scope: "Walls & trim · New color scheme · Clean finish",
    description:
      "A fresh color scheme and smooth second-coat finish brought this living space back to life — clean lines, even coverage, and move-in ready results.",
    before: "/projects/interior-before.jpg",
    after: "/projects/interior-after.jpg",
  },
  {
    id: "lake-isabella",
    title: "Lake Isabella Full Exterior",
    category: "Exterior",
    location: "Lake Isabella, CA",
    scope: "Full exterior · Two-tone color · Stucco repair",
    description:
      "This mountain home got a full exterior makeover — two-tone color scheme, minor stucco repair, and a durable finish built for high-elevation weather.",
    before: "/projects/lake-before.jpg",
    after: "/projects/lake-after.jpg",
  },
  {
    id: "gazebo",
    title: "Gazebo Stain & Seal",
    category: "Exterior",
    location: "Kern County, CA",
    scope: "Sherwin-Williams SuperDeck · Semi-transparent stain",
    description:
      "We restored this gazebo with Sherwin-Williams SuperDeck semi-transparent stain — protected from sun and moisture while keeping the natural wood character.",
    before: "/projects/gazebo-before.jpg",
    after: "/projects/gazebo-after.jpg",
  },
] as const;

export const serviceAreas = [
  { city: "Bakersfield", note: "Kern County HQ" },
  { city: "Shafter", note: "Residential & ag properties" },
  { city: "Tehachapi", note: "Mountain homes & cabins" },
  { city: "Los Angeles", note: "Commercial & residential" },
  { city: "Lake Isabella", note: "Mountain & lake homes" },
] as const;

export const heroStats = [
  { n: "C-33", l: "Licensed & bonded" },
  { n: String(serviceAreas.length), l: "Cities served" },
  { n: "Free", l: "Estimates" },
] as const;

export const process = [
  {
    num: "01",
    title: "Tell us about the project",
    text: "Send photos and details on Instagram. We ask the right questions so your estimate reflects the real scope — not a ballpark guess.",
  },
  {
    num: "02",
    title: "On-site or virtual walkthrough",
    text: "We assess surfaces, prep needs, and timeline. You get a written scope and price before any work begins.",
  },
  {
    num: "03",
    title: "Prep, paint, perfect",
    text: "Our crew handles masking, repairs, priming, and application. We use quality coatings selected for your specific surfaces.",
  },
  {
    num: "04",
    title: "Final walk & cleanup",
    text: "We walk the job with you, touch up anything needed, and leave the site clean. Your satisfaction is the last step.",
  },
] as const;

export const reviews = [
  {
    quote:
      "They repainted our entire exterior in Bakersfield — trim, stucco, everything. Showed up when they said they would, kept the yard clean, and the house looks brand new.",
    name: "Maria G.",
    detail: "Exterior repaint · Bakersfield",
    rating: 5,
  },
  {
    quote:
      "Our kitchen cabinets were stuck in the 90s. SRL refinished them white and they look like a completely different kitchen. Saved us thousands vs. replacing.",
    name: "James T.",
    detail: "Cabinet refinishing · Shafter",
    rating: 5,
  },
  {
    quote:
      "Had our office repainted over a weekend so we didn't lose business days. Professional crew, fair price, and the finish still looks sharp months later.",
    name: "David R.",
    detail: "Commercial interior · Los Angeles",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "How do I get a free estimate?",
    a: `Message us on Instagram at ${site.instagramHandle} with photos of the areas you want painted and a brief description. Include your city and whether it's interior, exterior, or cabinets. We typically respond within one business day.`,
  },
  {
    q: "Are you a licensed contractor?",
    a: "Yes. SRL Painting holds California C-33 (Painting & Decorating) license #1108313. We are licensed and bonded. You can verify our license anytime on the California CSLB website.",
  },
  {
    q: "What cities do you serve?",
    a: "Our primary service areas are Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. For larger commercial or multi-property projects, we may travel elsewhere in Kern County or Southern California. Just ask.",
  },
  {
    q: "Do you handle both interior and exterior work?",
    a: "Yes. We do full interior repaints, exterior repaints, commercial projects, and cabinet refinishing. Many clients hire us for one project and come back for others.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A single room might take a day or two. A full exterior usually runs several days with prep. We give you a realistic timeline in your estimate — and we stick to it.",
  },
] as const;
