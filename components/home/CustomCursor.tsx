"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { MirrorDot } from "./motifs";

type Mode = "dot" | "link" | "paw";

/** Tiger paw print, as painted on Pili Vesha dancers. */
function Paw() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" aria-hidden="true">
      <ellipse cx="20" cy="26" rx="9" ry="7.5" fill="#0B0D12" />
      <ellipse cx="9" cy="16" rx="3.6" ry="4.6" fill="#0B0D12" />
      <ellipse cx="16" cy="10" rx="3.6" ry="4.8" fill="#0B0D12" />
      <ellipse cx="24" cy="10" rx="3.6" ry="4.8" fill="#0B0D12" />
      <ellipse cx="31" cy="16" rx="3.6" ry="4.6" fill="#0B0D12" />
      <ellipse cx="20" cy="26" rx="6" ry="4.8" fill="#EDA721" />
    </svg>
  );
}

/**
 * A mirror-work dot that follows the pointer, grows over links and turns into
 * a tiger paw over buttons. Mouse and trackpad only; touch devices and
 * reduced-motion users keep the normal cursor.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("dot");
  const [visible, setVisible] = useState(false);
  const x = useSpring(useMotionValue(-100), { stiffness: 700, damping: 45, mass: 0.4 });
  const y = useSpring(useMotionValue(-100), { stiffness: 700, damping: 45, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const on = setTimeout(() => setEnabled(true), 0);
    document.documentElement.classList.add("zl-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as Element | null;
      if (t?.closest("button, [role='button'], a.rounded-full, input[type='submit']")) setMode("paw");
      else if (t?.closest("a, summary, label, select")) setMode("link");
      else setMode("dot");
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      clearTimeout(on);
      document.documentElement.classList.remove("zl-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[500] pointer-events-none"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait" initial={false}>
          {mode === "paw" ? (
            <motion.div key="paw" initial={{ scale: 0.4, rotate: -20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.4, opacity: 0 }} transition={{ duration: 0.18 }}>
              <Paw />
            </motion.div>
          ) : (
            <motion.div
              key="dot"
              animate={{ scale: mode === "link" ? 2.2 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-full"
            >
              <MirrorDot className="w-[18px] h-[18px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
