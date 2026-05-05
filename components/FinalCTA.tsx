import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section className="container-page mt-40 md:mt-48">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink text-[#f5f5f5] px-8 py-20 md:p-24">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 size-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(242,101,34,0.55), rgba(242,101,34,0) 65%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative max-w-[32ch]">
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              Your next site
            </div>
            <h2 className="font-display mt-5 text-[clamp(2.4rem,6vw,5rem)] leading-[0.98]">
              Stop guessing. <br />
              Start with a{" "}
              <span className="font-editorial italic text-orange">
                direction.
              </span>
            </h2>
            <p className="mt-7 text-base md:text-lg text-white/70 max-w-[44ch]">
              Free 48-hour redesign direction. Yours to keep, whether or not
              you commission the build.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="btn-orange"
              >
                Book your audit call
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
              <Link
                href="mailto:lucas@reviveagency.eu"
                className="btn-ghost border-white/25 text-white hover:bg-white/5"
              >
                Or email Lucas
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
