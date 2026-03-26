export const client = {
  // Business Details
  name: "M.D Fencing and Landscapes Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Gloucester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07710 651459",
  email: "",
  website: "",

  // Location
  address: "Gloucester",
  city: "Gloucester",
  county: "",
  postcode: "",
  basedIn: "Gloucester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "LouT", rating: 5, text: "New I have no hesitation in recommending and advocating Mario and his team. He and his team have an incredible work ethic. They worked very efficiently, solidly working on to ensure the job was completed for us in a time efficient manner. …  ", date: "3 weeks ago" },
    { name: "Tony Asvestas", rating: 5, text: "⭐️⭐️⭐️⭐️⭐️ Absolutely Outstanding Landscaping Service!  I couldn’t be happier with the work this landscaping company did for my …  ", date: "3 months ago" },
    { name: "Glen Cousner", rating: 5, text: "Mario and his team are brilliant! They’ve just completed ground works, built flower beds and patio work ahead of another company coming in to build a garden building. They’ve worked like crazy in the awful January weather and spent so much …  ", date: "2 months ago" },
    { name: "Rebecca Carver", rating: 5, text: "I found Mario after being let down by another contractor, and I’m so glad I did. He was reliable, professional, and his team delivered excellent work with great attention to detail. ", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "M.D Fencing and Landscapes Ltd | Landscaper in Gloucester",
    description: "Professional landscaper in Gloucester. 5.0-star rated on Google. Call for a free quote.",
  },
};
