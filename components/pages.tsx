import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionLink, MetadataList } from "@/components/ui";
import { FlowDiagram } from "@/components/diagram";
import { LinkedInProfileBadge } from "@/components/linkedin-profile-badge";
import { CurrentProductsAbout, LockInStory } from "@/components/lock-in-story";
import { ProductShowcase } from "@/components/product-capture";
import { SetlineStory } from "@/components/setline-story";
import { Portrait } from "@/components/media";
import { SignalField } from "@/components/signal-field";
import { SiteShell } from "@/components/site-shell";
import {
  VideoRescueFigure,
  VideoRescueFindings,
  VideoRescueStory
} from "@/components/video-rescue-story";
import {
  aboutPages,
  copy,
  external,
  projects,
  route,
  slugs,
  type Locale,
  type ProjectSlug
} from "@/lib/site-data";

function ProjectPreview({
  slug,
  locale,
  caseStudy = false
}: {
  slug: ProjectSlug;
  locale: Locale;
  caseStudy?: boolean;
}) {
  switch (slug) {
    case "lock-in":
      return <ProductShowcase product="lock-in" locale={locale} eager={caseStudy} />;
    case "video-rescue":
      return (
        <VideoRescueFigure
          locale={locale}
          compact={!caseStudy}
          asset={caseStudy ? "workflow" : "workspace"}
          eager={caseStudy}
        />
      );
    case "setline":
      return <ProductShowcase product="setline" locale={locale} eager={caseStudy} />;
  }
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <SiteShell locale={locale} path="/">
      <section className="hero" aria-labelledby="hero-title">
        <div className="page-wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="button-row">
              <ActionLink href={route(locale, "/projects/lock-in/")}>{t.hero.work}</ActionLink>
              <ActionLink variant="secondary" href={route(locale, "/about/")}>
                {t.hero.about}
              </ActionLink>
              <a className="text-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
                {t.hero.cv} <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul
              className="hero-signals"
              aria-label={locale === "en" ? "Availability" : "Disponibilidad"}
            >
              {t.hero.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
          <div className="hero-system">
            <SignalField locale={locale} />
            <div className="hero-portrait">
              <Portrait locale={locale} eager />
              <p>Adrián · Suzhou, China</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section" aria-labelledby="work-title">
        <div className="page-wrap section-heading" data-reveal>
          <p className="eyebrow">{t.projects.label}</p>
          <div>
            <h2 id="work-title">{t.projects.title}</h2>
            <p>
              {locale === "en"
                ? "LockIn makes everyday plans and attention visible. Setline keeps workout logging and progress clear. VIDEO-RESCUE explores human-AI coordination through supervised research."
                : "LockIn hace visibles los planes y la atención. Setline facilita registrar entrenamientos y entender el progreso. VIDEO-RESCUE explora la coordinación persona-IA en investigación supervisada."}
            </p>
          </div>
        </div>
        <div className="project-list page-wrap">
          {slugs.map((slug) => (
            <ProjectFeature key={slug} locale={locale} slug={slug} />
          ))}
        </div>
      </section>

      <section className="section research-story" aria-labelledby="research-title">
        <div className="page-wrap research-layout">
          <div data-reveal>
            <p className="eyebrow">{t.research.label}</p>
            <h2 id="research-title">{t.research.title}</h2>
            <p>{t.research.body}</p>
            <Link className="arrow-link light-link" href={route(locale, "/research/")}>
              {t.research.link} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div data-reveal>
            <FlowDiagram type="coordination" locale={locale} />
          </div>
        </div>
      </section>

      <section id="process" className="section process-section" aria-labelledby="process-title">
        <div className="page-wrap">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.process.label}</p>
            <div>
              <h2 id="process-title">{t.process.title}</h2>
              <p>{t.process.body}</p>
            </div>
          </div>
          <ol className="process-path">
            {t.process.steps.map((step, index) => (
              <li key={step} data-reveal style={{ "--step": index } as CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section specialization-section" aria-labelledby="specialization-title">
        <div className="page-wrap">
          <div className="specialization-intro" data-reveal>
            <p className="eyebrow">{t.specialization.label}</p>
            <h2 id="specialization-title">{t.specialization.title}</h2>
            <p>{t.specialization.intro}</p>
          </div>
          <ol className="specialization-path">
            {t.specialization.parts.map(([title, body], index) => (
              <li key={title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <div className="specialization-outcome" data-reveal>
            <span aria-hidden="true">→</span>
            <p>{t.specialization.outcome}</p>
            <Link className="arrow-link" href={route(locale, "/about/")}>
              {locale === "en" ? "Read my full story" : "Leer mi historia completa"}{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section journey-section" aria-labelledby="journey-title">
        <div className="page-wrap journey-layout">
          <div data-reveal>
            <p className="eyebrow">{t.journey.label}</p>
            <h2 id="journey-title">{t.journey.title}</h2>
          </div>
          <Journey locale={locale} />
        </div>
      </section>

      <section className="section capability-section" aria-labelledby="skills-title">
        <div className="page-wrap">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{t.skills.label}</p>
            <h2 id="skills-title">{t.skills.title}</h2>
          </div>
          <ol
            className="skill-priorities"
            aria-label={locale === "en" ? "Priority capabilities" : "Capacidades prioritarias"}
          >
            {t.skills.priorities.map((skill, index) => (
              <li key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </li>
            ))}
          </ol>
          <div className="capability-list">
            {t.skills.groups.map(([title, body], index) => (
              <article key={title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection locale={locale} showLinkedInBadge />
    </SiteShell>
  );
}

function ProjectFeature({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const project = projects[locale][slug];
  return (
    <article className={`project-feature project-${slug}`} data-reveal>
      <div className="project-copy">
        <p className="project-index">
          {project.order} / {String(slugs.length).padStart(2, "0")}
        </p>
        <p className="context">{project.context}</p>
        <h3>{project.name}</h3>
        <p className="project-problem">{project.problem}</p>
        {slug === "lock-in" && (
          <p className="lock-feature-line">
            {locale === "en"
              ? "Your plans. Your focus. Your next useful action."
              : "Tus planes. Tu enfoque. Tu próxima acción útil."}
          </p>
        )}
        <MetadataList
          className="project-meta"
          items={[
            { label: locale === "en" ? "My role" : "Mi función", value: project.role },
            {
              label: locale === "en" ? "Built with" : "Tecnologías",
              value: project.tech.join(" · ")
            }
          ]}
        />
        <Link className="arrow-link" href={route(locale, `/projects/${slug}/`)}>
          {copy[locale].projects.link} <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="project-visual">
        <ProjectPreview slug={slug} locale={locale} />
        <p>{project.status}</p>
      </div>
    </article>
  );
}

function Journey({ locale }: { locale: Locale }) {
  return (
    <div className="timeline">
      {copy[locale].journey.items.map(({ date, title, detail }) => (
        <article key={`${date}-${title}`} data-reveal>
          <p className="timeline-date">{date}</p>
          <div>
            <h3>{title}</h3>
            <p>{detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = aboutPages[locale];
  const home = copy[locale];
  return (
    <SiteShell locale={locale} path="/about/">
      <article className="about-page">
        <header className="about-hero page-wrap">
          <div data-reveal>
            <p className="eyebrow">{t.label}</p>
            <h1>{t.title}</h1>
            <p className="page-intro">{t.intro}</p>
          </div>
          <div className="about-portrait" data-reveal>
            <Portrait locale={locale} eager />
            <p aria-hidden="true">
              Spain <span>↔</span> China
            </p>
          </div>
        </header>

        <section className="section story-section" aria-labelledby="story-title">
          <div className="page-wrap story-layout">
            <div data-reveal>
              <p className="eyebrow">01 · {locale === "en" ? "The path" : "El recorrido"}</p>
              <h2 id="story-title">{t.storyTitle}</h2>
            </div>
            <div className="story-copy" data-reveal>
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="section identity-section">
          <div className="page-wrap identity-grid">
            {t.dual.map((item, index) => (
              <article
                key={item.label}
                className={`identity-card identity-card-${index + 1}`}
                data-reveal
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{item.label}</p>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <CurrentProductsAbout locale={locale} />

        <section className="section principles-section" aria-labelledby="principles-title">
          <div className="page-wrap">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">02 · {locale === "en" ? "Principles" : "Principios"}</p>
              <h2 id="principles-title">{t.principlesTitle}</h2>
            </div>
            <div className="principles-grid">
              {t.principles.map(([title, body], index) => (
                <article key={title} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section facts-section" aria-labelledby="facts-title">
          <div className="page-wrap facts-layout">
            <div data-reveal>
              <p className="eyebrow">03 · {locale === "en" ? "Now" : "Ahora"}</p>
              <h2 id="facts-title">{t.factsTitle}</h2>
            </div>
            <ul data-reveal>
              {t.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="page-wrap about-cta" data-reveal>
            <ActionLink href={route(locale, "/#work")}>{t.cta}</ActionLink>
          </div>
        </section>

        <section className="section page-wrap mini-journey" aria-labelledby="about-journey-title">
          <p className="eyebrow">04 · {home.journey.label}</p>
          <h2 id="about-journey-title">{home.journey.title}</h2>
          <Journey locale={locale} />
        </section>
        <ContactSection locale={locale} />
      </article>
    </SiteShell>
  );
}

export function ProjectPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const project = projects[locale][slug];
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextProject = projects[locale][nextSlug];
  const labels =
    locale === "en"
      ? {
          caseStudy: "Case study",
          problem: "The problem",
          role: "My role",
          system: "From signal to system",
          decisions: "What the work demonstrates",
          tech: "Technology",
          boundaries: "Evidence boundary",
          limitations: "Current limitations",
          next: "Next step",
          source: "Source availability",
          nextProject: "Next case study"
        }
      : {
          caseStudy: "Caso de estudio",
          problem: "El problema",
          role: "Mi función",
          system: "De señal a sistema",
          decisions: "Qué demuestra el trabajo",
          tech: "Tecnología",
          boundaries: "Límite de evidencia",
          limitations: "Limitaciones actuales",
          next: "Siguiente paso",
          source: "Disponibilidad del código",
          nextProject: "Siguiente caso"
        };
  const boundary =
    locale === "en"
      ? "This public case study uses non-sensitive descriptions, illustrations and labelled app captures with fictional demonstration data. Personal calendars, participant sessions, private source, live environments and operational data are not published."
      : "Este caso público utiliza descripciones no sensibles, ilustraciones y capturas identificadas con datos ficticios de demostración. No se publican calendarios personales, sesiones de participantes, código privado, entornos activos ni datos operativos.";
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    creator: { "@type": "Person", name: "Adrián Muñoz Atienza" },
    description: project.summary
  };

  return (
    <SiteShell locale={locale} path={`/projects/${slug}/`}>
      <article className={`case-study case-${slug}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
        />
        <header className="case-hero page-wrap">
          <div data-reveal>
            <p className="eyebrow">
              {project.order} · {labels.caseStudy}
            </p>
            <h1>{project.name}</h1>
            <p className="context">{project.context}</p>
            <p className="case-summary">{project.summary}</p>
          </div>
          <div className="case-hero-visual" data-reveal>
            <ProjectPreview slug={slug} locale={locale} caseStudy />
          </div>
        </header>

        <section className="case-overview" aria-labelledby="problem-title">
          <div className="page-wrap case-overview-grid">
            <article data-reveal>
              <h2 id="problem-title" className="eyebrow">
                {labels.problem}
              </h2>
              <p className="case-large-copy">{project.problem}</p>
            </article>
            <MetadataList
              className="case-meta"
              items={[
                { label: labels.role, value: project.role },
                { label: locale === "en" ? "Status" : "Estado", value: project.status },
                { label: labels.tech, value: project.tech.join(" · ") }
              ]}
            />
          </div>
        </section>

        {slug === "lock-in" && <LockInStory locale={locale} />}
        {slug === "video-rescue" && <VideoRescueStory locale={locale} />}
        {slug === "setline" && <SetlineStory locale={locale} />}

        <section className="section page-wrap case-decisions" aria-labelledby="decisions-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{labels.system}</p>
            <h2 id="decisions-title">{labels.decisions}</h2>
          </div>
          <div className="case-facts">
            {project.facts.map((fact, index) => (
              <article key={fact.title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section evidence-section" aria-labelledby="evidence-title">
          <div className="page-wrap evidence-grid">
            <article data-reveal>
              <h2 id="evidence-title" className="eyebrow">
                {labels.boundaries}
              </h2>
              <p>{boundary}</p>
            </article>
            <article data-reveal>
              <h3 className="eyebrow">{labels.limitations}</h3>
              <p>{project.limitation}</p>
            </article>
            <article data-reveal>
              <h3 className="eyebrow">{labels.next}</h3>
              <p>{project.next}</p>
            </article>
          </div>
          <div className="page-wrap source-note" data-reveal>
            <strong>{labels.source}:</strong> {copy[locale].projects.source}.
          </div>
        </section>

        <Link className="next-project" href={route(locale, `/projects/${nextSlug}/`)}>
          <span>{labels.nextProject}</span>
          <strong>{nextProject.name}</strong>
          <i aria-hidden="true">→</i>
        </Link>
      </article>
    </SiteShell>
  );
}

export function ResearchPage({ locale }: { locale: Locale }) {
  const t = copy[locale].researchPage;
  return (
    <SiteShell locale={locale} path="/research/">
      <article className="research-page">
        <header className="prose-hero page-wrap" data-reveal>
          <p className="eyebrow">{t.label}</p>
          <h1>{t.title}</h1>
          <p className="page-intro">{t.intro}</p>
        </header>
        <section
          className="research-diagram-band"
          aria-label={
            locale === "en"
              ? "Coordination prototype overview"
              : "Vista general del prototipo de coordinación"
          }
        >
          <div className="page-wrap" data-reveal>
            <VideoRescueFigure locale={locale} />
            <Link
              className="arrow-link rescue-case-link"
              href={route(locale, "/projects/video-rescue/")}
            >
              {locale === "en"
                ? "Explore the prototype and its workflow"
                : "Explorar el prototipo y su flujo"}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </section>
        <div className="page-wrap research-sections">
          {t.sections.map(([heading, body], index) => (
            <article key={heading} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{heading}</h2>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <VideoRescueFindings locale={locale} />
        <ContactSection locale={locale} />
      </article>
    </SiteShell>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = copy[locale].privacy;
  return (
    <SiteShell locale={locale} path="/privacy/">
      <article className="prose-page page-wrap">
        <header data-reveal>
          <p className="eyebrow">{t.label}</p>
          <h1>{t.title}</h1>
          <p className="page-intro">{t.intro}</p>
        </header>
        <ul className="privacy-list" data-reveal>
          {t.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="privacy-note" data-reveal>
          {locale === "en"
            ? "This static site has no analytics, cookies, forms, accounts or external fonts. The Contact area may load LinkedIn’s official public-profile badge only when the profile owner enables it with exact markup from LinkedIn’s badge builder."
            : "Este sitio estático no utiliza analítica, cookies, formularios, cuentas ni fuentes externas. La sección de Contacto solo puede cargar la insignia oficial de perfil público de LinkedIn cuando el propietario del perfil la habilita con el marcado exacto del generador de insignias de LinkedIn."}
        </p>
      </article>
    </SiteShell>
  );
}

function ContactSection({
  locale,
  showLinkedInBadge = false
}: {
  locale: Locale;
  showLinkedInBadge?: boolean;
}) {
  const t = copy[locale].contact;
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="page-wrap contact-layout" data-reveal>
        <p className="eyebrow">{t.label}</p>
        <h2 id="contact-title">{t.title}</h2>
        <p>{t.body}</p>
        <div className="button-row">
          <ActionLink
            variant="light"
            href={external.linkedin}
            aria-label={
              locale === "en"
                ? "View Adrián Muñoz Atienza on LinkedIn"
                : "Ver el perfil de Adrián Muñoz Atienza en LinkedIn"
            }
          >
            {t.linkedin}
          </ActionLink>
          <ActionLink variant="ghost" href={external.github}>
            {t.github}
          </ActionLink>
          <a className="light-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
            {t.cv} <span aria-hidden="true">↓</span>
          </a>
          <a className="light-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_Visual.pdf">
            {t.visual} <span aria-hidden="true">↗</span>
          </a>
        </div>
        {showLinkedInBadge ? <LinkedInProfileBadge /> : null}
      </div>
    </section>
  );
}
