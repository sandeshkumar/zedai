"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Optional sound, off by default. Everything is synthesised with Web Audio,
 * so there are no audio files to download:
 * - soft waves: filtered noise that swells and falls like surf
 * - a chande rhythm that takes over while the Yakshagana chapter is on screen
 */

type Engine = {
  ctx: AudioContext;
  waves: GainNode;
  drums: GainNode;
  timer: number;
  stop: () => void;
};

function createEngine(): Engine {
  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.2);

  // --- waves: brown noise, low-passed, with a slow swell ---
  const len = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.2;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 520;
  const swell = ctx.createGain();
  swell.gain.value = 0.5;
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.09; // one wave every ~11 s
  const lfoDepth = ctx.createGain();
  lfoDepth.gain.value = 0.35;
  lfo.connect(lfoDepth).connect(swell.gain);
  const waves = ctx.createGain();
  waves.gain.value = 0.16;
  noise.connect(lowpass).connect(swell).connect(waves).connect(master);
  noise.start();
  lfo.start();

  // --- chande: a tuned membrane hit plus a slap, on a looping pattern ---
  const drums = ctx.createGain();
  drums.gain.value = 0;
  drums.connect(master);

  const hit = (time: number, pitch: number, level: number) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(pitch * 1.8, time);
    osc.frequency.exponentialRampToValueAtTime(pitch, time + 0.06);
    g.gain.setValueAtTime(level, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.35);
    osc.connect(g).connect(drums);
    osc.start(time);
    osc.stop(time + 0.4);

    const slap = ctx.createBufferSource();
    slap.buffer = buffer;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 1800;
    const sg = ctx.createGain();
    sg.gain.setValueAtTime(level * 0.6, time);
    sg.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
    slap.connect(bp).connect(sg).connect(drums);
    slap.start(time, Math.random() * 3, 0.06);
  };

  // 8 steps: strong beats low, off-beats high, a rolling fill at the end.
  const pattern: [number, number][] = [
    [140, 0.9], [0, 0], [220, 0.5], [140, 0.7], [0, 0], [220, 0.5], [180, 0.6], [220, 0.45],
  ];
  const step = 60 / 132 / 2;
  let next = ctx.currentTime + 0.1;
  let i = 0;
  const timer = window.setInterval(() => {
    while (next < ctx.currentTime + 0.2) {
      const [pitch, level] = pattern[i % pattern.length];
      if (level > 0) hit(next, pitch, level);
      next += step;
      i++;
    }
  }, 50);

  return {
    ctx,
    waves,
    drums,
    timer,
    stop: () => {
      window.clearInterval(timer);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      setTimeout(() => ctx.close(), 500);
    },
  };
}

export function SoundToggle() {
  const [on, setOn] = useState(false);
  const engine = useRef<Engine | null>(null);

  // Hand over from waves to the chande while the Yakshagana chapter is visible.
  useEffect(() => {
    if (!on) return;
    const stage = document.getElementById("ai");
    if (!stage) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const e = engine.current;
        if (!e) return;
        const t = e.ctx.currentTime;
        const inStage = entry.isIntersecting;
        e.drums.gain.linearRampToValueAtTime(inStage ? 0.5 : 0, t + 0.8);
        e.waves.gain.linearRampToValueAtTime(inStage ? 0.04 : 0.16, t + 0.8);
      },
      { threshold: 0.35 }
    );
    io.observe(stage);
    return () => io.disconnect();
  }, [on]);

  useEffect(() => () => engine.current?.stop(), []);

  function toggle() {
    if (on) {
      engine.current?.stop();
      engine.current = null;
      setOn(false);
    } else {
      engine.current = createEngine();
      setOn(true);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn sound off" : "Turn sound on"}
      className="fixed bottom-6 left-6 z-[95] inline-flex items-center gap-2.5 rounded-full bg-paper/90 backdrop-blur border border-line-strong pl-3 pr-4 py-2.5 text-[0.8rem] text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] hover:bg-white transition-colors cursor-pointer"
    >
      <span className="flex items-end gap-[3px] h-4 w-4" aria-hidden="true">
        {[0, 1, 2, 3].map((b) => (
          <span
            key={b}
            className="w-[3px] rounded-full bg-tile"
            style={{
              height: on ? "100%" : "30%",
              animation: on ? `sound-bar 0.9s ${b * 0.15}s ease-in-out infinite alternate` : undefined,
              transition: "height 0.3s",
            }}
          />
        ))}
      </span>
      {on ? "Sound on" : "Sound off"}
    </button>
  );
}
