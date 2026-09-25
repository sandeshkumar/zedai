import { SERVICES, TESTIMONIALS } from "@/lib/constants";
import {
  wrapInGraph,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateFAQSchema,
  generateReviewSchema,
} from "@/lib/schema";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { SiteNav } from "@/components/home/SiteNav";
import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Capabilities } from "@/components/home/Capabilities";
import { Work } from "@/components/home/Work";
import { AIAgentSection } from "@/components/home/AIAgentSection";
import { Process } from "@/components/home/Process";
import { Faq } from "@/components/home/Faq";
import { Rooted } from "@/components/home/Rooted";
import { FestivalBanner } from "@/components/home/FestivalBanner";
import { Kambala } from "@/components/home/Kambala";
import { ChapterRail } from "@/components/home/Chapter";
import { Contact } from "@/components/home/Contact";
import { SiteFooter } from "@/components/home/SiteFooter";
import { FAQS } from "@/components/home/data";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OpeningMoment } from "@/components/home/OpeningMoment";
import { SoundToggle } from "@/components/home/SoundToggle";

const jsonLd = wrapInGraph(
  generateOrganizationSchema(),
  generateLocalBusinessSchema(),
  generateWebSiteSchema(),
  generateWebPageSchema(
    "https://zedai.tech",
    "ZED LABS | Coastal craft, world-class software from Mangalore",
    "Software company in Mangalore building websites, mobile apps, ERP, CRM and AI agents for businesses in India and abroad. 150+ projects across 20+ industries."
  ),
  generateFAQSchema(FAQS.map((f) => ({ question: f.q, answer: f.a }))),
  ...generateReviewSchema(TESTIMONIALS),
  ...SERVICES.map((service) => ({
    "@type": "Service" as const,
    provider: { "@id": "https://zedai.tech/#organization" },
    name: service.title,
    description: service.description,
  }))
);

export default function Home() {
  return (
    <div className="theme-light relative z-1 bg-paper text-ink space-y-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OpeningMoment />
      <SmoothScroll />
      <SiteNav />
      <ChapterRail />
      <main className="flex flex-col gap-4 lg:gap-6">
        <Hero />
        <Proof />
        <Kambala />
        <Capabilities />
        <Work />
        <FestivalBanner />
        <AIAgentSection />
        <Process />
        <Rooted />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <SoundToggle />
    </div>
  );
}
