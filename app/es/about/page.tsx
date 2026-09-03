import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "El recorrido de Adrián Muñoz Atienza entre España y China y su especialización en desarrollo en Human-Centered AI, Behavioral Technology e interacción persona-IA.",
  alternates: { canonical: "/es/about/", languages: { en: "/about/", es: "/es/about/" } },
  openGraph: {
    url: "/es/about/",
    title: "Sobre mí | Adrián Muñoz Atienza",
    description:
      "Estudiante de Computer Science que construye una trayectoria en Software Engineering, Human-Centered AI, Behavioral Technology e interacción persona-IA.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Sobre mí | Adrián Muñoz Atienza",
    description: "Software Engineering con una especialización human-centered en desarrollo.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <AboutPage locale="es" />;
}
