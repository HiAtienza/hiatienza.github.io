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
    "Adrián Muñoz Atienza, Computer Science student at XJTLU. Useful Android and web products, supervised human-AI research, and a focus on software engineering internships.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    type: "website",
    url: "/",
    title: "Useful software, built for people | Adrián Muñoz Atienza",
    description:
      "Android and web products built with attention to people, data and delivery. Explore LockIn, Setline and supervised VIDEO-RESCUE research.",
    images: [
      {
        url: "/social-profile-en.png",
        width: 1200,
        height: 630,
        alt: "Adrián Muñoz Atienza — Android, web and human-centered AI research"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Useful software, built for people | Adrián Muñoz Atienza",
    description:
      "Android and web products built with attention to people, data and delivery. Explore LockIn, Setline and supervised VIDEO-RESCUE research.",
    images: ["/social-profile-en.png"]
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
