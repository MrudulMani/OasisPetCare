// Oasis Pet Care Services & Store Data

export const BUSINESS_INFO = {
  name: "Oasis Pet Care",
  category: "Veterinary Clinic, Grooming & Pet Shop",
  rating: 4.3,
  reviewCount: 226,
  phone: "096633 31798",
  phoneRaw: "+919663331798",
  whatsappNumber: "919663331798",
  address: "No. 136, Chandrasekarapura, Meenakshi Gardens, Akshayanagar, Bengaluru, Karnataka 560076",
  landmark: "Opposite Skyphool Fitness, Doddakammanahalli area",
  mapsLink: "https://maps.app.goo.gl/PZ88Fk1kq4nm9TQ66",
  openHour: 9, // 9:00 AM
  closeHour: 22, // 10:00 PM
  openDays: "Mon - Sun (Open All Days)"
};

export const SERVICES = [
  // Veterinary & Surgery
  {
    id: "vet-1",
    title: "Advanced Medical Care",
    category: "veterinary",
    icon: "Stethoscope",
    description: "Comprehensive medical evaluation and treatment for dogs and cats with specialized clinical protocols.",
    details: "Includes thorough clinical exam, vital monitoring, diagnostic workup, and customized treatment plans for acute and chronic conditions.",
    badge: "Clinical Specialty"
  },
  {
    id: "vet-2",
    title: "General Surgery",
    category: "veterinary",
    icon: "Activity",
    description: "Sterile surgical procedures including spay, neuter, soft tissue surgeries, and emergency surgical care.",
    details: "Performed by experienced veterinary surgeons with full pre-op diagnostics, anesthetic monitoring, and post-op care.",
    badge: "Surgery Suite"
  },
  {
    id: "vet-3",
    title: "Emergency & Critical Care",
    category: "veterinary",
    icon: "Zap",
    description: "Immediate life-saving emergency medical interventions, trauma care, and fluid therapy.",
    details: "Priority emergency response during operating hours. Call +91 96633 31798 immediately for critical assistance.",
    badge: "Priority Service"
  },
  {
    id: "vet-4",
    title: "Pet Vaccinations",
    category: "veterinary",
    icon: "ShieldCheck",
    description: "Core and non-core vaccination protocols for puppies, kittens, adult dogs, and cats.",
    details: "Includes Anti-Rabies, DHPPi, 7-in-1, 9-in-1, Tricat, and Kennel Cough vaccines with official pet health records.",
    badge: "Essential Care"
  },
  {
    id: "vet-5",
    title: "Lab & Diagnostics",
    category: "veterinary",
    icon: "Microscope",
    description: "In-house blood analysis, skin scrapings, urine tests, fecal checks, and diagnostic screenings.",
    details: "Rapid accurate diagnostic results to detect infections, organ function, parasites, and internal health status.",
    badge: "In-House Lab"
  },
  {
    id: "vet-6",
    title: "Preventive Health Care",
    category: "veterinary",
    icon: "HeartPulse",
    description: "Routine wellness checkups, nutritional counseling, weight management, and parasite control.",
    details: "Keep your pets thriving with regular preventative health exams tailored to their breed and age stage.",
    badge: "Wellness"
  },
  {
    id: "vet-7",
    title: "Home Visit Services",
    category: "veterinary",
    icon: "Home",
    description: "Veterinary home consultations and basic care brought to your doorstep for anxious or senior pets.",
    details: "Convenient home appointments across Akshayanagar, Doddakammanahalli, and surrounding Bengaluru areas.",
    badge: "Doorstep Care"
  },
  {
    id: "vet-8",
    title: "Cat Doctor Consultation",
    category: "veterinary",
    icon: "Cat",
    description: "Feline-friendly gentle medical examination and specialized health care for cats and kittens.",
    details: "Stress-free consultation environment designed specifically for feline patience and comfort.",
    badge: "Feline Specialist"
  },

  // Grooming & Styling
  {
    id: "groom-1",
    title: "Dog Full Service Grooming",
    category: "grooming",
    icon: "Scissors",
    description: "Complete styling haircut, breed-specific trimming, bath, blow dry, nail clipping, and ear cleaning.",
    details: "Our expert stylists craft comfortable, sleek cuts using premium gentle pet shampoos and conditioners.",
    badge: "Most Popular"
  },
  {
    id: "groom-2",
    title: "Dog Bathing & Blow Dry",
    category: "grooming",
    icon: "Bath",
    description: "Deep cleansing therapeutic bath, de-shedding massage, coat conditioning, and professional warm blow dry.",
    details: "Leaves your dog smelling fresh, silky, and free of dirt and loose fur.",
    badge: "Hygiene Boost"
  },
  {
    id: "groom-3",
    title: "Dog Anal Gland Expression",
    category: "grooming",
    icon: "CheckCircle",
    description: "Safe and hygienic manual anal gland cleaning to prevent impaction, infection, and scooting discomfort.",
    details: "Performed by trained grooming technicians to ensure your pet's comfort and hygiene.",
    badge: "Essential Hygiene"
  },
  {
    id: "groom-4",
    title: "Dog Ear Cleaning",
    category: "grooming",
    icon: "Sparkles",
    description: "Gentle ear canal flushing, wax removal, and hair plucking to prevent ear infections and mites.",
    details: "Soothing natural antiseptic ear wash used to keep ears healthy and odor-free.",
    badge: "Preventative"
  },
  {
    id: "groom-5",
    title: "Dog Tooth Brushing",
    category: "grooming",
    icon: "Smile",
    description: "Oral hygiene treatment with pet-safe enzymatic toothpaste and fresh breath spray.",
    details: "Helps reduce plaque build-up, freshens breath, and supports long-term dental health.",
    badge: "Dental Care"
  },
  {
    id: "groom-6",
    title: "Dog Nail Trimming & Buffing",
    category: "grooming",
    icon: "Scissors",
    description: "Precision nail clipping and smooth edge filing to ensure comfortable walking and healthy paws.",
    details: "Quick and stress-free paw handling by experienced groomers.",
    badge: "Paw Care"
  },
  {
    id: "groom-7",
    title: "Flea & Tick Treatment",
    category: "grooming",
    icon: "ShieldAlert",
    description: "Medicated antiparasitic bath and topical spot-on treatment to eliminate fleas, ticks, and mites.",
    details: "Relieves itching immediately and protects your pet from flea-borne allergies.",
    badge: "Treatment"
  },
  {
    id: "groom-8",
    title: "Cat Grooming & Bathing",
    category: "grooming",
    icon: "Cat",
    description: "Gentle cat bathing, lion cuts, sanitary trims, hair dematting, ear cleaning, and cat nail trimming.",
    details: "Handled with extreme care, patience, and soft techniques specifically tailored for feline pets.",
    badge: "Feline Spa"
  },

  // Pet Supplies & Shop
  {
    id: "shop-1",
    title: "Premium Dog Supplies",
    category: "shop",
    icon: "ShoppingBag",
    description: "High-quality dog food brands, organic treats, durable leashes, harnesses, and ergonomic beds.",
    details: "Wide variety of leading international and vet-approved nutrition brands.",
    badge: "In Store"
  },
  {
    id: "shop-2",
    title: "Cat Supplies & Litter",
    category: "shop",
    icon: "Package",
    description: "Balanced feline food formulas, wet pouches, cat litter, scratching posts, and interactive toys.",
    details: "Everything your indoor or outdoor cat needs for health and play.",
    badge: "In Store"
  }
];

export const GROOMING_PRICING = {
  dog: {
    small: { baseBath: 699, fullGroom: 1199, name: "Small Dog (Chihuahua, Shih Tzu, Pomeranian)" },
    medium: { baseBath: 899, fullGroom: 1499, name: "Medium Dog (Beagle, Cocker Spaniel, Indie)" },
    large: { baseBath: 1199, fullGroom: 1899, name: "Large Dog (Golden Retriever, Lab, German Shepherd)" },
    xlarge: { baseBath: 1499, fullGroom: 2399, name: "Extra Large (Saint Bernard, Great Dane, Husky)" }
  },
  cat: {
    standard: { baseBath: 799, fullGroom: 1399, name: "All Cat Breeds (Persian, Domestic Shorthair, Indie)" }
  },
  addons: [
    { id: "analGland", name: "Anal Gland Expression", price: 249 },
    { id: "teethBrushing", name: "Tooth Brushing & Breath Spray", price: 199 },
    { id: "tickBath", name: "Anti-Tick Medicated Dip", price: 349 },
    { id: "nailBuffing", name: "Nail Trimming & Smooth Filing", price: 149 },
    { id: "earSanitizing", name: "Ear Flushing & Wax Cleaning", price: 149 }
  ]
};

export const REVIEWS = [
  {
    id: 1,
    author: "Priya Sharma",
    rating: 5,
    date: "Recent Google Review",
    text: "Variety of products @ best price loved their service. The doctor took great care during my puppy's vaccination routine. Highly recommended pet care center in Doddakammanahalli!",
    tag: "Vaccination & Shop"
  },
  {
    id: 2,
    author: "Rahul Verma",
    rating: 5,
    date: "Recent Google Review",
    text: "One place for all you need for your puppy / dog. From grooming to vet checkups and high quality dog food. Very attentive staff and clean facilities.",
    tag: "One-Stop Pet Care"
  },
  {
    id: 3,
    author: "Ananya Nair",
    rating: 5,
    date: "Recent Google Review",
    text: "Beautiful area and good behavior Dr. with all staff. My Persian cat is usually very scared during grooming, but they handled her with extreme gentleness. Excellent cat doctor!",
    tag: "Cat Doctor & Grooming"
  },
  {
    id: 4,
    author: "Karthik Raja",
    rating: 5,
    date: "Recent Google Review",
    text: "Prompt emergency response and accurate diagnosis. Oasis Pet Care has been our go-to vet clinic for 2 years. Very reasonable prices and genuine care.",
    tag: "Veterinary Care"
  }
];

export const SHOP_PRODUCTS = [
  {
    id: "prod-1",
    name: "Royal Canin Breed Nutrition",
    category: "Dog Food",
    price: "₹1,250",
    image: "🐕",
    desc: "Targeted health nutrition for Golden Retrievers, Labradors, and Shih Tzus."
  },
  {
    id: "prod-2",
    name: "Orijen & Acana Grain-Free Treats",
    category: "Pet Treats",
    price: "₹450",
    image: "🍖",
    desc: "High-protein freeze-dried natural treats for training and rewards."
  },
  {
    id: "prod-3",
    name: "Organic Anti-Tick & Flea Shampoo",
    category: "Grooming",
    price: "₹599",
    image: "🧴",
    desc: "Neem & Tea Tree oil therapeutic coat cleanser for sensitive skin."
  },
  {
    id: "prod-4",
    name: "Clumping Odor-Control Cat Litter",
    category: "Cat Care",
    price: "₹699",
    image: "🐱",
    desc: "100% natural bentonite quick-clumping litter with lavender scent."
  },
  {
    id: "prod-5",
    name: "Ergonomic Padded Pet Harness",
    category: "Accessories",
    price: "₹899",
    image: "🦮",
    desc: "No-pull breathable chest harness for daily walks and outdoor control."
  },
  {
    id: "prod-6",
    name: "Pet Dental Enzymatic Gel & Toothbrush",
    category: "Healthcare",
    price: "₹349",
    image: "🪥",
    desc: "Vet recommended dental hygiene kit to prevent tartar buildup."
  }
];
