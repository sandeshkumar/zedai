"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { TextReveal } from "@/components/ui/TextReveal";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, damping: 22, stiffness: 100, delay },
});

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="min-h-screen flex items-center px-5 lg:px-10 pt-36 pb-16 relative overflow-hidden"
      id="home"
    >
      {/* Deep blue radial glow */}
      <motion.div
        className="absolute -top-[15%] -right-[5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(30,58,95,0.2)_0%,rgba(30,58,95,0.05)_40%,transparent_65%)] pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Warm glow */}
      <motion.div
        className="absolute bottom-[10%] -left-[8%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.04)_0%,transparent_60%)] pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center relative z-[1]">
        <div className="text-center lg:text-left">
          {/* Proof bar */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-3 bg-card border border-border-medium py-2 pl-2.5 pr-5 rounded-[var(--radius-full)] mb-7 lg:mx-0 mx-auto"
          >
            <div className="w-2 h-2 rounded-full bg-success animate-[blink_2s_infinite]" />
            <span className="text-[0.78rem] text-text-muted font-medium">
              <strong className="text-accent font-bold">Powered by AI.</strong>{" "}
              Built for Growth.
            </span>
          </motion.div>

          {/* Heading with word-by-word reveal */}
          <h1 className="font-heading font-[900] text-[clamp(2.2rem,5.8vw,4.5rem)] leading-[1.06] tracking-[-0.045em] mb-5">
            <TextReveal delay={0.1}>
              AI-Powered Software That
            </TextReveal>{" "}
            <motion.span
              className="bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent inline-block"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 80, delay: 0.45 }}
            >
              Actually Grows Your Business
            </motion.span>
          </h1>

          {/* Subtitle with line reveal */}
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", damping: 22, stiffness: 90, delay: 0.5 }}
            className="text-[1.1rem] text-text-subtle max-w-[500px] leading-[1.7] mb-8 lg:mx-0 mx-auto"
          >
            We inject AI into every product we build: websites that convert,
            apps that learn, chatbots that sell, and systems that automate your
            operations.
          </motion.p>

          <motion.div
            {...fadeUp(0.6)}
            className="flex gap-3 flex-wrap mb-5 lg:justify-start justify-center"
          >
            <ButtonLink
              href="#contact"
              variant="primary"
              className="px-10 py-4 text-base shadow-[0_4px_20px_rgba(249,115,22,0.25)]"
            >
              Get My Free Quote →
            </ButtonLink>
            <ButtonLink
              href={WHATSAPP_URL}
              variant="ghost"
              className="px-8 py-4 text-base"
              target="_blank"
            >
              💬 WhatsApp Us
            </ButtonLink>
          </motion.div>
          <motion.div
            {...fadeUp(0.7)}
            className="flex items-center gap-4 lg:justify-start justify-center"
          >
            <a
              href="tel:+919380341684"
              className="inline-flex items-center gap-2 text-[0.85rem] text-text-muted hover:text-accent transition-colors"
            >
              📞 <span className="font-semibold">+91 93803 41684</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.3 }}
        >
          <EnquiryForm />
        </motion.div>
      </div>
    </section>
  );
}
