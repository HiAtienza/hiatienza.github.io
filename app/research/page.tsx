import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Human–AI Coordination Research",
  description:
    "Supervised research into evidence-linked AI support for search-and-rescue transcript coordination.",
  alternates: { canonical: "/research/", languages: { en: "/research/", es: "/es/research/" } },
  openGraph: {
    url: "/research/",
    title: "Human–AI Coordination Research | Adrián Muñoz Atienza",
    description:
      "Supervised research into evidence-linked AI support for search-and-rescue transcript coordination.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <ResearchPage locale="en" />;
}
