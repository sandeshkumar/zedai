"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-5 lg:px-10 pt-28 pb-16 relative overflow-hidden" id="home">
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
              <strong className="text-accent font-bold">12 businesses</strong> got quotes this week
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

          <motion.div {...fadeUp(0.15)} className="flex gap-3 flex-wrap mb-8 lg:justify-start justify-center">
            <ButtonLink href="#contact" variant="primary" className="px-10 py-4 text-base shadow-[0_4px_20px_rgba(249,115,22,0.25)]">
              Get My Free Quote →
            </ButtonLink>
            <ButtonLink href="#results" variant="ghost" className="px-8 py-4 text-base">
              See Our Results
            </ButtonLink>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex items-center gap-7 lg:justify-start justify-center">
            <div className="flex items-center gap-1.5 text-[0.82rem] text-text-faint">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-text-faint">
                <path d="M10 1l2.39 4.84L18 6.71l-4 3.9.94 5.49L10 13.61l-4.94 2.49L6 10.61l-4-3.9 5.61-.87z" />
              </svg>
              <strong className="text-text-muted font-semibold">4.9/5</strong> rating
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-text-faint">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-text-faint">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM2 17c0-3.31 3.58-6 8-6s8 2.69 8 6v1H2v-1z" />
              </svg>
              <strong className="text-text-muted font-semibold">150+</strong> clients
            </div>
            <div className="flex items-center gap-1.5 text-[0.82rem] text-text-faint">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-text-faint">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 11.293a1 1 0 001.414 1.414l2-2A1 1 0 0011 10V7z" />
              </svg>
              Responds in <strong className="text-text-muted font-semibold">2 hrs</strong>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.1)}>
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
