import Image from "next/image";
import { productCaptures, type CaptureId } from "@/lib/product-captures";
import type { Locale } from "@/lib/site-data";

export function ProductCapture({
  asset,
  locale,
  compact = false,
  eager = false
}: {
  asset: CaptureId;
  locale: Locale;
  compact?: boolean;
  eager?: boolean;
}) {
  const capture = productCaptures[asset];
  const text = capture.copy[locale];
  return (
    <figure
      className={`product-capture capture-${capture.product} capture-${asset} ${compact ? "product-capture-compact" : ""}`}
    >
      <a
        href={capture.src}
        aria-label={`${locale === "en" ? "View full-size capture" : "Ver captura a tamaño completo"}: ${text.title}`}
      >
        <Image
          src={capture.src}
          alt={text.alt}
          width={capture.width}
          height={capture.height}
          sizes="(max-width: 780px) 85vw, 320px"
          loading={eager ? "eager" : "lazy"}
        />
      </a>
      <figcaption>
        <strong>{text.title}</strong>
        <p>{text.caption}</p>
      </figcaption>
    </figure>
  );
}

export function ProductShowcase({
  product,
  locale,
  eager = false
}: {
  product: "lock-in" | "setline";
  locale: Locale;
  eager?: boolean;
}) {
  return (
    <div className={`product-showcase showcase-${product}`}>
      <ProductCapture
        asset={product === "lock-in" ? "lock-home" : "setline-routine"}
        locale={locale}
        compact
        eager={eager}
      />
      <ProductCapture
        asset={product === "lock-in" ? "lock-modules" : "setline-progress"}
        locale={locale}
        compact
        eager={eager}
      />
    </div>
  );
}

export function ProductScene({
  id,
  locale,
  eyebrow,
  title,
  children,
  assets
}: {
  id: string;
  locale: Locale;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  assets: readonly CaptureId[];
}) {
  return (
    <section className="section product-scene" aria-labelledby={`${id}-title`}>
      <div className="page-wrap product-scene-layout">
        <div className="product-scene-copy" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {children}
        </div>
        <div className={`product-scene-captures ${assets.length === 1 ? "single-capture" : ""}`}>
          {assets.map((asset) => (
            <ProductCapture key={asset} asset={asset} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductGallery({
  locale,
  id,
  title,
  description,
  assets
}: {
  locale: Locale;
  id: string;
  title: string;
  description: string;
  assets: readonly CaptureId[];
}) {
  return (
    <section className="section product-gallery" aria-labelledby={`${id}-title`}>
      <div className="page-wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{locale === "en" ? "Inside the app" : "Dentro de la app"}</p>
          <div>
            <h2 id={`${id}-title`}>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="product-captures">
          {assets.map((asset) => (
            <ProductCapture key={asset} asset={asset} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
