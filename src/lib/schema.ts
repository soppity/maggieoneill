// JSON-LD @graph builders (SEO spec section 4), based on docs/seo-files/schema-sitewide.jsonld.
// Every value comes from src/data/facts.ts. No aggregateRating or review markup for our own reviews.
import { address, contact, hours, sameAs, site } from '../data/facts';
import { images } from '../data/images';

const id = (frag: string) => `${site.url}/#${frag}`;
const logoUrl = `${site.url}/logo/mobtc-badge-icon.png`;

export type Node = Record<string, unknown>;

export function sitewideNodes(): Node[] {
  const venue: Node = {
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': id('venue'),
    name: site.name,
    alternateName: site.alternateNames,
    url: `${site.url}/`,
    image: [images[1].src, images[44].src, images[105].src],
    logo: logoUrl,
    description:
      'Hosted training, meeting and event rooms in Huyton, near Liverpool. A host meets every group, rooms are set before you arrive, tea and coffee are included and parking is free.',
    telephone: contact.phoneIntl,
    address: { '@id': id('address') },
    parentOrganization: { '@id': id('org') },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.schema.days,
        opens: hours.schema.opens,
        closes: hours.schema.closes,
      },
    ],
    publicAccess: true,
    areaServed: ['Huyton', 'Knowsley', 'Liverpool', 'Merseyside'],
    amenityFeature: [
      'Free on-site parking',
      'Free WiFi',
      'Screens with AirPlay and HDMI in every room',
      'Tea and coffee included',
      'Step-free access',
      'Accessible parking',
      'Accessible toilet',
      'Quiet room',
    ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contact.phoneIntl,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'en',
      },
      {
        '@type': 'ContactPoint',
        telephone: contact.textIntl,
        contactType: 'customer service',
        description: 'Text or WhatsApp',
        areaServed: 'GB',
        availableLanguage: 'en',
      },
    ],
  };
  venue.hasMap = address.mapsUrl;
  if (address.geo) {
    venue.geo = { '@type': 'GeoCoordinates', latitude: address.geo.lat, longitude: address.geo.lng };
  }

  return [
    {
      '@type': 'NGO',
      '@id': id('org'),
      name: site.name,
      alternateName: site.alternateNames,
      url: `${site.url}/`,
      logo: { '@type': 'ImageObject', url: logoUrl, width: 1024, height: 1024 },
      description:
        "A charity-run training, meeting and event venue and virtual office provider in Huyton, near Liverpool. Profits fund Maggie's Meals and community support in Knowsley.",
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'Charity Commission for England and Wales',
        value: site.charityNumber,
      },
      telephone: contact.phoneIntl,
      address: { '@id': id('address') },
      sameAs,
    },
    {
      '@type': 'PostalAddress',
      '@id': id('address'),
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postcode,
      addressCountry: address.country,
    },
    venue,
    {
      '@type': 'WebSite',
      '@id': id('website'),
      name: site.name,
      alternateName: site.shortName,
      url: `${site.url}/`,
      inLanguage: 'en-GB',
      publisher: { '@id': id('org') },
    },
  ];
}

export function webPageNode(opts: {
  url: string;
  name: string;
  description: string;
  about?: string;
  dateModified?: string;
  image?: string;
  type?: string;
}): Node {
  const node: Node = {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': id('website') },
    about: { '@id': opts.about ?? id('venue') },
  };
  if (opts.dateModified) node.dateModified = opts.dateModified;
  if (opts.image) node.primaryImageOfPage = { '@type': 'ImageObject', url: opts.image };
  return node;
}

export function breadcrumbNode(url: string, trail: { name: string; url: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: t.url })),
  };
}

export function faqNode(url: string, faqs: { q: string; a: string }[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function graph(nodes: Node[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export interface OfferInput {
  name: string;
  price: number;
  description: string;
  unit?: 'MONTH' | 'HOUR' | 'DAY';
}

const offerNode = (o: OfferInput, url: string): Node => ({
  '@type': 'Offer',
  name: o.name,
  description: o.description,
  url,
  price: o.price,
  priceCurrency: 'GBP',
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price: o.price,
    priceCurrency: 'GBP',
    unitText: o.unit ?? 'MONTH',
  },
});

// A Service for a page (SEO spec 4, page-specific nodes). Offers only where a price is published.
export function serviceNode(opts: {
  url: string;
  name: string;
  serviceType: string;
  description: string;
  provider?: 'org' | 'venue';
  areaServed?: string[];
  audience?: string;
  offers?: OfferInput[];
  catalogName?: string;
}): Node {
  const node: Node = {
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { '@id': id(opts.provider ?? 'org') },
    areaServed: (opts.areaServed ?? ['Liverpool', 'Merseyside']).map((name) => ({ '@type': 'Place', name })),
  };
  if (opts.audience) node.audience = { '@type': 'Audience', audienceType: opts.audience };
  if (opts.offers?.length === 1 && !opts.catalogName) node.offers = offerNode(opts.offers[0], opts.url);
  else if (opts.offers?.length) {
    node.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: opts.catalogName ?? opts.name,
      itemListElement: opts.offers.map((o) => offerNode(o, opts.url)),
    };
  }
  return node;
}

// A room as a Place inside the venue (SEO spec 4: training hub, meeting rooms, events).
// maximumAttendeeCapacity only where a capacity is confirmed in facts.ts.
export function roomPlaceNode(room: { slug: string; name: string; capacity: Record<string, number | undefined> }, image?: string): Node {
  const node: Node = {
    '@type': 'Place',
    '@id': `${site.url}/#room-${room.slug}`,
    name: `The ${room.name} at the ${site.name}`,
    containedInPlace: { '@id': id('venue') },
    amenityFeature: ['Screen with AirPlay and HDMI', 'Free WiFi', 'Tea and coffee included'].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
  };
  const caps = Object.values(room.capacity).filter((n): n is number => typeof n === 'number');
  if (caps.length) node.maximumAttendeeCapacity = Math.max(...caps);
  if (image) node.image = image;
  return node;
}
