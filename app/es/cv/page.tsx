import type { Metadata } from "next";
import { CvPage } from "@/components/cv-page";

export const metadata: Metadata = {
  title: "Currículum",
  description:
    "Currículum actualizado de Adrián Muñoz Atienza en español: ingeniería de software, IA aplicada, proyectos e investigación supervisada. PDFs visual y ATS.",
  alternates: { canonical: "/es/cv/", languages: { en: "/cv/", es: "/es/cv/" } },
  openGraph: {
    title: "Currículum | Adrián Muñoz Atienza",
    url: "/es/cv/",
    locale: "es_ES",
    images: ["/social-profile-es.png"]
  }
};

export default function Page() {
  return <CvPage locale="es" />;
}
