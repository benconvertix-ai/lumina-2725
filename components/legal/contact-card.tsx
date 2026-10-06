import { company } from '@/lib/company'

const linkClass =
  'break-words font-medium text-brand underline-offset-4 hover:underline focus-visible:underline'

export function ContactCard() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: 'Titolare del trattamento', value: company.name },
    {
      label: 'Sede legale',
      value: (
        <a
          href={company.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {company.address}
          <span className="sr-only"> (apri in Google Maps, nuova scheda)</span>
        </a>
      ),
    },
    { label: 'P.IVA', value: company.vat },
    {
      label: 'Telefono / WhatsApp',
      value: (
        <a href={company.phoneHref} className={linkClass}>
          {company.phoneDisplay}
        </a>
      ),
    },
    {
      label: 'Email',
      value: (
        <a href={company.emailHref} className={linkClass}>
          {company.email}
        </a>
      ),
    },
    {
      label: 'Sito web',
      value: (
        <a
          href={company.websiteHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {company.websiteDisplay}
          <span className="sr-only"> (nuova scheda)</span>
        </a>
      ),
    },
  ]

  return (
    <section
      aria-labelledby="contact-card-title"
      className="not-prose my-8 rounded-2xl border border-brand/20 bg-white p-6 shadow-sm md:p-8"
    >
      <h2 id="contact-card-title" className="mb-5 font-serif text-xl font-bold text-espresso">
        Contatti
      </h2>
      <dl className="divide-y divide-border">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
            <dt className="shrink-0 text-sm font-semibold text-espresso sm:w-52">{label}</dt>
            <dd className="min-w-0 text-sm leading-relaxed text-muted-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
