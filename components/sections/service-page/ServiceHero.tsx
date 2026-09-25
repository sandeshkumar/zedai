"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { type ServiceItem, CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { EnquiryForm } from "@/components/home/Contact";
import { HeroCoast } from "@/components/home/HeroCoast";
import { ArrowIcon, EASE, MaskLines } from "@/components/home/motion";
import { MirrorDot } from "@/components/home/motifs";

interface ServiceHeroProps {
  service: ServiceItem;
  heroTitleOverride?: string;
  heroDescriptionOverride?: string;
  cityName?: string;
}

/** Split a headline so the last two words can carry the accent colour. */
function splitTitle(title: string) {
  const words = title.split(" ");
  const tail = words.slice(-2).join(" ");
  const head = words.slice(0, -2).join(" ");
  return { head, tail };
}

export function ServiceHero({ service, heroTitleOverride, heroDescriptionOverride, cityName }: ServiceHeroProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const sunset = useTransform(scrollY, [0, 700], [0, 1]);
  const title = heroTitleOverride || service.heroTitle;
  const description = heroDescriptionOverride || service.heroDescription;
  const { head, tail } = splitTitle(title);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section className="relative overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="hidden sm:block">
        <HeroCoast progress={sunset} scenery={false} />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        <div className="lg:col-span-7">
          <motion.nav {...fade(0)} aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-3 mb-8">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/#services" className="hover:text-ink">Services</Link>
            <span className="opacity-40">/</span>
            {cityName ? (
              <>
                <Link href={`/services/${service.slug}`} className="hover:text-ink">{service.title}</Link>
                <span className="opacity-40">/</span>
                <span className="text-kumkum">{cityName}</span>
              </>
            ) : (
              <span className="text-kumkum">{service.title}</span>
            )}
          </motion.nav>

          <motion.p {...fade(0.05)} className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-6">
            <MirrorDot className="w-5 h-5" />
            {service.title}
            {cityName ? ` · ${cityName}` : " · Made in Mangalore"}
          </motion.p>

          <h1 className="display text-[clamp(2.4rem,5.6vw,5.2rem)] text-ink max-w-[16ch]">
            <MaskLines
              delay={0.1}
              lines={[head, <span key="tail" className="text-tile">{tail}</span>].filter(Boolean)}
            />
          </h1>

          <motion.p {...fade(0.45)} className="mt-7 text-[1.08rem] leading-[1.65] text-ink-2 max-w-[52ch]">
            {description}
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#service-form"
              className="group inline-flex items-center gap-2.5 bg-ink text-paper font-medium pl-6 pr-5 py-3.5 rounded-full hover:bg-tile transition-colors"
            >
              Get a fixed quote
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-line-strong text-ink font-medium hover:bg-paper-2 transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a href={`tel:${CONTACT.phoneE164}`} className="px-2 py-3.5 text-ink-3 hover:text-ink tabular-nums text-[0.95rem]">
              {CONTACT.phone}
            </a>
          </motion.div>
        </div>

        <motion.div {...fade(0.3)} id="service-form" className="lg:col-span-5 scroll-mt-28">
          <div className="relative rounded-[24px] bg-brand text-white p-6 sm:p-8 shadow-[0_40px_80px_-30px_rgba(30,58,95,0.6)] overflow-hidden">
            <div className="absolute inset-0 tile-lines-light opacity-[0.06] pointer-events-none [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-turmeric mb-2">Encha ullar?</p>
              <p className="font-display text-[1.6rem] leading-[1.15] tracking-[-0.03em] mb-6">
                Get a fixed quote for {service.title}
                {cityName ? ` in ${cityName}` : ""}.
              </p>
              <EnquiryForm defaultService={service.formServiceName} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
