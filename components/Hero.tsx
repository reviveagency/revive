"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { RotatingText } from "./ui/RotatingText";

const ROTATING = [
  "slow.",
  "confusing.",
  "dated.",
  "generic.",
  "forgettable.",
  "costing you sales.",
  "wasting your ad spend.",
  "leaking conversions.",
];

export function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
      <div className="container-page">
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease, delay: 0.05 }}
          className="font-display text-[clamp(2.4rem,7.4vw,6.6rem)] max-w-[18ch]"
        >
          If your website isn&rsquo;t converting,
          <br />
          it&rsquo;s{" "}
          <RotatingText
            className="text-gradient-orange"
            words={ROTATING}
            interval={2200}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="mt-7 max-w-[58ch] text-lg md:text-xl text-ink-muted leading-relaxed"
        >
          We rebuild underperforming sites. Get a free, data-driven redesign
          direction for yours in 48 hours. See how it should look before you
          commit a cent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link href="/#book" className="btn-orange">
            Book your audit call
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link>
          <Link href="#work" className="btn-ghost">
            See our work
            <ArrowDown size={15} strokeWidth={2.2} />
          </Link>
        </motion.div>
      </div>

      {/* decorative orange spark on the right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-12vw] top-1/2 -translate-y-1/2 size-[55vw] max-w-[820px] max-h-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(242,101,34,0.18), rgba(242,101,34,0) 60%)",
          filter: "blur(40px)",
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.2 }}
      />
    </section>
  );
}
