# RDB Building Services LTD

Static Astro website for rdbbuildingservices.co.uk, intended for Vercel hosting. Deployment is configured through Vercel; see the deployment result in the chat for its status.

## Run and build

Open this folder in VS Code. Run `npm install` if needed, then `npm run dev` for local preview. Run `npm run build` for the production files in `dist/`, and `npm run preview` to inspect the build locally. `node scripts/verify-site.cjs` checks page metadata, local links, images, anchors and structured data.

Production builds default to `https://rdbbuildingservices.co.uk`, generating absolute canonicals, sharing metadata, sitemap.xml and robots.txt. Local development pages are marked noindex. An environment variable `SITE_URL` can override the production origin for a different deployment. Do not publish preview builds under a different domain without considering indexing.

The GitHub repository is https://github.com/Build-2000/RDBbuildingservices . Vercel detects Astro, runs `npm run build` and serves `dist/`. Node.js 24 is specified. Deployment configuration is in `vercel.json`. Do not upload local research HTML, environment files or credentials. Custom domain DNS must be configured separately; do not change mail-related DNS records when connecting the website.

## Confirmed company details

- Branding: RDB Building Services LTD
- Legal name: R D B BUILDING SERVICES LTD
- Company number: 16900008, England and Wales
- Registered office: 23 Rothbury Gardens, Wallsend, United Kingdom, NE28 7DZ
- Business location: Unit 1, Newlands Farm, Newlands Lane, The Royal Town of Sutton Coldfield, Curdworth, Sutton Coldfield B76 0BE, United Kingdom
- Email supplied by owner: info@rdbbuildingservices.co.uk (mailbox setup/delivery not tested)
- Domain supplied by owner: rdbbuildingservices.co.uk
- Intended host: Vercel (plan, server region, account settings and deployment not inspected)
- Telephone: coming soon

Companies House record checked on 28 October 2026: https://find-and-update.company-information.service.gov.uk/company/16900008 . The registered office is distinct from the business location. Central details are in `src/data/business.mjs`.

## Edit content

- Homepage: `src/pages/index.astro`
- Service guides: `src/data/services.ts`
- Service template: `src/pages/services/[slug].astro`
- Header, footer and metadata: `src/components/`
- Shared page layout: `src/layouts/Page.astro`
- Styling: `src/styles/global.css`
- Logo and images: `public/images/`
- Reference image source list: `image-sources.json`

The five service routes under `/services/` are modular-buildings, garden-rooms, offices, catering-units and container-conversions. Each has distinct copy, titles, descriptions, links and FAQs. SEO follows Google Search Central principles; no ranking or indexing is guaranteed.

## Enquiry and policies

Both forms now submit a native HTTPS POST to `https://formsubmit.co/info@rdbbuildingservices.co.uk`. FormSubmit handles email delivery and its hosted spam check. The browser sets the return URL to `/thank-you/` on the current website origin; without JavaScript, FormSubmit uses its own result page. A disabled redirect field is excluded without JavaScript. No SMTP credentials or API keys are required. Initial inbox activation must be completed by the email owner, and actual email delivery must be verified separately.

The footer links to website terms, privacy and cookie pages. Terms and privacy remain drafts for business review. Known company, domain, email and intended Vercel details have been entered; do not remove the remaining review notice until the real operating arrangements are confirmed.

Before launch, confirm:
- Mailbox activation, provider and enquiry/customer handling purposes, lawful bases, recipients and retention periods.
- Vercel plan, contracting entity, region, logging configuration/retention, subprocessors and international-transfer safeguards where applicable.
- Actual hosting, CDN, security or analytics cookies and similar technologies on the deployed domain. The application itself sets no cookies and uses no analytics, advertising, localStorage or sessionStorage. No artificial consent banner is included. Any optional technologies requiring consent must be blocked until a valid choice is made, with balanced controls and an accurate policy.
- Service capabilities and specifications, VAT information if applicable, and separate consumer/business contract terms before taking orders.
- Permission or licences for downloaded reference photographs; the images are illustrative, not a verified RDB portfolio.

A hosting provider's privacy policy for its own platform is not automatically the policy for RDB's visitors. Vercel's access-log documentation confirms server records, but does not establish this account's retention settings. These have not been invented.

## Research sources

- Companies House: https://find-and-update.company-information.service.gov.uk/company/16900008
- Vercel visitor-data processing: https://vercel.com/legal/dpa
- Vercel server logs: https://vercel.com/legal/privacy-notice
- Planning Portal (England): https://www.planningportal.co.uk/permission/common-projects/outbuildings/
- GOV.UK building control: https://www.gov.uk/building-regulations-approval
- Food business guidance: https://www.gov.uk/guidance/starting-a-food-business
- HSE ventilation: https://www.hse.gov.uk/ventilation/keeping-a-comfortable-temperature.htm
- ICO cookie guidance: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/
- ICO privacy notices: https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/cookies-and-privacy-notices-in-detail/
- Company website disclosures: https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material
- Google SEO guidance: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## Latest presentation changes

FAQs are grouped into six related topic clusters on the homepage, with additional service-specific questions on each service page. The navbar no longer includes FAQs. The dedicated Contact page is linked from primary contact buttons and the footer. Visible photo captions/tags and public dates/review badges were removed; images retain descriptive alt text. Business review and hosting/privacy checks listed above still apply.

## Responsive readability

Responsive rules are in `src/styles/responsive.css`. Phone and tablet layouts use flexible columns, a shrinking header logo, 16px inputs, larger body/footer text and touch targets. Service content stacks below 960px; navigation collapses below 1000px. Narrow-phone galleries use one column. The cookie table can scroll within its own labelled region. Browser zoom is allowed and reduced-motion preferences are respected.

Verification completed: production build, static link/asset checks, viewport metadata on all 11 routes and final stylesheet inclusion/order. These are source/build checks, not physical-device or browser viewport tests. iOS Safari, Android Chrome/Samsung Internet, portrait/landscape, enlarged text and actual on-screen keyboard behaviour still require browser/device QA before claiming universal compatibility.

## Typography

The selected pairing is Plus Jakarta Sans for headings and Inter for body text, navigation and forms. The Latin variable WOFF2 files are self-hosted under `public/fonts/`, with SIL Open Font Licence texts beside them. Styles are in `src/styles/typography.css`; both files are preloaded and use font-display: swap. Visitors do not make Google Fonts requests.

## FormSubmit setup and verification

Both forms include a subject, readable email template, source URL and honeypot. Standard FormSubmit spam protection remains enabled. The thank-you page is noindex and excluded from the sitemap. Public privacy and cookie pages disclose FormSubmit without naming mailbox or hosting providers. They do not claim messages stay local. Existing unrelated email-signature files are not part of this change.

FormSubmit documentation: https://formsubmit.co/documentation . Activation and retention: https://formsubmit.co/help . Privacy: https://formsubmit.co/privacy.pdf . An activation email may be generated on the first real submission; the mailbox owner must activate it. FormSubmit returned HTTP 521 during implementation; routing can be configured but delivery should not be described as tested until service availability and inbox receipt are confirmed.
