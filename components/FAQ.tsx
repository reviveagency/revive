"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const FAQS = [
  {
    q: "What does the free 48-hour redesign direction actually include?",
    a: "Two distinct redesign directions delivered as annotated wireframes, with the reasoning behind every decision. IA, hero, content hierarchy, CTA strategy, and brand-voice notes. No fluff, no slide deck. You can take it and run, or commission us to build it.",
  },
  {
    q: "Why is it free?",
    a: "Because the direction is the demo. If you like the way we think, you'll want us to build it. If you don't, you've still got a real piece of work to take elsewhere. We'd rather show than tell.",
  },
  {
    q: "What does it cost if we go ahead?",
    a: "Build pricing depends on scope, but most redesigns sit between £1,500 and £8,000. We'll quote a fixed price after the audit so there are no surprises.",
  },
  {
    q: "How long does the build take?",
    a: "Typically 2 to 4 weeks from kick-off to launch. We don't take on more than two builds at a time, so the team you meet is the team that ships your site.",
  },
  {
    q: "Do you work with existing CMSs / Shopify / Webflow?",
    a: "Yes. Most of our builds are static or Webflow, but we've shipped Shopify front-ends, headless WordPress, and custom CMSs. We pick the stack to fit the team that has to maintain it.",
  },
  {
    q: "What if I just want the audit, not the build?",
    a: "Take it. The 48-hour direction is yours to keep, no strings, no follow-up email funnel. Around 30% of the businesses we audit don't end up commissioning us, and that's fine.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 mb-12 md:mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-ink-faint">
              Frequently asked
            </div>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.6vw,3.6rem)] max-w-[16ch]">
              Questions, <span className="font-editorial text-orange">straight.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="border-t border-line">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left group"
              >
                <span className="font-display text-lg md:text-xl tracking-tight">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="size-9 shrink-0 rounded-full grid place-items-center bg-surface border border-line group-hover:border-ink"
                >
                  <Plus size={16} strokeWidth={1.7} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-7 pr-12 text-base md:text-lg text-ink-muted leading-relaxed max-w-[60ch]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
