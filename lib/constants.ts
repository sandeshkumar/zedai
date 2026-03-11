export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const RESULTS = [
  { numValue: 3, suffix: "X", decimals: 0, label: "More Enquiries", description: "Average lead increase within 60 days" },
  { numValue: 1.2, suffix: "s", decimals: 1, label: "Load Time", description: "Google rewards fast sites with rankings" },
  { numValue: 40, suffix: "%", decimals: 0, label: "Higher Conversion", description: "vs template websites" },
  { numValue: 150, suffix: "+", decimals: 0, label: "Projects Delivered", description: "Across 20+ industries" },
] as const;

export interface ServiceItem {
  slug: string;
  icon: string;
  title: string;
  description: string;
  formServiceName: string;
  heroTitle: string;
  heroDescription: string;
  features: { title: string; description: string }[];
  benefits: string[];
  useCases: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "custom-websites",
    icon: "🌐",
    title: "Custom Websites",
    description: "Fast, mobile-first, SEO-optimized websites that rank on Google and turn visitors into paying customers.",
    formServiceName: "Custom Website",
    heroTitle: "Custom Websites That Convert Visitors Into Customers",
    heroDescription: "Get a blazing-fast, mobile-first website custom-built for your brand. SEO-optimized from day one so you rank on Google and generate leads on autopilot.",
    features: [
      { title: "Mobile-First Design", description: "Every site is built mobile-first — 70%+ of your visitors come from phones." },
      { title: "SEO Built-In", description: "On-page SEO, schema markup, fast Core Web Vitals — rank higher from launch." },
      { title: "Lightning Fast", description: "Sub-2-second load times using modern frameworks like Next.js and React." },
      { title: "Lead Capture", description: "WhatsApp integration, contact forms, and call buttons to capture every lead." },
      { title: "Custom Design", description: "No templates. Every pixel is designed to match your brand and build trust." },
      { title: "Admin Panel", description: "Easy-to-use CMS so you can update content without a developer." },
    ],
    benefits: [
      "Rank on Google page 1 with built-in SEO",
      "Convert 3X more visitors with optimized design",
      "Look professional and build instant trust",
      "Capture leads 24/7 even while you sleep",
      "Save ₹2L+ vs hiring an in-house team",
    ],
    useCases: ["Startups & Small Businesses", "Professional Services", "Healthcare & Clinics", "Education & Coaching"],
    metaTitle: "Custom Website Development India | SEO-Optimized | ZED Labs",
    metaDescription: "Get a fast, mobile-first custom website that ranks on Google and converts visitors into customers. Built by ZED Labs with SEO, lead capture & modern design.",
    metaKeywords: ["custom website development", "website design India", "SEO website", "business website", "responsive website"],
    relatedServices: ["ecommerce-solutions", "digital-marketing", "ui-ux-design"],
    faqs: [
      { question: "How much does a custom website cost in India?", answer: "Custom websites start at ₹14,999 for a 5-page business site. Complex sites with CMS, e-commerce, or custom features range from ₹35,000-₹1,50,000 depending on requirements." },
      { question: "How long does it take to build a custom website?", answer: "Most business websites are delivered in 7-14 days. E-commerce stores and complex applications take 2-4 weeks." },
      { question: "Will my custom website rank on Google?", answer: "Yes. Every website we build includes on-page SEO, schema markup, fast Core Web Vitals, and mobile-first design — all factors Google uses for rankings." },
    ],
  },
  {
    slug: "ecommerce-solutions",
    icon: "🛒",
    title: "eCommerce Solutions",
    description: "Online stores with seamless checkout, inventory management, and payment gateways to sell 24/7.",
    formServiceName: "eCommerce Solution",
    heroTitle: "eCommerce Stores That Sell 24/7",
    heroDescription: "Launch a powerful online store with seamless checkout, inventory management, and Indian payment gateways. Start selling to customers across India and beyond.",
    features: [
      { title: "Payment Gateways", description: "Razorpay, PhonePe, UPI, cards, net banking — every way your customers want to pay." },
      { title: "Inventory Management", description: "Track stock, manage variants, set alerts — never oversell or run out." },
      { title: "Order Dashboard", description: "Real-time order tracking, status updates, and customer notifications." },
      { title: "Mobile Shopping", description: "Optimized mobile experience — because most Indian shoppers buy on phones." },
      { title: "SEO for Products", description: "Product schema, meta tags, and fast pages so Google sends you free traffic." },
      { title: "Multi-Vendor Support", description: "Build a marketplace with multiple sellers, commissions, and payouts." },
    ],
    benefits: [
      "Sell to customers across India 24/7",
      "Accept UPI, cards, net banking — all payment modes",
      "Automate inventory and order management",
      "Get free traffic from Google with product SEO",
      "Scale from 10 to 10,000 orders without rebuilding",
    ],
    useCases: ["Retail & Fashion", "Food & Grocery", "Electronics", "D2C Brands"],
    metaTitle: "eCommerce Website Development India | Online Store | ZED Labs",
    metaDescription: "Build a powerful eCommerce store with Razorpay, UPI payments, inventory management, and mobile-first design. Sell online 24/7 with ZED Labs.",
    metaKeywords: ["ecommerce website", "online store development", "ecommerce India", "Razorpay integration", "shopping website"],
    relatedServices: ["custom-websites", "digital-marketing", "mobile-apps"],
    faqs: [
      { question: "How much does it cost to build an eCommerce website in India?", answer: "eCommerce stores start at ₹35,000 for basic setups. Feature-rich stores with inventory management, payment gateways, and multi-vendor support range from ₹75,000-₹2,50,000." },
      { question: "Can I accept UPI and Razorpay payments on my online store?", answer: "Yes. We integrate Razorpay, PhonePe, UPI, credit/debit cards, and net banking so your customers can pay however they prefer." },
      { question: "Do I need a mobile app or is an eCommerce website enough?", answer: "A mobile-optimized eCommerce website works for most businesses. We recommend an app only when you need push notifications, offline access, or loyalty features." },
    ],
  },
  {
    slug: "mobile-apps",
    icon: "📱",
    title: "Mobile Apps",
    description: "Native Android & iOS apps with beautiful UI, push notifications, and buttery-smooth performance.",
    formServiceName: "Mobile App",
    heroTitle: "Mobile Apps Your Users Will Love",
    heroDescription: "Build beautiful, high-performance Android & iOS apps that keep users coming back. Push notifications, offline support, and smooth UX that gets 5-star ratings.",
    features: [
      { title: "Cross-Platform", description: "One codebase for Android & iOS — faster delivery, lower cost, same quality." },
      { title: "Push Notifications", description: "Re-engage users with targeted push notifications that drive retention." },
      { title: "Offline Support", description: "Your app works even without internet — critical for Indian users." },
      { title: "App Store Ready", description: "We handle Play Store & App Store submission, optimization, and approval." },
      { title: "Backend & APIs", description: "Robust server-side architecture that scales with your user base." },
      { title: "Analytics Built-In", description: "Track user behavior, retention, and conversions from day one." },
    ],
    benefits: [
      "Reach users directly on their phones",
      "Boost retention with push notifications",
      "Work offline in low-connectivity areas",
      "Get listed on Play Store & App Store",
      "One codebase, two platforms — save 40% on development",
    ],
    useCases: ["On-Demand Services", "Social & Community", "Fitness & Health", "Education & EdTech"],
    metaTitle: "Mobile App Development India | Android & iOS | ZED Labs",
    metaDescription: "Build high-performance Android & iOS mobile apps with push notifications, offline support, and beautiful UI. Cross-platform development by ZED Labs.",
    metaKeywords: ["mobile app development", "Android app", "iOS app", "cross-platform app", "app development India"],
    relatedServices: ["ui-ux-design", "cloud-devops", "custom-websites"],
    faqs: [
      { question: "How much does mobile app development cost in India?", answer: "Simple apps start at ₹50,000. Feature-rich apps with backend, push notifications, and payment integration range from ₹1,50,000-₹5,00,000 depending on complexity." },
      { question: "Should I build separate Android and iOS apps or one cross-platform app?", answer: "Cross-platform (React Native/Flutter) saves 40% cost and delivers to both platforms simultaneously. We recommend native only for graphics-heavy or hardware-intensive apps." },
      { question: "How long does it take to publish an app on Play Store and App Store?", answer: "Development takes 4-8 weeks. Play Store approval takes 1-3 days, while App Store review takes 1-7 days. We handle the entire submission process." },
    ],
  },
  {
    slug: "erp-systems",
    icon: "🏭",
    title: "ERP Systems",
    description: "Streamline operations with custom ERP — inventory, HR, finance, and production in one unified system.",
    formServiceName: "ERP System",
    heroTitle: "Custom ERP Systems That Streamline Your Operations",
    heroDescription: "Stop juggling spreadsheets. Get a custom ERP that unifies inventory, HR, finance, and production into one powerful system — built for how your business actually works.",
    features: [
      { title: "Inventory & Warehouse", description: "Real-time stock tracking, purchase orders, and multi-warehouse management." },
      { title: "HR & Payroll", description: "Employee management, attendance, leave tracking, and automated payroll." },
      { title: "Finance & Accounting", description: "GST-compliant invoicing, expense tracking, and financial reports." },
      { title: "Production Planning", description: "Bill of materials, work orders, and production scheduling." },
      { title: "Role-Based Access", description: "Control who sees what — admins, managers, and staff get different views." },
      { title: "Reports & Dashboards", description: "Real-time business insights with custom reports and visual dashboards." },
    ],
    benefits: [
      "Eliminate spreadsheets and manual processes",
      "Cut operational costs by 30-50%",
      "Get real-time visibility into every department",
      "GST-compliant invoicing and accounting",
      "Scale from 5 to 500 employees without chaos",
    ],
    useCases: ["Manufacturing", "Distribution & Wholesale", "Textile & Garments", "Construction & Real Estate"],
    metaTitle: "Custom ERP Software Development India | ZED Labs",
    metaDescription: "Build a custom ERP system for inventory, HR, finance, and production. GST-compliant, role-based access, real-time dashboards. Built by ZED Labs.",
    metaKeywords: ["ERP software", "custom ERP", "ERP development India", "inventory management", "business software"],
    relatedServices: ["crm-software", "ai-solutions", "cloud-devops"],
    faqs: [
      { question: "How much does custom ERP software cost in India?", answer: "Basic ERP modules start at ₹1,50,000. A full-featured ERP with inventory, HR, finance, and production modules ranges from ₹3,00,000-₹10,00,000 depending on complexity." },
      { question: "How long does ERP implementation take?", answer: "A single-module ERP takes 4-6 weeks. Full enterprise ERP with multiple departments takes 3-6 months including data migration and training." },
      { question: "Can a custom ERP replace Tally or SAP for my business?", answer: "Yes. A custom ERP can handle GST invoicing, inventory, and accounting like Tally while adding features specific to your workflow — at a fraction of SAP's cost." },
    ],
  },
  {
    slug: "crm-software",
    icon: "📊",
    title: "CRM Software",
    description: "Track leads, automate follow-ups, and close more deals with a CRM built for your sales process.",
    formServiceName: "CRM Software",
    heroTitle: "CRM Software That Helps You Close More Deals",
    heroDescription: "Never lose a lead again. Get a custom CRM that tracks every prospect, automates follow-ups, and gives your sales team the tools to close faster.",
    features: [
      { title: "Lead Management", description: "Capture leads from website, WhatsApp, and ads — all in one pipeline." },
      { title: "Automated Follow-Ups", description: "Set reminders, email sequences, and WhatsApp follow-ups on autopilot." },
      { title: "Sales Pipeline", description: "Visual deal pipeline — drag and drop leads through your sales stages." },
      { title: "WhatsApp Integration", description: "Send and receive WhatsApp messages directly from your CRM." },
      { title: "Team Management", description: "Assign leads, track performance, and set targets for your sales team." },
      { title: "Reports & Forecasting", description: "Revenue forecasts, conversion rates, and team leaderboards." },
    ],
    benefits: [
      "Never lose a lead — every enquiry is tracked",
      "Automate follow-ups and save 2+ hours daily",
      "Close 40% more deals with pipeline visibility",
      "WhatsApp integration for Indian business communication",
      "Make data-driven sales decisions with analytics",
    ],
    useCases: ["Real Estate", "Education & Coaching", "Financial Services", "B2B Services"],
    metaTitle: "Custom CRM Software Development India | ZED Labs",
    metaDescription: "Build a custom CRM with lead tracking, WhatsApp integration, automated follow-ups, and sales pipeline. Close more deals with ZED Labs CRM solutions.",
    metaKeywords: ["CRM software", "custom CRM", "CRM development India", "lead management", "sales CRM"],
    relatedServices: ["erp-systems", "ai-solutions", "digital-marketing"],
    faqs: [
      { question: "How much does custom CRM software cost in India?", answer: "Basic CRM with lead tracking starts at ₹75,000. Advanced CRM with WhatsApp integration, automation, and analytics ranges from ₹1,50,000-₹4,00,000." },
      { question: "Can your CRM integrate with WhatsApp and Google Ads?", answer: "Yes. We build CRM systems with WhatsApp Business API integration for messaging and Google Ads lead sync so every enquiry is automatically captured." },
      { question: "What is the difference between a custom CRM and Zoho or HubSpot?", answer: "A custom CRM is built around your exact sales process with no per-user fees. Off-the-shelf tools charge monthly per user and force you to adapt to their workflow." },
    ],
  },
  {
    slug: "hospitality-pos",
    icon: "🏨",
    title: "Hospitality & POS",
    description: "Hotel management, restaurant POS, and booking systems that automate your hospitality business.",
    formServiceName: "Hospitality & POS",
    heroTitle: "Smart Software for Hotels, Restaurants & Hospitality",
    heroDescription: "Manage bookings, tables, billing, and operations from one system. Built specifically for Indian hotels, restaurants, and hospitality businesses.",
    features: [
      { title: "Booking Management", description: "Online reservations, room/table management, and availability calendar." },
      { title: "POS & Billing", description: "Fast billing with GST, split bills, discounts, and multiple payment modes." },
      { title: "Kitchen Display", description: "Digital KOT system — orders go straight from POS to kitchen screens." },
      { title: "Inventory & Recipes", description: "Track raw materials, recipe costing, and auto-deduct stock on orders." },
      { title: "Staff Management", description: "Shifts, attendance, tips tracking, and role-based access control." },
      { title: "Reports & Analytics", description: "Daily sales, peak hours, top items, and profit margins at a glance." },
    ],
    benefits: [
      "Eliminate manual billing errors and GST headaches",
      "Speed up table turnover with digital KOT",
      "Track food costs and reduce wastage by 20%+",
      "Accept UPI, cards, and cash — all modes",
      "Get daily P&L reports without an accountant",
    ],
    useCases: ["Restaurants & Cafes", "Hotels & Resorts", "Cloud Kitchens", "Bars & Lounges"],
    metaTitle: "Hotel & Restaurant POS Software India | ZED Labs",
    metaDescription: "Smart POS and hotel management software with GST billing, kitchen display, booking system, and inventory tracking. Built for Indian hospitality by ZED Labs.",
    metaKeywords: ["restaurant POS", "hotel management software", "hospitality software", "POS system India", "billing software"],
    relatedServices: ["erp-systems", "mobile-apps", "custom-websites"],
    faqs: [
      { question: "How much does restaurant POS software cost in India?", answer: "Basic restaurant POS starts at ₹50,000. Full-featured systems with KOT, inventory tracking, and multi-branch support range from ₹1,00,000-₹3,00,000." },
      { question: "Does your POS system support GST billing and UPI payments?", answer: "Yes. Our POS generates GST-compliant invoices automatically and accepts UPI, cards, cash, and digital wallets at checkout." },
      { question: "Can your hotel software handle online bookings and OTA integration?", answer: "Yes. We build booking engines with real-time availability, online payments, and integration with OTAs like MakeMyTrip and Booking.com." },
    ],
  },
  {
    slug: "ai-solutions",
    icon: "🤖",
    title: "AI Solutions",
    description: "Chatbots, automation, and AI analytics that give your business an unfair competitive advantage.",
    formServiceName: "AI Solution",
    heroTitle: "AI-Powered Solutions for Smarter Business",
    heroDescription: "Automate customer support, generate insights from data, and build intelligent workflows. AI isn't the future — it's what your competitors are using right now.",
    features: [
      { title: "AI Chatbots", description: "24/7 customer support bots that handle enquiries, bookings, and FAQs automatically." },
      { title: "Process Automation", description: "Automate repetitive tasks — data entry, reports, emails, and workflows." },
      { title: "Data Analytics", description: "Turn raw data into actionable insights with AI-powered dashboards." },
      { title: "Document Processing", description: "Extract data from invoices, forms, and documents automatically." },
      { title: "Recommendation Engine", description: "Personalized product/content recommendations that boost engagement." },
      { title: "Custom AI Models", description: "Purpose-built AI models trained on your data for your specific use case." },
    ],
    benefits: [
      "Cut support costs by 60% with AI chatbots",
      "Save 10+ hours/week by automating repetitive tasks",
      "Make data-driven decisions with AI analytics",
      "Boost sales with personalized recommendations",
      "Stay ahead of competitors with AI-first operations",
    ],
    useCases: ["Customer Support", "Healthcare", "Finance & Banking", "Retail & eCommerce"],
    metaTitle: "AI Solutions & Chatbot Development India | ZED Labs",
    metaDescription: "Build AI chatbots, automation workflows, and data analytics solutions. Cut costs, save time, and outperform competitors with ZED Labs AI solutions.",
    metaKeywords: ["AI solutions", "chatbot development", "AI automation", "machine learning India", "AI for business"],
    relatedServices: ["crm-software", "custom-websites", "digital-marketing"],
    faqs: [
      { question: "How much does an AI chatbot cost for my business?", answer: "Basic AI chatbots start at ₹40,000. Advanced chatbots with custom training, CRM integration, and multilingual support range from ₹1,00,000-₹3,00,000." },
      { question: "Can AI automate my business processes without replacing employees?", answer: "Yes. AI automates repetitive tasks like data entry, report generation, and customer FAQs — freeing your team to focus on high-value work instead of replacing them." },
      { question: "What kind of AI solutions work for small businesses in India?", answer: "WhatsApp chatbots, automated lead follow-ups, invoice processing, and customer support bots deliver the highest ROI for small businesses with minimal setup." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "📈",
    title: "Digital Marketing",
    description: "Get found on Google. Data-driven SEO and ad campaigns that bring measurable, qualified traffic.",
    formServiceName: "Digital Marketing",
    heroTitle: "Digital Marketing That Delivers Measurable ROI",
    heroDescription: "Stop wasting money on ads that don't convert. Get data-driven SEO, Google Ads, and social media campaigns that bring qualified leads and real revenue.",
    features: [
      { title: "SEO & Rankings", description: "On-page, off-page, and technical SEO to get you on Google page 1." },
      { title: "Google Ads", description: "High-converting search and display campaigns with daily optimization." },
      { title: "Social Media Ads", description: "Facebook, Instagram, and LinkedIn ads targeted to your ideal customers." },
      { title: "Content Marketing", description: "Blog posts, videos, and social content that builds authority and trust." },
      { title: "Analytics & Tracking", description: "Full-funnel tracking — know exactly which campaigns drive revenue." },
      { title: "Local SEO", description: "Google Business Profile optimization to dominate local search results." },
    ],
    benefits: [
      "Rank on Google page 1 for your key services",
      "Get 3-5X return on ad spend with optimized campaigns",
      "Track every rupee from click to customer",
      "Build brand authority with content marketing",
      "Dominate local search in your city",
    ],
    useCases: ["Local Businesses", "Professional Services", "eCommerce Brands", "B2B Companies"],
    metaTitle: "Digital Marketing Services India | SEO & Google Ads | ZED Labs",
    metaDescription: "Data-driven SEO, Google Ads, and social media marketing that delivers measurable ROI. Track every lead from click to customer with ZED Labs.",
    metaKeywords: ["digital marketing India", "SEO services", "Google Ads", "social media marketing", "online marketing"],
    relatedServices: ["custom-websites", "ecommerce-solutions", "ai-solutions"],
    faqs: [
      { question: "How much does SEO cost per month in India?", answer: "SEO packages start at ₹10,000/month for local SEO. Comprehensive SEO with content marketing, link building, and technical optimization ranges from ₹25,000-₹75,000/month." },
      { question: "How long does SEO take to show results?", answer: "Local SEO shows results in 2-3 months. Competitive keywords typically take 4-6 months to rank on page 1, with compounding traffic growth over time." },
      { question: "Should I invest in Google Ads or SEO first?", answer: "Start with Google Ads for immediate leads while SEO builds momentum. Once organic rankings stabilize in 3-6 months, you can reduce ad spend as free traffic grows." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "🎨",
    title: "UI/UX Design",
    description: "User-centered design that looks stunning and converts — wireframes, prototypes, and complete design systems.",
    formServiceName: "UI/UX Design",
    heroTitle: "UI/UX Design That Users Love and Businesses Trust",
    heroDescription: "Beautiful isn't enough — it needs to convert. Get research-driven UI/UX design with wireframes, prototypes, and design systems that make your product irresistible.",
    features: [
      { title: "User Research", description: "Understand your users with interviews, surveys, and competitive analysis before designing a single pixel." },
      { title: "Wireframing", description: "Low-fidelity wireframes to validate structure and flow before investing in visual design." },
      { title: "UI Design", description: "Pixel-perfect, brand-aligned interfaces that look stunning on every screen size." },
      { title: "Prototyping", description: "Interactive prototypes you can click through and test with real users before development." },
      { title: "Design Systems", description: "Reusable component libraries and style guides that keep your product consistent at scale." },
      { title: "Usability Testing", description: "Test designs with real users and iterate based on data, not guesswork." },
    ],
    benefits: [
      "Increase conversions by 200% with research-driven design",
      "Reduce development costs — fix problems in design, not code",
      "Build a consistent brand across all touchpoints",
      "Delight users with intuitive, friction-free experiences",
      "Get a scalable design system for future products",
    ],
    useCases: ["SaaS Products", "Mobile Apps", "eCommerce", "Enterprise Software"],
    metaTitle: "UI/UX Design Services India | User Interface Design | ZED Labs",
    metaDescription: "Professional UI/UX design with wireframes, prototypes, and design systems. Research-driven design that converts users into customers. By ZED Labs.",
    metaKeywords: ["UI UX design", "user interface design", "UX design India", "wireframing", "prototyping", "design system"],
    relatedServices: ["custom-websites", "mobile-apps", "ecommerce-solutions"],
    faqs: [
      { question: "How much does UI/UX design cost in India?", answer: "UI/UX design for a simple app or website starts at ₹30,000. Full design projects with research, wireframes, prototyping, and design systems range from ₹75,000-₹3,00,000." },
      { question: "What is the difference between UI and UX design?", answer: "UX (User Experience) focuses on how the product works — structure, flow, and ease of use. UI (User Interface) focuses on how it looks — colors, typography, and visual design." },
      { question: "Do I need UI/UX design before development starts?", answer: "Yes. Designing before coding saves 30-50% on development costs by catching usability issues early, reducing revisions, and giving developers a clear blueprint to follow." },
    ],
  },
  {
    slug: "cloud-devops",
    icon: "☁️",
    title: "Cloud & DevOps",
    description: "AWS, Azure, and GCP infrastructure with CI/CD pipelines, monitoring, and auto-scaling for zero-downtime deployments.",
    formServiceName: "Cloud & DevOps",
    heroTitle: "Cloud Infrastructure & DevOps That Scales With You",
    heroDescription: "Stop worrying about servers crashing. Get enterprise-grade cloud infrastructure with automated deployments, monitoring, and auto-scaling — on AWS, Azure, or GCP.",
    features: [
      { title: "Cloud Migration", description: "Migrate from shared hosting or on-premise servers to AWS, Azure, or GCP with zero downtime." },
      { title: "CI/CD Pipelines", description: "Automated build, test, and deploy pipelines — push code and it goes live safely." },
      { title: "Auto-Scaling", description: "Handle traffic spikes automatically — pay only for what you use." },
      { title: "Monitoring & Alerts", description: "24/7 uptime monitoring, error tracking, and instant alerts when something needs attention." },
      { title: "Security & Backups", description: "Automated backups, SSL, firewalls, and security best practices built into your infrastructure." },
      { title: "Cost Optimization", description: "Right-size your resources and reduce cloud bills by 30-50% without sacrificing performance." },
    ],
    benefits: [
      "99.9% uptime with enterprise-grade infrastructure",
      "Deploy updates in minutes, not hours",
      "Auto-scale to handle traffic spikes without crashes",
      "Reduce cloud costs by 30-50% with optimization",
      "Sleep peacefully with automated monitoring and backups",
    ],
    useCases: ["Growing Startups", "SaaS Companies", "eCommerce Platforms", "Enterprise Applications"],
    metaTitle: "Cloud & DevOps Services India | AWS Azure GCP | ZED Labs",
    metaDescription: "Enterprise-grade cloud infrastructure on AWS, Azure, and GCP. CI/CD pipelines, auto-scaling, monitoring, and cost optimization by ZED Labs.",
    metaKeywords: ["cloud services India", "DevOps", "AWS", "Azure", "CI/CD", "cloud migration", "infrastructure"],
    relatedServices: ["cybersecurity", "maintenance-amc", "erp-systems"],
    faqs: [
      { question: "How much do cloud hosting and DevOps services cost in India?", answer: "Cloud setup and CI/CD pipeline configuration starts at ₹50,000. Ongoing managed cloud services range from ₹15,000-₹75,000/month depending on infrastructure size." },
      { question: "Should I use AWS, Azure, or Google Cloud for my application?", answer: "AWS is best for flexibility and largest service catalog. Azure integrates well with Microsoft tools. GCP excels at data and AI workloads. We help you choose based on your needs." },
      { question: "How do I reduce my cloud hosting bill without losing performance?", answer: "We right-size instances, implement auto-scaling, use reserved pricing, and optimize storage — typically reducing cloud bills by 30-50% while maintaining performance." },
    ],
  },
  {
    slug: "maintenance-amc",
    icon: "🛡️",
    title: "Maintenance & AMC",
    description: "Annual maintenance contracts — updates, security patches, monitoring, and priority support to keep your software running perfectly.",
    formServiceName: "Maintenance & AMC",
    heroTitle: "Keep Your Software Running Perfectly — Always",
    heroDescription: "Software doesn't stop needing attention after launch. Get annual maintenance contracts with updates, security patches, performance monitoring, and priority support.",
    features: [
      { title: "Security Updates", description: "Regular security patches and vulnerability fixes to keep your software safe from threats." },
      { title: "Performance Monitoring", description: "24/7 uptime and performance monitoring with instant alerts for any issues." },
      { title: "Bug Fixes", description: "Priority bug fixes and issue resolution — typically within 24 hours for critical issues." },
      { title: "Content Updates", description: "Regular content, image, and copy updates to keep your website fresh and current." },
      { title: "Backup & Recovery", description: "Daily automated backups with tested disaster recovery procedures." },
      { title: "Monthly Reports", description: "Detailed reports on uptime, performance, traffic, and any actions taken." },
    ],
    benefits: [
      "Zero downtime with proactive monitoring",
      "Stay protected from security vulnerabilities",
      "Priority support — no waiting in queues",
      "Focus on your business, we handle the tech",
      "Predictable monthly costs, no surprise bills",
    ],
    useCases: ["Business Websites", "eCommerce Stores", "Web Applications", "Mobile Apps"],
    metaTitle: "Website Maintenance & AMC Services India | ZED Labs",
    metaDescription: "Annual maintenance contracts for websites and software. Security updates, monitoring, bug fixes, and priority support. Keep your software running with ZED Labs.",
    metaKeywords: ["website maintenance", "AMC", "annual maintenance contract", "website support", "software maintenance India"],
    relatedServices: ["cloud-devops", "cybersecurity", "custom-websites"],
    faqs: [
      { question: "How much does a website maintenance AMC cost in India?", answer: "Basic maintenance AMCs start at ₹5,000/month for small websites. Comprehensive AMCs with priority support, security updates, and monitoring range from ₹10,000-₹30,000/month." },
      { question: "What is included in an annual maintenance contract for software?", answer: "AMCs typically include security patches, bug fixes, uptime monitoring, daily backups, content updates, performance optimization, and priority support with defined response times." },
      { question: "Do I need a maintenance plan after my website is launched?", answer: "Yes. Without regular updates and security patches, websites become vulnerable to attacks and performance degradation. An AMC ensures your site stays fast, secure, and up-to-date." },
    ],
  },
  {
    slug: "cybersecurity",
    icon: "🔒",
    title: "Cybersecurity",
    description: "Security audits, penetration testing, compliance, and data protection to keep your business and customers safe.",
    formServiceName: "Cybersecurity",
    heroTitle: "Protect Your Business From Cyber Threats",
    heroDescription: "One data breach can destroy your reputation. Get comprehensive cybersecurity — audits, penetration testing, compliance, and 24/7 threat monitoring to protect what matters most.",
    features: [
      { title: "Security Audits", description: "Comprehensive assessment of your applications, infrastructure, and processes for vulnerabilities." },
      { title: "Penetration Testing", description: "Ethical hacking to find and fix security holes before attackers do." },
      { title: "Data Protection", description: "Encryption, access controls, and data handling policies to protect sensitive information." },
      { title: "Compliance", description: "Meet industry standards — ISO 27001, GDPR, PCI-DSS, and Indian IT Act compliance." },
      { title: "Threat Monitoring", description: "24/7 monitoring for suspicious activity, intrusion attempts, and data leaks." },
      { title: "Incident Response", description: "Rapid response plan and execution when security incidents occur — minimize damage fast." },
    ],
    benefits: [
      "Prevent data breaches before they happen",
      "Meet compliance requirements (GDPR, PCI-DSS, IT Act)",
      "Build customer trust with proven security practices",
      "Reduce risk of financial loss from cyber attacks",
      "24/7 threat monitoring and rapid incident response",
    ],
    useCases: ["Finance & Banking", "Healthcare", "eCommerce", "Government & Enterprise"],
    metaTitle: "Cybersecurity Services India | Security Audits | ZED Labs",
    metaDescription: "Comprehensive cybersecurity — audits, penetration testing, compliance, and 24/7 threat monitoring. Protect your business from cyber threats with ZED Labs.",
    metaKeywords: ["cybersecurity India", "security audit", "penetration testing", "data protection", "compliance", "GDPR"],
    relatedServices: ["cloud-devops", "maintenance-amc", "erp-systems"],
    faqs: [
      { question: "How much does a cybersecurity audit cost in India?", answer: "Basic security audits start at ₹50,000. Comprehensive audits with penetration testing, compliance review, and remediation support range from ₹1,50,000-₹5,00,000." },
      { question: "Does my small business really need cybersecurity?", answer: "Yes. 43% of cyber attacks target small businesses, and most lack recovery resources. Basic measures like security audits, SSL, and access controls are affordable and essential." },
      { question: "What compliance standards does my business need to follow in India?", answer: "Most businesses need IT Act 2000 compliance. If you handle payments, PCI-DSS applies. For EU customers, GDPR is required. Healthcare and finance have additional sector-specific regulations." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

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
    freeDomain: true,
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
    freeDomain: true,
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
    freeDomain: false,
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

export const WHATSAPP_URL = "https://wa.me/919380341684?text=Hi%20ZED%20Labs!%20I%20need%20a%20software%20solution.";
