import type { Metadata } from 'next';
import { PageHeader, H2, Body, LangSwitch } from '../_components/PrayerPage';

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate — Ekklesia',
  description: 'Ce date colectează Ekklesia, de ce și cum sunt protejate. GDPR-compliant.',
};

export default function PrivacyRO() {
  return (
    <>
      <PageHeader
        title="Politica de Confidențialitate"
        updated="Ultima actualizare: 1 mai 2026"
        langSwitch={<LangSwitch active="ro" />}
      />

      <Body>
        <p>
          Ekklesia („aplicația") este o aplicație mobilă pentru parohii ortodoxe creată
          pentru a sprijini viața duhovnicească a comunității. Această politică explică
          ce date colectăm, de ce le colectăm și cum le păstrăm.
        </p>

        <H2>1. Date colectate</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Numărul de telefon</strong> — pentru autentificare prin SMS (cod de o singură folosință). Furnizor: Twilio Inc.</li>
          <li><strong>Numele afișat</strong> — pentru a apărea în directorul parohiei.</li>
          <li><strong>Email (opțional)</strong> — doar dacă alegi să-l adaugi în profil.</li>
          <li><strong>Apartenența la parohie</strong> — codul parohiei tale.</li>
          <li><strong>Cererile de rugăciune trimise</strong> — vizibile parohiei numai după binecuvântarea preotului.</li>
          <li><strong>Identificator de notificări push</strong> — pentru anunțuri liturgice și aducere aminte.</li>
        </ul>

        <H2>2. Ce NU colectăm</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Locația ta</li>
          <li>Lista de contacte</li>
          <li>Istoricul de navigare web</li>
          <li>Date biometrice</li>
          <li>Date de plată sau bancare</li>
          <li>Identificatori publicitari (IDFA / GAID)</li>
        </ul>

        <H2>3. De ce colectăm aceste date</H2>
        <p>
          Doar pentru funcționarea aplicației: autentificare, comunitate parohială,
          notificări liturgice. Nu folosim datele tale pentru reclame, profilare
          comportamentală sau revânzare către terți.
        </p>

        <H2>4. Furnizori terți</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Supabase Inc.</strong> — bază de date și autentificare. Servere în Frankfurt, Germania (UE). <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="https://supabase.com/privacy" target="_blank" rel="noopener">Politica Supabase</a></li>
          <li><strong>Twilio Inc.</strong> — trimiterea codurilor SMS. <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="https://www.twilio.com/legal/privacy" target="_blank" rel="noopener">Politica Twilio</a></li>
          <li><strong>Apple / Google</strong> — livrarea notificărilor push (APNs / FCM). Datele de notificare nu sunt accesibile direct acestor companii.</li>
        </ul>

        <H2>5. Drepturile tale (GDPR)</H2>
        <p>Ai dreptul să:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Soliciți o copie a datelor tale</li>
          <li>Soliciți corectarea sau ștergerea datelor</li>
          <li>Retragi consimțământul</li>
          <li>Te opui prelucrării</li>
          <li>Reclami la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
        </ul>

        <H2>6. Păstrarea datelor</H2>
        <p>
          Datele tale sunt păstrate atâta timp cât contul tău este activ. La cererea ta,
          ștergem toate datele asociate contului în termen de 30 de zile.
        </p>

        <H2>7. Securitate</H2>
        <p>
          Toate comunicațiile folosesc HTTPS / TLS. Parolele nu sunt stocate
          (autentificare doar prin SMS OTP). Politici de securitate la nivel de rând
          (Row-Level Security) restricționează accesul la datele parohiei tale.
        </p>

        <H2>8. Minori</H2>
        <p>
          Aplicația nu este destinată copiilor sub 13 ani. Nu colectăm cu bună știință
          date de la minori sub 13 ani fără consimțământul părinților.
        </p>

        <H2>9. Modificări</H2>
        <p>
          Vom anunța orice modificare semnificativă a acestei politici prin notificare
          în aplicație și printr-un email (dacă ai unul în profil).
        </p>

        <H2>10. Contact</H2>
        <p>
          Pentru orice întrebare legată de date personale:{' '}
          <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="mailto:mihnea.manolache@yahoo.com">mihnea.manolache@yahoo.com</a>
        </p>
      </Body>
    </>
  );
}
