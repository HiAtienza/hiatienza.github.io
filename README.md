# Adrián Muñoz Atienza portfolio

Public bilingual portfolio for a Computer Science student building human-centred Android, full-stack web and applied-AI products.

## Public site

- English: `https://hiatienza.github.io/`
- Spanish: `https://hiatienza.github.io/es/`
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

This is a static Next.js TypeScript export (`output: "export"`). It has no server routes, database, user accounts, analytics, cookies, forms or runtime API calls. GitHub Pages deploys the generated `out/` directory through the official Pages Actions workflow.

## Content and privacy boundaries

The project case studies describe only approved public-safe evidence. No private repository, deployment, research participant, transcript, mission, contact, operational or source-code material is included. VIDEO-RESCUE is described as supervised research/prototyping; CyberMastery source remains private; LifeMap is a prototype, not a store release.

## Accessibility

The site uses semantic landmarks, visible keyboard focus, a skip link, responsive layout, meaningful link text, reduced visual dependency and automated axe checks in browser smoke tests.

## Licences and attribution

Source code is licensed under the [MIT License](LICENSE). Personal content, copy and identity assets are governed by [CONTENT_LICENSE.md](CONTENT_LICENSE.md) and are not licensed for reuse. Approved profile and banner assets are adapted from the owner-provided materials only; no third-party stock media is used.
