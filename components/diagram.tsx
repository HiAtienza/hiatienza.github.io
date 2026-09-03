import type { Locale } from "@/lib/site-data";

type DiagramType = "coordination" | "architecture" | "calendar";

const diagramCopy: Record<
  Locale,
  Record<DiagramType, { caption: string; labels: string[]; alt: string }>
> = {
  en: {
    coordination: {
      caption: "Signal → accountable decision support",
      labels: ["Signal / audio", "Transcript", "Evidence", "Interpretation", "Human decision"],
      alt: "Audio signals become transcript segments, linked evidence, interpretation and a human decision."
    },
    architecture: {
      caption: "Route → retained learning",
      labels: ["Route", "Learn", "Attempt", "Evidence", "Mastery", "Retention"],
      alt: "A learning route moves through study, an attempt, evidence, mastery and retention."
    },
    calendar: {
      caption: "Signals → intentional time",
      labels: ["Time", "Signal", "Pattern", "Reflection", "Plan"],
      alt: "Time becomes a signal, pattern, reflection and intentional plan."
    }
  },
  es: {
    coordination: {
      caption: "Señal → apoyo responsable a la decisión",
      labels: ["Señal / audio", "Transcripción", "Evidencia", "Interpretación", "Decisión humana"],
      alt: "Las señales de audio se convierten en transcripción, evidencia vinculada, interpretación y una decisión humana."
    },
    architecture: {
      caption: "Ruta → aprendizaje retenido",
      labels: ["Ruta", "Aprender", "Intento", "Evidencia", "Dominio", "Retención"],
      alt: "Una ruta de aprendizaje avanza por estudio, intento, evidencia, dominio y retención."
    },
    calendar: {
      caption: "Señales → tiempo intencional",
      labels: ["Tiempo", "Señal", "Patrón", "Reflexión", "Plan"],
      alt: "El tiempo se convierte en señal, patrón, reflexión y plan intencional."
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
