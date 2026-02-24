"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-5 lg:px-10 pt-36 pb-16 relative overflow-hidden" id="home">
      {/* Deep blue radial glow */}
      <div className="absolute -top-[15%] -right-[5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(30,58,95,0.2)_0%,rgba(30,58,95,0.05)_40%,transparent_65%)] pointer-events-none" />
      {/* Warm glow */}
      <div className="absolute bottom-[10%] -left-[8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center relative z-[1]">
        <div className="text-center lg:text-left">
          {/* Proof bar */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 bg-card border border-border-medium py-2 pl-2.5 pr-5 rounded-[var(--radius-full)] mb-7 lg:mx-0 mx-auto"
          >
            <div className="w-2 h-2 rounded-full bg-success animate-[blink_2s_infinite]" />
            <span className="text-[0.78rem] text-text-muted font-medium">
              <strong className="text-accent font-bold">Powered by AI.</strong> Built for Growth.
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-heading font-[900] text-[clamp(2.2rem,5.8vw,4.5rem)] leading-[1.06] tracking-[-0.045em] mb-5"
          >
            We Build Websites That{" "}
            <span className="bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent">
              Actually Grow Your Business
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-[1.1rem] text-text-subtle max-w-[500px] leading-[1.7] mb-8 lg:mx-0 mx-auto"
          >
            Stop losing customers to slow, outdated websites. Get a fast, SEO-optimized website or app that turns visitors into paying clients — in as little as 7 days.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex gap-3 flex-wrap mb-5 lg:justify-start justify-center">
            <ButtonLink href="#contact" variant="primary" className="px-10 py-4 text-base shadow-[0_4px_20px_rgba(249,115,22,0.25)]">
              Get My Free Quote →
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
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
