"use client";

import { useRef, type ReactNode } from "react";

export function MobileNavigation({
  locale,
  children
}: {
  locale: "en" | "es";
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details
      className="nav-menu"
      ref={ref}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a") && ref.current) ref.current.open = false;
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && ref.current?.open) {
          ref.current.open = false;
          ref.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label={locale === "en" ? "Open navigation" : "Abrir navegación"}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </summary>
      <nav aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
        {children}
      </nav>
    </details>
  );
}
