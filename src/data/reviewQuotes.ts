// Google review quotes cleared for use, and what written reviews mention most.
// Source: docs/content/voice-of-customer.md (Sept 2026: 230 Google reviews, 76 with written comments analysed).
// No Review or aggregateRating markup anywhere: Google ignores self-serving review markup (SEO spec 4).

export interface ReviewQuote {
  quote: string;
  name: string;
  org?: string;
}

export const writtenReviewsAnalysed = 76;

export const quotes = {
  anita: { quote: 'From booking to the event as easy as possible.', name: 'Anita Johnson' },
  fozzer: { quote: 'A great and calming atmosphere for the adoption course we have done.', name: 'Fozzer Foz' },
  hayley: { quote: 'I soon became at ease.', name: 'Hayley Hesketh' },
  chloe: { quote: 'Someone waiting at the front door to greet you and point you in the right direction.', name: 'Chloe' },
  john: { quote: 'Looks very bland once you hit the car park but inside, very open and lovely decoration.', name: 'John Burnage' },
  jane: { quote: 'Patrick went above and beyond to make sure everything was perfect.', name: 'Jane Turner' },
  bec: { quote: 'Just off the motorway, on a main bus route.', name: 'Bec Bowden' },
  jen: { quote: 'So easy to get to.', name: 'Jen Murphy', org: 'Rainbow Teaching School Hub' },
  sufiah: { quote: 'A wonderful place where the community can gather.', name: 'Sufiah Abbasi' },
} satisfies Record<string, ReviewQuote>;

// Share of written reviews that mention each theme, most mentioned first.
export const themes: { key: string; title: string; share: string; text: string; quote?: ReviewQuote }[] = [
  {
    key: 'welcome',
    title: 'The welcome',
    share: 'Two in three',
    text: 'More than anything, people write about being welcomed and looked after. One in five names a host, usually Patrick or Tania.',
    quote: quotes.chloe,
  },
  {
    key: 'ready',
    title: 'Everything ready',
    share: 'One in three',
    text: 'The room set, the screen working and nothing to sort out before the day can start.',
    quote: quotes.jane,
  },
  {
    key: 'calm',
    title: 'How it feels inside',
    share: 'One in three',
    text: 'Calm rooms, the scent of the diffuser in reception and fresh flowers. People notice it the moment they walk in.',
    quote: quotes.john,
  },
  {
    key: 'parking',
    title: 'Easy to reach, with free parking',
    share: 'Almost one in four',
    text: 'Just off the M57 and on a main bus route, with a free car park on site.',
    quote: quotes.bec,
  },
  {
    key: 'clean',
    title: 'Clean',
    share: 'Almost one in four',
    text: 'People notice how clean and tidy the rooms and the building are.',
  },
  {
    key: 'tea',
    title: 'Tea and coffee included',
    share: 'One in five',
    text: "Tea and coffee in the room, all day, at no extra cost. Nobody has to go looking for a drink.",
  },
];

export const bySector: { title: string; text: string; href: string; linkText: string; quotes: ReviewQuote[] }[] = [
  {
    title: 'Training and courses',
    text: 'Training and courses make up the biggest share of our written reviews.',
    href: '/services/training-rooms/',
    linkText: 'Training room hire',
    quotes: [quotes.fozzer, quotes.hayley, quotes.jen],
  },
  {
    title: 'Meetings',
    text: 'Meetings are the next biggest group.',
    href: '/services/meeting-rooms/',
    linkText: 'Meeting rooms',
    quotes: [quotes.anita],
  },
  {
    title: 'Community',
    text: 'Community groups and classes use the rooms too.',
    href: '/social-value/',
    linkText: 'Social value',
    quotes: [quotes.sufiah],
  },
];

// Not a direct quote: summarised from a virtual office client's review (voice-of-customer.md).
export const virtualOfficeReview = {
  name: 'Salome',
  org: 'Salowal Ltd',
  summary: 'Tania lets her know when post arrives, and greets her clients when they call in at reception.',
};
