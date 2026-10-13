import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering y Human-Centered AI" },
  description:
    "Adrián Muñoz Atienza, estudiante de Computer Science en XJTLU. LockIn para planes y enfoque, Setline para entrenamientos sin conexión y VIDEO-RESCUE para investigación supervisada persona-IA.",
  alternates: { canonical: "/es/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/es/",
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "LockIn para planes y enfoque, Setline para registrar entrenamientos y VIDEO-RESCUE para coordinación supervisada persona-IA. Proyectos de ingeniería de software centrados en las personas.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "LockIn, Setline y VIDEO-RESCUE: productos personales e investigación supervisada. Conoce mis proyectos de software centrados en las personas.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <HomePage locale="es" />;
}
