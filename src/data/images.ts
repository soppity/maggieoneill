// Hosted images from docs/assets/image-library.md, keyed by library number.
// Only add images from the library. #142 (capacities sheet) is internal only and must never be added.
// width/height are the box each image is drawn into (object-fit: cover), so the browser can reserve space.

const base = 'https://assets.cdn.filesafe.space/4cpmA1xPfhyLI1A2OPDr/media/';

export interface LibraryImage {
  n: number;
  src: string;
  alt: string;
  orientation: 'L' | 'P' | 'S';
}

const img = (n: number, file: string, alt: string, orientation: 'L' | 'P' | 'S' = 'L'): LibraryImage => ({
  n,
  src: base + file,
  alt,
  orientation,
});

export const images: Record<number, LibraryImage> = {
  1: img(1, '6ab68335352b2c340195dbf0.webp', "The front of the Maggie O'Neill Centre in Huyton, with the free car park outside"),
  4: img(4, '6ab683353ae3da26fb60a175.webp', "The front door of the Maggie O'Neill Centre at 433 Liverpool Road, with a ramp and handrails", 'P'),
  29: img(29, '6ab683505d1647127867f5b2.webp', "Post for a virtual office client on the shelf under the neon logo at the Maggie O'Neill Centre"),
  35: img(35, '6ab6833a5d1647127867f336.webp', "The Forum meeting and training room at the Maggie O'Neill Centre, bright with a long white table"),
  43: img(43, '6ab6833b5d1647127867f362.webp', "A trainer setting up a session in the Forum at the Maggie O'Neill Centre"),
  44: img(44, '6ab6834d3ae3da26fb60a42b.webp', "The Summit training room at the Maggie O'Neill Centre set in a U-shape"),
  54: img(54, '6ab6834e1f3be2be1baf4290.webp', "The screen in the Summit at the Maggie O'Neill Centre showing AirPlay, beside a flipchart"),
  62: img(62, '6ab6834253ee44f56b33cab8.webp', "The Grove at the Maggie O'Neill Centre, with a greenery canopy over a long white table"),
  67: img(67, '6ab6833e6407f2cbe4d41ac5.webp', "The Grove at the Maggie O'Neill Centre set classroom style under the greenery canopy"),
  85: img(85, '6ab683409b248207685a6833.webp', "People chatting with drinks at a networking event in the Grove at the Maggie O'Neill Centre"),
  88: img(88, '6ab683435d1647127867f452.webp', "The Hub meeting room at the Maggie O'Neill Centre set as a boardroom"),
  92: img(92, '6ab6833d9b248207685a67b5.webp', "The Foundry training room at the Maggie O'Neill Centre set in a hollow square"),
  95: img(95, '6ab683463dbd5f2bbbcbd32e.webp', "The Pod meeting room at the Maggie O'Neill Centre, an oak table for 4 with a wall screen"),
  100: img(100, '6ab683456407f2cbe4d41bb3.webp', "Office 202, a private office at the Maggie O'Neill Centre, with a desk by the window"),
  105: img(105, '6ab683367e654f1003c2a339.webp', "Nursery staff training in the Community Room at the Maggie O'Neill Centre, sitting in a circle under festoon lights"),
  110: img(110, '6ab68344352b2c340195dd7c.webp', "Maggie's Meals volunteers in front of the stocked pantry shelves at the Maggie O'Neill Centre"),
  113: img(113, '6ab6833453ee44f56b33c8e0.webp', "A busy event in the Auditorium at the Maggie O'Neill Centre, with purple stage lighting"),
  114: img(114, '6ab683339b248207685a66a8.webp', "An audience listening to a talk in the Auditorium at the Maggie O'Neill Centre"),
  117: img(117, '6ab6833453ee44f56b33c8e6.webp', "The Auditorium at the Maggie O'Neill Centre from the back, with rows of seats facing the stage"),
  133: img(133, '6ab6834e9b248207685a6a66.webp', "Tania, a host at the Maggie O'Neill Centre, smiling in reception", 'P'),
  139: img(139, '6ab68346974a9da6eebefb38.webp', "Patrick, a host at the Maggie O'Neill Centre", 'P'),
};

export interface ClientLogo {
  n: number;
  src: string;
  name: string;
}

const logo = (n: number, file: string, name: string): ClientLogo => ({ n, src: base + file, name });

// Homepage logo strip. #154 is replaced by #159 (higher resolution AiM logo).
export const clientLogos: ClientLogo[] = [
  logo(146, '6ab91433b4d207ff9df90d31.webp', 'NHS'),
  logo(164, '6abfd23c84932298741ae973.webp', "Alder Hey Children's Hospital"),
  logo(148, '6ab914337ef452865affbc4c.webp', 'Mersey Care'),
  logo(157, '6aba5d4c4100b77e522c1168.webp', 'Central and South PCN'),
  logo(145, '6ab914337ef452865affbc5c.webp', 'Primary Care'),
  logo(149, '6ab914335597aeb9d7dd5f23.webp', 'Knowsley Council'),
  logo(160, '6abfcc3b150d6ea53db14b5e.webp', 'Foster4, Knowsley Council'),
  logo(159, '6abfcc3b7bca8cd20c342541.webp', 'Adoption in Merseyside'),
  logo(156, '6ab91432b4d207ff9df90cc1.webp', 'Amore'),
  logo(153, '6ab91432b4d207ff9df90ccd.webp', 'Alternative Futures'),
  logo(150, '6ab91433c13d4373c2bf0bbc.webp', 'Livv Housing Group'),
  logo(152, '6ab91432be703c7b3020ea60.webp', 'Knowsley Chamber'),
  logo(143, '6ab914347ef452865affbc70.webp', 'Standguide'),
  logo(144, '6ab914345597aeb9d7dd5f85.webp', 'RASASC'),
  logo(151, '6ab914325597aeb9d7dd5ee3.webp', 'ADDvanced Solutions'),
];

export const imageHost = 'https://assets.cdn.filesafe.space';
