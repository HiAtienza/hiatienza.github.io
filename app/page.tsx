import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering & Human-Centered AI" },
  description:
    "Adrián Muñoz Atienza, Computer Science student at XJTLU. Building LockIn for planning and focus, Setline for offline workout logging, and supervised human-AI research through VIDEO-RESCUE.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/",
    title: "Useful software, built for people | Adrián Muñoz Atienza",
    description:
      "LockIn for planning and focus, Setline for workout logging, and VIDEO-RESCUE for supervised human-AI coordination. Explore my work in software engineering and human-centered products.",
    images: ["/social-profile-en.png"]
  },
  twitter: {
    title: "Useful software, built for people | Adrián Muñoz Atienza",
    description:
      "Explore LockIn, Setline and VIDEO-RESCUE: personal products and supervised human-AI research.",
    images: ["/social-profile-en.png"]
  }
};

export default function Page() {
  return <HomePage locale="en" />;
}
