export function HeroImage() {
  return (
    <picture className="hero-image">
      <source media="(min-width: 900px)" srcSet="/images/hero-1584.webp" type="image/webp" />
      <source srcSet="/images/hero-1200.avif" type="image/avif" />
      <source srcSet="/images/hero-1200.webp" type="image/webp" />
      <img src="/images/hero-1200.jpg" alt="" width="1200" height="300" />
    </picture>
  );
}

export function Portrait() {
  return (
    <picture className="portrait">
      <source srcSet="/images/profile-800.avif" type="image/avif" />
      <source srcSet="/images/profile-800.webp" type="image/webp" />
      <img
        src="/images/profile-800.jpg"
        alt="Portrait of Adrián Muñoz Atienza"
        width="800"
        height="800"
      />
    </picture>
  );
}
