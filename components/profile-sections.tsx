import Link from "next/link";
import { Portrait } from "@/components/media";
import { profileCopy, projectPerspectives } from "@/lib/portfolio-profile";
import { route, type Locale, type ProjectSlug } from "@/lib/site-data";

export function ProfilePortrait({ locale }: { locale: Locale }) {
  return (
    <figure className="profile-portrait">
      <Portrait locale={locale} eager />
      <figcaption>
        <strong>Adrián Muñoz Atienza</strong>
        <p>{profileCopy[locale].portraitNote}</p>
      </figcaption>
    </figure>
  );
}

export function ProfileProof({ locale }: { locale: Locale }) {
  return (
    <section
      className="profile-proof"
      aria-label={
        locale === "en" ? "My current work and next step" : "Mi trabajo actual y siguiente paso"
      }
    >
      <div className="page-wrap profile-proof-grid">
        {profileCopy[locale].proof.map((item) => (
          <Link key={item.title} href={route(locale, item.path)}>
            <span className="eyebrow">{item.label}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
            <span className="proof-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function StrengthsSection({ locale }: { locale: Locale }) {
  const t = profileCopy[locale].strengths;
  return (
    <section className="section strengths-section" aria-labelledby="strengths-title">
      <div className="page-wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t.label}</p>
          <div>
            <h2 id="strengths-title">{t.title}</h2>
            <p>{t.intro}</p>
          </div>
        </div>
        <div className="strengths-grid">
          {t.items.map((item, index) => (
            <article key={item.title} data-reveal>
              <span className="strength-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className="arrow-link" href={route(locale, `/projects/${item.slug}/`)}>
                {item.example} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProfileDirection({ locale }: { locale: Locale }) {
  const t = profileCopy[locale].direction;
  return (
    <section className="section profile-direction" aria-labelledby="direction-title">
      <div className="page-wrap direction-layout">
        <div data-reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 id="direction-title">{t.title}</h2>
          <p>{t.body}</p>
          <p>{t.next}</p>
        </div>
        <div className="direction-skills" data-reveal>
          <p className="eyebrow">
            {locale === "en"
              ? "Tools I use in these projects"
              : "Herramientas que utilizo en estos proyectos"}
          </p>
          <dl>
            {t.skills.map(([title, text]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
          <p className="direction-note">
            {locale === "en"
              ? "My product work uses Codex-assisted implementation, with requirements, UX priorities and validation guided by the project context."
              : "El desarrollo de producto utiliza implementación asistida por Codex, con requisitos, prioridades de UX y validación guiados por el contexto del proyecto."}
          </p>
        </div>
      </div>
    </section>
  );
}

export function PersonalIntroduction({ locale }: { locale: Locale }) {
  const t = profileCopy[locale].story;
  return (
    <section className="section personal-introduction" aria-labelledby="personal-title">
      <div className="page-wrap personal-layout">
        <div data-reveal>
          <p className="eyebrow">{t.label}</p>
          <h2 id="personal-title">{t.title}</h2>
        </div>
        <div data-reveal>
          <p>{t.text}</p>
          <Link className="arrow-link" href={route(locale, "/about/")}>
            {t.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CaseLearning({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const t = projectPerspectives[locale][slug];
  return (
    <section className="section case-learning" aria-labelledby="case-learning-title">
      <div className="page-wrap case-learning-layout">
        <div data-reveal>
          <p className="eyebrow">
            {locale === "en" ? "What I take forward" : "Qué me llevo de este trabajo"}
          </p>
          <h2 id="case-learning-title">
            {locale === "en"
              ? "The learning behind the product."
              : "El aprendizaje detrás del proyecto."}
          </h2>
        </div>
        <div data-reveal>
          <p className="learning-lead">{t.learning}</p>
          <p>{t.connection}</p>
          <Link className="arrow-link" href={route(locale, "/about/")}>
            {locale === "en" ? "See how I work" : "Conocer cómo trabajo"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
