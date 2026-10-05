# Monthly Google reviews update

A routine runs this on the 1st of each month. A person can run it by hand too.

## Where new reviews come from

Google Business Profile emails every new review to patrick@mobtc.co.uk from `businessprofile-noreply@google.com`. There are two kinds:

- "<Name> left a review for Maggie O'Neill Centre" (one review)
- "Maggie O'Neill Centre, you got N new reviews" (a batch)

Each email gives the reviewer's name, the review text (long reviews are cut off with "..."), or "This user only left a rating".

## Steps

1. Search Gmail: `from:businessprofile-noreply@google.com newer_than:35d`. Read every matching email in full.
2. For each review, check whether it's already in `src/data/google-reviews.tsv`. A review is already there if the name and the start of the text match. Skip it if so.
3. Append each new **written** review as a row: `name<TAB>text`. Copy the text exactly as it appears in the email, including any "..." at the end. Join line breaks with a space. Never add dates.
4. Add every new review, rating-only ones included, to `reviews.count` in `src/data/facts.ts`. Set `reviews.asOf` to today's date, written like "1 November 2026".
5. Theme counts update themselves at build time from the TSV. Nothing else needs changing for them.
6. Read the new written reviews. If one is a clearly better quote than an existing one for a theme or booking type in `src/data/reviewQuotes.ts`, add it to `quotes` and use it. Quotes must be word for word and cut only at the end of a sentence. Never use reviews about:
   - free hot desking or co-working (no longer offered)
   - the chiropodist or the nursery (other businesses)
   - Christian music
   - the AI workshops
   - anything lukewarm or negative
7. Run `npm run build` and `npx astro check`. Both must pass with 0 errors.
8. Commit to a new branch named `reviews/<yyyy-mm>`. Open a pull request to `main` titled "Monthly reviews update: <Month yyyy>". In the body, list:
   - the new reviews added
   - the new total
   - any quotes changed
   - any reviews skipped, and why

   Don't merge. The owner reviews and merges it.
9. If there are no new reviews, don't open a pull request. Just report that there were none.

## Negative reviews

If a new review is below 4 stars, or reads as a complaint, don't add it to the site. Say so in the pull request, or in the report if there's no PR, so the owner can reply to it on Google.
