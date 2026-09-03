import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/pages";
import { slugs, type ProjectSlug } from "@/lib/site-data";
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as ProjectSlug)) notFound();
  return <ProjectPage locale="en" slug={slug as ProjectSlug} />;
}
