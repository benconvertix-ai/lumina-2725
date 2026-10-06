import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Informazioni sull’uso dei cookie sul sito di Il Pagnuozzo.',
}

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="6 ottobre 2026"
      intro="Questa pagina spiega cosa sono i cookie e come vengono utilizzati sul sito www.ilpagnuozzo.com."
      sections={[
        {
          title: 'Cosa sono i cookie',
          paragraphs: [
            'I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell’utente per far funzionare correttamente le pagine o raccogliere informazioni sulla navigazione.',
          ],
        },
        {
          title: 'Cookie tecnici',
          paragraphs: [
            'Utilizziamo cookie tecnici strettamente necessari al funzionamento del sito. Per questi cookie non è richiesto il consenso.',
          ],
        },
        {
          title: 'Statistiche',
          paragraphs: [
            'Il sito utilizza strumenti di analisi in forma anonima e aggregata per capire come viene usato e migliorarlo. Questi strumenti non consentono di identificare il singolo utente.',
          ],
        },
        {
          title: 'Contenuti di terze parti',
          paragraphs: [
            'I link ai nostri profili social (Instagram, Facebook, YouTube, TikTok, LinkedIn) portano a siti esterni, che applicano le proprie politiche sui cookie.',
          ],
        },
        {
          title: 'Gestione dei cookie',
          paragraphs: [
            'Puoi gestire o eliminare i cookie dalle impostazioni del tuo browser. Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità del sito.',
          ],
        },
      ]}
    />
  )
}
