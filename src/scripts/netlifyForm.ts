// Sends a coded form two ways at once, so a lead is never lost:
// 1. to our Netlify Function (/.netlify/functions/lead), which forwards it to GoHighLevel, and
// 2. to Netlify Forms (POST to "/" with form-name), for storage and email alerts. This only works when form
//    detection is switched on in Netlify, so it's best effort.
// It counts as sent if either succeeds. The page then shows its thank-you (no mailto).
export async function submitNetlifyForm(form: HTMLFormElement, extra: Record<string, string> = {}): Promise<boolean> {
  const data = new FormData(form);
  for (const [k, v] of Object.entries(extra)) data.set(k, v);
  const entries = Object.fromEntries([...data.entries()].map(([k, v]) => [k, String(v)]));
  const urlencoded = new URLSearchParams(entries).toString();
  const [toCrm, toNetlify] = await Promise.allSettled([
    fetch('/.netlify/functions/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entries) }),
    fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: urlencoded }),
  ]);
  const ok = [toCrm, toNetlify].some((r) => r.status === 'fulfilled' && r.value.ok);
  if (ok) {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    (w.dataLayer = w.dataLayer || []).push({ event: 'generate_lead', form_name: data.get('form-name') });
  }
  return ok;
}

// UK mobile, 07 followed by 9 digits, spaces allowed.
export const isUkMobile = (v: string) => /^07\d{9}$/.test(v.replace(/\s+/g, ''));
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

// Marks a field invalid with a short message under it (or clears it).
export function setFieldError(input: Element | null, message: string) {
  const field = input?.closest('.field') as HTMLElement | null;
  if (!field) return;
  const slot = field.querySelector('.field__error');
  if (message) field.setAttribute('data-invalid', '');
  else field.removeAttribute('data-invalid');
  if (slot) slot.textContent = message;
}
