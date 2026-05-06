"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
  className?: string;
};

export function RotatingText({
  words,
  interval = 2400,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, prefersReduced]);

  // Reserve space matching the longest word so the headline doesn't reflow
  const longest = words.reduce(
    (a, b) => (a.length >= b.length ? a : b),
    words[0],
  );

  if (prefersReduced) {
    return (
      <span className={className} style={{ display: "inline-block" }}>
        {words[0]}
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "baseline",
        // boost line-height so descenders (g, p, y, j) and the trailing period fit
        lineHeight: 1.2,
        // give the clip box a little bottom room without shifting the baseline
        paddingBottom: "0.12em",
      }}
    >
      {/* invisible sizer (also gets the gradient class so width measures match exactly) */}
      <span
        aria-hidden
        className={className}
        style={{
          visibility: "hidden",
          whiteSpace: "nowrap",
          lineHeight: "inherit",
        }}
      >
        {longest}
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            className={className}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              lineHeight: "inherit",
            }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
