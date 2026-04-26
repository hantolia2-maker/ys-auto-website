export const BUSINESS_INFO = {
  name: "Y & S Auto and Tires",
  location: "1900 8th Ave Suite 200",
  city: "Fort Worth",
  state: "TX",
  zip: "76110",
  phone: "+1  817-243-7056",
  phoneRaw: "18172437056",
  hours: [
    { day: "Mon - Fri", time: "8:00 AM - 6:00 PM" },
    { day: "Sat", time: "8:00 AM - 4:00 PM" },
    { day: "Sun", time: "Closed" }
  ]
};

export const REVIEWS = [
  {
    name: "Qusai I",
    text: "Excellent Tire Shop! Super helpful and professional! They patched my tire quickly and did an amazing job — no issues at all. The staff was very friendly.",
    date: "4 months ago"
  },
  {
    name: "Lloyd Couleur",
    text: "This shop is great! It’s hard to find honest hard working shop owners that value the customer relationship, quality, and reasonable pricing like these guys do.",
    date: "3 months ago"
  },
  {
    name: "Gerald Fomenky",
    text: "Had to leave this review because it's not everyday you get excellent service like this. Jay and Safe were amazing super friendly and had the best service.",
    date: "2 months ago"
  },
  {
    name: "Luke Anthony",
    text: "Tire had been plugged by other shops and failed to do a good job. Was down to 2 PSI and Y&S patched the tire and helped fill all of the old plugged holes. Fantastic service.",
    date: "3 months ago"
  },
  {
    name: "Aireas",
    text: "They give great excellent service. My tire was messed up and they fixed it for free. I love the service. I’ve been good with them for two years now.",
    date: "2 months ago"
  },
  {
    name: "Alexa Alvarez",
    text: "Went above and beyond with their service! I was stuck with a flat tire and unable to move my car, and they quickly came out to my location and changed the tire for me.",
    date: "3 months ago"
  },
  {
    name: "Drummer Boii",
    text: "I’m a college kid and he took really good care of me. Very friendly and easy going guy. I went in to get some air in my tires, we found a nail in one of them.",
    date: "4 months ago"
  },
  {
    name: "Danny Balvin",
    text: "Customer service was awesome! I accidentally ordered the wrong size tire and they were able return it, get the right size, and put it on the wheel next day!",
    date: "2 months ago"
  },
  {
    name: "Mikayla Sells",
    text: "Came in with a nail in my tire and they took care of it quickly and professionally. Pricing was fair and I was back on the road in no time. Recommend!",
    date: "2 months ago"
  }
];

export const SERVICES = [
  {
    id: 'diagnostics',
    title: "Advanced Diagnostics",
    description: "Using the latest OEM-level scanning tools, we perform deep-system diagnostics to identify electrical, engine, and transmission issues precisely. We don't just clear codes; we find the root cause to prevent recurring failures.",
    icon: "Activity",
    benefits: ["Finds hidden faults", "Prevents engine damage", "Saves long-term costs"],
    signs: ["Check engine light on", "Loss of engine power", "Intermittent stalling"]
  },
  {
    id: 'brakes',
    title: "Complete Brake Service",
    description: "Our brake specialists handle everything from hydraulic fluid flushes and ABS diagnostics to standard pad and rotor replacements. We use premium ceramic or semi-metallic pads to ensure noise-free, high-performance stopping power.",
    icon: "ShieldAlert",
    benefits: ["Zero brake noise", "Improved stopping distance", "Enhanced ABS response"],
    signs: ["Squealing or grinding", "Vibration in the wheel", "Brake pedal feels soft"]
  },
  {
    id: 'alignment',
    title: "Computerized Alignment",
    description: "Our state-of-the-art alignment system ensures your vehicle's steering and suspension angles are set to exact factory specifications. This maximizes tire life and ensures your vehicle tracks perfectly straight on the highway.",
    icon: "Compass",
    benefits: ["Maximizes tire mileage", "Better fuel economy", "Reduces steering strain"],
    signs: ["Car pulls to one side", "Off-center steering wheel", "Rapid tire wear"]
  },
  {
    id: 'oil-change',
    title: "Performance Oil Service",
    description: "More than just a quick flush. We perform a multi-point inspection with every oil change, using only high-quality synthetic oils and filters that meet your manufacturer's dexos, European, or heavy-duty specifications.",
    icon: "Droplets",
    benefits: ["Optimal engine cooling", "Internal component protection", "Sludge prevention"],
    signs: ["Oil change light active", "Engine ticking sounds", "Oil appears dark/thick"]
  },
  {
    id: 'suspension',
    title: "Steering & Suspension",
    description: "We service shocks, struts, ball joints, and control arms to restore your vehicle's original ride quality and safety. A tight suspension is critical for handling and preventing secondary wear on tires and steering racks.",
    icon: "Wrench",
    benefits: ["Smoother highway ride", "Improved cornering control", "Safer load handling"],
    signs: ["Vehicle bouncing excessively", "Knocking over bumps", "Body roll in turns"]
  },
  {
    id: 'tires',
    title: "Tire Sales & Repair",
    description: "We are your source for all major tire brands. Our service includes precision mounting, high-speed balancing, and TPMS sensor calibration. We also provide professional plug-and-patch repairs that meet RMA safety standards.",
    icon: "Disc",
    benefits: ["Superior road traction", "Same-day installation", "TPMS system resets"],
    signs: ["Tread depth below 2/32", "Visible tire bulges", "Frequent pressure loss"]
  }
];
