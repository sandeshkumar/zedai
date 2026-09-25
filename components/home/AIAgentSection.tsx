"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, EASE, MaskLines, Reveal } from "./motion";
import { MirrorDot, Prabhavali, YAKSHA_BAND } from "./motifs";
import { ChapterLabel } from "./Chapter";
import { Tere, YakshaganaPerformer } from "./illustrations";

const SCRIPT = [
  { from: "user", text: "Hi, do you have the 6 seater teak dining set in stock?" },
  { from: "bot", text: "Yes, 3 in stock at our Hampankatta showroom. It's ₹1,42,000 including GST, with free delivery within Mangalore." },
  { from: "user", text: "Can I see it this Saturday?" },
  { from: "bot", text: "Saturday 11 AM or 4 PM are open. Which works for you?" },
  { from: "user", text: "4 PM" },
  { from: "bot", text: "Booked for Saturday, 4 PM. I've sent the location pin. Ravi from our team will meet you." },
] as const;

const POINTS = [
  { k: "Answers", v: "Prices, stock, timings and order status, from your own data." },
  { k: "Qualifies", v: "Asks budget and timeline, scores the lead, and routes it to the right person." },
  { k: "Books", v: "Site visits, demos and appointments straight into your calendar." },
  { k: "Hands over", v: "Passes the chat to a human the moment it gets complicated." },
];

function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  // Two steps per message: a short pause (odd step shows "typing" for the bot), then the message.
  const [step, setStep] = useState(0);
  const total = SCRIPT.length * 2;

  useEffect(() => {
    if (reduce || !inView) return;
    const pending = SCRIPT[Math.floor(step / 2)];
    const delay = step >= total ? 5000 : step % 2 === 0 ? 350 : pending.from === "bot" ? 1400 : 700;
    const t = setTimeout(() => setStep((n) => (n >= total ? 0 : n + 1)), delay);
    return () => clearTimeout(t);
  }, [inView, step, reduce, total]);

  const visible = reduce ? SCRIPT.length : Math.floor(step / 2);
  const typing = !reduce && step % 2 === 1 && SCRIPT[visible]?.from === "bot";

  return (
    <div ref={ref} className="rounded-[20px] bg-[#0F141C] border border-white/10 overflow-hidden" aria-label="Example WhatsApp conversation with an AI agent">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <span className="w-9 h-9 rounded-full bg-[#25D366] grid place-items-center text-[0.72rem] font-bold text-white">SF</span>
        <div className="flex-1">
          <p className="text-[0.88rem] font-medium">Sharma Furnishings</p>
          <p className="text-[0.72rem] text-[#4ADE80]">{typing ? "typing…" : "online"}</p>
        </div>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-white/40">AI agent</span>
      </div>
      <div className="h-[420px] px-4 sm:px-5 py-5 flex flex-col justify-end gap-2.5 overflow-hidden">
        <AnimatePresence initial={false}>
          {SCRIPT.slice(0, visible).map((m, i) => (
            <motion.p
              key={`${i}-${m.text}`}
              layout
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={`max-w-[82%] text-[0.88rem] leading-[1.45] px-3.5 py-2.5 rounded-2xl ${
                m.from === "user"
                  ? "self-start bg-white/[0.07] text-white/90 rounded-tl-md"
                  : "self-end bg-[#1F6F43] text-white rounded-tr-md"
              }`}
            >
              {m.text}
            </motion.p>
          ))}
          {typing && (
            <motion.div
              key="typing"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="self-end flex gap-1 bg-[#1F6F43] px-3.5 py-3 rounded-2xl rounded-tr-md"
            >
              {[0, 1, 2].map((d) => (
                <span key={d} className="w-1.5 h-1.5 rounded-full bg-white/80" style={{ animation: `typing 1s ${d * 0.15}s infinite` }} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[460px] aspect-[4/5]">
      {/* oil-lamp glow from the front of the stage */}
      <div
        className="absolute inset-x-[-20%] bottom-[-10%] h-[70%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(242,196,109,0.45), rgba(179,38,30,0.18) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <YakshaganaPerformer className="relative w-full h-full" />
      {/* the tere: held up at the start, lowered to reveal the performer */}
      <motion.div
        className="absolute inset-x-[-6%] top-[8%] h-[70%] origin-bottom rounded-[4px] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        initial={reduce ? false : { y: "0%", opacity: 1 }}
        animate={inView ? { y: "115%", opacity: 0 } : undefined}
        transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
        aria-hidden="true"
      >
        <Tere className="w-full h-full" />
        <span className="absolute -top-4 left-[6%] w-5 h-8 rounded-full bg-[#2A1A14]" />
        <span className="absolute -top-4 right-[6%] w-5 h-8 rounded-full bg-[#2A1A14]" />
      </motion.div>
      {/* stage floor */}
      <div className="absolute inset-x-[-10%] bottom-0 h-3 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />
    </div>
  );
}

export function AIAgentSection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[#140B09] text-paper py-24 lg:py-32 rounded-[28px] lg:rounded-[40px] mx-2 lg:mx-4">
      {/* border of the stage: a Yakshagana band along the top */}
      <div className="absolute inset-x-0 top-0 h-5" style={{ backgroundImage: YAKSHA_BAND, backgroundSize: "auto 300%", backgroundPosition: "0 0" }} aria-hidden="true" />
      <Prabhavali
        spin={140}
        muted
        className="pointer-events-none absolute -left-[25%] top-[40%] w-[min(900px,100vw)] h-auto opacity-[0.07]"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <ChapterLabel id="ai" tone="text-gold" className="mb-6" />
            <h2 className="display text-[clamp(2.4rem,5.4vw,5rem)]">
              <MaskLines
                lines={[
                  "Yakshagana plays",
                  <span key="l2">
                    till <span className="text-turmeric">dawn.</span>
                  </span>,
                  <span key="l3" className="text-white/55">
                    So does your AI agent.
                  </span>,
                ]}
              />
            </h2>
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-[1.05rem] leading-[1.65] text-white/65 max-w-[46ch]">
              On the coast, a Yakshagana performance runs from dusk until sunrise and the crowd stays for
              every scene. Your enquiries arrive at all hours too. We build agents trained on your
              catalogue, prices and policies that reply in seconds, all night, and book the next step.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-4">
            <Stage />
          </div>
          <Reveal className="lg:col-span-4" delay={0.2}>
            <ChatDemo />
          </Reveal>
          <div className="lg:col-span-4">
            <dl className="border-t border-white/12">
              {POINTS.map((p, i) => (
                <Reveal key={p.k} delay={0.05 * i} className="py-5 border-b border-white/12">
                  <dt className="text-[1rem] font-medium mb-1 flex items-center gap-2.5">
                    <MirrorDot className="w-4 h-4" />
                    {p.k}
                  </dt>
                  <dd className="text-[0.9rem] leading-[1.55] text-white/55 pl-[26px]">{p.v}</dd>
                </Reveal>
              ))}
            </dl>
            <Link
              href="/services/ai-agents"
              className="group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-medium border-b border-turmeric/60 pb-1 hover:border-turmeric transition-colors"
            >
              How our AI agents work
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
