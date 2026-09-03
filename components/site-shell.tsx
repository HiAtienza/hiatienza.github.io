import Link from "next/link";
import type { ReactNode } from "react";
import { copy, external, route, type Locale } from "@/lib/site-data";

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = copy[locale];
  const other = locale === "en" ? "es" : "en";
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <Link className="brand" href={route(locale)} aria-label="Adrián Muñoz Atienza home">
            <span>AM</span>
            <strong>Adrián Muñoz Atienza</strong>
          </Link>
          <nav aria-label="Primary navigation">
            <Link href={`${route(locale)}#work`}>{t.nav.work}</Link>
            <Link href={`${route(locale)}/research/`}>{t.nav.research}</Link>
            <Link href={`${route(locale)}#process`}>{t.nav.process}</Link>
            <Link href={`${route(locale)}#contact`}>{t.nav.contact}</Link>
            <Link className="language-link" href={route(other)} lang={other}>
              {t.nav.language}
            </Link>
          </nav>
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
          <Link href={`${route(locale)}/privacy/`}>{t.privacy.label}</Link>
        </div>
      </footer>
    </>
  );
}
