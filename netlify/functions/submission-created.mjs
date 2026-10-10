// Sends every Netlify Forms submission (the operator lease details form and the wrong-borough opt-in) on to
// GoHighLevel, through its inbound webhook trigger (owner, Oct 2026). Netlify runs this automatically after each
// submission that passes its spam filter. The GoHighLevel forms (enquiry, virtual office, waitlist) go to GHL directly.
// Set GHL_WEBHOOK_URL in Netlify's environment variables to change the destination without a code change.
const WEBHOOK =
  process.env.GHL_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/4cpmA1xPfhyLI1A2OPDr/webhook-trigger/3b0fd02e-19d4-4eb7-be05-8fd64e8166a0';

// Netlify adds these alongside the form's own fields; they aren't useful in the CRM (and ip is personal data).
const DROP = new Set(['bot-field', 'form-name', 'ip', 'user_agent']);

export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || '{}');
    if (!payload) return { statusCode: 400, body: 'No payload' };
    const fields = Object.fromEntries(Object.entries(payload.data || {}).filter(([k]) => !DROP.has(k)));
    const body = {
      ...fields,
      form_name: payload.form_name,
      submitted_at: payload.created_at,
      source: 'mobtc.co.uk',
      page: payload.data?.referrer || '',
    };
    const res = await fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!res.ok) console.error(`GoHighLevel webhook returned ${res.status}`);
    return { statusCode: 200, body: 'ok' };
  } catch (err) {
    console.error('Forwarding to GoHighLevel failed:', err);
    // Still 200: the submission is safely stored in Netlify Forms either way.
    return { statusCode: 200, body: 'stored, not forwarded' };
  }
};
