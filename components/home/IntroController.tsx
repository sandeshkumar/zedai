"use client";

import { useEffect, useState } from "react";

const RUN_MS = 1700;

/** Fade the overlay out, then remove the intro classes from <html>. */
function finishIntro(onDone: () => void) {
  const root = document.documentElement;
  root.classList.add("zl-intro-out");
  setTimeout(() => {
    root.classList.remove("zl-intro", "zl-intro-out");
    onDone();
  }, 450);
}

/** Times the opening moment, offers Skip, and remembers that it was seen. */
export function IntroController({ storageKey }: { storageKey: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("zl-intro")) return;
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
    const show = setTimeout(() => setActive(true), 0);
    const end = setTimeout(() => finishIntro(() => setActive(false)), RUN_MS);
    return () => {
      clearTimeout(show);
      clearTimeout(end);
    };
  }, [storageKey]);

  if (!active) return null;
  return (
    <button
      type="button"
      onClick={() => finishIntro(() => setActive(false))}
      className="fixed bottom-6 right-6 z-[410] font-mono text-[0.72rem] uppercase tracking-[0.14em] text-white/80 hover:text-white bg-black/30 backdrop-blur px-4 py-2 rounded-full cursor-pointer"
    >
      Skip
    </button>
  );
}
