// Posts a Netlify form with fetch so the page can show its own thank-you state (no page reload, no mailto).
// Netlify detects the form from the static HTML at deploy time; the hidden form-name field routes the submission.
export async function submitNetlifyForm(form: HTMLFormElement, extra: Record<string, string> = {}): Promise<boolean> {
  const data = new FormData(form);
  for (const [k, v] of Object.entries(extra)) data.set(k, v);
  const body = new URLSearchParams(data as unknown as Record<string, string>).toString();
  try {
    const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
    if (!res.ok) return false;
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    (w.dataLayer = w.dataLayer || []).push({ event: 'generate_lead', form_name: data.get('form-name') });
    return true;
  } catch {
    return false;
  }
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
