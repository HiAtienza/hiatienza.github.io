import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adrián Muñoz Atienza | Software Engineering & Human-Centered AI",
    template: "%s | Adrián Muñoz Atienza"
  },
  description:
    "Computer Science student at XJTLU building software at the intersection of Software Engineering, Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    type: "website",
    url: "/",
    title: "Human Signals → Useful Systems | Adrián Muñoz Atienza",
    description:
      "Computer Science student at XJTLU building software across Software Engineering, Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Human Signals to Useful Systems — Adrián Muñoz Atienza"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Signals → Useful Systems | Adrián Muñoz Atienza",
    description:
      "Computer Science student at XJTLU building software across Software Engineering, Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
  authors: [{ name: "Adrián Muñoz Atienza", url: siteUrl }],
  creator: "Adrián Muñoz Atienza",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adrián Muñoz Atienza",
    url: siteUrl,
    jobTitle: "Computer Science Student",
    knowsAbout: [
      "Software Engineering",
      "Human-Centered AI",
      "Behavioral Technology",
      "Human-AI Interaction",
      "Human-Computer Interaction"
    ],
    sameAs: ["https://github.com/HiAtienza", "https://www.linkedin.com/in/hiatienza/"]
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
