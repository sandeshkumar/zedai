"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-[200]">
      {/* Announcement Bar */}
      <Link
        href="/#contact"
        className="relative block w-full overflow-hidden bg-linear-to-r from-accent-dark via-accent to-accent-light text-white text-center py-2 px-4 text-[0.8rem] sm:text-[0.85rem] font-bold tracking-wide hover:brightness-110 transition-all duration-200"
      >
        <span className="relative z-[1]">
          🚀 <span className="inline-block bg-white text-accent-dark text-[0.7rem] font-extrabold uppercase px-2 py-0.5 rounded-[4px] mx-1 tracking-[0.06em]" style={{ animation: "blink 2s ease-in-out infinite" }}>AI-Powered</span> Every website we build comes with AI built in. Get your free strategy call <span className="hidden sm:inline">→</span>
        </span>
        <span
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        />
      </Link>
      <nav
        aria-label="Main navigation"
        className="w-full px-5 lg:px-10 py-3.5 flex justify-between items-center bg-[rgba(8,12,20,0.85)] backdrop-blur-[20px] border-b border-border-subtle transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none" }}
      >
        <Link href="/" className="font-heading font-[900] text-[1.4rem] tracking-[-0.02em]">
          <span className="text-text-primary">ZED </span>
          <span className="text-accent">Labs</span>
        </Link>
        <div className="flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden md:inline-flex flex-col items-center relative text-[0.85rem] font-medium text-text-subtle hover:text-text-primary transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </Link>
          ))}
          <Link
            href="/#contact"
            className="hidden md:inline bg-accent text-white px-6 py-2 rounded-[var(--radius-sm)] font-bold text-[0.82rem] hover:bg-accent-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(249,115,22,0.25)] transition-all duration-250"
          >
            Get Free Quote
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-[301]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-bg-primary/95 backdrop-blur-xl z-[300] flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                  className="font-heading font-bold text-[1.5rem] text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + NAV_LINKS.length * 0.07, duration: 0.3 }}
                className="bg-accent text-white px-8 py-3 rounded-[var(--radius-md)] font-bold text-base"
              >
                Get Free Quote
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
