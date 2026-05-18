"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";

type Props = {
  beforeImage: string;
  afterImage: string;
  alt: string;
};

/**
 * Hover/cursor-driven before/after slider.
 * - On desktop: as the cursor moves over the slider, the divider tracks the
 *   horizontal position 1:1. No click required.
 * - On touch: tap-and-drag works as a fallback (pointermove only fires while
 *   finger is down on touch devices).
 * - The divider stays where the cursor left it — so a user can compare a
 *   detail and then read the section without the slider snapping back.
 */
export function BeforeAfter({ beforeImage, afterImage, alt }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, x)));
  }, []);

  return (
    <section className="container-page mt-32">
      <Reveal>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              The redesign direction, made tangible
            </div>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[18ch]">
              See your site before and after.{" "}
              <span className="font-editorial text-orange">Just hover.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-[42ch] md:justify-self-end">
            Every Revive engagement starts with a side-by-side. We don&rsquo;t
            describe what we&rsquo;d do. We show it. This is what your free
            48-hour direction looks like in your hands.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          ref={wrapRef}
          onPointerMove={(e) => update(e.clientX)}
          onPointerEnter={() => setActive(true)}
          onPointerLeave={() => setActive(false)}
          className="mt-14 relative aspect-[16/10] rounded-2xl overflow-hidden border border-line-strong bg-surface select-none touch-none cursor-ew-resize"
          aria-label="Drag or hover to compare before and after"
        >
          {/* before — full bleed underneath */}
          <Image
            src={beforeImage}
            alt={`${alt} before`}
            fill
            priority
            className="object-cover pointer-events-none"
            sizes="100vw"
          />

          {/* after — clipped from the left based on cursor position */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              clipPath: `inset(0 0 0 ${pos}%)`,
              transition: active ? "none" : "clip-path 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Image
              src={afterImage}
              alt={`${alt} after`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* labels */}
          <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-white/95 bg-black/55 backdrop-blur px-3 py-1.5 rounded-full pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 text-xs uppercase tracking-[0.2em] text-white bg-orange px-3 py-1.5 rounded-full pointer-events-none">
            After
          </div>

          {/* divider line + handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-white/95 shadow-[0_0_24px_rgba(0,0,0,0.25)] pointer-events-none"
            style={{
              left: `${pos}%`,
              transition: active ? "none" : "left 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
            aria-hidden
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-white border border-line-strong grid place-items-center text-ink shadow-lg transition-transform duration-[150ms] ease-out"
              style={{ transform: `translate(-50%, -50%) scale(${active ? 1.08 : 1})` }}
            >
              <Arrows />
            </div>
          </div>

          {/* hint — fades out once the user starts interacting */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-white/85 bg-black/45 backdrop-blur px-3 py-1.5 rounded-full pointer-events-none transition-opacity duration-500"
            style={{ opacity: active ? 0 : 1 }}
          >
            Hover to compare
          </div>
        </div>
      </Reveal>

      {/* uplift cards */}
      <div className="mt-12 grid sm:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
        {[
          { num: 22, label: "Conversion uplift", suffix: "%", prefix: "+" },
          { num: 31, label: "CTA engagement", suffix: "%", prefix: "+" },
          { num: 18, label: "Bounce reduction", suffix: "%", prefix: "−" },
        ].map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <div className="bg-surface p-8 md:p-10 h-full">
              <div className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-ink leading-[0.95]">
                <CountUp to={c.num} prefix={c.prefix} suffix={c.suffix} duration={1.2} />
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-ink-faint mt-3">
                {c.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Arrows() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M7 6L3 11L7 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6L19 11L15 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
