export const site = {
  name: "SRL Painting",
  tagline: "Licensed C-33 contractor · Kern County & Los Angeles",
  description:
    "Interior, exterior, commercial, and cabinet painting by a licensed California crew. Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles.",
  heroDescription:
    "Interior rooms, full exteriors, cabinet refinishing, and commercial spaces — scoped clearly, prepped properly, and finished with coatings chosen for California climates.",
  heroHeadline: "Painting that makes your home",
  heroHeadlineAccent: "feel new again.",
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
  { label: "State license", value: "CSLB #1108313" },
  { label: "Classification", value: "C-33 Painting" },
  { label: "Status", value: "Licensed & bonded" },
  { label: "Estimates", value: "Always free" },
] as const;

export const pillars = [
  {
    title: "Surface prep before color",
    text: "Cracks repaired, old paint scraped, primer where it belongs. We spend more time on what goes underneath than what goes on top — because that's what separates a finish that lasts from one that peels in two summers.",
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

export const services = [
  {
    id: "residential",
    title: "Residential",
    summary: "Homes — inside and out.",
    image: "/projects/exterior-after.jpg",
    details: [
      "Exterior: stucco, trim, fascia, garage doors",
      "Interior: walls, ceilings, baseboards",
      "Drywall repair and prep included",
      "Color guidance when you want it",
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    summary: "Spaces that can't close for a week.",
    image: "/projects/interior-after.jpg",
    details: [
      "Retail, office, warehouse, industrial",
      "Nights and weekends available",
      "Low-VOC for occupied buildings",
      "Phased plans for multi-unit work",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinet refinishing",
    summary: "Same boxes. Different kitchen.",
    image: "/projects/cabinets-after.jpg",
    details: [
      "Spray finish on existing doors and frames",
      "Hardware and minor repairs",
      "Coatings rated for kitchens and baths",
      "A fraction of full replacement",
    ],
  },
  {
    id: "new-cabinets",
    title: "New cabinet finishing",
    summary: "Fresh install, finished right.",
    image: "/projects/cabinets-after.jpg",
    details: [
      "Finish work on new cabinet sets",
      "Even coverage on doors, frames, panels",
      "Coordinated with your builder's schedule",
      "Done once, done properly",
    ],
  },
] as const;

export const beforeAfterProjects = [
  {
    id: "exterior",
    title: "Exterior, Kern County",
    category: "Exterior",
    location: "Kern County, CA",
    scope: "Off-white body · Bold trim · Full prep & prime",
    description:
      "Off-white body, bold trim, full scrape-and-prime. Built for Central Valley sun.",
    before: "/projects/exterior-before.jpg",
    after: "/projects/exterior-after.jpg",
  },
  {
    id: "cabinets",
    title: "Kitchen cabinets",
    category: "Cabinets",
    location: "Kern County, CA",
    scope: "Spray finish · Hardware refresh",
    description:
      "Dated wood tones to a bright spray finish. Same layout, no demolition.",
    before: "/projects/cabinets-before.jpg",
    after: "/projects/cabinets-after.jpg",
  },
  {
    id: "interior",
    title: "Living room",
    category: "Interior",
    location: "Kern County, CA",
    scope: "Walls & trim · New palette",
    description:
      "New color throughout. Clean cut lines, even second coat, ready to move back in.",
    before: "/projects/interior-before.jpg",
    after: "/projects/interior-after.jpg",
  },
  {
    id: "lake-isabella",
    title: "Lake Isabella exterior",
    category: "Exterior",
    location: "Lake Isabella, CA",
    scope: "Two-tone · Stucco repair",
    description:
      "Mountain home, two-tone scheme, minor stucco work. Finish rated for elevation swings.",
    before: "/projects/lake-before.jpg",
    after: "/projects/lake-after.jpg",
  },
  {
    id: "gazebo",
    title: "Gazebo stain",
    category: "Exterior",
    location: "Kern County, CA",
    scope: "SuperDeck semi-transparent",
    description:
      "Sherwin-Williams SuperDeck semi-transparent. Protected, wood grain still visible.",
    before: "/projects/gazebo-before.jpg",
    after: "/projects/gazebo-after.jpg",
  },
] as const;

export const featuredProjects = [
  beforeAfterProjects[0],
  beforeAfterProjects[1],
  beforeAfterProjects[3],
] as const;

export const serviceAreas = [
  { city: "Bakersfield", note: "Home base" },
  { city: "Shafter", note: "Residential & agricultural" },
  { city: "Tehachapi", note: "Mountain properties" },
  { city: "Los Angeles", note: "Commercial & residential" },
  { city: "Lake Isabella", note: "Lake & mountain homes" },
] as const;

export const heroStats = [
  { n: "C-33", l: "Licensed & bonded" },
  { n: String(serviceAreas.length), l: "Cities served" },
  { n: "Free", l: "Estimates" },
] as const;

export const process = [
  {
    num: "1",
    title: "Request your estimate",
    text: "Tell us about your project — rooms, exterior, cabinets, or commercial space. Photos help us quote accurately.",
  },
  {
    num: "2",
    title: "Walkthrough & scope",
    text: "We assess surfaces, prep needs, and timeline. You get a written scope and firm price before work begins.",
  },
  {
    num: "3",
    title: "Preparation",
    text: "Masking, repairs, scraping, and primer — the work you don't see, but definitely notice when it's skipped.",
  },
  {
    num: "4",
    title: "Painting",
    text: "Coats applied with products selected for your surfaces and climate — interior, exterior, or spray cabinet work.",
  },
  {
    num: "5",
    title: "Final walkthrough",
    text: "We go room by room with you, touch up what needs it, and leave the site clean.",
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
    a: "Yes. C-33 Painting & Decorating, license #1108313, bonded. Verify anytime on the CSLB website.",
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
  { id: "form", label: "This form (we'll follow up)" },
] as const;

export const serviceFormOptions = [
  "Exterior painting",
  "Interior painting",
  "Cabinet refinishing",
  "New cabinet finishing",
  "Commercial painting",
  "Not sure yet",
] as const;
