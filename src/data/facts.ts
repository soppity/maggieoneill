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
  heroLine: 'Someone meets you at the door. The room is ready and the kettle is on.',
  closer: "Every booking funds Maggie's Meals.",
  socialDescription:
    "Maggie O'Neill Centre is a charity-run training, meeting and event venue in Huyton, near Liverpool, with free parking and hosts on site. Virtual offices from £20 a month.",
  charityNumber: '1102507',
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
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maggie+O%27Neill+Centre+433+Liverpool+Road+Huyton+L36+8HT',
  // TODO(owner): take from the Google Business Profile pin. Don't guess (SEO spec 4).
  geo: null as null | { lat: number; lng: number },
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

export const forms = {
  general: { id: 'PTEyaGYXB96ztNMrZVGB', name: 'Website Enquiry', height: 789 },
  virtualOffice: { id: 'RWoOkRV2NaAKLVe4JSmF', name: 'Virtual Office Page - Form', height: 1006 },
};

export const reviews = {
  count: 230,
  asOf: '28 September 2026',
  source: 'Google',
};

export const maggiesMeals = {
  schedule: 'Every Friday, 9am to 10am',
};

export const lastYear = {
  roomsHired: '900+',
  businessesServed: '150+',
  mealsAccessed: '750+',
};

export const parking = {
  summary: 'Free car park on site, 30 seconds from the M57, on a main bus route',
  spaces: 50,
  motorway: '30 seconds from the M57',
};

export const accessibility = {
  // Word for word, from docs/content/contact-forms-booking.md.
  stepFree:
    'Step-free access. Accessible parking spaces right outside the Auditorium. The Auditorium side door can be opened to shorten the route.',
  toilet:
    'Accessible toilet on the same floor as the Auditorium, a short walk away next to the kitchen. It has grab rails, a fold-down rail and an emergency pull cord.',
  quietRoom: 'Quiet room off the Auditorium foyer, with acoustic insulation and dim lights, signed on the door.',
  lighting: 'Adjustable lighting in the Auditorium.',
};

export const hosts = [
  { name: 'Patrick', role: 'Host', image: 139 },
  { name: 'Tania', role: 'Host', image: 133, note: 'Handles virtual office post' },
];
export const volunteers = [{ name: 'Liam', role: 'Volunteer' }];

// Rooms in the order customers see them. Genesis is never listed.
// Capacities: null means not yet confirmed for the site. Don't fill these in by guesswork.
// Rates confirmed by the owner, Oct 2026. The Grove and the Auditorium are priced on request.
// TODO(owner): capacities by layout for each room.
export type Layout = 'uShape' | 'boardroom' | 'classroom' | 'cabaret' | 'banquet' | 'theatre';
export interface Room {
  slug: string;
  name: string;
  kind: string;
  goodFor: string;
  capacity: Partial<Record<Layout, number>>;
  prices?: { hour?: number; day?: number };
  image: number;
}
export const rooms: Room[] = [
  {
    slug: 'auditorium',
    name: 'Auditorium',
    kind: 'Main hall',
    goodFor: 'Conferences, Oliver McGowan Tier 2 days and large training sessions',
    capacity: { cabaret: 60 },
    image: 117,
  },
  { slug: 'summit', name: 'Summit', kind: 'Training and meeting room', goodFor: 'Training days and meetings', capacity: {}, prices: { hour: 30, day: 180 }, image: 44 },
  { slug: 'forum', name: 'Forum', kind: 'Training and meeting room', goodFor: 'Training, meetings and open networking', capacity: {}, prices: { hour: 30, day: 180 }, image: 35 },
  { slug: 'grove', name: 'Grove', kind: 'Event and meeting room', goodFor: 'Events, networking and training', capacity: {}, image: 62 },
  { slug: 'foundry', name: 'Foundry', kind: 'Training and meeting room', goodFor: 'Classroom training and team meetings', capacity: {}, prices: { hour: 25, day: 165 }, image: 92 },
  { slug: 'hub', name: 'Hub', kind: 'Meeting room', goodFor: 'Small meetings and interviews', capacity: {}, prices: { hour: 25, day: 165 }, image: 88 },
  { slug: 'community-room', name: 'Community Room', kind: 'Training room', goodFor: 'Training sessions and group work', capacity: {}, prices: { hour: 30, day: 180 }, image: 105 },
  {
    slug: 'pod',
    name: 'Pod',
    kind: 'Small meeting room',
    goodFor: 'Meetings and interviews for up to 4',
    capacity: { boardroom: 4 },
    prices: { hour: 20, day: 120 },
    image: 95,
  },
];

// The Hosted Day: what every room booking includes (Brand Strategy, The Hosted Day).
export const hostedDay = [
  'Room set to your layout before you arrive',
  'A named host at the door',
  "Your group's name on the welcome screen",
  'Tea and coffee in the room, all day',
  'Screen with AirPlay, HDMI cables and WiFi',
  'Flipchart and pens',
  'Free parking for every delegate',
  'A mid-morning check-in with your trainer',
  'Kitchen and fridge access',
  'Room notes kept for next time',
];

export const virtualOffice = {
  from: 20,
  plans: [
    {
      name: 'Address Only',
      price: 20,
      summary: 'A registered office address for your company.',
    },
    {
      name: "Address Only + Director's Cover",
      price: 30,
      summary: "Registered office plus a director's service address.",
    },
    {
      name: 'Virtual Office',
      price: 40,
      summary: 'Post opened and scanned, plus 2 free meeting room hours a month.',
    },
    {
      name: "Virtual Office + Director's Cover",
      price: 50,
      summary: "Post opened and scanned, 2 free meeting room hours, and your home address off Companies House.",
      lead: true,
    },
  ],
  callAnswering: {
    name: 'Call answering',
    price: 39,
    summary: 'Calls answered, messages taken, put through to you or summarised and sent to you.',
  },
  areasServed: ['Liverpool', 'Knowsley', 'St Helens', 'Sefton', 'Wirral', 'Halton', 'Warrington', 'West Lancashire'],
};

export const sectors = ['care providers', 'the NHS and primary care networks', 'Knowsley Council', 'schools', 'fostering and adoption teams'];

// sameAs profiles for schema. Add each one as it's confirmed (SEO spec 1.2).
// Facebook and LinkedIn found by web search, Oct 2026: owner to confirm they are the official pages.
// TODO(owner): Google Business Profile URL, Instagram URL.
export const sameAs: string[] = [
  'https://www.facebook.com/maggieoneillbusinessandtraining/',
  'https://uk.linkedin.com/company/maggie-oneill-btc',
  'https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/1102507',
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
