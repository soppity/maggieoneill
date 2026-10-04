// Guides under /blog/ (Blueprint 02 · Site map). Virtual office guides first, then training guides.
// A guide appears in lists only once `published` is set, so links never point at a page that isn't built yet.
// Legal wording in virtual office guides must be checked against gov.uk before publishing.

export interface Guide {
  slug: string;
  title: string;
  stream: 'virtual-office' | 'training';
  summary: string;
  image: number;
  published?: string; // ISO date
  updated?: string; // ISO date, only when the content really changes
}

export const guides: Guide[] = [
  {
    slug: 'home-address-companies-house',
    title: 'How to keep your home address off Companies House',
    stream: 'virtual-office',
    summary: 'Which addresses the public register shows, how to replace your home address with a business one, and what to do about older filings.',
    image: 29,
    published: '2026-10-04',
  },
  {
    slug: 'registered-office-vs-business-address',
    title: 'Registered office vs business address',
    stream: 'virtual-office',
    summary: 'The difference between a registered office, a business address and a director’s service address.',
    image: 26,
    published: '2026-10-04',
  },
  {
    slug: 'virtual-office-limited-company',
    title: 'Can a limited company use a virtual office?',
    stream: 'virtual-office',
    summary: 'What Companies House accepts as a registered office, and when a virtual office address works for a limited company.',
    image: 6,
    published: '2026-10-04',
  },
  {
    slug: 'change-registered-office-address',
    title: 'How to change your registered office address',
    stream: 'virtual-office',
    summary: 'Moving your registered office to a new address, step by step, and who else to tell.',
    image: 18,
    published: '2026-10-04',
  },
  {
    slug: 'virtual-office-vs-home-address',
    title: 'Virtual office vs home address vs coworking',
    stream: 'virtual-office',
    summary: 'Comparing the three ways to give a small business an address, on cost, privacy and what each one includes.',
    image: 1,
    published: '2026-10-04',
  },
  {
    slug: 'planning-a-training-day',
    title: 'Planning a training day',
    stream: 'training',
    summary: 'A checklist for booking the room, the layout, the timings and the people.',
    image: 44,
  },
  {
    slug: 'training-room-layouts',
    title: 'Choosing a training room layout',
    stream: 'training',
    summary: 'Classroom, U-shape, cabaret or boardroom: which layout suits your session.',
    image: 92,
  },
  {
    slug: 'social-value-venue-hire',
    title: 'Social value in venue booking',
    stream: 'training',
    summary: 'How your choice of venue can count towards social value in procurement.',
    image: 110,
  },
];

export const guidePath = (g: Guide) => `/blog/${g.slug}/`;
export const publishedGuides = (stream?: Guide['stream']) => guides.filter((g) => g.published && (!stream || g.stream === stream));
export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug)!;
