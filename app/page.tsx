import type { Metadata } from "next";
import { HomePage } from "@/components/pages";

export const metadata: Metadata = {
  title: { absolute: "Adrián Muñoz Atienza | Software Engineering & Human-Centered AI" },
  description:
    "Adrián Muñoz Atienza, Computer Science student at XJTLU. Currently building Lock Calendar, an Android app that brings your week and next appointment to your lock screen.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    url: "/",
    title: "Human Signals → Useful Systems | Adrián Muñoz Atienza",
    description:
      "Currently building Lock Calendar: classes and everyday appointments at a glance on your Android lock screen. Explore my work in software engineering and human-centered products.",
    images: ["/og.jpg"]
  },
  twitter: {
    title: "Human Signals → Useful Systems | Adrián Muñoz Atienza",
    description:
      "Currently building Lock Calendar: your week and next appointment at a glance on your Android lock screen.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <HomePage locale="en" />;
}
