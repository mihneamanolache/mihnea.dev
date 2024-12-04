"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import HljsComponent from '@/components/misc/HljsComponent';
import KeyloggerContent from '@/content/pages/keylogger.mdx'
import { type ListBlobResult } from '@vercel/blob';

export default function KeyloggerJs() {
    const [response, setResponse] = useState<ListBlobResult | null>(null);
    const fetchBlobs = async () => {
        const response = await fetch('/api/keylogger');
        const json = await response.json() as ListBlobResult;
        setResponse(json);
    }
    useEffect(() => {
        void fetchBlobs();
    }, []);

    return (
        <HljsComponent>
            <main className="flex flex-col items-center justify-center min-h-[90vh] mt-8 px-5 md:px-5 text-center">
                <div className="not-prose">
                <p className="text-lg"><span className="pr-4 text-tokyo-yellow">󰒃</span>security tools</p>
                <h1 className="text-4xl font-bold text-tokyo-blue">Keylogger.js</h1>
                <p className="md:text-lg">a webhook based <Link className="text-tokyo-blue" href="https://github.com/mihneamanolache/keylogger.js/tree/main">keylogger</Link> for ethical hackers</p>
                </div>
                <div className='prose mt-8 max-w-[80vw] md:max-w-[50vw] dark:prose-invert prose-headings:text-center prose-headings:text-tokyo-blue text-justify space-y-5 text-lg prose-pre:max-w-[100vh] prose-code:overflow-hidden prose-pre:p-0 prose-pre:m-0 prose-code:p-0 prose-code:m-0 prose-code:max-v-[100vh]' >
                    <KeyloggerContent />
                    <h2 className="text-3xl mt-8 font-bold text-tokyo-blue" id="entries">./entries</h2>
                    <p>Download the captured keystrokes from the following links:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {response?.blobs.map((blob) => (
                            <a 
                                key={blob.pathname} 
                                href={blob.downloadUrl} 
                                className="text-xl text-tokyo-red"
                            >
                                {blob.pathname}
                            </a>
                        ))}
                    </div>
                </div>
            </main>
        </HljsComponent>
    )
}
