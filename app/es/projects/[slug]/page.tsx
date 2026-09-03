import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/pages";
import { projects, slugs, type ProjectSlug } from "@/lib/site-data";
export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug as ProjectSlug)) return {};
  const project = projects.es[slug as ProjectSlug];
  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/es/projects/${slug}/`,
      languages: { en: `/projects/${slug}/`, es: `/es/projects/${slug}/` }
    },
    openGraph: {
      url: `/es/projects/${slug}/`,
      title: project.name,
      description: project.summary,
      locale: "es_ES",
      images: ["/og.jpg"]
    },
    twitter: { title: project.name, description: project.summary, images: ["/og.jpg"] }
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as ProjectSlug)) notFound();
  return <ProjectPage locale="es" slug={slug as ProjectSlug} />;
}
