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
    src: "/images/video-rescue-workspace.webp",
    previewSrc: "/images/video-rescue-workspace-preview.webp",
    width: 2400,
    height: 1500,
    en: {
      label: "Prototype UI · Fictional demonstration reports",
      alt: "VIDEO-RESCUE prototype with an assistant panel, field-operator cards, a shared map, live transcripts and a mission log containing a fictional shoe report.",
      caption:
        "The shared workspace shown in the research presentation. Operators are offline in this demonstration capture; it illustrates the interface, not live connectivity or a rescue outcome. Map attribution: Leaflet / OpenStreetMap."
    },
    es: {
      label: "Interfaz del prototipo · Informes ficticios de demostración",
      alt: "Prototipo VIDEO-RESCUE con asistente, paneles de operadores, mapa compartido, transcripciones en directo y registro de misión con un informe ficticio de una zapatilla.",
      caption:
        "Espacio compartido mostrado en la presentación de investigación. Los operadores aparecen desconectados en esta captura de demostración; muestra la interfaz, no conectividad en directo ni resultados de rescate. Mapa: Leaflet / OpenStreetMap."
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
      "I developed browser-prototype work within a supervised, two-student XJTLU research team. The interface brings field media, transcripts, a shared map and mission reports into one place. Assignment and receipt confirmation support follow-up; export tools support later review.",
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
        title: "Geographic context is a missing piece",
        body: "The assistant could access video frames, images, transcripts and reports, but did not directly access map data, building names or distances. Participants’ requests highlighted that integration gap."
      }
    ],
    boundaryTitle: "A visible map does not mean map-aware AI",
    boundary:
      "People can consult the shared map. Direct geographic context for the assistant and proactive navigation remain future integration work. The prototype has no claimed field deployment, operational safety validation or demonstrated rescue benefit.",
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
      "Desarrollé trabajo de prototipo web dentro de un equipo de investigación supervisada de XJTLU con dos estudiantes. La interfaz reúne contenidos de campo, transcripciones, un mapa compartido e informes de misión. La asignación y la confirmación de recepción permiten dar seguimiento; las exportaciones facilitan la revisión posterior.",
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
        title: "El contexto geográfico que falta",
        body: "El asistente podía acceder a fotogramas de vídeo, imágenes, transcripciones e informes, pero no directamente a datos del mapa, nombres de edificios ni distancias. Las peticiones de participantes señalaron esa integración pendiente."
      }
    ],
    boundaryTitle: "Un mapa visible no implica una IA con acceso al mapa",
    boundary:
      "Las personas pueden consultar el mapa compartido. El contexto geográfico directo para el asistente y la navegación proactiva quedan como futuras integraciones. No se afirma despliegue de campo, validación de seguridad operativa ni beneficio demostrado en rescates.",
    source:
      "Basado en la presentación SURF y el guion facilitados. Los hallazgos son paráfrasis del resumen preliminar de comentarios del equipo, no citas de participantes ni un análisis independiente completado."
  }
};
