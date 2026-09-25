"use client";

import { type ServiceItem, WHATSAPP_URL } from "@/lib/constants";
import { Palm, TileHouse } from "@/components/home/illustrations";
import { ArrowIcon, MaskLines } from "@/components/home/motion";
import { MirrorDot } from "@/components/home/motifs";

export function ServiceCTA({ service, cityName }: { service: ServiceItem; cityName?: string }) {
  return (
    <section className="px-2 lg:px-4" id="service-contact">
      <div className="relative bg-brand text-white rounded-[28px] lg:rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 tile-lines-light opacity-[0.06] pointer-events-none [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-turmeric mb-6">
              <MirrorDot className="w-5 h-5" />
              Encha ullar? Let&apos;s talk
            </p>
            <h2 className="display text-[clamp(2.4rem,5.4vw,5rem)]">
              <MaskLines
                lines={[
                  "Let's build your",
                  <span key="l2" className="text-turmeric">
                    {service.title}
                  </span>,
                  cityName ? `in ${cityName}.` : "the coastal way.",
                ]}
              />
            </h2>
            <p className="mt-6 text-white/65 max-w-[46ch] text-[1.05rem] leading-[1.65]">
              A free call, a fixed quote in ₹, and a live link you can check every week. No obligation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#service-form"
                className="group inline-flex items-center gap-2.5 bg-white text-ink font-medium pl-6 pr-5 py-3.5 rounded-full hover:bg-turmeric transition-colors"
              >
                Get my fixed quote
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 hidden md:flex items-end justify-end gap-1" aria-hidden="true">
            <Palm className="w-[80px] h-[140px] -mr-6" lean={-6} color="#0F2238" />
            <TileHouse id={`cta-${service.slug}`} doorOpen className="w-[260px] h-auto" />
            <Palm className="w-[70px] h-[120px] -ml-5" lean={6} color="#0F2238" />
          </div>
        </div>
      </div>
    </section>
  );
}
