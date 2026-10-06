import Link from 'next/link'
import { Building2, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { company, legalLinks } from '@/lib/company'
import { LogoBadge } from './logo'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from './social-icons'

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/perche-il-pagnuozzo', label: 'Perché Il Pagnuozzo' },
  { href: '/a-chi-e-dedicato', label: 'A chi è dedicato' },
  { href: '/a-chi-e-dedicato#form', label: 'Richiedi il campione' },
]

const socials = [
  {
    label: 'LinkedIn',
    Icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/giuseppe-rippa-bb8a4b27/',
  },
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/ilpagnuozzo.campania/?hl=it',
  },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/IlPagnuozzo' },
  { label: 'YouTube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@ilpagnuozzo.campania' },
  {
    label: 'TikTok',
    Icon: TiktokIcon,
    href: 'https://www.tiktok.com/@ilpagnuozzo.campania?lang=it-IT',
  },
]

const iconClass = 'mt-0.5 size-4 shrink-0 text-brand'
const contactLinkClass =
  'flex items-start gap-3 rounded-sm transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40'

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand">{children}</h2>
  )
}

export function Footer() {
  return (
    <footer>
      <section className="bg-gradient-to-r from-brand-dark via-brand to-[#e07e1b] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center">
          <h2 className="max-w-xl text-balance font-serif text-3xl font-bold leading-tight md:text-5xl">
            Pronti a portare il vero Pagnuozzo nel tuo locale?
          </h2>
          <Link
            href="/a-chi-e-dedicato#form"
            className="inline-flex shrink-0 rounded-full bg-white px-7 py-3 font-bold text-brand shadow-md transition-transform hover:-translate-y-0.5"
          >
            {'→ Richiedi il campione'}
          </Link>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoBadge className="size-28 text-[34px]" />
          <p className="mt-4 font-serif text-sm font-bold text-espresso">Il Pagnuozzo</p>
          <p className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
            {"L'Autentico Panuozzo Napoletano per il tuo locale"}
          </p>
        </div>

        <div>
          <ColumnTitle>Contatti</ColumnTitle>
          <ul className="space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">
            <li className="flex items-start gap-3">
              <Building2 className={iconClass} aria-hidden="true" />
              <span>
                <span className="block font-semibold text-espresso">{company.name}</span>
                <span className="block">P.IVA: {company.vat}</span>
              </span>
            </li>
            <li>
              <a
                href={company.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
              >
                <MapPin className={iconClass} aria-hidden="true" />
                <span>
                  {company.address}
                  <span className="sr-only"> (apri in Google Maps, nuova scheda)</span>
                </span>
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className={contactLinkClass}>
                <Phone className={iconClass} aria-hidden="true" />
                <span>
                  <span className="sr-only">Telefono / WhatsApp: </span>
                  {company.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={company.emailHref} className={contactLinkClass}>
                <Mail className={iconClass} aria-hidden="true" />
                <span className="break-all">{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={company.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClass}
              >
                <Globe className={iconClass} aria-hidden="true" />
                <span>
                  {company.websiteDisplay}
                  <span className="sr-only"> (nuova scheda)</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ColumnTitle>Navigazione</ColumnTitle>
          <ul className="space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-espresso hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ColumnTitle>Seguici</ColumnTitle>
          <ul className="flex flex-nowrap items-center gap-1.5">
            {socials.map(({ label, Icon, href }) => (
              <li key={label} className="shrink-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (si apre in una nuova scheda)`}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{'© 2026 Il Pagnuozzo – Tutti i diritti riservati'}</p>
          <nav aria-label="Link legali" className="flex flex-wrap gap-x-2">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex gap-x-2">
                {i > 0 && <span aria-hidden="true">·</span>}
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
