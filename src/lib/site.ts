export const site = {
  name: "SRL Painting",
  tagline: "C-33 · Lic. 1108313 · Kern County & Los Angeles",
  description:
    "Interior, exterior, commercial, and cabinet painting by a licensed California crew. Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles.",
  heroDescription:
    "What you notice is the color, the sheen, the line where wall meets trim. What you don't see is the sanding, the primer, the masking — and that's the point.",
  heroHeadline: "Quality painting,",
  heroHeadlineAccent: "done right.",
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
  { label: "Bonded", value: "Yes" },
  { label: "Estimates", value: "Complimentary" },
] as const;

export const pillars = [
  {
    title: "Surface before color",
    text: "Cracks filled. Old paint scraped. Primer where it belongs. We spend more time on what goes underneath than what goes on top — because that's what separates a finish that lasts from one that peels in two summers.",
  },
  {
    title: "Your house stays yours",
    text: "Floors covered. Plants protected. Tools off the lawn at the end of every day. When we leave, you shouldn't be reaching for a vacuum.",
  },
  {
    title: "The price you agree to",
    text: "Written scope. Fixed number. No add-ons mid-job because we 'found something.' If the scope changes, we talk first.",
  },
] as const;

export const services = [
  {
    id: "residential",
    roman: "I",
    title: "Residential",
    summary: "Homes — inside and out.",
    details: [
      "Exterior: stucco, trim, fascia, garage doors",
      "Interior: walls, ceilings, baseboards",
      "Drywall repair and prep included",
      "Color guidance when you want it",
    ],
  },
  {
    id: "commercial",
    roman: "II",
    title: "Commercial",
    summary: "Spaces that can't close for a week.",
    details: [
      "Retail, office, warehouse, industrial",
      "Nights and weekends available",
      "Low-VOC for occupied buildings",
      "Phased plans for multi-unit work",
    ],
  },
  {
    id: "cabinets",
    roman: "III",
    title: "Cabinet refinishing",
    summary: "Same boxes. Different kitchen.",
    details: [
      "Spray finish on existing doors and frames",
      "Hardware and minor repairs",
      "Coatings rated for kitchens and baths",
      "A fraction of full replacement",
    ],
  },
  {
    id: "new-cabinets",
    roman: "IV",
    title: "New cabinet finishing",
    summary: "Fresh install, finished right.",
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

export const serviceAreas = [
  { city: "Bakersfield", note: "Home base" },
  { city: "Shafter", note: "Residential & agricultural" },
  { city: "Tehachapi", note: "Mountain properties" },
  { city: "Los Angeles", note: "Commercial & residential" },
  { city: "Lake Isabella", note: "Lake & mountain homes" },
] as const;

export const process = [
  {
    num: "1",
    title: "Send us what you've got",
    text: "Photos on Instagram. A sentence about the job. Your city. We reply within a business day.",
  },
  {
    num: "2",
    title: "We walk the job",
    text: "On-site or virtual. Surfaces, prep, timeline. You get a written scope and a number before we start.",
  },
  {
    num: "3",
    title: "Prep, then paint",
    text: "Masking, repair, prime, coat. Products chosen for your surfaces and your climate.",
  },
  {
    num: "4",
    title: "Walk-through, then done",
    text: "We go room by room with you. Touch up what needs it. Leave the place clean.",
  },
] as const;

export const reviews = [
  {
    quote:
      "Repainted the whole exterior — stucco, trim, all of it. Yard stayed clean. House looks like someone actually cared.",
    name: "Maria G.",
    detail: "Exterior · Bakersfield",
    rating: 5,
  },
  {
    quote:
      "Cabinets from the nineties. Now they're white and smooth. Saved us a full kitchen remodel.",
    name: "James T.",
    detail: "Cabinets · Shafter",
    rating: 5,
  },
  {
    quote:
      "Office done over a weekend. Open Monday morning. Still looks good six months later.",
    name: "David R.",
    detail: "Commercial · Los Angeles",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    q: "How do I get an estimate?",
    a: `Message ${site.instagramHandle} on Instagram with photos and a short description — interior, exterior, or cabinets, plus your city. We usually respond within one business day.`,
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
