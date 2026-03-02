"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { type ServiceItem, WHATSAPP_URL } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function ServiceHero({ service }: { service: ServiceItem }) {
  return (
    <section className="min-h-[80vh] flex items-center px-5 lg:px-10 pt-36 pb-16 relative overflow-hidden">
      <div className="absolute -top-[15%] -right-[5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(30,58,95,0.2)_0%,rgba(30,58,95,0.05)_40%,transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[10%] -left-[8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center relative z-[1]">
        <div className="text-center lg:text-left">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 bg-card border border-border-medium py-2 pl-2.5 pr-5 rounded-[var(--radius-full)] mb-7 lg:mx-0 mx-auto"
          >
            <span className="text-xl">{service.icon}</span>
            <span className="text-[0.78rem] text-text-muted font-medium">
              {service.title}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-heading font-[900] text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.04em] mb-5"
          >
            {service.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent">
              {service.heroTitle.split(" ").slice(-2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-[1.05rem] text-text-subtle max-w-[500px] leading-[1.7] mb-8 lg:mx-0 mx-auto"
          >
            {service.heroDescription}
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex gap-3 flex-wrap mb-5 lg:justify-start justify-center">
            <ButtonLink href="#service-contact" variant="primary" className="px-10 py-4 text-base shadow-[0_4px_20px_rgba(249,115,22,0.25)]">
              Get Free Quote →
            </ButtonLink>
            <ButtonLink href={WHATSAPP_URL} variant="ghost" className="px-8 py-4 text-base" target="_blank">
              💬 WhatsApp Us
            </ButtonLink>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-4 lg:justify-start justify-center">
            <a href="tel:+919380341684" className="inline-flex items-center gap-2 text-[0.85rem] text-text-muted hover:text-accent transition-colors">
              📞 <span className="font-semibold">+91 93803 41684</span>
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.1)}>
          <EnquiryForm defaultService={service.formServiceName} />
        </motion.div>
      </div>
    </section>
  );
}
