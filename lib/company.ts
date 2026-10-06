export const company = {
  name: 'Società Duegi srl',
  address: 'Via Giulio Cesare 55, Somma Vesuviana, Napoli, 80049, Italia',
  mapsHref:
    'https://maps.google.com/?q=Via+Giulio+Cesare+55,+Somma+Vesuviana,+Napoli,+80049,+Italia',
  vat: '00000000000',
  phoneDisplay: '+39 370 164 4530',
  phoneHref: 'tel:+393701644530',
  email: 'info@ilpagnuozzo.com',
  emailHref: 'mailto:info@ilpagnuozzo.com',
  websiteDisplay: 'www.ilpagnuozzo.com',
  websiteHref: 'https://www.ilpagnuozzo.com',
} as const

export const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/termini-e-condizioni', label: 'Termini e condizioni' },
] as const
