import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Termini e condizioni',
  description: 'Termini e condizioni di utilizzo del sito di Il Pagnuozzo – Società Duegi srl.',
}

export default function TerminiPage() {
  return (
    <LegalPage
      title="Termini e condizioni"
      updated="6 ottobre 2026"
      intro="L’utilizzo del sito www.ilpagnuozzo.com comporta l’accettazione dei presenti termini e condizioni."
      sections={[
        {
          title: 'Oggetto del sito',
          paragraphs: [
            'Il sito presenta i prodotti Il Pagnuozzo e consente agli operatori professionali del settore HORECA e della distribuzione di richiedere un campione gratuito e di essere ricontattati.',
          ],
        },
        {
          title: 'Campione gratuito',
          paragraphs: [
            'La richiesta del campione è gratuita e senza impegno. Il campione è riservato a operatori professionali e la sua disponibilità è soggetta a verifica da parte nostra.',
          ],
        },
        {
          title: 'Proprietà intellettuale',
          paragraphs: [
            'Testi, immagini, loghi e marchi presenti sul sito sono di proprietà di Società Duegi srl o dei rispettivi titolari e non possono essere riprodotti senza autorizzazione scritta.',
          ],
        },
        {
          title: 'Limitazione di responsabilità',
          paragraphs: [
            'Ci impegniamo a mantenere le informazioni del sito corrette e aggiornate, ma non garantiamo l’assenza di errori o interruzioni del servizio.',
          ],
        },
        {
          title: 'Legge applicabile',
          paragraphs: [
            'I presenti termini sono regolati dalla legge italiana. Per ogni controversia è competente il Foro di Napoli.',
          ],
        },
      ]}
    />
  )
}
