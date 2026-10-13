import type { Locale, ProjectSlug } from "@/lib/site-data";

interface ProfileCopy {
  goal: string;
  portraitNote: string;
  introduction: string;
  proof: readonly { label: string; title: string; text: string; path: string }[];
  strengths: {
    label: string;
    title: string;
    intro: string;
    items: readonly { title: string; text: string; example: string; slug: ProjectSlug }[];
  };
  direction: {
    label: string;
    title: string;
    body: string;
    next: string;
    skills: readonly (readonly [string, string])[];
  };
  story: { label: string; title: string; text: string; link: string };
}

export const profileCopy = {
  en: {
    goal: "Looking for software engineering and product-development internships.",
    portraitNote: "From Madrid to Suzhou. Building, studying and learning along the way.",
    introduction:
      "Two Android products and a supervised research prototype: different contexts, the same attention to clear interactions and reliable data.",
    proof: [
      {
        label: "Product development",
        title: "LockIn + Setline",
        text: "Android apps distributed through Google Play internal testing.",
        path: "/#work"
      },
      {
        label: "Supervised research",
        title: "VIDEO-RESCUE",
        text: "Web prototyping and human-AI coordination at XJTLU.",
        path: "/research/"
      },
      {
        label: "My next step",
        title: "Learn with a team",
        text: "Contribute to useful Android and web products through an internship.",
        path: "/#contact"
      }
    ],
    strengths: {
      label: "What I bring",
      title: "Product thinking, supported by engineering.",
      intro:
        "The projects show how I connect a person’s next action to the code, data and checks that make it work.",
      items: [
        {
          title: "Make an interaction clear",
          text: "Turn a daily need into a usable flow, with understandable choices and feedback. In LockIn, the preview explains what fits before the wallpaper is applied.",
          example: "See the layout decisions",
          slug: "lock-in"
        },
        {
          title: "Keep data useful over time",
          text: "Think through the next session, the next edit and backup recovery. Setline separates routine templates from completed sessions and keeps previous loads editable.",
          example: "See routines and local data",
          slug: "setline"
        },
        {
          title: "Connect technical work and people",
          text: "Build within a research team, support study work and explain what the interface knows. VIDEO-RESCUE keeps reports and unknowns visible to the person deciding.",
          example: "See the research contribution",
          slug: "video-rescue"
        }
      ]
    },
    direction: {
      label: "My direction",
      title: "Software engineering first. People throughout.",
      body: "I want to develop as a software engineer who can carry a useful idea through its interface, data and delivery. Android and web product work give me practical experience; research opens a path toward Human-Centered AI and Human-AI Interaction.",
      next: "I’m also interested in Behavioral Technology and learning tools: how software can help people organise, practise and understand information.",
      skills: [
        ["Android", "Kotlin · Jetpack Compose · DataStore · Capacitor"],
        ["Web and data", "JavaScript · TypeScript · React · Next.js · IndexedDB · SQLite"],
        [
          "Quality and delivery",
          "Unit / integration tests · Playwright · Physical Android QA · Signed app bundles"
        ]
      ]
    },
    story: {
      label: "The person behind the projects",
      title: "Learning by building, between Spain and China.",
      text: "I studied software engineering at U-TAD in Madrid before moving to XJTLU. Tutoring and multicultural customer service taught me to listen and adapt explanations. I bring that experience to the way I design, develop and discuss software.",
      link: "Read my story and how I work"
    }
  },
  es: {
    goal: "Busco prácticas de ingeniería de software y desarrollo de producto.",
    portraitNote: "De Madrid a Suzhou. Construyendo, estudiando y aprendiendo en el camino.",
    introduction:
      "Dos productos Android y un prototipo de investigación supervisada: contextos distintos, la misma atención a las interacciones claras y los datos fiables.",
    proof: [
      {
        label: "Desarrollo de producto",
        title: "LockIn + Setline",
        text: "Apps Android distribuidas en pruebas internas de Google Play.",
        path: "/#work"
      },
      {
        label: "Investigación supervisada",
        title: "VIDEO-RESCUE",
        text: "Prototipado web y coordinación persona-IA en XJTLU.",
        path: "/research/"
      },
      {
        label: "Mi siguiente paso",
        title: "Aprender en equipo",
        text: "Aportar a productos Android y web útiles mediante unas prácticas.",
        path: "/#contact"
      }
    ],
    strengths: {
      label: "Qué puedo aportar",
      title: "Pensar el producto y sostenerlo con ingeniería.",
      intro:
        "Los proyectos muestran cómo conecto la próxima acción de una persona con el código, los datos y las comprobaciones que la hacen posible.",
      items: [
        {
          title: "Hacer clara una interacción",
          text: "Convertir una necesidad cotidiana en un recorrido utilizable, con opciones y feedback comprensibles. En LockIn, la vista previa explica qué cabe antes de aplicar el fondo.",
          example: "Ver las decisiones de distribución",
          slug: "lock-in"
        },
        {
          title: "Cuidar la continuidad de los datos",
          text: "Pensar en la siguiente sesión, la próxima edición y la recuperación de una copia. Setline separa plantillas e historial y mantiene editables las cargas anteriores.",
          example: "Ver rutinas y datos locales",
          slug: "setline"
        },
        {
          title: "Conectar trabajo técnico y personas",
          text: "Construir dentro de un equipo de investigación, apoyar el estudio y explicar qué sabe la interfaz. VIDEO-RESCUE muestra informes e incógnitas a quien toma la decisión.",
          example: "Ver mi aportación a la investigación",
          slug: "video-rescue"
        }
      ]
    },
    direction: {
      label: "Hacia dónde quiero ir",
      title: "Ingeniería de software, con las personas presentes.",
      body: "Quiero crecer como ingeniero de software capaz de llevar una idea útil hasta su interfaz, datos y entrega. Los productos Android y web me dan experiencia práctica; la investigación abre una dirección hacia Human-Centered AI y la interacción persona-IA.",
      next: "También me interesan la tecnología del comportamiento y las herramientas de aprendizaje: cómo el software puede ayudar a organizarse, practicar y entender información.",
      skills: [
        ["Android", "Kotlin · Jetpack Compose · DataStore · Capacitor"],
        ["Web y datos", "JavaScript · TypeScript · React · Next.js · IndexedDB · SQLite"],
        [
          "Calidad y entrega",
          "Pruebas unitarias / integración · Playwright · QA físico Android · App bundles firmados"
        ]
      ]
    },
    story: {
      label: "La persona detrás de los proyectos",
      title: "Aprender construyendo, entre España y China.",
      text: "Estudié ingeniería del software en U-TAD, Madrid, antes de trasladarme a XJTLU. La tutoría y la atención al cliente multicultural me enseñaron a escuchar y adaptar las explicaciones. Llevo esa experiencia a cómo diseño, desarrollo y explico el software.",
      link: "Conocer mi historia y cómo trabajo"
    }
  }
} as const satisfies Record<Locale, ProfileCopy>;

interface ProjectPerspective {
  summary: string;
  contribution: string;
  focus: string;
  learning: string;
  connection: string;
}
export const projectPerspectives = {
  en: {
    "lock-in": {
      summary:
        "An Android wallpaper that brings planning, focus and study into one modular panel. A shared preview helps people choose what to show and understand what fits.",
      contribution:
        "Product concept, interaction design, Android development and internal releases.",
      focus: "Information design · Shared rendering · Android delivery",
      learning:
        "Space is part of the interface contract. A useful preview has to explain capacity, preserve priorities and match what the phone will draw.",
      connection:
        "LockIn shows how I translate a personal need into a product and manage the constraints of a real Android surface."
    },
    setline: {
      summary:
        "An Android strength-training log with editable previous loads, custom routines and local backups. Clear inputs keep planned targets separate from actual performance.",
      contribution:
        "Product requirements, UX priorities, local-data workflows and physical QA coordination.",
      focus: "Touch interaction · State models · Local persistence",
      learning:
        "Reusing a routine should preserve its structure without copying a completed workout. That distinction shapes the data model, input flow and backup checks.",
      connection:
        "Setline complements LockIn with deeper work on input, session history, persistence and recovery."
    },
    "video-rescue": {
      summary:
        "A supervised XJTLU web prototype for human-AI coordination. Reports, transcripts and a shared map support a team while people retain responsibility for decisions.",
      contribution:
        "Web prototype development and support for study design, sessions and analysis within a two-student team.",
      focus: "Web systems · Human-AI Interaction · Team research",
      learning:
        "An AI answer must make its supporting information and unknowns inspectable. A visible map alone does not give the assistant geographic context.",
      connection:
        "This work complements the Android products with web development, collaborative research and human responsibility in AI interfaces."
    }
  },
  es: {
    "lock-in": {
      summary:
        "Un fondo Android que reúne planificación, enfoque y estudio en un panel modular. La vista previa compartida ayuda a elegir qué mostrar y entender qué cabe.",
      contribution:
        "Concepto de producto, diseño de interacción, desarrollo Android y versiones internas.",
      focus: "Diseño de información · Render compartido · Entrega Android",
      learning:
        "El espacio forma parte del compromiso de la interfaz. Una vista previa útil explica la capacidad, conserva prioridades y coincide con lo que dibujará el móvil.",
      connection:
        "LockIn muestra cómo convierto una necesidad personal en producto y trabajo con las restricciones de una superficie Android real."
    },
    setline: {
      summary:
        "Un registro de fuerza Android con cargas anteriores editables, rutinas propias y copias locales. Una entrada clara separa el objetivo de lo que realmente se hizo.",
      contribution:
        "Requisitos de producto, prioridades de UX, flujos de datos locales y coordinación de QA físico.",
      focus: "Interacción táctil · Modelos de estado · Persistencia local",
      learning:
        "Reutilizar una rutina debe conservar su estructura sin copiar un entrenamiento completado. Esa diferencia orienta el modelo de datos, la entrada y las pruebas de restauración.",
      connection:
        "Setline complementa LockIn con más trabajo sobre entrada de datos, historial de sesiones, persistencia y recuperación."
    },
    "video-rescue": {
      summary:
        "Un prototipo web supervisado de XJTLU para coordinación persona-IA. Informes, transcripciones y mapa compartido apoyan al equipo; las personas conservan las decisiones.",
      contribution:
        "Desarrollo de prototipo web y apoyo al diseño del estudio, sesiones y análisis dentro de un equipo de dos estudiantes.",
      focus: "Sistemas web · Interacción persona-IA · Investigación en equipo",
      learning:
        "Una respuesta de IA debe permitir revisar los informes que la apoyan y sus incógnitas. Mostrar un mapa no aporta por sí solo contexto geográfico al asistente.",
      connection:
        "Este trabajo complementa los productos Android con desarrollo web, investigación colaborativa y responsabilidad humana en las interfaces de IA."
    }
  }
} as const satisfies Record<Locale, Record<ProjectSlug, ProjectPerspective>>;
