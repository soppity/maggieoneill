// Case studies (Blueprint page 12, PROJECT_NOTES). Source: the owner's rundown of how each client uses us (Oct 2026).
// Logos only for now: no client contacts or photos, and no quotes until supplied. Every client fact below comes from
// the owner; the rest describes how the Maggie O'Neill Centre hosts that kind of booking, using facts.ts.

import { formatPrice, parking, rooms, virtualOffice } from './facts';

const auditorium = rooms.find((r) => r.slug === 'auditorium')!;

export type CaseSector = 'care' | 'nhs' | 'housing' | 'virtual-office';

export const caseSectors: { key: CaseSector; label: string }[] = [
  { key: 'care', label: 'Care' },
  { key: 'nhs', label: 'NHS' },
  { key: 'housing', label: 'Housing' },
  { key: 'virtual-office', label: 'Virtual office' },
];

export interface CaseSection {
  eyebrow: string;
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

export interface CaseStudy {
  slug: string;
  name: string;
  shortName: string;
  // Library number of the client logo. Without one, the name is shown as a wordmark.
  logo?: number;
  sector: CaseSector;
  kind: 'venue' | 'virtual-office';
  title: string;
  description: string;
  h1: string;
  tagline: string;
  // One line for cards and the hub.
  line: string;
  lede: string;
  glance: { term: string; detail: string }[];
  sections: CaseSection[];
  takeaways: { heading: string; points: string[] };
  rooms?: string[];
  roomsHeading?: string;
  sectorHref: string;
  sectorLinkText: string;
  published: string;
}

const getHere = `The Maggie O'Neill Centre is ${parking.motorway}, on a main bus route, with a free ${parking.spaces}-space car park on site.`;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'amore',
    name: 'Amore',
    shortName: 'Amore',
    logo: 156,
    sector: 'care',
    kind: 'venue',
    title: "Amore Case Study: Care Training Venue | Maggie O'Neill Centre",
    description:
      "Amore moved all of its care training to one central venue. Four years on, it trains at the Maggie O'Neill Centre in Huyton almost every week.",
    h1: 'Amore: every mandatory training day, in one place',
    tagline: 'One central venue, instead of many.',
    line: 'Four years of training, almost every week, in one central venue.',
    lede: "Amore has trained its staff at the Maggie O'Neill Centre for about four years. It brought all of its training venues together into one, and now holds the vast majority of its training here, almost every week.",
    glance: [
      { term: 'Who', detail: 'Amore, a care provider.' },
      { term: 'With us', detail: 'About four years.' },
      { term: 'What they run here', detail: 'The vast majority of their staff training, including mandatory training for agency staff.' },
      { term: 'How often', detail: 'Almost every week.' },
    ],
    sections: [
      {
        eyebrow: 'The challenge',
        heading: 'Why did Amore bring all its training into one venue?',
        paragraphs: [
          'Training spread across several venues means staff travelling somewhere different each time, trainers learning a new room each time, and more bookings to manage. Amore decided to bring all of its training together in one central venue.',
          `It chose the Maggie O'Neill Centre for two reasons: the transport links, and a location that's central for all of its staff. ${getHere}`,
        ],
      },
      {
        eyebrow: 'How we host it',
        heading: 'What does weekly training look like here?',
        points: [
          "Amore's trainers arrive to a room that's already set for the day.",
          'Hosts are on site all day, and tea and coffee are served in the room.',
          'We keep room notes, so a regular booking is set the same way every time.',
          'Staff park for free or come by bus, so getting to training is never the hard part.',
        ],
      },
      {
        eyebrow: 'Four years on',
        heading: 'Why does Amore keep booking?',
        paragraphs: [
          "Weekly training only works if the venue works every week. Four years in, Amore's trainers know the rooms, our hosts know how they like them set, and their staff know exactly where they're going.",
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your care company?',
      points: [
        'One central venue for all your training, instead of several.',
        'Easy to reach for staff from across the area, by car or by bus.',
        'Weekly and block bookings, set the same way every time.',
        'Invoices to your company, so the paperwork stays simple.',
      ],
    },
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove'],
    roomsHeading: 'Which rooms suit care training?',
    sectorHref: '/services/training-rooms/care-training-venue/',
    sectorLinkText: 'care training venue',
    published: '2026-10-05',
  },
  {
    slug: 'central-and-south-pcn',
    name: 'Central and South PCN',
    shortName: 'Central and South PCN',
    logo: 157,
    sector: 'nhs',
    kind: 'venue',
    title: "Central and South PCN Case Study | Maggie O'Neill Centre",
    description:
      "Central and South PCN brings 60 to 100 people to the Maggie O'Neill Centre's Auditorium for protected learning time, and meets here every month.",
    h1: 'Central and South PCN: protected learning time for up to 100 people',
    tagline: 'A whole network, trained under one roof.',
    line: 'Protected learning time in the Auditorium, and meetings every month.',
    lede: "Central and South PCN books the Auditorium at the Maggie O'Neill Centre for its protected learning time, with 60 to 100 people on site and sessions running through the day. Every month, it also books smaller rooms for board meetings and the other meetings a PCN needs to hold.",
    glance: [
      { term: 'Who', detail: 'Central and South PCN, a Primary Care Network.' },
      { term: 'What they run here', detail: 'Protected learning time, with sessions and training through the day.' },
      { term: 'Group size', detail: '60 to 100 people on protected learning days.' },
      { term: 'Every month', detail: 'Board meetings and other PCN meetings in smaller rooms.' },
    ],
    sections: [
      {
        eyebrow: 'What they needed',
        heading: 'What does protected learning time need from a venue?',
        paragraphs: [
          'Protected learning time brings a whole network together at once. For Central and South PCN, that means 60 to 100 people from different practices on site, with different sessions and training running through the day.',
          "That needs one room big enough for everyone, somewhere every practice can reach, and a day that runs to time. The time is protected, and nobody wants to lose it to setting up.",
        ],
      },
      {
        eyebrow: 'How we host it',
        heading: "How does the Maggie O'Neill Centre host a protected learning day?",
        points: [
          `The Auditorium seats up to ${auditorium.capacity.cabaret!} cabaret style, so practices can sit together at tables, or up to ${auditorium.capacity.theatre!} theatre style.`,
          'The room is set before anyone arrives, with the stage, screen and lighting ready for the first speaker.',
          'Hosts are on site all day, and tea and coffee are served for everyone.',
          `Free parking on site for staff travelling in from every practice, ${parking.motorway}.`,
        ],
      },
      {
        eyebrow: 'Every month',
        heading: 'Why hold PCN meetings here?',
        paragraphs: [
          "Alongside the big days, Central and South PCN books smaller meeting rooms each month for its board meetings and the other meetings a PCN has to hold. Meeting at the Maggie O'Neill Centre means meeting in a shared space, away from any one practice's building.",
          'One venue for the training days and the regular meetings also means one place to book, and staff who already know the way.',
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your PCN?',
      points: [
        `Room for your whole network in one place: up to ${auditorium.capacity.cabaret!} cabaret or ${auditorium.capacity.theatre!} theatre style.`,
        'Smaller rooms for board and monthly meetings, in the same building.',
        'Invoices to your PCN, with PO numbers welcome.',
        'A shared space that belongs to no single practice.',
      ],
    },
    rooms: ['auditorium', 'summit', 'forum', 'hub', 'pod'],
    roomsHeading: 'Which rooms suit a PCN?',
    sectorHref: '/services/training-rooms/nhs-training-venue/',
    sectorLinkText: 'NHS training venue',
    published: '2026-10-05',
  },
  {
    slug: 'afg',
    name: 'Alternative Futures Group',
    shortName: 'AFG',
    logo: 153,
    sector: 'care',
    kind: 'venue',
    title: "AFG Case Study: Care Training & Meetings | Maggie O'Neill Centre",
    description:
      "After Covid, Alternative Futures Group moved its training to the Maggie O'Neill Centre: mandatory care training, meetings and a four-week systems rollout.",
    h1: 'AFG: staff training, meetings and a company-wide rollout',
    tagline: 'Remote working, with a place to come together.',
    line: 'Care training and meetings since Covid, including a four-week systems rollout.',
    lede: "After Covid, Alternative Futures Group (AFG) set its teams up to work largely remotely, and moved its training to the Maggie O'Neill Centre. Its learning team meets here, its support workers do their mandatory training here, and its corporate staff come in for meetings.",
    glance: [
      { term: 'Who', detail: 'Alternative Futures Group (AFG), a care provider.' },
      { term: 'With us since', detail: 'After Covid, when AFG moved to largely remote working.' },
      { term: 'What they run here', detail: 'Mandatory care training such as TMVA and epilepsy training, plus learning team and corporate meetings.' },
      { term: 'Biggest booking', detail: 'A one-day systems training for every member of staff, run over four weeks.' },
    ],
    sections: [
      {
        eyebrow: 'The challenge',
        heading: 'Why did AFG move its training to us?',
        paragraphs: [
          'After Covid, AFG built the setup it needed for its teams to work largely remotely. That meant it could stop running its own training facilities, and use ours instead.',
          "Its people still need to come together: to train, to meet and to learn. The Maggie O'Neill Centre is where that happens.",
        ],
      },
      {
        eyebrow: 'How we host it',
        heading: 'What does AFG run here?',
        points: [
          'Mandatory care training for support workers, including TMVA and epilepsy training.',
          'Learning team meetings.',
          'Meetings of all kinds for corporate staff.',
          'A company-wide systems training, with every member of staff coming in for a one-day session over four weeks.',
        ],
      },
      {
        eyebrow: 'The big one',
        heading: 'How do you train a whole company in a month?',
        paragraphs: [
          'When AFG needed every member of staff trained on its systems, it booked the Maggie O’Neill Centre for four weeks. Staff came in throughout the month, each for a one-day session.',
          'A rollout like that only works if every day runs the same. The room is set the same way, the screen is ready, the tea is on and the car park is free. That’s what a hosted day is for.',
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your organisation?',
      points: [
        'A place to come together when your teams work remotely.',
        'Practical care training, like TMVA, with floor space to move.',
        'Training that runs over weeks, planned with you from the start.',
        'Meeting rooms for corporate teams, in the same building.',
      ],
    },
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove', 'hub'],
    roomsHeading: 'Which rooms suit care training and team meetings?',
    sectorHref: '/services/training-rooms/care-training-venue/',
    sectorLinkText: 'care training venue',
    published: '2026-10-05',
  },
  {
    slug: 'livv-housing-group',
    name: 'Livv Housing Group',
    shortName: 'Livv Housing Group',
    logo: 150,
    sector: 'housing',
    kind: 'venue',
    title: "Livv Housing Group Case Study | Maggie O'Neill Centre",
    description:
      "Livv Housing Group has used the Maggie O'Neill Centre for over 14 years: leadership training, department meetings, company-wide training and overflow rooms.",
    h1: 'Livv Housing Group: 14 years of training and meetings',
    tagline: "Whatever the booking, we're here for all of it.",
    line: 'Over 14 years of training, meetings and company-wide programmes.',
    lede: "Livv Housing Group has booked the Maggie O'Neill Centre for over 14 years. Its teams use us for just about everything, from aspiring leaders training to department meetings, company-wide training over weeks and months, and a backup room when their own conference rooms are full.",
    glance: [
      { term: 'Who', detail: 'Livv Housing Group, a housing association in Knowsley.' },
      { term: 'With us', detail: 'Over 14 years.' },
      { term: 'What they run here', detail: 'Aspiring leaders training, department meetings and company-wide training.' },
      { term: 'And when the office is full', detail: 'A backup venue when their own conference rooms are booked.' },
    ],
    sections: [
      {
        eyebrow: 'How they use us',
        heading: "What does Livv Housing Group use the Maggie O'Neill Centre for?",
        points: [
          'Aspiring leaders training, for people growing into leadership roles.',
          'Meeting space for different departments, as and when they need it.',
          'Company-wide training, run over weeks and months.',
          'A backup venue when the conference rooms at their own office are booked out.',
        ],
      },
      {
        eyebrow: 'The backup room',
        heading: 'Why use a venue when you have your own meeting rooms?',
        paragraphs: [
          "Even with conference rooms of your own, there are weeks when everything's booked. With a venue you already know, a meeting can move here without anyone learning a new building or a new way of booking, and parking is free when they arrive.",
        ],
      },
      {
        eyebrow: '14 years on',
        heading: 'What do 14 years of bookings look like?',
        paragraphs: [
          "Fourteen years is a lot of training days. Programmes have come and gone and teams have changed, and the bookings have kept coming, from programmes that run for months to a single meeting that needed a room.",
          "Whatever Livv needs, we're here for all of it.",
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your organisation?',
      points: [
        'One venue for training, meetings and the overflow.',
        'Programmes that run for weeks or months, booked with one venue.',
        'A room for a single meeting when your own are full, subject to availability.',
        "In the borough, so your spend stays in Knowsley and funds Maggie's Meals.",
      ],
    },
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove', 'hub', 'auditorium'],
    roomsHeading: 'Which rooms can your teams use?',
    sectorHref: '/services/training-rooms/council-training-venue/',
    sectorLinkText: 'council and public sector training',
    published: '2026-10-05',
  },
  {
    slug: 'libraries-connected',
    name: 'Libraries Connected',
    shortName: 'Libraries Connected',
    sector: 'virtual-office',
    kind: 'virtual-office',
    title: "Libraries Connected Case Study | Maggie O'Neill Centre",
    description:
      "Libraries Connected is a London charity that has used the Maggie O'Neill Centre's virtual office address for 2 years. Your address doesn't need to be local.",
    h1: 'Libraries Connected: a London charity with a Liverpool address',
    tagline: "Your address doesn't need to be local.",
    line: 'A London charity, using our virtual office address for 2 years.',
    lede: "Libraries Connected is a charity based in London. For 2 years, it has used the Maggie O'Neill Centre as its registered address, and we've handled all of its post and parcels.",
    glance: [
      { term: 'Who', detail: 'Libraries Connected, a charity based in London.' },
      { term: 'With us', detail: '2 years.' },
      { term: 'What they use', detail: 'Our address as their registered address, with all post and parcels handled.' },
      { term: 'Why us', detail: 'Our values lined up with theirs.' },
    ],
    sections: [
      {
        eyebrow: 'Why us',
        heading: 'Why did a London charity choose a Liverpool address?',
        paragraphs: [
          "Libraries Connected needed a virtual address for the charity. When they looked, they found a provider whose values lined up with their own. The Maggie O'Neill Centre is a registered charity too, and what they pay funds Maggie's Meals and community support in Knowsley.",
          "Being at the other end of the country doesn't matter. A registered address doesn't have to be near you. It has to be handled well.",
        ],
      },
      {
        eyebrow: 'How we look after it',
        heading: 'How do we handle their post?',
        points: [
          'Every letter and parcel that arrives for them is logged in our mail management software.',
          'We work with their team so they can always see what has arrived.',
          'Items are forwarded on, as they ask.',
          "It's been a pleasure handling it all for them.",
        ],
      },
      {
        eyebrow: 'The proof',
        heading: 'Does your registered address need to be local?',
        paragraphs: [
          "No. Libraries Connected is in London, and we're in Liverpool. What matters is that your post is in safe hands, and that you can see what's arrived without being here.",
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your organisation?',
      points: [
        "A registered address that doesn't depend on where you're based.",
        "Post and parcels logged, so your team can see what's arrived.",
        `Plans from ${formatPrice(virtualOffice.from)} a month. ${virtualOffice.terms}`,
        "A charity address, so your fee funds community work in Knowsley.",
      ],
    },
    sectorHref: '/services/virtual-office/',
    sectorLinkText: 'virtual office plans',
    published: '2026-10-05',
  },
  {
    slug: 'alder-hey',
    name: "Alder Hey Children's Hospital",
    shortName: 'Alder Hey',
    logo: 164,
    sector: 'nhs',
    kind: 'venue',
    title: "Alder Hey Case Study: NHS Staff Training | Maggie O'Neill Centre",
    description:
      "Alder Hey's Sunflower House has trained its staff at the Maggie O'Neill Centre for over a year, and other Alder Hey teams have followed.",
    h1: 'Alder Hey: training Sunflower House staff, and the teams that followed',
    tagline: 'When a venue does a good job, word gets around.',
    line: 'Over a year of staff training for Sunflower House, and other Alder Hey teams too.',
    lede: "Sunflower House at Alder Hey Children's Hospital has been coming to the Maggie O'Neill Centre for over a year to train all of its staff. Other Alder Hey departments and teams now come here too, for the very same reasons.",
    glance: [
      { term: 'Who', detail: "Alder Hey Children's Hospital: Sunflower House, and other departments and teams." },
      { term: 'With us', detail: 'Over a year.' },
      { term: 'What they run here', detail: 'Training for all Sunflower House staff.' },
      { term: 'Why they stay', detail: 'Rooms set up the same way every time, the right amenities, and a team that flexes to what they need.' },
    ],
    sections: [
      {
        eyebrow: 'What they needed',
        heading: 'What did Sunflower House need from a training venue?',
        paragraphs: [
          'Sunflower House needed a venue where it could train all of its staff. NHS training days are planned around busy rotas, so the venue has to be ready when people arrive, with nothing to sort out before the session can start.',
        ],
      },
      {
        eyebrow: 'How we host it',
        heading: 'Why does Sunflower House keep coming back?',
        points: [
          'The room is set up the same way every time, so trainers and staff know exactly what to expect.',
          'The right amenities are in place: the screen ready, tea and coffee in the room, WiFi, and free parking for staff travelling in.',
          'We work to be flexible and accommodating, whatever the day needs.',
          'Hosts are on site all day, so anything that comes up is sorted quickly.',
        ],
      },
      {
        eyebrow: 'Word gets around',
        heading: 'Why do other Alder Hey teams book here too?',
        paragraphs: [
          'Other Alder Hey departments and teams now come to the Maggie O\u2019Neill Centre for the very same reasons. When a venue does a good job, word gets around.',
          "We love having Alder Hey with us. It's a good feeling to know we're providing a space in Knowsley for staff doing such important work.",
        ],
      },
    ],
    takeaways: {
      heading: 'What could this look like for your NHS team?',
      points: [
        'A room set up the same way every time, so your training days are predictable.',
        'Invoices to your trust, with PO numbers welcome.',
        'Free parking for staff travelling in.',
        'Fully accessible on the ground floor, with an accessible toilet.',
      ],
    },
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove', 'auditorium'],
    roomsHeading: 'Which rooms suit NHS training?',
    sectorHref: '/services/training-rooms/nhs-training-venue/',
    sectorLinkText: 'NHS training venue',
    published: '2026-10-05',
  },
];

export const caseStudyPath = (c: CaseStudy) => `/case-studies/${c.slug}/`;
