export function FlowDiagram({ type }: { type: "coordination" | "architecture" | "calendar" }) {
  const labels =
    type === "coordination"
      ? ["Reports", "Map & media", "Evidence", "Human decision"]
      : type === "architecture"
        ? ["UI", "Learning domain", "Persistence", "Authentication"]
        : ["Time grid", "Goals", "Local preferences", "Live wallpaper"];
  return (
    <div className={`diagram ${type}`} role="img" aria-label={`${type} system diagram`}>
      <span className="diagram-caption">Simplified public system view</span>
      <div className="diagram-flow">
        {labels.map((label, index) => (
          <span key={label} className={index === labels.length - 1 ? "final-node" : ""}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
