import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { ActionLink } from "@/components/ui";
import { cvCopy, cvDocument } from "@/lib/cv";
import { route, type Locale } from "@/lib/site-data";

export function CvPage({ locale }: { locale: Locale }) {
  const t = cvCopy[locale];
  const en = locale === "en";
  const presentations = [
    {
      slug: "video-rescue",
      title: "VIDEO-RESCUE",
      image: "/images/video-rescue-nov-overview-small.webp",
      description: en
        ? "Supervised research at XJTLU: inspect the reports behind an AI suggestion before deciding what to do next."
        : "Investigación supervisada en XJTLU: consultar los informes que sustentan una sugerencia de IA antes de decidir cómo actuar.",
      caption: en
        ? "Prototype · fictional mission data · map © OpenStreetMap contributors"
        : "Prototipo · misión ficticia · mapa © colaboradores de OpenStreetMap"
    },
    {
      slug: "lock-in",
      title: "LockIn",
      image: "/images/lock-in/locked-focus.webp",
      description: en
        ? "Android planning at a glance: a shared layout for the preview and the wallpaper, checked on a OnePlus."
        : "Organización en Android de un vistazo: una distribución compartida entre vista previa y fondo, comprobada en un OnePlus.",
      caption: en
        ? "OnePlus capture · example content"
        : "Captura de OnePlus · contenido de ejemplo"
    },
    {
      slug: "setline",
      title: "Setline",
      image: en ? "/images/setline/routine-en.webp" : "/images/setline/routine.webp",
      description: en
        ? "An offline workout log where sessions keep their own targets and history as routine templates change."
        : "Un registro de entrenamiento sin conexión donde las sesiones conservan sus objetivos e historial aunque cambien las plantillas.",
      caption: en ? "App capture · sample routine" : "Captura de la app · rutina de ejemplo"
    }
  ];
  return (
    <SiteShell locale={locale} path="/cv/">
      <section className="section page-wrap cv-hero" aria-labelledby="cv-title">
        <div className="cv-introduction">
          <p className="eyebrow">Adrián Muñoz Atienza</p>
          <h1 id="cv-title">{t.title}</h1>
          <p className="page-intro">{t.intro}</p>
          <nav className="cv-languages" aria-label={t.languages}>
            <Link href="/cv/" hrefLang="en" lang="en" aria-current={en ? "page" : undefined}>
              English
            </Link>
            <Link href="/es/cv/" hrefLang="es" lang="es" aria-current={!en ? "page" : undefined}>
              Español
            </Link>
          </nav>
          <p className="eyebrow cv-document-label">{t.label}</p>
          <div className="button-row">
            <ActionLink href={cvDocument(locale)} hrefLang={locale}>
              {t.visual} <span aria-hidden="true">↗</span>
            </ActionLink>
            <a className="text-link" href={cvDocument(locale)} hrefLang={locale} download>
              {t.download} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="cv-ats">
            <a className="text-link" href={cvDocument(locale, "ATS")} hrefLang={locale} download>
              {t.ats} <span aria-hidden="true">↓</span>
            </a>
            <p>{t.atsDescription}</p>
          </div>
        </div>
        <figure className="cv-preview">
          <a href={cvDocument(locale)} hrefLang={locale} aria-label={t.visual}>
            <Image
              src={`/images/cv-visual-${locale}.webp`}
              alt={t.preview}
              width={900}
              height={1273}
              sizes="(max-width: 780px) 92vw, 520px"
              loading="eager"
            />
          </a>
          <figcaption>{t.label}</figcaption>
        </figure>
      </section>
      <section className="section cv-presentations" aria-labelledby="cv-projects-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">
              {en ? "Projects & presentations" : "Proyectos y presentaciones"}
            </p>
            <div>
              <h2 id="cv-projects-title">{t.projectsTitle}</h2>
              <p>{t.projectsIntro}</p>
            </div>
          </div>
          <div className="cv-project-grid">
            {presentations.map((project) => (
              <article className="cv-project" key={project.slug}>
                <div className="cv-project-image">
                  <Image src={project.image} alt="" fill sizes="(max-width: 780px) 90vw, 380px" />
                </div>
                <p className="cv-project-caption">{project.caption}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link className="arrow-link" href={route(locale, `/projects/${project.slug}/`)}>
                  {t.projectLink}
                  <span className="sr-only">: {project.title}</span>{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
