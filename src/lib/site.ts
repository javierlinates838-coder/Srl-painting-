export const site = {
  name: "SRL Painting",
  tagline: "Licensed C-33 contractor · Kern County & Los Angeles",
  description:
    "Premium interior, exterior, commercial, and cabinet painting across Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Licensed, bonded, and obsessed with prep work that lasts decades — not just until the warranty expires.",
  heroDescription:
    "We don't just slap on a coat of paint. Every project starts with meticulous surface prep, premium coatings, and a crew that treats your home like their own — from Bakersfield to LA.",
  heroHeadline: "Finishes that",
  heroHeadlineAccent: "last a lifetime.",
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
    title: "Prep before paint — always",
    text: "Cracks repaired, surfaces sanded, primed properly, and everything masked before a single drop of color. That's why our finishes survive Central Valley heat, mountain winters, and years of daily wear.",
  },
  {
    title: "Your space, protected",
    text: "Floors covered, landscaping shielded, furniture moved with care. When we pack up, your home is move-in ready — not a disaster zone waiting for you to clean.",
  },
  {
    title: "Honest quotes, zero surprises",
    text: "Written scope. Clear pricing. No hidden fees, no vague ballparks. You'll know exactly what you're getting before we pick up a brush.",
  },
] as const;

export const services = [
  {
    id: "residential",
    title: "Residential Painting",
    summary: "Homes that turn heads — inside and out.",
    details: [
      "Full exterior repaints: stucco, trim, fascia, garage doors",
      "Interior walls, ceilings, baseboards, and accent walls",
      "Drywall repair and surface prep included in every job",
      "Color consultation to nail your vision the first time",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    summary: "Professional finishes without shutting down your business.",
    details: [
      "Retail storefronts, offices, warehouses, and industrial",
      "After-hours and weekend scheduling to minimize downtime",
      "Low-VOC coatings for occupied buildings",
      "Phased work plans for multi-unit and multi-floor properties",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinet Refurbishing",
    summary: "A brand-new kitchen for a fraction of the cost.",
    details: [
      "Factory-smooth spray finish on existing boxes and doors",
      "Hardware updates, hinge adjustments, and minor repairs",
      "Durable coatings engineered for kitchens and bathrooms",
      "Save thousands vs. full cabinet replacement",
    ],
  },
  {
    id: "new-cabinets",
    title: "New Cabinet Finishing",
    summary: "Showroom-quality finish on day one.",
    details: [
      "Finish work on new cabinet installations and builds",
      "Even, flawless coverage on doors, frames, and panels",
      "Coordinated with your contractor or builder timeline",
      "Built-in quality from the very first coat",
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
      "A complete exterior revitalization — off-white body with bold trim accents. Full surface prep, prime, and a finish engineered to withstand Central Valley sun for years.",
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
      "Dated wood tones transformed into a bright, durable spray finish. Same kitchen layout — completely different feel. No demolition required.",
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
      "A fresh color palette and flawless second-coat finish brought this living space back to life. Clean lines, even coverage, move-in ready.",
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
      "A mountain home makeover — two-tone color scheme, minor stucco repair, and a durable finish built for high-elevation weather swings.",
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
      "Restored with Sherwin-Williams SuperDeck semi-transparent stain — protected from sun and moisture while preserving the natural wood character.",
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
    title: "Tell us about your project",
    text: "DM us on Instagram with photos and details. We ask the right questions so your estimate reflects real scope — not a guess.",
  },
  {
    num: "02",
    title: "On-site walkthrough",
    text: "We assess surfaces, prep needs, and timeline. You get a written scope and firm price before any work begins.",
  },
  {
    num: "03",
    title: "Prep, paint, perfect",
    text: "Masking, repairs, priming, and application — using coatings selected specifically for your surfaces and climate.",
  },
  {
    num: "04",
    title: "Final walk & cleanup",
    text: "We walk the job with you, touch up anything needed, and leave the site spotless. Your satisfaction is the last step.",
  },
] as const;

export const reviews = [
  {
    quote:
      "They repainted our entire exterior in Bakersfield — trim, stucco, everything. Showed up on time, kept the yard immaculate, and the house looks brand new. Neighbors keep asking who we hired.",
    name: "Maria G.",
    detail: "Exterior repaint · Bakersfield",
    rating: 5,
  },
  {
    quote:
      "Our kitchen cabinets were stuck in the 90s. SRL refinished them white and they look like a completely different kitchen. Saved us thousands versus replacing everything.",
    name: "James T.",
    detail: "Cabinet refinishing · Shafter",
    rating: 5,
  },
  {
    quote:
      "Had our office repainted over a weekend so we didn't lose a single business day. Professional crew, fair price, and the finish still looks sharp months later.",
    name: "David R.",
    detail: "Commercial interior · Los Angeles",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "How do I get a free estimate?",
    a: `Message us on Instagram at ${site.instagramHandle} with photos of the areas you want painted and a brief description. Include your city and whether it's interior, exterior, or cabinets. We typically respond within one business day with next steps.`,
  },
  {
    q: "Are you a licensed contractor?",
    a: "Yes. SRL Painting holds California C-33 (Painting & Decorating) license #1108313. We are fully licensed and bonded. You can verify our license anytime on the California CSLB website — link in our footer.",
  },
  {
    q: "What cities do you serve?",
    a: "Our primary service areas are Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. For larger commercial or multi-property projects, we travel throughout Kern County and Southern California. Just ask.",
  },
  {
    q: "Do you handle both interior and exterior work?",
    a: "Absolutely. Full interior repaints, exterior repaints, commercial projects, and cabinet refinishing — all with the same prep-first standard. Many clients hire us for one project and come back for the rest.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A single room might take a day or two. A full exterior usually runs several days with proper prep. We give you a realistic timeline in your estimate — and we stick to it.",
  },
] as const;
