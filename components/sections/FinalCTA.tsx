"use client";

import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="text-center relative py-16 lg:py-24 px-8 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(30,58,95,0.12)_0%,rgba(249,115,22,0.03)_40%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3 justify-center">
          <span className="w-[18px] h-[2px] bg-accent inline-block" />
          Ready to Grow?
        </div>
        <h2 className="font-heading font-[800] text-[clamp(1.9rem,4vw,3rem)] tracking-[-0.03em] leading-[1.12] max-w-[700px] mx-auto mb-2.5">
          Your Competitors Are Already Using AI.
          <br />
          Don&apos;t Get Left Behind.
        </h2>
        <p className="text-text-subtle max-w-[500px] mx-auto text-base leading-[1.7] mb-8">
          Join 150+ businesses running on AI-powered software by ZED LABS. Get your free AI strategy call today.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <ButtonLink href="#contact" variant="primary" className="text-[1.1rem] py-4.5 px-12">
            Get My Free Quote →
          </ButtonLink>
          <ButtonLink href={WHATSAPP_URL} variant="ghost" className="text-[1.1rem] py-4.5 px-10" target="_blank">
            <WhatsAppIcon size={20} className="text-[#25D366]" /> WhatsApp Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
