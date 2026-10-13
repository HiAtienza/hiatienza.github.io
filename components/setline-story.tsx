import { ProductScene } from "@/components/product-capture";
import { ProductEvidence } from "@/components/product-evidence";
import { ProductQuestions } from "@/components/product-questions";
import type { Locale } from "@/lib/site-data";

export function SetlineStory({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const questions: readonly (readonly [question: string, answer: string])[] = en
    ? [
        [
          "How is a workout organised?",
          "Choose an integrated programme or start a free session. Custom routines let you define the exercises, order, target reps, sets, rest and notes. The four integrated programmes are catalogue content; the app’s contribution is the recording and reuse experience."
        ],
        [
          "What does the progress chart measure?",
          "The chart shows estimated one-repetition maximum (1RM) across the last ten sessions per exercise. The Epley formula is weight × (1 + reps / 30): 65 kg × 12 reps gives an estimated 91 kg. It is a calculated indicator, not a measured maximum. Warm-ups are excluded from session volume."
        ],
        [
          "Does it work without an account or connection?",
          "Core training and local records work offline. IndexedDB stores sessions and custom routines. Export a JSON backup and restore it through Android’s system file picker. Physical isolated QA checked routine recovery while keeping personal workout records unchanged."
        ],
        [
          "How do calendars and rest alerts work?",
          "ICS export supports planning on Android. The optional Google Calendar connection is available only on the web. Rest uses an absolute end timestamp and native Android alarms; screen-off sound and vibration were checked on OnePlus with notification / alarm permissions and battery settings configured."
        ],
        [
          "Where can I try Setline?",
          "Version 1.4.0 (9) is distributed through Google Play internal testing. Installation from Play is documented on OnePlus. Contact me for a demonstration or tester access; this case does not announce general public availability."
        ]
      ]
    : [
        [
          "¿Cómo se organiza un entrenamiento?",
          "Elige un programa integrado o una sesión libre. Las rutinas propias permiten definir ejercicios, orden, objetivos, series, descansos y notas. Los cuatro programas integrados son contenido de catálogo; la aportación de la app está en la experiencia de registro y reutilización."
        ],
        [
          "¿Qué mide el gráfico de progreso?",
          "Muestra el máximo de una repetición (1RM) estimado en las últimas diez sesiones por ejercicio. Epley: peso × (1 + repeticiones / 30). Una serie de 65 kg × 12 da 91 kg estimados. Es un indicador calculado, no un máximo medido. El volumen excluye calentamientos."
        ],
        [
          "¿Funciona sin cuenta ni conexión?",
          "El entrenamiento principal y los registros funcionan offline. IndexedDB conserva sesiones y rutinas propias. Exporta una copia JSON y restáurala con el selector de archivos de Android. El QA físico aislado comprobó la recuperación de rutinas y la conservación del historial personal."
        ],
        [
          "¿Cómo funcionan calendarios y alertas de descanso?",
          "Android permite exportar ICS para planificar. La conexión opcional a Google Calendar solo está disponible en web. El descanso usa una fecha absoluta de fin y alarmas Android; sonido y vibración con pantalla apagada se comprobaron en OnePlus con permisos y batería configurados."
        ],
        [
          "¿Dónde puedo probar Setline?",
          "La versión 1.4.0 (9) se distribuye mediante pruebas internas de Google Play. La instalación desde Play está documentada en OnePlus. Contacta conmigo para una demo o acceso de tester; este caso no anuncia disponibilidad pública general."
        ]
      ];
  return (
    <>
      <ProductEvidence product="setline" locale={locale} />
      <ProductScene
        id="setline-input"
        locale={locale}
        eyebrow={en ? "01 / Between one set and the next" : "01 / Entre una serie y la siguiente"}
        title={en ? "Keep the next action close." : "La próxima acción, a mano."}
        assets={["setline-entry"]}
      >
        <p>
          {en
            ? "The keypad adapts to what you are entering: 2.5 / 5 kg steps for weight, whole numbers for reps. The first digit replaces the selected value; Apply and Cancel keep the edit explicit."
            : "El teclado se adapta al campo: saltos de 2,5 / 5 kg para peso y enteros para repeticiones. La primera cifra sustituye el valor seleccionado; Aplicar y Cancelar hacen explícita la edición."}
        </p>
        <p className="product-takeaway">
          {en
            ? "Targets describe the plan. Actual reps describe the set you completed."
            : "El objetivo describe el plan. Las reps reales describen la serie completada."}
        </p>
      </ProductScene>
      <ProductScene
        id="setline-routines"
        locale={locale}
        eyebrow={
          en ? "02 / A structure worth keeping" : "02 / Una estructura que merece conservarse"
        }
        title={en ? "Your session. Your next routine." : "Tu sesión. Tu próxima rutina."}
        assets={["setline-editor", "setline-template"]}
      >
        <p>
          {en
            ? "Start a free workout, then save its structure as a routine. The editor keeps a draft until you confirm. The template stores targets and exercise order independently of the session history."
            : "Empieza un entrenamiento libre y guarda su estructura como rutina. El editor conserva un borrador hasta confirmar. La plantilla guarda objetivos y orden de ejercicios de forma independiente del historial."}
        </p>
        <p className="product-takeaway">
          {en
            ? "Reuse the structure, with editable previous loads. New sets start pending and actual reps stay empty."
            : "Reutiliza la estructura, con cargas anteriores editables. Las series nuevas quedan pendientes y las reps reales vacías."}
        </p>
      </ProductScene>
      <section className="section page-wrap setline-record" aria-labelledby="setline-record-title">
        <div data-reveal>
          <p className="eyebrow">{en ? "03 / Readable progress" : "03 / Progreso comprensible"}</p>
          <h2 id="setline-record-title">
            {en ? "The number has a record behind it." : "La cifra tiene un registro detrás."}
          </h2>
          <p>
            {en
              ? "Each chart point connects to the session, load and reps behind an estimate. SVG keeps the chart lightweight. This example explains the calculation; it is not a measured strength result."
              : "Cada punto conecta con la sesión, carga y reps detrás de una estimación. SVG mantiene ligero el gráfico. Este ejemplo explica el cálculo; no es un resultado de fuerza medido."}
          </p>
        </div>
        <dl className="setline-example" data-reveal>
          <div>
            <dt>{en ? "Recorded set" : "Serie registrada"}</dt>
            <dd>65 kg × 12 {en ? "reps" : "repeticiones"}</dd>
          </div>
          <div>
            <dt>{en ? "Estimated 1RM" : "1RM estimado"}</dt>
            <dd>91 kg</dd>
          </div>
          <div>
            <dt>{en ? "Calculation" : "Cálculo"}</dt>
            <dd>65 × (1 + 12 / 30)</dd>
          </div>
          <div>
            <dt>{en ? "Data" : "Datos"}</dt>
            <dd>{en ? "Sample session" : "Sesión de ejemplo"}</dd>
          </div>
        </dl>
      </section>
      <ProductQuestions locale={locale} id="setline-faq" questions={questions} />
    </>
  );
}
