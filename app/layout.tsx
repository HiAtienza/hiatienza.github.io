import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adrián Muñoz Atienza | Software Engineering Portfolio",
    template: "%s | Adrián Muñoz Atienza"
  },
  description:
    "Bilingual portfolio of Adrián Muñoz Atienza, a Computer Science student building human-centred Android, web and applied-AI products.",
  alternates: { canonical: "/", languages: { en: "/", es: "/es/" } },
  openGraph: {
    type: "website",
    url: "/",
    title: "Adrián Muñoz Atienza | Software Engineering Portfolio",
    description: "Human-centred Android, web and applied-AI products.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Adrián Muñoz Atienza portfolio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Muñoz Atienza | Software Engineering Portfolio",
    description: "Human-centred Android, web and applied-AI products.",
    images: ["/og.png"]
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adrián Muñoz Atienza",
    url: siteUrl,
    jobTitle: "Computer Science Student",
    sameAs: ["https://github.com/HiAtienza", "https://www.linkedin.com/in/inmunozatienza"]
  };
  return (
    <html lang="en">
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
