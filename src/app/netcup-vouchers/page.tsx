"use client";

import React, { useState } from 'react';
import NetcupVouchersContent from '@/content/pages/netcup.vouchers.mdx';
import HljsComponent from '@/components/misc/HljsComponent';
import { type INetcupVoucher, vouchers } from '@/constants/netcup.vouchers';
import Link from 'next/link';

export default function MobileProxies() {
  const [selectedCategory, setSelectedCategory] = useState<INetcupVoucher | null>(null);

  const handleCategorySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = vouchers.find((voucher) => voucher.german_name === e.target.value) ?? null;
    setSelectedCategory(selected); // Ensure null fallback for undefined values
  };

  return (
    <HljsComponent>
      <main className="flex flex-col items-center justify-center min-h-[90vh] mt-8 px-5 md:px-5 text-center">
        <div className="not-prose">
          <p className="text-lg">
            <span className="pr-4 text-tokyo-yellow"></span>devops coupons
          </p>
          <h1 className="text-4xl font-bold text-tokyo-blue">netcup discount vouchers</h1>
          <div className="text-lg mt-8 md:px-32">
            <h2 className="text-3xl font-bold text-tokyo-blue">./select</h2>
            <select
              id="voucher-category"
              className="form-control w-full sm:w-1/2 bg-tokyo-blue text-tokyo-background-night p-3 text-center rounded font-black mt-6"
              onChange={handleCategorySelection}
            >
              <option value="">filter by type</option>
              {vouchers.map((voucher, index) => (
                <option key={index} value={voucher.german_name}>
                  {voucher.name}
                </option>
              ))}
            </select>
            {selectedCategory && (
              <div className="mb-4 p-4 rounded-md shadow-md">
                <h3 className="text-2xl font-semibold text-tokyo-blue mb-4">
                  {selectedCategory.name}
                </h3>
                <p className="mb-4">
                  Validity: <strong>{selectedCategory.validity}</strong>
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
                  {selectedCategory.codes.map((code: string, index: number) => (
                    <li key={index} className="p-2 m-1 rounded text-tokyo-background-night font-bold bg-tokyo-blue">
                      {code}
                    </li>
                  ))}
                </ul>
                <p className="mt-5">
                  <span className="text-tokyo-yellow">IMPORTANT! </span>
                  If you find a voucher that has been used, please{' '}
                  <Link href="/about" className="text-tokyo-blue">
                    contact me
                  </Link>{' '}
                  so I can remove it from the list. I will also email you a new voucher as a token of appreciation.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="prose mt-6 max-w-[80vw] md:max-w-[50vw] dark:prose-invert prose-headings:text-center prose-headings:text-tokyo-blue text-justify space-y-5 text-lg prose-pre:max-w-[50vh] prose-code:overflow-hidden prose-pre:p-0 prose-pre:m-0 prose-code:p-0 prose-code:m-0 prose-code:max-v-[50vh]">
          <NetcupVouchersContent />
        </div>
      </main>
    </HljsComponent>
  );
}

