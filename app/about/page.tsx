import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adrián Muñoz Atienza’s path from Spain to China and his emerging specialization in Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
  alternates: { canonical: "/about/", languages: { en: "/about/", es: "/es/about/" } },
  openGraph: {
    url: "/about/",
    title: "About | Adrián Muñoz Atienza",
    description:
      "A Computer Science student building toward Software Engineering specialising in Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <AboutPage locale="en" />;
}
