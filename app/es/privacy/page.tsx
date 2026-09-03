import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Límites de privacidad y evidencia pública del portfolio de Adrián Muñoz Atienza.",
  alternates: { canonical: "/es/privacy/", languages: { en: "/privacy/", es: "/es/privacy/" } },
  openGraph: {
    url: "/es/privacy/",
    title: "Privacidad | Adrián Muñoz Atienza",
    description: "Límites de privacidad y evidencia pública de este portfolio.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Privacidad | Adrián Muñoz Atienza",
    description: "Límites de privacidad y evidencia pública de este portfolio.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <PrivacyPage locale="es" />;
}
