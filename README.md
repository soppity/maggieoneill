# maggieoneill
Maggie O'Neill Centre website (mobtc.co.uk). Astro, static output, hosted on Netlify.

- `npm install`, then `npm run dev` to work locally and `npm run build` to build into `dist/`.
- The brand, strategy, page specs and SEO rules are in `docs/`. Start with `docs/README.md` and `docs/PROJECT_NOTES.md`.
- Every canonical fact (address, phone, prices, plans, stats) lives in `src/data/facts.ts`. Pages, schema and `/llms.txt` all read from it.
- Library photos are referenced by their number from `docs/assets/image-library.md` via `src/data/images.ts`.
