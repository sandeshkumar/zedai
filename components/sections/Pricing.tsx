"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PRICING_TIERS, WHATSAPP_URL } from "@/lib/constants";

export function Pricing() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary relative overflow-hidden" id="pricing">
      <div
        aria-hidden="true"
        className="absolute -bottom-[10%] -left-[8%] w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)",
          animation: "float-slower 12s ease-in-out infinite",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <SectionHeader
          tag="Pricing"
          title="Transparent Pricing. No Surprises."
          description="Invest once, profit forever."
          centered
        />
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[rgba(249,115,22,0.12)] to-[rgba(249,115,22,0.04)] border border-border-accent rounded-[var(--radius-full)] py-2.5 px-6">
            <span className="text-[1.1rem]">🎁</span>
            <span className="text-accent font-bold text-[0.85rem] tracking-wide uppercase" style={{ animation: "blink 2s ease-in-out infinite" }}>
              Limited Offer
            </span>
            <span className="text-text-primary text-[0.88rem] font-medium">
              — FREE Domain & Hosting for 1 Year with website plans!
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRICING_TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.1}>
              <div
                className={`rounded-[var(--radius-lg)] p-9 transition-all duration-300 relative hover:-translate-y-1 ${
                  tier.popular
                    ? "bg-linear-to-b from-[rgba(249,115,22,0.1)] to-card border border-border-accent hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]"
                    : "bg-card border border-border-subtle hover:shadow-[0_0_30px_rgba(249,115,22,0.08)]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-accent to-accent-light text-white py-1 px-4 rounded-[var(--radius-full)] text-[0.65rem] font-bold tracking-[0.08em]">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-heading font-bold text-[1.15rem] mb-1">{tier.name}</h3>
                <p className="text-text-dim text-[0.82rem] mb-4">{tier.description}</p>
                {tier.oldPrice && (
                  <div className="text-[0.9rem] text-text-dim line-through">{tier.oldPrice}</div>
                )}
                <div className="font-heading font-[900] text-[2.2rem] my-2 bg-linear-to-br from-accent to-accent-light bg-clip-text text-transparent">
                  {tier.price}{" "}
                  <small className="text-[0.8rem] font-medium text-text-dim">{tier.priceSuffix}</small>
                </div>
                <ul className="list-none my-5 space-y-1.5">
                  {tier.features.map((f) => (
                    <li key={f} className="text-text-subtle text-[0.88rem] flex items-center gap-2">
                      <span className="text-accent font-bold text-[0.82rem]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full py-3.5 rounded-[var(--radius-md)] font-bold text-[0.92rem] text-center transition-all duration-250 ${
                    tier.ctaVariant === "fill"
                      ? "bg-linear-to-br from-accent to-accent-light text-white hover:shadow-[0_8px_24px_rgba(249,115,22,0.25)] hover:-translate-y-px"
                      : "bg-transparent text-text-primary border border-border-blue hover:border-db-lighter"
                  }`}
                >
                  {tier.ctaLabel}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="block w-full py-2.5 mt-2 rounded-[var(--radius-md)] text-[0.82rem] text-center text-text-subtle hover:text-accent transition-colors"
                >
                  💬 Or WhatsApp Us
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
