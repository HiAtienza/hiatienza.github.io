# Adrián Muñoz Atienza portfolio

Public bilingual portfolio for a Computer Science student developing as a Software Engineer, focused on Human-Centered AI, Behavioral Technology and Human-AI Interaction.

The current design uses the original concept **Human Signals → Useful Systems**: an editorial portfolio with restrained creative-coding interactions that connect Adrián's work in coordination, learning and intentional decision-making.

The current featured project is **Lock Calendar**, an Android app in active development that turns selected calendars into a weekly live wallpaper and daily agenda. English and Spanish case studies explain its university-timetable origin, calendar integration, placement and refresh behavior. The interactive phone illustration uses sample events; the three app captures use synthetic emulator data. No public app-store release is claimed.

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

The project case studies describe only approved public-safe evidence. No private repository, deployment, research participant, transcript, mission, contact, operational or source-code material is included. VIDEO-RESCUE is described as supervised research/prototyping; CyberMastery source remains private; LifeMap is a prototype, not a store release.

## Accessibility

The site uses semantic landmarks, visible keyboard focus, a skip link, responsive layouts from 320px upward, meaningful link text and complete `prefers-reduced-motion` handling. Browser smoke tests cover desktop and mobile overflow, navigation, core routes and automated axe checks.

## Licences and attribution

Source code is licensed under the [MIT License](LICENSE). Personal content, copy and identity assets are governed by [CONTENT_LICENSE.md](CONTENT_LICENSE.md) and are not licensed for reuse. Approved profile and banner assets are adapted from the owner-provided materials only; no third-party stock media is used.
