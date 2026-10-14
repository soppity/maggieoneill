// The one source of truth for every canonical fact on the site (SEO spec 5.2).
// Pages, JSON-LD and llms.txt all read from here. Change a fact here, never in a page.
// Source: docs/SEO-AND-AI-SEARCH.md section 1.1, docs/PROJECT_NOTES.md,
// docs/content/contact-forms-booking.md. Review every quarter (SEO spec 6.3).

export const site = {
  url: 'https://mobtc.co.uk',
  name: "Maggie O'Neill Centre",
  shortName: "Maggie's",
  // Schema alternateName only. Never write these in visible copy.
  alternateNames: [
    "Maggie's",
    "Maggie O'Neill Centre Huyton",
    'Maggie ONeill Centre',
    'Maggie O Neill Centre',
    "Maggie O'Neill Business and Training Centre",
    'MOBTC',
  ],
  whatWeAre: 'A charity-run training, meeting and event venue and virtual office provider',
  category: 'a hosted venue',
  brandLine: "Looked after at Maggie's.",
  heroLine: 'Your hosts are on site, the room is ready and the kettle is on.',
  closer: "Every booking funds Maggie's Meals.",
  socialDescription:
    "Maggie O'Neill Centre is a charity-run training, meeting and event venue in Huyton, near Liverpool, with free parking and hosts on site. Virtual offices from £20 a month.",
  charityNumber: '1215599',
  charityRegister: 'registered in England and Wales',
};

export const address = {
  street: '433 Liverpool Road',
  locality: 'Huyton',
  city: 'Liverpool',
  region: 'Merseyside',
  postcode: 'L36 8HT',
  country: 'GB',
  countryName: 'United Kingdom',
  area: 'Huyton, Knowsley, Merseyside (near Liverpool)',
  oneLine: '433 Liverpool Road, Huyton, Liverpool, L36 8HT',
  // The Google Business Profile listing, shared from Google Maps by the owner.
  mapsUrl: 'https://maps.app.goo.gl/sj3hrdSBmnbBMt3g7',
  // From the Google Business Profile pin, supplied by the owner, Oct 2026.
  geo: { lat: 53.4235039, lng: -2.8346538 } as null | { lat: number; lng: number },
};

export const contact = {
  phone: '0151 482 0408',
  phoneHref: 'tel:+441514820408',
  phoneIntl: '+441514820408',
  text: '07426 935661',
  textIntl: '+447426935661',
  smsHref: 'sms:+447426935661',
  whatsappHref: 'https://wa.me/447426935661',
  email: 'info@mobtc.co.uk' as null | string,
};

export const hours = {
  summary: 'Monday to Friday, 8:30am to 5pm',
  extra: 'Evening and weekend room hire on request.',
  schema: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:00' },
};

export const booking = {
  url: 'https://maggieoneill.officernd.com/public/calendar',
};

// Lead magnet (owner, Oct 2026): the Good Meeting Guide. The form on its page posts to the GHL webhook through
// netlify/functions/lead.mjs with form_name "good-meeting-guide"; the thank-you page gives the download.
export const goodMeetingGuide = {
  name: 'The Good Meeting Guide',
  path: '/good-meeting-guide/',
  thankYou: '/thank-you/good-meeting-guide/',
  formName: 'good-meeting-guide',
  pdf: 'https://assets.cdn.filesafe.space/4cpmA1xPfhyLI1A2OPDr/media/6abbbae84c3f56b726986e07.pdf',
  // localStorage key so the home page pop-up only shows once per browser.
  popupSeenKey: 'moc-gmg-popup-seen',
};

export const forms = {
  // thankYou: set each GoHighLevel form's "On submit → Redirect to URL" to https://mobtc.co.uk + this path (GHL settings).
  general: { id: 'PTEyaGYXB96ztNMrZVGB', name: 'Website Enquiry', height: 789, thankYou: '/thank-you/' },
  virtualOffice: { id: 'RWoOkRV2NaAKLVe4JSmF', name: 'Virtual Office Page - Form', height: 1006, thankYou: '/thank-you/virtual-office/' },
  // Owner, Oct 2026: the private offices waitlist (on /services/private-offices/ only).
  officeWaitlist: { id: 'oEBrrucinDJHDzwwGmdO', name: 'Office Waitlist', height: 960, thankYou: '/thank-you/office-waitlist/' },
};

export const reviews = {
  count: 230,
  asOf: '28 September 2026',
  source: 'Google',
  // Direct "write a review" link from the Google Business Profile (owner, Oct 2026).
  writeUrl: 'https://g.page/r/CZ08-1Mg8NchEAE/review',
};

// The church on the property (owner, Oct 2026).
export const church = {
  times: '11am on Sundays and 7pm on Thursdays',
  email: 'hello@theacol.uk',
};

export const maggiesMeals = {
  schedule: 'Every Friday, 9am to 10am',
};

export const lastYear = {
  roomsHired: '900+',
  businessesServed: '150+',
  mealsAccessed: '750+',
  // Owner, Oct 2026: free room hours given to hyper-local community groups in the last year.
  // Always say "hyper-local community groups", never charities: many charities pay for space here.
  freeSpaceHours: '550+',
};

// Charity track record (owner, Oct 2026).
export const trackRecord = {
  yearsServing: '25',
  openedBy: 'Andy Burnham',
  openedYear: 2015,
  covidParcels: '2,000',
};

// All Nations, the charity's culture celebration (owner, Oct 2026).
export const allNations = {
  name: 'All Nations',
  nationalities: '20 to 30',
  when: 'once a year, in the summer',
  images: [170, 171, 172, 173, 174],
};

export const parking = {
  summary: 'Free car park on site, 30 seconds from the M57, on a main bus route',
  spaces: 50,
  motorway: '30 seconds from the M57',
  // Owner, Oct 2026: an overflow car park is used if the main one fills up (events).
  overflow: 'an overflow car park if it fills up',
};

export const accessibility = {
  // Owner, Oct 2026: three accessible bays. No lift, so first-floor rooms are stairs only.
  // Ground floor: Auditorium, Community Room, Forum, Grove and Pod (Room.floor). First floor: Summit, Foundry, Hub.
  accessibleBays: 3,
  noLift: "We don't have a lift to the first-floor rooms, but the Auditorium, Community Room, Forum, Grove and Pod are all on the ground floor.",
  // For key-fact rows on room and sector pages.
  accessLine: 'Step-free on the ground floor, with accessible parking and an accessible toilet. No lift to the first floor.',
  // Word for word, from docs/content/contact-forms-booking.md.
  stepFree:
    'Step-free access. Accessible parking spaces right outside the Auditorium. The Auditorium side door can be opened to shorten the route.',
  toilet:
    'Accessible toilet on the same floor as the Auditorium, a short walk away next to the kitchen. It has grab rails, a fold-down rail and an emergency pull cord.',
  // General wording for pages other than Oliver McGowan (owner, Oct 2026). The Auditorium detail above is for OM pages.
  groundFloor: 'Fully accessible on the ground floor, with step-free access and accessible parking.',
  toiletGeneral: 'An accessible toilet with grab rails, a fold-down rail and an emergency pull cord.',
  quietRoom: 'Quiet room off the Auditorium foyer, with acoustic insulation and dim lights, signed on the door.',
  lighting: 'Adjustable lighting in the Auditorium.',
};
// One answer for "Is the Maggie O'Neill Centre accessible?" wherever it appears, so the caveat is never missed.
export const accessibilityFaq = `Yes, on the ground floor. There's step-free access, ${accessibility.accessibleBays} accessible parking bays and ${accessibility.toiletGeneral.charAt(0).toLowerCase()}${accessibility.toiletGeneral.slice(1, -1)}. ${accessibility.noLift} Tell us about any accessibility needs when you book and we'll put you in a ground-floor room.`;


// The team, from the owner, Oct 2026. Short lines for the homepage, bios for the About page.
// Patrick is often on site but isn't always the main point of contact: Tania runs the day to day.
// Patrick comes first: his story sets the stage for the rest of the team (owner, Oct 2026).
export interface TeamMember {
  name: string;
  role: string;
  image: number;
  line: string;
  bio: string[];
}
export const hosts: TeamMember[] = [
  {
    name: 'Patrick',
    role: 'Director',
    image: 179,
    line: 'Patrick has run the centre for over 9 years, and is on site most days.',
    bio: [
      'Patrick has run the Maggie O’Neill Centre for over 9 years. When he started, the centre couldn’t afford to pay even minimum wage, so he lived in the building.',
      'What began as a projector on a table is now 10 private offices, 7 meeting and training rooms, an Auditorium and over 40 virtual office clients.',
    ],
  },
  {
    name: 'Tania',
    role: 'Community Manager',
    image: 137,
    line: 'Tania runs the day to day: your booking, your event, and making sure you’re looked after.',
    bio: [
      'As Community Manager, Tania runs most of the day to day at the Maggie O’Neill Centre. She coordinates bookings and events, and makes sure everyone is looked after while they’re here.',
      'She lives in the middle of nowhere in Wales, and loves early mornings looking out over the Welsh hills to the sound of bleating sheep.',
    ],
  },
];
export const volunteers: TeamMember[] = [
  {
    name: 'Liam',
    role: 'Volunteer',
    image: 177,
    line: 'Liam helps run Maggie’s Meals and looks after the tech at bigger events.',
    bio: [
      'Professionally, Liam is a web developer. He works flexibly, which means he can volunteer around the Centre and the church.',
      'Liam helps to run Maggie’s Meals and provides AV and tech support for our bigger events. He’s also an all-round biscuit fiend.',
    ],
  },
  {
    name: 'Bill',
    role: 'Volunteer',
    image: 178,
    line: 'Bill helps run Maggie’s Meals and lends a hand in the car park on busy days.',
    bio: ['Bill helps to run Maggie’s Meals and lends a hand in the car park on busier days. He always has a dad joke ready.'],
  },
];

// Rooms in the order customers see them. Genesis is never listed.
// Capacities: null means not yet confirmed for the site. Don't fill these in by guesswork.
// Rates confirmed by the owner, Oct 2026. The Auditorium is from £100 an hour, quoted per event.
// We don't publish a capacity grid. Bookers tell us their headcount and what the day involves,
// and the host recommends the room and layout (owner decision, Oct 2026). Only headline capacities live here.
export type Layout = 'uShape' | 'boardroom' | 'classroom' | 'cabaret' | 'banquet' | 'theatre';
export interface Room {
  slug: string;
  name: string;
  kind: string;
  goodFor: string;
  capacity: Partial<Record<Layout, number>>;
  // hourFrom: a starting hourly rate, quoted per event (the Auditorium).
  prices?: { hour?: number; day?: number; hourFrom?: number };
  image: number;
  floor: 'ground' | 'first';
}
export const rooms: Room[] = [
  {
    slug: 'auditorium',
    name: 'Auditorium',
    kind: 'Main hall',
    goodFor: 'Conferences, Oliver McGowan Tier 2 days and large training sessions',
    capacity: { cabaret: 60, theatre: 100 }, // theatre 100 confirmed by the owner, Oct 2026
    prices: { hourFrom: 100 },
    image: 117,
    floor: 'ground',
  },
  { slug: 'summit', name: 'Summit', kind: 'Training and meeting room', goodFor: 'Training days and meetings', capacity: {}, prices: { hour: 30, day: 180 }, image: 44, floor: 'first' },
  { slug: 'forum', name: 'Forum', kind: 'Training and meeting room', goodFor: 'Training, meetings and open networking', capacity: {}, prices: { hour: 30, day: 180 }, image: 35, floor: 'ground' },
  { slug: 'grove', name: 'Grove', kind: 'Event and meeting room', goodFor: 'Events, networking and training', capacity: {}, prices: { hour: 30, day: 180 }, image: 62, floor: 'ground' },
  { slug: 'foundry', name: 'Foundry', kind: 'Training and meeting room', goodFor: 'Classroom training and team meetings', capacity: {}, prices: { hour: 25, day: 165 }, image: 92, floor: 'first' },
  { slug: 'hub', name: 'Hub', kind: 'Meeting room', goodFor: 'Small meetings and interviews', capacity: {}, prices: { hour: 25, day: 165 }, image: 88, floor: 'first' },
  { slug: 'community-room', name: 'Community Room', kind: 'Training room', goodFor: 'Training sessions and group work', capacity: {}, prices: { hour: 30, day: 180 }, image: 105, floor: 'ground' },
  {
    slug: 'pod',
    name: 'Pod',
    kind: 'Small meeting room',
    goodFor: 'Meetings and interviews for up to 4',
    capacity: { boardroom: 4 },
    prices: { hour: 20, day: 120 },
    image: 95,
    floor: 'ground',
  },
];

// The Hosted Day: what every room booking includes (Brand Strategy, The Hosted Day).
export const layoutTriage =
  "Tell us how many people are coming and what the day involves, and we'll recommend the room and layout that works, then set it up before you arrive.";

export const layouts: { key: Layout; name: string; bestFor: string }[] = [
  { key: 'uShape', name: 'U-shape', bestFor: 'Discussion-led training, where everyone can see each other and the trainer can step inside the U.' },
  { key: 'boardroom', name: 'Boardroom', bestFor: 'Meetings, interviews and small groups working around one table.' },
  { key: 'classroom', name: 'Classroom', bestFor: 'Courses with note-taking or laptops, with everyone facing the front.' },
  { key: 'cabaret', name: 'Cabaret', bestFor: 'Group work at round tables, with every seat facing the screen.' },
  { key: 'banquet', name: 'Banquet', bestFor: 'Lunches, celebrations and networking around full round tables.' },
  { key: 'theatre', name: 'Theatre', bestFor: 'Talks and briefings, with rows of chairs facing the front and no tables.' },
];

export const hostedDay = [
  'Room set to your layout before you arrive',
  'On-site hosts, all day',
  'Tea and coffee in the room, all day',
  'Screen with Mac and PC wireless casting and HDMI cables',
  '1Gb fibre WiFi throughout the building',
  'Flipchart and pens',
  'Free parking for every delegate',
  'A mid-morning check-in with your trainer',
  'Kitchen and fridge access',
  'Room notes kept for next time',
];

// The Hosted Day for events and Auditorium bookings (owner, Oct 2026). Only on the events page and when talking
// about events or the Auditorium; every other page uses hostedDay above.
export const hostedEvent = [
  'Your event talked through and prepped for the day',
  'Hosts checking on your event all day, so you have everything you need',
  'Tea and coffee included, in or near every space you book',
  'Flipcharts if you need them',
  'AV in the Auditorium set up and run by a technician (£)',
  'Flatscreens with wireless casting in every breakout and networking space',
  '1Gb fibre WiFi throughout the building',
  'Free parking, with an overflow car park if it fills up',
  'A fridge for storing food',
];

// Private offices (owner, Oct 2026). 10 offices, all let: enquiries join the waitlist.
export const privateOffices = {
  from: 450,
  lease: '1-year lease',
  total: 10,
  vacancies: 0,
  sizes: [
    { name: 'Single office', people: '1 to 2 people' },
    { name: 'Double office', people: '4 to 6 people' },
  ],
  freeMeetingHours: 4,
  meetingDiscount: 20,
  lateStay: 'Thursdays until 8:30pm',
};

// Virtual office. Source: docs/content/virtual-office-source.md and PROJECT_NOTES.md.
// Pricing is shown as a ladder (owner, Oct 2026): lead with "from £20", then offer Director's Cover as a £10 add-on,
// so the home address comes off both places it appears on Companies House. Two plans plus one add-on, never four plans.
// Moving from Address Only + Director's Cover (£30) to Virtual Office keeps the cover, so it becomes £50.
export type PlanFeature = 'registeredOffice' | 'businessAddress' | 'collectPost' | 'postScanned' | 'roomHours' | 'coffee';

export const planFeatures: { key: PlanFeature; label: string }[] = [
  { key: 'registeredOffice', label: 'Registered office address for Companies House' },
  { key: 'businessAddress', label: 'Use it as your business address everywhere' },
  { key: 'collectPost', label: 'Collect your post from reception' },
  { key: 'postScanned', label: 'Post opened and scanned, so you can read it anywhere' },
  { key: 'roomHours', label: '2 free meeting room hours a month, worth £40' },
  { key: 'coffee', label: 'Free coffee when you call in' },
];

export interface VirtualOfficePlan {
  name: string;
  price: number;
  summary: string;
  features: PlanFeature[];
}

const addressOnly: PlanFeature[] = ['registeredOffice', 'businessAddress', 'collectPost'];

export const virtualOffice = {
  from: 20,
  plans: [
    {
      name: 'Address Only',
      price: 20,
      summary: 'A registered office and business address. Collect your post from reception.',
      features: addressOnly,
    },
    {
      name: 'Virtual Office',
      price: 40,
      summary: 'Your address, plus post opened and scanned and 2 free meeting room hours a month.',
      features: [...addressOnly, 'postScanned', 'roomHours', 'coffee'],
    },
  ] as VirtualOfficePlan[],
  directorsCover: {
    name: "Director's Cover",
    price: 10,
    summary:
      "Your plan replaces your home as your company's registered office. Director's Cover replaces it as your director's service address too, so new filings show our address in both places your home used to appear.",
    short: 'Keep your home off Companies House in both places',
  },
  terms: 'No lock-in. Cancel any time with one month\'s notice.',
  // Owner, Oct 2026: never name one person as the post handler. Post is handled by the team at reception.
  signUp: [
    { title: 'Tell us the basics', text: 'Your name, email, phone and the plan you want. It takes about a minute.' },
    { title: 'Complete your AML check', text: 'We send a secure form for the anti-money laundering (AML) checks the law requires for registered office services.' },
    { title: 'Get your address', text: "You get your new address and access to your mailbox app. You're live as soon as the checks are done." },
  ],
  // An AI voice agent answers, 24/7. Always call it "call answering", never "AI receptionist".
  callAnswering: {
    name: 'Call answering',
    price: 39,
    perResponse: '2p',
    summary:
      'A human-like AI voice agent answers your calls 24/7, takes the message, and emails you a summary, transcript and recording. £39 a month plus 2p per AI response, with no charge per call.',
    steps: [
      { title: 'Your call is answered', text: 'A human-like AI voice agent picks up every call, day or night, so nobody hits voicemail.' },
      { title: 'The message is taken', text: 'Who called, why, and how to get back to them.' },
      { title: 'Transferred or messaged', text: 'With your availability on, the call can be transferred to you. With it off, the AI takes the message.' },
      { title: 'Emailed to you', text: 'A summary, a full transcript and a recording of the call arrive by email.' },
      { title: 'Kept in your CRM', text: 'Every call is stored in your CRM account, so you have a record of who rang and what they needed.' },
    ],
  },

  areasServed: ['Liverpool', 'Knowsley', 'St Helens', 'Sefton', 'Wirral', 'Halton', 'Warrington', 'West Lancashire'],
  // Owner, Oct 2026: there are clients across the UK who chose a charity for their registered address.
  national:
    "We also have clients across the UK who chose a charity for their registered address, instead of an online service or a profit-making company. On the Virtual Office plan your post is scanned, so you don't need to be local, and every month's fee helps fund Maggie's Meals.",
};

// Sector pages under the training rooms hub, with their first sentence (Blueprint 03 · Messaging).
export const sectorPages = [
  { name: 'Care and social care', line: 'Mandatory training, in rooms built for it.', href: '/services/training-rooms/care-training-venue/', linkText: 'Care training venue', image: 43 },
  { name: 'NHS and primary care', line: 'Your clinical and admin teams, trained close to home.', href: '/services/training-rooms/nhs-training-venue/', linkText: 'NHS training venue', image: 67 },
  { name: 'Councils, schools and public sector', line: 'Train in the borough, and the spend stays local.', href: '/services/training-rooms/council-training-venue/', linkText: 'Council training in Knowsley', image: 114 },
  { name: 'Fostering and adoption', line: 'Hard conversations need a calm room.', href: '/services/training-rooms/fostering-adoption-training-venue/', linkText: 'Fostering and adoption training venue', image: 105 },
  { name: 'Oliver McGowan training', line: 'A calm, accessible room for Oliver\u2019s Training.', href: '/services/training-rooms/oliver-mcgowan-training-venue/', linkText: 'Oliver McGowan training venue', image: 117 },
];

// Room hire is by the hour or the day. There are no half-day rates (owner, Oct 2026).
export const halfDay = 'There are no half-day rates. Rooms are hired by the hour or by the day, so a shorter session is charged at the hourly rate.';

// Catering is outsourced: the booker deals with Superior Catering directly (owner, Oct 2026).
export const catering = {
  partner: 'Superior Catering',
  summary:
    "Catering is provided by our partner, Superior Catering. You order and pay for it with them directly, and we'll put you in touch when you book.",
};

// Who the training rooms suit (PROJECT_NOTES.md).
export const idealFor = ['Care companies', 'NHS teams', 'Council training', 'CPD', 'First aid', 'Corporate training', 'Colleges', 'Apprenticeships'];

export const sectors = ['care providers', 'the NHS and primary care networks', 'Knowsley Council', 'schools', 'fostering and adoption teams'];

// sameAs profiles for schema. Add each one as it's confirmed (SEO spec 1.2).
// Facebook and LinkedIn found by web search, Oct 2026: owner to confirm they are the official pages.
// TODO(owner): Google Business Profile URL, Instagram URL.
export const sameAs: string[] = [
  'https://www.facebook.com/maggieoneillbusinessandtraining/',
  'https://uk.linkedin.com/company/maggie-oneill-btc',
  'https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1215599',
];

export const formatPrice = (n: number) => `£${n}`;

// Lowest published day rate across the bookable training rooms (excludes the Pod, which is a small meeting room).
export const trainingDayFrom = Math.min(
  ...rooms.filter((r) => r.slug !== 'pod' && r.prices?.day).map((r) => r.prices!.day!),
);

// Rooms grouped by identical rates, for sentences like "the Hub and the Foundry: £25 an hour or £165 a day".
export function rateGroups(exclude: string[] = []) {
  const groups = new Map<string, Room[]>();
  for (const r of rooms) {
    if (!r.prices?.hour || !r.prices?.day || exclude.includes(r.slug)) continue;
    const key = `${r.prices.hour}-${r.prices.day}`;
    groups.set(key, [...(groups.get(key) ?? []), r]);
  }
  return [...groups.values()]
    .map((rs) => ({ rooms: rs, hour: rs[0].prices!.hour!, day: rs[0].prices!.day! }))
    .sort((a, b) => a.day - b.day);
}

export const listNames = (names: string[]) =>
  names.length < 2 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

// A virtual office plan's price with Director's Cover added (£20 → £30, £40 → £50).
export const withCover = (plan: VirtualOfficePlan) => plan.price + virtualOffice.directorsCover.price;

// Care providers that train at the centre (owner, Oct 2026), shown scrolling under the Amore and AFG logos.
// Order shuffled once, on purpose, so no company is always first.
export const careClients = [
  'Florence Care Ltd', 'Compassionate Care Group', 'Prospero Care', 'Exemplar Health Care', 'Eleva8 Care',
  'Season Healthcare Living Ltd', 'Kynance Care Group', 'Northern Healthcare', 'Secure Care UK', 'Orah Care',
  'Kewb Care', 'Salutem Care and Education', 'New Start', 'Safepoint Care Services', 'Attivo Care',
  'Cygnet Health Care', 'Newcross Healthcare', 'Safe Haven Crisis Care', 'Helping Care', 'Care and Co',
  'Nexime Healthcare', 'Capricorn Care NW Ltd', 'BR-1 Care', 'Prosper Care', 'Homecarers Liverpool (HCL)',
  'City Health Care Partnership CIC', 'G&H Care',
];

// Accountant referral partners (PROJECT_NOTES.md, Blueprint 8b). We pay no commission, because accountants must
// disclose commission to their clients: the saving goes to the client instead, for as long as they stay.
// Referrals are tracked by which client mailboxes the accountant's email is on in PilotoMail.
export const accountantPartners = {
  // Owner, Oct 2026: 20% (was 15% in the blueprint), on both plans and Director's Cover.
  discount: 20,
  // Owner, Oct 2026: call answering gets 10% off its monthly fee for referred clients.
  callAnsweringDiscount: 10,
  audience: 'Accountants, bookkeepers and company formation agents',
};

// Knowsley Private Hire Operator's Licence address (owner brief, Oct 2026; moved in from taxi.mobtc.co.uk).
// A real satellite office lease, not a virtual office: Knowsley rejects virtual offices for operator licences.
// PUBLIC-SAFE FACTS ONLY. The planning reference must never go in here (this file feeds llms.txt and schema).
// It lives only on the private application guide and in docs/knowledge/operators-licence.md (internal).
export const operatorLicence = {
  path: '/operators-licence/',
  // The lease details form is the coded 11-step form at /operators-licence/apply/ (owner, Oct 2026: no GoHighLevel survey).
  operatorsSupported: '15+',
  termMonths: 12,
  setupFee: 0,
  from: 100,
  tiers: [
    { vehicles: '1', label: '1 vehicle', price: 100 },
    { vehicles: '2-10', label: '2 to 10 vehicles', price: 150 },
    { vehicles: '11-50', label: '11 to 50 vehicles', price: 200 },
    { vehicles: '51+', label: '51+ vehicles', price: 250 },
  ],
  planningPublic: 'a Class E commercial building',
  planningLine: 'In place. The reference is shared once you qualify.',
  councilFeeFrom: 242,
  councilFeeTo: '1,920',
  decisionWeeks: 6,
  exitClause:
    "If Knowsley Council refuses your licence application or revokes your issued licence, you're released from the lease. It's built into the agreement.",
};
