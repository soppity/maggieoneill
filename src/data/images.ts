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
  3: img(3, '6ab683353ae3da26fb60a180.webp', "The front of the Maggie O'Neill Centre in Huyton, with the purple logo and lettering on the cladding under a blue sky"),
  4: img(4, '6ab683353ae3da26fb60a175.webp', "The front door of the Maggie O'Neill Centre at 433 Liverpool Road, with a ramp and handrails", 'P'),
  6: img(6, '6ab68339352b2c340195dc59.webp', "Reception at the Maggie O'Neill Centre, with living-wall panels, chairs and a slatted oak ceiling"),
  18: img(18, '6ab683479b248207685a6949.webp', "The purple neon logo on the oak slat wall in reception at the Maggie O'Neill Centre"),
  26: img(26, '6ab683516407f2cbe4d41d7f.webp', "A stack of client post on the shelf under the neon logo at the Maggie O'Neill Centre"),
  29: img(29, '6ab683505d1647127867f5b2.webp', "Post for a virtual office client on the shelf under the neon logo at the Maggie O'Neill Centre"),
  35: img(35, '6ab6833a5d1647127867f336.webp', "The Forum meeting and training room at the Maggie O'Neill Centre, bright with a long white table"),
  43: img(43, '6ab6833b5d1647127867f362.webp', "A trainer setting up a session in the Forum at the Maggie O'Neill Centre"),
  44: img(44, '6ab6834d3ae3da26fb60a42b.webp', "The Summit training room at the Maggie O'Neill Centre set in a U-shape"),
  48: img(48, '6ab6834c974a9da6eebefbe7.webp', "The Summit training room at the Maggie O'Neill Centre, set in a U-shape, with prints on the walls and windows along one side"),
  54: img(54, '6ab6834e1f3be2be1baf4290.webp', "The screen in the Summit at the Maggie O'Neill Centre showing AirPlay, beside a flipchart"),
  62: img(62, '6ab6834253ee44f56b33cab8.webp', "The Grove at the Maggie O'Neill Centre, with a greenery canopy over a long white table"),
  65: img(65, '6ab6833e3ae3da26fb60a24a.webp', "The Grove at the Maggie O'Neill Centre, with its greenery canopy, colourful prints and a long white table"),
  66: img(66, '6ab683426407f2cbe4d41b4f.webp', "The Grove meeting room at the Maggie O'Neill Centre, looking along the table past the prints to the doorway, under the greenery canopy"),
  67: img(67, '6ab6833e6407f2cbe4d41ac5.webp', "The Grove at the Maggie O'Neill Centre set classroom style under the greenery canopy"),
  85: img(85, '6ab683409b248207685a6833.webp', "People chatting with drinks at a networking event in the Grove at the Maggie O'Neill Centre"),
  88: img(88, '6ab683435d1647127867f452.webp', "The Hub meeting room at the Maggie O'Neill Centre set as a boardroom"),
  92: img(92, '6ab6833d9b248207685a67b5.webp', "The Foundry training room at the Maggie O'Neill Centre set in a hollow square"),
  95: img(95, '6ab683463dbd5f2bbbcbd32e.webp', "The Pod meeting room at the Maggie O'Neill Centre, an oak table for 4 with a wall screen"),
  101: img(101, '6ab683456407f2cbe4d41b97.webp', "Office 202 at the Maggie O'Neill Centre set with two desks and two chairs by the window"),
  102: img(102, '6ab683459b248207685a68cb.webp', "A desk, chair and drawer unit by the window in Office 202 at the Maggie O'Neill Centre"),
  104: img(104, '6ab683453dbd5f2bbbcbd2f2.webp', "A desk and chair in front of the window in Office 202 at the Maggie O'Neill Centre, with a plant on the sill"),
  100: img(100, '6ab683456407f2cbe4d41bb3.webp', "Office 202, a private office at the Maggie O'Neill Centre, with a desk by the window"),
  105: img(105, '6ab683367e654f1003c2a339.webp', "Nursery staff training in the Community Room at the Maggie O'Neill Centre, sitting in a circle under festoon lights"),
  111: img(111, '6ab683446407f2cbe4d41b83.webp', "The Maggie's Meals pantry shelves at the Maggie O'Neill Centre, stocked with tins, packets and household goods"),
  112: img(112, '6ab68344974a9da6eebefb00.webp', "Tins and packets on the Maggie's Meals shelves at the Maggie O'Neill Centre"),
  // Maggie's Meals, supplied by the owner, Oct 2026.
  180: img(180, '6ac4bc7422bc27f58f90dd17.jpeg', "Maggie's Meals at the Maggie O'Neill Centre"),
  // Supplied by the owner, Oct 2026.
  181: img(181, '6ac905b4bd6bb710ca11850b.webp', "A full Auditorium at the Maggie O'Neill Centre seen from the back, with the audience seated for a talk and LED lights under the stage"),
  182: img(182, '6ac905b4a8f849292352cd26.webp', "The sound mixing desk in the Auditorium at the Maggie O'Neill Centre"),
  183: img(183, '6ac905b4157ff968cecca0ea.webp', "A breakout and networking space at the Maggie O'Neill Centre"),
  184: img(184, '6ac905b4c478ac55356d3c50.webp', "The entrance to the Maggie O'Neill Centre"),
  185: img(185, '6ac905b4a8f849292352cd20.webp', "The free car park at the Maggie O'Neill Centre on a sunny day"),
  186: img(186, '6ac905b4c478ac55356d3c51.webp', "The free 50-space car park outside the Maggie O'Neill Centre in the sunshine"),
  110: img(110, '6ab68344352b2c340195dd7c.webp', "Maggie's Meals volunteers in front of the stocked pantry shelves at the Maggie O'Neill Centre"),
  113: img(113, '6ab6833453ee44f56b33c8e0.webp', "A busy event in the Auditorium at the Maggie O'Neill Centre, with purple stage lighting"),
  114: img(114, '6ab683339b248207685a66a8.webp', "An audience listening to a talk in the Auditorium at the Maggie O'Neill Centre"),
  117: img(117, '6ab6833453ee44f56b33c8e6.webp', "The Auditorium at the Maggie O'Neill Centre from the back, with rows of seats facing the stage"),
  118: img(118, '6ab683333dbd5f2bbbcbd02d.webp', "The Auditorium at the Maggie O'Neill Centre from the stage, with the lectern and microphone facing rows of seats"),
  132: img(132, '6ab683449b248207685a68ab.webp', "The kitchen at the Maggie O'Neill Centre, next to the accessible toilet on the Auditorium floor"),
  133: img(133, '6ab6834e9b248207685a6a66.webp', "Tania, Community Manager at the Maggie O'Neill Centre, smiling in reception", 'P'),
  // Owner, Oct 2026: #133 and #134 don't load on the site, so the host card uses #137 (shown on the virtual office page).
  134: img(134, '6ab6834f53ee44f56b33cc5b.webp', "Tania, Community Manager at the Maggie O'Neill Centre, smiling in reception", 'P'),
  137: img(137, '6ab6834f6407f2cbe4d41d1f.webp', "Tania, Community Manager at the Maggie O'Neill Centre, chatting in reception", 'P'),
  158: img(158, '6abfcbcc02569bee7cb0c764.webp', "The accessible toilet at the Maggie O'Neill Centre, with grab rails, a fold-down rail and an emergency pull cord"),
  // All Nations, supplied by the owner (Oct 2026), not from the image library. Not viewable from the build container,
  // so the alt text is general until the owner describes each photo.
  170: img(170, '6ac3927e7d735ea2a1378388.webp', "People sharing food and traditional dress at All Nations at the Maggie O'Neill Centre"),
  171: img(171, '6ac3927e2c1c51a2ac6489b0.webp', "Guests celebrating at the All Nations event at the Maggie O'Neill Centre"),
  172: img(172, '6ac3927e2c1c51a2ac6489a6.webp', "Food from around the world at All Nations at the Maggie O'Neill Centre"),
  173: img(173, '6ac3927e22bc27f58f70416d.webp', "People in traditional dress at All Nations at the Maggie O'Neill Centre"),
  174: img(174, '6ac3927e7d735ea2a1378392.webp', "The building full of people at All Nations at the Maggie O'Neill Centre"),
  // Patrick, higher resolution and less cropped (owner, Oct 2026). Replaces #139 on the team cards.
  179: img(179, '6ac7959ad5f4a8af43a9bd8c.webp', "Patrick, Director of the Maggie O'Neill Centre", 'P'),
  // Maggie O'Neill, supplied by the owner, Oct 2026 (white background cropped out). For her story on the About page.
  175: img(175, '6ac794afd5f4a8af43a9a261.webp', "Maggie O'Neill, the woman the Maggie O'Neill Centre is named after", 'P'),
  // Pastor John and Sherri, supplied by the owner, Oct 2026. For the story on the About page.
  176: img(176, '6ac78753bbad531ac82db3f2.jpg', "Pastor John and Sherri, who moved their family to Huyton to start the church"),
  // Volunteers, supplied by the owner, Oct 2026.
  177: img(177, '6ac78cde8c077584b4f684b4.webp', "Liam, a volunteer at the Maggie O'Neill Centre", 'P'),
  178: img(178, '6ac78cde195f9172eded45be.webp', "Bill, a volunteer at the Maggie O'Neill Centre", 'P'),
  139: img(139, '6ab68346974a9da6eebefb38.webp', "Patrick, Director of the Maggie O'Neill Centre", 'P'),
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

// Logos used outside the homepage strip, such as on case studies. Supplied by the owner, Oct 2026.
export const otherLogos: ClientLogo[] = [logo(165, '6ac3c5e3b12649a51224098f.webp', 'Libraries Connected')];

// School logos, for the councils, schools and public sector page only (PROJECT_NOTES).
export const schoolLogos: ClientLogo[] = [
  logo(161, '6abbef1e7f8e19690f51e5e8.webp', 'Meadow Park Primary School'),
  logo(162, '6abbef1e7f8e19690f51e5e3.webp', 'Knowsley Central School'),
  logo(163, '6abbef1e12c0bdec2cb4fd3f.webp', 'Alt Bridge School'),
];

export const imageHost = 'https://assets.cdn.filesafe.space';

export const logoByNumber = (n: number) => [...clientLogos, ...otherLogos, ...schoolLogos].find((l) => l.n === n);
