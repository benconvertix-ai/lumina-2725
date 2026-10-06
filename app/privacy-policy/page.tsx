import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali di Il Pagnuozzo – Società Duegi srl.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="6 ottobre 2026"
      intro="Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa informativa descrive come trattiamo i dati personali raccolti tramite il sito www.ilpagnuozzo.com, in particolare attraverso il modulo di richiesta del campione gratuito."
      sections={[
        {
          title: 'Dati raccolti',
          paragraphs: [
            'Raccogliamo i dati che ci fornisci volontariamente: nome e cognome, nome del locale o azienda, numero WhatsApp ed eventuale messaggio. Il sito può inoltre raccogliere dati tecnici di navigazione in forma aggregata.',
          ],
        },
        {
          title: 'Finalità e base giuridica',
          paragraphs: [
            'I dati sono trattati per rispondere alla tua richiesta, inviarti il campione e ricontattarti per fini commerciali legati ai nostri prodotti. La base giuridica è il tuo consenso e l’esecuzione di misure precontrattuali richieste da te.',
          ],
        },
        {
          title: 'Conservazione',
          paragraphs: [
            'Conserviamo i dati per il tempo necessario a gestire la richiesta e il rapporto commerciale, e comunque non oltre 24 mesi dall’ultimo contatto, salvo obblighi di legge.',
          ],
        },
        {
          title: 'Comunicazione dei dati',
          paragraphs: [
            'I dati non vengono diffusi. Possono essere comunicati a fornitori di servizi tecnici (hosting, strumenti di comunicazione) che agiscono come responsabili del trattamento.',
          ],
        },
        {
          title: 'I tuoi diritti',
          paragraphs: [
            'Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione od opposizione al trattamento, portabilità dei dati e revocare il consenso, scrivendo ai contatti indicati sopra. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.',
          ],
        },
      ]}
    />
  )
}
