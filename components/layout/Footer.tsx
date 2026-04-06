import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ALL_CITIES } from "@/lib/cities";

export function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-border-subtle text-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-heading font-[900] text-[1.2rem] mb-1.5">
          <span className="text-text-primary">ZED </span>
          <span className="text-accent">Labs</span>
        </div>
        <p className="text-text-dim text-[0.78rem]">
          AI-Powered Software · Chatbots · Websites · Apps · ERP · CRM
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
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-3 mb-3">
          {ALL_CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/services/custom-websites/${c.slug}`}
              className="text-[0.72rem] text-text-dim hover:text-accent transition-colors"
            >
              {c.name}
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
          <a href="mailto:contact@zedai.tech" className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-subtle hover:text-accent transition-colors font-medium">
            ✉️ contact@zedai.tech
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3">
          <Link
            href="/privacy"
            className="text-[0.72rem] text-text-dim hover:text-accent transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-text-dim text-[0.72rem]">·</span>
          <Link
            href="/terms"
            className="text-[0.72rem] text-text-dim hover:text-accent transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-text-dim text-[0.72rem] mt-2">
          © {new Date().getFullYear()} ZED Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
