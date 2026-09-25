import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryForm } from "@/components/home/Contact";
import { MirrorDot } from "@/components/home/motifs";
import { Palm, TileHouse } from "@/components/home/illustrations";
import { Reveal } from "@/components/home/motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
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
    label: "Call us",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phoneE164}`,
    note: CONTACT.hours,
  },
  {
    label: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsappUrl,
    note: "Fastest way to reach us. Usually answered in minutes.",
    external: true,
  },
  {
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
        <section className="relative pt-32 lg:pt-40 pb-16 px-5 lg:px-10 overflow-hidden">
          <div className="max-w-[1360px] mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-3 mb-8">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span className="opacity-40">/</span>
              <span className="text-kumkum">Contact</span>
            </nav>
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-6">
              <MirrorDot className="w-5 h-5" />
              Encha ullar? That&apos;s Tulu for &ldquo;how are you?&rdquo;
            </p>
            <h1 className="display text-[clamp(2.6rem,6.4vw,6rem)] text-ink max-w-[16ch]">
              Tell us what you want to build. <span className="text-tile">We&apos;ll tell you how.</span>
            </h1>
            <p className="mt-7 text-ink-2 max-w-[56ch] text-[1.08rem] leading-[1.7]">
              Whether you need a website, a mobile app, an ERP, or an AI agent that handles your
              enquiries, start with a free call. No sales pitch, just an honest scope and a straight price.
            </p>
          </div>
        </section>

        <section className="pb-24 lg:pb-32 px-5 lg:px-10">
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-3 mb-5">Reach us directly</h2>
              <ul className="border-t border-line mb-14">
                {CHANNELS.map((channel, i) => (
                  <li key={channel.label} className="border-b border-line">
                    <Reveal delay={i * 0.06}>
                      <a
                        href={channel.href}
                        target={channel.external ? "_blank" : undefined}
                        rel={channel.external ? "noopener noreferrer" : undefined}
                        className="group grid grid-cols-[110px_1fr] gap-4 py-6"
                      >
                        <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum pt-2">{channel.label}</span>
                        <span className="min-w-0">
                          <span className="block font-display text-[1.6rem] tracking-[-0.03em] text-ink group-hover:text-tile transition-colors break-words">
                            {channel.value}
                          </span>
                          <span className="block text-[0.9rem] text-ink-3 mt-1 leading-[1.6]">{channel.note}</span>
                        </span>
                      </a>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-3 mb-5">Our door is open</h2>
              <Reveal>
                <div className="rounded-[20px] bg-tile-tint border border-tile/15 p-6 sm:p-8 grid sm:grid-cols-[1fr_auto] gap-6 items-end">
                  <address className="not-italic text-ink-2 text-[1rem] leading-[1.8]">
                    <strong className="block text-ink font-display font-medium text-[1.3rem] tracking-[-0.02em] mb-2">ZED LABS</strong>
                    Ground Floor, Brahmashri Complex
                    <br />
                    Daribagilu, Kallige
                    <br />
                    Bantwal, Mangalore 574219
                    <br />
                    Karnataka, India
                    <span className="block mt-4 text-[0.9rem] text-ink-3">{CONTACT.hours}</span>
                  </address>
                  <div className="flex items-end" aria-hidden="true">
                    <Palm className="w-[60px] h-[100px] -mr-5" lean={-6} />
                    <TileHouse id="contact-page-house" doorOpen className="w-[190px] h-auto" />
                  </div>
                </div>
              </Reveal>

              <p className="text-ink-3 text-[0.95rem] leading-[1.8] mt-8 max-w-[56ch]">
                We work with clients across India and overseas. Most projects run fully remote over
                calls and WhatsApp, so distance is never a problem. Prefer to meet in person? Call ahead
                and we&apos;ll fix a time.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-28">
              <div className="relative rounded-[24px] bg-brand text-white p-6 sm:p-8 shadow-[0_40px_80px_-30px_rgba(30,58,95,0.6)] overflow-hidden">
                <div className="absolute inset-0 tile-lines-light opacity-[0.06] pointer-events-none [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" aria-hidden="true" />
                <div className="relative">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-turmeric mb-2">Start a project</p>
                  <p className="font-display text-[1.6rem] leading-[1.15] tracking-[-0.03em] mb-6">
                    Two quick steps. We reply on WhatsApp within 2 working hours.
                  </p>
                  <EnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
