"use client";

import { MaskLines, Reveal } from "@/components/home/motion";
import { MirrorDot, TIGER_BAND } from "@/components/home/motifs";
import { type ServiceItem } from "@/lib/constants";

/** Benefits on a Pili Vesha turmeric band. */
export function ServiceBenefits({ service }: { service: ServiceItem }) {
  return (
    <section className="relative mx-2 lg:mx-4 rounded-[28px] lg:rounded-[40px] overflow-hidden bg-turmeric">
      <div className="absolute inset-x-0 top-0 h-[56px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 112px", backgroundPosition: "0 0" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-[56px]" style={{ backgroundImage: TIGER_BAND, backgroundSize: "auto 112px", backgroundPosition: "0 100%" }} aria-hidden="true" />
      <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink mb-5">
            <MirrorDot className="w-5 h-5" />
            Why it pays off
          </p>
          <h2 className="display text-[clamp(2.2rem,4.6vw,4.2rem)] text-ink">
            <MaskLines lines={["What changes", "for your business."]} />
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.65] text-ink/70 max-w-[40ch]">
            {service.title} from ZED LABS is judged on one thing: whether it moves your numbers.
          </p>
        </div>
        <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 border-t border-ink/20">
          {service.benefits.map((benefit, i) => (
            <li key={benefit} className="border-b border-ink/20">
              <Reveal delay={(i % 2) * 0.06} className="flex items-start gap-4 py-5">
                <span className="font-mono text-[0.72rem] text-ink/50 pt-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-ink text-[1.02rem] leading-[1.55] font-medium">{benefit}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
