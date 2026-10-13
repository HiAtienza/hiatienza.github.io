import type { Locale } from "@/lib/site-data";
import type { MobileProjectSlug } from "@/lib/mobile-products";

interface Capture {
  product: MobileProjectSlug;
  src: string;
  width: number;
  height: number;
  copy: Record<Locale, { title: string; caption: string; alt: string }>;
}

export const productCaptures = {
  "lock-home": {
    product: "lock-in",
    src: "/images/lock-in/home.webp",
    width: 1080,
    height: 1920,
    copy: {
      en: {
        title: "Your day, at a glance",
        caption:
          "Home preview, Edit layout and today’s snapshot. 0.1.10 publication material · example calendar.",
        alt: "Your day, at a glance. Home preview, Edit layout and today’s snapshot. 0.1.10 publication material · example calendar."
      },
      es: {
        title: "El día, de un vistazo",
        caption:
          "Vista previa, Edit layout y resumen del día. Material de publicación de 0.1.10 · calendario de ejemplo.",
        alt: "El día, de un vistazo. Vista previa, Edit layout y resumen del día. Material de publicación de 0.1.10 · calendario de ejemplo."
      }
    }
  },
  "lock-modules": {
    product: "lock-in",
    src: "/images/lock-in/modules.webp",
    width: 1080,
    height: 1920,
    copy: {
      en: {
        title: "Calendar and next actions",
        caption:
          "Week overview, day details and task, habit and focus modules. 0.1.10 demonstration render · sample data.",
        alt: "Calendar and next actions. Week overview, day details and task, habit and focus modules. 0.1.10 demonstration render · sample data."
      },
      es: {
        title: "Calendario y próximas acciones",
        caption:
          "Semana, detalle del día y módulos de tareas, hábitos y enfoque. Render de demostración de 0.1.10 · datos de ejemplo.",
        alt: "Calendario y próximas acciones. Semana, detalle del día y módulos de tareas, hábitos y enfoque. Render de demostración de 0.1.10 · datos de ejemplo."
      }
    }
  },
  "lock-setup": {
    product: "lock-in",
    src: "/images/lock-in/setup.webp",
    width: 1080,
    height: 1920,
    copy: {
      en: {
        title: "A starting point you can change",
        caption: "First-use style selection. QA capture · example data · 12 Oct 2026.",
        alt: "A starting point you can change. First-use style selection. QA capture · example data · 12 Oct 2026."
      },
      es: {
        title: "Un punto de partida que puedes cambiar",
        caption: "Selección inicial de estilo. Captura de QA · datos de ejemplo · 12 oct 2026.",
        alt: "Un punto de partida que puedes cambiar. Selección inicial de estilo. Captura de QA · datos de ejemplo · 12 oct 2026."
      }
    }
  },
  "lock-planner": {
    product: "lock-in",
    src: "/images/lock-in/planner-preview.webp",
    width: 1080,
    height: 1908,
    copy: {
      en: {
        title: "See the result while editing",
        caption:
          "Planner’s live preview highlights the module being edited in blue. Emulator · 12 Oct 2026 · calendar disabled.",
        alt: "See the result while editing. Planner’s live preview highlights the module being edited in blue. Emulator · 12 Oct 2026 · calendar disabled."
      },
      es: {
        title: "Ver el resultado al editar",
        caption:
          "La vista previa de Planner marca en azul el módulo editado. Emulador · 12 oct 2026 · calendario desactivado.",
        alt: "Ver el resultado al editar. La vista previa de Planner marca en azul el módulo editado. Emulador · 12 oct 2026 · calendario desactivado."
      }
    }
  },
  "lock-calendar": {
    product: "lock-in",
    src: "/images/lock-in/with-calendar.webp",
    width: 1080,
    height: 2376,
    copy: {
      en: {
        title: "Calendar comes first",
        caption:
          "Student layout with three-day agenda and modules below. Test-engine render · synthetic data · 12 Oct 2026; the top space is reserved for the system.",
        alt: "Calendar comes first. Student layout with three-day agenda and modules below. Test-engine render · synthetic data · 12 Oct 2026; the top space is reserved for the system."
      },
      es: {
        title: "El calendario tiene prioridad",
        caption:
          "Diseño Student con agenda de tres días y módulos debajo. Render del motor de pruebas · datos sintéticos · 12 oct 2026; espacio superior reservado para el sistema.",
        alt: "El calendario tiene prioridad. Diseño Student con agenda de tres días y módulos debajo. Render del motor de pruebas · datos sintéticos · 12 oct 2026; espacio superior reservado para el sistema."
      }
    }
  },
  "lock-no-calendar": {
    product: "lock-in",
    src: "/images/lock-in/without-calendar.webp",
    width: 1080,
    height: 2376,
    copy: {
      en: {
        title: "Make room for Planner",
        caption:
          "Calendar-free layout uses the available width for tasks, habits, focus and study. Test-engine render · synthetic data · 12 Oct 2026.",
        alt: "Make room for Planner. Calendar-free layout uses the available width for tasks, habits, focus and study. Test-engine render · synthetic data · 12 Oct 2026."
      },
      es: {
        title: "Dar espacio a Planner",
        caption:
          "El diseño sin calendario aprovecha el ancho para tareas, hábitos, enfoque y estudio. Render del motor de pruebas · datos sintéticos · 12 oct 2026.",
        alt: "Dar espacio a Planner. El diseño sin calendario aprovecha el ancho para tareas, hábitos, enfoque y estudio. Render del motor de pruebas · datos sintéticos · 12 oct 2026."
      }
    }
  },
  "lock-locked-study": {
    product: "lock-in",
    src: "/images/lock-in/locked-study.webp",
    width: 1080,
    height: 2376,
    copy: {
      en: {
        title: "Study on a real locked screen",
        caption:
          "OnePlus · 0.1.9 · 12 Oct 2026 · example study card. The clock, fingerprint and camera controls belong to Android.",
        alt: "Study on a real locked screen. OnePlus · 0.1.9 · 12 Oct 2026 · example study card. The clock, fingerprint and camera controls belong to Android."
      },
      es: {
        title: "Estudio en un bloqueo real",
        caption:
          "OnePlus · 0.1.9 · 12 oct 2026 · tarjeta de ejemplo. Reloj, huella y cámara pertenecen a Android.",
        alt: "Estudio en un bloqueo real. OnePlus · 0.1.9 · 12 oct 2026 · tarjeta de ejemplo. Reloj, huella y cámara pertenecen a Android."
      }
    }
  },
  "lock-locked-focus": {
    product: "lock-in",
    src: "/images/lock-in/locked-focus.webp",
    width: 1080,
    height: 2376,
    copy: {
      en: {
        title: "Habits and focus in place",
        caption:
          "OnePlus · 0.1.9 · 12 Oct 2026 · sample habits and timer. Selected physical checks; compatibility on other models remains device-specific.",
        alt: "Habits and focus in place. OnePlus · 0.1.9 · 12 Oct 2026 · sample habits and timer. Selected physical checks; compatibility on other models remains device-specific."
      },
      es: {
        title: "Hábitos y enfoque en el fondo",
        caption:
          "OnePlus · 0.1.9 · 12 oct 2026 · hábitos y temporizador de ejemplo. Comprobaciones físicas seleccionadas; la compatibilidad depende del modelo.",
        alt: "Hábitos y enfoque en el fondo. OnePlus · 0.1.9 · 12 oct 2026 · hábitos y temporizador de ejemplo. Comprobaciones físicas seleccionadas; la compatibilidad depende del modelo."
      }
    }
  },
  "lock-capacity": {
    product: "lock-in",
    src: "/images/lock-in/capacity.webp",
    width: 1080,
    height: 537,
    copy: {
      en: {
        title: "Explain what does not fit",
        caption:
          "QA detail: study cards do not fit and two of six tasks are visible. Content stays saved in Planner; the preview suggests layout changes.",
        alt: "Explain what does not fit. QA detail: study cards do not fit and two of six tasks are visible. Content stays saved in Planner; the preview suggests layout changes."
      },
      es: {
        title: "Explicar lo que no cabe",
        caption:
          "Detalle de QA: las tarjetas no caben y se ven dos de seis tareas. El contenido sigue guardado en Planner; la vista previa propone ajustar el diseño.",
        alt: "Explicar lo que no cabe. Detalle de QA: las tarjetas no caben y se ven dos de seis tareas. El contenido sigue guardado en Planner; la vista previa propone ajustar el diseño."
      }
    }
  },
  "setline-routine": {
    product: "setline",
    src: "/images/setline/routine.webp",
    width: 390,
    height: 844,
    copy: {
      en: {
        title: "Your routine, ready to repeat",
        caption:
          "Saved custom routine with edit and start actions. QA capture · synthetic exercises and targets · Oct 2026.",
        alt: "Your routine, ready to repeat. Saved custom routine with edit and start actions. QA capture · synthetic exercises and targets · Oct 2026."
      },
      es: {
        title: "Tu rutina, lista para repetir",
        caption:
          "Rutina propia guardada con acciones de editar e iniciar. Captura de QA · ejercicios y objetivos sintéticos · oct 2026.",
        alt: "Tu rutina, lista para repetir. Rutina propia guardada con acciones de editar e iniciar. Captura de QA · ejercicios y objetivos sintéticos · oct 2026."
      }
    }
  },
  "setline-editor": {
    product: "setline",
    src: "/images/setline/routine-editor.webp",
    width: 390,
    height: 1509,
    copy: {
      en: {
        title: "A structure you can adapt",
        caption:
          "Draft editor for exercise order, sets, target reps, rest and notes. QA capture · synthetic data · Oct 2026.",
        alt: "A structure you can adapt. Draft editor for exercise order, sets, target reps, rest and notes. QA capture · synthetic data · Oct 2026."
      },
      es: {
        title: "Una estructura que puedes adaptar",
        caption:
          "Editor de borrador: orden, series, reps objetivo, descanso y notas. Captura de QA · datos sintéticos · oct 2026.",
        alt: "Una estructura que puedes adaptar. Editor de borrador: orden, series, reps objetivo, descanso y notas. Captura de QA · datos sintéticos · oct 2026."
      }
    }
  },
  "setline-entry": {
    product: "setline",
    src: "/images/setline/numeric-entry.webp",
    width: 390,
    height: 844,
    copy: {
      en: {
        title: "A keypad that understands the field",
        caption:
          "Weight entry with 2.5 / 5 kg steps and Apply / Cancel. QA screenshot framed around the keypad; the full capture has an unloaded background image.",
        alt: "A keypad that understands the field. Weight entry with 2.5 / 5 kg steps and Apply / Cancel. QA screenshot framed around the keypad; the full capture has an unloaded background image."
      },
      es: {
        title: "Un teclado que entiende el campo",
        caption:
          "Entrada de peso con saltos de 2,5 / 5 kg y Aplicar / Cancelar. Captura de QA encuadrada en el teclado; la imagen de fondo no cargó en la captura completa.",
        alt: "Un teclado que entiende el campo. Entrada de peso con saltos de 2,5 / 5 kg y Aplicar / Cancelar. Captura de QA encuadrada en el teclado; la imagen de fondo no cargó en la captura completa."
      }
    }
  },
  "setline-progress": {
    product: "setline",
    src: "/images/setline/progress.webp",
    width: 390,
    height: 844,
    copy: {
      en: {
        title: "A trend you can inspect",
        caption:
          "Lightweight SVG charts with exercise filters and estimated 1RM. QA capture · synthetic history; the values are mathematical estimates.",
        alt: "A trend you can inspect. Lightweight SVG charts with exercise filters and estimated 1RM. QA capture · synthetic history; the values are mathematical estimates."
      },
      es: {
        title: "Una tendencia que puedes consultar",
        caption:
          "Gráficos SVG con filtros por ejercicio y 1RM estimado. Captura de QA · historial sintético; las cifras son estimaciones matemáticas.",
        alt: "Una tendencia que puedes consultar. Gráficos SVG con filtros por ejercicio y 1RM estimado. Captura de QA · historial sintético; las cifras son estimaciones matemáticas."
      }
    }
  },
  "setline-template": {
    product: "setline",
    src: "/images/setline/session-template.webp",
    width: 1080,
    height: 2376,
    copy: {
      en: {
        title: "A completed session becomes a routine",
        caption:
          "Free-workout summary and Save as new routine. Physical QA · synthetic sets · Oct 2026; the personal-record toast is transient.",
        alt: "A completed session becomes a routine. Free-workout summary and Save as new routine. Physical QA · synthetic sets · Oct 2026; the personal-record toast is transient."
      },
      es: {
        title: "Una sesión terminada se convierte en rutina",
        caption:
          "Resumen de sesión libre y Guardar como nueva rutina. QA físico · series sintéticas · oct 2026; el aviso de récord es transitorio.",
        alt: "Una sesión terminada se convierte en rutina. Resumen de sesión libre y Guardar como nueva rutina. QA físico · series sintéticas · oct 2026; el aviso de récord es transitorio."
      }
    }
  }
} as const satisfies Record<string, Capture>;

export type CaptureId = keyof typeof productCaptures;
