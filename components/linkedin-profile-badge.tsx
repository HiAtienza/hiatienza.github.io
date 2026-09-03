import Script from "next/script";
import { officialLinkedInBadgeMarkup, linkedInBadgeIntegrationState } from "@/lib/linkedin-badge";

export function LinkedInProfileBadge() {
  if (linkedInBadgeIntegrationState !== "OFFICIAL_MARKUP_CONFIGURED") return null;

  return (
    <>
      <aside
        className="linkedin-badge-slot"
        aria-label="LinkedIn public profile badge"
        data-linkedin-badge="official"
        dangerouslySetInnerHTML={{ __html: officialLinkedInBadgeMarkup ?? "" }}
      />
      <Script
        id="linkedin-public-profile-badge"
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        async
        defer
        type="text/javascript"
      />
    </>
  );
}
