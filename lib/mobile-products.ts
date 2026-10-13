import type { Locale, Project, ProjectSlug } from "@/lib/site-data";

export type MobileProjectSlug = Extract<ProjectSlug, "lock-in" | "setline">;

// Owner-supplied briefs and selected release / QA receipts, 13 October 2026.
export const mobileProjects = {
  en: {
    "lock-in": {
      slug: "lock-in",
      order: "01",
      name: "LockIn",
      context: "Independent Android product · planning, focus and study",
      problem:
        "My university timetable was scattered across apps and screenshots. I wanted the next class, its time and its room to stay easy to find on the screen I already checked.",
      role: "Product concept, interaction design, Android development and release coordination, with Codex-assisted implementation",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Flow / StateFlow",
        "DataStore",
        "Canvas",
        "Microsoft Graph"
      ],
      status: "Google Play internal testing · Android 0.1.11 (12) · 13 Oct 2026",
      summary:
        "Turn the Android wallpaper into a personal planning panel. Selected calendars, tasks, habits, focus sessions and study cards share a modular layout, with a preview to check what fits before applying it.",
      facts: [
        {
          title: "A layout with priorities",
          text: "Calendar and day details keep priority when enabled. Planner modules use the remaining space; a capacity warning explains which items are hidden while keeping them saved. Turning the calendar off frees the layout without disconnecting accounts."
        },
        {
          title: "One scene, from preview to wallpaper",
          text: "Planner, Design and the wallpaper reuse the same scene and geometry. Shared previews make space constraints visible during configuration. Canvas and WallpaperService render the Android surface; refresh responds to meaningful changes."
        },
        {
          title: "Data sources behind repositories",
          text: "CalendarContract, Google Calendar API and Microsoft Graph supply read-only calendar data. Repositories separate acquisition, models, composition and lifecycle. Preferences DataStore persists settings and modules; no WRITE_CALENDAR permission is requested."
        },
        {
          title: "Focus and recall with clear boundaries",
          text: "Start, pause or reset a focus session. Study cards support TSV/TXT import and a local read-only AnkiDroid bridge with field mapping. Recall tracking stays in LockIn and does not grade or change Anki reviews."
        }
      ],
      limitation:
        "Wallpaper placement and interaction depend on Android and the manufacturer. Selected OnePlus checks are documented for 0.1.9; Redmi Note 11 validation of the 0.1.11 setup guide remains pending. Demonstration renders and emulator captures are labelled separately from physical-device evidence.",
      next: "Validate the Xiaomi / Redmi / POCO setup guide on the tester’s Redmi Note 11 and continue checking legibility, capacity and background behavior across devices."
    },
    setline: {
      slug: "setline",
      order: "03",
      name: "Setline",
      context: "Independent Android product · local-first strength training",
      problem:
        "Between sets, I need to record what I did, remember the last load and know when to start again. The interface should keep that context close, even without a connection.",
      role: "Product requirements, UX priorities, data workflows and physical QA coordination, with Codex-assisted implementation",
      tech: ["JavaScript", "TypeScript", "Capacitor", "IndexedDB", "Android Java", "SVG"],
      status: "Google Play internal testing · Android 1.4.0 (9) · installation checked on OnePlus",
      summary:
        "Train. Remember. Repeat. Log actual sets, reuse previous loads, create your own routines and explore estimated strength progress. Training records stay on the device, with exportable backups.",
      facts: [
        {
          title: "Planned is different from performed",
          text: "Targets remain a reference; actual repetitions drive the record and estimated 1RM. Previous weights are an editable starting point. A new session begins with pending sets and empty actual reps."
        },
        {
          title: "A routine is a reusable structure",
          text: "Routine templates and session snapshots are independent. Edit exercises, order, sets, rep ranges, rest and notes in an isolated draft. Saving a completed free workout as a routine opens a prefilled editor without copying completion flags or personal records."
        },
        {
          title: "Continuity through local data",
          text: "IndexedDB stores records and custom routines with transactional persistence. JSON export and native Android sharing provide backups; the system file picker restores them, including custom_routines. SVG charts show the last ten sessions per exercise."
        },
        {
          title: "Rest survives beyond the screen",
          text: "Remaining time comes from an absolute end timestamp. Capacitor connects the web interface to Android AlarmManager, a receiver and an alert service. Screen-off sound and vibration were checked on OnePlus with the required permissions and battery settings."
        }
      ],
      limitation:
        "The 1RM chart is an estimate, not a measured maximum or a training prescription. Screen-off alerts were validated on OnePlus and depend on permissions and manufacturer settings. The optional Google Calendar connection is web-only; Android supports ICS export. Integrated programmes are catalogue content, not programmes authored for this project.",
      next: "Continue refining routine discovery and input, and extend backup recovery and rest-alert validation to additional Android devices."
    }
  },
  es: {
    "lock-in": {
      slug: "lock-in",
      order: "01",
      name: "LockIn",
      context: "Producto Android independiente · planificación, enfoque y estudio",
      problem:
        "Mi horario universitario estaba repartido entre apps y capturas. Quería encontrar la próxima clase, su hora y su aula en la pantalla que ya consultaba.",
      role: "Concepto de producto, diseño de interacción, desarrollo Android y coordinación de versiones, con implementación asistida por Codex",
      tech: [
        "Kotlin",
        "Jetpack Compose",
        "Flow / StateFlow",
        "DataStore",
        "Canvas",
        "Microsoft Graph"
      ],
      status: "Pruebas internas de Google Play · Android 0.1.11 (12) · 13 oct 2026",
      summary:
        "Convierte el fondo de Android en un panel personal de planificación. Calendarios seleccionados, tareas, hábitos, enfoque y tarjetas de estudio comparten una distribución modular, con vista previa para comprobar qué cabe antes de aplicar.",
      facts: [
        {
          title: "Una distribución con prioridades",
          text: "El calendario y el detalle del día mantienen prioridad cuando están activos. Los módulos de Planner usan el espacio restante; un aviso explica qué elementos quedan ocultos y los conserva guardados. Desactivar el calendario libera espacio sin desconectar las cuentas."
        },
        {
          title: "Una misma escena, de la vista previa al fondo",
          text: "Planner, Design y el fondo reutilizan escena y geometría. La vista previa compartida muestra los límites de espacio durante la configuración. Canvas y WallpaperService dibujan la superficie Android; las actualizaciones responden a cambios significativos."
        },
        {
          title: "Fuentes de datos detrás de repositorios",
          text: "CalendarContract, Google Calendar API y Microsoft Graph aportan calendarios de solo lectura. Los repositorios separan adquisición, modelos, composición y ciclo de vida. Preferences DataStore conserva ajustes y módulos; no se solicita WRITE_CALENDAR."
        },
        {
          title: "Enfoque y repaso con límites claros",
          text: "Inicia, pausa o reinicia una sesión de enfoque. Las tarjetas admiten TSV/TXT y un puente local de lectura con AnkiDroid y asignación de campos. El seguimiento queda en LockIn y no califica ni modifica los repasos de Anki."
        }
      ],
      limitation:
        "La colocación e interacción del fondo dependen de Android y del fabricante. Hay comprobaciones seleccionadas en OnePlus para 0.1.9; la guía de 0.1.11 sigue pendiente de validación en Redmi Note 11. Los renders de demostración y las capturas de emulador se identifican por separado de la evidencia física.",
      next: "Validar la guía Xiaomi / Redmi / POCO en el Redmi Note 11 del tester y seguir comprobando legibilidad, capacidad y segundo plano en distintos dispositivos."
    },
    setline: {
      slug: "setline",
      order: "03",
      name: "Setline",
      context: "Producto Android independiente · entrenamiento de fuerza con datos locales",
      problem:
        "Entre series necesito registrar lo que hice, recordar la última carga y saber cuándo volver a empezar. La interfaz debe mantener ese contexto a mano, también sin conexión.",
      role: "Requisitos de producto, prioridades de UX, flujos de datos y coordinación de QA físico, con implementación asistida por Codex",
      tech: ["JavaScript", "TypeScript", "Capacitor", "IndexedDB", "Android Java", "SVG"],
      status:
        "Pruebas internas de Google Play · Android 1.4.0 (9) · instalación comprobada en OnePlus",
      summary:
        "Entrena. Recuerda. Repite. Registra series reales, recupera cargas anteriores, crea rutinas propias y consulta el progreso de fuerza estimado. Los registros quedan en el dispositivo, con copias exportables.",
      facts: [
        {
          title: "Lo planeado se separa de lo realizado",
          text: "Los objetivos permanecen como referencia; las repeticiones reales alimentan el registro y el 1RM estimado. Los pesos previos son un punto de partida editable. Una sesión nueva comienza con series pendientes y repeticiones reales vacías."
        },
        {
          title: "Una rutina es una estructura reutilizable",
          text: "Las plantillas y los snapshots de sesión son independientes. Edita ejercicios, orden, series, rangos, descansos y notas en un borrador aislado. Guardar una sesión libre como rutina abre un editor preparado sin copiar marcas de completado ni récords."
        },
        {
          title: "Continuidad con datos locales",
          text: "IndexedDB guarda registros y rutinas propias con persistencia transaccional. La exportación JSON y el diálogo nativo de compartir crean copias; el selector de archivos del sistema las restaura, incluido custom_routines. Los gráficos SVG muestran las últimas diez sesiones por ejercicio."
        },
        {
          title: "El descanso continúa con la pantalla apagada",
          text: "El tiempo restante se calcula desde una fecha de fin absoluta. Capacitor conecta la interfaz web con AlarmManager, un receptor y un servicio de alerta Android. Sonido y vibración se comprobaron en OnePlus con permisos y batería configurados."
        }
      ],
      limitation:
        "El gráfico de 1RM es una estimación, no un máximo medido ni una prescripción deportiva. Las alertas se validaron en OnePlus y dependen de permisos y ajustes del fabricante. La conexión opcional a Google Calendar es solo web; Android permite exportar ICS. Los programas integrados son contenido de catálogo, sin atribuir su autoría a este proyecto.",
      next: "Seguir afinando la elección de rutinas y la entrada de datos, y ampliar la validación de restauración y alertas a otros dispositivos Android."
    }
  }
} satisfies Record<Locale, Record<MobileProjectSlug, Project>>;
