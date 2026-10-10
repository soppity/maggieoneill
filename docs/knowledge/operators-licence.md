# Knowsley Operator's Licence service (knowledge base)

Source: owner brief, Oct 2026 (moved in from taxi.mobtc.co.uk). Fees last verified 15 May 2026.
Public facts also live in `src/data/facts.ts` (`operatorLicence`), which feeds the pages, schema and llms.txt.

## Pages
- Public: `/operators-licence/` (indexed, in the sitemap, nav under Virtual office, footer, llms.txt). CTAs: "Check if you qualify" (enquiry form) and Call.
- Unlisted (noindex, not in nav/footer/sitemap/llms, never linked from a public page): `/operators-licence/application-guide/`, `/operators-licence/apply/` (11-step lease details form), `/operators-licence/exit/?borough=liverpool|sefton|other`.
- Netlify forms: `operator-licence-enquiry`, `operator-lease-details`, `exit-page-optin`.
- Still on the back office at taxi.mobtc.co.uk: the operator portal, direct debit mandate, lease signing, /admin. The private guide links to the portal there.
- Signposted from the virtual office pages (strip after key facts, an FAQ, and a line by the sign-up form), because other boroughs accept a virtual office but Knowsley doesn't.

## Facts
- **Service:** Knowsley Private Hire Operator's Licence satellite office lease at the Maggie O'Neill Centre, 433 Liverpool Road, Huyton, Liverpool, L36 8HT (Knowsley Metropolitan Borough). Not a virtual office.
- **Who for:** taxi/private hire operators applying to or renewing with **Knowsley Council only**. 18+, sole trader or Ltd director, must pass AML checks.
- **Price:** 12-month lease, direct debit on the 1st, no setup fee, fixed and non-negotiable. 1 vehicle £100/mo · 2–10 £150/mo · 11–50 £200/mo · 51+ £250/mo.
- **Exit clause:** released with no further payments if Knowsley formally refuses or revokes the licence. The operator emails the letter to info@mobtc.co.uk. Doesn't apply to withdrawn, unsubmitted, paused or queried applications.
- **Planning (public wording):** Class E commercial building, the correct planning permission for a Knowsley satellite office operator licence. Full certificate PDF provided on signing.
- **Operator address format on the council form:** "Office [Number]" + MOC address. The office number is issued on lease signing.
- **Operator provides:** basic DBS (every owner/director/responsible person, ~£25), public liability insurance (£100–300/yr typical), HM Tax Check code (<3 months old), proof of ID per director, proof of citizenship or Right to Work for all directors, council fee.
- **MOC provides:** signed lease + planning permission certificate PDF via the operator portal, plus free help with the council application.
- **Council fees (new, 1yr/5yr):** 1 veh £242/£847 · 2–10 £308/£1,078 · 11–50 £467.50/£1,628 · 51+ £550/£1,920. **Renewal:** £231/£803 · £297/£1,039.50 · £440/£1,545.50 · £528/£1,837. Recommend 1-year for first-timers because the fee isn't refunded on refusal.
- **Timeline:** 14-day minimum public consultation, then review, decision ~6 weeks. Renewals ~2–3 weeks. Renew ≥28 days before expiry. Appeals within 21 days.
- **Track record:** 15+ operators supported.
- **Contacts:** 0151 482 0408 (main number, use for everything; never 07446 491121) · info@mobtc.co.uk. Registered charity number: use `site.charityNumber` (the brief's 1102507 is the old number).
- **Sales process:** the public page sells the service and captures enquiries. The application guide, lease form and (later) chatbot are shared privately with qualified operators only.

## INTERNAL: never show publicly
Keep this section out of anything public-facing (pages other than the private guide, schema, llms.txt, site search, a public chatbot).
- **Planning reference:** Knowsley ref 09/00608/COU, granted 4 Aug 2010, for use as private hire taxi operator's premises.
- **Council form field format:** `09/00608/COU - Wed 04 Aug 2010` (exactly, including the dashes and day of the week).
