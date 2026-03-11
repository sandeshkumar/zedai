import Link from "next/link";
import { getServiceBySlug } from "@/lib/constants";

interface RelatedServicesProps {
  serviceSlugs: string[];
}

export function RelatedServices({ serviceSlugs }: RelatedServicesProps) {
  const services = serviceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (services.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-border-subtle">
      <h3 className="font-heading font-bold text-[1.2rem] mb-4">
        Related Services
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <Link
            key={service!.slug}
            href={`/services/${service!.slug}`}
            className="group flex items-start gap-3 p-4 rounded-[var(--radius-md)] border border-border-subtle hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
          >
            <span className="text-2xl">{service!.icon}</span>
            <div>
              <h4 className="font-heading font-bold text-[0.95rem] group-hover:text-accent transition-colors">
                {service!.title}
              </h4>
              <p className="text-[0.8rem] text-text-dim leading-[1.5] mt-1 line-clamp-2">
                {service!.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
