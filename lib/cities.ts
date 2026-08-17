// ── Types ──────────────────────────────────────────────────────────────

export interface CityItem {
  slug: string;
  name: string;
  state: string;
  tier: 1 | 2 | 3;
  tagline: string;
  keyIndustries: string[];
  businessDistricts: string[];
}

export interface CityServiceContent {
  citySlug: string;
  serviceSlug: string;
  heroTitle: string;
  heroDescription: string;
  localContext: string;
  localUseCases: string[];
  localProof: string;
  localFaqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}

// ── Service slugs eligible for city pages ──────────────────────────────

export const CITY_SERVICES = [
  "custom-websites",
  "mobile-apps",
  "digital-marketing",
  "ai-solutions",
] as const;

// ── Tier 1 Cities ──────────────────────────────────────────────────────

export const CITIES: CityItem[] = [
  {
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tier: 1,
    tagline: "The Pink City's Digital Transformation",
    keyIndustries: ["Tourism & Hospitality", "Handicraft Export", "D2C Brands", "Real Estate", "Education"],
    businessDistricts: ["Malviya Nagar", "C-Scheme", "Vaishali Nagar", "Mansarovar", "Tonk Road", "Sitapura Industrial Area", "Jagatpura"],
  },
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tier: 1,
    tagline: "UP's IT Capital Goes Digital",
    keyIndustries: ["Government & PSU", "FMCG", "Healthcare", "Education", "Real Estate"],
    businessDistricts: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Vibhuti Khand", "Kanpur Road", "Chinhat IT Park"],
  },
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    tier: 1,
    tagline: "India's Cleanest City, Now Its Smartest",
    keyIndustries: ["Manufacturing", "Pharma", "IT/ITES", "Food Processing", "Textile"],
    businessDistricts: ["Vijay Nagar", "Palasia", "Bhawarkua", "AB Road", "Scheme 78", "Super Corridor", "Crystal IT Park"],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    tier: 1,
    tagline: "The Tricity's Tech Hub",
    keyIndustries: ["IT/ITES", "Education", "Healthcare", "Government", "Startups"],
    businessDistricts: ["Sector 17", "IT Park Chandigarh", "Mohali Phase 8", "Panchkula", "Industrial Area Phase 1", "Sector 34", "Zirakpur"],
  },
  {
    slug: "kochi",
    name: "Kochi",
    state: "Kerala",
    tier: 1,
    tagline: "Kerala's Gateway to Digital Commerce",
    keyIndustries: ["Tourism", "Spice Export", "Shipping & Logistics", "IT/ITES", "Healthcare"],
    businessDistricts: ["Infopark Kochi", "Kakkanad", "Edappally", "Marine Drive", "Vytilla", "Kalamassery", "SmartCity Kochi"],
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    tier: 1,
    tagline: "The Manchester of South India Goes Digital",
    keyIndustries: ["Textile & Manufacturing", "Engineering", "IT/ITES", "Healthcare", "Agriculture Tech"],
    businessDistricts: ["Avinashi Road", "RS Puram", "Saravanampatti", "Peelamedu", "Tidel Park", "Singanallur", "Ganapathy"],
  },
  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    tier: 1,
    tagline: "Central India's Emerging Tech Destination",
    keyIndustries: ["Mining & Minerals", "Manufacturing", "Logistics", "Education", "Government"],
    businessDistricts: ["Dharampeth", "Sadar", "Sitabuldi", "Wardha Road", "MIHAN SEZ", "IT Park Nagpur", "Civil Lines"],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    tier: 1,
    tagline: "The City of Lakes Builds Its Digital Future",
    keyIndustries: ["Government & PSU", "Education", "Manufacturing", "Healthcare", "IT/ITES"],
    businessDistricts: ["MP Nagar", "Arera Colony", "Hoshangabad Road", "Kolar Road", "Bairagarh", "Govindpura Industrial Area", "TT Nagar"],
  },
];

// ── City-Service Content Matrix (32 entries) ───────────────────────────

export const CITY_SERVICE_CONTENT: CityServiceContent[] = [
  // ── JAIPUR ──────────────────────────────────────────────────────────
  {
    citySlug: "jaipur",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Jaipur",
    heroDescription: "Jaipur's booming tourism and D2C sector demands websites that convert visitors into paying customers. We build fast, SEO-optimized websites for Jaipur businesses, from heritage hotel booking platforms to handicraft eCommerce stores.",
    localContext: "With 50M+ tourists visiting Rajasthan annually and Jaipur's handicraft export industry rapidly going digital, your website is your most important sales tool. Businesses along Johari Bazaar and MI Road are moving online, and the Sitapura IT corridor is attracting tech talent. Whether you're a hotel in C-Scheme or a textile exporter in Mansarovar, you need a website that handles high traffic, supports multilingual content, and integrates with UPI and Razorpay.",
    localUseCases: ["Tourism & Hotel Booking Platforms", "Handicraft & Jewelry eCommerce", "Real Estate Listing Portals", "Education & Coaching Institute Websites", "Restaurant & Cafe Online Ordering"],
    localProof: "We've delivered websites for businesses across Rajasthan, from heritage property booking platforms handling 10,000+ monthly visitors to D2C handicraft brands shipping across India.",
    localFaqs: [
      { question: "How much does website development cost in Jaipur?", answer: "A business website in Jaipur costs ₹25,000-₹60,000 depending on features. eCommerce stores with payment integration start at ₹60,000. We offer transparent pricing with no hidden costs." },
      { question: "Which is the best web development company in Jaipur?", answer: "Look for agencies with a proven portfolio, transparent pricing, and post-launch support. ZED LABS has delivered 150+ projects with AI built into every website: chatbots, smart lead capture, and automated follow-ups." },
      { question: "Do you provide website maintenance in Jaipur?", answer: "Yes. We offer AMC packages starting at ₹2,999/month covering security updates, performance monitoring, content updates, and 24/7 uptime tracking." },
    ],
    metaTitle: "Web Development Company in Jaipur | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Jaipur. We build fast, AI-powered websites for tourism, eCommerce, and local businesses. 150+ projects delivered. Get a free quote.",
    metaKeywords: ["web development company jaipur", "website design jaipur", "website development jaipur", "best web developer jaipur"],
  },
  {
    citySlug: "jaipur",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Jaipur",
    heroDescription: "From tourism booking apps to D2C brand apps, Jaipur businesses need mobile solutions that work for India's smartphone-first users. We build Android and iOS apps that scale.",
    localContext: "Jaipur's growing startup ecosystem and thriving tourism industry create massive demand for mobile apps. Tour operators need booking apps, jewelry businesses need B2B ordering platforms, and coaching institutes need learning management apps. With 85% of Rajasthan's internet users on mobile, your app needs to work flawlessly on low-bandwidth connections too.",
    localUseCases: ["Tourism & Travel Booking Apps", "B2B Jewelry Ordering Platforms", "Coaching & EdTech Apps", "Food Delivery & Restaurant Apps", "Real Estate Property Apps"],
    localProof: "We've built mobile apps for businesses across North India, handling everything from real-time booking systems to offline-first apps that work in areas with poor connectivity.",
    localFaqs: [
      { question: "How much does app development cost in Jaipur?", answer: "A basic business app costs ₹1.5-3 lakhs. Feature-rich apps with payment integration, GPS, and real-time features cost ₹3-8 lakhs. We provide a detailed scope document before starting." },
      { question: "Do you build both Android and iOS apps?", answer: "Yes. We use cross-platform frameworks like React Native and Flutter to build apps that work on both platforms from a single codebase, saving you 40% on development costs." },
      { question: "How long does it take to build a mobile app in Jaipur?", answer: "A basic app takes 4-6 weeks. Complex apps with backend APIs and integrations take 8-12 weeks. We follow agile sprints with weekly demos so you see progress every week." },
    ],
    metaTitle: "Mobile App Development Company in Jaipur | Android & iOS | ZED LABS",
    metaDescription: "Leading mobile app development company in Jaipur. Android & iOS apps for tourism, eCommerce, and startups. React Native & Flutter. Get a free consultation.",
    metaKeywords: ["app development company jaipur", "mobile app developer jaipur", "android app development jaipur", "ios app development jaipur"],
  },
  {
    citySlug: "jaipur",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Jaipur",
    heroDescription: "Jaipur's competitive tourism and D2C market means you can't afford invisible digital presence. We run data-driven campaigns that bring real leads, not vanity metrics.",
    localContext: "Jaipur businesses compete in one of India's most searched tourism markets. Whether you're a hotel trying to rank above OTAs, a jewelry brand competing with Amazon sellers, or a coaching institute fighting for student enquiries, you need a digital marketing strategy that delivers ROI in rupees, not just impressions. We understand Jaipur's market dynamics and seasonal traffic patterns.",
    localUseCases: ["Hotel & Resort SEO & Google Ads", "Jewelry Brand Social Media & Influencer Marketing", "Coaching Institute Lead Generation", "Real Estate Facebook & Google Campaigns", "Local Business Google My Business Optimization"],
    localProof: "Our digital marketing campaigns for Rajasthan-based businesses have generated 3X more enquiries within 60 days, with measurable ROI tracking on every rupee spent.",
    localFaqs: [
      { question: "How much does digital marketing cost in Jaipur?", answer: "Monthly digital marketing packages start at ₹15,000 for basic SEO and social media. Full-stack campaigns with Google Ads, SEO, and content marketing run ₹30,000-₹75,000/month depending on your goals." },
      { question: "Can you help my Jaipur business rank on Google?", answer: "Absolutely. We specialize in local SEO: Google My Business optimization, city-specific content, local backlinks, and technical SEO. Most clients see first-page results within 3-4 months." },
      { question: "Do you manage Google Ads for Jaipur businesses?", answer: "Yes. We run Google Ads campaigns optimized for Jaipur and Rajasthan audiences. Our focus is on cost-per-lead, not just clicks. We typically achieve 40-60% lower CPA than industry averages." },
    ],
    metaTitle: "Digital Marketing Agency in Jaipur | SEO, Ads & Social | ZED LABS",
    metaDescription: "Results-driven digital marketing agency in Jaipur. SEO, Google Ads, social media marketing for hotels, D2C brands, and local businesses. Get a free strategy call.",
    metaKeywords: ["digital marketing agency jaipur", "seo company jaipur", "social media marketing jaipur", "google ads jaipur"],
  },
  {
    citySlug: "jaipur",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Chatbot Development in Jaipur",
    heroDescription: "Jaipur businesses are adopting AI to automate customer support, streamline operations, and boost sales. We build AI chatbots, automation tools, and intelligent systems tailored for local industries.",
    localContext: "From WhatsApp chatbots handling hotel booking queries in 10+ languages to AI-powered inventory management for textile exporters, Jaipur businesses are discovering that AI isn't just for big companies. A chatbot that answers booking queries 24/7 costs less than one month's salary of a receptionist, and it never takes a day off.",
    localUseCases: ["Hotel & Tourism WhatsApp AI Chatbots", "Jewelry Inventory AI Management", "Automated Customer Support for D2C Brands", "AI-Powered Lead Qualification", "Smart Price Optimization for eCommerce"],
    localProof: "We've deployed AI chatbots for hospitality businesses that handle 500+ conversations daily, reducing support costs by 60% while improving response times from hours to seconds.",
    localFaqs: [
      { question: "How much does an AI chatbot cost in Jaipur?", answer: "A basic WhatsApp AI chatbot costs ₹30,000-₹60,000 one-time with ₹2,000-5,000/month running costs. Advanced chatbots with CRM integration and multilingual support cost ₹60,000-₹1.5 lakhs." },
      { question: "Can AI help my small business in Jaipur?", answer: "Yes. AI is most impactful for small businesses. It automates repetitive tasks like customer queries, appointment booking, invoice generation, and follow-ups. The ROI is typically 3-5X within 6 months." },
      { question: "Do you build custom AI solutions for Jaipur businesses?", answer: "Yes. We build custom AI tools including chatbots, recommendation engines, document processing, and predictive analytics, all tailored to your specific business needs and budget." },
    ],
    metaTitle: "AI Solutions & Chatbot Development in Jaipur | ZED LABS",
    metaDescription: "AI chatbots, automation, and intelligent solutions for Jaipur businesses. WhatsApp bots, lead scoring, and custom AI tools. 150+ projects delivered. Get a free consultation.",
    metaKeywords: ["ai solutions jaipur", "chatbot development jaipur", "ai automation jaipur", "whatsapp chatbot jaipur"],
  },

  // ── LUCKNOW ─────────────────────────────────────────────────────────
  {
    citySlug: "lucknow",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Lucknow",
    heroDescription: "Lucknow's rapidly growing IT sector and government digitization push means every business needs a professional website. We build fast, mobile-first websites that rank on Google and convert visitors into customers.",
    localContext: "UP's IT capital is booming. With the Chinhat IT Park expanding and the Lucknow-Kanpur corridor attracting tech investment, businesses from Gomti Nagar to Hazratganj are going digital. Government e-tenders, healthcare portals, and real estate platforms are driving massive demand for professional websites. If your business still relies on a Facebook page, you're losing customers to competitors who've invested in a proper web presence.",
    localUseCases: ["Government & PSU Portal Development", "Healthcare & Hospital Websites", "Real Estate Listing Platforms", "Education & University Portals", "Restaurant & Food Chain Websites"],
    localProof: "We've built websites for businesses across UP, from healthcare portals handling 50,000+ monthly visitors to real estate platforms with integrated CRM and lead management.",
    localFaqs: [
      { question: "How much does website development cost in Lucknow?", answer: "Business websites cost ₹25,000-₹60,000. Complex portals with user dashboards and payment integration start at ₹75,000. We offer EMI options for Lucknow businesses." },
      { question: "Which is the best web development company in Lucknow?", answer: "Choose an agency with experience in your industry, transparent pricing, and post-launch support. ZED LABS delivers AI-powered websites with built-in chatbots, lead tracking, and SEO optimization." },
      { question: "Can you redesign my existing Lucknow business website?", answer: "Yes. We audit your current site for speed, SEO, and conversion issues, then rebuild it with modern technology. Most redesigns are completed in 2-3 weeks." },
    ],
    metaTitle: "Web Development Company in Lucknow | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Lucknow. AI-powered websites for healthcare, real estate, education, and government. 150+ projects. Get a free quote.",
    metaKeywords: ["web development company lucknow", "website design lucknow", "website development lucknow", "best web developer lucknow"],
  },
  {
    citySlug: "lucknow",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Lucknow",
    heroDescription: "Lucknow's smartphone-first market needs apps that work for real users: fast loading, offline capable, and UPI-integrated. We build Android and iOS apps for UP's growing digital economy.",
    localContext: "With UP being India's largest state by population, Lucknow-based businesses have a massive addressable market. From healthcare apps connecting patients to doctors across UP's districts to edtech platforms serving coaching students in Gomti Nagar, mobile apps are the fastest way to reach customers. The key challenge? Building apps that work on budget smartphones with intermittent connectivity.",
    localUseCases: ["Healthcare & Telemedicine Apps", "Education & Coaching Apps", "Government Service Delivery Apps", "Food Delivery & Restaurant Apps", "Real Estate & Property Management Apps"],
    localProof: "We've built mobile apps for businesses in the Hindi belt, including offline-first apps that work across Tier 2/3 cities with limited connectivity.",
    localFaqs: [
      { question: "How much does app development cost in Lucknow?", answer: "Basic apps cost ₹1.5-3 lakhs. Feature-rich apps with backend APIs, payment integration, and real-time features cost ₹3-8 lakhs. We provide a fixed-price quote after understanding your requirements." },
      { question: "Can you build Hindi-language apps?", answer: "Yes. We build multilingual apps supporting Hindi, English, and other regional languages. Our apps handle RTL text, Unicode fonts, and language switching seamlessly." },
      { question: "How long does app development take?", answer: "Basic apps: 4-6 weeks. Complex apps: 8-12 weeks. We use agile development with weekly demos so you track progress throughout." },
    ],
    metaTitle: "Mobile App Development Company in Lucknow | Android & iOS | ZED LABS",
    metaDescription: "Top mobile app development company in Lucknow. Android & iOS apps for healthcare, education, and businesses across UP. Get a free consultation.",
    metaKeywords: ["app development company lucknow", "mobile app developer lucknow", "android app development lucknow", "ios app lucknow"],
  },
  {
    citySlug: "lucknow",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Lucknow",
    heroDescription: "Lucknow businesses are competing for attention in UP's fastest-growing digital market. We deliver SEO, Google Ads, and social media campaigns that generate real leads, not just likes.",
    localContext: "UP's internet user base has exploded to 100M+ users and growing. Lucknow businesses from Hazratganj retailers to Gomti Nagar startups are fighting for visibility. The challenge? Most digital marketing agencies in Lucknow offer cookie-cutter packages. We build custom strategies based on your industry, competition, and local market dynamics. Our local SEO approach ensures you dominate searches like 'best [your business] in Lucknow.'",
    localUseCases: ["Hospital & Clinic Local SEO", "Real Estate Google Ads Campaigns", "Coaching Institute Student Acquisition", "Restaurant & Food Brand Social Media", "Government Contractor Brand Building"],
    localProof: "Our digital marketing campaigns for UP-based businesses have delivered 2.5X more qualified leads within 90 days, with full attribution tracking from first click to final conversion.",
    localFaqs: [
      { question: "How much does digital marketing cost in Lucknow?", answer: "SEO packages start at ₹12,000/month. Full digital marketing (SEO + Ads + Social) runs ₹25,000-₹60,000/month. We customize based on your goals and competition level." },
      { question: "Can you help my Lucknow business rank on Google?", answer: "Yes. We've ranked businesses in competitive Lucknow markets like healthcare, real estate, and education. Our approach combines technical SEO, local citations, and content strategy." },
      { question: "Do you handle social media for Lucknow businesses?", answer: "Yes. We manage Instagram, Facebook, LinkedIn, and YouTube for businesses in Lucknow, with content creation, community management, and paid campaigns included." },
    ],
    metaTitle: "Digital Marketing Agency in Lucknow | SEO & Ads | ZED LABS",
    metaDescription: "Results-driven digital marketing agency in Lucknow. SEO, Google Ads, social media for healthcare, real estate, and education. Get a free strategy call.",
    metaKeywords: ["digital marketing agency lucknow", "seo company lucknow", "social media marketing lucknow", "google ads lucknow"],
  },
  {
    citySlug: "lucknow",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Lucknow Businesses",
    heroDescription: "From WhatsApp chatbots handling customer queries in Hindi to AI-powered document processing for government contractors, we bring AI to Lucknow's businesses at affordable prices.",
    localContext: "AI adoption in Lucknow is accelerating. Healthcare clinics use AI chatbots for appointment booking, real estate companies use AI for lead scoring, and coaching institutes use AI for student engagement. The opportunity? Most Lucknow businesses haven't started yet, giving early adopters a massive competitive advantage. A Hindi-speaking WhatsApp chatbot can handle 80% of your customer queries at 10% of the cost.",
    localUseCases: ["Hindi WhatsApp AI Chatbots", "Healthcare Appointment Automation", "Real Estate Lead Scoring", "Education Chatbots & Student Support", "Document Processing for Government Work"],
    localProof: "We've deployed AI systems for businesses in North India that handle 1,000+ daily interactions in Hindi and English, with 90%+ accuracy in understanding customer intent.",
    localFaqs: [
      { question: "Can AI work in Hindi for my Lucknow business?", answer: "Yes. Our AI chatbots and automation tools support Hindi, English, and Hinglish. They understand the way your customers actually communicate, including voice messages on WhatsApp." },
      { question: "How much does an AI chatbot cost for a Lucknow business?", answer: "Basic WhatsApp chatbots cost ₹30,000-₹50,000 one-time. Advanced multilingual bots with CRM integration cost ₹60,000-₹1.5 lakhs. Monthly running costs are ₹2,000-5,000." },
      { question: "Is AI affordable for small businesses in Lucknow?", answer: "Absolutely. A chatbot that handles 500 customer queries/day costs less than one employee's monthly salary. Most small businesses see ROI within 3 months." },
    ],
    metaTitle: "AI Solutions & Chatbot Development in Lucknow | ZED LABS",
    metaDescription: "AI chatbots, automation, and intelligent solutions for Lucknow businesses. Hindi WhatsApp bots, lead scoring, and custom AI. Get a free consultation.",
    metaKeywords: ["ai solutions lucknow", "chatbot development lucknow", "ai automation lucknow", "whatsapp chatbot lucknow"],
  },

  // ── INDORE ──────────────────────────────────────────────────────────
  {
    citySlug: "indore",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Indore",
    heroDescription: "India's cleanest city deserves clean, fast websites. We build SEO-optimized websites for Indore's manufacturing, pharma, and IT businesses that generate real business enquiries.",
    localContext: "Indore's Super Corridor is rapidly becoming MP's tech hub, and the city's manufacturing and pharma sectors are digitizing fast. Businesses on AB Road and Vijay Nagar need websites that showcase their capabilities to national and international buyers. Crystal IT Park companies need modern web applications. Whether you're a pharma company in Pithampur or a food brand in Palasia, your website needs to compete with the best.",
    localUseCases: ["Manufacturing & Industrial Websites", "Pharma Company Portals", "IT Company Corporate Websites", "Food & FMCG Brand Websites", "Education & Coaching Websites"],
    localProof: "We've built websites for manufacturing and pharma companies that handle complex product catalogs, inquiry management, and distributor portals, generating 3X more qualified leads.",
    localFaqs: [
      { question: "How much does website development cost in Indore?", answer: "Business websites cost ₹25,000-₹60,000. Industrial and pharma portals with product catalogs start at ₹75,000. eCommerce stores with full inventory management start at ₹1 lakh." },
      { question: "Which is the best website design company in Indore?", answer: "Look for agencies with experience in your industry. ZED LABS specializes in websites that generate leads — with AI chatbots, SEO optimization, and conversion tracking built into every project." },
      { question: "Can you build a website for my Indore manufacturing business?", answer: "Yes. We've built industrial websites with product catalogs, inquiry forms, distributor portals, and GST-compliant documentation. Our sites help manufacturers get found by buyers on Google." },
    ],
    metaTitle: "Web Development Company in Indore | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Indore. Custom websites for manufacturing, pharma, IT, and local businesses. AI-powered. 150+ projects. Get a free quote.",
    metaKeywords: ["web development company indore", "website design indore", "website development indore", "best web developer indore"],
  },
  {
    citySlug: "indore",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Indore",
    heroDescription: "Indore's growing startup ecosystem needs mobile apps that scale. We build Android and iOS apps for manufacturing, pharma, food delivery, and IT businesses in Central India.",
    localContext: "Indore's startup scene is among the fastest-growing in Tier 2 India. From food-tech apps competing in the local delivery market to pharma distribution apps connecting Pithampur manufacturers to retailers — mobile apps are driving growth. The Crystal IT Park and Super Corridor are home to companies that need sophisticated web and mobile applications.",
    localUseCases: ["Food Delivery & Restaurant Apps", "Pharma Distribution & Ordering Apps", "Manufacturing Inventory Management Apps", "Education & Coaching Institute Apps", "Logistics & Fleet Management Apps"],
    localProof: "We've built mobile apps for businesses in Central India — from food delivery platforms handling 1,000+ daily orders to B2B ordering apps for pharma distributors.",
    localFaqs: [
      { question: "How much does app development cost in Indore?", answer: "Basic business apps cost ₹1.5-3 lakhs. Complex apps with real-time features, payment integration, and APIs cost ₹3-8 lakhs. We offer milestone-based payments." },
      { question: "Can you build a delivery app for my Indore business?", answer: "Yes. We build delivery apps with real-time tracking, driver management, payment integration, and push notifications. Our apps handle 5,000+ concurrent users." },
      { question: "Do you provide app maintenance after launch?", answer: "Yes. We offer AMC packages covering bug fixes, OS updates, feature additions, and server monitoring starting at ₹5,000/month." },
    ],
    metaTitle: "Mobile App Development Company in Indore | Android & iOS | ZED LABS",
    metaDescription: "Leading app development company in Indore. Android & iOS apps for startups, manufacturing, and pharma. React Native & Flutter. Get a free consultation.",
    metaKeywords: ["app development company indore", "mobile app developer indore", "android app development indore", "ios app indore"],
  },
  {
    citySlug: "indore",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Indore",
    heroDescription: "Indore's businesses are going digital — but most digital marketing agencies here deliver reports, not results. We deliver leads, sales, and measurable ROI.",
    localContext: "Indore is MP's commercial capital, and competition for digital visibility is intensifying. Manufacturing companies in Pithampur need B2B lead generation. Food brands on Chappan Dukan need Instagram marketing. IT companies on Super Corridor need LinkedIn presence. Cookie-cutter digital marketing doesn't work here — you need a strategy tailored to Indore's unique market dynamics.",
    localUseCases: ["Manufacturing & B2B Lead Generation", "Restaurant & Food Brand Social Media", "IT Company LinkedIn Marketing", "Education Institute Google Ads", "Real Estate Digital Campaigns"],
    localProof: "We've run digital marketing campaigns for Central India businesses that delivered 45% lower cost-per-lead compared to industry averages — with full funnel tracking from click to conversion.",
    localFaqs: [
      { question: "How much does digital marketing cost in Indore?", answer: "SEO starts at ₹10,000/month. Complete digital marketing packages (SEO + Ads + Social) run ₹20,000-₹50,000/month. We tailor packages to your industry and competition level." },
      { question: "Can you handle B2B marketing for Indore manufacturers?", answer: "Yes. We run B2B campaigns using Google Ads, LinkedIn, and industry-specific SEO that connect manufacturers with national and international buyers." },
      { question: "Do you offer social media management in Indore?", answer: "Yes. We manage Instagram, Facebook, LinkedIn, and YouTube with content creation, community management, and paid advertising included in all packages." },
    ],
    metaTitle: "Digital Marketing Agency in Indore | SEO & Ads | ZED LABS",
    metaDescription: "Top digital marketing agency in Indore. SEO, Google Ads, social media for manufacturing, food brands, and startups. Results-driven. Get a free strategy call.",
    metaKeywords: ["digital marketing agency indore", "seo company indore", "social media marketing indore", "google ads indore"],
  },
  {
    citySlug: "indore",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Indore Businesses",
    heroDescription: "From AI-powered quality inspection in Pithampur factories to chatbots handling customer support for IT companies — we bring practical AI to Indore's industries.",
    localContext: "Indore's manufacturing and pharma sectors are ripe for AI adoption. Quality inspection, demand forecasting, inventory optimization, and customer support automation can transform operations. Crystal IT Park companies are already building AI products — but local businesses outside tech haven't caught up. This is your competitive window.",
    localUseCases: ["Manufacturing Quality Inspection AI", "Pharma Supply Chain Optimization", "Customer Support Chatbots", "Demand Forecasting for FMCG", "Automated Document Processing"],
    localProof: "We've built AI systems for manufacturing businesses that reduced quality defects by 35% and cut customer support costs by 60% — all deployed within 4-6 weeks.",
    localFaqs: [
      { question: "Can AI help my Indore factory?", answer: "Yes. AI-powered visual inspection, predictive maintenance, and demand forecasting are already saving Indian manufacturers lakhs per month. We build solutions that integrate with your existing systems." },
      { question: "How much does AI cost for a business in Indore?", answer: "Basic AI chatbots cost ₹30,000-₹60,000. Industrial AI solutions (quality inspection, forecasting) start at ₹1-2 lakhs depending on complexity. ROI is typically 3-6 months." },
      { question: "Do you build AI solutions for pharma companies?", answer: "Yes. We build AI tools for pharma including demand forecasting, supply chain optimization, regulatory document processing, and sales force automation." },
    ],
    metaTitle: "AI Solutions & Automation in Indore | ZED LABS",
    metaDescription: "AI chatbots, manufacturing AI, and business automation for Indore. Practical AI solutions for pharma, manufacturing, and IT companies. Get a free consultation.",
    metaKeywords: ["ai solutions indore", "chatbot development indore", "ai automation indore", "manufacturing ai indore"],
  },

  // ── CHANDIGARH ──────────────────────────────────────────────────────
  {
    citySlug: "chandigarh",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Chandigarh",
    heroDescription: "The Tricity's IT sector is booming. We build fast, modern websites for Chandigarh, Mohali, and Panchkula businesses that rank on Google and generate real enquiries.",
    localContext: "Chandigarh's IT Park, Mohali's Phase 8 tech hub, and Zirakpur's growing commercial district are driving demand for professional websites. Tricity businesses compete with both local agencies and Bangalore-based companies for talent and clients. Your website needs to match the quality of your biggest competitor — because that's exactly what your prospects will compare.",
    localUseCases: ["IT Company Corporate Websites", "Education & University Portals", "Healthcare & Clinic Websites", "Real Estate Platforms", "Startup Landing Pages & MVPs"],
    localProof: "We've built websites for Tricity businesses from IT Park startups to established Sector 17 retailers — with average page load times under 2 seconds and 40% higher conversion rates.",
    localFaqs: [
      { question: "How much does website development cost in Chandigarh?", answer: "Business websites cost ₹25,000-₹60,000. Web applications and portals start at ₹75,000. We offer flexible payment terms for Tricity businesses." },
      { question: "Do you work with startups in Chandigarh?", answer: "Yes. We've built MVPs and landing pages for Tricity startups with fast turnaround (7-14 days) and scalable architecture that grows with your business." },
      { question: "Can you help my Chandigarh business with SEO?", answer: "Every website we build includes on-page SEO, Google Analytics, and Search Console setup. For ongoing SEO, we offer monthly packages starting at ₹12,000." },
    ],
    metaTitle: "Web Development Company in Chandigarh | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Chandigarh. Modern, fast websites for IT, healthcare, education, and startups in Tricity. 150+ projects. Get a free quote.",
    metaKeywords: ["web development company chandigarh", "website design chandigarh", "website development chandigarh mohali", "web developer tricity"],
  },
  {
    citySlug: "chandigarh",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Chandigarh",
    heroDescription: "From startup MVPs to enterprise applications, we build Android and iOS apps for the Tricity's growing tech ecosystem. Fast delivery, scalable architecture, AI-powered features.",
    localContext: "Chandigarh's IT Park and Mohali's tech corridor are producing innovative startups that need mobile apps to reach customers. Healthcare apps, edtech platforms, and B2B tools are the fastest-growing segments. The Tricity advantage? Lower operational costs than metros but access to quality tech talent — and your app needs to reflect that quality.",
    localUseCases: ["Startup MVP Apps", "Healthcare & Telemedicine Apps", "EdTech & E-Learning Platforms", "B2B SaaS Mobile Interfaces", "Fitness & Wellness Apps"],
    localProof: "We've built apps for Tricity startups that went from idea to App Store in under 8 weeks — with some scaling to 50,000+ users within their first year.",
    localFaqs: [
      { question: "How much does app development cost in Chandigarh?", answer: "MVP apps cost ₹1-2 lakhs. Full-featured apps cost ₹3-8 lakhs. We recommend starting with an MVP, validating with users, then scaling — this saves 40-60% vs building everything upfront." },
      { question: "Do you build SaaS products?", answer: "Yes. We build SaaS web and mobile applications with multi-tenant architecture, subscription billing, analytics dashboards, and API integrations." },
      { question: "Can you take over an existing app project?", answer: "Yes. We regularly take over projects from other agencies. We start with a code audit, identify issues, and provide a roadmap for fixes and improvements." },
    ],
    metaTitle: "Mobile App Development Company in Chandigarh | ZED LABS",
    metaDescription: "Leading app development company in Chandigarh. Android & iOS apps for startups, healthcare, and enterprise. Tricity's trusted tech partner. Get a free consultation.",
    metaKeywords: ["app development chandigarh", "mobile app developer chandigarh", "app development mohali", "startup app development tricity"],
  },
  {
    citySlug: "chandigarh",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Chandigarh",
    heroDescription: "Tricity businesses need digital marketing that delivers real results — not just reports. We run SEO, Google Ads, and social media campaigns that generate measurable ROI.",
    localContext: "The Tricity digital market is competitive — IT companies, coaching institutes, healthcare providers, and real estate developers are all fighting for the same eyeballs. Most local agencies focus on vanity metrics. We focus on what matters: leads, conversions, and revenue. Our campaigns are tailored to the Tricity market with local SEO targeting Chandigarh, Mohali, Panchkula, and Zirakpur.",
    localUseCases: ["IT Company B2B Lead Generation", "Coaching Institute Student Acquisition", "Healthcare Provider Local SEO", "Real Estate Facebook & Google Ads", "Restaurant & Hospitality Marketing"],
    localProof: "Our Tricity campaigns have delivered 50% lower cost-per-lead compared to national averages — by combining local SEO with hyper-targeted Google Ads and retargeting.",
    localFaqs: [
      { question: "How much does digital marketing cost in Chandigarh?", answer: "SEO packages start at ₹12,000/month. Full digital marketing (SEO + Ads + Social) runs ₹25,000-₹50,000/month. We customize based on your competition and goals." },
      { question: "Can you help my Chandigarh business appear in Google Maps?", answer: "Yes. Google My Business optimization is part of our local SEO service. We optimize your listing, manage reviews, and ensure you appear in the local pack for relevant searches." },
      { question: "Do you work with IT companies in Chandigarh?", answer: "Yes. We run B2B digital marketing campaigns for IT companies including LinkedIn advertising, content marketing, SEO, and lead nurturing automation." },
    ],
    metaTitle: "Digital Marketing Agency in Chandigarh | SEO & Ads | ZED LABS",
    metaDescription: "Results-driven digital marketing agency in Chandigarh. SEO, Google Ads, social media for IT, healthcare, and real estate. Tricity experts. Get a free strategy call.",
    metaKeywords: ["digital marketing agency chandigarh", "seo company chandigarh", "digital marketing mohali", "google ads chandigarh"],
  },
  {
    citySlug: "chandigarh",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Chatbot Development in Chandigarh",
    heroDescription: "The Tricity's tech ecosystem is ready for AI. We build chatbots, automation tools, and intelligent systems for Chandigarh's IT companies, healthcare providers, and startups.",
    localContext: "Chandigarh's IT Park companies are already exploring AI — but most local businesses haven't started. Healthcare clinics need AI appointment scheduling. IT companies need AI-powered customer support. Startups need AI features to differentiate. The Tricity has the tech talent to adopt AI; what's missing is affordable, practical implementation. That's what we deliver.",
    localUseCases: ["IT Product AI Features", "Healthcare AI Scheduling & Triage", "EdTech AI Tutoring Systems", "Startup AI-Powered MVPs", "Customer Service Automation"],
    localProof: "We've helped Tricity businesses deploy AI systems that reduced operational costs by 40% and improved customer satisfaction scores by 35% — all within 4-8 weeks of implementation.",
    localFaqs: [
      { question: "Can AI help my IT company in Chandigarh?", answer: "Absolutely. We build AI features for SaaS products, internal tools, and client-facing applications — from natural language processing to predictive analytics." },
      { question: "How much does AI implementation cost in Chandigarh?", answer: "Basic chatbots cost ₹30,000-₹60,000. Custom AI features for products cost ₹1-3 lakhs. Enterprise AI solutions with training and integration start at ₹3 lakhs." },
      { question: "Do you offer AI consulting for Tricity startups?", answer: "Yes. We offer AI strategy sessions to help you identify the highest-ROI AI use cases for your business — before writing a single line of code." },
    ],
    metaTitle: "AI Solutions & Chatbot Development in Chandigarh | ZED LABS",
    metaDescription: "AI chatbots, automation, and intelligent solutions for Chandigarh businesses. IT products, healthcare AI, and startup solutions. Get a free consultation.",
    metaKeywords: ["ai solutions chandigarh", "chatbot development chandigarh", "ai automation chandigarh", "ai company tricity"],
  },

  // ── KOCHI ───────────────────────────────────────────────────────────
  {
    citySlug: "kochi",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Kochi",
    heroDescription: "Kochi's tourism, spice trade, and IT sectors need websites that work globally. We build multilingual, fast-loading websites for Kerala businesses that attract international and domestic customers.",
    localContext: "Kochi is Kerala's commercial powerhouse — Infopark and SmartCity host India's best IT talent while the city's tourism and spice export industries drive international trade. Fort Kochi homestays need booking websites that rank on Google globally. Spice exporters in Mattancherry need B2B portals. Infopark startups need modern web applications. The common thread? Every Kochi business needs a website that works as well in Dubai as it does in Delhi.",
    localUseCases: ["Tourism & Homestay Booking Websites", "Spice & Commodity Export Portals", "IT Company Corporate Websites", "Healthcare & Ayurveda Clinic Sites", "Marine & Shipping Business Portals"],
    localProof: "We've built websites for Kerala businesses that attract international traffic — from Ayurveda tourism platforms ranking in European search results to spice export B2B portals used by buyers in 15+ countries.",
    localFaqs: [
      { question: "How much does website development cost in Kochi?", answer: "Business websites cost ₹25,000-₹60,000. Multilingual tourism websites with booking systems start at ₹75,000. Export B2B portals with CRM start at ₹1 lakh." },
      { question: "Can you build a multilingual website for my Kochi business?", answer: "Yes. We build websites in English, Malayalam, Hindi, and Arabic — essential for Kerala businesses targeting both domestic and Gulf markets." },
      { question: "Do you work with Infopark companies in Kochi?", answer: "Yes. We've built web applications for Infopark and SmartCity companies — from SaaS dashboards to client-facing portals with complex integrations." },
    ],
    metaTitle: "Web Development Company in Kochi | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Kochi. Multilingual websites for tourism, IT, spice export, and healthcare. 150+ projects delivered. Get a free quote.",
    metaKeywords: ["web development company kochi", "website design kochi", "website development kerala", "web developer kochi"],
  },
  {
    citySlug: "kochi",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Kochi",
    heroDescription: "Kerala's tech hub deserves world-class mobile apps. We build Android and iOS apps for Kochi's tourism, healthcare, and IT sectors — with multilingual support and global scalability.",
    localContext: "Kochi's Infopark is one of India's largest IT parks, and Kerala's high literacy rate means tech adoption is faster than most states. Tourism apps, Ayurveda consultation platforms, and logistics apps for the shipping industry are in high demand. The Gulf connection means many Kochi businesses need apps that work internationally.",
    localUseCases: ["Tourism & Travel Guide Apps", "Ayurveda & Wellness Consultation Apps", "Shipping & Logistics Management Apps", "NRI Services & Remittance Apps", "Infopark SaaS Mobile Apps"],
    localProof: "We've built mobile apps for Kerala businesses serving both domestic and international markets — including tourism apps with multilingual support and offline capabilities.",
    localFaqs: [
      { question: "How much does app development cost in Kochi?", answer: "Basic apps cost ₹1.5-3 lakhs. Feature-rich apps with international payment gateways and multilingual support cost ₹3-8 lakhs." },
      { question: "Can you build apps with Malayalam language support?", answer: "Yes. We build apps with full Malayalam, English, Hindi, and Arabic support — including right-to-left text rendering for Arabic-speaking users." },
      { question: "Do you build apps for the tourism industry?", answer: "Yes. We've built tourism apps with itinerary planning, booking integration, offline maps, and multilingual content management." },
    ],
    metaTitle: "Mobile App Development Company in Kochi | Android & iOS | ZED LABS",
    metaDescription: "Leading app development company in Kochi. Android & iOS apps for tourism, healthcare, IT, and shipping. Multilingual. Get a free consultation.",
    metaKeywords: ["app development company kochi", "mobile app developer kochi", "app development kerala", "android app kochi"],
  },
  {
    citySlug: "kochi",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Kochi",
    heroDescription: "Kerala's most internet-savvy market needs smart digital marketing. We run SEO, Google Ads, and social media campaigns for Kochi businesses targeting domestic and international audiences.",
    localContext: "Kerala has India's highest internet penetration rate — your customers are online, searching, and comparing. Kochi businesses face unique challenges: tourism companies compete with OTAs for Google rankings, healthcare providers compete with medical tourism platforms, and IT companies compete nationally for clients. We build digital strategies that leverage Kochi's strengths — multilingual content, international reach, and Kerala's strong brand.",
    localUseCases: ["Tourism SEO & Google Ads (Domestic + International)", "Ayurveda & Medical Tourism Marketing", "IT Company B2B Lead Generation", "Spice Export International SEO", "Real Estate & NRI Property Marketing"],
    localProof: "Our digital marketing campaigns for Kerala businesses have achieved first-page Google rankings in both Indian and international markets — with some tourism clients ranking in UK and UAE search results.",
    localFaqs: [
      { question: "How much does digital marketing cost in Kochi?", answer: "SEO packages start at ₹12,000/month. International SEO and multi-market campaigns run ₹30,000-₹75,000/month. We customize based on your target markets." },
      { question: "Can you help my Kochi business rank internationally?", answer: "Yes. We run international SEO campaigns targeting UK, UAE, US, and European markets — essential for tourism, Ayurveda, and export businesses." },
      { question: "Do you handle Google My Business for Kochi?", answer: "Yes. Local SEO including Google My Business optimization, local citations, and review management is included in all our SEO packages." },
    ],
    metaTitle: "Digital Marketing Agency in Kochi | SEO & Ads | ZED LABS",
    metaDescription: "Results-driven digital marketing agency in Kochi. International SEO, Google Ads, social media for tourism, healthcare, and IT. Get a free strategy call.",
    metaKeywords: ["digital marketing agency kochi", "seo company kochi", "digital marketing kerala", "google ads kochi"],
  },
  {
    citySlug: "kochi",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Kochi Businesses",
    heroDescription: "From AI chatbots handling tourism queries in multiple languages to intelligent shipping logistics — we bring practical AI to Kerala's commercial capital.",
    localContext: "Kochi's tech ecosystem is mature enough for AI adoption. Infopark companies are building AI products, but the city's traditional industries — tourism, spice trade, shipping — are just beginning to explore AI. Multilingual chatbots that handle queries in English, Malayalam, and Arabic can transform customer service for businesses serving both domestic and Gulf markets.",
    localUseCases: ["Multilingual Tourism AI Chatbots", "Shipping & Logistics Route Optimization", "Ayurveda Consultation AI Assistant", "Spice Trade Demand Forecasting", "IT Product AI Feature Development"],
    localProof: "We've deployed multilingual AI systems for businesses with international customers — handling conversations in 5+ languages with 92% accuracy in intent recognition.",
    localFaqs: [
      { question: "Can AI help my tourism business in Kochi?", answer: "Yes. AI chatbots can handle booking queries 24/7 in multiple languages, recommend itineraries based on preferences, and follow up with personalized offers — increasing bookings by 30-50%." },
      { question: "How much does AI cost for Kochi businesses?", answer: "Basic chatbots cost ₹30,000-₹60,000. Multilingual AI systems with complex integrations cost ₹1-3 lakhs. Industrial AI (logistics, forecasting) starts at ₹2 lakhs." },
      { question: "Do you build AI for Infopark companies?", answer: "Yes. We integrate AI features into existing products — recommendation engines, NLP, computer vision, and predictive analytics for SaaS and enterprise applications." },
    ],
    metaTitle: "AI Solutions & Chatbot Development in Kochi | ZED LABS",
    metaDescription: "Multilingual AI chatbots, automation, and intelligent solutions for Kochi businesses. Tourism, shipping, IT, and healthcare AI. Get a free consultation.",
    metaKeywords: ["ai solutions kochi", "chatbot development kochi", "ai automation kerala", "ai company kochi"],
  },

  // ── COIMBATORE ──────────────────────────────────────────────────────
  {
    citySlug: "coimbatore",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Coimbatore",
    heroDescription: "Coimbatore's manufacturing and textile powerhouses need websites that attract national buyers. We build industrial-grade websites with product catalogs, inquiry management, and SEO that works.",
    localContext: "Coimbatore is South India's manufacturing backbone — textiles, pumps, motors, and wet grinders are exported worldwide. But most Coimbatore manufacturers still rely on IndiaMart and trade shows for leads. A well-built website with proper SEO can generate 10X more enquiries than an IndiaMart listing — and you own the leads. Tidel Park's IT companies and Saravanampatti's growing tech hub are also driving demand.",
    localUseCases: ["Textile & Manufacturing Product Catalogs", "Engineering Company Corporate Websites", "IT Company Portfolios", "Healthcare & Hospital Websites", "AgriTech & Farm Equipment Portals"],
    localProof: "We've built websites for South Indian manufacturers that generate 50+ qualified enquiries per month — replacing dependence on IndiaMart with owned lead generation.",
    localFaqs: [
      { question: "How much does website development cost in Coimbatore?", answer: "Business websites cost ₹25,000-₹60,000. Manufacturing product catalog websites with inquiry management start at ₹60,000. eCommerce stores start at ₹1 lakh." },
      { question: "Can you build a website to replace my IndiaMart listing?", answer: "Yes. We build SEO-optimized websites with product catalogs, inquiry forms, and Google Ads integration that generate direct leads — so you stop paying per-lead commissions to aggregators." },
      { question: "Do you build Tamil and English bilingual websites?", answer: "Yes. We build bilingual websites that serve both Tamil and English-speaking audiences — essential for businesses targeting both local and national markets." },
    ],
    metaTitle: "Web Development Company in Coimbatore | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Coimbatore. Industrial websites for manufacturing, textile, IT, and healthcare. Product catalogs & SEO. Get a free quote.",
    metaKeywords: ["web development company coimbatore", "website design coimbatore", "website development coimbatore", "web developer coimbatore"],
  },
  {
    citySlug: "coimbatore",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Coimbatore",
    heroDescription: "From manufacturing ERP mobile interfaces to agritech apps for Tamil Nadu's farms — we build Android and iOS apps that solve real business problems in Coimbatore.",
    localContext: "Coimbatore's industries need mobile solutions that work on the factory floor and in the field. Manufacturing managers need inventory apps. Textile businesses need B2B ordering platforms. AgriTech companies in the region need farmer-facing apps that work in Tamil. Tidel Park startups need consumer apps that scale nationally.",
    localUseCases: ["Manufacturing ERP Mobile Apps", "B2B Textile Ordering Platforms", "AgriTech & Farm Management Apps", "Healthcare Patient Management Apps", "Startup Consumer Apps"],
    localProof: "We've built industrial mobile apps used by 500+ factory workers daily — with offline sync, barcode scanning, and real-time inventory tracking.",
    localFaqs: [
      { question: "How much does app development cost in Coimbatore?", answer: "Basic apps cost ₹1.5-3 lakhs. Industrial apps with offline sync and barcode integration cost ₹3-6 lakhs. Enterprise apps with ERP integration start at ₹5 lakhs." },
      { question: "Can you build apps with Tamil language support?", answer: "Yes. We build apps with full Tamil and English support — including Tamil voice input for field workers and laborers." },
      { question: "Do you integrate apps with existing ERP systems?", answer: "Yes. We build mobile interfaces for existing ERP systems (SAP, Tally, custom ERPs) — giving your team access to real-time data on their phones." },
    ],
    metaTitle: "Mobile App Development Company in Coimbatore | ZED LABS",
    metaDescription: "Leading app development company in Coimbatore. Industrial apps, agritech, and startup apps. Android & iOS. Tamil language support. Get a free consultation.",
    metaKeywords: ["app development company coimbatore", "mobile app developer coimbatore", "android app coimbatore", "industrial app development"],
  },
  {
    citySlug: "coimbatore",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Coimbatore",
    heroDescription: "Coimbatore manufacturers and businesses need digital marketing that generates buyer enquiries — not just social media followers. We deliver leads through SEO, Google Ads, and B2B campaigns.",
    localContext: "Coimbatore's B2B market is massive — textile exporters, pump manufacturers, engineering companies all need visibility among national and international buyers. The challenge? Most manufacturers don't know how to generate leads online beyond IndiaMart. We run B2B SEO campaigns that rank your website for buyer-intent keywords, Google Ads that target procurement managers, and LinkedIn campaigns that reach decision-makers.",
    localUseCases: ["Manufacturing B2B SEO & Lead Generation", "Textile Export International Marketing", "Hospital & Healthcare Local SEO", "IT Company LinkedIn Campaigns", "AgriTech Content Marketing"],
    localProof: "Our B2B campaigns for South Indian manufacturers have generated 300% more direct enquiries compared to their IndiaMart listings — with 60% lower cost per qualified lead.",
    localFaqs: [
      { question: "How much does digital marketing cost in Coimbatore?", answer: "B2B SEO starts at ₹15,000/month. Full digital marketing with Ads and social runs ₹25,000-₹60,000/month. International SEO for exporters starts at ₹30,000/month." },
      { question: "Can you help my factory get found on Google?", answer: "Yes. We optimize your website for product-specific keywords that buyers actually search — like 'textile manufacturer Coimbatore' or 'pump supplier South India.' Most clients rank on page 1 within 3-4 months." },
      { question: "Do you run LinkedIn ads for Coimbatore businesses?", answer: "Yes. LinkedIn Ads are the most effective B2B channel for manufacturers. We create campaigns targeting procurement managers, engineers, and business owners in your target industries." },
    ],
    metaTitle: "Digital Marketing Agency in Coimbatore | B2B SEO & Ads | ZED LABS",
    metaDescription: "Top digital marketing agency in Coimbatore. B2B SEO, Google Ads, LinkedIn for manufacturers, textile, and IT companies. Get a free strategy call.",
    metaKeywords: ["digital marketing agency coimbatore", "seo company coimbatore", "b2b marketing coimbatore", "google ads coimbatore"],
  },
  {
    citySlug: "coimbatore",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Coimbatore Industries",
    heroDescription: "From AI-powered quality control in textile mills to predictive maintenance for manufacturing — we bring industrial AI to Coimbatore's factories and businesses.",
    localContext: "Coimbatore's manufacturing sector is the perfect candidate for AI adoption. Textile quality inspection, motor testing automation, predictive maintenance for pumps and compressors, and demand forecasting for seasonal products — these are high-ROI AI applications. Most Coimbatore factories still rely on manual inspection and gut-feel decisions. AI changes that.",
    localUseCases: ["Textile Quality Inspection AI", "Predictive Maintenance for Manufacturing", "Supply Chain Demand Forecasting", "Customer Support Chatbots (Tamil + English)", "Agricultural Yield Prediction"],
    localProof: "We've deployed AI quality inspection systems in manufacturing units that detect defects 5X faster than manual inspection — reducing rejection rates by 40% and saving lakhs per month.",
    localFaqs: [
      { question: "Can AI help my Coimbatore textile business?", answer: "Yes. AI-powered visual inspection can detect fabric defects in real-time, classify quality grades automatically, and reduce manual inspection costs by 70%. ROI is typically under 6 months." },
      { question: "How much does industrial AI cost?", answer: "Basic AI chatbots cost ₹30,000-₹60,000. Manufacturing AI (quality inspection, predictive maintenance) starts at ₹2-5 lakhs depending on complexity and camera/sensor requirements." },
      { question: "Do you offer AI consulting for manufacturers?", answer: "Yes. We start with a free AI readiness assessment — identifying the highest-ROI opportunities in your factory before recommending solutions." },
    ],
    metaTitle: "AI Solutions & Industrial Automation in Coimbatore | ZED LABS",
    metaDescription: "Industrial AI for Coimbatore manufacturers. Quality inspection, predictive maintenance, and automation for textile, engineering, and agritech. Get a free consultation.",
    metaKeywords: ["ai solutions coimbatore", "industrial ai coimbatore", "manufacturing automation coimbatore", "ai company coimbatore"],
  },

  // ── NAGPUR ──────────────────────────────────────────────────────────
  {
    citySlug: "nagpur",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Nagpur",
    heroDescription: "Central India's orange capital is going digital. We build professional websites for Nagpur's mining, logistics, education, and government sectors that generate real business.",
    localContext: "Nagpur's strategic location as India's geographic center makes it a logistics and distribution hub — and the MIHAN SEZ is attracting IT and manufacturing investment. Mining companies along Wardha Road, educational institutions in Civil Lines, and logistics companies near the airport all need professional websites. The city's IT Park is growing, and Nagpur businesses are finally realizing that a ₹5,000 website isn't enough to compete.",
    localUseCases: ["Mining & Mineral Trading Portals", "Logistics & Freight Management Websites", "Education & University Portals", "Government & PSU Contractor Websites", "Healthcare & Hospital Sites"],
    localProof: "We've built websites for Central India businesses that transformed their online presence — from basic brochure sites to lead-generating machines with AI chatbots and CRM integration.",
    localFaqs: [
      { question: "How much does website development cost in Nagpur?", answer: "Business websites cost ₹25,000-₹60,000. Complex portals with user management and payment integration start at ₹75,000. We offer the best value in Central India." },
      { question: "Can you build a website for my Nagpur logistics business?", answer: "Yes. We build logistics websites with shipment tracking, rate calculators, client portals, and CRM integration — helping you manage customers digitally." },
      { question: "Do you provide ongoing website support in Nagpur?", answer: "Yes. We offer AMC packages from ₹2,999/month covering hosting, security, updates, and content changes." },
    ],
    metaTitle: "Web Development Company in Nagpur | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Nagpur. Custom websites for mining, logistics, education, and MIHAN businesses. AI-powered. Get a free quote.",
    metaKeywords: ["web development company nagpur", "website design nagpur", "website development nagpur", "web developer nagpur"],
  },
  {
    citySlug: "nagpur",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Nagpur",
    heroDescription: "Nagpur's logistics hub and growing IT sector need mobile apps that streamline operations. We build Android and iOS apps for Central India's businesses.",
    localContext: "Nagpur's position as a logistics hub means businesses need apps for fleet tracking, shipment management, and driver coordination. The MIHAN SEZ's growth is creating demand for enterprise apps. Education institutions need student management apps. Mining companies need field reporting tools. The market for quality app development in Nagpur is underserved — most businesses outsource to Pune or Bangalore at higher costs.",
    localUseCases: ["Logistics & Fleet Management Apps", "Mining Field Reporting Apps", "Education Student Management Apps", "Healthcare Patient Apps", "MIHAN Enterprise Applications"],
    localProof: "We've built logistics apps with real-time GPS tracking handling 200+ vehicles — giving fleet managers complete visibility and reducing fuel costs by 15%.",
    localFaqs: [
      { question: "How much does app development cost in Nagpur?", answer: "Basic apps cost ₹1.5-3 lakhs. Logistics and enterprise apps with GPS, real-time tracking, and integrations cost ₹3-8 lakhs." },
      { question: "Can you build a fleet tracking app?", answer: "Yes. We build fleet management apps with real-time GPS, route optimization, driver management, fuel tracking, and maintenance scheduling." },
      { question: "Do you work with MIHAN companies?", answer: "Yes. We build enterprise mobile applications for MIHAN SEZ companies — including internal tools, client apps, and B2B platforms." },
    ],
    metaTitle: "Mobile App Development Company in Nagpur | Android & iOS | ZED LABS",
    metaDescription: "Top app development company in Nagpur. Logistics, enterprise, and education apps. Android & iOS. Central India's trusted tech partner. Get a free consultation.",
    metaKeywords: ["app development company nagpur", "mobile app developer nagpur", "android app nagpur", "logistics app development"],
  },
  {
    citySlug: "nagpur",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Nagpur",
    heroDescription: "Nagpur businesses are waking up to digital marketing — but most agencies here offer outdated SEO tactics. We deliver modern, data-driven campaigns that generate actual business enquiries.",
    localContext: "Nagpur's digital marketing landscape is 3-4 years behind metros — which means massive opportunity for early movers. Most local businesses still rely on newspaper ads and hoardings. The businesses that invest in Google Ads and SEO now will dominate Nagpur's digital market for years. We bring metro-quality digital marketing expertise to Central India at competitive pricing.",
    localUseCases: ["Local Business Google My Business Optimization", "Mining & Industrial B2B Marketing", "Education Institute Student Recruitment", "Hospital & Clinic Local SEO", "Real Estate Digital Campaigns"],
    localProof: "We've helped Nagpur businesses achieve first-page Google rankings in markets where no competitor was even trying — giving them a 2-3 year head start in digital visibility.",
    localFaqs: [
      { question: "How much does digital marketing cost in Nagpur?", answer: "SEO starts at ₹10,000/month. Full digital marketing packages run ₹20,000-₹45,000/month. Nagpur's lower competition means faster results at lower budgets." },
      { question: "Is digital marketing worth it for Nagpur businesses?", answer: "Absolutely — and now is the best time. Competition is low, so you can rank faster and cheaper than in metros. The businesses that invest now will own digital market share for years." },
      { question: "Can you help me with Google Ads in Nagpur?", answer: "Yes. We run Google Ads campaigns targeting Nagpur and Vidarbha audiences. With lower CPCs than metros, your ad budget goes 2-3X further here." },
    ],
    metaTitle: "Digital Marketing Agency in Nagpur | SEO & Ads | ZED LABS",
    metaDescription: "Top digital marketing agency in Nagpur. SEO, Google Ads, social media for mining, education, logistics, and local businesses. Get a free strategy call.",
    metaKeywords: ["digital marketing agency nagpur", "seo company nagpur", "social media marketing nagpur", "google ads nagpur"],
  },
  {
    citySlug: "nagpur",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Nagpur Businesses",
    heroDescription: "From AI-powered logistics optimization to chatbots handling customer support — we bring affordable AI solutions to Central India's businesses.",
    localContext: "Nagpur's logistics and mining sectors have untapped AI potential. Route optimization can save fleet operators 15-20% on fuel. Predictive maintenance can prevent costly equipment breakdowns in mines. AI chatbots can handle customer queries for businesses that can't afford 24/7 support staff. The best part? AI costs a fraction of what it did 2 years ago.",
    localUseCases: ["Logistics Route Optimization", "Mining Predictive Maintenance", "Customer Support Chatbots", "Education AI Tutoring", "Document Processing for Government Contractors"],
    localProof: "We've deployed AI route optimization systems that saved logistics companies ₹3-5 lakhs per month in fuel and time costs — paying for themselves in under 2 months.",
    localFaqs: [
      { question: "Can AI help my logistics business in Nagpur?", answer: "Yes. AI route optimization, demand forecasting, and automated dispatch can reduce your operational costs by 15-25%. We've seen fleet operators save ₹3-5 lakhs/month." },
      { question: "How much does AI cost for Nagpur businesses?", answer: "Chatbots cost ₹30,000-₹60,000. Logistics AI starts at ₹1-2 lakhs. Mining AI solutions start at ₹2-5 lakhs. All solutions come with training and support." },
      { question: "Is AI practical for small businesses in Nagpur?", answer: "Yes. Start with a WhatsApp chatbot for ₹30,000 and see immediate ROI. Then expand to more complex AI as your business grows." },
    ],
    metaTitle: "AI Solutions & Automation in Nagpur | ZED LABS",
    metaDescription: "AI chatbots, logistics AI, and automation for Nagpur businesses. Mining, logistics, and education AI solutions. Affordable. Get a free consultation.",
    metaKeywords: ["ai solutions nagpur", "chatbot development nagpur", "ai automation nagpur", "logistics ai nagpur"],
  },

  // ── BHOPAL ──────────────────────────────────────────────────────────
  {
    citySlug: "bhopal",
    serviceSlug: "custom-websites",
    heroTitle: "Website Development & Design Services in Bhopal",
    heroDescription: "MP's capital city is digitizing fast. We build modern, SEO-optimized websites for Bhopal's government contractors, education institutions, healthcare providers, and growing IT sector.",
    localContext: "Bhopal's economy is driven by government, education, and healthcare — sectors that are rapidly digitizing. Government contractors need professional websites to qualify for e-tenders. Hospitals and clinics need patient-facing portals. Educational institutions need admission and learning platforms. MP Nagar's commercial hub and Hoshangabad Road's growing tech presence are creating demand for quality web development.",
    localUseCases: ["Government Contractor Corporate Websites", "Hospital & Healthcare Patient Portals", "University & College Admission Platforms", "Manufacturing Company Websites", "Tourism & Heritage Site Platforms"],
    localProof: "We've built websites for MP-based businesses and institutions that handle 100,000+ monthly visitors — with government-grade security and accessibility compliance.",
    localFaqs: [
      { question: "How much does website development cost in Bhopal?", answer: "Business websites cost ₹25,000-₹60,000. Government-compliant portals with accessibility features start at ₹75,000. Education platforms with LMS start at ₹1 lakh." },
      { question: "Can you build government-compliant websites?", answer: "Yes. We build websites compliant with GIGW (Government of India Guidelines for Websites) including accessibility, bilingual content (Hindi/English), and security standards." },
      { question: "Do you build Hindi websites for Bhopal businesses?", answer: "Yes. We build fully bilingual Hindi-English websites with proper Unicode support, Hindi SEO, and content management in both languages." },
    ],
    metaTitle: "Web Development Company in Bhopal | Custom Websites | ZED LABS",
    metaDescription: "Top website development company in Bhopal. Government-compliant, bilingual websites for healthcare, education, and businesses. 150+ projects. Get a free quote.",
    metaKeywords: ["web development company bhopal", "website design bhopal", "website development bhopal", "web developer bhopal"],
  },
  {
    citySlug: "bhopal",
    serviceSlug: "mobile-apps",
    heroTitle: "Mobile App Development Company in Bhopal",
    heroDescription: "From government service delivery apps to healthcare patient management — we build Android and iOS apps for Bhopal's institutions and businesses.",
    localContext: "Bhopal's government and education sectors need mobile apps for citizen services, student management, and healthcare delivery. The city's growing IT sector around Hoshangabad Road is also creating demand for startup and enterprise apps. MP's digital push means government departments and PSUs are actively seeking mobile solutions for service delivery.",
    localUseCases: ["Government Citizen Service Apps", "Healthcare & Hospital Management Apps", "Education & Admission Apps", "Tourism & Heritage Guide Apps", "Government Employee Productivity Apps"],
    localProof: "We've built mobile apps for government-adjacent projects handling 10,000+ daily users — with offline capability, multi-language support, and robust security.",
    localFaqs: [
      { question: "How much does app development cost in Bhopal?", answer: "Basic apps cost ₹1.5-3 lakhs. Government-grade apps with security compliance cost ₹3-8 lakhs. We provide detailed documentation for tender compliance." },
      { question: "Can you build government-compliant mobile apps?", answer: "Yes. We build apps compliant with government IT standards — including data localization, security audits, and accessibility requirements." },
      { question: "Do you build apps in Hindi?", answer: "Yes. Full Hindi language support with voice input, Hindi OCR, and bilingual interfaces. Essential for government and citizen-facing applications in MP." },
    ],
    metaTitle: "Mobile App Development Company in Bhopal | Android & iOS | ZED LABS",
    metaDescription: "Top app development company in Bhopal. Government, healthcare, and education apps. Hindi language support. Android & iOS. Get a free consultation.",
    metaKeywords: ["app development company bhopal", "mobile app developer bhopal", "android app bhopal", "government app development"],
  },
  {
    citySlug: "bhopal",
    serviceSlug: "digital-marketing",
    heroTitle: "Digital Marketing Agency in Bhopal",
    heroDescription: "Bhopal's businesses are going digital, but competition is still low — making NOW the best time to invest. We deliver SEO, Google Ads, and social media campaigns that put you ahead.",
    localContext: "Bhopal's digital marketing market is early-stage — which is exactly why you should invest now. Healthcare providers, educational institutions, and government contractors who build digital presence today will dominate MP's online market for years. Google Ads CPCs in Bhopal are 50-70% lower than metros, meaning your budget goes further. We bring Bangalore-quality digital marketing to MP's capital.",
    localUseCases: ["Hospital & Healthcare Local SEO", "Education Institution Student Recruitment", "Government Contractor Brand Building", "Real Estate Digital Campaigns", "Tourism & Heritage Marketing"],
    localProof: "We've helped MP businesses rank on Google's first page within 2-3 months — faster than metro timelines because competition is still catching up.",
    localFaqs: [
      { question: "How much does digital marketing cost in Bhopal?", answer: "SEO starts at ₹10,000/month. Full digital marketing packages run ₹18,000-₹40,000/month. Bhopal's lower competition means you get better results for less." },
      { question: "Is SEO worth it for Bhopal businesses?", answer: "Yes — and urgently. Low competition means you can rank for valuable keywords like 'best hospital in Bhopal' or 'coaching institute Bhopal' in 2-3 months. In metros, that takes 6-12 months." },
      { question: "Can you run Hindi content marketing?", answer: "Yes. We create Hindi and English content strategies — essential for reaching MP's audience. Hindi content has less competition and higher engagement in this market." },
    ],
    metaTitle: "Digital Marketing Agency in Bhopal | SEO & Ads | ZED LABS",
    metaDescription: "Top digital marketing agency in Bhopal. SEO, Google Ads, social media for healthcare, education, and government. Low competition, high ROI. Get a free strategy call.",
    metaKeywords: ["digital marketing agency bhopal", "seo company bhopal", "social media marketing bhopal", "google ads bhopal"],
  },
  {
    citySlug: "bhopal",
    serviceSlug: "ai-solutions",
    heroTitle: "AI Solutions & Automation for Bhopal Businesses",
    heroDescription: "AI isn't just for Bangalore companies. We bring practical, affordable AI solutions to Bhopal's healthcare, education, and government sectors.",
    localContext: "Bhopal's institutions are the perfect candidates for AI. Hospitals need AI triage chatbots. Educational institutions need AI-powered student support. Government offices need document processing automation. The cost of AI has dropped 80% in 2 years — making it accessible even for mid-size Bhopal businesses. Early adopters will gain a competitive edge that lasts years.",
    localUseCases: ["Hospital AI Triage & Appointment Chatbots", "Education AI Student Support", "Government Document Processing Automation", "Hindi AI Customer Service Bots", "Healthcare Data Analytics"],
    localProof: "We've deployed AI chatbots for healthcare institutions that handle 300+ patient queries daily in Hindi — reducing receptionist workload by 70% and improving patient satisfaction.",
    localFaqs: [
      { question: "Can AI work in Hindi for my Bhopal business?", answer: "Yes. Our AI systems are fluent in Hindi, English, and Hinglish — understanding the way your customers and citizens actually communicate." },
      { question: "How much does AI cost for Bhopal businesses?", answer: "Hindi chatbots cost ₹30,000-₹60,000. Healthcare AI systems cost ₹1-2 lakhs. Government automation solutions start at ₹1.5 lakhs. ROI is typically 3-6 months." },
      { question: "Can AI help government offices in Bhopal?", answer: "Yes. Document processing, citizen query handling, RTI response automation, and complaint management — AI can reduce manual work by 60-80% in government offices." },
    ],
    metaTitle: "AI Solutions & Automation in Bhopal | ZED LABS",
    metaDescription: "AI chatbots, healthcare AI, and government automation for Bhopal. Hindi language support. Affordable AI for MP's capital. Get a free consultation.",
    metaKeywords: ["ai solutions bhopal", "chatbot development bhopal", "ai automation bhopal", "healthcare ai bhopal"],
  },
];

// ── Import Tier 2 & 3 ─────────────────────────────────────────────────

import { TIER2_CITIES, TIER2_CONTENT } from "./cities-tier2";
import { TIER3_CITIES, TIER3_CONTENT } from "./cities-tier3";

// ── Combined Arrays ───────────────────────────────────────────────────

export const ALL_CITIES: CityItem[] = [...CITIES, ...TIER2_CITIES, ...TIER3_CITIES];
export const ALL_CONTENT: CityServiceContent[] = [...CITY_SERVICE_CONTENT, ...TIER2_CONTENT, ...TIER3_CONTENT];

// ── Lookup Functions ───────────────────────────────────────────────────

export function getCityBySlug(slug: string): CityItem | undefined {
  return ALL_CITIES.find((c) => c.slug === slug);
}

export function getCityServiceContent(
  citySlug: string,
  serviceSlug: string
): CityServiceContent | undefined {
  return ALL_CONTENT.find(
    (c) => c.citySlug === citySlug && c.serviceSlug === serviceSlug
  );
}

export function getAllCityServiceParams(): { slug: string; city: string }[] {
  return ALL_CONTENT.map((c) => ({
    slug: c.serviceSlug,
    city: c.citySlug,
  }));
}
