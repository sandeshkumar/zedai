import Link from "next/link";
import { getServiceBySlug } from "@/lib/constants";
import { ArrowIcon } from "@/components/home/motion";
import { MirrorDot } from "@/components/home/motifs";

interface ServiceRelatedProps {
  serviceSlugs: string[];
  currentSlug: string;
}

export function ServiceRelated({ serviceSlugs, currentSlug }: ServiceRelatedProps) {
  const services = serviceSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (services.length === 0) return null;

  return (
    <section className="py-20 px-5 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        <p className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-kumkum mb-5">
          <MirrorDot className="w-5 h-5" />
          Under the same roof
        </p>
        <h2 className="display text-[clamp(1.9rem,3.6vw,3rem)] text-ink mb-10">You might also need</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group flex flex-col">
              <span className="tile-roof h-3 rounded-t-[10px] transition-[height] duration-500 group-hover:h-5" aria-hidden="true" />
              <span className="flex-1 bg-white border border-line border-t-0 rounded-b-[16px] p-7">
                <span className="flex items-start justify-between gap-4">
                  <span className="font-display text-[1.3rem] tracking-[-0.025em] text-ink group-hover:text-tile transition-colors">
                    {service.title}
                  </span>
                  <ArrowIcon className="w-4 h-4 mt-2 opacity-40 transition-all group-hover:opacity-100 group-hover:-rotate-45" />
                </span>
                <span className="block mt-3 text-[0.92rem] text-ink-3 leading-[1.6] line-clamp-2">{service.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
