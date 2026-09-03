import type { Metadata } from "next";
import { ResearchPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Investigación sobre coordinación persona–IA",
  description:
    "Investigación supervisada sobre apoyo de IA vinculado a evidencias para coordinar transcripciones de búsqueda y rescate.",
  alternates: { canonical: "/es/research/", languages: { en: "/research/", es: "/es/research/" } },
  openGraph: {
    url: "/es/research/",
    title: "Investigación de coordinación persona–IA | Adrián Muñoz Atienza",
    description:
      "Investigación supervisada sobre apoyo de IA vinculado a evidencias para coordinar transcripciones de búsqueda y rescate.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Investigación de coordinación persona–IA | Adrián Muñoz Atienza",
    description:
      "Investigación supervisada sobre apoyo de IA vinculado a evidencias y responsabilidad humana.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <ResearchPage locale="es" />;
}
