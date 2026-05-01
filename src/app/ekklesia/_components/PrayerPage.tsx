/* Shared layout primitives for the ekklesia legal/info pages.
   Keeps each page file lean while preserving the Byzantine treatment. */
import Link from 'next/link';
import React from 'react';

export function Cross() {
  return (
    <div
      className="text-3xl text-[#c9a96e] text-center mb-2"
      style={{ fontFamily: 'var(--font-cinzel), serif' }}
    >
      ✛
    </div>
  );
}

export function PageHeader({
  title,
  updated,
  langSwitch,
}: {
  title: string;
  updated?: string;
  langSwitch?: React.ReactNode;
}) {
  return (
    <>
      {langSwitch ? (
        <div
          className="text-right text-[10px] tracking-[0.16em] mb-[-12px]"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          {langSwitch}
        </div>
      ) : null}
      <Cross />
      <p
        className="text-center text-[22px] tracking-[0.18em] text-[#c9a96e] m-0"
        style={{ fontFamily: 'var(--font-cinzel), serif' }}
      >
        EKKLESIA
      </p>
      <p
        className="text-center text-base italic text-[#7a6040] mt-1.5"
        style={{ fontFamily: 'var(--font-garamond), serif' }}
      >
        Comunitatea parohiei tale
      </p>
      <hr className="border-0 border-t-[0.5px] border-[#3a2a14] w-20 mx-auto my-9" />
      <h1
        className="text-center text-2xl md:text-[28px] tracking-[0.08em] text-[#c9a96e] mb-1.5"
        style={{ fontFamily: 'var(--font-cinzel), serif' }}
      >
        {title}
      </h1>
      {updated ? (
        <p
          className="text-center text-sm italic text-[#7a6040] mb-8"
          style={{ fontFamily: 'var(--font-garamond), serif' }}
        >
          {updated}
        </p>
      ) : null}
    </>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[14px] tracking-[0.18em] uppercase text-[#c9a96e] mt-10 mb-3"
      style={{ fontFamily: 'var(--font-cinzel), serif' }}
    >
      {children}
    </h2>
  );
}

export function Body({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="prose-content text-[#b08050] text-base leading-relaxed"
      style={{ fontFamily: 'var(--font-garamond), serif' }}
    >
      {children}
    </div>
  );
}

export function LangSwitch({
  active,
}: {
  active: 'ro' | 'en';
}) {
  return (
    <>
      <Link
        href="/ekklesia/privacy"
        className={`ml-3 ${active === 'ro' ? 'text-[#c9a96e]' : 'text-[#7a6040]'}`}
      >
        RO
      </Link>
      <Link
        href="/ekklesia/privacy/en"
        className={`ml-3 ${active === 'en' ? 'text-[#c9a96e]' : 'text-[#7a6040]'}`}
      >
        EN
      </Link>
    </>
  );
}
