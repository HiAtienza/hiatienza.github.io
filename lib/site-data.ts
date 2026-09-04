export type Locale = "en" | "es";

export const siteUrl = "https://hiatienza.github.io";
export const external = {
  github: "https://github.com/HiAtienza",
  linkedin: "https://www.linkedin.com/in/hiatienza/"
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
      about: "About",
      research: "Research",
      contact: "Contact",
      language: "Español"
    },
    hero: {
      eyebrow: "Computer Science student @ XJTLU",
      title: "I turn complex signals into software people can understand and act on.",
      lead: "Developing as a Software Engineer, focused on Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
      work: "Explore selected work",
      about: "About my path",
      cv: "Download CV",
      visual: "View public visual CV",
      signals: ["Suzhou, China", "Available now", "On-site · Hybrid · Remote"]
    },
    about: {
      label: "About",
      title: "Software Engineering is the foundation; human-centered systems are the direction.",
      body: "I’m a Year 3 BSc Information and Computing Science student at Xi’an Jiaotong-Liverpool University. I build full-stack web, Android and applied-AI products that help people understand information, learn, recognise patterns and make decisions.",
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
    specialization: {
      label: "Emerging specialization",
      title: "One engineering path, shaped by how people learn and decide.",
      intro:
        "Software Engineering is my technical backbone. I am building the other layers through projects, supervised research and continued study—not claiming finished expertise.",
      parts: [
        [
          "Software Engineering",
          "Gives systems structure through architecture, implementation, data, testing and reliability."
        ],
        [
          "Behavioral Technology",
          "Frames attention, learning, patterns and reflection as product-design questions, without clinical claims."
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
      title: "A software-engineering toolkit with a human-centered direction.",
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
        [
          "Engineering foundation",
          "TypeScript · JavaScript · Java · Python · Kotlin · Git · REST APIs · Authentication"
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
          "Human-centered practice",
          "Human-Centered AI · Human-AI Interaction · Human-Computer Interaction · User-Centered Design · Learning Technology · Behavioral Technology (emerging specialization)"
        ]
      ]
    },
    journey: {
      label: "Journey",
      title: "Engineering practice, research context and international experience.",
      items: [
        [
          "Jul 2026 – present",
          "Undergraduate Researcher",
          "XJTLU Summer Undergraduate Research Fellowship · supervised HCI research and VIDEO-RESCUE prototype work."
        ],
        [
          "2026 – present",
          "Independent product development",
          "CyberMastery and LifeMap across full-stack web and Android."
        ],
        [
          "Jul – Sep 2024",
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
      title: "Have a problem worth making easier to understand?",
      body: "I’m available now for Software Engineering, Product Engineering and Human-Centered AI internships or suitable early-career roles. I’m open to on-site, hybrid and compatible remote work across Suzhou, Shanghai, Spain and the European Union.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download public ATS CV",
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
      about: "Sobre mí",
      research: "Investigación",
      contact: "Contacto",
      language: "English"
    },
    hero: {
      eyebrow: "Estudiante de Computer Science @ XJTLU",
      title: "Convierto señales complejas en software que las personas pueden entender y usar.",
      lead: "Me desarrollo como Software Engineer con foco en Human-Centered AI, Behavioral Technology e interacción persona-IA.",
      work: "Ver proyectos",
      about: "Conoce mi recorrido",
      cv: "Descargar CV",
      visual: "Ver CV visual público",
      signals: ["Suzhou, China", "Disponible ahora", "Presencial · Híbrido · Remoto"]
    },
    about: {
      label: "Perfil",
      title:
        "Software Engineering es la base; los sistemas centrados en las personas son la dirección.",
      body: "Soy estudiante de tercer curso del BSc Information and Computing Science en Xi’an Jiaotong-Liverpool University. Desarrollo productos web full-stack, Android y de IA aplicada que ayudan a comprender información, aprender, reconocer patrones y tomar decisiones.",
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
    specialization: {
      label: "Especialización en desarrollo",
      title: "Una trayectoria de ingeniería guiada por cómo aprendemos y decidimos.",
      intro:
        "Software Engineering es mi base técnica. Desarrollo las demás capas mediante proyectos, investigación supervisada y estudio continuo, sin presentarlas como una especialización ya consolidada.",
      parts: [
        [
          "Software Engineering",
          "Da estructura a los sistemas mediante arquitectura, implementación, datos, pruebas y fiabilidad."
        ],
        [
          "Behavioral Technology",
          "Plantea la atención, el aprendizaje, los patrones y la reflexión como preguntas de producto, sin afirmaciones clínicas."
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
      title: "Una base de ingeniería de software con dirección human-centered.",
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
        [
          "Base de ingeniería",
          "TypeScript · JavaScript · Java · Python · Kotlin · Git · REST APIs · Authentication"
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
          "Práctica human-centered",
          "Human-Centered AI · Interacción persona-IA · Interacción persona-ordenador · Diseño centrado en las personas · Learning Technology · Behavioral Technology (especialización en desarrollo)"
        ]
      ]
    },
    journey: {
      label: "Trayectoria",
      title: "Práctica de ingeniería, investigación e experiencia internacional.",
      items: [
        [
          "Jul 2026 – actualidad",
          "Investigador universitario",
          "XJTLU Summer Undergraduate Research Fellowship · investigación supervisada de HCI y trabajo de prototipo VIDEO-RESCUE."
        ],
        [
          "2026 – actualidad",
          "Desarrollo de productos independientes",
          "CyberMastery y LifeMap en desarrollo web full-stack y Android."
        ],
        [
          "Jul – Sep 2024",
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
      title: "¿Tienes un problema que debería ser más fácil de entender?",
      body: "Estoy disponible ahora para prácticas o puestos junior adecuados en Software Engineering, Product Engineering y Human-Centered AI. Estoy abierto a trabajo presencial, híbrido y remoto compatible en Suzhou, Shanghái, España y la Unión Europea.",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV ATS público",
      visual: "Ver CV visual"
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
      context: "Independent product development · full-stack learning product",
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
      context: "Desarrollo independiente · producto de aprendizaje full-stack",
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

export const aboutPages = {
  en: {
    label: "About",
    title: "Building as a software engineer. Human-centered by intent.",
    intro:
      "I’m Adrián, a Computer Science student at XJTLU developing as a Software Engineer. I build across web, Android and applied AI, with a growing focus on Human-Centered AI, Behavioral Technology and Human-AI Interaction.",
    storyTitle: "A path shaped between Spain and China.",
    story: [
      "I began my software engineering studies at U-TAD in Madrid before transferring to Xi’an Jiaotong-Liverpool University, where I am now a Year 3 BSc Information and Computing Science student with expected graduation in July 2028.",
      "Moving between countries and working in tutoring, multicultural customer service and supervised research taught me to treat communication as part of engineering. A system is not useful simply because it works; people also need to understand what it is doing, trust its boundaries and know what to do next.",
      "That idea connects my current work: coordination support for complex transcripts, structured cybersecurity learning and calm tools for visualising time and goals."
    ],
    dual: [
      {
        label: "Engineering foundation",
        title: "I make ideas executable.",
        body: "I work across product architecture, full-stack TypeScript, Android, persistence, authentication and automated testing. I prefer complete vertical slices that make assumptions and limitations visible."
      },
      {
        label: "Human-centered direction",
        title: "I make systems understandable.",
        body: "I use HCI thinking, active listening and clear information design to connect implementation decisions with the way people learn, coordinate and act."
      }
    ],
    principlesTitle: "How I like to work",
    principles: [
      [
        "Start with the person",
        "Understand the decision, frustration or learning need before choosing the interface."
      ],
      ["Build the whole path", "Create a small end-to-end workflow before expanding breadth."],
      ["Keep evidence visible", "Make sources, uncertainty, state and limitations inspectable."],
      [
        "Learn through testing",
        "Use technical tests and human feedback to improve the next iteration."
      ]
    ],
    factsTitle: "A few useful facts",
    facts: [
      "Spanish native speaker; fluent English.",
      "Based in Suzhou and open to relocation across target regions.",
      "Available now for internships and full-time early-career roles.",
      "Interested in product engineering, applied AI and selected HCI opportunities."
    ],
    cta: "See how this thinking becomes product work"
  },
  es: {
    label: "Sobre mí",
    title: "Desarrollándome como ingeniero de software. Centrado en las personas por intención.",
    intro:
      "Soy Adrián, estudiante de Computer Science en XJTLU, y me desarrollo como Software Engineer. Creo software web, Android y de IA aplicada con un foco creciente en Human-Centered AI, Behavioral Technology e interacción persona-IA.",
    storyTitle: "Un recorrido construido entre España y China.",
    story: [
      "Comencé mis estudios de ingeniería del software en U-TAD, Madrid, antes de trasladarme a Xi’an Jiaotong-Liverpool University, donde actualmente curso tercero del BSc Information and Computing Science y tengo prevista la graduación en julio de 2028.",
      "Vivir entre países y trabajar en tutoría, atención al cliente multicultural e investigación supervisada me enseñó que la comunicación forma parte de la ingeniería. Un sistema no es útil solo porque funcione: las personas también necesitan entender qué hace, confiar en sus límites y saber cuál es el siguiente paso.",
      "Esa idea conecta mi trabajo actual: apoyo a la coordinación de transcripciones complejas, aprendizaje estructurado de ciberseguridad y herramientas tranquilas para visualizar tiempo y objetivos."
    ],
    dual: [
      {
        label: "Base de ingeniería",
        title: "Convierto ideas en sistemas ejecutables.",
        body: "Trabajo con arquitectura de producto, TypeScript full-stack, Android, persistencia, autenticación y pruebas automatizadas. Prefiero crear vertical slices completos que hagan visibles las decisiones y limitaciones."
      },
      {
        label: "Dirección human-centered",
        title: "Hago comprensibles los sistemas.",
        body: "Aplico HCI, escucha activa y diseño claro de información para conectar decisiones de implementación con la forma en que las personas aprenden, coordinan y actúan."
      }
    ],
    principlesTitle: "Cómo me gusta trabajar",
    principles: [
      [
        "Empezar por la persona",
        "Comprender la decisión, frustración o necesidad de aprendizaje antes de elegir la interfaz."
      ],
      [
        "Construir el recorrido completo",
        "Crear un flujo pequeño de extremo a extremo antes de ampliar el alcance."
      ],
      [
        "Mantener visible la evidencia",
        "Hacer inspeccionables las fuentes, la incertidumbre, el estado y las limitaciones."
      ],
      [
        "Aprender mediante pruebas",
        "Usar pruebas técnicas y feedback humano para mejorar la siguiente iteración."
      ]
    ],
    factsTitle: "Algunos datos útiles",
    facts: [
      "Español nativo e inglés fluido.",
      "Vivo en Suzhou y estoy abierto a reubicarme en las regiones objetivo.",
      "Disponible ahora para prácticas y puestos junior a tiempo completo.",
      "Interesado en product engineering, IA aplicada y oportunidades seleccionadas de HCI."
    ],
    cta: "Ver cómo este enfoque se convierte en producto"
  }
} as const;

export function route(locale: Locale, path = "") {
  const normalized = path ? (path.startsWith("/") ? path : `/${path}`) : "/";
  if (locale === "en") return normalized;
  return normalized === "/" ? "/es/" : `/es${normalized}`;
}
