// Navigation from the Website Blueprint (02 · Site map and navigation).
// Some targets are built later in the build order; links stay so the menu matches the agreed site map.

export interface NavLink {
  label: string;
  href: string;
}
export interface NavItem extends NavLink {
  children?: NavLink[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Training rooms',
    href: '/services/training-rooms/',
    children: [
      { label: 'All training rooms', href: '/services/training-rooms/' },
      { label: 'Oliver McGowan training venue', href: '/services/training-rooms/oliver-mcgowan-training-venue/' },
      { label: 'Care and social care', href: '/services/training-rooms/care-training-venue/' },
      { label: 'Fostering and adoption', href: '/services/training-rooms/fostering-adoption-training-venue/' },
      { label: 'NHS and primary care', href: '/services/training-rooms/nhs-training-venue/' },
      { label: 'Councils, schools and public sector', href: '/services/training-rooms/council-training-venue/' },
    ],
  },
  {
    label: 'Virtual office',
    href: '/services/virtual-office/',
    children: [
      { label: 'Plans and prices', href: '/services/virtual-office/' },
      { label: 'Call answering', href: '/services/virtual-office/call-answering/' },
      { label: 'For accountants', href: '/services/virtual-office/accountants/' },
      { label: 'Guides', href: '/blog/' },
    ],
  },
  { label: 'Meeting rooms', href: '/services/meeting-rooms/' },
  { label: 'Events', href: '/services/event-space-business-and-community/' },
  { label: 'Private offices', href: '/services/private-offices/' },
  {
    label: "Why Maggie's",
    href: '/whats-included/',
    children: [
      { label: "What's included", href: '/whats-included/' },
      { label: 'Case studies', href: '/case-studies/' },
      { label: 'Reviews', href: '/reviews/' },
      { label: 'Social value', href: '/social-value/' },
      { label: 'Meet your hosts', href: '/about/' },
      { label: "Maggie's Meals", href: '/community/' },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Rooms',
    links: [
      { label: 'Training rooms', href: '/services/training-rooms/' },
      { label: 'Meeting rooms', href: '/services/meeting-rooms/' },
      { label: 'Events and conferences', href: '/services/event-space-business-and-community/' },
      { label: 'Private offices', href: '/services/private-offices/' },
      { label: 'Virtual office in Liverpool from £20', href: '/services/virtual-office/' },
      { label: 'Call answering', href: '/services/virtual-office/call-answering/' },
    ],
  },
  {
    title: 'Sectors',
    links: [
      { label: 'Oliver McGowan training venue', href: '/services/training-rooms/oliver-mcgowan-training-venue/' },
      { label: 'Care training venue', href: '/services/training-rooms/care-training-venue/' },
      { label: 'Fostering and adoption', href: '/services/training-rooms/fostering-adoption-training-venue/' },
      { label: 'NHS training venue', href: '/services/training-rooms/nhs-training-venue/' },
      { label: 'Councils, schools and public sector', href: '/services/training-rooms/council-training-venue/' },
    ],
  },
  {
    title: "Why Maggie's",
    links: [
      { label: "What's included", href: '/whats-included/' },
      { label: 'Case studies', href: '/case-studies/' },
      { label: 'Reviews', href: '/reviews/' },
      { label: 'Social value', href: '/social-value/' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About and your hosts', href: '/about/' },
      { label: "Maggie's Meals and community", href: '/community/' },
      { label: 'Come and see it', href: '/visit/' },
      { label: 'Guides', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];
