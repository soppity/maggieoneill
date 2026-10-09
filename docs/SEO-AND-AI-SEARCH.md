# SEO and AI search optimisation: Maggie O'Neill Centre

Version 1, 2 October 2026. This applies to every page of the new site, and Claude Code must follow it. If it conflicts with anything except PROJECT_NOTES.md, this file wins.

People already find us through ChatGPT, Gemini, Copilot and Perplexity without any optimisation. The aim is to make the Maggie O'Neill Centre the answer these assistants give, and the answer Google gives, whenever someone in Merseyside asks for a training venue, a meeting room, a fostering or Oliver McGowan venue, or a virtual office.

---

## 0. How AI search works, and what that means for us

- **The assistants get their answers from search indexes and their own crawlers.**
  - ChatGPT search uses its own crawler (OAI-SearchBot) and partner indexes, including Bing.
  - Copilot uses Bing.
  - Gemini and Google AI Overviews use Google's index.
  - Perplexity and Claude use their own crawlers plus search partners.

  So the basics come first: be crawlable, indexed in **both Google and Bing**, and fast.
- **They quote pages that state facts plainly.** A sentence such as "The Auditorium seats up to 60 cabaret style" gets quoted. "Flexible spaces for every occasion" doesn't. Every page needs short, factual, quotable sentences.
- **They check facts across sources.** If our name, address, phone, prices and capacities match on our site, Google Business Profile, Bing Places, Apple Business Connect, the Charity Commission and directories, the assistants trust us. If they don't match, they hedge or leave us out.
- **They answer questions.** Pages should use the exact questions people ask as headings, with the answer in the first sentence underneath.
- **Structured data helps machines read the facts.** JSON-LD makes our name, address, rooms, capacities, prices and services unambiguous.
- **Nothing important can be hidden.** Prices, capacities and FAQs must be in the HTML, not loaded by JavaScript, not only in images, and not only inside a GoHighLevel iframe. Crawlers can't read iframes as our content.

---

## 1. The entity: say who we are the same way everywhere

### 1.1 Canonical facts (use exactly these strings)
| Field | Value |
|---|---|
| Name | Maggie O'Neill Centre |
| Also known as (schema alternateName, never in headings) | Maggie's; Maggie O'Neill Centre Huyton; Maggie ONeill Centre; Maggie O Neill Centre; MOBTC |
| What we are | A charity-run training, meeting and event venue and virtual office provider |
| Category phrase | a hosted venue |
| Address | 433 Liverpool Road, Huyton, Liverpool, L36 8HT, United Kingdom |
| Area | Huyton, Knowsley, Merseyside (near Liverpool) |
| Phone | 0151 482 0408 (+44 151 482 0408) |
| Text / WhatsApp | 07426 935661 (+44 7426 935661) |
| Hours | Monday to Friday, 8:30am to 5pm. Evening and weekend room hire on request. |
| Charity number | 1215599 (registered in England and Wales) |
| Website | https://mobtc.co.uk |
| Booking | https://maggieoneill.officernd.com/public/calendar |
| Reviews | 230 Google reviews (as of 28 September 2026) |
| Last year | 900+ rooms hired, 150+ businesses served, 750+ people accessed Maggie's Meals |
| Parking | Free car park on site, 30 seconds from the M57, on a main bus route |
| Hosts | Patrick and Tania (Liam volunteers) |

Rules:
- Write the name as "Maggie O'Neill Centre", with no "The", a straight or curly apostrophe (be consistent across the site), "Centre" spelled the British way and "O'Neill" with two Ls.
- The misspellings go **only** in schema `alternateName`. Never write them in visible copy.
- **Title tags:** every one ends "| Maggie O'Neill Centre". The homepage title is "Training & Meeting Rooms near Liverpool | Maggie O'Neill Centre" (or the blueprint version).
- The full name appears in the H1 or the first paragraph, the meta description, at least one image's alt text, and schema on every page.

### 1.2 Places this must match (owner actions, off-site)
Check every listing against the table above, then fix it.
1. **Google Business Profile** (used by Gemini, AI Overviews and Maps):
   - Primary category: Conference centre. Secondary categories: Meeting room, Training centre, Virtual office rental, Event venue.
   - List each service with its price, and add photos of every room.
   - Make sure the hours and the website link are correct.
   - Post updates monthly.
2. **Bing Places for Business** (used by Copilot and ChatGPT search). You can import it from Google Business Profile.
3. **Apple Business Connect** (used by Siri, Apple Maps and Apple Intelligence).
4. **Charity Commission register:** the website and contact details.
5. **Companies House**, if the charity is also a company.
6. **Knowsley Chamber**, the local council directory, and partner organisations' "venues we use" pages.
7. **Venue directories:** Hire Space, Tagvenue, HeadBox, Venuedirectory, Yell, Thomson Local. Use the same name, address, phone, description and photos everywhere. Remove any coworking-app listings (decided in the brand strategy).
8. **Social profiles:** Facebook, LinkedIn, Instagram. Same name, address, phone and link, and a consistent one-line description:
   > "Maggie O'Neill Centre is a charity-run training, meeting and event venue in Huyton, near Liverpool, with free parking and hosts on site. Virtual offices from £20 a month."
9. **Wikidata** (optional, worth an hour): an item for the charity with its name, charity number, address, website and coordinates. Assistants use Wikidata to pin down organisations.

Every listing that has a URL goes into `sameAs` in the schema (section 4).

---

## 2. Crawl access and indexing

### 2.1 robots.txt
Use `seo-files/robots.txt` from this pack. It allows all search and AI crawlers.
- **Owner's decision:** allow everything, including model-training crawlers. Being in the assistants' memory is part of being recommended. If the owner later wants to block training crawlers only (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, meta-externalagent), they should keep the **search** agents allowed: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Bingbot and Googlebot.
- Crawler names change. Before launch, check the current user-agent list on each vendor's documentation page.
- Check that nothing on Netlify blocks bots. Some firewall or "bot protection" settings and edge functions block AI crawlers by default.

### 2.2 Sitemaps and indexing
- `@astrojs/sitemap` produces `sitemap-index.xml`, with an accurate `<lastmod>` for each URL taken from the content's last change, not the build time.
- The sitemap lists only canonical, indexable, 200-status URLs.
- **Google Search Console:** verify the domain property (DNS) and submit the sitemap.
- **Bing Webmaster Tools:** verify (it can import from Search Console) and submit the sitemap. This matters because ChatGPT search and Copilot draw on Bing.
- **IndexNow:** add an IndexNow key file and ping it after each production deploy with the changed URLs. A small Netlify build plugin or post-deploy function does this. It speeds up Bing, Yandex and partner indexing.
- Deploy previews must **not** be indexed. Confirm Netlify sends `X-Robots-Tag: noindex` on deploy previews and branch deploys. If it doesn't, add it in `netlify.toml` for non-production contexts. Production must **not** have noindex.

### 2.3 Rendering
- Astro static output. All content (copy, prices, capacities, FAQs, reviews) is in the HTML at build time.
- No content that only appears after JavaScript runs, after a click (except `<details>` FAQs, whose content is still in the HTML), or after scrolling.
- The GHL forms and the OfficeRnD calendar are iframes or links. That's fine, but every fact the forms ask about (plans, prices, what's included) must also be written on the page.
- Every page returns 200. Old URLs return a 301 (see the README). Unknown URLs get a real 404 page with links to the main services.

### 2.4 Canonicals and URLs
- Each page has a self-referencing canonical with an absolute https URL and a trailing slash, matching the blueprint.
- `<html lang="en-GB">`.
- Pick www or non-www and redirect the other with a 301. Use the domain as currently set up in Search Console.

---

## 3. On-page rules, applied to every page

### 3.1 Head
- **Title:** under about 60 characters, ending "| Maggie O'Neill Centre". The primary keyword comes first, as in the blueprint.
- **Meta description:** under about 155 characters. Include the name, the place (Huyton or "near Liverpool"), and one hard fact (a price, capacity or "free parking").
- **Open Graph and Twitter tags:** `og:title`, `og:description`, `og:image` (1200×630, a real library photo), `og:url`, `og:site_name` = "Maggie O'Neill Centre", `og:locale` = en_GB.
- `<link rel="icon">` and the apple-touch-icon use the badge.
- JSON-LD (section 4).

### 3.2 Page structure for people and assistants
1. **H1** with the primary keyword and the name or place.
2. **An answer-first opening paragraph** (40 to 60 words) that answers who, what, where, for whom, and roughly how much. Assistants quote this paragraph most. Example for the training rooms hub:
   > "The Maggie O'Neill Centre is a hosted training venue in Huyton, near Liverpool. Seven rooms seat from 4 to 100, every room has a screen with AirPlay and HDMI, tea and coffee are served in the room, and parking is free. A host meets every group at the door."

   (Use the real room count and capacities from the capacities data. Don't invent figures.)
3. **A key facts block** near the top. Use a `<dl>` or table: capacity, layouts, price or how to get one, what's included, parking, access, hours, booking.
4. **Question-shaped H2s** for the main sections, using the words people type or say, for example:
   - "How many people can the Auditorium hold?"
   - "Is parking free at the Maggie O'Neill Centre?"
   - "How much is a virtual office in Liverpool?"
   - "Can a wheelchair user get around the room?"

   The first sentence under each H2 is the direct answer, followed by the detail.
5. **Tables** for anything comparable: room capacities by layout, plan comparisons, what's included compared with a hall and a hotel. Assistants lift tables well.
6. **FAQs** at the end. Each one is a real question, answered in 1 to 3 sentences that make sense out of context. Repeat the subject instead of writing "it" (for example "The Pod costs £20 an hour", not "It costs £20").
7. **"Last updated: [Month Year]"** in visible text on service, pricing and guide pages. Change it only when the content really changes.
8. **One clear CTA**, plus the phone number as a `tel:` link in the text.

### 3.3 Writing rules for being quoted
- Use specific numbers in words people search: "up to 60 cabaret", "£20 a month", "30 seconds from the M57", "free parking for 50 cars". Use the real figure, and only if it's confirmed.
- One fact per sentence where possible. Avoid long chains of clauses.
- Name things fully the first time on each page: "the Auditorium at the Maggie O'Neill Centre".
- Name the place in sentences: Huyton, Knowsley, Liverpool, Merseyside, plus the nearby areas on the pages that cover them.
- Name the sectors in sentences: care providers, the NHS, primary care networks, councils, schools, fostering and adoption teams, Oliver McGowan Tier 2 training.
- No marketing filler ("world-class", "state-of-the-art", "solutions"). Assistants skip it, and it breaks the house voice.
- Never write claims we can't support ("the best venue in Liverpool"). Let reviews and case studies make the claims.

### 3.4 Images
- Use the hosted library images only. Every image needs descriptive alt text. Name the room and what's happening, and include "Maggie O'Neill Centre" where it reads naturally. For example: "The Summit training room at the Maggie O'Neill Centre set classroom style for 20".
- Include `width` and `height` on every image, `loading="lazy"` below the fold, and `fetchpriority="high"` on the hero.
- Use real captions on photo journey images. Captions get indexed and quoted.
- Video walkthroughs: when they arrive, use `VideoObject` schema and a written transcript or summary on the page.

### 3.5 Internal linking
Follow the blueprint's linking table. Anchors are descriptive, using the target page's main phrase. Every page is reachable within 3 clicks of the homepage. Breadcrumbs go on every page below the homepage.

### 3.6 Speed and Core Web Vitals
- Targets: LCP under 2.0s on 4G, CLS under 0.05, INP under 200ms. Lighthouse 95+ for performance, SEO, accessibility and best practices.
- Self-host Outfit and Figtree as subsetted WOFF2 files and preload the two most-used weights.
- The GHL form script loads only on pages with a form. Reserve the form's height (789px for the general form, 1006px for the virtual office form) to avoid layout shift.
- Ship almost no JavaScript: the nav drawer, accordions and gallery only.

### 3.7 Accessibility
Accessibility is also good SEO, and it's essential for the Oliver McGowan and care pages.
- Semantic landmarks, one H1, headings in order, visible focus states, 4.5:1 text contrast, labelled controls, and skip-to-content.
- Write the accessibility facts in plain text (step-free routes, accessible parking, the accessible toilet location, the quiet room), not just as icons.

---

## 4. Structured data (JSON-LD)

Use `seo-files/schema-sitewide.jsonld` as the base on **every** page. Add page-specific nodes to the same `@graph`. Every node gets a stable `@id` (for example `https://mobtc.co.uk/#venue`) so pages reference the same entity.

**Sitewide nodes**
- `#org` (`NGO`): the charity. Includes name, alternateName, url, logo, charity number (`identifier`), telephone, address, and sameAs (every profile from section 1.2).
- `#venue` (`LocalBusiness` + `EventVenue`): the building.
  - Address, geo (take the coordinates from the Google Business Profile pin; don't guess), telephone, opening hours, and `parentOrganization` → `#org`.
  - `amenityFeature`: free parking, WiFi, screens with AirPlay, tea and coffee included, step-free access, accessible parking, accessible toilet, quiet room.
  - `hasMap`, `image` and `publicAccess`.
  - **No** `aggregateRating` or `review` markup for our own reviews. Google ignores self-serving review markup on LocalBusiness and Organization pages, and it can count as spammy.
- `#website` (`WebSite`): name "Maggie O'Neill Centre", alternateName "Maggie's", url, publisher → `#org`. This helps Google show the right site name.
- `BreadcrumbList` on every page except the homepage.
- `WebPage` for each page: `@id` = URL + `#webpage`, plus name, description, isPartOf → `#website`, about → `#venue` or the service, `dateModified`, and `primaryImageOfPage`.

**Page-specific nodes**
| Page | Add |
|---|---|
| Training rooms hub, Meeting rooms, Events | A `Service` (provider → `#venue`, areaServed, serviceType), plus a `Place` for each room (name, containedInPlace → `#venue`, maximumAttendeeCapacity, amenityFeature, image). Add `Offer` only where a price is published (for example the Pod at £20 an hour or £120 a day). |
| Sector pages (Oliver McGowan, care, fostering and adoption, NHS, councils and schools) | A `Service` with `audience` (`Audience` with audienceType, for example "Oliver McGowan Tier 2 training providers"), plus the Auditorium or room `Place`. On the Oliver McGowan page, also add the Auditorium's accessibility amenityFeatures. **No hearing loop.** **No price.** |
| Virtual office | A `Service` "Virtual office" with `hasOfferCatalog`: the four `Offer`s at £20, £30, £40 and £50 (priceCurrency GBP, unitText "MONTH", with a description of each), plus an add-on `Offer` for call answering at £39 a month. Set areaServed to the list of areas. |
| Call answering | A `Service` "Call answering service" with an `Offer` at £39 a month, and provider → `#org`. |
| Accountants | A `Service` with `audience` "Accountants and bookkeepers", and an `Offer` described as 15% off for referred clients. |
| Guides and blog | `Article` (headline, datePublished, dateModified, author → a named `Person` host or `#org`, publisher → `#org`, image). |
| Case studies | `Article`, with `about` → the client `Organization` (name and logo only) and `mentions` → `#venue`. |
| Contact | `ContactPage`, plus `ContactPoint` nodes (telephone and WhatsApp, contactType "customer service", areaServed GB, availableLanguage en). |
| About and hosts | `AboutPage`, plus `Person` nodes for Patrick and Tania (name, jobTitle "Host", worksFor → `#org`) if they agree to be named. |
| Any page with FAQs | `FAQPage`, matching the visible FAQs **word for word**. Google shows FAQ rich results only for a few authoritative sites now, so don't expect them in search. The markup is still worth adding because assistants and other engines read it. |
| Pages with a video walkthrough | `VideoObject` (name, description, thumbnailUrl, uploadDate, contentUrl or embedUrl, duration). |

**Validation:** run every template through the Google Rich Results Test and validator.schema.org before merging. No errors are allowed, and warnings need a reason.

---

## 5. Files written for machines

### 5.1 llms.txt
Put `/llms.txt` at the site root, based on `seo-files/llms.txt` in this pack.
- It's a plain-language summary of who we are, the key facts and links to the main pages, with one line describing each.
- No major assistant has confirmed it uses llms.txt, but it costs almost nothing, and some tools and agents do read it.
- Keep it in line with the site. Regenerate it on build from the same facts data, so it never drifts.

### 5.2 A single facts file powering everything
- Create `src/data/facts.json` (or .ts) holding every canonical fact: name, alternate names, address, phone, hours, charity number, review count, stats, rooms with capacities by layout and any published prices, virtual office plans, call answering, and areas served.
- Pages, schema, llms.txt and the facts page all read from this one file. A change in one place updates everything. This is the most important consistency measure on the site.

### 5.3 Facts page (new page: recommended, owner to approve)
- URL: `/about/facts/`. Title: "Maggie O'Neill Centre: Key Facts | Maggie O'Neill Centre".
- A plain, dated page listing every canonical fact in tables, from facts.json:
  - Who we are, address, contact and hours.
  - Every room with its capacities by layout.
  - What's included, parking, access, prices published so far, and virtual office plans.
  - Sectors we host and the organisations that use us (logos-only clients by name).
  - The charity number.
- It's the page an assistant can quote from with confidence. Link it from the footer ("Key facts") and the About page.

### 5.4 Optional: Markdown copies
- On build, output a clean Markdown copy of each main page at the same path plus `index.md`, and list them in llms.txt.
- It's a low-cost nice-to-have for agents. Skip it if it complicates the build.

---

## 6. Content that wins AI answers

### 6.1 Questions to answer on the site
These are the questions people ask assistants. Each needs a page or section that answers it in the first sentence. Check each one before launch.

**Training and meetings**
- "Where can I hire a training room in Huyton / Knowsley / near Liverpool?" → Training rooms hub
- "Training venues near Liverpool with free parking" → hub and key facts
- "Venue for Oliver McGowan Tier 2 training in Merseyside" → Oliver McGowan page
- "Accessible training venue with a quiet room near Liverpool" → Oliver McGowan page and Visit
- "Does the venue have an accessible toilet?" → Oliver McGowan, care, Visit and What's included FAQs (photo #158, same floor as the Auditorium, next to the kitchen)
- "Venue for foster carer / adoption preparation training in Merseyside" → fostering and adoption page
- "Care training venue for TMVA / hoist / first aid training Liverpool" → care page
- "NHS / PCN training day venue Knowsley" → NHS page
- "INSET day venue Knowsley" → councils and schools page
- "Meeting room for 4 / boardroom hire Huyton" → Meeting rooms (the Pod)
- "Conference venue for 100 near Liverpool" → Events (the Auditorium)
- "How much does it cost to hire a training room in Knowsley?" → hub (prices or how to get a quote)
- "What's included when you hire a room at the Maggie O'Neill Centre?" → What's included
- "Training venue near the M57" → hub and Visit

**Virtual office**
- "Cheapest virtual office in Liverpool" → Virtual office (£20 a month, said plainly)
- "Registered office address Liverpool" → Virtual office
- "How do I keep my home address off Companies House?" → guide
- "Virtual office vs registered office: what's the difference?" → guide
- "Can a limited company use a virtual office address?" → guide
- "Virtual office with mail scanning near Liverpool" → Virtual office (£40 plan)
- "Call answering service for small business Liverpool" → Call answering
- "Registered office service for accountants' clients" → Accountants

**Brand**
- "What is the Maggie O'Neill Centre?" → homepage opening and facts page
- "Is the Maggie O'Neill Centre a charity?" → About and facts
- "Maggie O'Neill Centre parking / opening hours / phone number" → Contact, Visit and facts
- "Who was Maggie O'Neill?" → About (a short, factual history, if the owner provides it)

### 6.2 Proof that assistants weigh
- **Reviews on Google:** the quantity, how recent they are, and what they say. After each booking, the thank-you email asks for a review and suggests mentioning what they booked, for example "your fostering training day". Reviews that name the service and place help assistants match us to those questions.
- **Third-party mentions:** partner pages that name and link to us (Adoption in Merseyside, Knowsley Fostering, Foster4, Central and South PCN, Knowsley Chamber, schools). Ask each partner for a line on their site, such as "Our training takes place at the Maggie O'Neill Centre, Huyton".
- **Local press and council news** about Maggie's Meals and the community work.
- **Case studies** on our site, with the client named. These are logos only for now, but even a one-paragraph story per client is quotable.
- Never create fake reviews, fake directory listings or forum posts pretending to be customers.

### 6.3 Freshness
- Review prices, capacities and facts every quarter, and update facts.json and the "Last updated" dates.
- Publish one useful guide a month (the virtual office guides first).
- Post monthly updates on Google Business Profile.

---

## 7. Local SEO

- **NAP block** (name, address, phone) in the footer of every page as text, not an image, marked up through the sitewide schema.
- **Embedded Google Map** on Contact and Visit, loading only when tapped, to keep the page fast.
- **Directions on Visit, in text:** by car from the M57 and M62, by bus (route numbers, if the owner confirms them), and from Huyton and Roby stations (confirm which is nearest). Include parking details and the accessible entrance.
- **Areas served,** named in text on the virtual office page (Liverpool, Knowsley, St Helens, Sefton, Wirral, Halton, Warrington, West Lancashire) and on sector pages where true.
  - No separate doorway pages for each town unless each has unique, useful content.

---

## 8. Measuring AI search

### 8.1 Analytics
- GA4 custom channel group "AI assistants". The rule is that the source matches this regex:
  `(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|bing\.com/chat|claude\.ai|you\.com|meta\.ai)`
  Put it **above** Referral in the channel order.
- ChatGPT often adds `utm_source=chatgpt.com`. Make sure the cookie banner and consent mode don't strip UTMs.
- Key events: `generate_lead` (general form), `virtual_office_signup` (virtual office form), `booking_click`, `phone_click`, `whatsapp_click`, `email_click`.
- Make a Looker Studio page (or GA4 exploration) showing AI assistant sessions and key events each month.

### 8.2 Ask people (owner action in GoHighLevel)
- Add "How did you find us?" to both GHL forms. Options: Google search, Google Maps, ChatGPT / AI assistant, Recommendation, Social media, Been before, Other.
- Many AI referrals show up as "direct" in analytics, so this form answer is the most reliable measure.

### 8.3 Monthly prompt check
Use `seo-files/ai-prompt-tracking.csv`.
1. Once a month, ask each prompt in ChatGPT, Gemini, Copilot, Perplexity and Claude. Use a logged-out or fresh session, with the location set to Liverpool if possible.
2. Record whether the Maggie O'Neill Centre is mentioned, whether we're linked, and whether the facts are right.
3. Fix any wrong fact at its source (the site, Google Business Profile or a directory), not just on our site.

---

## 9. Pre-launch and per-page checklist (add to the SOP checklist)

**Every page**
- [ ] Title and meta description follow section 3.1. The name is in the H1 or the first paragraph.
- [ ] An answer-first opening paragraph and a key facts block.
- [ ] Question-shaped H2s, with the answer in the first sentence.
- [ ] All prices, capacities and FAQs in the HTML (view the page source to check).
- [ ] Facts come from facts.json, not typed in by hand.
- [ ] JSON-LD validates with no errors. The FAQPage text matches the visible FAQs.
- [ ] Self-referencing canonical, a 200 status, and in the sitemap.
- [ ] "Last updated" date on service, pricing and guide pages.
- [ ] Alt text and captions on every image.
- [ ] Lighthouse 95+, with no layout shift from forms.
- [ ] Descriptive internal links, as the blueprint sets out.

**Launch**
- [ ] robots.txt is live and allows the search and AI crawlers. No firewall is blocking bots.
- [ ] Deploy previews are noindex, and production is not.
- [ ] Sitemap submitted to Google Search Console **and** Bing Webmaster Tools.
- [ ] IndexNow pinging on deploy.
- [ ] llms.txt and the facts page are live and match facts.json.
- [ ] Every old URL has a 301 (crawl the old site first).
- [ ] Google Business Profile, Bing Places and Apple Business Connect updated with the same facts and the new URLs.
- [ ] GA4 "AI assistants" channel group set up. "How did you find us?" added to both forms.
- [ ] First monthly prompt check done, to give a baseline.

---

## 10. What not to do

- No hidden text, keyword stuffing, or misspellings in visible copy.
- No self-serving review schema.
- No doorway pages for each town.
- No AI-generated filler pages. Every page has real facts from facts.json.
- Never block OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot or Googlebot.
- Never mention a hearing loop, Genesis, hot desking, "AI receptionist", training providers' names, or the internal capacities sheet (#142).
