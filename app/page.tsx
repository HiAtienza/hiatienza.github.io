import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering & Human-Centered AI" },
  description:
    "Computer Science student at XJTLU building software at the intersection of Software Engineering, Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/",
    title: "Human Signals → Useful Systems | Adrián Muñoz Atienza",
    description:
      "Computer Science student at XJTLU building software across Software Engineering, Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <HomePage locale="en" />;
}
