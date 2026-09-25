"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { ArrowIcon, EASE, Magnetic, MaskLines } from "./motion";
import { DashboardMock } from "./DashboardMock";
import { HeroCoast } from "./HeroCoast";

export function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "start 0.25"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.9, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 16]);
  const { scrollY } = useScroll();
  const sunset = useTransform(scrollY, [0, 700], [0, 1]);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="home" className="relative pt-32 lg:pt-44 overflow-hidden">
      <HeroCoast progress={sunset} scenery={false} boat crown={false} />
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 lg:px-10">
        <motion.div {...fade(0)} className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-2 text-[0.8rem] text-ink-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-[pulse-dot_2s_ease-in-out_infinite]" />
            Taking on new projects
          </span>
          <span className="eyebrow">Namaskara from Mangalore</span>
        </motion.div>

        <h1 className="display text-[clamp(2.6rem,8.4vw,8.2rem)] text-ink">
          <MaskLines
            delay={0.1}
            lines={[
              <span key="l1">
                Coastal <span className="text-tile">craft.</span>
              </span>,
              <span key="l2" className="text-brand-2">World-class</span>,
              <span key="l3" className="text-brand-2">software.</span>,
            ]}
          />
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 mt-10 lg:mt-14 items-end">
          <div className="lg:col-span-5 lg:col-start-8">
            <motion.p {...fade(0.5)} className="text-[1.08rem] leading-[1.6] text-ink-3 max-w-[420px]">
              Websites, apps, ERP, CRM and AI agents, built in Mangalore.
              150+ projects across 20+ industries.
            </motion.p>
            <motion.div {...fade(0.6)} className="flex flex-wrap items-center gap-3 mt-8">
              <Magnetic>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-ink text-paper font-medium pl-6 pr-5 py-3.5 rounded-full hover:bg-tile transition-colors"
                >
                  Get a fixed quote
                  <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-line-strong text-ink font-medium hover:bg-paper-2 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

      </div>

      <div ref={stageRef} className="relative z-10 max-w-[1440px] mx-auto px-3 lg:px-6 mt-20 lg:mt-28">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative origin-top bg-[linear-gradient(160deg,#1E3A5F_0%,#152B47_55%,#0B0D12_100%)] overflow-hidden"
        >
          <div className="absolute inset-0 grid-lines opacity-[0.08] invert" aria-hidden="true" />
          <div className="relative px-3 pt-10 pb-0 sm:px-8 sm:pt-14 lg:px-20 lg:pt-20">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
