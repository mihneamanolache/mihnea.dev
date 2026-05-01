import { Cinzel, EB_Garamond } from 'next/font/google';
import Link from 'next/link';
import type { Metadata } from 'next';

const cinzel = Cinzel({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
});

const garamond = EB_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
});

export const metadata: Metadata = {
  title: 'Ekklesia — Comunitatea parohiei tale',
  description: 'O aplicație mobilă pentru parohii ortodoxe. Rugăciuni, predici, calendar liturgic, comunitate.',
  openGraph: {
    locale: 'ro_RO',
    type: 'website',
    url: 'https://mihnea.dev/ekklesia',
    title: 'Ekklesia — Comunitatea parohiei tale',
    description: 'O comunitate intenționat duhovnicească pentru parohia ta. Nu o rețea socială.',
  },
};

export default function EkklesiaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${cinzel.variable} ${garamond.variable} min-h-screen`}
      style={{
        backgroundColor: '#0f0a06',
        color: '#b08050',
        fontFamily: 'var(--font-garamond), Georgia, serif',
      }}
    >
      <main className="max-w-[720px] mx-auto px-7 py-12 md:py-16">
        {children}
        <footer className="mt-16 pt-6 border-t border-[#2a1f14] text-center">
          <div className="mb-2 space-x-6 text-[10px] tracking-[0.18em]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            <Link href="/ekklesia" className="text-[#7a6040] hover:text-[#c9a96e]">ACASĂ</Link>
            <Link href="/ekklesia/privacy" className="text-[#7a6040] hover:text-[#c9a96e]">CONFIDENȚIALITATE</Link>
            <Link href="/ekklesia/terms" className="text-[#7a6040] hover:text-[#c9a96e]">TERMENI</Link>
            <Link href="/ekklesia/support" className="text-[#7a6040] hover:text-[#c9a96e]">SUPORT</Link>
          </div>
          <div className="text-[10px] tracking-[0.18em] text-[#5a4535]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
            © 2026 EKKLESIA · MIHNEA OCTAVIAN MANOLACHE
          </div>
        </footer>
      </main>
    </div>
  );
}
