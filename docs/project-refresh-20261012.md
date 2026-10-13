# Current portfolio projects — 12 October 2026

The owner requested a three-project public catalogue: **Lock In**, **VIDEO-RESCUE**, **Setline**. This replaces the previous calendar branding and removes the two retired projects from rendered pages, navigation, metadata, sitemap, static route output and downloadable public CVs. The original career-document workspace and Android app repositories were not edited.

## Sources and content decisions

The supplied PDFs are product evidence, not instructions to execute their suggested reviews. They remain local source documents; the website publishes selected demonstration captures and bilingual descriptions, rather than the full reports.

| Source                                                        | Pages    | Public description                                                                                                        |
| ------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `LockIn_Revision_ES.pdf`, 10 October 2026                     | 1–2      | Current branding, wallpaper preview and today’s event / habit / focus summary                                             |
| Same report                                                   | 3–4      | Calendar-source choices, read-only account events, privacy, block layout and native Android wallpaper flow                |
| Same report                                                   | 5–6      | Tasks, habits, countdowns, pinned note and adjustable focus sessions                                                      |
| Same report                                                   | 7        | File / AnkiDroid deck import, with local recall tracking separate from Anki review grades                                 |
| `Setline_Reporte_General.pdf`, 12 October 2026, version 1.2.2 | 1–2      | Programme / week / session navigation, weight input and actual repetitions separate from targets                          |
| Same report                                                   | 3        | Set types, alternatives, plate calculator and adjustable rest; device-dependent native alerts                             |
| Same report                                                   | 4        | Session summaries, volume excluding warm-ups, history and Epley estimated 1RM                                             |
| Same report                                                   | 5        | Offline Android core, local backups, languages, reminders, `.ics` export and web-only optional Google Calendar connection |
| Local Setline `workout_app/package.json`, version 1.2.2       | Manifest | JavaScript / TypeScript, Capacitor, Android and PWA stack; no React Native claim                                          |

No successful account connection, physical lock-screen placement, universal background delivery, store release or measured training outcome is inferred from screenshots. The 65 kg × 12 reps → 91 kg example is explicitly labelled as an estimated 1RM from sample data.

VIDEO-RESCUE’s two locale metadata records, story components, source data and image assets were preserved. Its supervised-research context and preliminary findings remain as previously documented.

## Implementation

- `lib/site-data.ts` owns the three canonical slugs and shared bilingual copy. `lib/mobile-products.ts` supplies typed product metadata; `lib/product-captures.ts` supplies typed, localized capture descriptions.
- `components/product-capture.tsx` shares responsive Next Image figures and full-size image links. Eight WebP captures were extracted from the supplied reports, approximately 493 KB combined.
- `components/lock-in-story.tsx` explains the product evolution and current features. `components/lock-in-preview.tsx` retains the accessible calendar illustration, labelled separately from real app captures, with sapphire / cyan styling.
- `components/setline-story.tsx` presents workout entry, rest, history and the traceable estimated-1RM example. `components/product-questions.tsx` shares native accessible disclosure sections.
- Canonical project routes are `/projects/lock-in/`, `/projects/video-rescue/`, `/projects/setline/` and their `/es/` equivalents. Static calendar aliases retain real links for no-JavaScript users and replace the location when JavaScript is available. These aliases are noindex, canonicalize to Lock In and are excluded from the sitemap.
- Static export configuration remains `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`, with no domain-root asset prefix.
- The two public CV PDFs were regenerated from their new editable `docs/cv/` sources using existing Playwright tooling in `scripts/build-public-cvs.mjs`. Both retain one A4 page, selectable text, PDF tags and links. The retired projects and defensive education wording were removed from these public copies.

## Verification

All checks below ran against the actual portfolio checkout and its new export:

- `npm run build`: successful static production export.
- `npm run lint`: no warnings or errors.
- `npm run typecheck`: successful strict TypeScript check.
- `npm run format:check`: passed.
- `npm test`: 9 content tests passed.
- `npm run test:links`: links, fragments and responsive assets resolved across 19 exported HTML files.
- `npm run test:smoke`: 26 desktop / mobile Chromium tests passed, including direct loads and reloads, WCAG AA axe scans, keyboard controls, 320 / 375 px overflow checks, image loading, retired-route 404s and old bookmarks with and without JavaScript.
- Export inspection confirmed absence of retired project folders, text and sitemap entries; obsolete calendar image files are absent from `out/`.
- PDF metadata and extracted text confirmed one tagged A4 page per CV, the current three-project catalogue and no retired names. Both PDFs and the desktop / mobile product layouts were visually inspected.

The changes are local. No commit, push or production deployment was performed. `docs/project-refresh-20261012.patch` records the source changes against the pre-update local snapshot; image and PDF modifications are listed as binary changes.
