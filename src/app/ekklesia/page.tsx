import Link from 'next/link';

const features = [
  {
    title: 'Rugăciuni ale parohiei',
    body: 'Cere o rugăciune pentru cineva drag. Toate cererile primesc binecuvântarea preotului înainte de a fi vizibile parohiei.',
  },
  {
    title: 'Calendar liturgic',
    body: 'Praznicele fixe și mobile, sfinții pomeniți, zilele de post. Suport pentru toate tradițiile ortodoxe.',
  },
  {
    title: 'Predici',
    body: 'Predicile preotului paroh, alături de predici patristice — Sf. Ioan Gură de Aur, Sf. Vasile cel Mare și alți Părinți.',
  },
  {
    title: 'Pravila personală',
    body: 'Sufletele pe care le porți în rugăciune, grupate pe categorii. Începe cu Rugăciunile Începătoare și încheie în pace.',
  },
  {
    title: 'Comuniune, nu rețea socială',
    body: 'Fără reclame, fără urmărire, fără „like-uri". Doar „suflete care se roagă" — un act de pomenire, nu o reacție.',
  },
  {
    title: 'Privacy-first',
    body: 'Datele rămân la noi (servere în Frankfurt, GDPR). Nu vindem, nu împărtășim, nu monetizăm informația ta.',
  },
];

export default function EkklesiaLanding() {
  return (
    <>
      <section className="text-center py-12 md:py-20">
        <div
          className="text-5xl md:text-6xl text-[#c9a96e]"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          ✛
        </div>
        <h1
          className="text-3xl md:text-4xl mt-4 text-[#c9a96e] tracking-[0.18em]"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          EKKLESIA
        </h1>
        <p
          className="mt-3 text-[#7a6040] italic max-w-md mx-auto"
          style={{ fontFamily: 'var(--font-garamond), serif' }}
        >
          O comunitate intenționat duhovnicească pentru parohia ta. Nu o rețea socială.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href="#"
            className="inline-block px-6 py-3.5 bg-[#1e140a] border-[0.5px] border-[#3a2a14] hover:border-[#c9a96e] rounded-md text-[11px] tracking-[0.16em] text-[#c9a96e]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            DESCARCĂ — APP STORE
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3.5 bg-[#1e140a] border-[0.5px] border-[#3a2a14] hover:border-[#c9a96e] rounded-md text-[11px] tracking-[0.16em] text-[#c9a96e]"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            DESCARCĂ — GOOGLE PLAY
          </a>
        </div>
      </section>

      <hr className="border-0 border-t-[0.5px] border-[#3a2a14] w-20 mx-auto my-9" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-[#150e07] border-[0.5px] border-[#2a1f14] rounded-md p-5"
          >
            <h3
              className="text-[13px] uppercase tracking-[0.12em] text-[#c9a96e] mb-2"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              {f.title}
            </h3>
            <p
              className="text-[15px] text-[#7a6040] leading-relaxed m-0"
              style={{ fontFamily: 'var(--font-garamond), serif' }}
            >
              {f.body}
            </p>
          </div>
        ))}
      </section>

      <hr className="border-0 border-t-[0.5px] border-[#3a2a14] w-20 mx-auto my-12" />

      <p
        className="text-center text-sm text-[#7a6040] italic"
        style={{ fontFamily: 'var(--font-garamond), serif' }}
      >
        Pentru întrebări:{' '}
        <Link
          href="/ekklesia/support"
          className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14] hover:border-[#c9a96e]"
        >
          mergi la pagina de suport
        </Link>
      </p>
    </>
  );
}
