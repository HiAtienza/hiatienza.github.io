# Official LinkedIn badge setup

## Current state

`LINKEDIN_BADGE_MARKUP_REQUIRED`

The public portfolio intentionally does not display a substitute or custom-made LinkedIn card. It keeps the normal public LinkedIn link in Contact as the accessible fallback.

## One manual step

1. Open LinkedIn’s **Public profile badge builder** while signed in.
2. Copy the exact badge markup LinkedIn generates for Adrián Muñoz Atienza’s public profile.
3. Paste that markup, unchanged, as the string value of `officialLinkedInBadgeMarkup` in `lib/linkedin-badge.ts`.
4. Do not paste the builder’s loader script or add any profile identifier manually. The contact component already loads the official LinkedIn script once and only when official markup is configured.
5. Re-run the portfolio checks, deploy, and verify the live Contact section on desktop and mobile.

The official loader used after markup is configured is:

```html
<script
  src="https://platform.linkedin.com/badges/js/profile.js"
  async
  defer
  type="text/javascript"
></script>
```

The badge belongs only in the homepage Contact section. If LinkedIn renders an old headline in the badge, update the LinkedIn headline manually and wait for LinkedIn’s badge cache to refresh; do not alter badge content in the portfolio.
