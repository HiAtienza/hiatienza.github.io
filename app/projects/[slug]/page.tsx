import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/pages";
import { isProjectSlug, projects, slugs } from "@/lib/site-data";
export const dynamicParams = false;

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isProjectSlug(slug)) return {};
  const project = projects.en[slug];
  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/projects/${slug}/`,
      languages: { en: `/projects/${slug}/`, es: `/es/projects/${slug}/` }
    },
    openGraph: {
      url: `/projects/${slug}/`,
      title: project.name,
      description: project.summary,
      images: ["/og.jpg"]
    },
    twitter: { title: project.name, description: project.summary, images: ["/og.jpg"] }
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isProjectSlug(slug)) notFound();
  return <ProjectPage locale="en" slug={slug} />;
}
