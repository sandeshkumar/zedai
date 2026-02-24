export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const RESULTS = [
  { numValue: 3, suffix: "X", decimals: 0, label: "More Enquiries", description: "Average lead increase within 60 days" },
  { numValue: 1.2, suffix: "s", decimals: 1, label: "Load Time", description: "Google rewards fast sites with rankings" },
  { numValue: 40, suffix: "%", decimals: 0, label: "Higher Conversion", description: "vs template websites" },
  { numValue: 150, suffix: "+", decimals: 0, label: "Projects Delivered", description: "Across 20+ industries" },
] as const;

export const SERVICES = [
  { icon: "🌐", title: "Business Websites", description: "Fast, mobile-first, SEO-optimized websites that rank on Google and turn visitors into paying customers." },
  { icon: "🛒", title: "E-Commerce Stores", description: "Online stores with seamless checkout, inventory management, and payment gateways to sell 24/7." },
  { icon: "📱", title: "Mobile Apps", description: "Native Android & iOS apps with beautiful UI, push notifications, and buttery-smooth performance." },
  { icon: "🤖", title: "AI-Powered Solutions", description: "Chatbots, automation, and AI analytics that give your business an unfair competitive advantage." },
  { icon: "📈", title: "SEO & Marketing", description: "Get found on Google. Data-driven SEO and ad campaigns that bring measurable, qualified traffic." },
  { icon: "🔧", title: "Ongoing Support", description: "Updates, security, monitoring. Your site stays fast, safe, and online — we guarantee it." },
] as const;

export const BEFORE_ITEMS = [
  "Slow loading (8+ seconds)",
  "Not mobile friendly",
  "No SEO, invisible on Google",
  "Template design, no trust",
  "No lead capture system",
] as const;

export const AFTER_ITEMS = [
  "Lightning fast (1.2s load)",
  "Mobile-first responsive",
  "SEO-optimized, page 1 Google",
  "Custom branded design",
  "WhatsApp + form lead capture",
] as const;

export const PROCESS_STEPS = [
  { number: "01", title: "Free Consultation", description: "Tell us your goals. We create a custom strategy — free." },
  { number: "02", title: "Design & Preview", description: "We design and show you a live preview to refine." },
  { number: "03", title: "Build & Test", description: "Clean code, fast loading, mobile-perfect. Fully tested." },
  { number: "04", title: "Launch & Grow", description: "Go live with analytics, SEO, and ongoing support." },
] as const;

export const TESTIMONIALS = [
  {
    stars: 5,
    quote: "ZED Labs completely transformed our online presence. We went from zero online orders to 50+ per week within the first month. Best investment we've made.",
    name: "Rahul K.",
    initials: "RK",
    role: "E-Commerce Business Owner, Mumbai",
  },
  {
    stars: 5,
    quote: "Professional, fast, and they actually understand business. The app they built us has a 4.8 rating on the Play Store. Couldn't be happier.",
    name: "Sara M.",
    initials: "SM",
    role: "Startup Founder, Bangalore",
  },
  {
    stars: 5,
    quote: "Our old website was embarrassing. ZED Labs gave us a site that looks like it cost ₹5 lakhs but at a fraction of the price. Leads come in daily now.",
    name: "Amit P.",
    initials: "AP",
    role: "Restaurant Chain Owner, Delhi",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    description: "For small businesses getting online",
    oldPrice: "₹25,000",
    price: "₹14,999",
    priceSuffix: "one-time",
    popular: false,
    features: [
      "5-Page Responsive Website",
      "Mobile Optimized",
      "Basic SEO Setup",
      "Contact Form + WhatsApp",
      "Google Analytics",
      "15-Day Free Support",
    ],
    ctaLabel: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    name: "Business Pro",
    description: "For businesses that want real results",
    oldPrice: "₹50,000",
    price: "₹34,999",
    priceSuffix: "one-time",
    popular: true,
    features: [
      "10+ Page Custom Website",
      "Advanced SEO & Speed",
      "CMS / Admin Panel",
      "Lead Capture & CRM",
      "Blog + Social Integration",
      "30-Day Free Support",
    ],
    ctaLabel: "Get Started →",
    ctaVariant: "fill" as const,
  },
  {
    name: "Custom App / E-Com",
    description: "Full-scale apps & online stores",
    oldPrice: null,
    price: "Custom",
    priceSuffix: "get a quote",
    popular: false,
    features: [
      "Custom Web / Mobile App",
      "E-Commerce + Payments",
      "Admin Dashboard & Analytics",
      "API Integration & Automation",
      "AI-Powered Features",
      "Dedicated Account Manager",
    ],
    ctaLabel: "Get a Quote",
    ctaVariant: "outline" as const,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How long does it take to build my website?",
    answer: "Most business websites are delivered in 7-14 days. E-commerce stores and custom apps typically take 2-4 weeks. We'll give you an exact timeline in your free consultation.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "We offer unlimited revisions during the design phase. We don't move to development until you're 100% satisfied.",
  },
  {
    question: "Do you provide hosting and domain?",
    answer: "Yes, we set up fast, reliable hosting that keeps your site loading under 2 seconds. We handle all the technical setup.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Every website we build is mobile-first. Over 70% of your visitors come from mobile — this is non-negotiable for us.",
  },
  {
    question: "Do you help with content and images?",
    answer: "Yes. We provide professional copywriting, stock images, and custom graphics optimized for SEO and conversions.",
  },
] as const;

export const LOGO_NAMES = ["TechVista", "GreenLeaf", "SwiftPay", "UrbanEdge", "CloudNine", "AquaPure"] as const;

export const WHATSAPP_URL = "https://wa.me/919380341684?text=Hi%20ZED%20Labs!%20I%20need%20a%20website/app.";
