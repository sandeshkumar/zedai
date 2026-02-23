"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full z-[200] px-5 lg:px-10 py-3.5 flex justify-between items-center bg-[rgba(8,12,20,0.85)] backdrop-blur-[20px] border-b border-border-subtle transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none" }}
    >
      <div className="font-heading font-[900] text-[1.4rem] tracking-[-0.02em]">
        <span className="text-text-primary">ZED </span>
        <span className="text-accent">Labs</span>
      </div>
      <div className="flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden md:inline text-[0.85rem] font-medium text-text-subtle hover:text-text-primary transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-accent text-white px-6 py-2 rounded-[var(--radius-sm)] font-bold text-[0.82rem] hover:bg-accent-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(249,115,22,0.25)] transition-all duration-250"
        >
          Get Free Quote
        </a>
      </div>
    </nav>
  );
}
