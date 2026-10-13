import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "El recorrido de Adrián Muñoz Atienza entre España y China, su enfoque de software centrado en las personas y el horario universitario que dio origen a LockIn.",
  alternates: { canonical: "/es/about/", languages: { en: "/about/", es: "/es/about/" } },
  openGraph: {
    url: "/es/about/",
    title: "Sobre mí | Adrián Muñoz Atienza",
    description:
      "Estudiante de Computer Science en Suzhou. Ingeniería de software, productos útiles y un recorrido de Madrid a XJTLU.",
    locale: "es_ES",
    images: ["/social-profile-es.png"]
  },
  twitter: {
    title: "Sobre mí | Adrián Muñoz Atienza",
    description:
      "Construir productos útiles, cuidar la experiencia y aprender entre España y China.",
    images: ["/social-profile-es.png"]
  }
};

export default function Page() {
  return <AboutPage locale="es" />;
}
