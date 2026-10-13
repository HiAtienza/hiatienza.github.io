import type { Locale } from "@/lib/site-data";

type DiagramType = "coordination";

const diagramCopy: Record<
  Locale,
  Record<DiagramType, { caption: string; labels: string[]; alt: string }>
> = {
  en: {
    coordination: {
      caption: "Signal → accountable decision support",
      labels: ["Signal / audio", "Transcript", "Evidence", "Interpretation", "Human decision"],
      alt: "Audio signals become transcript segments, linked evidence, interpretation and a human decision."
    }
  },
  es: {
    coordination: {
      caption: "Señal → apoyo responsable a la decisión",
      labels: ["Señal / audio", "Transcripción", "Evidencia", "Interpretación", "Decisión humana"],
      alt: "Las señales de audio se convierten en transcripción, evidencia vinculada, interpretación y una decisión humana."
    }
  }
};

export function FlowDiagram({ type, locale = "en" }: { type: DiagramType; locale?: Locale }) {
  const content = diagramCopy[locale][type];
  return (
    <figure className={`diagram diagram-${type}`} role="img" aria-label={content.alt}>
      <figcaption>{content.caption}</figcaption>
      <div className="diagram-track" aria-hidden="true">
        {content.labels.map((label, index) => (
          <div className="diagram-step" key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </figure>
  );
}
