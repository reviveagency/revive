import { BookingForm } from "./BookingForm";
import { Reveal } from "./ui/Reveal";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/lucas-reviveagency/30min";

/**
 * Full-bleed dark-grey CTA + booking section.
 * Replaces the old "Stop guessing. Start with a direction." copy block and
 * embeds the two-step BookingForm directly so the booking happens in-page.
 */
export function ClaimDirection() {
  return (
    <section
      id="book"
      className="relative overflow-hidden mt-40 md:mt-48 py-24 md:py-32 text-white"
      style={{ background: "#15171b" }}
    >
      {/* soft orange spark off-canvas, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(242,101,34,0.42), rgba(242,101,34,0) 65%)",
          filter: "blur(48px)",
        }}
      />

      <div className="container-narrow relative">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-white/55">
              Your free redesign direction
            </div>
            <h2 className="font-display mt-5 text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[0.98] max-w-[20ch] mx-auto">
              Claim your free redesign direction.
            </h2>
            <p className="mt-6 max-w-[58ch] mx-auto text-base md:text-lg text-white/70 leading-relaxed">
              Submit your website, then book a slot to walk through the redesign
              together.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <BookingForm calendlyUrl={CALENDLY_URL} variant="dark" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-sm text-white/45 text-center">
            Calendar not loading? Email{" "}
            <a
              href="mailto:lucas@reviveagency.eu"
              className="link-underline text-white"
            >
              lucas@reviveagency.eu
            </a>{" "}
            and we&rsquo;ll book you in directly.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
