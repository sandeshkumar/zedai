"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CardGlow } from "@/components/ui/CardGlow";

const AGENT_TYPES = [
  {
    icon: "💬",
    title: "Sales agent",
    description:
      "Replies on WhatsApp, asks qualifying questions, books Calendly slots, and pushes warm leads to your CRM.",
    stack: "Claude or GPT-4 + WhatsApp Business + Calendly",
  },
  {
    icon: "🎧",
    title: "Support agent",
    description:
      "Trained on your help docs and past tickets. Resolves tier-1 issues, escalates the rest with full conversation context.",
    stack: "Claude / GPT-4 + Zendesk or Freshdesk",
  },
  {
    icon: "🧾",
    title: "Ops agent",
    description:
      "Reads invoices from email, files them in Tally or Zoho Books, flags duplicates and amount mismatches before they hit the books.",
    stack: "GPT-4 Vision + your accounting system",
  },
];

export function AIAgents() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 bg-bg-secondary" id="ai-agents">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          tag="AI Agents"
          title="Agents we put into production"
          description="These aren't chatbots that answer questions. They book appointments, file paperwork, follow up on leads, and only escalate to your team when they're stuck. Built on Claude, GPT-4, or open-source models depending on your data."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {AGENT_TYPES.map((agent, i) => (
            <ScrollReveal key={agent.title} delay={i * 0.08} variant="fade-up">
              <CardGlow>
                <div className="bg-card border border-border-subtle rounded-[var(--radius-lg)] p-7 h-full transition-all duration-300 hover:border-border-blue hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(249,115,22,0.06)]">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[rgba(30,58,95,0.1)] to-[rgba(249,115,22,0.1)] flex items-center justify-center text-[1.2rem] mb-4 border border-border-subtle">
                    {agent.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[1.05rem] mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-text-subtle text-[0.88rem] leading-[1.6] mb-4">
                    {agent.description}
                  </p>
                  <div className="text-text-dim text-[0.72rem] font-mono tracking-tight pt-3 border-t border-border-subtle">
                    {agent.stack}
                  </div>
                </div>
              </CardGlow>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.25}>
          <div className="text-center">
            <p className="text-text-subtle text-[0.92rem] leading-[1.7] max-w-[640px] mx-auto mb-5">
              Every agent ships with audit logs, approval gates for high-stakes
              actions, and a kill switch you control. We deploy on your AWS,
              Azure, or GCP if your data needs to stay on your servers.
            </p>
            <Link
              href="/services/ai-agents"
              className="inline-flex items-center gap-2 text-accent font-semibold text-[0.9rem] hover:text-accent-light transition-colors"
            >
              See how we scope and ship agents →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
