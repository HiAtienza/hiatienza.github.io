import Link from "next/link";
import { LockInPreview } from "@/components/lock-in-preview";
import { ProductCapture, ProductGallery, ProductScene } from "@/components/product-capture";
import { ProductEvidence } from "@/components/product-evidence";
import { ProductQuestions } from "@/components/product-questions";
import { external, route, type Locale } from "@/lib/site-data";

export function CurrentProductsAbout({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <section className="section lock-about" aria-labelledby="lock-about-title">
      <div className="page-wrap lock-about-layout">
        <div data-reveal>
          <p className="eyebrow">{en ? "What I’m building now" : "Lo que estoy creando ahora"}</p>
          <h2 id="lock-about-title">
            {en ? "Everyday attention, made tangible." : "La atención cotidiana, hecha tangible."}
          </h2>
        </div>
        <div data-reveal>
          <p>
            {en
              ? "LockIn started with my need to find class times and rooms without moving between apps. It now brings together calendar views, tasks, habits, focus sessions and small moments of study, with a preview that makes the result visible before applying it."
              : "LockIn nació de mi necesidad de consultar horarios y aulas sin recorrer varias aplicaciones. Ahora reúne calendarios, tareas, hábitos, sesiones de enfoque y pequeños repasos, con una vista previa para ver el resultado antes de aplicarlo."}
          </p>
          <p>
            {en
              ? "Setline brings the same thinking into the gym: record the set you actually did, adjust the rest you need, and review your own history. Training records stay local, with exportable backups."
              : "Setline lleva ese enfoque al gimnasio: registrar la serie que hiciste, ajustar el descanso que necesitas y revisar tu historial. Los registros se guardan localmente, con copias exportables."}
          </p>
          <div className="button-row">
            <Link className="arrow-link" href={route(locale, "/projects/lock-in/")}>
              {en ? "Explore LockIn" : "Conoce LockIn"} <span aria-hidden="true">→</span>
            </Link>
            <Link className="arrow-link" href={route(locale, "/projects/setline/")}>
              {en ? "Explore Setline" : "Conoce Setline"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LockInStory({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const questions: readonly (readonly [question: string, answer: string])[] = en
    ? [
        [
          "Which calendars can I choose?",
          "Device calendars, Google Calendar and Microsoft / Outlook are available through separate sources. Calendar access is read-only. Choose calendars and privacy settings, or disable the calendar layout while keeping accounts connected."
        ],
        [
          "How do focus sessions and study cards work?",
          "Choose 25 minutes, 50 minutes or a custom duration, then start, pause or reset. Study cards accept TSV/TXT imports and a local read-only AnkiDroid bridge. LockIn recall tracking does not modify Anki reviews. The photographed study card is an example, not evidence of a new account connection."
        ],
        [
          "Will the wallpaper fit every phone?",
          "Placement and interaction depend on Android and the manufacturer. Selected checks are documented on OnePlus. The Xiaomi / Redmi / POCO guide uses the public system picker and distinguishes Home activation from confirmed Lock-screen activation. Redmi Note 11 testing remains pending."
        ],
        [
          "Can I download it now?",
          "LockIn 0.1.11 is available through Google Play internal testing for approved testers. Contact me to request access. The tester link requires an eligible Google account; general public availability has not been announced."
        ]
      ]
    : [
        [
          "¿Qué calendarios puedo elegir?",
          "Calendarios del teléfono, Google Calendar y Microsoft / Outlook están disponibles mediante fuentes separadas. El acceso es de solo lectura. Elige calendarios y privacidad o desactiva el calendario del diseño manteniendo las cuentas conectadas."
        ],
        [
          "¿Cómo funcionan el enfoque y las tarjetas?",
          "Elige 25 o 50 minutos o una duración propia; inicia, pausa o reinicia. Las tarjetas admiten TSV/TXT y un puente local de lectura con AnkiDroid. El seguimiento de LockIn no modifica los repasos de Anki. La tarjeta fotografiada es un ejemplo, no una nueva conexión con cuentas."
        ],
        [
          "¿Encaja el fondo en cualquier móvil?",
          "La colocación e interacción dependen de Android y del fabricante. Hay comprobaciones seleccionadas en OnePlus. La guía Xiaomi / Redmi / POCO usa el selector público del sistema y distingue la activación en Inicio de la confirmación en Bloqueo. La prueba en Redmi Note 11 sigue pendiente."
        ],
        [
          "¿Ya puedo descargarla?",
          "LockIn 0.1.11 está disponible mediante pruebas internas de Google Play para testers autorizados. Contacta conmigo para solicitar acceso. El enlace de prueba requiere una cuenta de Google habilitada; todavía no se anuncia disponibilidad pública general."
        ]
      ];
  return (
    <>
      <ProductEvidence product="lock-in" locale={locale} />
      <ProductScene
        id="lock-composition"
        locale={locale}
        eyebrow={en ? "01 / Information design" : "01 / Diseño de información"}
        title={en ? "Your calendar is a choice." : "El calendario es una elección."}
        assets={["lock-calendar", "lock-no-calendar"]}
      >
        <p>
          {en
            ? "Class times and room details stay at the centre when the calendar is enabled. Tasks, habits, focus and study use the remaining space. A Planner-only layout gives those modules the full width."
            : "Las horas y aulas mantienen prioridad cuando el calendario está activo. Tareas, hábitos, enfoque y estudio usan el espacio restante. El diseño solo Planner ofrece a esos módulos todo el ancho."}
        </p>
        <p className="product-takeaway">
          {en
            ? "One setting changes the composition. Your connected accounts stay available."
            : "Un ajuste cambia la composición. Las cuentas conectadas siguen disponibles."}
        </p>
      </ProductScene>
      <ProductScene
        id="lock-capacity"
        locale={locale}
        eyebrow={en ? "02 / Feedback before applying" : "02 / Feedback antes de aplicar"}
        title={en ? "Make the limit visible." : "Hacer visible el límite."}
        assets={["lock-planner"]}
      >
        <p>
          {en
            ? "Planner and Design share the wallpaper scene and geometry. A live preview shows the module being edited. When content does not fit, the interface explains the capacity and offers a way to adjust priorities."
            : "Planner y Design comparten la escena y geometría del fondo. La vista previa señala el módulo editado. Si el contenido no cabe, la interfaz explica la capacidad y permite ajustar prioridades."}
        </p>
        <ProductCapture asset="lock-capacity" locale={locale} />
      </ProductScene>
      <ProductGallery
        locale={locale}
        id="lock-physical"
        title={
          en ? "From preview to a real locked screen." : "De la vista previa a un bloqueo real."
        }
        description={
          en
            ? "Selected OnePlus checks from 12 October 2026, version 0.1.9. Study cards, habits and focus appear within the actual system lock screen. The captures keep Android’s clock and controls visible."
            : "Comprobaciones seleccionadas en OnePlus del 12 de octubre de 2026, versión 0.1.9. Tarjetas, hábitos y enfoque aparecen en el bloqueo real. Las capturas conservan visibles el reloj y los controles de Android."
        }
        assets={["lock-locked-study", "lock-locked-focus"]}
      />
      <section className="section page-wrap lock-demo-layout" aria-labelledby="lock-demo-title">
        <div data-reveal>
          <p className="eyebrow">
            {en ? "Explore the interaction concept" : "Explora el concepto de interacción"}
          </p>
          <h2 id="lock-demo-title">
            {en ? "A week you can scan." : "Una semana que puedes recorrer."}
          </h2>
          <p>
            {en
              ? "This simplified web illustration isolates day selection with five sample weekdays. Use the buttons or keyboard to explore the fictional agenda. The product captures above show the Android implementation."
              : "Esta ilustración web simplificada permite seleccionar cinco días de ejemplo. Usa los botones o el teclado para explorar la agenda ficticia. Las capturas anteriores muestran la implementación Android."}
          </p>
        </div>
        <LockInPreview locale={locale} />
      </section>
      <ProductQuestions locale={locale} id="lock-faq" questions={questions} />
      <section className="section product-access" aria-labelledby="lock-access-title">
        <div className="page-wrap">
          <p className="eyebrow">
            {en ? "Google Play / internal testing" : "Google Play / pruebas internas"}
          </p>
          <h2 id="lock-access-title">{en ? "Try it as a tester." : "Pruébala como tester."}</h2>
          <p>
            {en
              ? "Request access to the Android test channel. Already approved? Open the tester page with the Google account enabled for the test."
              : "Solicita acceso al canal de pruebas Android. Si ya estás autorizado, abre la página de testers con la cuenta de Google habilitada."}
          </p>
          <div className="button-row">
            <a className="button button-primary" href={external.linkedin}>
              {en ? "Request tester access" : "Solicitar acceso de tester"}
            </a>
            <a
              className="arrow-link"
              href="https://play.google.com/apps/internaltest/4701369259894947094"
              target="_blank"
              rel="noreferrer"
            >
              {en ? "Already a tester? Open Google Play" : "¿Ya eres tester? Abrir Google Play"}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
