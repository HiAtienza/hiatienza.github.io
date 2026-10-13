# Portfolio refactor — 11 October 2026

The final scope covers shared routing, bilingual copy, architecture, accessibility and Lock Calendar. At the owner's request, CyberMastery and LifeMap retain their original project records and diagram representations. Their proposed interactive previews were removed before delivery.

## Routing findings

The live `/projects/lock-calendar/` URL returned HTTP 200 during the audit. A reproducible deployment failure was not established. The original configuration already used `output: "export"`, `trailingSlash: true` and `images.unoptimized: true`. Those settings remain correct for a root-domain user site. `basePath` and `assetPrefix` remain absent: adding the repository name would route assets and links away from the domain root.

Both dynamic project route files now set `dynamicParams = false` and share an `isProjectSlug()` type guard. `generateStaticParams()` continues to export all four project slugs in each language. `route()` normalizes page URLs to a trailing slash while preserving query strings and fragments. The export includes `public/.nojekyll`. The static test server mirrors directory redirects, and the link checker validates page files, fragments and every responsive image candidate. This follows [Next.js static export guidance](https://nextjs.org/docs/app/guides/static-exports).

## Precise modifications

| Files                                                             | Change                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `next.config.ts`, `public/.nojekyll`                              | Document root-domain asset routing; include the Pages marker in the exported public tree.                                                                                                                                                                                                                                                                              |
| `app/projects/[slug]/page.tsx`, `app/es/projects/[slug]/page.tsx` | Explicit static-only dynamic routes; eliminate repeated slug casts with a shared type guard.                                                                                                                                                                                                                                                                           |
| `lib/site-data.ts`                                                | Apply the requested confident English positioning and its Spanish counterpart; replace degree-disclaimer language with foundational coursework terminology; introduce the five-step HCI loop; frame Marriott through human factors and communication while retaining the actual Bellperson role. Export named `Project`, `Experience` and `NavigationItem` interfaces. |
| `components/pages.tsx`, `components/site-shell.tsx`               | Share metadata and action-link primitives; label sections; use text rather than invalid interval `<time>` elements; expose active navigation and Spanish landmark language. Retain all existing project content.                                                                                                                                                       |
| `components/ui.tsx`                                               | Add typed `ActionLink` and `MetadataList` primitives using native elements and Next.js Link.                                                                                                                                                                                                                                                                           |
| `components/lock-calendar-preview.tsx`                            | Type sample event tuples; connect controls to unique agenda IDs; add arrow-key wrapping, Home/End navigation and focus retention; align the clock date with the selected day; retain polite atomic live announcements.                                                                                                                                                 |
| `components/media.tsx`                                            | Add responsive 400/800 WebP portrait candidates, explicit loading/decoding and hero priority. Keep AVIF/WebP picture sources and intrinsic dimensions; preserve export-compatible Next.js images.                                                                                                                                                                      |
| `app/globals.css`                                                 | Adapt the process layout to five steps; guarantee 44px day targets; fix narrow home/case-study padding; animate agenda changes with a reduced-motion override; improve contrast and focus colors.                                                                                                                                                                      |
| `eslint.config.mjs`, `tsconfig.json`, `.prettierignore`           | Enforce `no-explicit-any`, retain strict TypeScript and consistently exclude incomplete dependency caches and generated outputs from quality tools.                                                                                                                                                                                                                    |
| `scripts/check-links.mjs`, `scripts/static-server.mjs`            | Validate exported URLs, same-site absolute links, fragments, responsive images and `.nojekyll`; serve directory redirects and 404 responses with a bounded filesystem root.                                                                                                                                                                                            |
| `tests/content.test.ts`, `tests/smoke.spec.ts`                    | Update positioning expectations; test URL suffix normalization, day-picker keyboard behavior, narrow layouts, direct loads/reloads, unknown slugs and WCAG AA scans across both locales.                                                                                                                                                                               |
| `README.md`                                                       | Document deployment folder requirements, root-domain configuration and the final preview scope.                                                                                                                                                                                                                                                                        |

Exact source changes are in [portfolio-refactor.patch](portfolio-refactor.patch). The patch uses the source snapshot captured before editing; the original ESLint/TypeScript configuration was recovered from the matching tracked Git blobs. It excludes pre-existing CV changes and generated dependency/build output.

## Contrast and accessibility

The original muted text token `#66717d` measured **4.41:1** against the warm canvas `#f5f1e8`, below the 4.5:1 AA requirement for small text. It is now `#5f6a76`: **4.89:1** on the canvas and **5.42:1** on paper. Default blue focus outlines measure **5.65:1** against the canvas; cyan focus outlines on the dark-blue sections measure **9.32:1**. The day picker uses contrasting theme-specific outlines. The next-project link uses an inset ink outline against its focused cyan background.

The site retains one main landmark, one h1 per page, native buttons/selectors, a skip link, explicit section labels and reduced-motion support. Automated scans supplement the numeric contrast review; they do not constitute manual screen-reader or full WCAG certification.

## Validation

Validation runs directly in the original checkout, using a complete dependency install from the unchanged package lockfile. iCloud placeholder dependency and build caches were preserved in an ignored local folder before rebuilding.

- `npm run build`: passed; 19 static outputs, including all eight localized project routes.
- `npm run typecheck`: passed; strict TypeScript remains enabled.
- `npm run lint`: passed with zero warnings and explicit `any` prohibited.
- `npm run format:check`: passed.
- `npm test`: 8 passed.
- `npm run test:links`: 19 HTML files passed; links, fragments and responsive assets resolve.
- `npm run test:smoke`: 20 passed in 17.8 seconds across desktop and mobile Chromium; both locales, 320px/375px layouts, keyboard day controls, reduced motion, direct route loads/reloads, unknown slugs and WCAG AA scans.

No UI library or dependency was added. No commit, push or deployment was performed.
