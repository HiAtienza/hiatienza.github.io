import type { Metadata } from "next";
import { AboutPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adrián Muñoz Atienza’s path from Spain to China, his focus on human-centered software and the university-timetable frustration that became LockIn.",
  alternates: { canonical: "/about/", languages: { en: "/about/", es: "/es/about/" } },
  openGraph: {
    url: "/about/",
    title: "About | Adrián Muñoz Atienza",
    description:
      "Computer Science student in Suzhou. Software engineering, useful products and a path from Madrid to XJTLU.",
    images: ["/social-profile-en.png"]
  }
};

export default function Page() {
  return <AboutPage locale="en" />;
}
