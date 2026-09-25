"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { CAPABILITIES } from "./data";
import { ArrowIcon, EASE } from "./motion";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 400 && y > prev && !mega && !mobile);
  });

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100]"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.45, ease: EASE }}
        onMouseLeave={() => setMega(false)}
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
            scrolled || mega
              ? "bg-paper/85 backdrop-blur-xl border-line"
              : "bg-transparent border-transparent"
          }`}
        >
          <nav
            className={`max-w-[1360px] mx-auto px-5 lg:px-10 flex items-center justify-between transition-[height] duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
            aria-label="Main"
          >
            <Link href="/" className="flex items-center" aria-label="ZED LABS home">
              <Logo tone="dark" className="h-[21px] lg:h-[24px] w-auto shrink-0" />
            </Link>

            <ul className="hidden lg:flex items-center gap-1 text-[0.9rem] text-ink-2">
              <li>
                <button
                  type="button"
                  aria-expanded={mega}
                  onMouseEnter={() => setMega(true)}
                  onClick={() => setMega((v) => !v)}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-full hover:bg-paper-2 transition-colors cursor-pointer"
                >
                  Services
                  <svg viewBox="0 0 12 12" className={`w-3 h-3 transition-transform duration-300 ${mega ? "rotate-180" : ""}`} aria-hidden="true">
                    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
              {LINKS.map((l) => (
                <li key={l.href} onMouseEnter={() => setMega(false)}>
                  <Link href={l.href} className="px-3.5 py-2 rounded-full hover:bg-paper-2 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-5">
              <a href={`tel:${CONTACT.phoneE164}`} className="text-[0.85rem] text-ink-3 hover:text-ink transition-colors tabular-nums">
                {CONTACT.phone}
              </a>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-ink text-paper text-[0.88rem] font-medium pl-5 pr-4 py-2.5 rounded-full hover:bg-tile transition-colors"
              >
                Start a project
                <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden w-10 h-10 -mr-2 grid place-items-center cursor-pointer"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              onClick={() => setMobile((v) => !v)}
            >
              <span className="relative w-5 h-3">
                <span className={`absolute left-0 w-5 h-[1.5px] bg-ink transition-all duration-300 ${mobile ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 w-5 h-[1.5px] bg-ink transition-all duration-300 ${mobile ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
            </button>
          </nav>

          <AnimatePresence>
            {mega && (
              <motion.div
                key="mega"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="hidden lg:block overflow-hidden border-t border-line"
              >
                <div className="max-w-[1360px] mx-auto px-10 py-10 grid grid-cols-4 gap-10">
                  {CAPABILITIES.map((c) => (
                    <div key={c.name}>
                      <p className="eyebrow mb-4">
                        {c.index} / {c.name}
                      </p>
                      <ul className="space-y-2.5">
                        {c.services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              onClick={() => setMega(false)}
                              className="group flex items-center justify-between text-[0.95rem] text-ink hover:text-brand-2 transition-colors"
                            >
                              {s.title}
                              <ArrowIcon className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-paper pt-24 px-5 pb-8 overflow-y-auto lg:hidden"
          >
            <ul className="border-t border-line">
              {[{ label: "Services", href: "/#services" }, ...LINKS].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease: EASE }}
                  className="border-b border-line"
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobile(false)}
                    className="flex items-center justify-between py-5 font-display text-[2rem] tracking-[-0.03em]"
                  >
                    {l.label}
                    <ArrowIcon className="w-5 h-5 text-ink-4" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 text-ink-3">
              <a href={`tel:${CONTACT.phoneE164}`} className="block">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="block">{CONTACT.email}</a>
            </div>
            <Link
              href="/#contact"
              onClick={() => setMobile(false)}
              className="mt-8 flex items-center justify-center gap-2 bg-ink text-paper font-medium py-4 rounded-full"
            >
              Start a project <ArrowIcon />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
