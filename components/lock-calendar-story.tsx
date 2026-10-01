import Image from "next/image";
import Link from "next/link";
import { route, type Locale } from "@/lib/site-data";

export function LockCalendarAbout({ locale }: { locale: Locale }) {
  const en = locale === "en";
  return (
    <section className="section lock-about" aria-labelledby="lock-about-title">
      <div className="page-wrap lock-about-layout">
        <div data-reveal>
          <p className="eyebrow">{en ? "What I’m building now" : "Lo que estoy creando ahora"}</p>
          <h2 id="lock-about-title">
            {en
              ? "A small frustration became Lock Calendar."
              : "Una pequeña frustración se convirtió en Lock Calendar."}
          </h2>
        </div>
        <div data-reveal>
          <p>
            {en
              ? "At university, a screenshot of the class timetable was often the quickest way to keep the week close. But the image could crop badly, sit under the clock, or become outdated after a change. I started building a calendar that belongs on that screen."
              : "En la universidad, una captura del horario era la forma más rápida de tener la semana a mano. Pero la imagen se recortaba, quedaba bajo el reloj o se desactualizaba cuando cambiaba una clase. Empecé a crear un calendario pensado para esa pantalla."}
          </p>
          <p>
            {en
              ? "The idea extends beyond classes: see an appointment, notice a gap in the day, and know what comes next without opening another app."
              : "La idea va más allá de las clases: ver una cita, encontrar un hueco en el día y saber qué viene después sin abrir otra app."}
          </p>
          <Link className="arrow-link" href={route(locale, "/projects/lock-calendar/")}>
            {en ? "Explore Lock Calendar" : "Conoce Lock Calendar"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LockCalendarStory({ locale }: { locale: Locale }) {
  const en = locale === "en";
  const steps = en
    ? [
        [
          "It started with a screenshot",
          "Students at my university kept their class timetables as wallpaper. It worked until the image was cropped, the clock covered a class, or the schedule changed."
        ],
        [
          "From an image to a connected view",
          "Lock Calendar renders a weekly schedule and daily agenda from a selected calendar source. Classes, medical appointments and personal plans can live in that view instead of separate screenshots."
        ],
        [
          "Designed for the glance",
          "The aim is to make the next commitment and the shape of the day easier to see. Layout, contrast, spacing and placement matter as much as calendar integration."
        ]
      ]
    : [
        [
          "Todo empezó con una captura",
          "En mi universidad usábamos el horario de clases como fondo. Funcionaba hasta que la imagen se recortaba, el reloj tapaba una clase o cambiaba el horario."
        ],
        [
          "De imagen estática a agenda conectada",
          "Lock Calendar dibuja la semana y la agenda diaria a partir de la fuente de calendario que eliges. Las clases, las citas médicas y los planes personales pueden aparecer en esa vista sin rehacer capturas."
        ],
        [
          "Pensado para una mirada rápida",
          "La intención es facilitar ver el próximo compromiso y cómo se distribuye el día. El diseño, el contraste, el espacio y la posición importan tanto como la conexión al calendario."
        ]
      ];
  const captures = [
    [
      "home",
      en ? "See the result first" : "Ver el resultado primero",
      en
        ? "Weekly view and daily agenda in the app preview."
        : "La semana y la agenda diaria en la vista previa de la app."
    ],
    [
      "customize",
      en ? "Make the layout yours" : "Un diseño a tu medida",
      en
        ? "Layout choices include a student-oriented view."
        : "Diseños disponibles, incluida una vista para estudiantes."
    ],
    [
      "settings",
      en ? "Keep settings clear" : "Ajustes fáciles de encontrar",
      en
        ? "Preferences, calendar access and help, grouped together."
        : "Preferencias, acceso al calendario y ayuda, agrupados."
    ]
  ];
  const faqs = en
    ? [
        [
          "Which calendars does it use?",
          "The app supports calendars exposed by Android’s calendar provider and a direct Google Calendar connection. You choose a source and its calendars. A phone calendar must be available through the standard Android provider; some manufacturer apps store events separately."
        ],
        [
          "What happens when a class or appointment changes?",
          "The live wallpaper can refresh as changes reach the selected source, with additional checks when it becomes visible and bounded refresh policies. It does not promise a fixed refresh every few seconds. Permissions, network synchronization, battery restrictions and device behavior can affect freshness."
        ],
        [
          "Will it fit around every lock-screen clock?",
          "The app offers layout, preview and placement controls. Android does not expose every manufacturer’s clock bounds, so some devices need manual adjustment. Fit and freshness are still being validated across devices."
        ],
        [
          "Can I download it now?",
          "Lock Calendar is in active Android development. There is no public store release linked here yet. This page shows the concept and current design; it is not an installation or Google sign-in page."
        ]
      ]
    : [
        [
          "¿Qué calendarios utiliza?",
          "La app admite calendarios disponibles a través del proveedor estándar de Android y una conexión directa a Google Calendar. Tú eliges la fuente y sus calendarios. Algunas apps de fabricantes guardan sus eventos por separado y no los exponen a Android."
        ],
        [
          "¿Qué pasa cuando cambia una clase o una cita?",
          "El fondo dinámico puede actualizarse cuando el cambio llega a la fuente elegida, con comprobaciones adicionales al volver a mostrar la pantalla y políticas de refresco. No promete actualizarse cada pocos segundos. Los permisos, la sincronización, el ahorro de batería y el dispositivo pueden afectar a la actualización."
        ],
        [
          "¿Encaja con cualquier reloj de bloqueo?",
          "Puedes personalizar el diseño, comprobar la vista previa y ajustar la posición. Android no facilita la posición de todos los relojes de los fabricantes, por lo que algunos dispositivos requieren ajuste manual. Continúa la validación en distintos teléfonos."
        ],
        [
          "¿Ya puedo descargarla?",
          "Lock Calendar es una app Android en desarrollo activo. Todavía no hay un lanzamiento público en la tienda enlazado aquí. Esta página muestra el concepto y el diseño actual; no es una página de instalación ni de inicio de sesión de Google."
        ]
      ];
  return (
    <>
      <section className="section lock-origin" aria-labelledby="lock-origin-title">
        <div className="page-wrap">
          <p className="eyebrow">{en ? "The origin" : "El origen"}</p>
          <h2 id="lock-origin-title">
            {en
              ? "A class timetable. A crowded lock screen. A better way."
              : "Un horario de clases. Una pantalla llena. Una forma mejor."}
          </h2>
          <div className="lock-origin-steps">
            {steps.map(([title, text], index) => (
              <article key={title} data-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section lock-gallery" aria-labelledby="lock-gallery-title">
        <div className="page-wrap">
          <div className="section-heading">
            <p className="eyebrow">{en ? "Inside the app" : "Dentro de la app"}</p>
            <div>
              <h2 id="lock-gallery-title">
                {en ? "Preview. Personalize. Apply." : "Ver. Personalizar. Aplicar."}
              </h2>
              <p>
                {en
                  ? "Synthetic emulator captures from the current redesign. Example events only; these show the app interface, not a physical lock screen."
                  : "Capturas sintéticas del emulador del rediseño actual. Solo eventos ficticios; muestran la interfaz de la app, no una pantalla de bloqueo física."}
              </p>
            </div>
          </div>
          <div className="lock-captures">
            {captures.map(([name, title, caption]) => (
              <figure key={name} data-reveal>
                <div>
                  <Image
                    src={`/images/lock-calendar/${name}.webp`}
                    alt={`${title}. ${caption}`}
                    width={1080}
                    height={2424}
                    sizes="(max-width: 780px) 85vw, 30vw"
                  />
                </div>
                <figcaption>
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section page-wrap lock-faq" aria-labelledby="lock-faq-title">
        <p className="eyebrow">{en ? "Practical questions" : "Preguntas prácticas"}</p>
        <h2 id="lock-faq-title">
          {en ? "How it fits into a real day." : "Cómo encaja en el día a día."}
        </h2>
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </>
  );
}
