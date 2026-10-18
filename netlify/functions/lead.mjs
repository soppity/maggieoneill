// Receives the site's coded forms (operator lease details, wrong-borough opt-in) and sends them to GoHighLevel's
// inbound webhook. The browser posts here directly, so leads reach the CRM even if Netlify form detection is off.
// (The same submission is also posted to Netlify Forms, best effort, for storage and email notifications.)
// Set GHL_WEBHOOK_URL in Netlify's environment variables to change the destination without a code change.
const WEBHOOK =
  process.env.GHL_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/db80a780-d898-48a6-9a47-4dc139945d36';

// Forms with their own GHL workflow get their own inbound webhook (keyed by form-name); everything else uses WEBHOOK.
const ROUTES = {
  // Owner, Oct 2026: taxi and CQC lease details each have their own workflow (different services, kept apart).
  'operator-lease-details':
    process.env.GHL_WEBHOOK_OPERATOR_LEASE ||
    'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/cfd12825-666c-4987-a163-b61541fde075',
  'cqc-lease-details':
    process.env.GHL_WEBHOOK_CQC_LEASE ||
    'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/28f03e3d-d61e-4351-84fb-c1557a5ca420',
  // Owner, Oct 2026: accountant partner sign-ups (firm plan or referral). Set GHL_WEBHOOK_ACCOUNTANT_FIRM in Netlify
  // (or replace the fallback) once the GHL workflow exists; until then they go to the general webhook.
  'accountant-firm': process.env.GHL_WEBHOOK_ACCOUNTANT_FIRM || WEBHOOK,
  'good-meeting-guide':
    process.env.GHL_WEBHOOK_GOOD_MEETING_GUIDE ||
    'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/380db4cf-9761-4a66-afee-9ab9acc33619',
};

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
    const res = await fetch(ROUTES[body.form_name] || WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: AbortSignal.timeout(8000) });
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
