export type Locale = "en" | "es";

export const siteUrl = "https://hiatienza.github.io";
export const external = {
  github: "https://github.com/HiAtienza",
  linkedin: "https://www.linkedin.com/in/inmunozatienza"
};

export const slugs = ["video-rescue", "cybermastery", "lifemap"] as const;
export type ProjectSlug = (typeof slugs)[number];

type Project = {
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
};

export const copy = {
  en: {
    nav: {
      work: "Work",
      research: "Research",
      process: "How I build",
      contact: "Contact",
      language: "Español"
    },
    hero: {
      eyebrow: "Computer Science Student @ XJTLU",
      title: "Building software that helps people understand, learn and act.",
      lead: "Product-focused Software Engineering | Android, Full-Stack Web & Applied AI",
      meta: "Suzhou, China · Expected graduation July 2028 · Open to software engineering internships",
      work: "Explore my work",
      cv: "Download public ATS CV",
      visual: "View public visual CV"
    },
    about: {
      label: "About",
      title: "Human-centred engineering, grounded in the product work.",
      body: "I’m a Year 3 BSc Information and Computing Science student at Xi’an Jiaotong-Liverpool University. I build across full-stack web, Android and applied-AI products, with a focus on making complex information easier to understand and act on. Tutoring and multicultural customer service have strengthened how I listen, explain and design for real people.",
      side: "Spain ↔ China\nInternational context, practical collaboration and a product mindset."
    },
    projects: {
      label: "Flagship projects",
      title: "Three product threads. One engineering direction.",
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
      label: "How I build",
      title: "A small loop for turning uncertainty into useful software.",
      steps: ["Understand", "Design", "Build", "Test", "Learn", "Improve"],
      body: "I start with the real user problem, narrow the scope, select an architecture and build an end-to-end workflow. I test edge cases, make limitations visible, and improve from evidence rather than assumption."
    },
    skills: {
      label: "Skills",
      title: "Tools and practices I use to make work concrete.",
      groups: [
        [
          "Core engineering",
          "Software Engineering · TypeScript · JavaScript · Java · Python · Kotlin · Git"
        ],
        [
          "Web & backend",
          "React · Next.js · REST APIs · PostgreSQL · SQL · Prisma · SQLite · Authentication"
        ],
        [
          "Android",
          "Android Development · Jetpack Compose · Preferences DataStore · Accessibility"
        ],
        [
          "Quality",
          "Automated Testing · Unit Testing · Integration Testing · Browser Testing · Playwright · Technical Documentation"
        ],
        [
          "Human-centred",
          "Product Development · Human-Computer Interaction · Human-AI Interaction · Learning Technology · Active Listening · Cross-Cultural Communication"
        ]
      ]
    },
    journey: {
      label: "Journey",
      title: "Engineering practice, research context and international experience.",
      items: [
        [
          "2026 – present",
          "Undergraduate Researcher",
          "XJTLU Summer Undergraduate Research Fellowship · supervised HCI research and VIDEO-RESCUE prototype work."
        ],
        [
          "2026 – present",
          "Independent product development",
          "CyberMastery and LifeMap across full-stack web and Android."
        ],
        [
          "2024",
          "Bellperson",
          "Marriott International · seasonal multicultural customer service in Madrid."
        ],
        [
          "2025 – 2028",
          "BSc Information and Computing Science",
          "Xi’an Jiaotong-Liverpool University · current Year 3 student."
        ],
        [
          "2022 – 2025",
          "Previous Software Engineering studies",
          "U-TAD · English-taught study before transfer to XJTLU; no degree award claimed."
        ]
      ]
    },
    contact: {
      label: "Contact",
      title: "Open to internships and conversations about useful, human-centred products.",
      body: "For a public conversation, reach me through LinkedIn or GitHub. I’m currently seeking product-focused software engineering internships.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download public ATS CV"
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
        "No operational rescue, autonomous decision, AI-accuracy, production or validated-impact claim.",
        "Case studies use simplified explanatory diagrams rather than private screenshots or source code."
      ]
    },
    researchPage: {
      label: "Research context",
      title: "Designing coordination support that keeps human judgment in the loop.",
      intro:
        "VIDEO-RESCUE is part of supervised XJTLU research into AI-powered transcript coordination for search-and-rescue scenarios. It is a research prototype, not an operational rescue platform.",
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
          "I supported study design, participant recruitment, research sessions and analysis. No participant identifiers, mission data, transcripts or internal material are published here."
        ]
      ]
    }
  },
  es: {
    nav: {
      work: "Proyectos",
      research: "Investigación",
      process: "Cómo trabajo",
      contact: "Contacto",
      language: "English"
    },
    hero: {
      eyebrow: "Estudiante de Informática en XJTLU",
      title: "Desarrollo software que ayuda a comprender, aprender y actuar.",
      lead: "Ingeniería de software orientada a producto | Android, web full-stack e IA aplicada",
      meta: "Suzhou, China · Finalización prevista: julio de 2028 · Busco prácticas de ingeniería de software",
      work: "Explorar proyectos",
      cv: "Descargar CV ATS público",
      visual: "Ver CV visual público"
    },
    about: {
      label: "Perfil",
      title: "Ingeniería centrada en las personas y conectada con el producto.",
      body: "Soy estudiante de tercer curso del BSc Information and Computing Science en Xi’an Jiaotong-Liverpool University. Desarrollo productos web full-stack, Android y de IA aplicada, con interés en hacer que la información compleja sea más fácil de comprender y usar. La tutoría y la atención al cliente multicultural han reforzado mi forma de escuchar, explicar y diseñar para personas reales.",
      side: "España ↔ China\nContexto internacional, colaboración práctica y mentalidad de producto."
    },
    projects: {
      label: "Proyectos principales",
      title: "Tres líneas de producto. Una dirección de ingeniería.",
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
      title: "Un ciclo breve para convertir incertidumbre en software útil.",
      steps: ["Comprender", "Diseñar", "Construir", "Probar", "Aprender", "Mejorar"],
      body: "Empiezo por el problema real de la persona usuaria, acoto el alcance, selecciono una arquitectura y construyo un flujo completo. Pruebo casos límite, hago visibles las limitaciones y mejoro a partir de evidencias."
    },
    skills: {
      label: "Aptitudes",
      title: "Herramientas y prácticas para convertir ideas en productos.",
      groups: [
        [
          "Ingeniería base",
          "Software Engineering · TypeScript · JavaScript · Java · Python · Kotlin · Git"
        ],
        [
          "Web y backend",
          "React · Next.js · REST APIs · PostgreSQL · SQL · Prisma · SQLite · Authentication"
        ],
        [
          "Android",
          "Android Development · Jetpack Compose · Preferences DataStore · Accessibility"
        ],
        [
          "Calidad",
          "Automated Testing · Unit Testing · Integration Testing · Browser Testing · Playwright · Technical Documentation"
        ],
        [
          "Centrado en las personas",
          "Product Development · Interacción persona-ordenador · Interacción persona-IA · Learning Technology · Active Listening · Cross-Cultural Communication"
        ]
      ]
    },
    journey: {
      label: "Trayectoria",
      title: "Práctica de ingeniería, investigación e experiencia internacional.",
      items: [
        [
          "2026 – actualidad",
          "Investigador universitario",
          "XJTLU Summer Undergraduate Research Fellowship · investigación supervisada de HCI y trabajo de prototipo VIDEO-RESCUE."
        ],
        [
          "2026 – actualidad",
          "Desarrollo de productos independientes",
          "CyberMastery y LifeMap en desarrollo web full-stack y Android."
        ],
        [
          "2024",
          "Botones",
          "Marriott International · atención al cliente multicultural de temporada en Madrid."
        ],
        [
          "2025 – 2028",
          "BSc Information and Computing Science",
          "Xi’an Jiaotong-Liverpool University · estudiante actual de tercer curso."
        ],
        [
          "2022 – 2025",
          "Estudios previos de Ingeniería del Software",
          "U-TAD · estudios en inglés previos al traslado a XJTLU; no se afirma la obtención de un título."
        ]
      ]
    },
    contact: {
      label: "Contacto",
      title:
        "Abierto a prácticas y conversaciones sobre productos útiles y centrados en las personas.",
      body: "Para una conversación pública, puedes contactar conmigo a través de LinkedIn o GitHub. Actualmente busco prácticas de ingeniería de software orientada a producto.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV ATS público"
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
        "No afirma despliegue operativo, decisiones autónomas, precisión de IA, producción ni impacto validado.",
        "Los casos de estudio usan diagramas explicativos simplificados, no capturas privadas ni código fuente."
      ]
    },
    researchPage: {
      label: "Contexto de investigación",
      title: "Diseñar apoyo a la coordinación que mantiene el juicio humano en el centro.",
      intro:
        "VIDEO-RESCUE forma parte de investigación supervisada en XJTLU sobre coordinación de transcripciones asistida por IA para escenarios de búsqueda y rescate. Es un prototipo de investigación, no una plataforma operativa de rescate.",
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
          "Apoyé el diseño del estudio, la captación de participantes, las sesiones de investigación y el análisis. No se publica ningún identificador de participante, dato de misión, transcripción ni material interno."
        ]
      ]
    }
  }
} as const;

export const projects: Record<Locale, Record<ProjectSlug, Project>> = {
  en: {
    "video-rescue": {
      slug: "video-rescue",
      order: "01",
      name: "VIDEO-RESCUE",
      context: "Supervised XJTLU research · one of two student team members",
      problem:
        "Fragmented field information can make it difficult for teams to form a shared picture without losing accountability.",
      role: "Browser-prototype development within supervised research",
      tech: ["React", "TypeScript", "Express", "SQLite", "LiveKit/WebRTC"],
      status: "Research/prototyping system — not an operational rescue platform",
      summary:
        "A browser-based coordination prototype that connects maps, live media, captions, durable events, operator tasking and evidence-linked AI support.",
      facts: [
        {
          title: "System overview",
          text: "Reports, map context, media, tasks and durable event history are brought into one coordination workflow."
        },
        {
          title: "Human-AI interaction",
          text: "AI correlation support exposes supporting events, confidence, unknowns and suggested next actions rather than hiding uncertainty."
        },
        {
          title: "Decision boundary",
          text: "Human operators retain decision responsibility; the prototype does not automate rescue decisions."
        },
        {
          title: "Research setting",
          text: "The work sits in a supervised, two-student research context. Study design, recruitment, sessions and analysis are team/supervisor work."
        }
      ],
      limitation:
        "No field deployment, operational safety claim, rescue-outcome claim or validated AI-accuracy claim is made.",
      next: "Continue research-led evaluation and refine evidence presentation with approved study feedback."
    },
    cybermastery: {
      slug: "cybermastery",
      order: "02",
      name: "CyberMastery",
      context: "Independent product development · evidence frozen to the audited remote baseline",
      problem:
        "Learners need a structured way to move from guided explanation to independent practice, evidence and rechecking without turning progress into an opaque score.",
      role: "Full-stack product and learning-domain implementation",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Playwright"],
      status: "Working HTTP Fundamentals vertical slice using static protocol simulations",
      summary:
        "A full-stack cybersecurity-learning prototype built around one authenticated HTTP Fundamentals lifecycle.",
      facts: [
        {
          title: "Learning flow",
          text: "Guided learning leads into independent assessment, structured skill evidence, retention rechecks and transfer activities."
        },
        {
          title: "Mastery model",
          text: "Deterministic scoring and evidence history make the learning-domain logic inspectable rather than purely UI-driven."
        },
        {
          title: "Architecture",
          text: "The learning domain is separated from UI, persistence and authentication within a documented modular-monolith boundary."
        },
        {
          title: "Verification",
          text: "The audited source includes unit, integration and browser test coverage; volatile counts and CI status are intentionally excluded."
        }
      ],
      limitation:
        "The repository is private, the scope is one HTTP Fundamentals slice, and no validated learning-outcome or production claim is made.",
      next: "Expand only after safely evaluating the current vertical slice and defining a public-safe artifact."
    },
    lifemap: {
      slug: "lifemap",
      order: "03",
      name: "LifeMap",
      context: "Independent Android product development",
      problem:
        "Long-term goals are easy to defer when time is invisible; a calm, private visual can make a horizon more tangible without collecting personal data.",
      role: "Android product, rendering and local-first implementation",
      tech: ["Kotlin", "Jetpack Compose", "Preferences DataStore", "Android"],
      status: "Active local-first Android prototype",
      summary:
        "A local-first Android prototype for visualising life, years and goals as time grids.",
      facts: [
        {
          title: "Core interaction",
          text: "A shared calendar render model turns time and goals into a simple visual grid across the app experience."
        },
        {
          title: "Local-first privacy",
          text: "Preferences persist on-device through Preferences DataStore; the product does not depend on an account or remote service."
        },
        {
          title: "Accessible and responsive",
          text: "Responsive layouts and accessibility descriptions support different device contexts and non-visual interpretation."
        },
        {
          title: "Ambient surface",
          text: "An event-driven live wallpaper reuses the product concept without claiming a public-store release."
        }
      ],
      limitation:
        "LifeMap is a prototype in active development, not a Play Store release or validated behaviour-change product.",
      next: "Continue device-level validation, refine accessibility and test the product concept with appropriate user feedback."
    }
  },
  es: {
    "video-rescue": {
      slug: "video-rescue",
      order: "01",
      name: "VIDEO-RESCUE",
      context: "Investigación supervisada en XJTLU · uno de los dos estudiantes del equipo",
      problem:
        "La información de campo fragmentada puede dificultar que un equipo comparta una visión común sin perder responsabilidad.",
      role: "Desarrollo de prototipo web dentro de investigación supervisada",
      tech: ["React", "TypeScript", "Express", "SQLite", "LiveKit/WebRTC"],
      status: "Sistema de investigación/prototipado — no es una plataforma operativa de rescate",
      summary:
        "Un prototipo web de coordinación que conecta mapas, contenido multimedia en directo, subtítulos, eventos persistentes, tareas y asistencia de IA vinculada a evidencias.",
      facts: [
        {
          title: "Visión del sistema",
          text: "Los informes, el contexto de mapa, los contenidos, las tareas y el historial de eventos persistentes se reúnen en un flujo de coordinación."
        },
        {
          title: "Interacción persona-IA",
          text: "La asistencia de correlación con IA muestra eventos de apoyo, confianza, incógnitas y siguientes acciones sugeridas sin ocultar la incertidumbre."
        },
        {
          title: "Límite de decisión",
          text: "Los operadores humanos mantienen la responsabilidad de decisión; el prototipo no automatiza decisiones de rescate."
        },
        {
          title: "Entorno de investigación",
          text: "El trabajo se sitúa en un contexto de investigación supervisada con dos estudiantes. Diseño, captación, sesiones y análisis son trabajo de equipo/supervisión."
        }
      ],
      limitation:
        "No se afirma despliegue de campo, seguridad operativa, mejora de resultados de rescate ni precisión validada de IA.",
      next: "Continuar la evaluación dirigida por la investigación y mejorar la presentación de evidencias con comentarios aprobados del estudio."
    },
    cybermastery: {
      slug: "cybermastery",
      order: "02",
      name: "CyberMastery",
      context:
        "Desarrollo independiente de producto · evidencia congelada en la base remota auditada",
      problem:
        "Las personas que aprenden necesitan una forma estructurada de pasar de explicaciones guiadas a práctica independiente, evidencias y revisiones sin convertir el progreso en una puntuación opaca.",
      role: "Implementación full-stack de producto y dominio de aprendizaje",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Playwright"],
      status: "Slice funcional de HTTP Fundamentals con simulaciones estáticas de protocolos",
      summary:
        "Un prototipo full-stack de aprendizaje de ciberseguridad construido alrededor de un ciclo autenticado de HTTP Fundamentals.",
      facts: [
        {
          title: "Flujo de aprendizaje",
          text: "El aprendizaje guiado conduce a evaluación independiente, evidencias estructuradas de habilidades, revalidaciones de retención y actividades de transferencia."
        },
        {
          title: "Modelo de dominio",
          text: "La puntuación determinista y el historial de evidencias hacen que la lógica del dominio de aprendizaje sea interpretable y no dependa solo de la interfaz."
        },
        {
          title: "Arquitectura",
          text: "El dominio de aprendizaje se separa de la interfaz, la persistencia y la autenticación dentro de un límite modular-monolítico documentado."
        },
        {
          title: "Verificación",
          text: "El código auditado incluye cobertura de pruebas unitarias, de integración y de navegador; se excluyen deliberadamente recuentos variables y estado de CI."
        }
      ],
      limitation:
        "El repositorio es privado, el alcance actual es un slice de HTTP Fundamentals y no se afirma resultado de aprendizaje validado ni producción.",
      next: "Ampliar solo después de evaluar de forma segura el slice actual y definir un artefacto público seguro."
    },
    lifemap: {
      slug: "lifemap",
      order: "03",
      name: "LifeMap",
      context: "Desarrollo independiente de producto Android",
      problem:
        "Es fácil posponer objetivos a largo plazo cuando el tiempo es invisible; una visualización tranquila y privada puede hacer más tangible el horizonte sin recopilar datos personales.",
      role: "Producto Android, renderizado e implementación local-first",
      tech: ["Kotlin", "Jetpack Compose", "Preferences DataStore", "Android"],
      status: "Prototipo Android local-first en desarrollo activo",
      summary:
        "Un prototipo Android local-first para visualizar la vida, los años y los objetivos como cuadrículas temporales.",
      facts: [
        {
          title: "Interacción principal",
          text: "Un modelo compartido de renderizado de calendario convierte tiempo y objetivos en una cuadrícula visual sencilla en toda la experiencia."
        },
        {
          title: "Privacidad local-first",
          text: "Las preferencias persisten en el dispositivo con Preferences DataStore; el producto no depende de una cuenta ni de un servicio remoto."
        },
        {
          title: "Accesible y adaptable",
          text: "Los diseños adaptables y las descripciones de accesibilidad ayudan en distintos dispositivos y facilitan la interpretación no visual."
        },
        {
          title: "Superficie ambiental",
          text: "Un fondo de pantalla dinámico basado en eventos reutiliza el concepto del producto sin afirmar un lanzamiento público."
        }
      ],
      limitation:
        "LifeMap es un prototipo en desarrollo activo, no un lanzamiento en Play Store ni un producto con cambio de comportamiento validado.",
      next: "Continuar la validación en dispositivos, mejorar accesibilidad y probar el concepto de producto con comentarios de personas usuarias apropiados."
    }
  }
};

export function route(locale: Locale, path = "") {
  const base = locale === "es" ? "/es" : "";
  return `${base}${path || "/"}`;
}
