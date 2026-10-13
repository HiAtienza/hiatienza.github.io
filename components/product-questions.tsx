import type { Locale } from "@/lib/site-data";

export function ProductQuestions({
  locale,
  id,
  questions
}: {
  locale: Locale;
  id: string;
  questions: readonly (readonly [question: string, answer: string])[];
}) {
  const en = locale === "en";
  return (
    <section className="section page-wrap lock-faq" aria-labelledby={`${id}-title`}>
      <p className="eyebrow">{en ? "Practical questions" : "Preguntas prácticas"}</p>
      <h2 id={`${id}-title`}>
        {en ? "How it fits into a real day." : "Cómo encaja en el día a día."}
      </h2>
      {questions.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}
