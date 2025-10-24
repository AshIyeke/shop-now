import airpods from "./images/airpods.png";
import airpods2 from "./images/airpods2.png";
import headphones from "./images/headphones.png";
import earbuds from "./images/earbuds.png";

const Products = [
  {
    id: 1,
    name: "StellarPhone X1",
    brand: "Galaxy",
    category: "Smartphones",
    price: 899.99,
  // no phone image available in repo; fall back to a public hero image
  image: earbuds,
    description:
      "The latest flagship smartphone with a stunning display and pro-grade camera system. Experience the future in your hands.",
    rating: 4.8,
    numReviews: 1250,
    stock: 150,
    features: [
      "6.7-inch Super Retina XDR display",
      "A17 Pro chip",
      "Triple-camera system for stunning photos",
      "5G capable for superfast downloads",
    ],
    specifications: {
      color: "Cosmic Black",
      storage: "256GB",
    },
  },
  {
    id: 2,
    name: "AeroPods Pro 2",
    brand: "Acoustic",
    category: "Audio",
    price: 249.0,
  // use static import for audio product that exists in repo
  image: airpods2,
    description:
      "Immersive sound, active noise cancellation, and a customizable fit for all-day comfort. The second generation of our best-selling earbuds.",
    rating: 3.0,
    numReviews: 3400,
    stock: 300,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Sweat and water resistant (IPX4)",
      "Up to 6 hours of listening time with a single charge",
    ],
    specifications: {
      color: "White",
    },
  },
  {
    id: 3,
    name: "ChronoWatch Series 9",
    brand: "TimeWarp",
    category: "Wearables",
    price: 399.0,
  // no watch image available; use headphones placeholder from repo
  image: headphones,
    description:
      "Your essential companion for a healthy life. Track your workouts, monitor your health, and stay connected on the go.",
    rating: 4.7,
    numReviews: 850,
    stock: 200,
    features: [
      "Always-On Retina display",
      "ECG app",
      "Blood Oxygen app",
      "Fall Detection and Emergency SOS",
    ],
    specifications: {
      color: "Midnight Aluminum",
      size: "45mm",
    },
  },
  {
    id: 4,
    name: "NovaBook Air",
    brand: "Innovate",
    category: "Laptops",
    price: 1299.0,
  // no laptop image available; fall back to public hero image
  image: airpods,
    description:
      "Incredibly thin and light, with a brilliant Liquid Retina display and the powerful M3 chip for blazing-fast performance.",
    rating: 4.6,
    numReviews: 980,
    stock: 80,
    features: [
      "13.6-inch Liquid Retina display",
      "M3 chip with 8-core CPU and 10-core GPU",
      "Up to 18 hours of battery life",
      "1080p FaceTime HD camera",
    ],
    specifications: {
      color: "Starlight",
      storage: "512GB SSD",
      memory: "16GB Unified Memory",
    },
  },
  // {
  //   id: 5,
  //   name: "GameSphere 5",
  //   brand: "Nexus",
  //   category: "Gaming",
  //   price: 499.99,
  //   image: "/products/gamesphere.jpg",
  //   description:
  //     "Next-generation gaming console with ultra-fast SSD, immersive 3D audio, and breathtaking 4K visuals. The future of gaming is here.",
  //   rating: 4.9,
  //   numReviews: 5200,
  //   stock: 120,
  //   features: [
  //     "Ultra-high-speed SSD for near-instant load times",
  //     "Haptic feedback and adaptive triggers on controller",
  //     "Ray tracing for incredible realism",
  //     "Supports 8K output and 120fps gaming",
  //   ],
  //   specifications: {
  //     color: "Glacier White",
  //     storage: "1TB Custom NVMe SSD",
  //   },
  // },
  // {
  //   id: 6,
  //   name: "PowerCore 20K",
  //   brand: "ChargeUp",
  //   category: "Accessories",
  //   price: 49.99,
  //   image: "/products/powercore.jpg",
  //   description:
  //     "A high-capacity portable charger to keep your gadgets powered on the go. Compact, fast, and reliable.",
  //   rating: 4.7,
  //   numReviews: 8900,
  //   stock: 500,
  //   features: [
  //     "20,000mAh capacity",
  //     "High-speed charging with PowerIQ technology",
  //     "Dual USB-A and USB-C ports",
  //     "Compact and travel-friendly design",
  //   ],
  //   specifications: {
  //     color: "Black",
  //     output: "20W",
  //   },
  // },
  // {
  //   id: 7,
  //   name: "HomeHub Max",
  //   brand: "Connecta",
  //   category: "Smart Home",
  //   price: 129.99,
  //   image: "/products/homehub.jpg",
  //   description:
  //     "The ultimate smart home hub with a built-in display and powerful speaker. Control your home, watch videos, and listen to music with your voice.",
  //   rating: 4.6,
  //   numReviews: 1500,
  //   stock: 180,
  //   features: [
  //     "10-inch HD touchscreen",
  //     "Control compatible smart devices",
  //     "Built-in Google Assistant and Alexa",
  //     "High-fidelity audio speaker",
  //   ],
  //   specifications: {
  //     color: "Chalk",
  //   },
  // },
  // {
  //   id: 8,
  //   name: "SkyRider Drone",
  //   brand: "AeroView",
  //   category: "Drones",
  //   price: 799.0,
  //   image: "/products/skyrider.jpg",
  //   description:
  //     "Capture stunning aerial footage with this easy-to-fly drone. Features a 4K camera, intelligent flight modes, and a compact, foldable design.",
  //   rating: 4.8,
  //   numReviews: 750,
  //   stock: 60,
  //   features: [
  //     "4K HDR Video",
  //     "3-axis gimbal for stable footage",
  //     "30-minute flight time",
  //     "Obstacle sensing in three directions",
  //   ],
  //   specifications: {
  //     color: "Arctic White",
  //     weight: "249g",
  //   },
  // },
  // {
  //   id: 9,
  //   name: "VirtuaQuest 3",
  //   brand: "RealityShift",
  //   category: "VR",
  //   price: 499.99,
  //   image: "/products/virtuaquest.jpg",
  //   description:
  //     "Step into new worlds with the most advanced all-in-one VR headset. Experience breathtaking games and social experiences like never before.",
  //   rating: 4.7,
  //   numReviews: 2100,
  //   stock: 90,
  //   features: [
  //     "Blazing-fast processor and high-resolution display",
  //     "Full-color Passthrough for mixed reality",
  //     "Redesigned Touch Plus controllers",
  //     "Vast library of games and experiences",
  //   ],
  //   specifications: {
  //     color: "White",
  //     storage: "128GB",
  //   },
  // },
  // {
  //   id: 10,
  //   name: "StreamCam Pro",
  //   brand: "Visionary",
  //   category: "Accessories",
  //   price: 149.99,
  //   image: "/products/streamcam.jpg",
  //   description:
  //     "A professional-grade webcam for streaming and video conferencing. Delivers crystal-clear 1080p video at 60fps.",
  //   rating: 4.8,
  //   numReviews: 1800,
  //   stock: 220,
  //   features: [
  //     "Full 1080p at 60fps",
  //     "Smart auto-focus and exposure",
  //     "Dual microphone for clear stereo audio",
  //     "Versatile mounting options",
  //   ],
  //   specifications: {
  //     color: "Graphite",
  //     connection: "USB-C",
  //   },
  // },
];

export default Products;

 