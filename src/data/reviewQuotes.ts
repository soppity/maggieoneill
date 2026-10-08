// Google review quotes and what written reviews mention most.
// Source: src/data/google-reviews.tsv, every written Google review (name, text; no dates). Theme counts are worked out
// from it at build time, so a monthly update only adds new rows there (docs/SOP/monthly-reviews.md).
// Quotes are word for word, cut at the end of a sentence (or marked with an ellipsis). No review dates (owner). Names as shown on Google.
// Left out on purpose: free hot desking and co-working (no longer offered), the chiropodist and nursery (other
// businesses), Christian music (off-message for public sector), the AI workshop, a lukewarm review and a non-English one.
// No Review or aggregateRating markup anywhere: Google ignores self-serving review markup (SEO spec 4).

export interface ReviewQuote {
  quote: string;
  name: string;
  org?: string;
}

import reviewsTsv from './google-reviews.tsv?raw';

const rows = reviewsTsv
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => line.split('\t')[1]?.toLowerCase() ?? '')
  .filter(Boolean);

export const writtenReviews = rows.length;

// What counts as a mention of each theme. Keep in step with the theme cards below.
const themePatterns: Record<string, RegExp> = {
  welcome: /welcom|friend|helpful|kind|greet|hospitab|accommodat|above and beyond|staff|team|patrick|tania|tanya|liam|polite|lovely people|amazing people|great people/,
  reach: /park|easy to (find|get)|access|motorway|m57|bus|location|main routes/,
  ready: /facilit|equipped|everything ready|set up|well set|tech|wi-?fi|internet|it re|everything you need|amenit|prepared|resourced|organis|well run|\btea\b|coffee|beverage/,
  feel: /calm|decor|atmosphere|diffuser|smell|flower|beautiful|relax|peaceful|cosy|comfortable|serene|aesthetic|stylish|warm environment|bright|ambience|vibes|homely|inviting/,
  clean: /clean|tidy|spotless|immaculate|well maintained|well cared/,
};
const mentions = (key: string) => rows.filter((t) => themePatterns[key].test(t)).length;

export const quotes = {
  anita: { quote: 'The perfect venue for meetings. Staff are so helpful and do all they can to make the whole experience from booking to the event as easy as possible.', name: 'Anita Johnson' },
  fozzer: { quote: 'A great and calming atmosphere for the adoption course we have done. I hope we have our future courses here.', name: 'Fozzer Foz' },
  jennifer: { quote: 'Staff on site always give a friendly warm welcome.', name: 'Jennifer Smith' },
  bozena: { quote: 'Always accommodating with a friendly greeting at the door. Facilities are good especially the large free parking.', name: 'Bozena Jelen' },
  william: { quote: 'Great venue for a meeting. Patrick and the team are great really helpful making sure everything is perfect.', name: 'William Costello' },
  martin: { quote: 'Super venue with everything you need as a trainer. Good location (just off the M57) with plentiful parking.', name: 'Martin Clarke' },
  laura: { quote: 'Lovely environment with very clean and tidy working areas. Decor is lovely and host was friendly. Parking is free and right outside the venue.', name: 'Laura Davies' },
  megan: { quote: 'Really easy to find, very accessible! Facilities are brilliant. Plenty of space inside. Would happily come back for further training.', name: 'Megan Johnston' },
  cooper: { quote: 'Booked to deliver training, fantastic venue, very accessible. Room set up was great, everything ready, lovely lunch and special thanks to Liam who looked after us from the moment we arrived.', name: 'A Cooper' },
  donna: { quote: 'Beautiful very slick venue. Lots of parking. Very lovely professional interior spaces and various sizes of meeting rooms. Tea and coffee in each room. Warm welcome', name: 'Donna Davies' },
  sophie: { quote: 'Immaculate vibes! From the smell of the diffuser welcoming you, the considered music, the great workspaces, well thought out kitchen to the amazing friendly and helpful staff.', name: 'Sophie Deary' },
  kirsty: { quote: 'Lovely calm and peaceful venue', name: 'Kirsty Dunne' },
  tianna: { quote: 'The decor inside is gorgeous and feels so relaxing', name: 'Tianna Carney' },
  roli: { quote: 'I love the environment, everywhere is clean and tidy with beautiful flowers decorated around the areas.', name: 'Roli Imoh' },
  graemeRoss: { quote: 'Amazing facilities. Very friendly staff available on site. Extremely clean.', name: 'Graeme Ross' },
  jo: { quote: 'Beautiful building, with lots of rooms and space, good parking and staff are so helpful...we use the centre for a lot of organisational training and we are never disappointed...great facilities', name: 'Jo Whitfield' },
  jenny: { quote: "Just completed four days of training in the centre. It's a warm, welcoming space and easily accessible.", name: 'Jenny Gordon' },
  emmaSeddon: { quote: 'Best training experience here. Such good attention to detail!', name: 'Emma Seddon' },
  rebecca: { quote: 'We recently booked this venue for a training event. The service was excellent and Patrick was very accommodating with us.', name: "Rebecca O'Leary" },
  chele: { quote: "We held our company's training at Maggie's and we would highly recommend this venue.", name: 'Chele Mac' },
  anthony: { quote: 'Went on a first aid course here. All the staff were lovely. Nice clean and tidy venue and easy to access by bus from Warrington.', name: 'Anthony Rimmer' },
  kim: { quote: 'Fantastic venue for a multi agency meeting in the boardroom, accessible, clean, friendly and all round great facilities.', name: 'Kim Webb' },
  peter: { quote: 'Great venue for my meeting with a client. I received a very warm welcome, the facilities including parking and overall building are fantastic, and very easy to book a room via online system.', name: 'Peter Lydon' },
  roby: { quote: 'A fantastic working space with staff on hand to support all your needs. Simple and easy booking service.', name: 'Roby Park Primary School' },
  matt: { quote: 'Went there for a conference and the facilities are great, clean and accessible.', name: 'Matt Burns' },
  liz: { quote: 'Brilliant venue for events. Well cared for, great communal spaces and super clean!', name: 'Liz Cross' },
  johnReynolds: { quote: 'Excellent venue hosted our graduation event perfectly', name: 'John Reynolds' },
  sufiah: { quote: 'This is a wonderful place where the community can gather.', name: 'Sufiah Abbasi' },
  ryan: { quote: 'Used this place for lots of training and community events. Such lovely and friendly staff, always there to help in a calm and well resourced environment.', name: 'Ryan Pearce' },
  transform: { quote: 'Great venue, accessible for local residents. Bright, welcoming space, great facilities and friendly staff who are always willing to accommodate our needs.', name: 'Transform Lives' },
  ray: { quote: "I needed a mailing address in the local area. I looked for months before I found the Maggie O'Neil Centre.", name: 'Ray McBurney' },
  simon: { quote: '\u2026cannot speak highly enough of the staff including Patrick who is always available to help.', name: 'Simon Bartlett' },
  heather: { quote: "Amazing office and training space, spotless and very well decorated. The facilities were amazing and staff were brilliant. I can't fault anything.", name: 'Heather Lovatt' },
  markK: { quote: 'Great community centre and office spaces. Good parking and friendly staff.', name: 'Mark Kewley' },
  neil: { quote: 'What an amazing venue. It is perfect for courses or meetings the staff are so friendly and helpful, especially Tanya! Thank you so much.', name: 'neil Hartshorn' },
  elo: { quote: 'Patrick was very welcoming and the space we used was comfortable.', name: 'Elo Ajise' },
  charlotte: { quote: 'Great service from Patrick and Tania.', name: 'Charlotte Downham' },
  john: { quote: 'Looks very bland once you hit the car park but inside, very open and lovely decoration.', name: 'John Burnage' },
} satisfies Record<string, ReviewQuote>;

// How many written reviews mention each theme, sorted most mentioned first.
const themeList: { key: string; title: string; count: number; text: string; quotes: ReviewQuote[] }[] = [
  {
    key: 'welcome',
    title: 'The staff and the welcome',
    count: mentions('welcome'),
    text: 'More than anything, people write about being welcomed and looked after. Patrick, Tania and Liam are named again and again.',
    quotes: [quotes.jennifer, quotes.bozena, quotes.william],
  },
  {
    key: 'reach',
    title: 'Easy to reach, with free parking',
    count: mentions('reach'),
    text: 'Just off the M57 and on a main bus route, with a free car park on site.',
    quotes: [quotes.martin, quotes.laura, quotes.anthony],
  },
  {
    key: 'ready',
    title: 'Everything you need, ready',
    count: mentions('ready'),
    text: 'The room set, the tech working, tea and coffee in the room, and nothing to sort out before the day can start.',
    quotes: [quotes.cooper, quotes.donna],
  },
  {
    key: 'feel',
    title: 'How it feels inside',
    count: mentions('feel'),
    text: 'Calm rooms, the diffuser in reception and fresh flowers. People notice it the moment they walk in.',
    quotes: [quotes.sophie, quotes.kirsty, quotes.john],
  },
  {
    key: 'clean',
    title: 'Clean',
    count: mentions('clean'),
    text: 'People notice how clean and tidy the rooms and the building are.',
    quotes: [quotes.roli, quotes.graemeRoss],
  },
];

export const themes = [...themeList].sort((a, b) => b.count - a.count);

export const bySector: { title: string; text: string; href: string; linkText: string; quotes: ReviewQuote[] }[] = [
  {
    title: 'Training and courses',
    text: 'Training days, multi-day courses and first aid, from organisations that come back again and again.',
    href: '/services/training-rooms/',
    linkText: 'Training room hire',
    quotes: [quotes.jo, quotes.jenny, quotes.fozzer, quotes.rebecca, quotes.emmaSeddon, quotes.chele],
  },
  {
    title: 'Meetings',
    text: 'Client meetings, boards and multi-agency meetings.',
    href: '/services/meeting-rooms/',
    linkText: 'Meeting rooms',
    quotes: [quotes.anita, quotes.kim, quotes.peter, quotes.roby],
  },
  {
    title: 'Events and conferences',
    text: 'Conferences, seminars and celebrations.',
    href: '/services/event-space-business-and-community/',
    linkText: 'Events',
    quotes: [quotes.matt, quotes.liz, quotes.johnReynolds],
  },
  {
    title: 'Community',
    text: 'Community groups, classes and local charities.',
    href: '/social-value/',
    linkText: 'Social value',
    quotes: [quotes.sufiah, quotes.ryan, quotes.transform],
  },
  {
    title: 'Offices and virtual office',
    text: 'Businesses that use the building as their base or their address.',
    href: '/services/virtual-office/',
    linkText: 'Virtual office',
    quotes: [quotes.ray, quotes.simon],
  },
];
