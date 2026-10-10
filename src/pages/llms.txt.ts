// /llms.txt, generated from facts.ts on every build so it never drifts from the site (SEO spec 5.1).
// Based on docs/seo-files/llms.txt.
import type { APIRoute } from 'astro';
import { guidePath, publishedGuides } from '../data/guides';
import { accessibility, accountantPartners, address, booking, contact, formatPrice, rooms, hours, lastYear, listNames, maggiesMeals, parking, rateGroups, reviews, site, virtualOffice } from '../data/facts';

const u = (path: string) => `${site.url}${path}`;
const rates = rateGroups()
  .map((g) => `${listNames(g.rooms.map((r) => `the ${r.name}`))} ${formatPrice(g.hour)} an hour or ${formatPrice(g.day)} a day`)
  .join('; ');
const planList = virtualOffice.plans.map((p) => `${p.name} £${p.price}`).join(' or ');

export const GET: APIRoute = () => {
  const body = `# ${site.name}

> The ${site.name} is a charity-run training, meeting and event venue in Huyton, near Liverpool (${address.street}, ${address.postcode}), and a virtual office provider. Hosts are on site all day, rooms are set before you arrive, tea and coffee are served in the room, every meeting and training room has a screen with Mac and PC wireless casting and HDMI, and parking is free. Profits fund Maggie's Meals and community support in Knowsley. Registered charity ${site.charityNumber}.

Key facts:
- Phone ${contact.phone}. Text or WhatsApp ${contact.text}. Email ${contact.email}.
- Open ${hours.summary}. ${hours.extra}
- ${parking.summary}.
- ${accessibility.accessLine} Ground-floor rooms: Auditorium, Community Room, Forum, Grove and Pod.
- ${reviews.count} Google reviews (${reviews.asOf.split(' ').slice(1).join(' ')}). In the last year: ${lastYear.roomsHired} rooms hired, ${lastYear.businessesServed} businesses served, ${lastYear.mealsAccessed} people accessed Maggie's Meals.
- Used by care providers, the NHS and primary care networks, Knowsley Council, schools, and fostering and adoption teams (Adoption in Merseyside, Knowsley Fostering, Foster4).
- Room hire, everything included: ${rates}. ${rooms.filter((r) => r.prices?.hourFrom).map((r) => `The ${r.name} from ${formatPrice(r.prices!.hourFrom!)} an hour.`).join(' ')}
- Maggie's Meals: ${maggiesMeals.schedule}.
- Virtual office plans: ${planList} a month, plus Director's Cover (director's service address) for £${virtualOffice.directorsCover.price} a month on either plan. Call answering add-on £${virtualOffice.callAnswering.price} a month plus ${virtualOffice.callAnswering.perResponse} per AI response.
- Book or check availability: ${booking.url}

## Rooms and venue hire
- [Training rooms](${u('/services/training-rooms/')}): hosted training rooms near Liverpool, layouts, capacities and what's included
- [Oliver McGowan training venue](${u('/services/training-rooms/oliver-mcgowan-training-venue/')}): accessible Auditorium for Tier 2 days, up to 60 cabaret with wheelchair space, adjustable lighting, a quiet room, and accessible parking outside
- [Care training venue](${u('/services/training-rooms/care-training-venue/')}): mandatory training for support workers (TMVA, safety intervention, hoist, medication, first aid)
- [Fostering and adoption training venue](${u('/services/training-rooms/fostering-adoption-training-venue/')}): calm rooms for preparation courses, with every borough welcome
- [NHS training venue](${u('/services/training-rooms/nhs-training-venue/')}): clinical and admin training days and monthly meetings
- [Councils, schools and public sector](${u('/services/training-rooms/council-training-venue/')}): training, INSET days and social value
- [Meeting rooms](${u('/services/meeting-rooms/')}): from the Pod (boardroom for 4, £20 an hour or £120 a day) upwards
- [Events and conferences](${u('/services/event-space-business-and-community/')}): the Auditorium
- [What's included](${u('/whats-included/')})

## Virtual office
- [Virtual office near Liverpool](${u('/services/virtual-office/')}): registered office, director's service address, business address and mail handling, from £${virtualOffice.from} a month, for businesses in Merseyside and across the UK
- [Call answering](${u('/services/virtual-office/call-answering/')}): ${virtualOffice.callAnswering.summary}
- [For accountants](${u('/services/virtual-office/accountants/')}): ${accountantPartners.discount}% off for referred clients and one login for all client post
${publishedGuides('virtual-office').map((g) => `- [${g.title}](${u(guidePath(g))}): ${g.summary}\n`).join('')}
## About
- [About the ${site.name}](${u('/about/')})
- [Case studies](${u('/case-studies/')})
- [Reviews](${u('/reviews/')})
- [Social value](${u('/social-value/')})
- [Visit and directions](${u('/visit/')})
- [Contact](${u('/contact/')})

## Optional
- [Guides](${u('/blog/')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
