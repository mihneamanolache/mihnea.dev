import "./globals.css";
import localFont from '@next/font/local'
import { Navigation } from "@/components/ui/Navigation";
import { CookiesProvider } from 'next-client-cookies/server';
import "highlight.js/styles/tokyo-night-dark.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        locale: "en_US",
        type: "website",
        url: "https://mihnea.dev",
        title: "mihnea.dev - software engineer",
        description: "Welcome to mihnea's personal website. Here you can find information about the projects I'm working on, my blog posts and more.",
    },
    authors: {
        name: "Mihnea Manolache",
        url: "https://mihnea.dev",
    },
    keywords: ["software engineer", "web scraping", "web development", "mobile proxies", "mihnea manolache"],
    robots: {
        follow: true,
        index: true,
    },

}

const ubuntuNerd = localFont({
    src: [
        {
            path: '../../public/fonts/UbuntuSansMonoNerdFont-Regular.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts/UbuntuSansMonoNerdFontMono-Bold.ttf',
            weight: '700'
        }
    ],
    variable: '--font-ubuntu-nerd'
});

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <CookiesProvider>
            <html className="dark" lang="en">
                <body className={` ${ ubuntuNerd.className } h-screen text-xs`}>
                    <Navigation/>
                    <div className="overflow-scroll h-full pb-10">
                        {children}
                    </div>
                </body>
            </html>
        </CookiesProvider>
    );
}
