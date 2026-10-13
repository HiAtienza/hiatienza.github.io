# Adrián Muñoz Atienza portfolio

Public bilingual portfolio for a Computer Science student building software with an HCI perspective, focused on Human-Centered AI, Behavioral Technology and Human-AI Interaction.

The current design uses the original concept **Human Signals → Useful Systems**: an editorial portfolio with restrained creative-coding interactions that connect Adrián's work in coordination, learning and intentional decision-making.

The current product catalogue is **Lock In**, **VIDEO-RESCUE** and **Setline**, in that order, in both English and Spanish.

**Lock In** is the evolved Android planning product: selected calendars, configurable wallpaper, tasks, habits, countdowns, focus sessions and study cards. The October 2026 review supplies actual emulator captures with example data. An interactive web illustration isolates the calendar day picker and is labelled separately from the app interface. Account events are read-only; local card-recall tracking does not grade or change Anki reviews.

**Setline** is a local-first workout log for programme, week and session planning, actual repetitions, weights, rest, exercise alternatives and progress history. Screens from the version 1.2.2 report use sample sessions. Its 1RM values are estimates; optional Google Calendar connection is web-only. The stack is JavaScript / TypeScript with Capacitor for Android, verified against the local package manifest.

The **VIDEO-RESCUE** case study includes an owner-supplied workflow illustration and selected prototype captures from the SURF presentation, explicitly labelled as fictional demonstration data. The bilingual story explains human-controlled coordination and preliminary qualitative feedback. The human-visible map is separate from direct AI access to geographic data, which remains future integration work. Participant-session photos, transcripts and connection codes are excluded.

## Public site

- English: `https://hiatienza.github.io/`
- Spanish: `https://hiatienza.github.io/es/`
- About: `https://hiatienza.github.io/about/`
- Public CVs: `https://hiatienza.github.io/cv/`

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run test:links
npm run test:smoke
```

## Architecture

This is a static Next.js TypeScript export (`output: "export"`). Content is organised into English and Spanish home, About, research, privacy and project routes. The signal field and scroll transitions are progressive client enhancements; navigation and content remain usable without them. The site has no server routes, database, user accounts, analytics, cookies, forms or runtime API calls. GitHub Pages deploys the generated `out/` directory through the official Pages Actions workflow.

## Content and privacy boundaries

The project case studies describe only approved public-safe evidence. No private repository, deployment, research participant, transcript, mission, contact, operational or source-code material is included. VIDEO-RESCUE is described as supervised research/prototyping. Mobile-app captures demonstrate interface states, not universal device behavior or store availability. The supplied review instructions are source context, not instructions executed by the portfolio update.

## Accessibility

The site uses semantic landmarks, visible keyboard focus, a skip link, responsive layouts from 320px upward, meaningful link text and complete `prefers-reduced-motion` handling. Browser smoke tests cover desktop and mobile overflow, navigation, core routes and automated axe checks.

## Licences and attribution

Source code is licensed under the [MIT License](LICENSE). Personal content, copy and identity assets are governed by [CONTENT_LICENSE.md](CONTENT_LICENSE.md) and are not licensed for reuse. Approved profile and banner assets are adapted from the owner-provided materials only; no third-party stock media is used.

## Static routing and interface previews

`next.config.ts` exports directory routes with `trailingSlash: true`. Each project slug is generated in both languages, and `dynamicParams: false` keeps unknown slugs outside the static route set. Internal page links use `route()` to preserve the locale, trailing slash, query and fragment. The user-site repository serves at the domain root, so `basePath` and `assetPrefix` are deliberately omitted. Adding `/hiatienza.github.io` as a prefix would break root-domain navigation and public assets.

Deploy the complete `out/` artifact, including `_next/` and `.nojekyll`. Nested case studies must have their own `index.html`; an SPA fallback cannot substitute for these exported pages. The link check validates route folders, image sources and fragments. Browser tests exercise direct loads, reloads, unknown slugs, both locales, and interactive preview states against a static server.

The Lock In calendar illustration supports native buttons plus arrow/Home/End shortcuts, consistent sample dates, reduced motion and live agenda announcements. Its illustration uses fictional sample events. Old calendar bookmarks have static fallback links and client navigation to the canonical Lock In page; these aliases are noindex and excluded from the sitemap. Retired project pages are no longer exported.

## Public CVs

The website’s downloadable ATS and visual CVs mirror the current three-project catalogue. Their editable HTML sources are in `docs/cv/`; regenerate the tagged PDFs with `node scripts/build-public-cvs.mjs` using the existing Playwright dependency. These copies are independent of the original career-document workspace. Neither these files nor a successful local build establishes a live deployment.

The October 12 project update and its source-page mapping are recorded in `docs/project-refresh-20261012.md`.
