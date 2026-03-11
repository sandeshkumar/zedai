import Link from "next/link";
import { getServiceBySlug } from "@/lib/constants";

interface ServiceRelatedProps {
  serviceSlugs: string[];
  currentSlug: string;
}

export function ServiceRelated({ serviceSlugs, currentSlug }: ServiceRelatedProps) {
  const services = serviceSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (services.length === 0) return null;

  return (
    <section className="py-16 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 text-accent text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3">
          <span className="w-[18px] h-[2px] bg-accent inline-block" />
          Related Services
        </div>
        <h2 className="font-heading font-[800] text-[clamp(1.5rem,3vw,2rem)] tracking-[-0.03em] leading-[1.12] mb-8">
          You Might Also Need
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service!.slug}
              href={`/services/${service!.slug}`}
              className="group p-6 rounded-[var(--radius-md)] border border-border-subtle hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
            >
              <span className="text-3xl block mb-3">{service!.icon}</span>
              <h3 className="font-heading font-bold text-[1.05rem] mb-2 group-hover:text-accent transition-colors">
                {service!.title}
              </h3>
              <p className="text-[0.82rem] text-text-dim leading-[1.6] line-clamp-2">
                {service!.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
