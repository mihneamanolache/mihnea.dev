import { type NextRequest, NextResponse } from 'next/server';
import dns from 'node:dns/promises';
import { put, list, type ListBlobResult } from '@vercel/blob';

export async function GET(_: NextRequest) {
    const response: ListBlobResult = await list();
    return NextResponse.json(
        response,
        { status: 200 }
    );
}

export async function POST(req: NextRequest) {
    try {
        const referer: string | null = req.headers.get("Referer");
        if ( !referer ) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const refererUrl: URL = new URL(referer);
        const domain: string = refererUrl.hostname;

        const txtArray: string[][] = await dns.resolveTxt(domain);
        const txt: string = txtArray.flat().join("");
        if ( !txt.includes("i-love-mihnea-dev") ) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const body: string = await req.text();
        const decoded: string = atob(body);

        await put(domain, decoded, { access: "public" });

        return NextResponse.json(
            { message: "Webhook received" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
