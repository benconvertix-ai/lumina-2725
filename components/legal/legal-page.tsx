import { ContactCard } from './contact-card'

export type LegalSection = { title: string; paragraphs: string[] }

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}) {
  return (
    <div className="bg-[#f6ede1]">
      <article className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <header className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Informazioni legali
          </p>
          <h1 className="text-balance font-serif text-4xl font-bold text-espresso md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Ultimo aggiornamento: {updated}</p>
          <p className="mt-6 text-pretty leading-relaxed text-espresso/90">{intro}</p>
        </header>

        <ContactCard />

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 font-serif text-2xl font-bold text-espresso">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-pretty leading-relaxed text-espresso/90">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
