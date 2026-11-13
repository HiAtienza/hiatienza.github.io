import type { Locale } from "./site-data";

export function cvDocument(locale: Locale, format: "Visual" | "ATS" = "Visual") {
  return `/cv/Adrian_Munoz_Atienza_CV_Public_${format}_${locale.toUpperCase()}.pdf`;
}

export const cvCopy = {
  en: {
    title: "Curriculum vitae",
    intro:
      "Software engineering, applied AI and human–AI interaction. My experience and selected work, in one page.",
    label: "Visual CV · English · PDF · 1 page",
    visual: "Open visual CV",
    download: "Download visual CV",
    ats: "Download text CV (ATS)",
    atsDescription:
      "A simple layout with the same experience and projects, ready for application forms.",
    languages: "CV language",
    projectsTitle: "A closer look at the work",
    projectsIntro:
      "Visual project presentations with the interfaces, engineering decisions and research context behind the CV.",
    preview:
      "Preview of Adrián Muñoz Atienza’s English visual CV, covering projects, experience, education, skills and languages.",
    projectLink: "View project presentation"
  },
  es: {
    title: "Currículum",
    intro:
      "Ingeniería de software, IA aplicada e interacción persona-IA. Mi experiencia y proyectos seleccionados, en una página.",
    label: "CV visual · Español · PDF · 1 página",
    visual: "Abrir CV visual",
    download: "Descargar CV visual",
    ats: "Descargar CV de texto (ATS)",
    atsDescription:
      "Un formato sencillo con la misma experiencia y proyectos, preparado para formularios de candidatura.",
    languages: "Idioma del currículum",
    projectsTitle: "Los proyectos, más de cerca",
    projectsIntro:
      "Presentaciones visuales con las interfaces, decisiones de ingeniería y contexto de investigación que acompañan al currículum.",
    preview:
      "Vista previa del CV visual en español de Adrián Muñoz Atienza, con proyectos, experiencia, formación, competencias e idiomas.",
    projectLink: "Ver presentación del proyecto"
  }
} as const;
