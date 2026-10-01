import Image from "next/image";
import type { Locale } from "@/lib/site-data";
import { videoRescueAssets, videoRescueStory } from "@/lib/video-rescue-data";

export function VideoRescueFigure({
  locale,
  asset = "workspace",
  compact = false,
  eager = false
}: {
  locale: Locale;
  asset?: keyof typeof videoRescueAssets;
  compact?: boolean;
  eager?: boolean;
}) {
  const image = videoRescueAssets[asset];
  const t = image[locale];
  const preview = compact && asset === "workspace";
  return (
    <figure className={`rescue-figure rescue-figure-${asset}`}>
      <Image
        src={preview ? videoRescueAssets.workspace.previewSrc : image.src}
        alt={t.alt}
        width={preview ? 960 : image.width}
        height={preview ? 600 : image.height}
        sizes="(max-width: 780px) calc(100vw - 48px), 1240px"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
      />
      <figcaption>
        <strong>{t.label}</strong>
        {!compact && <p>{t.caption}</p>}
        <a className="text-link" href={image.src}>
          {locale === "en" ? "View full-size image" : "Ver imagen a tamaño completo"}
          <span aria-hidden="true"> ↗</span>
        </a>
      </figcaption>
    </figure>
  );
}

export function VideoRescueStory({ locale }: { locale: Locale }) {
  const t = videoRescueStory[locale];
  return (
    <>
      <section className="section page-wrap rescue-workflow" aria-labelledby="rescue-flow-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t.label}</p>
          <div>
            <h2 id="rescue-flow-title">{t.title}</h2>
            <p>{t.intro}</p>
          </div>
        </div>
        <ol className="rescue-steps">
          {t.steps.map((step, index) => (
            <li key={step.title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="rescue-workspace" aria-labelledby="rescue-workspace-title">
        <div className="page-wrap">
          <div className="rescue-workspace-intro" data-reveal>
            <h2 id="rescue-workspace-title">{t.workspaceTitle}</h2>
            <p>{t.workspaceBody}</p>
          </div>
          <VideoRescueFigure locale={locale} />
        </div>
      </section>
      <section className="section page-wrap rescue-example" aria-labelledby="rescue-example-title">
        <div data-reveal>
          <p className="eyebrow">{t.assistantLabel}</p>
          <h2 id="rescue-example-title">{t.assistantTitle}</h2>
          <blockquote>{t.question}</blockquote>
          <p>{t.answer}</p>
          <p className="rescue-example-note">{t.uncertainty}</p>
        </div>
        <VideoRescueFigure locale={locale} asset="assistant" />
      </section>
      <VideoRescueFindings locale={locale} />
    </>
  );
}

export function VideoRescueFindings({ locale }: { locale: Locale }) {
  const t = videoRescueStory[locale];
  return (
    <section className="section rescue-findings" aria-labelledby="rescue-findings-title">
      <div className="page-wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t.findingsLabel}</p>
          <div>
            <h2 id="rescue-findings-title">{t.findingsTitle}</h2>
            <p className="rescue-research-status">{t.findingsStatus}</p>
          </div>
        </div>
        <div className="rescue-findings-list">
          {t.findings.map((finding, index) => (
            <article key={finding.title} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{finding.title}</h3>
              <p>{finding.body}</p>
            </article>
          ))}
        </div>
        <div className="rescue-geographic-boundary" data-reveal>
          <h3>{t.boundaryTitle}</h3>
          <p>{t.boundary}</p>
        </div>
        <p className="rescue-source-note">{t.source}</p>
      </div>
    </section>
  );
}
