import { SERVICES, type ServiceItem } from "@/lib/constants";

const bySlug = (slugs: string[]) =>
  slugs
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((x): x is ServiceItem => Boolean(x));

export const CAPABILITIES = [
  {
    index: "01",
    name: "Build",
    headline: "Websites and apps your customers actually use.",
    body: "Fast sites that rank, stores that sell, and mobile apps people keep on their phones. Designed and built in-house.",
    services: bySlug(["custom-websites", "ecommerce-solutions", "mobile-apps", "ui-ux-design"]),
  },
  {
    index: "02",
    name: "Operate",
    headline: "Software that runs the business behind the counter.",
    body: "ERP, CRM and POS systems shaped around how your team already works, not the other way round.",
    services: bySlug(["erp-systems", "crm-software", "hospitality-pos"]),
  },
  {
    index: "03",
    name: "Automate",
    headline: "AI that answers, qualifies and follows up.",
    body: "WhatsApp agents, lead scoring and support bots that take the repetitive work off your staff.",
    services: bySlug(["ai-agents", "ai-solutions"]),
  },
  {
    index: "04",
    name: "Grow & protect",
    headline: "Traffic, uptime and security after launch.",
    body: "Search and ads that bring in enquiries, plus hosting, maintenance and security so nothing breaks at 2 AM.",
    services: bySlug(["digital-marketing", "cloud-devops", "maintenance-amc", "cybersecurity"]),
  },
];

export const INDUSTRIES = [
  "Retail",
  "Restaurants",
  "Hotels",
  "Healthcare",
  "Real estate",
  "Education",
  "Manufacturing",
  "Logistics",
  "Interiors",
  "Automobile",
  "Finance",
  "D2C brands",
];

export type ClientCity = {
  id: string;
  city: string;
  country: string;
  code: string; // airport-style code for the departure board
  lat: number;
  lon: number;
  tz: string;
};

export const HOME_CITY: ClientCity = {
  id: "mlr", city: "Mangalore", country: "India", code: "IXE", lat: 12.9141, lon: 74.856, tz: "Asia/Kolkata",
};

// Cities where we have clients. India entries come from published testimonials.
// PLACEHOLDER: the international entries are examples. Replace them with real client cities before launch.
export const CLIENT_CITIES: ClientCity[] = [
  { id: "dxb", city: "Dubai", country: "UAE", code: "DXB", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
  { id: "bom", city: "Mumbai", country: "India", code: "BOM", lat: 19.076, lon: 72.8777, tz: "Asia/Kolkata" },
  { id: "lhr", city: "London", country: "UK", code: "LHR", lat: 51.5072, lon: -0.1276, tz: "Europe/London" },
  { id: "blr", city: "Bengaluru", country: "India", code: "BLR", lat: 12.9716, lon: 77.5946, tz: "Asia/Kolkata" },
  { id: "sin", city: "Singapore", country: "Singapore", code: "SIN", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore" },
  { id: "doh", city: "Doha", country: "Qatar", code: "DOH", lat: 25.2854, lon: 51.531, tz: "Asia/Qatar" },
  { id: "del", city: "Delhi", country: "India", code: "DEL", lat: 28.6139, lon: 77.209, tz: "Asia/Kolkata" },
  { id: "jfk", city: "New York", country: "USA", code: "JFK", lat: 40.7128, lon: -74.006, tz: "America/New_York" },
  { id: "syd", city: "Sydney", country: "Australia", code: "SYD", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
];

export const STORIES = [
  {
    metric: "0 → 50+",
    unit: "online orders a week",
    sector: "E-commerce",
    city: "Mumbai",
    quote:
      "ZED LABS completely transformed our online presence. We went from zero online orders to 50+ per week within the first month. Best investment we've made.",
    name: "Rahul K.",
    role: "E-commerce business owner",
    tone: "brand" as const,
  },
  {
    metric: "4.8",
    unit: "Play Store rating",
    sector: "Mobile app",
    city: "Bangalore",
    quote:
      "Professional, fast, and they actually understand business. The app they built us has a 4.8 rating on the Play Store. Couldn't be happier.",
    name: "Sara M.",
    role: "Startup founder",
    tone: "paper" as const,
  },
  {
    metric: "Daily",
    unit: "inbound leads",
    sector: "Restaurant chain",
    city: "Delhi",
    quote:
      "Our old website was embarrassing. ZED LABS gave us a site that looks like it cost ₹5 lakhs but at a fraction of the price. Leads come in daily now.",
    name: "Amit P.",
    role: "Restaurant chain owner",
    tone: "ink" as const,
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Discovery call",
    time: "Day 1",
    body: "A free 30 minute call. We look at how you sell and operate today, then tell you plainly what's worth building and what isn't.",
  },
  {
    number: "02",
    title: "Scope and design",
    time: "Week 1",
    body: "Fixed quote, fixed timeline. You see clickable screens before a line of production code is written.",
  },
  {
    number: "03",
    title: "Build and test",
    time: "Weeks 2 to 4",
    body: "Weekly demos on a live staging link. Integrations with WhatsApp, payments, Tally or your CRM are tested with real data.",
  },
  {
    number: "04",
    title: "Launch and support",
    time: "Ongoing",
    body: "We handle go-live, train your team, and stay on for fixes and improvements. One point of contact, on WhatsApp.",
  },
];

export const FAQS = [
  {
    q: "How long does a project take?",
    a: "Most business websites go live in 7 to 14 days. E-commerce stores and custom apps take 2 to 4 weeks. ERP and CRM projects are scoped in phases. You get an exact timeline after the discovery call.",
  },
  {
    q: "What does it cost?",
    a: "Websites start at ₹24,999. Growth sites with a CMS, CRM integration and a chatbot start at ₹59,999. Custom apps and platforms start at ₹99,999. Every quote is fixed before work begins.",
  },
  {
    q: "What kind of AI do you build?",
    a: "Practical things: WhatsApp agents that answer and qualify enquiries, lead scoring, support bots trained on your own documents, and reporting that flags problems early. We skip AI where a simple rule does the job.",
  },
  {
    q: "Do you work with businesses outside Karnataka?",
    a: "Yes. Our office is near Mangalore, and we work with clients across India and abroad. Calls, demos and approvals all happen online.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. Source code, domains, hosting accounts and data are handed over in your name at launch.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes free support for 30 to 90 days. After that, annual maintenance plans cover updates, backups, monitoring and small changes.",
  },
];
