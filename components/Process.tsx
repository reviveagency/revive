"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";

const STEPS: { n: number; title: string; detail: string }[] = [
  {
    n: 1,
    title: "Audit",
    detail:
      "We pull heatmaps, scroll-depth, and run real user-test sessions on your live site. We listen for the gap between what you say and what visitors actually hear.",
  },
  {
    n: 2,
    title: "Direction",
    detail:
      "Two redesign directions delivered in 48 hours. Annotated, opinionated, and with the reasoning behind every decision. Free, no obligation.",
  },
  {
    n: 3,
    title: "Build",
    detail:
      "If you commission us, we build the chosen direction. Static, fast, mobile-first. Hand-coded. Not a template, not a page builder.",
  },
  {
    n: 4,
    title: "Hand-off",
    detail:
      "Editable sections, a written guide for your team, and a 30-day window for revisions. Then we step out. You own it.",
  },
];

function ProcessStep({
  n,
  title,
  detail,
  delay,
}: {
  n: number;
  title: string;
  detail: string;
  delay: number;
}) {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      className="flex gap-8"
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay, ease }}
    >
      <div
        className="font-display text-orange leading-none shrink-0"
        style={{ fontSize: "clamp(3.4rem, 6vw, 5.6rem)" }}
      >
        <CountUp to={n} prefix="0" duration={1.2} />
      </div>
      <div className="pt-3">
        <h3 className="font-display text-2xl md:text-[1.7rem] mb-3">
          {title}
        </h3>
        <p className="text-base text-ink-muted leading-relaxed max-w-[38ch]">
          {detail}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <section id="process" className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16 md:mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              How we work
            </div>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[18ch]">
              Four phases.{" "}
              <span className="font-editorial text-orange">No surprises.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed max-w-[44ch] md:justify-self-end">
            From the first audit to the final hand-off, every Revive engagement
            runs the same way. You always know what&rsquo;s happening, what
            comes next, and what we&rsquo;re owning.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
        {STEPS.map((s, i) => (
          <ProcessStep
            key={s.n}
            n={s.n}
            title={s.title}
            detail={s.detail}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  );
}
