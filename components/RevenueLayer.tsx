"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./ui/Reveal";

const DARK_BG = "#111110";
const PANEL_BG = "rgba(255,255,255,0.04)";
const PANEL_LINE = "rgba(255,255,255,0.14)";
const LINE_FAINT = "rgba(255,255,255,0.22)";
const TEXT_MUTED = "rgba(255,255,255,0.68)";

const ITEMS: { title: string; detail: string }[] = [
  {
    title: "Affiliate architecture",
    detail:
      "We build sites that slot cleanly into affiliate and partner tracking ecosystems.",
  },
  {
    title: "Lead capture and routing",
    detail:
      "Forms, flows, and lead-gen logic built into the structure from day one, not bolted on after.",
  },
  {
    title: "CPC and paid traffic readiness",
    detail:
      "Landing pages and site structure designed for paid traffic conversion, not just organic browsing.",
  },
  {
    title: "Conversion layer",
    detail:
      "Every CTA, hierarchy decision, and trust signal is placed with one question in mind: does this make someone act?",
  },
  {
    title: "Commercial positioning",
    detail:
      "We audit your messaging against your actual revenue model, not just how it reads.",
  },
  {
    title: "Performance baseline",
    detail:
      "Speed, mobile behaviour, and Core Web Vitals treated as commercial requirements, not technical nice-to-haves.",
  },
];

function RevenueItem({
  title,
  detail,
  delay,
}: {
  title: string;
  detail: string;
  delay: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="pt-7 md:pt-9 md:px-2"
      style={{ borderTop: `1px solid ${PANEL_LINE}` }}
      initial={prefersReduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="font-display text-white text-lg md:text-xl tracking-tight mb-3">
        {title}
      </h3>
      <p
        className="text-base leading-relaxed max-w-[38ch]"
        style={{ color: TEXT_MUTED }}
      >
        {detail}
      </p>
    </motion.div>
  );
}

function CommercialDiagram() {
  const prefersReduced = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  const channels = [
    { x: 180, label: "Affiliate tracking" },
    { x: 560, label: "Lead routing" },
    { x: 940, label: "CPC landing pages" },
  ];

  return (
    <div className="mt-14 md:mt-20">
      <svg
        viewBox="0 0 1120 440"
        className="w-full h-auto"
        role="img"
        aria-label="Commercial stack diagram: a website feeding affiliate tracking, lead routing, and CPC landing pages, all converging into revenue."
      >
        {/* Website node */}
        <motion.g
          initial={prefersReduced ? false : { opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease }}
        >
          <rect
            x="440"
            y="20"
            width="240"
            height="64"
            rx="10"
            fill={DARK_BG}
            stroke="#ffffff"
            strokeWidth="1.2"
          />
          <text
            x="560"
            y="58"
            textAnchor="middle"
            fontFamily="var(--font-sora), sans-serif"
            fontSize="15"
            fontWeight="600"
            letterSpacing="-0.01em"
            fill="#ffffff"
          >
            Your website
          </text>
        </motion.g>

        {/* Connectors: Website → 3 channels */}
        {channels.map((c, i) => {
          const startX = 560;
          const startY = 84;
          const endX = c.x + 120;
          const endY = 168;
          const midY = (startY + endY) / 2;
          const d = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
          return (
            <motion.path
              key={`top-${i}`}
              d={d}
              fill="none"
              stroke={LINE_FAINT}
              strokeWidth="1.1"
              strokeLinecap="round"
              initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease }}
            />
          );
        })}

        {/* Channel cards */}
        {channels.map((c, i) => (
          <motion.g
            key={`ch-${i}`}
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.25 + i * 0.06, ease }}
          >
            <rect
              x={c.x}
              y="168"
              width="240"
              height="84"
              rx="10"
              fill={PANEL_BG}
              stroke={PANEL_LINE}
              strokeWidth="1"
            />
            <text
              x={c.x + 20}
              y="196"
              fontFamily="var(--font-sora), sans-serif"
              fontSize="11"
              letterSpacing="0.18em"
              fill="#F26522"
            >
              {`0${i + 1}`}
            </text>
            <text
              x={c.x + 20}
              y="226"
              fontFamily="var(--font-sora), sans-serif"
              fontSize="15"
              fontWeight="600"
              letterSpacing="-0.01em"
              fill="#ffffff"
            >
              {c.label}
            </text>
          </motion.g>
        ))}

        {/* Connectors: 3 channels → Revenue */}
        {channels.map((c, i) => {
          const startX = c.x + 120;
          const startY = 252;
          const endX = 560;
          const endY = 336;
          const midY = (startY + endY) / 2;
          const d = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
          return (
            <motion.path
              key={`bot-${i}`}
              d={d}
              fill="none"
              stroke={LINE_FAINT}
              strokeWidth="1.1"
              strokeLinecap="round"
              initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.06, ease }}
            />
          );
        })}

        {/* Revenue node */}
        <motion.g
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.7, ease }}
        >
          <rect
            x="420"
            y="336"
            width="280"
            height="76"
            rx="10"
            fill="#F26522"
            stroke="#F26522"
            strokeWidth="1"
          />
          <text
            x="560"
            y="370"
            textAnchor="middle"
            fontFamily="var(--font-sora), sans-serif"
            fontSize="11"
            letterSpacing="0.22em"
            fill="rgba(255,255,255,0.85)"
          >
            OUTCOME
          </text>
          <text
            x="560"
            y="395"
            textAnchor="middle"
            fontFamily="var(--font-sora), sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="-0.015em"
            fill="#ffffff"
          >
            Revenue
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

export function RevenueLayer() {
  return (
    <section
      id="revenue"
      className="mt-40 md:mt-48 py-28 md:py-44 text-white"
      style={{ background: DARK_BG }}
    >
      <div className="container-page">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12 md:mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-orange">
                Beyond design
              </div>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[20ch] text-white">
                Most redesigns look better.{" "}
                <span className="font-editorial text-orange">
                  Ours are built to earn.
                </span>
              </h2>
            </div>
            <p
              className="text-base md:text-lg leading-relaxed max-w-[46ch] md:justify-self-end"
              style={{ color: TEXT_MUTED }}
            >
              We understand how websites actually generate revenue because we
              work inside those systems every day. Affiliate programmes, lead
              routing, CPC landing pages, conversion architecture. Your new
              site won&rsquo;t just look premium. It will perform like one.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <CommercialDiagram />
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-14">
          {ITEMS.map((item, i) => (
            <RevenueItem
              key={item.title}
              title={item.title}
              detail={item.detail}
              delay={(i % 3) * 0.08}
            />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 md:mt-20">
            <Link href="#book" className="btn-light">
              See how this applies to your site
              <ArrowDown size={15} strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
