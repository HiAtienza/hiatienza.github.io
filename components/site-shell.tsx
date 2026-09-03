import Link from "next/link";
import type { ReactNode } from "react";
import { MotionObserver } from "@/components/motion-observer";
import { copy, external, route, type Locale } from "@/lib/site-data";

export function SiteShell({
  locale,
  path = "/",
  children
}: {
  locale: Locale;
  path?: string;
  children: ReactNode;
}) {
  const t = copy[locale];
  const other = locale === "en" ? "es" : "en";
  const navigationLinks = (
    <>
      <Link href={route(locale, "/#work")}>{t.nav.work}</Link>
      <Link href={route(locale, "/about/")}>{t.nav.about}</Link>
      <Link href={route(locale, "/research/")}>{t.nav.research}</Link>
      <Link href={route(locale, "/#contact")}>{t.nav.contact}</Link>
      <a className="nav-cv" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
        CV
      </a>
      <Link className="language-link" href={route(other, path)} lang={other}>
        {t.nav.language}
      </Link>
    </>
  );
  return (
    <>
      <MotionObserver />
      <a className="skip-link" href="#main">
        {locale === "en" ? "Skip to content" : "Saltar al contenido"}
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href={route(locale)}>
            <span>AM</span>
            <strong>Adrián Muñoz Atienza</strong>
          </Link>
          <nav
            className="desktop-nav"
            aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}
          >
            {navigationLinks}
          </nav>
          <details className="nav-menu">
            <summary aria-label={locale === "en" ? "Open navigation" : "Abrir navegación"}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>
            <nav aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
              {navigationLinks}
            </nav>
          </details>
        </div>
      </header>
      <main id="main" lang={locale} tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div>
          <span>© 2026 Adrián Muñoz Atienza</span>
          <span>{t.footer.split(". ")[1]}</span>
        </div>
        <div>
          <a href={external.linkedin}>LinkedIn</a>
          <a href={external.github}>GitHub</a>
          <Link href={route(locale, "/privacy/")}>{t.privacy.label}</Link>
        </div>
      </footer>
    </>
  );
}
