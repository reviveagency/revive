import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyView } from "@/components/CaseStudyView";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { FinalCTA } from "@/components/FinalCTA";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.name} · ${cs.tagline}`,
    description: cs.brief,
    openGraph: {
      title: cs.name,
      description: cs.tagline,
      images: [cs.hero],
    },
  };
}

export default async function Page(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <CaseStudyView caseStudy={cs} />
      <FinalCTA />
    </>
  );
}
