import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AnnotatedCanvas } from "@/components/AnnotatedCanvas";
import { Process } from "@/components/Process";
import { RevenueLayer } from "@/components/RevenueLayer";
import { CaseStudiesGrid } from "@/components/CaseStudiesGrid";
import { ReviewsMarquee } from "@/components/ReviewsMarquee";
import { ClaimDirection } from "@/components/ClaimDirection";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BeforeAfter
        beforeImage="/media/revive-before.png"
        afterImage="/media/revive-after.png"
        alt="A real Revive redesign"
      />
      <AnnotatedCanvas />
      <Process />
      <RevenueLayer />
      <CaseStudiesGrid />
      <ReviewsMarquee />
      <ClaimDirection />
      <FAQ />
    </>
  );
}
