"use client";

import Link from 'next/link'
import React from 'react'
import MobileProxiesContent from '@/content/pages/mobile.proxies.mdx'
import PriceCard from '@/components/misc/PriceCard';
import HljsComponent from '@/components/misc/HljsComponent';

const prices: Array<{ title: string; body: JSX.Element; price: string; }> = [
    {
        title: "7 day access - shared",
        body: (
            <ul className="list-none">  
                <li>career: <Link href="https://mobile.telekom.ro/" className="text-tokyo-green">Telekom</Link></li>
                <li>bandwidth: <span className="text-tokyo-green">unlimited</span></li>
                <li>protocol: <span className="text-tokyo-green">socks/http</span></li>
                <li>location: <span className="text-tokyo-green">Romania</span></li>
                <li>IP rotation: <span className="text-tokyo-green">10 min.</span></li>
            </ul>
        ),
        price: "buy at €10"
    },
    {
        title: "28 days access - shared",
        body: (
            <ul className="list-none">  
                <li>career: <Link href="https://mobile.telekom.ro/" className="text-tokyo-green">Telekom</Link></li>
                <li>bandwidth: <span className="text-tokyo-green">unlimited</span></li>
                <li>protocol: <span className="text-tokyo-green">socks/http</span></li>
                <li>location: <span className="text-tokyo-green">Romania</span></li>
                <li>IP rotation: <span className="text-tokyo-green">10 min.</span></li>
            </ul>
        ),
        price: "buy at €30"
    },
    {
        title: "28 days access - dedicated",
        body: (
            <>
                <ul className="list-none">  
                    <li>career: <span className="text-tokyo-green">ANY</span>*</li>
                    <li>bandwidth: <span className="text-tokyo-green">TBD</span>**</li>
                    <li>protocol: <span className="text-tokyo-green">socks/http</span></li>
                    <li>location: <span className="text-tokyo-green">Romania</span></li>
                    <li>IP rotation: <span className="text-tokyo-green">CUSTOM</span></li>
                </ul>
                <p className="text-xs text-tokyo-comment mt-2">*Orange/Telekom/Digi/Vodafone</p>
                <p className="text-xs text-tokyo-comment">**Depends on the chosen career.</p>
            </>
        ),
        price: "starts at €55"
    },
];

export default function MobileProxies() {
    return (
        <HljsComponent>
            <main className="flex flex-col items-center justify-center min-h-[90vh] mt-8 px-5 md:px-5 text-center">
                <p className="text-lg"><span className="pr-4 text-tokyo-yellow">󰒢</span>web scraping tools</p>
                <h1 className="text-4xl font-bold text-tokyo-blue">4g mobile proxies</h1>
                <p className="md:text-lg">hosted by <Link className="text-tokyo-blue" href="/">mihnea.dev</Link> for other developers</p>
                <div className="text-lg mt-8 md:px-32">
                    <h2 className="text-3xl font-bold text-tokyo-blue">./pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                        { prices.map((price, index) => (
                            <PriceCard key={index} title={price.title} body={price.body} price={price.price}/>
                        )) }
                    </div>
                </div>
                <div className="text-justify space-y-5 text-lg">
                    <div className='prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-tokyo-blue prose-h2:text-center prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-p:text-tokyo-white prose-li:text-tokyo-white prose-code:text-tokyo-red prose-pre:p-0 prose-a:text-tokyo-blue' >
                        <MobileProxiesContent/>
                    </div>
                </div>
            </main>
        </HljsComponent>
    )
}

