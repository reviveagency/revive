"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { CountUp } from "./ui/CountUp";

type Props = {
  beforeImage: string;
  afterImage: string;
  alt: string;
};

/**
 * Before/After slider driven by vertical scroll progress.
 * As the section scrolls through the viewport, the divider sweeps from
 * left (8%) to right (92%), revealing the "after" image.
 * No manual drag — pure scroll-driven.
 */
export function BeforeAfter({ beforeImage, afterImage, alt }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Map scroll progress through this section to a slider position 8..92
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const sliderPos = useTransform(scrollYProgress, [0.05, 0.95], [8, 92]);
  const clipPath = useMotionTemplate`inset(0 0 0 ${sliderPos}%)`;
  const handleLeft = useMotionTemplate`${sliderPos}%`;

  return (
    <section ref={sectionRef} className="container-page mt-32">
      <Reveal>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              The redesign direction, made tangible
            </div>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[18ch]">
              See your site before and after.{" "}
              <span className="font-editorial text-orange">Just scroll.</span>
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
        <div className="mt-14 relative aspect-[16/10] rounded-2xl overflow-hidden border border-line-strong bg-surface">
          {/* before — full bleed underneath */}
          <Image
            src={beforeImage}
            alt={`${alt} before`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* after — clipped from left based on scroll progress */}
          {prefersReduced ? (
            <div
              className="absolute inset-0"
              style={{ clipPath: "inset(0 0 0 50%)" }}
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
          ) : (
            <motion.div
              className="absolute inset-0"
              style={{ clipPath, willChange: "clip-path" }}
            >
              <Image
                src={afterImage}
                alt={`${alt} after`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          )}

          {/* labels */}
          <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-white/95 bg-black/55 backdrop-blur px-3 py-1.5 rounded-full pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 text-xs uppercase tracking-[0.2em] text-white bg-orange px-3 py-1.5 rounded-full pointer-events-none">
            After
          </div>

          {/* divider line + handle */}
          {prefersReduced ? (
            <div
              className="absolute top-0 bottom-0 w-px bg-white/95 shadow-[0_0_24px_rgba(0,0,0,0.25)] pointer-events-none"
              style={{ left: "50%" }}
              aria-hidden
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-white border border-line-strong grid place-items-center text-ink shadow-lg">
                <Arrows />
              </div>
            </div>
          ) : (
            <motion.div
              className="absolute top-0 bottom-0 w-px bg-white/95 shadow-[0_0_24px_rgba(0,0,0,0.25)] pointer-events-none"
              style={{ left: handleLeft }}
              aria-hidden
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-white border border-line-strong grid place-items-center text-ink shadow-lg">
                <Arrows />
              </div>
            </motion.div>
          )}

          {/* scroll hint — fades out after first quarter */}
          {!prefersReduced && (
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] text-white/85 bg-black/45 backdrop-blur px-3 py-1.5 rounded-full pointer-events-none"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.15, 0.35],
                  [1, 1, 0],
                ),
              }}
            >
              Scroll to reveal
            </motion.div>
          )}
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
                <CountUp to={c.num} prefix={c.prefix} suffix={c.suffix} />
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
