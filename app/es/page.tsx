import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering y Human-Centered AI" },
  description:
    "Estudiante de Computer Science en XJTLU que desarrolla software en la intersección de Software Engineering, Human-Centered AI, Behavioral Technology e interacción persona-IA.",
  alternates: { canonical: "/es/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/es/",
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "Estudiante de Computer Science en XJTLU que desarrolla software en Software Engineering, Human-Centered AI, Behavioral Technology e interacción persona-IA.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "Software Engineering, Human-Centered AI, Behavioral Technology e interacción persona-IA.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <HomePage locale="es" />;
}
