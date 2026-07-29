export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Short label used in nav / cards */
  shortName: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  processSteps: ProcessStep[];
  faqs: ServiceFAQ[];
  keywords: string[];
  image: string;
  imageAlt: string;
  priceRange: string;
  duration: string;
}

export const services: Service[] = [
  {
    slug: "interior-exterior-painting",
    name: "Interior & Exterior Painting",
    shortName: "Painting",
    icon: "paintbrush",
    shortDescription:
      "Crisp, long-lasting paint finishes for interiors and exteriors, from single accent walls to full-home repaints.",
    longDescription:
      "A professional paint job is the fastest way to transform a home — and one of the easiest to get wrong without proper prep. Our painting crews handle every step: protecting floors and furniture, repairing surface imperfections, priming, and applying premium low-VOC paints with clean, sharp lines. On exteriors, we pressure-wash, scrape, caulk, and prime before a single coat goes on, so the finish stands up to Texas sun and storms for years, not months.",
    benefits: [
      {
        title: "Meticulous Prep Work",
        description:
          "Patching, sanding, caulking, and priming come standard — because a finish is only as good as the surface underneath it.",
      },
      {
        title: "Premium, Climate-Ready Paints",
        description:
          "We use top-tier low-VOC interior paints and UV-resistant exterior coatings built for North Texas heat and humidity.",
      },
      {
        title: "Clean, Respectful Crews",
        description:
          "Furniture covered, floors protected, and a full cleanup at the end of every workday.",
      },
      {
        title: "Color Consultation Included",
        description:
          "Not sure about the palette? We help you test and choose colors that fit your home's light and style.",
      },
    ],
    processSteps: [
      {
        title: "Free Color & Scope Consultation",
        description:
          "We walk the space with you, discuss colors and sheens, and deliver a detailed written estimate.",
      },
      {
        title: "Surface Preparation",
        description:
          "Washing, scraping, patching, sanding, caulking, and masking — the unglamorous work that makes the finish last.",
      },
      {
        title: "Prime & Paint",
        description:
          "Quality primers followed by two full coats of premium paint, applied by brush, roller, or sprayer as the surface demands.",
      },
      {
        title: "Inspection & Touch-Ups",
        description:
          "We walk the job with you, handle any touch-ups on the spot, and leave the space cleaner than we found it.",
      },
    ],
    faqs: [
      {
        question: "How long does a full interior repaint take?",
        answer:
          "Most whole-home interior repaints take 3–5 days depending on square footage, wall condition, and the number of colors. We give you a firm schedule before work begins.",
      },
      {
        question: "Do you use low-VOC paint?",
        answer:
          "Yes. We default to premium low- and zero-VOC paints, which means minimal odor and a home you can comfortably live in during the project.",
      },
      {
        question: "What's the best time of year for exterior painting in Texas?",
        answer:
          "Spring and fall offer ideal temperatures, but modern coatings let us paint most of the year. We monitor weather windows and never paint in conditions that would compromise adhesion.",
      },
      {
        question: "Do I need to move my furniture before you arrive?",
        answer:
          "No — our crew moves and covers furniture as part of the job. We just ask that fragile items and valuables be set aside.",
      },
    ],
    keywords: [
      "interior painting",
      "exterior painting",
      "house painters",
      "residential painting contractor",
      "cabinet painting",
      "home repainting",
    ],
    image: "/images/services/painting.svg",
    imageAlt:
      "Professional painter applying fresh paint to an interior wall with clean lines",
    priceRange: "$$",
    duration: "2–7 days",
  },
  {
    slug: "floor-installation",
    name: "Floor Installation",
    shortName: "Flooring",
    icon: "layers",
    shortDescription:
      "Expert installation of hardwood, luxury vinyl plank, laminate, and tile flooring with flawless subfloor prep.",
    longDescription:
      "New floors change how a whole house feels underfoot and to the eye. We install hardwood, engineered wood, luxury vinyl plank (LVP), laminate, and tile — and we treat subfloor preparation as seriously as the finish material. Uneven or damaged subfloors cause squeaks, gaps, and premature wear, so we level, repair, and moisture-test before the first plank or tile goes down. The result is flooring that looks showroom-perfect and stays that way.",
    benefits: [
      {
        title: "Every Major Flooring Type",
        description:
          "Hardwood, engineered wood, LVP, laminate, and porcelain or ceramic tile — one crew, one warranty, one point of contact.",
      },
      {
        title: "Serious Subfloor Prep",
        description:
          "Leveling, repair, and moisture testing come before installation, preventing squeaks, gaps, and buckling later.",
      },
      {
        title: "Dust-Controlled Tear-Out",
        description:
          "Old flooring is removed with containment and cleanup that keeps the rest of your home livable.",
      },
      {
        title: "Precise Transitions & Trim",
        description:
          "Doorways, stairs, and room transitions finished cleanly — the details that separate pro work from DIY.",
      },
    ],
    processSteps: [
      {
        title: "In-Home Measurement & Quote",
        description:
          "We measure every room, discuss material options and budgets, and provide an itemized quote with material samples.",
      },
      {
        title: "Removal & Subfloor Prep",
        description:
          "Existing flooring is torn out and hauled away, then the subfloor is leveled, repaired, and moisture-tested.",
      },
      {
        title: "Installation",
        description:
          "Materials are acclimated on-site, then installed to manufacturer spec with precise cuts, patterns, and expansion gaps.",
      },
      {
        title: "Finish & Final Walkthrough",
        description:
          "Trim, transitions, and thresholds are installed, the site is cleaned, and we walk every room with you.",
      },
    ],
    faqs: [
      {
        question: "Which flooring holds up best for families with kids and pets?",
        answer:
          "Luxury vinyl plank is the workhorse: waterproof, scratch-resistant, and realistic-looking. Porcelain tile is another excellent high-durability option, especially in kitchens and baths.",
      },
      {
        question: "Can you install new flooring over my existing floor?",
        answer:
          "Sometimes — certain floating floors can go over existing hard surfaces if they're flat and sound. We evaluate on-site and always recommend what's best long-term, not what's fastest.",
      },
      {
        question: "How long does flooring installation take?",
        answer:
          "A typical 3-bedroom home takes 2–4 days including tear-out. Hardwood and tile take longer than floating floors due to acclimation and curing time.",
      },
      {
        question: "Do you move furniture and appliances?",
        answer:
          "Yes, furniture moving is included in our quotes. We'll coordinate appliance disconnection and reconnection where needed.",
      },
    ],
    keywords: [
      "floor installation",
      "hardwood flooring",
      "luxury vinyl plank installation",
      "tile flooring",
      "laminate installation",
      "flooring contractor",
    ],
    image: "/images/services/flooring.svg",
    imageAlt:
      "Installer laying luxury vinyl plank flooring in a bright living room",
    priceRange: "$$",
    duration: "2–5 days",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathrooms",
    icon: "bath",
    shortDescription:
      "Full bathroom transformations — tubs, walk-in showers, vanities, tile, and lighting — done right and on schedule.",
    longDescription:
      "Bathrooms are the hardest-working rooms in a home, and remodeling one involves nearly every trade: plumbing, electrical, tile, waterproofing, carpentry, and finish work. We manage all of it under one roof. Whether you want a tub-to-shower conversion, a spa-style master bath, or an aging-in-place remodel with curbless entry and grab bars, we handle design, demolition, and construction with proper waterproofing behind every wall — the part you never see but will always appreciate.",
    benefits: [
      {
        title: "True Waterproofing Systems",
        description:
          "Modern shower membranes and cement board behind every tile job — not just builder-grade shortcuts.",
      },
      {
        title: "One Crew, Every Trade",
        description:
          "Plumbing, electrical, tile, and carpentry coordinated by one project manager so nothing falls through the cracks.",
      },
      {
        title: "Fixed Timelines",
        description:
          "A written schedule before demo day, with proactive updates. Most bathrooms are done in 2–3 weeks.",
      },
      {
        title: "Design Help Included",
        description:
          "Tile layouts, vanity selection, lighting plans — we help you make choices that look great together.",
      },
    ],
    processSteps: [
      {
        title: "Design & Detailed Estimate",
        description:
          "We measure your bathroom, discuss layout and finishes, and produce a line-item estimate with a realistic timeline.",
      },
      {
        title: "Demolition & Rough-In",
        description:
          "Careful demo with dust containment, then plumbing and electrical rough-in, inspected and up to code.",
      },
      {
        title: "Waterproofing & Tile",
        description:
          "Shower pans, membranes, and backer board installed to spec, followed by precision tile work.",
      },
      {
        title: "Fixtures & Finish",
        description:
          "Vanities, faucets, glass, lighting, and hardware installed, then a full clean and final walkthrough.",
      },
    ],
    faqs: [
      {
        question: "How much does a bathroom remodel cost?",
        answer:
          "A cosmetic refresh typically starts around $8,000–$12,000, while a full master bathroom remodel with tile shower and new vanity generally runs $18,000–$35,000 depending on materials and scope. Every project gets a line-item estimate.",
      },
      {
        question: "How long will I be without my bathroom?",
        answer:
          "Most full remodels take 2–3 weeks. Tub-to-shower conversions can often be completed in under two weeks. We compress the 'no water' window as much as possible.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "Yes. Any work involving plumbing or electrical changes is permitted and inspected per your city's requirements — we handle the paperwork.",
      },
      {
        question: "Can you make my bathroom safer for aging in place?",
        answer:
          "Absolutely. Curbless showers, grab bars with proper blocking, comfort-height toilets, and slip-resistant tile are all common requests we design for.",
      },
    ],
    keywords: [
      "bathroom remodeling",
      "bathroom renovation",
      "tub to shower conversion",
      "walk-in shower installation",
      "master bath remodel",
      "bathroom contractor",
    ],
    image: "/images/services/bathroom.svg",
    imageAlt:
      "Modern remodeled bathroom with a glass walk-in shower and freestanding tub",
    priceRange: "$$$",
    duration: "2–3 weeks",
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchens",
    icon: "chef-hat",
    shortDescription:
      "Complete kitchen renovations — cabinets, countertops, islands, lighting, and layouts built for how you actually cook.",
    longDescription:
      "The kitchen is where homes earn their keep, and a well-planned remodel pays you back every single day. We handle everything from cabinet refacing and countertop upgrades to full gut renovations with new layouts, islands, and lighting plans. Our process starts with how your family actually uses the space — storage, traffic flow, prep zones — then layers in materials and finishes that fit your budget. One project manager coordinates every trade from demo to the final cabinet pull.",
    benefits: [
      {
        title: "Layout-First Design",
        description:
          "We design around workflow and storage before finishes, so the kitchen works as good as it looks.",
      },
      {
        title: "Cabinets for Every Budget",
        description:
          "Refacing, semi-custom, and full custom cabinetry options, all professionally installed and leveled.",
      },
      {
        title: "Licensed Trades In-House",
        description:
          "Plumbing, electrical, and gas line work handled by licensed pros and inspected to code.",
      },
      {
        title: "Livable Remodel Process",
        description:
          "Dust barriers, temporary kitchen setups, and clear schedules keep your household running during construction.",
      },
    ],
    processSteps: [
      {
        title: "Design Consultation",
        description:
          "We measure, discuss your wishlist and budget, and develop a layout and finish plan with a detailed estimate.",
      },
      {
        title: "Selections & Ordering",
        description:
          "Cabinets, counters, tile, and fixtures are finalized and ordered before demo — so the project never stalls waiting on materials.",
      },
      {
        title: "Demo & Construction",
        description:
          "Tear-out, framing, plumbing, and electrical rough-in, followed by drywall, cabinets, and countertop templating.",
      },
      {
        title: "Finishes & Walkthrough",
        description:
          "Backsplash, lighting, hardware, and appliances installed, punch list completed, and your new kitchen revealed.",
      },
    ],
    faqs: [
      {
        question: "How much does a kitchen remodel cost?",
        answer:
          "Cabinet refacing and countertop projects often run $12,000–$25,000, while full kitchen renovations typically range from $30,000–$75,000+ depending on size, layout changes, and materials. You'll get an itemized estimate before committing to anything.",
      },
      {
        question: "How long does a kitchen remodel take?",
        answer:
          "Most full remodels take 4–8 weeks of construction after materials arrive. Pre-ordering everything before demo keeps the schedule tight.",
      },
      {
        question: "Can I keep my existing layout to save money?",
        answer:
          "Yes — keeping plumbing and gas where they are is the single biggest cost saver in a kitchen remodel. We'll tell you honestly whether a layout change is worth it for your space.",
      },
      {
        question: "Do you install appliances?",
        answer:
          "Yes, appliance installation and hookup — including gas ranges and vent hoods — is part of our scope, handled by licensed trades.",
      },
    ],
    keywords: [
      "kitchen remodeling",
      "kitchen renovation",
      "cabinet installation",
      "countertop installation",
      "kitchen island",
      "kitchen contractor",
    ],
    image: "/images/services/kitchen.svg",
    imageAlt:
      "Renovated kitchen with white shaker cabinets, quartz island, and pendant lighting",
    priceRange: "$$$$",
    duration: "4–8 weeks",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortName: "Drywall",
    icon: "wrench",
    shortDescription:
      "Seamless drywall patching, texture matching, and full sheetrock installation — repairs that disappear into the wall.",
    longDescription:
      "Water damage, doorknob holes, settling cracks, botched DIY patches — drywall problems are common, but invisible repairs are rare. Texture matching is the hard part, and it's our specialty: orange peel, knockdown, popcorn removal, or smooth level-5 finishes. We repair everything from nail pops to full ceiling replacements after a leak, then prime and paint so you genuinely can't find where the damage was.",
    benefits: [
      {
        title: "Texture Matching Experts",
        description:
          "Orange peel, knockdown, splatter, or smooth — we match your existing texture so the repair vanishes.",
      },
      {
        title: "Water Damage Specialists",
        description:
          "We assess moisture, replace compromised sheetrock, and coordinate with your plumber or roofer's fix.",
      },
      {
        title: "Small Jobs Welcome",
        description:
          "No repair is too small. Single patches, nail pops, and corner bead fixes get the same care as full rooms.",
      },
      {
        title: "Paint-Ready or Painted",
        description:
          "We can leave the surface primed and ready, or finish with color-matched paint for a truly invisible repair.",
      },
    ],
    processSteps: [
      {
        title: "Assessment & Quote",
        description:
          "We inspect the damage (photos work for small jobs), check for underlying moisture issues, and quote the repair.",
      },
      {
        title: "Cut-Out & Repair",
        description:
          "Damaged material is removed, framing or backing is added as needed, and new drywall is hung and taped.",
      },
      {
        title: "Mud, Sand & Texture",
        description:
          "Multiple coats of joint compound sanded smooth, then texture applied to match the surrounding wall or ceiling.",
      },
      {
        title: "Prime & Paint",
        description:
          "The repair is primed and painted to blend with the existing surface — done in as little as one visit for small patches.",
      },
    ],
    faqs: [
      {
        question: "Can you really match my wall texture?",
        answer:
          "Yes — texture matching is the core skill of our drywall crew. We test-match in an inconspicuous spot first on tricky textures like heavy knockdown.",
      },
      {
        question: "My ceiling has water stains. Do I need new drywall?",
        answer:
          "Not always. If the sheetrock is dry and sound, stain-blocking primer and paint may suffice. If it's sagging, soft, or moldy, we replace the affected section. We check with a moisture meter before recommending either.",
      },
      {
        question: "Do you remove popcorn ceilings?",
        answer:
          "Yes. We scrape, skim, and re-texture (or smooth-finish) popcorn ceilings, with full containment for dust — and we can advise on asbestos testing for homes built before the mid-1980s.",
      },
      {
        question: "How soon can small repairs be scheduled?",
        answer:
          "Small patch jobs can usually be scheduled within a few business days, and many are completed in a single visit with quick-set compounds.",
      },
    ],
    keywords: [
      "drywall repair",
      "sheetrock repair",
      "texture matching",
      "water damage drywall",
      "popcorn ceiling removal",
      "drywall contractor",
    ],
    image: "/images/services/drywall.svg",
    imageAlt:
      "Contractor applying joint compound to a drywall patch with a taping knife",
    priceRange: "$",
    duration: "1–3 days",
  },
  {
    slug: "demolition",
    name: "Demolition",
    shortName: "Demolition",
    icon: "hammer",
    shortDescription:
      "Safe, controlled interior demolition and tear-outs — walls, kitchens, baths, flooring — with full debris hauling.",
    longDescription:
      "Good remodels start with good demolition. Our crews handle controlled interior demo — kitchen and bath tear-outs, wall removal, flooring and tile removal, deck and shed teardowns — with the protection and containment that keeps the rest of your home clean and intact. We identify load-bearing walls before anything comes down, cap plumbing and electrical safely, and haul away every scrap of debris. Whether you're prepping for your own renovation or ours, we leave a clean, ready-to-build space.",
    benefits: [
      {
        title: "Structural Awareness",
        description:
          "Load-bearing walls identified before demo day, with engineered beam solutions when walls need to come out.",
      },
      {
        title: "Dust & Damage Containment",
        description:
          "Plastic barriers, floor protection, and negative air machines keep demo mess out of the rest of your home.",
      },
      {
        title: "Utilities Handled Safely",
        description:
          "Plumbing, gas, and electrical lines are located, disconnected, and capped by qualified pros before tear-out.",
      },
      {
        title: "Full Debris Removal",
        description:
          "Hauling and responsible disposal are included — recycling metal and clean materials wherever possible.",
      },
    ],
    processSteps: [
      {
        title: "Site Evaluation",
        description:
          "We assess the structure, locate utilities, flag load-bearing elements, and provide a firm quote.",
      },
      {
        title: "Protection & Disconnection",
        description:
          "Containment barriers go up, floors are protected, and utilities in the work zone are safely capped.",
      },
      {
        title: "Controlled Demolition",
        description:
          "Systematic tear-out that removes what should go and protects what should stay.",
      },
      {
        title: "Haul-Off & Broom-Clean Finish",
        description:
          "All debris is loaded and hauled the same day where possible, leaving a swept, ready-to-build space.",
      },
    ],
    faqs: [
      {
        question: "Can you tell if my wall is load-bearing?",
        answer:
          "Yes. We evaluate framing, joist direction, and what's above the wall. If it's load-bearing, we'll explain your options — including installing an engineered beam so the wall can still come out.",
      },
      {
        question: "Is debris hauling included?",
        answer:
          "Always. Our demolition quotes include loading, hauling, and disposal fees — no surprise dumpster charges.",
      },
      {
        question: "How messy will demolition be?",
        answer:
          "Demo is inherently dusty, but containment barriers, floor protection, and air filtration keep it confined to the work zone. We broom-clean daily.",
      },
      {
        question: "Do you do exterior demolition like decks and sheds?",
        answer:
          "Yes — decks, sheds, pergolas, fences, and concrete flatwork removal are all within scope, including haul-off.",
      },
    ],
    keywords: [
      "demolition contractor",
      "interior demolition",
      "kitchen tear out",
      "wall removal",
      "deck removal",
      "debris hauling",
    ],
    image: "/images/services/demolition.svg",
    imageAlt:
      "Crew performing controlled interior demolition with protective barriers in place",
    priceRange: "$",
    duration: "1–4 days",
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const serviceSlugs = services.map((s) => s.slug);
