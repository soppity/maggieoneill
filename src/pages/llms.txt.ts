// /llms.txt, generated from facts.ts on every build so it never drifts from the site (SEO spec 5.1).
// Based on docs/seo-files/llms.txt.
import type { APIRoute } from 'astro';
import { address, booking, contact, hours, lastYear, parking, reviews, site, virtualOffice } from '../data/facts';

const u = (path: string) => `${site.url}${path}`;
const plans = virtualOffice.plans.map((p) => `£${p.price}`);
const planList = `${plans.slice(0, -1).join(', ')} and ${plans.at(-1)}`;

export const GET: APIRoute = () => {
  const body = `# ${site.name}

> The ${site.name} is a charity-run training, meeting and event venue in Huyton, near Liverpool (${address.street}, ${address.postcode}), and a virtual office provider. A host meets every group at the door, rooms are set before you arrive, tea and coffee are served in the room, every room has a screen with AirPlay and HDMI, and parking is free. Profits fund Maggie's Meals and community support in Knowsley. Registered charity ${site.charityNumber}.

Key facts:
- Phone ${contact.phone}. Text or WhatsApp ${contact.text}.
- Open ${hours.summary}. ${hours.extra}
- ${parking.summary}.
- ${reviews.count} Google reviews (${reviews.asOf.split(' ').slice(1).join(' ')}). In the last year: ${lastYear.roomsHired} rooms hired, ${lastYear.businessesServed} businesses served, ${lastYear.mealsAccessed} people accessed Maggie's Meals.
- Used by care providers, the NHS and primary care networks, Knowsley Council, schools, and fostering and adoption teams (Adoption in Merseyside, Knowsley Fostering, Foster4).
- Virtual office plans: ${planList} a month. Call answering add-on £${virtualOffice.callAnswering.price} a month.
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
- [Virtual office near Liverpool](${u('/services/virtual-office/')}): registered office, director's service address, business address and mail handling, from £${virtualOffice.from} a month
- [Call answering](${u('/services/virtual-office/call-answering/')}): £${virtualOffice.callAnswering.price} a month. Calls answered, messages taken, put through or summarised and sent to you
- [For accountants](${u('/services/virtual-office/accountants/')}): 15% off for referred clients and one login for all client post

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
