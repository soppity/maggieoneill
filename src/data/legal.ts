// Privacy policy and terms (owner, Oct 2026). Two parts each:
// - General: drafted for the owner from the site's confirmed facts ("write them", Oct 2026). Owner to review, ideally
//   with a solicitor, before launch.
// - Knowsley Operator Licence service: word for word from the owner, apart from the charity number (facts.ts) and the
//   phone number (the main number only).
// Each block is one paragraph or a list.
import { address, booking, contact, hours, site, virtualOffice } from './facts';

export type LegalBlock = string | string[];
export type LegalSection = { title: string; blocks: LegalBlock[] };

const who = `The Maggie O'Neill Centre (registered charity ${site.charityNumber})`;
const where = address.oneLine;

export const legalUpdated = 'October 2026';

const vo = virtualOffice;
const ca = virtualOffice.callAnswering;

export const privacyGeneral: LegalSection[] = [
  {
    title: 'Who we are',
    blocks: [`${who} is the data controller for personal information collected through this website and when you use our rooms, virtual office, call answering and private office services. Our address is ${where}. Contact us at ${contact.email} or ${contact.phone}.`],
  },
  {
    title: 'What information we collect',
    blocks: [
      [
        'Enquiries: your name, email address, phone number, organisation and your message, when you fill in a form on this website, call, email, text or WhatsApp us',
        'Room bookings: the booker\'s contact details, the organisation, dates, numbers and any access, dietary or other needs you tell us about',
        'Virtual office clients: your name, contact details, company details and the identity and address details we need for our anti-money laundering (AML) checks. On plans that include it, we also open and scan your post so you can read it in your mailbox app',
        `Call answering clients: recordings, transcripts and summaries of the calls our AI voice agent answers for you, and the details your callers leave`,
        'Private office licensees and waitlist: your contact details and the details of your business',
        'Website use: pages visited and how you found us, through Google Analytics, only if you accept analytics cookies',
      ],
    ],
  },
  {
    title: 'Why we collect it',
    blocks: [[
      'To answer your enquiry and arrange a visit or booking',
      'To provide the services you sign up for: room hire, virtual office, call answering and private offices',
      'To invoice you and take payment',
      'To carry out the anti-money laundering checks the law requires for registered office services',
      'To send you messages about your booking or service, such as confirmations, post notifications and call summaries',
      'To understand how people use this website and improve it, if you accept analytics cookies',
    ]],
  },
  {
    title: 'Legal basis for processing',
    blocks: [[
      'Contract: to provide a service you have asked for or signed up to',
      'Legal obligation: AML checks and keeping financial records',
      'Legitimate interests: answering enquiries, running and improving our services, keeping our building and records secure',
      'Consent: analytics cookies, and any optional updates you sign up for. You can withdraw consent at any time',
    ]],
  },
  {
    title: 'Who we share it with',
    blocks: [
      [
        'GoHighLevel (LeadConnector): our CRM, which runs our website forms, call answering and client messages',
        'Netlify: hosts this website and stores submissions from some of its forms',
        `OfficeRnD: our room booking system (${new URL(booking.url).hostname})`,
        'PilotoMail: the mailbox app virtual office clients use to read their scanned post',
        'Google: Google Analytics (only with your consent) and Google Maps (only if you press "Show the map")',
        'Our payment providers: to take payments and set up direct debits',
        'Our catering partner, if you ask us to put you in touch for an event',
        'Legal or regulatory authorities: where the law requires it',
      ],
      'Some of these providers store data outside the UK. Where they do, we rely on the safeguards UK data protection law allows. We do not sell your data.',
    ],
  },
  {
    title: 'How long we keep it',
    blocks: ['We keep enquiry details for as long as we need them to deal with your enquiry and any booking that follows. We keep client records for the length of your service and for 6 years after it ends, in line with standard commercial and charity record-keeping requirements. AML records are kept for 5 years after the end of the business relationship, as the Money Laundering Regulations 2017 require.'],
  },
  {
    title: 'Your rights',
    blocks: [
      'Under UK GDPR, you have the right to:',
      [
        'Access the personal data we hold about you',
        'Correct inaccurate data',
        'Request erasure (subject to our legal retention obligations)',
        'Object to processing based on legitimate interests',
        'Receive your data in a portable, machine-readable format',
        'Withdraw consent at any time where consent is the legal basis',
      ],
      `Email ${contact.email} to exercise any of these rights. We respond within 30 days. You can also complain to the Information Commissioner's Office (ico.org.uk).`,
    ],
  },
  { title: 'Cookies', blocks: ['We only set analytics cookies if you accept them. Our cookie page lists everything this website uses and lets you change your choice at any time.'] },
  { title: 'Security', blocks: ['We use appropriate technical and organisational measures to protect your data against unauthorised access, loss or disclosure. This website is served over HTTPS, and post and client records are handled in-house by our team.'] },
  { title: 'Changes to this policy', blocks: ['We may update this policy from time to time. The date at the top shows the latest version.'] },
];

export const termsGeneral: LegalSection[] = [
  { title: 'About us', blocks: [`${who} runs a training, meeting and event venue, virtual offices, call answering and private offices at ${where}. These terms apply to this website and, alongside any agreement you sign with us, to our services.`] },
  {
    title: 'Using this website',
    blocks: ['We keep the information on this website accurate and up to date, but prices, rooms and services can change, and the price we confirm to you in writing is the one that applies. Links to other websites are for your convenience; we are not responsible for their content.'],
  },
  {
    title: 'Room hire',
    blocks: ['Room, meeting, training and event bookings are covered by our booking and cancellation terms, which explain changes, cancellations, deposits and payment.'],
  },
  {
    title: 'Virtual office',
    blocks: [
      [
        `Plans are paid monthly. ${vo.terms}`,
        'Your address goes live once our anti-money laundering (AML) checks are complete. We may refuse or end a service where the checks are not satisfied.',
        'You must use the address lawfully and keep your details with us up to date.',
        `Post is handled in-house by our team and kept securely stored. You can collect it from reception, ${hours.summary}, and on plans that include it we open and scan it so you can read it in your mailbox app.`,
        "Director's Cover adds a director's service address to either plan.",
      ],
    ],
  },
  {
    title: 'Call answering',
    blocks: [`${ca.summary} You are responsible for telling your callers how their information is used, where the law requires it.`],
  },
  { title: 'Private offices', blocks: ['Private offices are let under a separate agreement, which sets out the term, price and conditions.'] },
  {
    title: 'Limitation of liability',
    blocks: ["Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else the law doesn't allow us to limit. Otherwise, we are not liable for indirect losses, loss of profit or loss of business arising from your use of this website or our services, and our total liability is limited to the fees you paid us for the service concerned in the 12 months before the claim."],
  },
  { title: 'Governing law', blocks: ['These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.'] },
  { title: 'Changes to these terms', blocks: ['We may update these terms from time to time. The date at the top shows the latest version.'] },
];

export const privacyOperator: LegalSection[] = [
  { title: 'Who we are', blocks: [`${who} is the data controller for the personal information collected through this website and the Knowsley Operator Licence service. Our address is ${where}. Contact us at ${contact.email} or ${contact.phone}.`] },
  {
    title: 'What information we collect',
    blocks: [
      'When you use our Knowsley Operator Licence service, we collect:',
      [
        'Identity information: full legal name, date of birth, proof of ID details',
        'Contact information: email address, mobile number',
        'Business information: trading name, Companies House number, business structure',
        'Address information: personal home address (for AML checks and lease execution)',
        'Payment information: direct debit mandate details handled by our regulated payment partner',
        'Application progress: steps completed in the form, timestamps, session information',
      ],
    ],
  },
  {
    title: 'Why we collect it',
    blocks: [[
      'To execute your satellite office lease and provide the documents needed for your Knowsley licence application',
      'To carry out mandatory anti-money laundering (AML) checks, a legal requirement for satellite office arrangements',
      'To set up and manage your monthly direct debit via our payment partner',
      'To send operational communications: document delivery, payment receipts, renewal reminders, support messages',
      'To save your form progress so you can return to it later',
      'To comply with our legal obligations as a charity and commercial operator',
    ]],
  },
  {
    title: 'Legal basis for processing',
    blocks: [[
      'Contract: necessary to perform the lease agreement with you',
      'Legal obligation: AML checks are required by law',
      'Legitimate interests: saving form progress, operational follow-up, improving our service',
      'Consent: where you have specifically opted in (e.g. the optional email capture on the exit page)',
    ]],
  },
  {
    title: 'Who we share it with',
    blocks: [
      [
        'Our payment partner: to set up and administer your direct debit mandate',
        'Our CRM and workflow platform: to store your contact record and track application progress',
        'Knowsley Council: indirectly, via documents we provide you (signed lease, planning permission document) that you submit yourself',
        'Legal or regulatory authorities: where required by law',
      ],
      'We do not sell your data to third parties.',
    ],
  },
  {
    title: 'How long we keep it',
    blocks: ['We retain your personal data for the duration of your lease and for 6 years after it ends, in line with standard commercial and charity record-keeping requirements. AML records are retained for 5 years after the end of the business relationship, as required by the Money Laundering Regulations 2017. Incomplete applications are deleted after 12 months.'],
  },
  {
    title: 'Your rights',
    blocks: [
      'Under UK GDPR, you have the right to:',
      [
        'Access the personal data we hold about you',
        'Correct inaccurate data',
        'Request erasure (subject to our legal retention obligations)',
        'Object to processing based on legitimate interests',
        'Receive your data in a portable, machine-readable format',
        'Withdraw consent at any time where consent is the legal basis',
      ],
      `Email ${contact.email} to exercise any of these rights. We respond within 30 days. You can also complain to the Information Commissioner's Office.`,
    ],
  },
  { title: 'Cookies and analytics', blocks: ['We use essential cookies to save your form progress and session state. We use non-essential analytics cookies to understand how operators use the site, and we will ask for your consent before setting these.'] },
  { title: 'Security', blocks: ['We use appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. All data is transmitted over HTTPS. Sensitive fields are not displayed on publicly indexable pages.'] },
  { title: 'Changes to this policy', blocks: ['We may update this policy from time to time. The date at the top reflects the most recent version. Continued use of our service after an update constitutes acceptance of the revised policy.'] },
];

export const termsOperator: LegalSection[] = [
  { title: 'About us', blocks: [`${who} operates a workspace facility at ${where}. These terms govern the Knowsley Private Hire Operator Satellite Office Lease service provided through this website. By submitting your lease details, setting up a direct debit, and signing the lease agreement, you agree to these terms in full.`] },
  {
    title: 'The service',
    blocks: [
      `We provide a 12-month satellite office lease at ${where}. The lease grants you the right to use this address as your council-registered base of operation for the purposes of a Knowsley Private Hire Operator's Licence application. The service includes:`,
      [
        'A signed satellite office lease agreement specifying your individual suite number',
        'The Knowsley Council planning permission certificate PDF (Class E)',
        'Support in completing your council application at no extra charge',
      ],
    ],
  },
  {
    title: 'Eligibility',
    blocks: [
      'To use this service, you must:',
      [
        "Be applying for a Private Hire Operator's Licence from Knowsley Metropolitan Borough Council",
        'Be aged 18 or over',
        'Be either a sole trader or a director of a limited company',
        'Pass our mandatory anti-money laundering (AML) identity checks',
        "Not have been refused a Knowsley operator's licence in circumstances that would make re-application inappropriate",
      ],
      'This service is exclusively for Knowsley applications. Our planning permission is specific to Knowsley Council and cannot be used for licence applications to any other council authority.',
    ],
  },
  {
    title: 'Pricing and payment',
    blocks: [
      "The monthly lease fee is tiered by the number of vehicles you declare on your operator's licence:",
      ['1 vehicle: £100/month', '2–10 vehicles: £150/month', '11–50 vehicles: £200/month', '51+ vehicles: £250/month'],
      'Payment is by direct debit, collected on the 1st of each month. The lease term is 12 months from the date the lease is signed. There are no setup fees or hidden charges. The monthly fee is fixed for the duration of the lease term. We do not offer discounts or negotiate the stated price.',
    ],
  },
  {
    title: 'Exit clause',
    blocks: [
      'The lease agreement includes an exit clause. You are released from the lease without further payment if:',
      ["Knowsley Council formally refuses your Private Hire Operator's Licence application, or", 'Knowsley Council revokes an already-issued licence.'],
      `To activate the exit clause, you must email a copy of the council's refusal or revocation letter to ${contact.email}. Upon receipt and verification, your direct debit will be cancelled and the lease terminated. You are not liable for any months after the date of the refusal or revocation letter.`,
      'The exit clause does not apply to circumstances where you voluntarily withdraw your application, fail to submit your application, or your application is paused or queried (as opposed to formally refused).',
    ],
  },
  { title: 'Anti-money laundering checks', blocks: ['We are required by law to carry out anti-money laundering identity verification checks on all operators before executing a lease. This includes verifying your full legal name, date of birth, and personal address. Providing false information for the purposes of AML checks is a criminal offence. We reserve the right to refuse or terminate a lease where AML checks are not satisfied.'] },
  {
    title: 'Your obligations',
    blocks: [[
      'Maintain your direct debit mandate for the full lease term (subject to the exit clause)',
      "Use the address solely for the purpose of a Knowsley Private Hire Operator's Licence, not as a trading address for any other purpose without prior written agreement",
      'Notify us promptly of any change in your vehicle count or business structure that may affect your pricing tier',
      'Not sublease, transfer, or share your leased office address with another operator',
      'Comply with all applicable laws in the operation of your private hire business',
    ]],
  },
  {
    title: 'Our obligations',
    blocks: [[
      'Provide you with a signed lease agreement and planning permission certificate within a reasonable time of lease execution',
      `Maintain the planning permission at ${address.street} for the duration of your lease`,
      'Provide reasonable support in completing your council application at no extra charge',
      'Process exit clause activations promptly upon receipt of a valid refusal or revocation letter',
    ]],
  },
  { title: 'Limitation of liability', blocks: ["We provide the address, lease, and planning permission documentation that Knowsley Council requires. We do not guarantee that the council will grant your licence; that decision rests entirely with Knowsley Council based on your application and their assessment. Our liability to you in connection with this service is limited to the total monthly fees paid to us in the 12 months prior to any claim. We are not liable for indirect losses, loss of earnings, loss of business opportunity, or any loss arising from a delay or refusal of your operator's licence by Knowsley Council."] },
  { title: 'Termination', blocks: ["Either party may terminate the lease with 30 days' written notice after the initial 12-month term. During the initial 12-month term, the lease may only be terminated early via the exit clause (clause 5 above) or by mutual written agreement. We may terminate the lease immediately and without notice if: you provide false information, fail AML checks, use the address in a way that breaches these terms, or your council licence is revoked due to conduct rather than a disputed application decision."] },
  { title: 'Governing law', blocks: ['These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.'] },
  { title: 'Changes to these terms', blocks: ['We may update these terms from time to time. We will notify active lessees of material changes by email at least 30 days before they take effect. Continued use of the service after that period constitutes acceptance of the revised terms.'] },
];
