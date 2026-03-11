"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section className="py-16 lg:py-24 px-5 lg:px-10 relative overflow-hidden" id="services">
      <div
        aria-hidden="true"
        className="absolute top-[20%] -right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          animation: "float-slow 10s ease-in-out infinite",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        <SectionHeader
          tag="AI-Powered Solutions"
          title="Every Solution We Build Has AI Inside"
          description="From smart websites to intelligent ERP — we build AI-powered software that runs, learns, and grows your business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((srv, i) => (
            <ScrollReveal key={srv.slug} delay={i * 0.06}>
              <Link href={`/services/${srv.slug}`}>
                <div className="group bg-card/80 backdrop-blur-sm border border-border-subtle rounded-[var(--radius-lg)] p-7 transition-all duration-350 relative overflow-hidden hover:border-border-blue hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(249,115,22,0.06)] h-full">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-db-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-[rgba(30,58,95,0.1)] to-[rgba(249,115,22,0.1)] flex items-center justify-center text-[1.2rem] mb-4 border border-border-subtle">
                    {srv.icon}
                  </div>
                  <h3 className="font-heading font-bold text-[1rem] mb-1.5">{srv.title}</h3>
                  <p className="text-text-subtle text-[0.84rem] leading-[1.55]">{srv.description}</p>
                  <span className="text-accent text-[0.8rem] font-semibold mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
