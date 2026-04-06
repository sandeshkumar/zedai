import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Process } from "@/components/sections/Process";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FAQ_ITEMS, SERVICES, TESTIMONIALS } from "@/lib/constants";
import {
  wrapInGraph,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  generateFAQSchema,
  generateReviewSchema,
} from "@/lib/schema";

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { ssr: true }
);
const Pricing = dynamic(
  () =>
    import("@/components/sections/Pricing").then((m) => ({
      default: m.Pricing,
    })),
  { ssr: true }
);
const FAQ = dynamic(
  () =>
    import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
  { ssr: true }
);
const FinalCTA = dynamic(
  () =>
    import("@/components/sections/FinalCTA").then((m) => ({
      default: m.FinalCTA,
    })),
  { ssr: true }
);

const jsonLd = wrapInGraph(
  generateOrganizationSchema(),
  generateLocalBusinessSchema(),
  generateWebSiteSchema(),
  generateWebPageSchema(
    "https://zedai.tech",
    "ZED Labs | AI-Powered Software Solutions That Grow Your Business",
    "ZED Labs builds AI-powered websites, apps, ERP, CRM, chatbots, and automation systems that grow your business. 150+ projects delivered across 20+ industries."
  ),
  generateFAQSchema(FAQ_ITEMS),
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="blue" />
        <Results />
        <SectionDivider variant="mixed" />
        <Services />
        <SectionDivider variant="accent" />
        <BeforeAfter />
        <SectionDivider variant="blue" />
        <Process />
        <SectionDivider variant="mixed" />
        <Testimonials />
        <SectionDivider variant="accent" />
        <Pricing />
        <SectionDivider variant="blue" />
        <FAQ />
        <SectionDivider variant="mixed" />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
