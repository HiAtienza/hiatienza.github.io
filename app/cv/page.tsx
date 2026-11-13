import type { Metadata } from "next";
import { CvPage } from "@/components/cv-page";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Adrián Muñoz Atienza’s current CV in English: software engineering, applied AI, selected projects and supervised research. Visual and ATS PDFs.",
  alternates: { canonical: "/cv/", languages: { en: "/cv/", es: "/es/cv/" } },
  openGraph: { title: "CV | Adrián Muñoz Atienza", url: "/cv/", images: ["/social-profile-en.png"] }
};

export default function Page() {
  return <CvPage locale="en" />;
}
