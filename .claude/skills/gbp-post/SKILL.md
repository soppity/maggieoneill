---
name: gbp-post
description: Draft this week's Google Business Profile post for the Maggie O'Neill Centre, with a photo from the image library, a tracked link and a ready-to-paste brief for Claude in Chrome. Use when asked for a GBP post, a Google post, or by the weekly "Weekly Google post draft" routine.
---

# Weekly Google Business Profile post

Draft one Google Business Profile (GBP) post for the Maggie O'Neill Centre. You only draft it: you can't reach
GBP. The owner publishes it, usually by pasting the brief at the end into Claude in Chrome.

## Sources (read these, never invent)

- `src/data/facts.ts`: every fact, price, capacity and number. Use only what is there.
- `src/data/images.ts`: the photo library. Use the full `src` URL and the `alt` text.
- `docs/PROJECT_NOTES.md`: house rules and owner decisions.
- The page you link to, under `src/pages/`, so the post matches what the page says.

## Pick the theme

Work out the ISO week number of today's date (UK). Theme = week number mod 8, from this table:

| # | Theme | Link (path) | Photo options (images.ts numbers) |
|---|---|---|---|
| 0 | Training rooms for care, NHS and council teams | /services/training-rooms/ | 43, 44, 48, 105 |
| 1 | Virtual office from £20 a month | /services/virtual-office/ | 26, 29, 18 |
| 2 | Conference venue near Liverpool with free parking | /services/conference-venue/ | 114, 118, 181 |
| 3 | Meeting rooms, including the Pod for 4 | /services/meeting-rooms/ | 95, 88, 35 |
| 4 | Social value: every booking funds Maggie's Meals | /social-value/ | 110, 111, 180 |
| 5 | Oliver McGowan, fostering and adoption training | /services/training-rooms/oliver-mcgowan-training-venue/ | 105, 67, 92 |
| 6 | Call answering for small businesses | /services/virtual-office/call-answering/ | 137, 6 |
| 7 | What's included: hosts, tea and coffee, parking, tech | /whats-included/ | 54, 185, 62, 6 |

Pick the photo with index (week number ÷ 8, rounded down) mod (number of options), so the photo changes each time the
theme comes round.

## Write the post

- 80 to 150 words, under 1,500 characters. Plain, warm, specific, British English.
- First line is a hook with a real number (price, capacity, parking spaces, distance from the M57).
- Name is always "Maggie O'Neill Centre" (no "The"). Staff are "hosts".
- One clear call to action. Button: "Book" for rooms, "Learn more" for everything else, or "Call now".
- Link: `https://mobtc.co.uk<path>?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-week<NN>`
  (NN = ISO week number, two digits).
- No hashtags, no emojis, no exclamation marks in a row.

### Never

- No parties, Christmas parties, celebrations or private functions. We host business, training and community events only.
- None of these words: premium, world-class, state-of-the-art, solutions, hot desking, coworking, "AI receptionist"
  (say call answering), hearing loop, Genesis.
- No "best venue in Liverpool" or "number one" claims. Don't name other venues, operators or clients' staff.
- Never mention the operator licence application guide or the planning permission reference.
- Use only the main phone number in facts.ts (0151 482 0408).
- No prices, capacities or offers that aren't in facts.ts. If facts.ts and a page disagree, use facts.ts and say so.

## Output

Reply with exactly these sections, so the result reads well as an email:

1. **This week's post:** theme name and ISO week.
2. **Post text:** ready to paste.
3. **Button and link:** the button type and the full tracked URL.
4. **Photo:** the full image URL, and the alt text.
5. **Brief for Claude in Chrome:** a code block the owner can paste:

```
Please publish a Google Business Profile post for "Maggie O'Neill Centre".
Open the profile (business.google.com, or search "Maggie O'Neill Centre" on Google while signed in) > Add update.
Download this photo and upload it: <image URL>
Post text: <post text>
Button: <button> → <tracked URL>
Show me the preview before you publish.
```

Don't commit, push or open pull requests: this skill only drafts.
