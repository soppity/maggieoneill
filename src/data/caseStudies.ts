// Case studies (Blueprint page 12, PROJECT_NOTES). Logos only for now: no contacts, no client photos, no quotes until supplied.
// Only what the owner has confirmed about each client goes in `glance` and `line`. Everything else on a story page
// describes how the Maggie O'Neill Centre hosts that kind of session, not what the client does.
// Central and South PCN is held back: the owner asked for "Primary Care Networks", never a single PCN (Oct 2026).

export type CaseSector = 'care' | 'nhs';

export const caseSectors: { key: CaseSector; label: string }[] = [
  { key: 'care', label: 'Care' },
  { key: 'nhs', label: 'NHS' },
];

export interface CaseStudy {
  slug: string;
  name: string;
  shortName: string;
  logo: number;
  sector: CaseSector;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  // One line for cards and the hub.
  line: string;
  lede: string;
  glance: { term: string; detail: string }[];
  needHeading: string;
  need: string[];
  rooms: string[];
  roomsHeading: string;
  sectorHref: string;
  sectorLinkText: string;
  published: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'alder-hey',
    name: "Alder Hey Children's Hospital",
    shortName: 'Alder Hey',
    logo: 164,
    sector: 'nhs',
    title: "Alder Hey Case Study: NHS Staff Training | Maggie O'Neill Centre",
    description:
      "Alder Hey Children's Hospital runs staff training for Sunflower House at the Maggie O'Neill Centre in Huyton, 30 seconds from the M57. How we host it.",
    h1: 'Alder Hey: staff training for Sunflower House',
    tagline: 'NHS training, close to home.',
    line: 'Staff training for Sunflower House.',
    lede: "Alder Hey Children's Hospital runs staff training for Sunflower House at the Maggie O'Neill Centre in Huyton.",
    glance: [
      { term: 'Who', detail: "Alder Hey Children's Hospital, an NHS children's hospital in Liverpool." },
      { term: 'What they run here', detail: 'Staff training for Sunflower House.' },
      { term: 'Sector', detail: 'NHS' },
      { term: 'Where', detail: "The Maggie O'Neill Centre, Huyton, 30 seconds from the M57." },
    ],
    needHeading: 'What does NHS staff training need from a venue?',
    need: [
      'NHS teams need a venue they can justify. It has to be easy to reach, with parking for staff travelling in, and invoices that work the way NHS finance teams need them to.',
      'On the day, the room has to be ready when the trainer arrives, so the session starts on time and nobody loses learning time to setting up.',
    ],
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove', 'auditorium'],
    roomsHeading: 'Which rooms suit NHS training?',
    sectorHref: '/services/training-rooms/nhs-training-venue/',
    sectorLinkText: 'NHS training venue',
    published: '2026-10-05',
  },
  {
    slug: 'amore',
    name: 'Amore',
    shortName: 'Amore',
    logo: 156,
    sector: 'care',
    title: "Amore Case Study: Care Training Venue | Maggie O'Neill Centre",
    description:
      "Amore runs all of its mandatory training for agency staff at the Maggie O'Neill Centre in Huyton. How we host it, and the rooms that suit care training.",
    h1: 'Amore: every mandatory training day, in one place',
    tagline: 'Mandatory training, in rooms built for it.',
    line: 'All their mandatory training for agency staff.',
    lede: "Amore runs all of its mandatory training for agency staff at the Maggie O'Neill Centre in Huyton.",
    glance: [
      { term: 'Who', detail: 'Amore, a care provider.' },
      { term: 'What they run here', detail: 'All of their mandatory training for agency staff.' },
      { term: 'Sector', detail: 'Care' },
      { term: 'Where', detail: "The Maggie O'Neill Centre, Huyton, 30 seconds from the M57." },
    ],
    needHeading: 'What does mandatory training for agency staff need?',
    need: [
      'Mandatory training keeps agency staff ready to work, so every date has to run on time. The room has to be set before the trainer arrives, with space for the practical parts of the day.',
      'Staff come in from across the area, so the venue has to be easy to reach, with free parking and tea and coffee on hand all day.',
    ],
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove'],
    roomsHeading: 'Which rooms suit care training?',
    sectorHref: '/services/training-rooms/care-training-venue/',
    sectorLinkText: 'care training venue',
    published: '2026-10-05',
  },
  {
    slug: 'afg',
    name: 'Alternative Futures Group',
    shortName: 'AFG',
    logo: 153,
    sector: 'care',
    title: "AFG Case Study: TMVA & Epilepsy Training | Maggie O'Neill Centre",
    description:
      "Alternative Futures Group (AFG) runs TMVA and epilepsy training at the Maggie O'Neill Centre in Huyton, and holds its learning team meetings here too.",
    h1: 'AFG: TMVA, epilepsy training and learning team meetings',
    tagline: 'Practical training and team meetings, under one roof.',
    line: 'TMVA, epilepsy training and learning team meetings.',
    lede: "Alternative Futures Group (AFG) runs TMVA and epilepsy training at the Maggie O'Neill Centre in Huyton, and holds its learning team meetings in the building.",
    glance: [
      { term: 'Who', detail: 'Alternative Futures Group (AFG), a care provider.' },
      { term: 'What they run here', detail: 'TMVA training, epilepsy training and learning team meetings.' },
      { term: 'Sector', detail: 'Care' },
      { term: 'Where', detail: "The Maggie O'Neill Centre, Huyton, 30 seconds from the M57." },
    ],
    needHeading: 'What do TMVA and epilepsy training need from a venue?',
    need: [
      'TMVA training is practical, so it needs clear floor space and a room set the way the trainer wants it. Epilepsy training and team meetings need a calm, focused room.',
      'Using one venue for training and meetings means the same hosts, the same parking and the same way of booking, every time.',
    ],
    rooms: ['summit', 'forum', 'community-room', 'foundry', 'grove', 'hub'],
    roomsHeading: 'Which rooms suit care training and team meetings?',
    sectorHref: '/services/training-rooms/care-training-venue/',
    sectorLinkText: 'care training venue',
    published: '2026-10-05',
  },
];

export const caseStudyPath = (c: CaseStudy) => `/case-studies/${c.slug}/`;
