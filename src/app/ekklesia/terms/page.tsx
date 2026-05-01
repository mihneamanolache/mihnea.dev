import type { Metadata } from 'next';
import { PageHeader, H2, Body } from '../_components/PrayerPage';

export const metadata: Metadata = {
  title: 'Termeni și condiții — Ekklesia',
  description: 'Termenii de utilizare a aplicației Ekklesia.',
};

export default function Terms() {
  return (
    <>
      <PageHeader
        title="Termeni și Condiții"
        updated="Ultima actualizare: 1 mai 2026"
      />

      <Body>
        <p>
          Bine ai venit în Ekklesia. Folosind aplicația, ești de acord cu termenii
          de mai jos. Sunt scriși scurt, fără jargon juridic.
        </p>

        <H2>1. Scopul aplicației</H2>
        <p>
          Ekklesia este o aplicație pentru parohii ortodoxe — un spațiu duhovnicesc
          de rugăciune, comuniune și informare liturgică. Nu este o rețea socială,
          o platformă de mesagerie sau un substitut pentru participarea la slujbele
          parohiei.
        </p>

        <H2>2. Cont și acces</H2>
        <p>
          Pentru a folosi aplicația, te autentifici cu numărul de telefon. Răspunzi
          de păstrarea acestui număr — folosirea contului tău de către altcineva
          care îți are telefonul este responsabilitatea ta.
        </p>

        <H2>3. Conduită</H2>
        <p>
          Așteptăm de la membri o purtare creștinească — prin cuvânt, ton și
          conținut. Cererile de rugăciune și postările care contrazic învățătura
          ortodoxă, defăimează persoane, propagă ură sau ies din rânduiala parohiei
          pot fi refuzate de preot sau șterse de administratorii parohiei. Repetarea
          unor astfel de comportamente poate duce la suspendarea contului.
        </p>

        <H2>4. Conținut public-domain și patristic</H2>
        <p>
          Predicile patristice (Sf. Ioan Gură de Aur, Sf. Vasile cel Mare etc.) sunt
          de domeniu public. Predicile parohiei aparțin preotului sau persoanei
          desemnate ca autor. Nu redistribuim conținut parohial fără acord.
        </p>

        <H2>5. Donații</H2>
        <p>
          Această versiune a aplicației nu procesează donații. Dacă în viitor vom
          adăuga acest modul, termenii vor fi actualizați și vei fi notificat înainte
          de prima utilizare.
        </p>

        <H2>6. Disponibilitate</H2>
        <p>
          Ne străduim ca aplicația să fie disponibilă neîntrerupt, dar nu garantăm
          un nivel de serviciu specific. Mentenanța, actualizările sau probleme la
          furnizori terți (Supabase, Twilio, Apple, Google) pot cauza întreruperi.
        </p>

        <H2>7. Modificări ale termenilor</H2>
        <p>
          Putem actualiza acești termeni atunci când facem schimbări semnificative
          în aplicație. Vei fi notificat în aplicație și prin email (dacă ai unul).
          Continuarea folosirii după notificare înseamnă acceptarea noilor termeni.
        </p>

        <H2>8. Limitarea responsabilității</H2>
        <p>
          Ekklesia este oferit „așa cum este". Nu suntem responsabili pentru daune
          indirecte sau pierderi de date dincolo de prevederile legale aplicabile
          în România și UE.
        </p>

        <H2>9. Lege aplicabilă</H2>
        <p>
          Acești termeni sunt guvernați de legea română. Eventualele dispute se
          soluționează prin dialog direct sau, în lipsă, în instanțele din București.
        </p>

        <H2>10. Contact</H2>
        <p>
          Pentru întrebări despre acești termeni:{' '}
          <a
            className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]"
            href="mailto:mihnea.manolache@yahoo.com"
          >
            mihnea.manolache@yahoo.com
          </a>
        </p>
      </Body>
    </>
  );
}
