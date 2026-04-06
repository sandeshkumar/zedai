import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { CITIES } from "@/lib/cities";

export function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-border-subtle">
      <div className="max-w-[1200px] mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="font-heading font-[900] text-[1.2rem] mb-1.5">
            <span className="text-text-primary">ZED </span>
            <span className="text-accent">Labs</span>
          </div>
          <p className="text-text-dim text-[0.78rem]">
            AI-Powered Software · Chatbots · Websites · Apps · ERP · CRM
          </p>
        </div>

        {/* Services & Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Services */}
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-text-dim mb-3">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-[0.8rem] text-text-subtle hover:text-accent transition-colors truncate"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-text-dim mb-3">
              Cities We Serve
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-1.5">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/custom-websites/${c.slug}`}
                  className="text-[0.8rem] text-text-subtle hover:text-accent transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
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

        {/* Contact */}
        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <a href="tel:+919380341684" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            📞 +91 93803 41684
          </a>
          <a href="https://wa.me/919380341684" target="_blank" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            💬 WhatsApp
          </a>
          <a href="mailto:contact@zedai.tech" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            ✉️ contact@zedai.tech
          </a>
        </div>

        {/* Legal */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <Link href="/privacy" className="text-[0.72rem] text-text-dim hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <span className="text-text-dim text-[0.72rem]">·</span>
          <Link href="/terms" className="text-[0.72rem] text-text-dim hover:text-accent transition-colors">
            Terms of Service
          </Link>
        </div>
        <p className="text-text-dim text-[0.72rem] text-center">
          © {new Date().getFullYear()} ZED Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
