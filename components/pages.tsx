import Link from "next/link";
import type { CSSProperties } from "react";
import { ActionLink, MetadataList } from "@/components/ui";
import { LinkedInProfileBadge } from "@/components/linkedin-profile-badge";
import { LockInStory } from "@/components/lock-in-story";
import { ProductShowcase } from "@/components/product-capture";
import { SetlineStory } from "@/components/setline-story";
import { Portrait } from "@/components/media";
import {
  CaseLearning,
  PersonalIntroduction,
  ProfileDirection,
  ProfilePortrait,
  ProfileProof,
  StrengthsSection
} from "@/components/profile-sections";
import { profileCopy, projectPerspectives } from "@/lib/portfolio-profile";
import { SiteShell } from "@/components/site-shell";
import { VideoRescueFigure, VideoRescueStory } from "@/components/video-rescue-story";
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
  const profile = profileCopy[locale];
  return (
    <SiteShell locale={locale} path="/">
      <section className="hero personal-hero" aria-labelledby="hero-title">
        <div className="page-wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 id="hero-title">{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <p className="hero-goal">{profile.goal}</p>
            <div className="button-row">
              <ActionLink href={route(locale, "/#work")}>{t.hero.work}</ActionLink>
              <ActionLink variant="secondary" href={route(locale, "/about/")}>
                {t.hero.about}
              </ActionLink>
              <a className="text-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf">
                {t.hero.cv} <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul
              className="hero-signals"
              aria-label={locale === "en" ? "My current situation" : "Mi situación actual"}
            >
              {t.hero.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
          <ProfilePortrait locale={locale} />
        </div>
      </section>
      <ProfileProof locale={locale} />
      <section id="work" className="section work-section" aria-labelledby="work-title">
        <div className="page-wrap section-heading" data-reveal>
          <p className="eyebrow">{t.projects.label}</p>
          <div>
            <h2 id="work-title">{t.projects.title}</h2>
            <p>{profile.introduction}</p>
          </div>
        </div>
        <div className="project-list page-wrap">
          {slugs.map((slug) => (
            <ProjectFeature key={slug} locale={locale} slug={slug} />
          ))}
        </div>
      </section>
      <StrengthsSection locale={locale} />
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
      <PersonalIntroduction locale={locale} />
      <ContactSection locale={locale} showLinkedInBadge />
    </SiteShell>
  );
}

function ProjectFeature({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const project = projects[locale][slug];
  const perspective = projectPerspectives[locale][slug];
  return (
    <article className={`project-feature project-${slug}`} data-reveal>
      <div className="project-copy">
        <p className="project-index">
          {project.order} / {String(slugs.length).padStart(2, "0")}
        </p>
        <p className="context">{project.context}</p>
        <h3>{project.name}</h3>
        <p className="project-problem">{perspective.summary}</p>
        <MetadataList
          className="project-meta"
          items={[
            {
              label: locale === "en" ? "My contribution" : "Mi aportación",
              value: perspective.contribution
            },
            { label: locale === "en" ? "Focus" : "Enfoque", value: perspective.focus }
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

        <ProfileDirection locale={locale} />

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
          boundaries: "About these materials",
          limitations: "Validation and scope",
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
          boundaries: "Sobre estos materiales",
          limitations: "Validación y alcance",
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
            <nav
              className="case-reading-nav"
              aria-label={locale === "en" ? "Explore this case" : "Recorrer este caso"}
            >
              <a href="#problem-title">{locale === "en" ? "My work" : "Mi trabajo"}</a>
              <a href="#decisions-title">
                {locale === "en" ? "Technical decisions" : "Decisiones técnicas"}
              </a>
              <a href="#case-learning-title">{locale === "en" ? "Learning" : "Aprendizajes"}</a>
            </nav>
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

        <CaseLearning locale={locale} slug={slug} />
        <section className="section evidence-section" aria-labelledby="evidence-title">
          <div className="page-wrap evidence-grid case-scope-grid">
            <article data-reveal>
              <h2 id="evidence-title" className="eyebrow">
                {labels.limitations}
              </h2>
              <p>{project.limitation}</p>
            </article>
            <article data-reveal>
              <h3 className="eyebrow">{labels.next}</h3>
              <p>{project.next}</p>
            </article>
          </div>
          <details className="page-wrap materials-note">
            <summary>{labels.boundaries}</summary>
            <p>{boundary}</p>
            <p>
              <strong>{labels.source}:</strong> {copy[locale].projects.source}.
            </p>
          </details>
        </section>
        <ContactSection locale={locale} />

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
        <section className="section research-summary" aria-labelledby="research-summary-title">
          <div className="page-wrap research-summary-layout">
            <div data-reveal>
              <p className="eyebrow">
                {locale === "en" ? "What the study points to" : "Qué orienta el estudio"}
              </p>
              <h2 id="research-summary-title">
                {locale === "en"
                  ? "Understanding support, trust and control."
                  : "Entender el apoyo, la confianza y el control."}
              </h2>
            </div>
            <div data-reveal>
              <p className="rescue-research-status">
                {locale === "en"
                  ? "Data collection complete · Fuller analysis ongoing"
                  : "Recogida de datos completada · Análisis más completo en curso"}
              </p>
              <p>
                {locale === "en"
                  ? "Preliminary team feedback points to useful information support, requests for assistance across the team and a gap in the assistant’s geographic context. These observations guide the next iteration of the research prototype."
                  : "Los comentarios preliminares del equipo apuntan a apoyo informativo útil, peticiones de asistencia para todo el equipo y una integración pendiente del contexto geográfico. Estas observaciones orientan la siguiente iteración del prototipo."}
              </p>
              <Link
                className="arrow-link"
                href={route(locale, "/projects/video-rescue/#rescue-findings-title")}
              >
                {locale === "en"
                  ? "Read the findings and their scope"
                  : "Leer los hallazgos y su alcance"}{" "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
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
            ? "This static portfolio has no accounts, forms or first-party analytics. The Contact area may load LinkedIn’s public-profile badge and its external resources. Public materials use labelled demonstration data; research participant data and personal training or calendar records are excluded."
            : "Este portfolio estático no tiene cuentas, formularios ni analítica propia. Contacto puede cargar la insignia de perfil público de LinkedIn y sus recursos externos. Los materiales identifican los datos de demostración; se excluyen datos de participantes y registros personales de entrenamiento o calendario."}
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
            {locale === "en" ? "Contact me on LinkedIn" : "Contactar por LinkedIn"}
          </ActionLink>
          <ActionLink variant="ghost" href={external.github}>
            {t.github}
          </ActionLink>
          <a className="light-link" href="/cv/Adrian_Munoz_Atienza_CV_Public_ATS.pdf" hrefLang="en">
            {t.cv} <span aria-hidden="true">↓</span>
          </a>
          <a
            className="light-link"
            href="/cv/Adrian_Munoz_Atienza_CV_Public_Visual.pdf"
            hrefLang="en"
          >
            {t.visual} <span aria-hidden="true">↗</span>
          </a>
        </div>
        {showLinkedInBadge ? <LinkedInProfileBadge /> : null}
      </div>
    </section>
  );
}
