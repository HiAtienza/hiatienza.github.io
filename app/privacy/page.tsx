import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy and public-evidence boundaries for Adrián Muñoz Atienza’s portfolio.",
  alternates: { canonical: "/privacy/", languages: { en: "/privacy/", es: "/es/privacy/" } },
  openGraph: {
    url: "/privacy/",
    title: "Privacy | Adrián Muñoz Atienza",
    description: "Privacy and public-evidence boundaries for this portfolio.",
    images: ["/og.jpg"]
  }
};

export default function Page() {
  return <PrivacyPage locale="en" />;
}
