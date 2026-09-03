import type { MetadataRoute } from "next";
import { siteUrl, slugs } from "@/lib/site-data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "es/",
    "about/",
    "es/about/",
    "research/",
    "es/research/",
    "privacy/",
    "es/privacy/"
  ];
  return [
    ...pages.map((page) => ({
      url: `${siteUrl}/${page}`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7
    })),
    ...slugs.flatMap((slug) => [
      {
        url: `${siteUrl}/projects/${slug}/`,
        lastModified: new Date("2026-09-04"),
        changeFrequency: "monthly" as const,
        priority: 0.8
      },
      {
        url: `${siteUrl}/es/projects/${slug}/`,
        lastModified: new Date("2026-09-04"),
        changeFrequency: "monthly" as const,
        priority: 0.8
      }
    ])
  ];
}
