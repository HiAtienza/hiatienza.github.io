import Link from "next/link";
import { FlowDiagram } from "@/components/diagram";
import { HeroImage, Portrait } from "@/components/media";
import { SiteShell } from "@/components/site-shell";
import {
  copy,
  external,
  projects,
  route,
  slugs,
  type Locale,
  type ProjectSlug
} from "@/lib/site-data";

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <section className="hero" aria-labelledby="hero-title">
        <HeroImage />
        <div className="page-wrap hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <p className="hero-meta">{t.hero.meta}</p>
          <div className="button-row">
            <a className="button" href="#work">
              {t.hero.work}
            </a>
            <a
              className="button button-secondary"
              href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf"
            >
              {t.hero.cv}
            </a>
            <a className="text-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_Visual.pdf">
              {t.hero.visual} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="section page-wrap about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">{t.about.label}</p>
          <h2 id="about-title">{t.about.title}</h2>
          <p>{t.about.body}</p>
        </div>
        <div className="about-aside">
          <Portrait />
          <p>{t.about.side}</p>
        </div>
      </section>
      <section id="work" className="section section-tint" aria-labelledby="work-title">
        <div className="page-wrap">
          <p className="eyebrow">{t.projects.label}</p>
          <h2 id="work-title">{t.projects.title}</h2>
          <div className="project-grid">
            {slugs.map((slug) => (
              <ProjectCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section page-wrap research-panel" aria-labelledby="research-title">
        <div>
          <p className="eyebrow">{t.research.label}</p>
          <h2 id="research-title">{t.research.title}</h2>
          <p>{t.research.body}</p>
          <Link className="text-link" href={`${route(locale)}/research/`}>
            {t.research.link} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <FlowDiagram type="coordination" />
      </section>
      <section id="process" className="section section-dark" aria-labelledby="process-title">
        <div className="page-wrap">
          <p className="eyebrow">{t.process.label}</p>
          <h2 id="process-title">{t.process.title}</h2>
          <ol className="process-list">
            {t.process.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <p>{t.process.body}</p>
        </div>
      </section>
      <section className="section page-wrap" aria-labelledby="skills-title">
        <p className="eyebrow">{t.skills.label}</p>
        <h2 id="skills-title">{t.skills.title}</h2>
        <div className="skill-grid">
          {t.skills.groups.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tint" aria-labelledby="journey-title">
        <div className="page-wrap">
          <p className="eyebrow">{t.journey.label}</p>
          <h2 id="journey-title">{t.journey.title}</h2>
          <div className="timeline">
            {t.journey.items.map(([date, title, detail]) => (
              <article key={title}>
                <time>{date}</time>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="section page-wrap contact" aria-labelledby="contact-title">
        <p className="eyebrow">{t.contact.label}</p>
        <h2 id="contact-title">{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <div className="button-row">
          <a className="button" href={external.linkedin}>
            {t.contact.linkedin}
          </a>
          <a className="button button-secondary" href={external.github}>
            {t.contact.github}
          </a>
          <a className="text-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
            {t.contact.cv} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

function ProjectCard({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const project = projects[locale][slug];
  return (
    <article className="project-card">
      <p className="card-number">{project.order}</p>
      <h3>{project.name}</h3>
      <p className="context">{project.context}</p>
      <p>{project.problem}</p>
      <dl>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Tech</dt>
          <dd>{project.tech.join(" · ")}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{project.status}</dd>
        </div>
      </dl>
      <Link className="text-link" href={`${route(locale)}/projects/${slug}/`}>
        {copy[locale].projects.link} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const project = projects[locale][slug];
  const labels =
    locale === "en"
      ? {
          caseStudy: "Case study",
          overview: "System overview",
          tech: "Technology",
          boundaries: "Privacy and evidence boundaries",
          limitations: "Limitations",
          next: "Next steps",
          source: "Source code"
        }
      : {
          caseStudy: "Caso de estudio",
          overview: "Visión general",
          tech: "Tecnología",
          boundaries: "Límites de privacidad y evidencia",
          limitations: "Limitaciones",
          next: "Próximos pasos",
          source: "Código fuente"
        };
  const type =
    slug === "video-rescue"
      ? "coordination"
      : slug === "cybermastery"
        ? "architecture"
        : "calendar";
  const boundary =
    locale === "en"
      ? "This public case study uses only approved, non-sensitive descriptions and a simplified diagram. Source code, internal artifacts, live environments and operational data are not published."
      : "Este caso de estudio público utiliza solo descripciones aprobadas y no sensibles, además de un diagrama simplificado. No se publican el código, los artefactos internos, los entornos activos ni los datos operativos.";
  return (
    <SiteShell locale={locale}>
      <article className="case-study page-wrap">
        <header className="case-header">
          <p className="eyebrow">
            {project.order} · {labels.caseStudy}
          </p>
          <h1>{project.name}</h1>
          <p className="context">{project.context}</p>
          <p className="case-summary">{project.summary}</p>
          <div className="tag-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </header>
        <section>
          <h2>{labels.overview}</h2>
          <FlowDiagram type={type} />
          <p className="status">
            <strong>Status:</strong> {project.status}
          </p>
        </section>
        <section className="case-facts">
          {project.facts.map((fact) => (
            <article key={fact.title}>
              <h2>{fact.title}</h2>
              <p>{fact.text}</p>
            </article>
          ))}
        </section>
        <section>
          <h2>{labels.tech}</h2>
          <p>{project.tech.join(" · ")}</p>
        </section>
        <section>
          <h2>{labels.boundaries}</h2>
          <p>{boundary}</p>
        </section>
        <section>
          <h2>{labels.limitations}</h2>
          <p>{project.limitation}</p>
        </section>
        <section>
          <h2>{labels.next}</h2>
          <p>{project.next}</p>
        </section>
        <aside className="source-note">
          <strong>{labels.source}:</strong> {copy[locale].projects.source}.
        </aside>
      </article>
    </SiteShell>
  );
}

export function ResearchPage({ locale }: { locale: Locale }) {
  const t = copy[locale].researchPage;
  return (
    <SiteShell locale={locale}>
      <article className="prose-page page-wrap">
        <p className="eyebrow">{t.label}</p>
        <h1>{t.title}</h1>
        <p className="page-intro">{t.intro}</p>
        <FlowDiagram type="coordination" />
        <div className="research-sections">
          {t.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = copy[locale].privacy;
  return (
    <SiteShell locale={locale}>
      <article className="prose-page page-wrap">
        <p className="eyebrow">{t.label}</p>
        <h1>{t.title}</h1>
        <p className="page-intro">{t.intro}</p>
        <ul className="privacy-list">
          {t.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p>
          {locale === "en"
            ? "This static site has no analytics, cookies, forms, accounts, external fonts or runtime data requests."
            : "Este sitio estático no utiliza analítica, cookies, formularios, cuentas, fuentes externas ni solicitudes de datos en tiempo de ejecución."}
        </p>
      </article>
    </SiteShell>
  );
}
