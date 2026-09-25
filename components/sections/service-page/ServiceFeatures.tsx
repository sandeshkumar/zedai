"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/home/motion";
import { type ServiceItem } from "@/lib/constants";

/** Features as rooms under one Mangalore tile roof. */
export function ServiceFeatures({ service }: { service: ServiceItem }) {
  return (
    <section className="py-20 lg:py-28 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        <SectionHeader
          tag="What you get"
          title={`Everything in your ${service.title} build`}
          description="Built to grow your business. Nothing you don't need, nothing left for later."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
          {service.features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08}>
              <div className="group h-full flex flex-col">
                <div className="tile-roof h-3 rounded-t-[10px] transition-[height] duration-500 group-hover:h-5" aria-hidden="true" />
                <div className="flex-1 bg-white border border-line border-t-0 rounded-b-[16px] p-7 lg:p-8 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="font-mono text-[0.72rem] text-ink-4 mb-6">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display font-medium text-[1.35rem] tracking-[-0.025em] leading-[1.2] text-ink mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ink-3 text-[0.95rem] leading-[1.6]">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
