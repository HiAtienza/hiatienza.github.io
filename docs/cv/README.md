# Public bilingual CVs

The priority English visual CV is the owner-supplied PDF received on 13 November 2026, created on 4 November 2026. Its exact bytes are stored in `source/Adrian_Munoz_Atienza_CV_Public_Visual_EN.pdf`; SHA-256: `14d7fc02ace17b46ad8bf5d86c99f56362c5aaa2d9566e754195504e91d345c1`.

The supplied file already matched the previous local visual PDF. The new locale-specific names ensure that navigation and downloads can select the correct language explicitly.

| Website file                                   | Role                                                   |
| ---------------------------------------------- | ------------------------------------------------------ |
| `Adrian_Munoz_Atienza_CV_Public_Visual_EN.pdf` | Exact supplied English visual CV                       |
| `Adrian_Munoz_Atienza_CV_Public_Visual_ES.pdf` | Faithful Spanish translation in the same visual design |
| `Adrian_Munoz_Atienza_CV_Public_ATS_EN.pdf`    | English text-focused version of the same content       |
| `Adrian_Munoz_Atienza_CV_Public_ATS_ES.pdf`    | Spanish text-focused version of the same content       |
| `Adrian_Munoz_Atienza_CV_Public_Visual.pdf`    | Compatibility copy of the English visual CV            |
| `Adrian_Munoz_Atienza_CV_Public_ATS.pdf`       | Compatibility copy of the English ATS CV               |

Editable locale-specific HTML sources use the corresponding `_EN.html` and `_ES.html` names. The original unsuffixed HTML files remain as historical English sources. `node scripts/build-public-cvs.mjs` regenerates ATS EN/ES and visual ES, copies the exact English visual source, and refreshes both compatibility URLs. It deliberately checks the supplied English PDF hash rather than silently replacing that document with a browser rerender.

All factual content follows the supplied CV. The Spanish translation retains the supervised two-student research context, ongoing analysis, specific test scope, internal Google Play testing and explicit Codex-assisted development. Degree and institution names remain official names; the surrounding headings and descriptions are translated. Spanish project links use `/es/projects/`.

Each delivered PDF was checked as one tagged A4 page with selectable text and six URI link annotations. The English source hash matched; all four locale-specific pages were rendered and visually inspected. Preview images are derived from the first pages: `public/images/cv-visual-en.webp` and `public/images/cv-visual-es.webp` (900 × 1273 pixels).
