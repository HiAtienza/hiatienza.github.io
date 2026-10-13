export function HeroImage() {
  return (
    <picture className="hero-image">
      <source media="(min-width: 900px)" srcSet="/images/hero-1584.webp" type="image/webp" />
      <source srcSet="/images/hero-1200.avif" type="image/avif" />
      <source srcSet="/images/hero-1200.webp" type="image/webp" />
      <img src="/images/hero-1200.jpg" decoding="async" alt="" width="1200" height="300" />
    </picture>
  );
}

export function Portrait({
  locale = "en",
  eager = false
}: {
  locale?: "en" | "es";
  eager?: boolean;
}) {
  return (
    <picture className="portrait">
      <source srcSet="/images/profile-800.avif" type="image/avif" />
      <source
        srcSet="/images/profile-400.webp 400w, /images/profile-800.webp 800w"
        sizes="(max-width: 780px) 80vw, 420px"
        type="image/webp"
      />
      <img
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        src="/images/profile-800.jpg"
        alt={
          locale === "en" ? "Portrait of Adrián Muñoz Atienza" : "Retrato de Adrián Muñoz Atienza"
        }
        width="800"
        height="800"
      />
    </picture>
  );
}
