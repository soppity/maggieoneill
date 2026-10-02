# Contact, forms and booking

Use these on every page. They replace any placeholders.

## Contact
- Phone: 0151 482 0408 → `tel:+441514820408`
- Text / WhatsApp: 07426 935661 → `sms:+447426935661` and `https://wa.me/447426935661`
- Address: Maggie O'Neill Centre, 433 Liverpool Road, Huyton, L36 8HT
- Opening hours: 8:30am to 5pm, Monday to Friday. Evening and weekend room hire on request.

Schema `openingHoursSpecification`: Mo–Fr 08:30–17:00. Mention evening and weekend hire in the copy, not in the schema hours.

## Accessibility facts (use word for word)
- Step-free access. Accessible parking spaces right outside the Auditorium. The Auditorium side door can be opened to shorten the route.
- Accessible toilet on the same floor as the Auditorium, a short walk away next to the kitchen. It has grab rails, a fold-down rail and an emergency pull cord. Photo: image library #158.
- Quiet room off the Auditorium foyer, with acoustic insulation and dim lights, signed on the door.
- Adjustable lighting in the Auditorium.

## General enquiry form (GoHighLevel)
Use it on Contact, in the CTA band and on any page that asks people to "get in touch". Paste it exactly as below. Load `form_embed.js` once per page.

```html
<iframe
    src="https://api.leadconnectorhq.com/widget/form/PTEyaGYXB96ztNMrZVGB"
    style="width:100%;height:100%;border:none;border-radius:0px"
    id="inline-PTEyaGYXB96ztNMrZVGB"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Website Enquiry"
    data-height="789"
    data-layout-iframe-id="inline-PTEyaGYXB96ztNMrZVGB"
    data-form-id="PTEyaGYXB96ztNMrZVGB"
    data-cookie-consent="true"
    data-cookie-consent-provider="auto"
    title="Website Enquiry">
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

Notes:
- Give the wrapper a minimum height of 789px so the page doesn't jump while the form loads.
- Send a GA4 `generate_lead` event when the form is submitted. GHL forms post a message to the parent window, so listen for that.
- The `form_embed.js` script and the leadconnectorhq.com and msgsndr.com domains must be allowed if a Content Security Policy is added on Netlify.

## Virtual office form (GoHighLevel)
Use this instead of the general form on `/services/virtual-office/`, `/services/virtual-office/call-answering/`, the virtual office guides and the accountants page. It collects the plan choice and the virtual office details. Every "Get your address" button and the mobile sticky bar on virtual office pages scroll to it (`#get-your-address`).

```html
<iframe
    src="https://api.leadconnectorhq.com/widget/form/RWoOkRV2NaAKLVe4JSmF"
    style="width:100%;height:100%;border:none;border-radius:8px"
    id="inline-RWoOkRV2NaAKLVe4JSmF"
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Virtual Office Page - Form"
    data-height="1006"
    data-layout-iframe-id="inline-RWoOkRV2NaAKLVe4JSmF"
    data-form-id="RWoOkRV2NaAKLVe4JSmF"
    data-cookie-consent="true"
    data-cookie-consent-provider="auto"
    title="Virtual Office Page - Form">
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

Notes:
- The wrapper needs a minimum height of 1006px.
- Send a GA4 `virtual_office_signup` event (not `generate_lead`) when it's submitted, so virtual office sign-ups are tracked on their own.
- Never put both GHL forms on the same page.

## Booking / availability (OfficeRnD)
- Link: https://maggieoneill.officernd.com/public/calendar
- Use it for every "Check availability" and "Book" button: the header button, the mobile sticky bar and the room cards. It opens in a new tab with `rel="noopener"`.
- Send a GA4 `booking_click` event on click.

## Call answering
Call answering (£39 a month) is an add-on. It's mentioned on the virtual office page beside the plans, and the details are discussed with the client after they submit the virtual office form. It has no separate form or sign-up link. Its own page's CTA ("Add call answering") goes to the virtual office form.
