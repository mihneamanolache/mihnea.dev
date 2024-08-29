"use client";

import Link from 'next/link'
import React from 'react'
import MobileProxiesContent from '@/content/pages/mobile.proxies.mdx'
import PriceCard from '@/components/misc/PriceCard';
import HljsComponent from '@/components/misc/HljsComponent';

const prices: { title: string; body: React.JSX.Element; price: string; footnotes?: string[]}[] = [
    {
        title: "7 day access - shared",
        body: (
            <ul className="list-none">  
                <li>career: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="https://mobile.telekom.ro/" className="text-tokyo-green">Telekom</Link></li>
                <li>bandwidth: &nbsp;&nbsp;<span className="text-tokyo-green">unlimited</span></li>
                <li>protocol: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">socks/http</span></li>
                <li>location: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">Romania</span></li>
                <li>IP rotation: <span className="text-tokyo-green">10 min.</span></li>
            </ul>
        ),
        price: "buy at €10"
    },
    {
        title: "28 days access - shared",
        body: (
            <ul className="list-none">  
                <li>career: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="https://mobile.telekom.ro/" className="text-tokyo-green">Telekom</Link></li>
                <li>bandwidth: &nbsp;&nbsp;<span className="text-tokyo-green">unlimited</span></li>
                <li>protocol: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">socks/http</span></li>
                <li>location: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">Romania</span></li>
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
                    <li>career: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">ANY</span>*</li>
                    <li>bandwidth: &nbsp;&nbsp;<span className="text-tokyo-green">TBD</span>**</li>
                    <li>protocol: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">socks/http</span></li>
                    <li>location: &nbsp;&nbsp;&nbsp;<span className="text-tokyo-green">Romania</span></li>
                    <li>IP rotation: <span className="text-tokyo-green">CUSTOM</span></li>
                </ul>
            </>
        ),
        price: "starts at €50",
        footnotes: [
            "*Orange/Telekom/Digi/Vodafone",
            "**Depends on the chosen career."
        ]
    },
];

export default function MobileProxies() {
    return (
        <HljsComponent>
            <main className="flex flex-col items-center justify-center min-h-[90vh] mt-8 px-5 md:px-5 text-center">
                <div className="not-prose">
                <p className="text-lg"><span className="pr-4 text-tokyo-yellow">󰒢</span>web scraping tools</p>
                <h1 className="text-4xl font-bold text-tokyo-blue">4g mobile proxies</h1>
                <p className="md:text-lg">hosted by <Link className="text-tokyo-blue" href="/">mihnea.dev</Link> for other developers</p>
                <div className="text-lg mt-8 md:px-32">
                    <h2 className="text-3xl font-bold text-tokyo-blue">./pricing</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
                        { prices.map((price, index) => (
                            <PriceCard key={index} title={price.title} body={price.body} price={price.price} footnotes={price.footnotes}/>
                        )) }
                    </div>
                </div>
                </div>
                <div className='prose max-w-[80vw] md:max-w-[50vw] dark:prose-invert prose-headings:text-center prose-headings:text-tokyo-blue text-justify space-y-5 text-lg prose-pre:max-w-[50vh] prose-code:overflow-hidden prose-pre:p-0 prose-pre:m-0 prose-code:p-0 prose-code:m-0 prose-code:max-v-[50vh]' >
                    <MobileProxiesContent/>
                </div>
            </main>
        </HljsComponent>
    )
}
