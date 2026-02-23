import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAQ_ITEMS, SERVICES } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zedai.tech/#organization",
      name: "ZED Labs",
      url: "https://zedai.tech",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7019581347",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://zedai.tech/#website",
      url: "https://zedai.tech",
      name: "ZED Labs",
      publisher: { "@id": "https://zedai.tech/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://zedai.tech/#webpage",
      url: "https://zedai.tech",
      name: "ZED Labs — Websites & Apps That Grow Your Business",
      description:
        "ZED Labs builds fast, SEO-optimized websites and mobile apps that convert visitors into customers. 150+ projects delivered across 20+ industries.",
      isPartOf: { "@id": "https://zedai.tech/#website" },
      about: { "@id": "https://zedai.tech/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    ...SERVICES.map((service) => ({
      "@type": "Service",
      provider: { "@id": "https://zedai.tech/#organization" },
      name: service.title,
      description: service.description,
    })),
  ],
};

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
        <LogoStrip />
        <Results />
        <Services />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
