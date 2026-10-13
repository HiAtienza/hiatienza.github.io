"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ActionLink } from "@/components/ui";
import { SiteShell } from "@/components/site-shell";
import { route, type Locale } from "@/lib/site-data";

// A static export needs a real fallback link for old bookmarks without JavaScript.
export function LegacyProject({ locale }: { locale: Locale }) {
  const router = useRouter();
  const destination = route(locale, "/projects/lock-in/");
  useEffect(() => {
    router.replace(destination);
  }, [router, destination]);
  return (
    <SiteShell locale={locale} path="/projects/lock-in/">
      <section className="page-wrap legacy-project" aria-labelledby="legacy-title">
        <p className="eyebrow">{locale === "en" ? "Project updated" : "Proyecto actualizado"}</p>
        <h1 id="legacy-title">LockIn</h1>
        <p>
          {locale === "en"
            ? "The updated project has a new home."
            : "El proyecto actualizado tiene una nueva página."}
        </p>
        <ActionLink href={destination}>
          {locale === "en" ? "Explore LockIn" : "Conoce LockIn"}
        </ActionLink>
      </section>
    </SiteShell>
  );
}
