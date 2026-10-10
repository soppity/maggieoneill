// Receives the site's coded forms (operator lease details, wrong-borough opt-in) and sends them to GoHighLevel's
// inbound webhook. The browser posts here directly, so leads reach the CRM even if Netlify form detection is off.
// (The same submission is also posted to Netlify Forms, best effort, for storage and email notifications.)
// Set GHL_WEBHOOK_URL in Netlify's environment variables to change the destination without a code change.
const WEBHOOK =
  process.env.GHL_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/3b0fd02e-19d4-4eb7-be05-8fd64e8166a0';

const DROP = new Set(['bot-field', 'form-name']);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'POST only' };
  // Netlify can hand the body over base64-encoded; accept JSON or a url-encoded form either way.
  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : event.body || '';
  let data;
  try {
    data = raw.trim().startsWith('{') ? JSON.parse(raw) : Object.fromEntries(new URLSearchParams(raw));
  } catch {
    console.error('Could not read the submission body');
    return { statusCode: 400, body: 'Bad body' };
  }
  // Honeypot filled in: a bot. Say OK so it doesn't retry, but send nothing on.
  if (data['bot-field']) return { statusCode: 200, body: 'ok' };
  const fields = Object.fromEntries(Object.entries(data).filter(([k]) => !DROP.has(k)));
  const body = {
    ...fields,
    form_name: data['form-name'] || data.form_name || 'website',
    submitted_at: new Date().toISOString(),
    source: 'mobtc.co.uk',
    page: event.headers?.referer || '',
  };
  try {
    const res = await fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(8000) });
    if (!res.ok) {
      const detail = (await res.text().catch(() => '')).slice(0, 300);
      console.error(`GoHighLevel webhook returned ${res.status}: ${detail}`);
      return { statusCode: 502, body: `CRM ${res.status}` };
    }
    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    console.error('Forwarding to GoHighLevel failed:', err);
    return { statusCode: 502, body: 'CRM unreachable' };
  }
};
