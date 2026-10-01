import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering y Human-Centered AI" },
  description:
    "Adrián Muñoz Atienza, estudiante de Computer Science en XJTLU. Ahora creando Lock Calendar: tu semana y tu próxima cita en la pantalla de bloqueo de Android.",
  alternates: { canonical: "/es/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/es/",
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "Ahora creando Lock Calendar: clases y citas cotidianas de un vistazo en la pantalla de bloqueo de Android. Proyectos de ingeniería de software centrados en las personas.",
    locale: "es_ES",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Señales humanas → sistemas útiles | Adrián Muñoz Atienza",
    description:
      "Lock Calendar: tu semana, donde ya miras. Conoce mis proyectos de software centrados en las personas.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <HomePage locale="es" />;
}
