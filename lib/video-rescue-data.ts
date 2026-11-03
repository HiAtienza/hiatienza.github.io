import type { Locale } from "@/lib/site-data";

export const videoRescueAssets = {
  workflow: {
    src: "/images/video-rescue-workflow.webp",
    width: 1448,
    height: 1086,
    en: {
      label: "Workflow illustration",
      alt: "Illustrated VIDEO-RESCUE workflow: a searcher reports a finding, the Commander asks the assistant, reports are correlated, and a person verifies the evidence.",
      caption:
        "A conceptual illustration with fictional people and reports, not a screenshot or a field deployment. The map belongs to the human workspace; it does not establish direct AI access to geographic data."
    },
    es: {
      label: "Ilustración del flujo",
      alt: "Flujo ilustrado de VIDEO-RESCUE: un buscador comunica un hallazgo, el coordinador pregunta al asistente, se relacionan informes y una persona verifica la evidencia.",
      caption:
        "Ilustración conceptual con personas e informes ficticios, no una captura ni un despliegue de campo. El mapa forma parte del espacio humano; no demuestra acceso directo de la IA a datos geográficos."
    }
  },
  workspace: {
    src: "/images/video-rescue-nov-workspace.webp",
    width: 1440,
    height: 900,
    en: {
      label: "Local prototype · Fictional demonstration",
      alt: "Commander console with synthetic operator feeds, map and mission panels.",
      caption:
        "Optional Overview layout in a local exercise, 2 Nov 2026. Map attribution is visible in the original."
    },
    es: {
      label: "Prototipo local · Demostración ficticia",
      alt: "Consola de coordinación con cámaras sintéticas, mapa y paneles de misión.",
      caption:
        "Vista Overview optativa en un ejercicio local del 2 de noviembre de 2026. La atribución cartográfica figura en la captura."
    },
    previewSrc: "/images/video-rescue-nov-overview-small.webp"
  },
  dispatch: {
    src: "/images/video-rescue-nov-dispatch.webp",
    width: 1440,
    height: 900,
    en: {
      label: "Local prototype · Fictional demonstration",
      alt: "The Commander reviews a synthetic task for P2 before dispatch.",
      caption:
        "In this local exercise the reviewed order was sent through the API and received in P2’s browser."
    },
    es: {
      label: "Prototipo local · Demostración ficticia",
      alt: "El coordinador revisa una orden de ejemplo para P2 antes de enviarla.",
      caption:
        "En este ejercicio local, la orden revisada se envió por la API y llegó al navegador de P2."
    }
  },
  field: {
    src: "/images/video-rescue-nov-field.webp",
    width: 645,
    height: 1398,
    en: {
      label: "Local prototype · Fictional demonstration",
      alt: "P2 field interface in Sunlight mode after acknowledging the task.",
      caption:
        "Emulated mobile viewport and synthetic GPS. The acknowledgement records receipt of the order."
    },
    es: {
      label: "Prototipo local · Demostración ficticia",
      alt: "Interfaz de campo de P2 en modo Sunlight tras confirmar la recepción.",
      caption:
        "Vista móvil emulada y GPS sintético. La confirmación registra la recepción de la orden."
    }
  },
  plan: {
    src: "/images/video-rescue-nov-plan.webp",
    width: 1440,
    height: 900,
    en: {
      label: "Local prototype · Fictional demonstration",
      alt: "A reviewed parallel search pattern saved on the demonstration map.",
      caption: "The cyan line shows saved geometry. Dispatch is a separate operator action."
    },
    es: {
      label: "Prototipo local · Demostración ficticia",
      alt: "Patrón paralelo revisado y guardado sobre el mapa de demostración.",
      caption:
        "El trazado cian representa la geometría guardada. El despacho requiere otra acción del coordinador."
    }
  },
  assistant: {
    src: "/images/video-rescue-assistant.webp",
    width: 747,
    height: 1100,
    en: {
      label: "Prototype detail · Fictional exercise",
      alt: "Cropped prototype conversation about a blue hiking shoe: the assistant distinguishes a logged report from an unverified transcript and says the owner is unknown.",
      caption:
        "A cropped, otherwise unaltered response from the demonstration UI. Labels such as “verified evidence” describe the prototype’s report state, not independently verified truth or validated AI accuracy."
    },
    es: {
      label: "Detalle del prototipo · Ejercicio ficticio",
      alt: "Conversación recortada del prototipo sobre una zapatilla azul: el asistente distingue un informe registrado de una transcripción no verificada e indica que el propietario es desconocido.",
      caption:
        "Respuesta recortada, sin otras alteraciones, de la interfaz de demostración. Etiquetas como «verified evidence» describen el estado del informe en el prototipo, no una verdad verificada de forma independiente ni precisión de IA validada."
    }
  }
} as const;

export const videoRescueStory: Record<
  Locale,
  {
    label: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
    workspaceTitle: string;
    workspaceBody: string;
    assistantLabel: string;
    assistantTitle: string;
    question: string;
    answer: string;
    uncertainty: string;
    findingsLabel: string;
    findingsTitle: string;
    findingsStatus: string;
    findings: { title: string; body: string }[];
    boundaryTitle: string;
    boundary: string;
    source: string;
  }
> = {
  en: {
    label: "The coordination workflow",
    title: "One report. A shared picture. A human decision.",
    intro:
      "The research asks how small search teams use live transcripts, a shared map and conversational AI while keeping human control. The workflow illustration brings that question into a concrete scenario.",
    steps: [
      {
        title: "Report",
        body: "A field searcher shares an observation through voice, a photo or a note. The shared workspace keeps the report alongside its source and time."
      },
      {
        title: "Ask",
        body: "The Commander asks the assistant about relevant reports and what remains unknown instead of relying only on memory."
      },
      {
        title: "Correlate",
        body: "Related reports can be considered together. A similar item is a lead to check, not proof that it belongs to the missing person."
      },
      {
        title: "Verify",
        body: "The Commander decides what to investigate. A searcher checks the observation and reports back; responsibility stays with people."
      }
    ],
    workspaceTitle: "The workspace I helped build",
    workspaceBody:
      "I helped develop the browser prototype as one of two students in the XJTLU research team. It gives one Commander and four field operator roles (P2–P5) a shared mission record. Operators can recover an unsent photo report, use push-to-talk radio and check their assigned destination. The Commander can reopen the original report before deciding where to send someone.",
    assistantLabel: "A closer look",
    assistantTitle: "An answer that keeps the unknowns visible",
    question: "What did P5 report about the shoe, and what is still unknown?",
    answer:
      "In the presentation’s fictional exercise, the assistant refers to a blue hiking shoe report. Its owner remains unknown, and a link to the missing person is unconfirmed.",
    uncertainty:
      "The screenshot shows an actual prototype response to demonstration data, not a participant finding. A sector mentioned in a report is not the same as the assistant querying map data or calculating a route.",
    findingsLabel: "Research reflection",
    findingsTitle: "What the early feedback points to",
    findingsStatus: "Data collection complete · Fuller analysis ongoing",
    findings: [
      {
        title: "Information support with human control",
        body: "The team’s preliminary feedback summary describes Commanders valuing help with keeping track of information while retaining direction and control. This is qualitative feedback, not a measured reduction in workload."
      },
      {
        title: "Support beyond the Commander",
        body: "Searchers also asked for AI help with understanding instructions and navigating to the next location. Those requests suggest a direction for design; they are not a claim that AI navigation is implemented."
      },
      {
        title: "What the study version was missing",
        body: "During the study, the assistant could access video frames, images, transcripts and reports, but did not directly access map data, building names or distances. Participants’ requests highlighted that integration gap."
      }
    ],
    boundaryTitle: "Geographic context in the November prototype",
    boundary:
      "The assistant can receive mission anchors, sectors and selected positions. The field interface uses fresh GPS for bearing and distance. A Commander reviews each destination before sending an order. Safe routing and rescue outcomes remain unverified.",
    source:
      "Based on the supplied SURF research presentation and speaking script. Findings are paraphrases of the research team’s preliminary feedback summary, not participant quotations or a completed independent analysis."
  },
  es: {
    label: "El flujo de coordinación",
    title: "Un informe. Una visión compartida. Una decisión humana.",
    intro:
      "La investigación pregunta cómo usan los pequeños equipos de búsqueda las transcripciones en directo, un mapa compartido y una IA conversacional manteniendo el control humano. La ilustración lleva esa pregunta a un escenario concreto.",
    steps: [
      {
        title: "Informar",
        body: "Un buscador comunica una observación mediante voz, una foto o una nota. El espacio compartido conserva el informe junto a su origen y momento."
      },
      {
        title: "Preguntar",
        body: "El coordinador pregunta al asistente por informes relevantes y por lo que todavía se desconoce, sin depender solo de la memoria."
      },
      {
        title: "Relacionar",
        body: "Los informes relacionados pueden considerarse juntos. Un objeto parecido es una pista que comprobar, no una prueba de que pertenezca a la persona desaparecida."
      },
      {
        title: "Verificar",
        body: "El coordinador decide qué investigar. Un buscador comprueba la observación e informa de nuevo; la responsabilidad sigue siendo humana."
      }
    ],
    workspaceTitle: "El espacio de trabajo que ayudé a construir",
    workspaceBody:
      "Participé en el desarrollo del prototipo web como uno de los dos estudiantes del equipo de XJTLU. Un coordinador y cuatro roles de campo (P2–P5) comparten un registro de misión. En campo se puede recuperar un borrador de reporte con foto, hablar por radio y consultar el destino asignado. El coordinador puede abrir el informe original antes de decidir adónde enviar a alguien.",
    assistantLabel: "De cerca",
    assistantTitle: "Una respuesta que mantiene visibles las incógnitas",
    question: "¿Qué informó P5 sobre la zapatilla y qué sigue sin saberse?",
    answer:
      "En el ejercicio ficticio de la presentación, el asistente se refiere a una zapatilla azul de senderismo. Su propietario sigue siendo desconocido y no se ha confirmado relación con la persona desaparecida.",
    uncertainty:
      "La captura muestra una respuesta real del prototipo a datos de demostración, no un hallazgo de participantes. Mencionar un sector en un informe no equivale a consultar datos del mapa ni a calcular una ruta.",
    findingsLabel: "Reflexión de investigación",
    findingsTitle: "Qué sugieren los primeros comentarios",
    findingsStatus: "Recogida de datos completada · Análisis más completo en curso",
    findings: [
      {
        title: "Apoyo informativo con control humano",
        body: "El resumen preliminar del equipo describe que los coordinadores valoraron la ayuda para seguir la información manteniendo la dirección y el control. Son comentarios cualitativos, no una reducción de carga de trabajo medida."
      },
      {
        title: "Apoyo también para los buscadores",
        body: "Los buscadores también pidieron ayuda de IA para entender instrucciones y dirigirse al siguiente lugar. Estas peticiones orientan el diseño; no significan que la navegación con IA esté implementada."
      },
      {
        title: "Qué faltaba en la versión del estudio",
        body: "En la versión del estudio, el asistente podía acceder a fotogramas de vídeo, imágenes, transcripciones e informes, pero no directamente a datos del mapa, nombres de edificios ni distancias. Las peticiones de participantes señalaron esa integración pendiente."
      }
    ],
    boundaryTitle: "Contexto geográfico en el prototipo de noviembre",
    boundary:
      "El asistente puede recibir anclas de misión, sectores y posiciones seleccionadas. La interfaz de campo utiliza GPS reciente para mostrar rumbo y distancia. El coordinador revisa el destino antes de enviar una orden. Quedan por validar la seguridad de los recorridos y los resultados en rescates.",
    source:
      "Basado en la presentación SURF y el guion facilitados. Los hallazgos son paráfrasis del resumen preliminar de comentarios del equipo, no citas de participantes ni un análisis independiente completado."
  }
};
