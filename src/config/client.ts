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
    { name: "faye bliss", rating: 5, text: "What can I say! Marinos and his team have transformed our front garden. Marinos was knowledgeable and keen to help me make my vision of the new front picket fence, slabbed porcelain path and area ready for stones, a reality. Marinos and Mario, one of his team, are perfectionists with their work, attention to detail and with clearing up at the end of the job. Always checking and ensuring that I was entirely happy with everything they were doing. Special mention to Marinos’ team who worked tirelessly in the background getting on with what they needed to do in a timely manner and leaving everything tidy as they finished the job. Thank you again!", date: "3 days ago" },
    { name: "LouT", rating: 5, text: "I have no hesitation in recommending and advocating Mario and his team. He and his team have an incredible work ethic. They worked very efficiently, solidly working on to ensure the job was completed for us in a time efficient manner. Finding Mario having been messed around by other contractors one of which would not accommodate meeting us as they did not work past a certain time, another very dismissive saying they could quote from photos and had no need to see the job was a a breath of fresh air. Mario is extremely knowledgeable, very particular and passionate about his work. We are very pleased with the job he has completed for us. Thank you to Mario and the team for a fantastic job very efficient the most impressive thing for us has been the tireless work completed with such passion and attention to detail. P & N, Gloucester Feb 2026", date: "3 weeks ago" },
    { name: "Molls Tremlett", rating: 5, text: "Amazing work from Mario and his team. From patios to turfing to fencing everything you could ever want and more. Our garden is now our dream come true. We can’t wait to enjoy it when the summer arrives. Quick hard workers. Polite. Dedicated. Lovely & friendly. Go above and beyond always. This is the second job we’ve had done from Mario & the team and can’t recommend them enough. Would always go to them for garden maintenance.", date: "a month ago" },
    { name: "Cherry Hale", rating: 5, text: "This is the third time using Mario and his team and yet again they have been fantastic! They are prompt, professional, helpful and always willing to support the customer. They certainly have pride in their work! We would highly recommend this company. Thanks, again, Mario. Cherry Hale", date: "a month ago" },
    { name: "Glen Cousner", rating: 5, text: "Mario and his team are brilliant! They’ve just completed ground works, built flower beds and patio work ahead of another company coming in to build a garden building. They’ve worked like crazy in the awful January weather and spent so much time getting the details spot on. Top guys! Photos to follow when the full work is completed!", date: "2 months ago" },
    { name: "api api api", rating: 1, text: "These guys have no clue what they are doing. They do shady work that needs to be replaced after just a few months. STAY AWAY!", date: "2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "M.D Fencing and Landscapes Ltd | Landscaper in Gloucester",
    description: "Professional landscaper in Gloucester. 5.0-star rated on Google. Call for a free quote.",
  },
};
