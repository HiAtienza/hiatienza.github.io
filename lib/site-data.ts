import { mobileProjects } from "./mobile-products";

export type Locale = "en" | "es";

export const siteUrl = "https://hiatienza.github.io";
export const external = {
  github: "https://github.com/HiAtienza",
  linkedin: "https://www.linkedin.com/in/hiatienza/"
};

export const slugs = ["lock-in", "video-rescue", "setline"] as const;
export type ProjectSlug = (typeof slugs)[number];

export interface Project {
  slug: ProjectSlug;
  order: string;
  name: string;
  context: string;
  problem: string;
  role: string;
  tech: string[];
  status: string;
  summary: string;
  facts: { title: string; text: string }[];
  limitation: string;
  next: string;
}

export interface Experience {
  date: string;
  title: string;
  detail: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}

export const copy = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      research: "Research",
      contact: "Contact",
      language: "Español"
    },
    hero: {
      eyebrow: "Computer Science student · XJTLU",
      title: "I’m Adrián. I build useful software for people.",
      lead: "I develop Android apps and web products, from the first interaction to local data, testing and delivery. I care about how people use them, and explore human-centered AI through supervised research.",
      work: "Explore my work",
      about: "Get to know me",
      cv: "Download CV",
      visual: "View public visual CV",
      signals: [
        "Suzhou · Spain ↔ China",
        "Year 3 · graduation July 2028",
        "Seeking engineering internships"
      ]
    },
    about: {
      label: "About",
      title: "Software Engineering is the foundation; human-centered systems are the direction.",
      body: "I’m a Year 3 BSc Information and Computing Science student at Xi’an Jiaotong-Liverpool University. I build full-stack web, Android and applied-AI products that help people understand information, learn, recognise patterns and make decisions.",
      side: "Spain ↔ China\nInternational context, practical collaboration and a product mindset."
    },
    projects: {
      label: "Selected work",
      title: "Three projects. One way of thinking.",
      link: "Read case study",
      source: "Source remains private"
    },
    research: {
      label: "Supervised research",
      title: "Human-AI coordination with accountability kept visible.",
      body: "Within the XJTLU Summer Undergraduate Research Fellowship, I contribute as one of two student team members to supervised work on AI-powered transcript coordination for search-and-rescue scenarios. The prototype connects reports, maps, live media, tasks and evidence-linked suggestions while human operators remain responsible for decisions.",
      link: "Explore research context"
    },
    process: {
      label: "How I work",
      title: "Understand. Build. Check. Improve.",
      steps: [
        "Understand the need",
        "Prototype the interaction",
        "Build the data and logic",
        "Check clarity and behavior",
        "Refine with evidence"
      ],
      body: "I start with a specific need, build a usable flow, then check the interaction and the data behind it. Tests, device checks and feedback guide the next iteration."
    },
    specialization: {
      label: "Engineering & HCI practice",
      title: "One engineering path, shaped by how people learn and decide.",
      intro:
        "My technical backbone is Software Engineering, which I actively expand into Human-Centered AI and Behavioral Technology through research and production prototypes.",
      parts: [
        [
          "Software Engineering",
          "Gives systems structure through architecture, implementation, data, testing and reliability."
        ],
        [
          "Behavioral Technology",
          "Turns attention, learning, patterns and reflection into concrete product-design questions."
        ],
        [
          "Human-Centered AI",
          "Keeps evidence, uncertainty, human control and real decision contexts visible."
        ],
        [
          "Human-AI Interaction",
          "Determines whether intelligent support becomes understandable, accountable and genuinely useful."
        ]
      ],
      outcome:
        "Together, these layers guide me toward software that helps people understand, learn, decide and act."
    },
    skills: {
      label: "Skills",
      title: "Tools I use to build and check products.",
      priorities: [
        "Software Engineering",
        "Human-Centered AI",
        "Product Development",
        "Human-AI Interaction",
        "Human-Computer Interaction",
        "TypeScript",
        "Applied AI",
        "Behavioral Technology",
        "User-Centered Design",
        "Learning Technology"
      ],
      groups: [
        ["Engineering foundation", "TypeScript · JavaScript · Java · Python · Kotlin · Git"],
        ["Web & backend", "React · Next.js · REST APIs · IndexedDB · SQLite · SQL"],
        ["Android", "Kotlin · Jetpack Compose · DataStore · Capacitor · Android Java"],
        [
          "Quality",
          "Unit and integration tests · Playwright · Android device checks · Technical documentation"
        ],
        [
          "Human-centered practice",
          "Human-Centered AI · Human-AI Interaction · Human-Computer Interaction · User-Centered Design · Learning Technology · Behavioral Technology"
        ]
      ]
    },
    journey: {
      label: "Journey",
      title: "The experience behind my work.",
      items: [
        {
          date: "Jul 2026 – present",
          title: "Undergraduate Researcher",
          detail:
            "XJTLU Summer Undergraduate Research Fellowship · supervised HCI research and VIDEO-RESCUE prototype work."
        },
        {
          date: "2026 – present",
          title: "Independent product development",
          detail:
            "Currently building LockIn and Setline, connecting everyday planning and workout logging with local data and clear interaction design."
        },
        {
          date: "Jul – Sep 2024",
          title: "Bellperson · Marriott International",
          detail:
            "Marriott International · Bellperson, Madrid. Multicultural service work strengthened active listening, situational awareness and clear communication across the service layer."
        },
        {
          date: "2023 – 2024",
          title: "Freelance mathematics tutor",
          detail: "Madrid · adapted explanations and practice to individual learners."
        },
        {
          date: "2025 – 2028",
          title: "BSc Information and Computing Science",
          detail: "Xi’an Jiaotong-Liverpool University · current Year 3 student."
        },
        {
          date: "2022 – 2025",
          title: "Foundational Coursework in Software Engineering (Transferred to XJTLU)",
          detail: "U-TAD · English-taught foundational coursework, 2022–2025."
        }
      ] satisfies readonly Experience[]
    },
    contact: {
      label: "Contact",
      title: "Let’s talk about what I can help build.",
      body: "I’m looking for software engineering and product-development internships where I can contribute to Android or web products and keep learning with a team. Based in Suzhou; open to opportunities in Shanghai, Spain, the EU and compatible remote roles.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download ATS CV",
      visual: "View visual CV"
    },
    footer:
      "© 2026 Adrián Muñoz Atienza. Source code is MIT licensed; personal content remains protected.",
    privacy: {
      label: "Privacy",
      title: "A public portfolio with deliberate boundaries.",
      intro:
        "This site intentionally describes work without publishing sensitive personal, research or operational material.",
      points: [
        "No phone number, home address, private email or identity document.",
        "No private repository, deployment, participant, mission or transcript link.",
        "Product releases are identified as internal testing. Research evidence is presented with its documented scope.",
        "Case studies use explanatory illustrations and labelled app captures with fictional demonstration data. No personal calendar events, participant-session captures or private source code are published."
      ]
    },
    researchPage: {
      label: "Research context",
      title: "How can AI help a team coordinate?",
      intro:
        "In supervised XJTLU research, I help build and study a web prototype that connects live reports, transcripts and AI assistance for small search teams. People remain responsible for the decisions.",
      sections: [
        [
          "Setting",
          "I contribute as one of two student team members under supervision. The wider research framing, study outputs and responsibility are shared; the site distinguishes that context from my prototype implementation contribution."
        ],
        [
          "Contribution",
          "I developed browser-based prototype work that explores how voice reports, maps, live media, tasks and durable events can be connected in one coordination view."
        ],
        [
          "Human-AI interaction",
          "Evidence-linked suggestions surface supporting events, confidence, unknowns and possible next actions. Human operators retain decision responsibility."
        ],
        [
          "Evaluation and privacy",
          "I supported study design, recruitment, sessions and analysis. The supplied presentation reports data collection complete, with fuller analysis ongoing. Public captures use fictional exercise reports; actual participant-session images, transcripts and connection codes are excluded."
        ]
      ]
    }
  },
  es: {
    nav: {
      work: "Proyectos",
      about: "Sobre mí",
      research: "Investigación",
      contact: "Contacto",
      language: "English"
    },
    hero: {
      eyebrow: "Estudiante de Computer Science · XJTLU",
      title: "Soy Adrián. Construyo software útil para las personas.",
      lead: "Desarrollo apps Android y productos web, desde la primera interacción hasta los datos, las pruebas y la entrega. Cuido cómo las personas los usan y exploro la IA centrada en las personas mediante investigación supervisada.",
      work: "Ver mis proyectos",
      about: "Conóceme",
      cv: "CV en inglés",
      visual: "Ver CV visual público",
      signals: [
        "Suzhou · España ↔ China",
        "3.er curso · graduación julio 2028",
        "Busco prácticas de ingeniería"
      ]
    },
    about: {
      label: "Perfil",
      title:
        "Software Engineering es la base; los sistemas centrados en las personas son la dirección.",
      body: "Soy estudiante de tercer curso del BSc Information and Computing Science en Xi’an Jiaotong-Liverpool University. Desarrollo productos web full-stack, Android y de IA aplicada que ayudan a comprender información, aprender, reconocer patrones y tomar decisiones.",
      side: "España ↔ China\nContexto internacional, colaboración práctica y mentalidad de producto."
    },
    projects: {
      label: "Proyectos seleccionados",
      title: "Tres proyectos. Una forma de trabajar.",
      link: "Leer caso de estudio",
      source: "El código fuente permanece privado"
    },
    research: {
      label: "Investigación supervisada",
      title: "Coordinación persona-IA con responsabilidad visible.",
      body: "Dentro de la XJTLU Summer Undergraduate Research Fellowship, colaboro como uno de los dos estudiantes del equipo en investigación supervisada sobre coordinación de transcripciones asistida por IA para búsqueda y rescate. El prototipo conecta informes, mapas, contenido multimedia en directo, tareas y sugerencias vinculadas a evidencias, manteniendo las decisiones en operadores humanos.",
      link: "Explorar el contexto de investigación"
    },
    process: {
      label: "Cómo trabajo",
      title: "Entender. Construir. Comprobar. Mejorar.",
      steps: [
        "Entender la necesidad",
        "Prototipar la interacción",
        "Construir datos y lógica",
        "Comprobar claridad y comportamiento",
        "Mejorar con evidencias"
      ],
      body: "Parto de una necesidad concreta, construyo un recorrido utilizable y compruebo tanto la interacción como los datos. Las pruebas, la revisión en dispositivos y el feedback orientan la siguiente iteración."
    },
    specialization: {
      label: "Práctica de ingeniería y HCI",
      title: "Una trayectoria de ingeniería guiada por cómo aprendemos y decidimos.",
      intro:
        "Mi base técnica es la ingeniería de software, que amplío activamente hacia la IA centrada en las personas y la tecnología del comportamiento mediante investigación y prototipos de producto.",
      parts: [
        [
          "Software Engineering",
          "Da estructura a los sistemas mediante arquitectura, implementación, datos, pruebas y fiabilidad."
        ],
        [
          "Behavioral Technology",
          "Convierte la atención, el aprendizaje, los patrones y la reflexión en preguntas concretas de diseño de producto."
        ],
        [
          "Human-Centered AI",
          "Mantiene visibles la evidencia, la incertidumbre, el control humano y el contexto real de decisión."
        ],
        [
          "Interacción persona-IA",
          "Determina si el apoyo inteligente resulta comprensible, responsable y realmente útil."
        ]
      ],
      outcome:
        "En conjunto, estas capas orientan mi trabajo hacia software que ayuda a comprender, aprender, decidir y actuar."
    },
    skills: {
      label: "Aptitudes",
      title: "Herramientas para construir y comprobar productos.",
      priorities: [
        "Software Engineering",
        "Human-Centered AI",
        "Product Development",
        "Interacción persona-IA",
        "Interacción persona-ordenador",
        "TypeScript",
        "IA aplicada",
        "Behavioral Technology",
        "Diseño centrado en las personas",
        "Learning Technology"
      ],
      groups: [
        ["Base de ingeniería", "TypeScript · JavaScript · Java · Python · Kotlin · Git"],
        ["Web y backend", "React · Next.js · REST APIs · IndexedDB · SQLite · SQL"],
        ["Android", "Kotlin · Jetpack Compose · DataStore · Capacitor · Android Java"],
        [
          "Calidad",
          "Pruebas unitarias e integración · Playwright · Revisión en Android físico · Documentación"
        ],
        [
          "Práctica human-centered",
          "Human-Centered AI · Interacción persona-IA · Interacción persona-ordenador · Diseño centrado en las personas · Learning Technology · Behavioral Technology"
        ]
      ]
    },
    journey: {
      label: "Trayectoria",
      title: "La experiencia detrás de mi trabajo.",
      items: [
        {
          date: "Jul 2026 – actualidad",
          title: "Investigador universitario",
          detail:
            "XJTLU Summer Undergraduate Research Fellowship · investigación supervisada de HCI y trabajo de prototipo VIDEO-RESCUE."
        },
        {
          date: "2026 – actualidad",
          title: "Desarrollo de productos independientes",
          detail:
            "Ahora desarrollo LockIn y Setline: organización cotidiana y registro de entrenamientos con datos locales e interacciones claras."
        },
        {
          date: "Jul – Sep 2024",
          title: "Botones · Marriott International",
          detail:
            "Marriott International · Botones, Madrid. La atención multicultural reforzó la escucha activa, la comprensión del contexto y la comunicación clara durante el servicio."
        },
        {
          date: "2023 – 2024",
          title: "Profesor particular de matemáticas",
          detail: "Madrid · explicaciones y práctica adaptadas a cada estudiante."
        },
        {
          date: "2025 – 2028",
          title: "BSc Information and Computing Science",
          detail: "Xi’an Jiaotong-Liverpool University · estudiante actual de tercer curso."
        },
        {
          date: "2022 – 2025",
          title: "Formación inicial en Ingeniería del Software (traslado a XJTLU)",
          detail: "U-TAD · formación inicial impartida en inglés, 2022–2025."
        }
      ] satisfies readonly Experience[]
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de lo que puedo ayudar a construir.",
      body: "Busco prácticas de ingeniería de software y desarrollo de producto para aportar a apps Android o productos web y seguir aprendiendo en equipo. Vivo en Suzhou; estoy abierto a oportunidades en Shanghái, España, la UE y trabajo remoto compatible.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV ATS · inglés",
      visual: "CV visual · inglés"
    },
    footer:
      "© 2026 Adrián Muñoz Atienza. El código fuente usa licencia MIT; el contenido personal permanece protegido.",
    privacy: {
      label: "Privacidad",
      title: "Un portfolio público con límites deliberados.",
      intro:
        "Este sitio describe trabajo de forma intencional sin publicar material personal, de investigación u operativo sensible.",
      points: [
        "No contiene teléfono, dirección, correo privado ni documento de identidad.",
        "No enlaza repositorios, despliegues, participantes, misiones o transcripciones privadas.",
        "Las versiones de producto se identifican como pruebas internas. La evidencia de investigación conserva su alcance documentado.",
        "Los casos utilizan ilustraciones explicativas y capturas identificadas con datos ficticios. No se publican eventos personales, capturas de sesiones de participantes ni código privado."
      ]
    },
    researchPage: {
      label: "Contexto de investigación",
      title: "¿Cómo puede la IA ayudar a un equipo a coordinarse?",
      intro:
        "En investigación supervisada de XJTLU, ayudo a construir y estudiar un prototipo web que conecta informes, transcripciones en directo y apoyo de IA para pequeños equipos de búsqueda. Las personas conservan las decisiones.",
      sections: [
        [
          "Entorno",
          "Colaboro como uno de los dos estudiantes del equipo bajo supervisión. El marco de investigación, los resultados del estudio y la responsabilidad son compartidos; este sitio distingue ese contexto de mi contribución de implementación."
        ],
        [
          "Contribución",
          "Desarrollé trabajo de prototipo web que explora cómo conectar informes de voz, mapas, contenido multimedia en directo, tareas y eventos persistentes en una misma vista de coordinación."
        ],
        [
          "Interacción persona-IA",
          "Las sugerencias vinculadas a evidencias muestran eventos de apoyo, confianza, incógnitas y posibles siguientes pasos. Los operadores humanos mantienen la responsabilidad de decisión."
        ],
        [
          "Evaluación y privacidad",
          "Apoyé el diseño del estudio, la captación, las sesiones y el análisis. La presentación facilitada indica recogida de datos completada y análisis más completo en curso. Las capturas públicas usan informes ficticios; se excluyen imágenes de sesiones reales, transcripciones de participantes y códigos de conexión."
        ]
      ]
    }
  }
} as const;

export const projects: Record<Locale, Record<ProjectSlug, Project>> = {
  en: {
    ...mobileProjects.en,
    "video-rescue": {
      slug: "video-rescue",
      order: "02",
      name: "VIDEO-RESCUE",
      context: "Supervised XJTLU research · one of two student team members",
      problem:
        "Fragmented field information can make it difficult for teams to form a shared picture without losing accountability.",
      role: "Browser-prototype development within supervised research",
      tech: ["React", "TypeScript", "Express", "SQLite", "LiveKit/WebRTC"],
      status: "Research prototype · data collection complete, fuller analysis ongoing",
      summary:
        "A browser-based coordination prototype that connects maps, live media, captions, durable events, operator tasking and evidence-linked AI support.",
      facts: [
        {
          title: "System overview",
          text: "Field media, live transcripts, a map for human operators and durable reports share one workspace. Report assignment, receipt confirmation and export support follow-up and later review."
        },
        {
          title: "Human-AI interaction",
          text: "The assistant helps retrieve and relate reports while keeping unknowns visible. The published demonstration distinguishes logged records from unverified speech; these UI labels are not independent validation of truth."
        },
        {
          title: "Decision boundary",
          text: "Human operators retain decision responsibility; the prototype does not automate rescue decisions."
        },
        {
          title: "Research setting",
          text: "The work sits in a supervised, two-student research context. The supplied presentation reports data collection complete and preliminary qualitative feedback; fuller analysis remains ongoing."
        }
      ],
      limitation:
        "No field deployment, operational safety claim, rescue-outcome claim or validated AI-accuracy claim is made. The assistant does not directly access map data, building names or distances; a human-visible map does not establish AI navigation.",
      next: "Complete fuller analysis and explore team-wide assistance and geographic-context integration as future work, guided by the preliminary feedback."
    }
  },
  es: {
    ...mobileProjects.es,
    "video-rescue": {
      slug: "video-rescue",
      order: "02",
      name: "VIDEO-RESCUE",
      context: "Investigación supervisada en XJTLU · uno de los dos estudiantes del equipo",
      problem:
        "La información de campo fragmentada puede dificultar que un equipo comparta una visión común sin perder responsabilidad.",
      role: "Desarrollo de prototipo web dentro de investigación supervisada",
      tech: ["React", "TypeScript", "Express", "SQLite", "LiveKit/WebRTC"],
      status: "Prototipo de investigación · datos recogidos, análisis más completo en curso",
      summary:
        "Un prototipo web de coordinación que conecta mapas, contenido multimedia en directo, subtítulos, eventos persistentes, tareas y asistencia de IA vinculada a evidencias.",
      facts: [
        {
          title: "Visión del sistema",
          text: "Contenidos de campo, transcripciones en directo, un mapa para operadores humanos e informes persistentes comparten un espacio. La asignación, confirmación de recepción y exportación permiten seguimiento y revisión posterior."
        },
        {
          title: "Interacción persona-IA",
          text: "El asistente ayuda a recuperar y relacionar informes manteniendo visibles las incógnitas. La demostración publicada distingue registros de voz no verificada; estas etiquetas no validan la verdad de forma independiente."
        },
        {
          title: "Límite de decisión",
          text: "Los operadores humanos mantienen la responsabilidad de decisión; el prototipo no automatiza decisiones de rescate."
        },
        {
          title: "Entorno de investigación",
          text: "El trabajo se sitúa en investigación supervisada con dos estudiantes. La presentación facilitada indica recogida de datos completada y comentarios cualitativos preliminares; el análisis más completo continúa."
        }
      ],
      limitation:
        "No se afirma despliegue de campo, seguridad operativa, mejora de resultados de rescate ni precisión validada de IA. El asistente no accede directamente a datos del mapa, nombres de edificios ni distancias; un mapa visible para personas no demuestra navegación con IA.",
      next: "Completar el análisis más amplio y explorar asistencia para todo el equipo e integración de contexto geográfico como trabajo futuro, a partir de los comentarios preliminares."
    }
  }
};

export const aboutPages = {
  en: {
    label: "About",
    title: "I like to build, understand and improve.",
    intro:
      "I’m Adrián Muñoz Atienza, a Computer Science student in Suzhou. I build useful products and care about the experience of the people using them. My current work combines Android apps, web development and supervised human-AI research.",
    storyTitle: "A path shaped between Spain and China.",
    story: [
      "I began my software engineering studies at U-TAD in Madrid before transferring to Xi’an Jiaotong-Liverpool University, where I am now a Year 3 BSc Information and Computing Science student with expected graduation in July 2028.",
      "Moving between countries and working in tutoring, multicultural customer service and supervised research taught me to treat communication as part of engineering. A system is not useful simply because it works; people also need to understand what it is doing, trust its boundaries and know what to do next.",
      "LockIn began with my own need to find university class times and rooms without moving between apps. I wanted a connected calendar that stayed useful throughout the day, and developed it into a modular planning, focus and study panel.",
      "That idea connects my current work: LockIn makes plans and attention visible; Setline makes workout records easier to capture and review; VIDEO-RESCUE explores coordination support for complex transcripts within supervised research."
    ],
    dual: [
      {
        label: "Engineering foundation",
        title: "I build the complete flow.",
        body: "I connect the interface to its data, logic and device behavior. In LockIn that means a shared wallpaper preview; in Setline, routines that remain independent of workout history."
      },
      {
        label: "People and interaction",
        title: "I look at what people need next.",
        body: "Tutoring and customer service taught me to adapt explanations and listen. I bring that perspective to interfaces: clear next actions, useful feedback and understandable AI support."
      }
    ],
    principlesTitle: "How I like to work",
    principles: [
      [
        "Start with the person",
        "LockIn starts from a daily need: find the next class, its time and its room."
      ],
      [
        "Build the whole path",
        "In Setline, follow a free workout through saving a routine, starting again and restoring a backup."
      ],
      [
        "Keep evidence visible",
        "In VIDEO-RESCUE, show supporting reports and unknowns so a person can assess a suggestion."
      ],
      [
        "Learn through testing",
        "Check geometry, data recovery and device behavior; use findings to improve the next version."
      ]
    ],
    factsTitle: "My current situation",
    facts: [
      "Spanish native speaker; professional English.",
      "Based in Suzhou and open to relocation across target regions.",
      "Seeking software engineering and product-development internships.",
      "Year 3 at XJTLU; expected graduation July 2028. Learning Mandarin Chinese."
    ],
    cta: "See how this thinking becomes product work"
  },
  es: {
    label: "Sobre mí",
    title: "Me gusta construir, entender y mejorar.",
    intro:
      "Soy Adrián Muñoz Atienza, estudiante de Computer Science en Suzhou. Construyo productos útiles y cuido la experiencia de quienes los usan. Mi trabajo actual combina apps Android, desarrollo web e investigación supervisada sobre interacción con IA.",
    storyTitle: "Un recorrido construido entre España y China.",
    story: [
      "Comencé mis estudios de ingeniería del software en U-TAD, Madrid, antes de trasladarme a Xi’an Jiaotong-Liverpool University, donde actualmente curso tercero del BSc Information and Computing Science y tengo prevista la graduación en julio de 2028.",
      "Vivir entre países y trabajar en tutoría, atención al cliente multicultural e investigación supervisada me enseñó que la comunicación forma parte de la ingeniería. Un sistema no es útil solo porque funcione: las personas también necesitan entender qué hace, confiar en sus límites y saber cuál es el siguiente paso.",
      "LockIn nació de mi necesidad de consultar horarios y aulas de la universidad sin recorrer varias aplicaciones. Quería un calendario conectado que siguiera siendo útil durante el día y lo desarrollé hasta convertirlo en un panel modular de planificación, enfoque y estudio.",
      "Esa idea conecta mi trabajo actual: LockIn hace visibles los planes y la atención; Setline facilita registrar y revisar entrenamientos; VIDEO-RESCUE explora el apoyo a la coordinación de transcripciones complejas en investigación supervisada."
    ],
    dual: [
      {
        label: "Base de ingeniería",
        title: "Construyo el recorrido completo.",
        body: "Conecto la interfaz con sus datos, lógica y comportamiento en el dispositivo. En LockIn eso se concreta en una vista previa compartida; en Setline, en rutinas independientes del historial."
      },
      {
        label: "Personas e interacción",
        title: "Pienso en lo que la persona necesita después.",
        body: "La tutoría y la atención al cliente me enseñaron a adaptar explicaciones y escuchar. Llevo esa perspectiva a las interfaces: próximas acciones claras, feedback útil y apoyo de IA comprensible."
      }
    ],
    principlesTitle: "Cómo me gusta trabajar",
    principles: [
      [
        "Empezar por la persona",
        "LockIn parte de una necesidad cotidiana: encontrar la próxima clase, su hora y su aula."
      ],
      [
        "Construir el recorrido completo",
        "En Setline, recorrer una sesión libre, guardar una rutina, volver a empezar y restaurar una copia."
      ],
      [
        "Mantener visible la evidencia",
        "En VIDEO-RESCUE, mostrar informes de apoyo e incógnitas para que una persona valore la sugerencia."
      ],
      [
        "Aprender mediante pruebas",
        "Comprobar geometría, recuperación de datos y comportamiento del móvil; mejorar la siguiente versión con lo observado."
      ]
    ],
    factsTitle: "Mi situación actual",
    facts: [
      "Español nativo e inglés de uso profesional.",
      "Vivo en Suzhou y estoy abierto a reubicarme en las regiones objetivo.",
      "Busco prácticas de ingeniería de software y desarrollo de producto.",
      "Curso tercero en XJTLU; graduación prevista en julio de 2028. Estoy aprendiendo chino mandarín."
    ],
    cta: "Ver cómo este enfoque se convierte en producto"
  }
} as const;

export function isProjectSlug(value: string): value is ProjectSlug {
  return slugs.some((slug) => slug === value);
}

/** Internal page URLs follow the exported directory/index.html structure. */
export function route(locale: Locale, path = "/"): string {
  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const rooted = pathname ? (pathname.startsWith("/") ? pathname : `/${pathname}`) : "/";
  const normalized = rooted.endsWith("/") ? rooted : `${rooted}/`;
  const localized = locale === "en" ? normalized : `/es${normalized}`;
  return `${localized}${suffix}`;
}
