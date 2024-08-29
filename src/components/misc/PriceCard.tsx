"use client";

import Link from 'next/link';
import React, { useState } from 'react'

export default function PriceCard({ title, body, price, footnotes }: { title: string; body: React.JSX.Element; price: string; footnotes?: string[]}) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg-tokyo-background-night p-3 text-center flex flex-col md:h-full">
            <h3 className="text-tokyo-blue font-bold text-xl">{title}</h3>
            <div className="my-3 text-sm text-justify">
                {body}
            </div>
            { footnotes?.map((note, i) => <p key={i} className="text-xs text-justify text-tokyo-comment">{note}</p>) }
            <div className="mt-auto">
                <div className={show ? 'block' : 'hidden'}>
                    <p className="text-sm text-justify mt-3 font-bold">contact me for orders:</p>
                    <ul className="list-none text-justify space-y-1 ml-2 mt-2">
                        <li><span className="mr-6">󰇮</span><Link className="text-tokyo-blue font-bold" href="mailto:mihnea.dev@gmail.com">mihnea.dev@gmail.com</Link></li>
                        <li><span className="mr-3">𝕏</span> <Link className="text-tokyo-blue font-bold" href="https://x.com/mihneamanolache">@mihneamanolache</Link></li>
                        <li><span className="mr-4">󰊤</span> <Link className="text-tokyo-blue font-bold" href="https://github.com/mihneamanolache">mihneamanolache</Link></li>
                        <li><span className="mr-4"></span> <Link className="text-tokyo-blue font-bold" href="https://t.me/a_x_b_y_c_z">@a_x_b_y_c_z</Link></li>
                    </ul>
                </div>
            </div>
            <button onClick={() => { setShow(prev => !prev); }} className="bg-tokyo-yellow btn w-full hover:opacity-85 font-bold text-tokyo-background-night mt-5">
                {price}
            </button>
        </div>
    )
}
