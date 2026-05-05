import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Book your audit call",
  description:
    "Book a 30-minute audit call with Lucas. We review your site, agree on scope, and start your free 48-hour redesign direction.",
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/lucas-reviveagency/30min";

export default function BookPage() {
  return (
    <section className="container-narrow pt-40 md:pt-48 pb-24">
      <Reveal>
        <div className="text-xs uppercase tracking-[0.18em] text-ink-faint text-center">
          Book audit
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display mt-5 text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[0.96] text-center max-w-[18ch] mx-auto">
          Three details.{" "}
          <span className="font-editorial text-orange">Then a slot.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-6 max-w-[58ch] mx-auto text-base md:text-lg text-ink-muted leading-relaxed text-center">
          Tell us where to find your site and what&rsquo;s broken. We&rsquo;ll
          drop you straight into the calendar so the call goes to the point.
        </p>
      </Reveal>

      <BookingForm calendlyUrl={CALENDLY_URL} />

      <Reveal delay={0.2}>
        <p className="mt-10 text-sm text-ink-faint text-center">
          Calendar not loading? Email{" "}
          <a
            href="mailto:lucas@reviveagency.eu"
            className="link-underline text-ink"
          >
            lucas@reviveagency.eu
          </a>{" "}
          and we&rsquo;ll book you in directly.
        </p>
      </Reveal>
    </section>
  );
}
