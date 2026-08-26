export const site = {
  name: "SRL Painting",
  tagline: "Prep-first painting for Kern County and Los Angeles",
  description:
    "Licensed C-33 painting contractor for interiors, exteriors, cabinets, and commercial spaces across Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles. Surface prep, professional coatings, and a clean job site — every time.",
  heroEyebrow: "California C-33 · Licensed & bonded",
  heroHeadlineLead: "Prepared like",
  heroHeadlineAccent: "it has to last.",
  heroDescription:
    "Valley sun, mountain weather, coastal light — California is hard on paint. SRL is a licensed crew that repairs, primes, and finishes interiors, exteriors, and cabinets so the color still looks right a season later.",
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
  { href: "#work", label: "Work", id: "work" },
  { href: "#services", label: "Services", id: "services" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#reviews", label: "Reviews", id: "reviews" },
  { href: "#about", label: "About", id: "about" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export const credentials = [
  { label: "License", value: "CSLB #1108313" },
  { label: "Trade", value: "C-33 Painting" },
  { label: "Standing", value: "Licensed & bonded" },
  { label: "Estimates", value: "Always free" },
] as const;

export const paintChips = [
  { name: "Canvas", hex: "#f3eee4" },
  { name: "Stucco", hex: "#e8dcc8" },
  { name: "Trim", hex: "#2a2a2c" },
  { name: "Cabinet", hex: "#f7f5f1" },
  { name: "Deck", hex: "#6b4a32" },
  { name: "Brand", hex: "#7a1e38" },
] as const;

export const pillars = [
  {
    title: "Prep before a drop of paint",
    text: "Cracks get filled. Peeling gets scraped. Surfaces get sanded and primed for the coating they will actually wear. That is why our exteriors hold up to Central Valley sun instead of chalking off in a season.",
  },
  {
    title: "A job site you can still live in",
    text: "Floors covered, furniture protected, landscaping masked, tools put away. We work like guests — and we leave the house ready to use, not a weekend of cleanup.",
  },
  {
    title: "A written scope before we start",
    text: "You see what is included, what it costs, and how long it takes before anyone opens a can. No vague quotes. No surprise add-ons on the last day.",
  },
] as const;

export const services = [
  {
    id: "residential",
    title: "Homes, inside and out",
    kicker: "Residential",
    summary: "Full repaints and room refreshes that look even, clean, and finished — not rushed.",
    image: "/projects/exterior-after.jpg",
    imageAlt: "Freshly painted Kern County home exterior in off-white with charcoal trim",
    details: [
      "Exteriors: body, trim, fascia, eaves, and garage doors",
      "Interiors: walls, ceilings, doors, and baseboards",
      "Drywall repair, caulk, and surface prep included",
      "Color guidance so the house still looks right at noon",
    ],
  },
  {
    id: "commercial",
    title: "Work that respects your hours",
    kicker: "Commercial",
    summary: "Offices, retail, and industrial spaces painted around the way you actually operate.",
    image: "/projects/interior-after.jpg",
    imageAlt: "Crew spraying a second coat on a vaulted interior ceiling",
    details: [
      "Retail, office, and light industrial interiors",
      "After-hours and weekend scheduling when you need it",
      "Low-VOC options for occupied buildings",
      "Phased plans for multi-unit or multi-room properties",
    ],
  },
  {
    id: "cabinets",
    title: "A new kitchen, same cabinets",
    kicker: "Cabinet refinishing",
    summary: "Spray-smooth doors and boxes — a remodel look without tearing the kitchen apart.",
    image: "/projects/cabinets-after.jpg",
    imageAlt: "Kitchen cabinets refinished in a bright durable white spray finish",
    details: [
      "Factory-style spray finish on existing boxes and doors",
      "Hardware updates and small repairs while we are in it",
      "Coatings built for grease, steam, and daily use",
      "A fraction of the cost and dust of full replacement",
    ],
  },
  {
    id: "new-cabinets",
    title: "Factory-smooth on new installs",
    kicker: "New cabinet finishing",
    summary: "Even, durable color on new cabinets — coordinated with your builder, not fighting them.",
    image: "/projects/cabinets-after.jpg",
    imageAlt: "Spray-smooth white cabinet finish on a kitchen install",
    details: [
      "Finish work on new cabinet installations",
      "Even coverage on doors, frames, panels, and interiors",
      "Scheduled with your contractor or remodel timeline",
      "A built-in look from day one, not a patch later",
    ],
  },
] as const;

export const beforeAfterProjects = [
  {
    id: "exterior",
    title: "Valley exterior, rebuilt in color",
    category: "Exterior",
    location: "Kern County, CA",
    scope: "Off-white body · Charcoal trim · Full prep & prime",
    description:
      "Sun-faded stucco and tired trim became a sharp two-tone house: off-white body, charcoal garage and fascia, and a finish chosen for Central Valley heat. Full scrape, repair, prime, and topcoat — not a weekend roll-over.",
    before: "/projects/exterior-before.jpg",
    after: "/projects/exterior-after.jpg",
  },
  {
    id: "cabinets",
    title: "Kitchen, without the demolition",
    category: "Cabinets",
    location: "Kern County, CA",
    scope: "Existing cabinets · Spray finish · Hardware refresh",
    description:
      "Dated wood-tone cabinets were cleaned, repaired, and spray-finished bright — same layout, new kitchen. No gutting the room. No waiting on a cabinet lead time. Just a durable coating that looks like it came with the house.",
    before: "/projects/cabinets-before.jpg",
    after: "/projects/cabinets-after.jpg",
  },
  {
    id: "interior",
    title: "Ceilings and walls, sprayed right",
    category: "Interior",
    location: "Kern County, CA",
    scope: "Walls & ceilings · New color · Full mask & spray",
    description:
      "High ceilings and a new color scheme — masked to the inch, sprayed in even coats, walked at the end. The room feels larger because the finish is actually flat and clean, not streaked from a rushed roller.",
    before: "/projects/interior-before.jpg",
    after: "/projects/interior-after.jpg",
  },
  {
    id: "lake-isabella",
    title: "Lake Isabella, mountain weather",
    category: "Exterior",
    location: "Lake Isabella, CA",
    scope: "Full exterior · Two-tone · Stucco repair",
    description:
      "A mountain home that sees hotter days and colder nights than the valley floor. We repaired stucco, reset the two-tone scheme, and used a coating that can take elevation weather — not just look good the week we leave.",
    before: "/projects/lake-before.jpg",
    after: "/projects/lake-after.jpg",
  },
  {
    id: "gazebo",
    title: "Gazebo, stained and sealed",
    category: "Exterior wood",
    location: "Kern County, CA",
    scope: "Sherwin-Williams SuperDeck · Semi-transparent stain",
    description:
      "Weathered wood brought back with Sherwin-Williams SuperDeck semi-transparent stain — grain still visible, surface sealed against sun and moisture. Outdoor structures fail at the coating first; we start there on purpose.",
    before: "/projects/gazebo-before.jpg",
    after: "/projects/gazebo-after.jpg",
  },
] as const;

export const serviceAreas = [
  { city: "Bakersfield", note: "Kern County home base" },
  { city: "Shafter", note: "Homes and ag properties" },
  { city: "Tehachapi", note: "Mountain homes and cabins" },
  { city: "Lake Isabella", note: "Lake and elevation work" },
  { city: "Los Angeles", note: "Commercial and residential" },
] as const;

export const heroStats = [
  { n: "C-33", l: "Licensed & bonded" },
  { n: String(serviceAreas.length), l: "Cities we know" },
  { n: "Free", l: "Written estimates" },
] as const;

export const included = [
  {
    title: "Repair, not cover-up",
    text: "Holes, cracks, peeling, and failed caulk get fixed before color goes on.",
  },
  {
    title: "Prime for the surface",
    text: "Stucco, wood, cabinets, and patched drywall each get the primer they need.",
  },
  {
    title: "Masked like we mean it",
    text: "Floors, fixtures, windows, and landscaping stay protected for the whole job.",
  },
  {
    title: "Coatings that match the weather",
    text: "Professional lines chosen for sun, heat, kitchens, and high-wear rooms.",
  },
  {
    title: "A clean site every day",
    text: "We pick up as we go. You should be able to live in the house while we work.",
  },
  {
    title: "Walkthrough before we leave",
    text: "We punch the list with you, touch up what you see, and do not vanish after the last coat.",
  },
] as const;

export const process = [
  {
    num: "01",
    title: "Send the real job",
    text: "Instagram us photos, your city, and what you want painted. We ask about surfaces and access so the estimate is a scope — not a guess.",
  },
  {
    num: "02",
    title: "Walk it, then write it",
    text: "On-site or virtual, we look at prep, height, and timeline. You get a written price and what is included before anyone shows up with a sprayer.",
  },
  {
    num: "03",
    title: "Prep, prime, finish",
    text: "Masking, repairs, primer, then color. Coatings are picked for the surface — stucco in the valley sun is not the same as kitchen cabinets.",
  },
  {
    num: "04",
    title: "Walk it with you",
    text: "Final walkthrough, touch-ups, and a site that is actually clean. The job is done when you say it looks right.",
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
    a: `Message ${site.instagramHandle} with photos of the areas you want painted, your city, and whether it is interior, exterior, cabinets, or commercial. Include anything that will change the work — height, peeling, repairs, or a deadline. We typically reply within one business day with next steps.`,
  },
  {
    q: "Are you a licensed contractor?",
    a: "Yes. SRL Painting holds California C-33 (Painting & Decorating) license #1108313 and is licensed and bonded. You can verify the license on the California CSLB website anytime — we link to it in the header, footer, and about section.",
  },
  {
    q: "What cities do you serve?",
    a: "Bakersfield, Shafter, Tehachapi, Lake Isabella, and Los Angeles are our regular map. For larger commercial or multi-property work we will travel elsewhere in Kern County and Southern California. If you are close, ask — we would rather tell you no than send a crew that cannot do the job right.",
  },
  {
    q: "Do you handle both interior and exterior work?",
    a: "Yes. Full interiors, full exteriors, commercial spaces, cabinet refinishing, and finish work on new cabinets. A lot of clients start with one room or the street elevation and call us back for the rest of the house.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single room is often a day or two. A full exterior is usually several days once prep is honest. Cabinets take longer than people expect because the finish is the product — not the color sitting in the can. You get a realistic calendar in the estimate, and we plan around it.",
  },
  {
    q: "Do you supply the paint?",
    a: "Yes. We spec professional coatings for the surface and the climate — including lines like Sherwin-Williams SuperDeck on exterior wood. If you already have a color you love, bring it. If you do not, we will help you choose something that still looks right in California light.",
  },
  {
    q: "Can you paint in valley heat?",
    a: "We plan around it. Exterior coatings have temperature and sun windows; we do not force a topcoat onto a wall that is too hot to cure. That is part of why the finish lasts. We will tell you the honest schedule instead of promising a date the weather will not allow.",
  },
  {
    q: "Is cabinet refinishing as durable as new cabinets?",
    a: "A proper spray refinish on sound boxes is dramatically cheaper than replacement and, with the right coating, holds up to kitchens and baths. If the boxes themselves are failing, we will say so — refinishing is not a magic trick for rotten wood.",
  },
  {
    q: "Do I need to empty the rooms?",
    a: "Move small valuables and clear the counters. We protect floors and remaining furniture. For cabinets, plan on the kitchen being a work zone for the duration — we will tell you what you can still use day to day.",
  },
] as const;
