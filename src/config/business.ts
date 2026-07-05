export interface BusinessConfig {
  name: string;
  shortName: string;
  phone: string;
  phoneRaw: string;
  email: string;
  licenseNumber: string;
  googleRating: number;
  googleReviewCount: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    mapEmbedUrl: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
  theme: {
    primary: string;       // Dynamic primary color (Hex)
    primaryHover: string;  // Hover state of primary color (Hex)
    accentDark: string;    // Dark theme details / primary CTA background
    accentDarkHover: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    yelp?: string;
  };
  trustGuarantees: Array<{
    title: string;
    description: string;
    icon: string; // Lucide icon name
  }>;
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
    features: string[];
  }>;
  whyChooseUs: Array<{
    title: string;
    description: string;
    icon: string; // Lucide icon name
  }>;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    verified: boolean;
  }>;
  gallery: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    beforeUrl: string;
    afterUrl: string;
  }>;
  serviceAreas: {
    counties: string[];
    cities: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const businessConfig: BusinessConfig = {
  name: "Apex Plumbing & Drain",
  shortName: "Apex Plumbing",
  phone: "(800) 412-2515",
  phoneRaw: "+18004122515",
  email: "service@apexplumbingusa.com",
  licenseNumber: "LIC #PL-9988220",
  googleRating: 4.9,
  googleReviewCount: 524,
  address: {
    street: "100 Pine St, Suite 1200",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    // Premium Google Map embed URL (San Francisco Pine St area)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3152.8858548174415!2d-122.40192532344715!3d37.79282361113693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062828b8cf7%3A0x6b1cc8c0282b5e28!2s100%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
  },
  hours: {
    weekday: "Mon - Fri: 7:00 AM - 7:00 PM",
    saturday: "Sat: 8:00 AM - 5:00 PM",
    sunday: "Sun: Closed (Emergency Only)",
    emergency: "24/7 Emergency Response Available"
  },
  theme: {
    primary: "#0A58CA",       // Electric Royal Blue
    primaryHover: "#08449C",  // Deep Navy Blue
    accentDark: "#0F172A",    // Premium Dark Slate
    accentDarkHover: "#1E293B" // Slightly lighter Slate
  },
  socials: {
    facebook: "https://facebook.com/apexplumbingusa",
    instagram: "https://instagram.com/apexplumbingusa",
    yelp: "https://yelp.com/biz/apex-plumbing-usa"
  },
  trustGuarantees: [
    {
      title: "Licensed Plumbers",
      description: "Fully certified state-level technicians.",
      icon: "Shield"
    },
    {
      title: "100% Insured",
      description: "Complete liability and worker protection.",
      icon: "CheckCircle"
    },
    {
      title: "Upfront Pricing",
      description: "No hidden fees or surprise charges.",
      icon: "DollarSign"
    },
    {
      title: "Workmanship Warranty",
      description: "Guaranteed satisfaction on every job.",
      icon: "Award"
    }
  ],
  services: [
    {
      id: "emergency",
      title: "Emergency Plumbing",
      description: "Rapid-response 24/7 emergency dispatch for burst pipes, flooding, and critical failures.",
      icon: "Flame",
      features: ["24/7 Availability", "Rapid Dispatch", "Flood Control", "Main Shutoff Locate"]
    },
    {
      id: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Clear clogged drains, root intrusions, and sluggish sewers using hydro-jetting technology.",
      icon: "Droplets",
      features: ["Hydro-Jetting", "Clog Removal", "Camera Inspection", "Rooter Service"]
    },
    {
      id: "water-heaters",
      title: "Water Heater Repair",
      description: "Professional diagnostics, maintenance, and installations for tankless and standard models.",
      icon: "Thermometer",
      features: ["Tankless Systems", "Gas & Electric", "Anode Rod Swap", "System Flushes"]
    },
    {
      id: "leak-detection",
      title: "Leak Detection",
      description: "Non-invasive electronic leak detection for slab leaks, hidden pipes, and structural dampness.",
      icon: "Search",
      features: ["Acoustic Detection", "Thermal Imaging", "Slab Leak Repair", "Utility Locating"]
    },
    {
      id: "pipe-repair",
      title: "Pipe Repair & Repiping",
      description: "Repair aging lines or perform full-home copper/PEX repiping for rust-free high-pressure water.",
      icon: "Wrench",
      features: ["Copper & PEX", "Burst Pipe Repair", "Valve Replacements", "Pressure Regulators"]
    },
    {
      id: "sewer-repair",
      title: "Sewer Line Repair",
      description: "Trenchless sewer line replacements, pipelining, and diagnostic camera scans with zero property damage.",
      icon: "Activity",
      features: ["Trenchless Technology", "Sewer Cameras", "Pipe Bursting", "Line Excavation"]
    },
    {
      id: "toilet-repair",
      title: "Toilet & Fixture Repair",
      description: "Fix running toilets, leaking valves, and install high-efficiency modern flushing suites.",
      icon: "Trash2",
      features: ["Running Toilets", "Wax Ring Seal", "Flapper Replace", "Clog Extraction"]
    },
    {
      id: "faucet-install",
      title: "Faucet & Sink Installation",
      description: "Upgrade kitchen and bathroom faucets, basins, and disposal systems with modern designer units.",
      icon: "Hammer",
      features: ["Faucet Upgrades", "Undermount Sinks", "Garbage Disposals", "Drain Assemblies"]
    }
  ],
  whyChooseUs: [
    {
      title: "Fast Response Times",
      description: "We dispatch nearby technicians immediately to resolve your plumbing distress fast.",
      icon: "Zap"
    },
    {
      title: "Expert Technicians",
      description: "Our team consists of licensed, background-checked master plumbers who know their craft.",
      icon: "Users"
    },
    {
      title: "Transparent Pricing",
      description: "We provide detailed upfront quotes before starting any work. No hourly surprises.",
      icon: "Sliders"
    },
    {
      title: "Family Owned & Operated",
      description: "We treat our customers like family, delivering local care backed by premium standards.",
      icon: "Home"
    },
    {
      title: "Highly Rated Locally",
      description: "Over 500+ five-star Google ratings from your neighbors in the community.",
      icon: "Star"
    },
    {
      title: "Guaranteed Workmanship",
      description: "We back our services with comprehensive warranties on all parts and labor.",
      icon: "ShieldAlert"
    }
  ],
  steps: [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Contact us via call or our simple web booking form to describe your request and pick a date."
    },
    {
      number: 2,
      title: "On-Site Inspection",
      description: "A licensed technician arrives at your door, inspects the issue, and diagnoses the root cause."
    },
    {
      number: 3,
      title: "Upfront Quote",
      description: "We present a flat-rate quote with multiple options. Work only starts after your approval."
    },
    {
      number: 4,
      title: "Problem Solved",
      description: "We execute the repair efficiently, clean up the workspace, and back it with our warranty."
    }
  ],
  reviews: [
    {
      id: "rev-1",
      author: "Sarah Jenkins",
      rating: 5,
      text: "Our water heater burst at 10 PM on a Sunday. Apex had a technician at our door in 45 minutes. Upfront pricing was fair and the service was outstanding! The new tankless install works perfectly.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: "rev-2",
      author: "Michael R.",
      rating: 5,
      text: "Extremely professional. They used a camera to show us the root intrusion in our sewer line, explained the trenchless repair options, and completed the work in a single day. Excellent service.",
      date: "1 month ago",
      verified: true
    },
    {
      id: "rev-3",
      author: "David L.",
      rating: 5,
      text: "Honest plumbers are hard to find. Apex gave me a flat-rate quote to fix my leaking kitchen sink and toilet. The price was exactly as quoted, and the technician was incredibly clean and polite.",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: "rev-4",
      author: "Amanda K.",
      rating: 5,
      text: "Used Apex for leak detection in our crawlspace. They pinpointed the leak in minutes using acoustic technology and repaired it immediately. Highly recommend their prompt and friendly service!",
      date: "2 months ago",
      verified: true
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Sewer Pipe Hydro-Jetting",
      description: "Full restoration of blocked main sewer line filled with grease and tree roots.",
      category: "Drain Cleaning",
      beforeUrl: "/images/sewer-before.webp",
      afterUrl: "/images/sewer-after.webp"
    },
    {
      id: "gal-2",
      title: "Tankless Water Heater Install",
      description: "Upgraded an old leaky 50-gallon tank to a premium Navien condensing tankless unit.",
      category: "Water Heaters",
      beforeUrl: "/images/heater-before.webp",
      afterUrl: "/images/heater-after.webp"
    },
    {
      id: "gal-3",
      title: "Whole-House PEX Repiping",
      description: "Replaced old rusting galvanized steel piping with a brand-new clean PEX manifold system.",
      category: "Repiping",
      beforeUrl: "/images/repiping-before.webp",
      afterUrl: "/images/repiping-after.webp"
    }
  ],
  serviceAreas: {
    counties: ["San Francisco County", "San Mateo County", "Marin County"],
    cities: [
      "San Francisco", "South San Francisco", "Daly City", "San Bruno", 
      "Millbrae", "Burlingame", "San Mateo", "Foster City", "Redwood City", 
      "San Carlos", "Belmont", "Pacifica", "Sausalito", "Mill Valley", 
      "Tiburon", "San Rafael", "Novato", "Corte Madera", "Larkspur"
    ]
  },
  faqs: [
    {
      question: "Do you charge extra for emergency services or weekends?",
      answer: "We offer flat-rate pricing regardless of the time of day or weekend. However, emergency dispatch outside of regular business hours will be quoted transparently on-call before our technician is dispatched."
    },
    {
      question: "How long will it take for a plumber to arrive?",
      answer: "For standard appointments, we offer convenient 2-hour arrival windows. For emergency situations like active flooding, our typical response time is under 60 minutes depending on traffic."
    },
    {
      question: "Are your plumbers licensed, bonded, and insured?",
      answer: "Yes, absolutely. All of our technicians are fully licensed, background-checked, and drug-tested. The business carries $2M in general liability insurance and worker's compensation for your peace of mind."
    },
    {
      question: "What is the difference between a traditional and a tankless water heater?",
      answer: "Traditional heaters preheat and store hot water in a tank. Tankless water heaters heat water on-demand as it flows, offering endless hot water, taking up 80% less space, and reducing energy bills by up to 30%."
    },
    {
      question: "Do you provide free estimates?",
      answer: "We offer zero-obligation upfront quotes once we inspect the issue in person. While there is a minor service call dispatch fee to cover travel and diagnostics, this fee is 100% waived if you approve the work."
    }
  ]
};
