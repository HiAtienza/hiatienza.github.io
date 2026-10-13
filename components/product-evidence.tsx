import type { Locale } from "@/lib/site-data";
import type { MobileProjectSlug } from "@/lib/mobile-products";

export function ProductEvidence({
  product,
  locale
}: {
  product: MobileProjectSlug;
  locale: Locale;
}) {
  const en = locale === "en";
  const lock = product === "lock-in";
  const items = lock
    ? [
        [
          "0.1.11",
          en ? "Google Play internal release" : "Entrega interna en Google Play",
          en ? "Code 12 · 13 Oct 2026" : "Código 12 · 13 oct 2026"
        ],
        [
          "1,410",
          en ? "JVM tests passing" : "Pruebas JVM correctas",
          en
            ? "Release receipt · 0 failures / errors / skips"
            : "Recibo de release · 0 fallos / errores / omisiones"
        ],
        [
          "OnePlus",
          en ? "Selected physical checks" : "Comprobaciones físicas seleccionadas",
          en ? "Wallpaper, study and focus · 0.1.9" : "Fondo, estudio y enfoque · 0.1.9"
        ]
      ]
    : [
        [
          "1.4.0",
          en ? "Installed from internal Play testing" : "Instalada desde pruebas internas de Play",
          en
            ? "Code 9 · OnePlus installation receipt"
            : "Código 9 · recibo de instalación en OnePlus"
        ],
        [
          "126",
          en ? "Documented unit tests" : "Pruebas unitarias documentadas",
          en
            ? "Oct 2026 QA · plus seven browser flows"
            : "QA de oct 2026 · siete flujos de navegador"
        ],
        [
          "Android",
          en ? "Isolated physical QA" : "QA físico con datos aislados",
          en
            ? "Routines, backup recovery and rest alerts"
            : "Rutinas, restauración y alertas de descanso"
        ]
      ];
  return (
    <section
      className="product-evidence"
      aria-label={en ? "Documented delivery and validation" : "Entrega y validación documentadas"}
    >
      <div className="page-wrap">
        <p className="eyebrow">
          {en
            ? "Built, checked, delivered to testers"
            : "Implementado, comprobado y entregado a testers"}
        </p>
        <dl className="product-evidence-grid">
          {items.map(([value, label, detail]) => (
            <div key={value}>
              <dt>
                {label}
                <span>{detail}</span>
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="product-evidence-note">
          {lock
            ? en
              ? "October 2026 release / QA records. Release lint: 0 errors, 52 warnings. Physical checks use the stated earlier version; the Redmi Note 11 guide is pending validation."
              : "Registros de release y QA de octubre de 2026. Lint de release: 0 errores, 52 advertencias. Las pruebas físicas corresponden a la versión indicada; la guía Redmi Note 11 sigue pendiente."
            : en
              ? "October 2026 release / QA records. Play bundle and validated assets were compared. These checks describe implementation and delivery; they are not adoption or fitness results."
              : "Registros de release y QA de octubre de 2026. Se compararon el bundle de Play y los assets validados. Estas comprobaciones acreditan implementación y entrega; no son cifras de adopción ni resultados deportivos."}
        </p>
      </div>
    </section>
  );
}
