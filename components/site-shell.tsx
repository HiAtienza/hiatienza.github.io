import Link from "next/link";
import type { ReactNode } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { MotionObserver } from "@/components/motion-observer";
import { copy, external, route, type Locale, type NavigationItem } from "@/lib/site-data";

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
  const navigation: readonly NavigationItem[] = [
    { href: route(locale, "/#work"), label: t.nav.work },
    { href: route(locale, "/about/"), label: t.nav.about },
    { href: route(locale, "/research/"), label: t.nav.research },
    { href: route(locale, "/#contact"), label: t.nav.contact }
  ];
  const navigationLinks = (
    <>
      {navigation.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          aria-current={href === route(locale, path) ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
      <a className="nav-cv" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
        {locale === "en" ? "CV" : "CV · EN"}
      </a>
      <Link className="language-link" href={route(other, path)} lang={other}>
        {t.nav.language}
      </Link>
    </>
  );
  return (
    <>
      <MotionObserver />
      <a className="skip-link" href="#main" lang={locale}>
        {locale === "en" ? "Skip to content" : "Saltar al contenido"}
      </a>
      <header className="site-header" lang={locale}>
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
          <MobileNavigation locale={locale}>{navigationLinks}</MobileNavigation>
        </div>
      </header>
      <main id="main" lang={locale} tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer" lang={locale}>
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
