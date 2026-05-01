import type { Metadata } from 'next';
import { PageHeader, H2, Body } from '../_components/PrayerPage';

export const metadata: Metadata = {
  title: 'Suport — Ekklesia',
  description: 'Cum poți obține ajutor pentru aplicația Ekklesia.',
};

export default function Support() {
  return (
    <>
      <PageHeader title="Suport" />

      <Body>
        <p>
          Pentru orice problemă tehnică, întrebare despre folosirea aplicației sau
          cerere de ștergere a datelor, scrie-ne și răspundem în maxim 48 de ore
          (de luni până vineri).
        </p>

        <H2>Contact direct</H2>
        <p>
          Email:{' '}
          <a
            className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]"
            href="mailto:mihnea.manolache@yahoo.com"
          >
            mihnea.manolache@yahoo.com
          </a>
        </p>

        <H2>Întrebări frecvente</H2>

        <p className="font-medium text-[#c9a96e]">Cum mă autentific?</p>
        <p>
          Aplicația folosește autentificare prin SMS — niciodată parole. Introdu
          numărul tău de telefon și vei primi un cod de 6 cifre. Codul este valabil
          5 minute.
        </p>

        <p className="font-medium text-[#c9a96e]">De ce trebuie să aprobe preotul rugăciunile mele?</p>
        <p>
          Comunitatea parohială este moderată duhovnicește. Preotul (sau diaconul,
          unde e cazul) verifică fiecare cerere înainte de a o face vizibilă, pentru
          a păstra atmosfera de pravilă a parohiei. Ai acceptul aproape întotdeauna
          în câteva ore.
        </p>

        <p className="font-medium text-[#c9a96e]">Am pierdut accesul la numărul vechi de telefon. Ce fac?</p>
        <p>
          Scrie-ne la adresa de mai sus cu numele afișat și parohia, și actualizăm
          contul tău cu noul număr după verificare.
        </p>

        <p className="font-medium text-[#c9a96e]">Cum îmi șterg contul?</p>
        <p>
          Trimite un email cu titlul „Ștergere cont" de la adresa asociată contului
          (sau confirmă prin SMS la numărul asociat). Ștergem toate datele tale în
          maxim 30 de zile.
        </p>

        <p className="font-medium text-[#c9a96e]">De ce nu primesc notificări?</p>
        <p>
          Verifică în Setări → Notificări → Ekklesia că permisiunea este acordată.
          Pe Android, dezactivează „Battery Saver" pentru aplicație. Notificările de
          rugăciune zilnică se programează la ora aleasă în profilul tău.
        </p>

        <p className="font-medium text-[#c9a96e]">Aplicația nu se deschide / se închide singură.</p>
        <p>
          Reinstalează aplicația (datele tale rămân pe server). Dacă problema persistă,
          trimite-ne un email cu modelul de telefon și versiunea de iOS / Android și
          îți răspundem cu un patch în următoarea actualizare.
        </p>

        <H2>Pentru preoți</H2>
        <p>
          Dacă ești preot și vrei să înființezi o parohie pe Ekklesia, scrie-ne. Îți
          oferim sprijin pentru configurarea inițială (cod de invitație, calendar
          liturgic, prima predică) și ne asigurăm că totul e gata înainte de prima
          slujbă.
        </p>
      </Body>
    </>
  );
}
