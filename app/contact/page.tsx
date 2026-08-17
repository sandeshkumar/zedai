import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CONTACT } from "@/lib/constants";
import {
  wrapInGraph,
  generateContactPageSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

const PAGE_TITLE = "Contact ZED LABS | Talk to Our Team in Bantwal, Mangalore";
const PAGE_DESCRIPTION =
  "Call, WhatsApp, or email ZED LABS for AI-powered websites, apps, ERP, CRM, and automation. Office in Bantwal, Mangalore. We reply within 2 hours on working days.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "contact ZED LABS",
    "software company Mangalore",
    "web development Bantwal",
    "AI company Karnataka",
    "software development enquiry India",
  ],
  alternates: { canonical: "https://zedai.tech/contact" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://zedai.tech/contact",
    siteName: "ZED LABS",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = wrapInGraph(
  generateContactPageSchema(
    "https://zedai.tech/contact",
    PAGE_TITLE,
    PAGE_DESCRIPTION
  ),
  generateBreadcrumbSchema([
    { name: "Home", url: "https://zedai.tech" },
    { name: "Contact", url: "https://zedai.tech/contact" },
  ])
);

const CHANNELS = [
  {
    icon: "📞",
    label: "Call us",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneE164}`,
    note: CONTACT.hours,
  },
  {
    icon: null,
    label: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsappUrl,
    note: "Fastest way to reach us. Usually answered in minutes.",
    external: true,
  },
  {
    icon: "✉️",
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: "Send us your requirements and we'll reply within 2 hours.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 lg:pt-40 pb-14 px-5 lg:px-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(30,58,95,0.15)_0%,rgba(249,115,22,0.04)_45%,transparent_70%)] pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-[1]">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-[0.78rem] text-text-dim">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-text-subtle">Contact</li>
              </ol>
            </nav>
            <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
              <span className="w-[18px] h-[2px] bg-accent inline-block" />
              Get In Touch
            </div>
            <h1 className="font-heading font-[900] text-[clamp(2.1rem,5vw,3.4rem)] tracking-[-0.03em] leading-[1.1] max-w-[760px] mb-4">
              Tell us what you want to build.{" "}
              <span className="bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent">
                We&apos;ll tell you how.
              </span>
            </h1>
            <p className="text-text-subtle max-w-[600px] text-base lg:text-[1.05rem] leading-[1.75]">
              Whether you need a website, a mobile app, an ERP, or an AI agent
              that handles your enquiries, start with a free call. No sales
              pitch, just an honest scope and a straight price.
            </p>
          </div>
        </section>

        <SectionDivider variant="blue" />

        {/* Channels + Form */}
        <section className="py-16 lg:py-20 px-5 lg:px-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">
            {/* Left: channels & address */}
            <div>
              <h2 className="font-heading font-[800] text-[1.6rem] tracking-[-0.02em] mb-6">
                Reach us directly
              </h2>

              <div className="flex flex-col gap-3 mb-10">
                {CHANNELS.map((channel, i) => (
                  <ScrollReveal key={channel.label} delay={i * 0.06}>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 bg-linear-to-b from-card-alt to-card border border-border-blue rounded-[var(--radius-lg)] p-5 hover:border-db-lighter transition-colors group"
                    >
                      <span className="text-[1.4rem] leading-none mt-0.5 shrink-0">
                        {channel.icon ?? (
                          <WhatsAppIcon size={22} className="text-[#25D366]" />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.7rem] font-bold tracking-[0.14em] uppercase text-text-dim mb-1">
                          {channel.label}
                        </span>
                        <span className="block font-heading font-bold text-[1.05rem] text-text-primary group-hover:text-accent transition-colors break-words">
                          {channel.value}
                        </span>
                        <span className="block text-[0.82rem] text-text-subtle mt-1 leading-[1.6]">
                          {channel.note}
                        </span>
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              {/* Office */}
              <h2 className="font-heading font-[800] text-[1.6rem] tracking-[-0.02em] mb-6">
                Visit our office
              </h2>
              <ScrollReveal>
                <div className="bg-linear-to-b from-card-alt to-card border border-border-blue rounded-[var(--radius-lg)] p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-[1.4rem] leading-none mt-0.5">📍</span>
                    <address className="not-italic text-text-subtle text-[0.95rem] leading-[1.8]">
                      <strong className="block text-text-primary font-heading font-bold text-[1.05rem] mb-1">
                        ZED LABS
                      </strong>
                      Ground Floor, Brahmashri Complex
                      <br />
                      Daribagilu, Kallige
                      <br />
                      Bantwal, Mangalore &ndash; 574219
                      <br />
                      Karnataka, India
                    </address>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-border-subtle">
                    <a
                      href={CONTACT.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-accent hover:text-accent-light transition-colors"
                    >
                      Open in Google Maps →
                    </a>
                    <span className="text-[0.85rem] text-text-dim">
                      {CONTACT.hours}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <p className="text-text-subtle text-[0.9rem] leading-[1.8] mt-8">
                We work with clients across India and overseas. Most projects
                run fully remote over calls and WhatsApp, so distance is never a
                problem. Prefer to meet in person? Call ahead and we&apos;ll fix
                a time.
              </p>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-28">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
