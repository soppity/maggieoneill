// Downloads the operator licence images into public/ before each build, so the pages serve local copies
// (owner brief: don't hotlink vibe.filesafe.space). Files already in the repo are left alone.
// The image host is blocked from the dev container, so on a failed download this warns and carries on:
// the pages hide any image that doesn't load.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';

const dir = 'public/images/operators-licence';
const base = 'https://vibe.filesafe.space/1778856260752014717/';
const files = {
  'operators-licence-hero.png': 'assets/7923f1a0-9dd5-403d-b074-c206b20f0263.png',
  'operators-licence-guide-og.png': 'assets/634518a3-95de-4d6b-9051-7b2600fb78ab.png',
  'council-limited-company.png': 'attachments/bc356e0f-77be-48c8-960f-446f384c0db9.png',
  'council-alternative-address.png': 'attachments/da5f1b7b-f8e0-4425-ac02-2205ad63b0fa.png',
  'council-operator-details.png': 'attachments/70b4477d-e000-4ec8-a3ef-1c5ef93d067c.png',
  'council-planning-permission.png': 'attachments/07e53e4f-22bd-4b3b-b776-3005dcc2c04e.png',
  'council-operation-details.png': 'attachments/1b08b057-99ec-458c-8de7-edc2df4877d2.png',
  'council-document-uploads.png': 'assets/10b13b65-2047-405c-a405-ed57e41b0b02.png',
};

mkdirSync(dir, { recursive: true });
for (const [name, path] of Object.entries(files)) {
  const out = `${dir}/${name}`;
  if (existsSync(out)) continue;
  try {
    const res = await fetch(base + path, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    console.log(`[operator assets] saved ${name}`);
  } catch (err) {
    console.warn(`[operator assets] could not download ${name}: ${err.message}`);
  }
}
