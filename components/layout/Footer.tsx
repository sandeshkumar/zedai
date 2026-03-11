import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-border-subtle text-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-heading font-[900] text-[1.2rem] mb-1.5">
          <span className="text-text-primary">ZED </span>
          <span className="text-accent">Labs</span>
        </div>
        <p className="text-text-dim text-[0.78rem]">
          Websites · Apps · ERP · CRM · AI · Digital Marketing
        </p>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4 mb-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="text-[0.78rem] text-text-dim hover:text-accent transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-2 flex-wrap">
          <Link
            href="/blog"
            className="text-[0.8rem] text-accent font-semibold hover:text-accent-light transition-colors"
          >
            Blog & Insights →
          </Link>
          <Link
            href="/partner"
            className="text-[0.8rem] text-accent font-semibold hover:text-accent-light transition-colors"
          >
            Become a Partner →
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
          <a href="tel:+919380341684" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            📞 +91 93803 41684
          </a>
          <a href="https://wa.me/919380341684" target="_blank" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            💬 WhatsApp
          </a>
          <a href="mailto:hello@zedai.tech" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            ✉️ hello@zedai.tech
          </a>
        </div>
        <p className="text-text-dim text-[0.72rem] mt-3">
          © {new Date().getFullYear()} ZED Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
