# Handoff: Maggie O'Neill Centre website (mobtc.co.uk)

## Overview
This is a full rebuild of mobtc.co.uk for the Maggie O'Neill Centre ("Maggie's"), a charity-run hosted venue at 433 Liverpool Road, Huyton, L36 8HT (charity no. 1102507). It's built in Claude Code and hosted on **Netlify**. Room hire averages about £89k a month. Virtual office is the second lead service because it has no capacity ceiling.

This pack has the agreed strategy, site map, SEO plan, brand tokens, logos, image library and page copy sources. **No page has been designed yet.** Build one page at a time, with the owner reviewing each one before the next is started. The homepage comes first.

## About the design files
The `.dc.html` files in `reference/` are **planning and strategy documents made in HTML**, not production code. To view one, open it in a browser with `support.js` next to it. Treat them as the source of truth for structure, copy direction and SEO. Rebuild everything from scratch in the stack below. Don't copy their markup.

## Fidelity
- **Brand (high fidelity):** colours, type, logos, radii and shadows are final. Use the exact values in `tokens/`.
- **Pages (low fidelity):** the blueprint gives each page's sections, copy direction, keywords and links, but no visual layout. Design each page in the brand system and get it signed off before moving on.

## Recommended stack
- **Astro** (static output) on Netlify. It ships plain HTML, which is fast and good for SEO, and each page is a `.astro` file built from shared section components. If you'd rather use plain HTML with a build step, keep the same component split.
- Plain CSS, with the `tokens/*.css` variables imported globally. No CSS framework needed.
- Google Fonts: **Outfit** (headings, 500 to 800) and **Figtree** (body, 400 to 700). Self-host them for speed if you can.
- `netlify.toml` or `public/_redirects` for every 301 listed below.
- `@astrojs/sitemap` for `sitemap.xml`. Hand-write `robots.txt` and `llms.txt`.
- Forms: the GoHighLevel general enquiry form embed. See `content/contact-forms-booking.md`.
- Availability and booking: the OfficeRnD public calendar link (`https://maggieoneill.officernd.com/public/calendar`), as set out in `content/contact-forms-booking.md`.
- Contact: phone 0151 482 0408, text/WhatsApp 07426 935661, open 8:30am to 5pm Monday to Friday (evening and weekend room hire on request).

## Read first, in this order
1. `PROJECT_NOTES.md`: the standing rules for every page (names, facts, prices, what never to say). **These override anything else.**
2. `reference/Website Blueprint.dc.html`: site map, nav, every page's spec (URL, keyword, title, meta, H1, sections, proof, CTA, schema, internal links), templates, section library, linking rules, technical SEO, redirects and build order.
3. `reference/Brand Strategy.dc.html`: positioning, messaging and voice.
4. `reference/Client Avatars.dc.html`: what to say to each audience. Use it for page copy.
5. `content/`: copy sources (virtual office source text, Oliver McGowan brief, reviews, voice of customer, branded search data).
6. `content/contact-forms-booking.md`: phone, WhatsApp, hours, the enquiry form embed and the booking link. Use these exactly.
7. `assets/image-library.md`: 157 hosted .webp images by room and area, plus 15 client logos. **Use these. No placeholders.**

## Brand rules (summary)
- **Name:** "Maggie O'Neill Centre", with no "The". Every title tag ends "| Maggie O'Neill Centre". The name also goes in the H1 or first paragraph, meta descriptions, alt text and schema.
- **Brand word:** "Looked after". **Line:** "Looked after at Maggie's." **Category:** a hosted venue. Staff are "hosts" (Patrick, Tania; Liam is a volunteer).
- **Write for the booker.** Every page answers every question and objection before people get in touch: price (or how to get one), capacity, layouts, tech, parking, access, refreshments and terms. The aim is that an enquiry is a quick confirmation, not a back-and-forth.
- **Retired:** "Workspaces with heart" and "Fair prices, full stop" as headlines. No hot desking anywhere. Never use "AI receptionist"; the service is "Call answering". Never name training providers. Never list Genesis. Never mention a hearing loop.
- **Voice:** plain, warm and specific. No "premium", "world-class" or "solutions". Avoid rule-of-three slogans.

## Design tokens
Source files: `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.

**Colours**
- Purple: 900 `#2A0752` (logo text, darkest), 800 `#38086F` (logo mark), 700 `#4A0D8F` (primary, headings, bands), 600 `#5B21A8`. Tints `#F1EBFA` and `#E7DCF6`.
- Coral: 700 `#D64A26` (eyebrows, links), 600 `#E05633` (hover), 500 `#F0603A` (primary CTA, accents, the logo apostrophe), 400 `#F5825F`. Tint `#FDEDE7`.
- Neutrals: ink `#211A2E`, slate `#6B7280`, slate-2 `#94A0AE`, page `#FCFAF7`, cream band `#FAF3EB`, beige `#F1E6D6`, white `#FFFFFF`, border `#ECE8F1`.
- Functional: gold `#F0A81C` (review stars only), success `#1F8A5B`, error `#C93A3A`.
- Never put amber or coral text on purple.

**Type**
- Hero 72px/1.05, weight 800. H1 56px, H2 40px, H3 24px/700. Display tracking -0.02em.
- Lead 20px, body 17px/1.6, small 15px, caption 13px.
- Eyebrow 14px, weight 600, uppercase, tracking 0.08em.
- Stat numerals 64px.
- Scale down fluidly on mobile with `clamp()`.

**Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Content max width 1200px. Section padding 96px top and bottom (scale down on mobile). Card padding 32px. Grid gap 24px.

**Radii:** input 12px, tile 16px, card 24px, pill 999px.

**Shadows**
- Card: `0 2px 6px rgba(42,7,82,.04), 0 12px 32px rgba(42,7,82,.07)`
- Card hover: `0 4px 10px rgba(42,7,82,.06), 0 20px 44px rgba(42,7,82,.11)`
- Button: `0 4px 14px rgba(240,96,58,.28)`

**Motion:** ease `cubic-bezier(.2,.8,.4,1)`, 150ms for fast changes, 220ms as the default.

## Logos
Logos are in `assets/logo/`, as SVG plus transparent PNG. Placement is set out in `assets/logo/hosted-links.md`:
- **Header:** `mobtc-logo-horizontal.svg`
- **Footer and purple bands:** `mobtc-logo-horizontal-reversed.svg`
- **Mobile header:** `mobtc-logo-icon.svg`
- **Favicon, apple-touch-icon, social share and schema `logo`:** `mobtc-badge-icon.png`
- Alt text: "Maggie O'Neill Centre logo". The header logo links to `/`.

## Images
Use only the hosted URLs in `assets/image-library.md`. Rules:
- **#142** (capacities sheet) is internal only. Never show it.
- **#54** shows AirPlay on the Summit TV. Use it for tech features.
- **#105** is the Community Room photo.
- Client logos are **#143 to #157** (Central and South PCN is #157).
- Every image needs descriptive alt text that includes "Maggie O'Neill Centre" where it reads naturally, plus `width` and `height`, `loading="lazy"` below the fold, and `fetchpriority="high"` on the hero image.

## Site map and build order
The full page specs are in the Website Blueprint. Build in this order, with a review after each page:
1. **Homepage.** This sets the shared section library: header, nav, hero with proof strip, logo strip, "Who books with us", virtual office band, rooms and services, reviews, FAQs, CTA band and footer.
2. Virtual office (`/services/virtual-office/`) and Call answering (`/services/virtual-office/call-answering/`), with every redirect from `virtual.mobtc.co.uk`.
3. Training rooms hub (`/services/training-rooms/`).
4. Oliver McGowan training venue, care, fostering and adoption, NHS and primary care, and councils, schools and public sector, all under `/services/training-rooms/`.
5. The five virtual office guides, What's included, and the accountants page (`/services/virtual-office/accountants/`).
6. Case study template plus stories (Alder Hey, Amore, AFG, Central and South PCN), Reviews, Social value.
7. Meeting rooms, Events and conferences, Private offices.
8. About and hosts, Community, Visit, Contact, blog guides, then final checks and launch.

**Navigation:** Training rooms ▾ · Virtual office ▾ · Meeting rooms · Events · Private offices · Why Maggie's ▾. There's a "Check availability" button in the header. On mobile there's a sticky bottom bar, which reads "Get your address" on virtual office pages.

## Redirects (301)
- `/services/meeting-training-rooms/` → `/services/training-rooms/`
- `/services/hotdesking/` → `/services/meeting-rooms/`
- `/services/coworking/` → `/services/meeting-rooms/`
- `virtual.mobtc.co.uk/*` → `/services/virtual-office/` (and `/ai-receptionist` → `/services/virtual-office/call-answering/`). This is set on the subdomain's host.
- `/virtual-office-new/` → `/services/virtual-office/`
- `/faq-items/*` → the page each FAQ belongs to
- Hot-desking and coworking blog posts → `/blog/` or the closest guide
- `/author/*`, `/tag/*`, `/category/*` should not exist on the new site. If any are kept, set them to noindex.

Before launch, crawl the live site and map **every** old URL to a new one, so no indexed page returns a 404.

## Technical SEO for every page
- One H1 per page. Unique title (under about 60 characters, ending "| Maggie O'Neill Centre") and meta description (under about 155 characters).
- A self-referencing canonical, plus Open Graph and Twitter tags with a library image.
- JSON-LD on every page: `Organization`/`LocalBusiness` (name, address, phone, geo, logo, sameAs) and `BreadcrumbList`. Add `Service` + `Offer`, `FAQPage`, `Place` and `Article` where the blueprint says so.
- FAQs are written on the page (not hidden), using `<details>` or similar, and match the FAQ schema.
- Internal links follow the blueprint's linking table, using descriptive anchor text.
- Aim for Lighthouse 95+: AVIF/WebP images, preloaded fonts, very little JavaScript.
- Analytics: one GTM container, a cookie consent banner (so UK visits are counted), and key events for form submit, booking, phone click, WhatsApp click, chat start and virtual office sign-up (with plan value). Forms need spam protection.

## Responsive behaviour
Mobile-first, with no horizontal scroll. Breakpoints at about 640, 960 and 1200px. Grids collapse to one column. Tap targets are at least 44px. Show phone and WhatsApp prominently on mobile.

## Interactions
Kept simple, with no heavy animation:
- Hover lifts on cards (card shadow → card hover shadow, 220ms).
- Coral buttons go to `#E05633` on hover.
- FAQ accordions.
- Mobile nav drawer.
- Photo journey galleries (swipe on mobile).
- Video walkthrough embeds load only when tapped.

## Still to come from the owner
- Hosted logo URLs (local SVGs work until then).
- Logos: Alder Hey, Adoption in Merseyside, Knowsley Fostering, Foster4, Meadow Park Primary, Alt Bridge School, Knowsley Central School.
- Video walkthroughs.

## Files in this pack
- `README.md`: this file
- `PROJECT_NOTES.md`: standing rules (must read)
- `reference/`: Website Blueprint, Brand Strategy, Client Avatars and Logo Assets (`.dc.html`, open with `support.js` alongside). Logo images may not show inside these, because their paths point to the original project.
- `tokens/`: CSS variables for colour, type, spacing and effects
- `assets/logo/`: every logo as SVG and PNG, plus `hosted-links.md`
- `assets/image-library.md`: hosted image URLs and descriptions
- `assets/pilotomail/`: login and mailbox picker screens for the accountants page (client names anonymised)
- `content/`: virtual office source copy, Oliver McGowan brief, reviews, voice of customer, branded search data

## Suggested first prompt in Claude Code
> Read README.md and PROJECT_NOTES.md, then the Website Blueprint. Set up an Astro project for Netlify with the tokens, fonts, logos, base layout, header, footer, SEO component (title, meta, canonical, OG, JSON-LD) and redirects. Then build the homepage only, to the blueprint spec, using images from assets/image-library.md. Stop for my review before building any other page.
