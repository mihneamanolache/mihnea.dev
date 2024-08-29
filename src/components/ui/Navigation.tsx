"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Notifications from './Notifications';
import { useCookies } from 'next-client-cookies';
import { menuIcons, navbarPages } from '@/constants/navigation.menu';
import { getNextMenuItem } from '@/helpers/misc/navigation.handlers';
import { handleNewsletterSubmit } from '@/helpers/forms/newsletter';

const commands: Record<string, React.JSX.Element> = { 
    "help": (
        <pre>
            You can use the following commands:<br/>
            - q: close the tab<br/>
            - help: display this message<br/>
            - e/goto: navigate to a specific page<br/>
            - subscribe: subscribe to my newsletter<br/>
            <br/>
            The following keybindings are available:<br/>
            - ctrl + b: toggle menu icon<br/>
            - ctrl + h: navigate to previous page<br/>
            - ctrl + l: navigate to next page<br/>
            - shift + : (colon): toggle command line<br/>
            - escape: close search
        </pre>
    ),
    "subscribe": (
        <form className="space-x-2" onSubmit={(e) => { handleNewsletterSubmit(e); }}>
            <input type="email" placeholder="email" name="email" className="bg-gray-800 w-[30vh] text-gray-300 p-2" required />
            <button type="submit" className="bg-tokyo-blue text-tokyo-background-night p-2">SUBSCRIBE</button>
        </form>
    ),
};

const handleCommand = (event: React.FormEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>, r: React.Dispatch<React.SetStateAction<React.JSX.Element>>) => {
    if ((event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter') {
        const value = (event as React.ChangeEvent<HTMLInputElement>).target.value;
        if (value === "q") {
            window.open("about:blank", "_self")?.close()
        }
        if (value.startsWith("goto ") || value.startsWith("e ")) {
            window.location.href = value.split(" ")[1].replace(/"/g, '');
            return;
        }
        r(commands[value]);
    } 
};

const CommandBox = ({text, close}: {text: React.JSX.Element, close: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center">
            <div className="flex h-screen">
                <div className="flex flex-1 flex-col justify-center items-center">
                    <div className="border border-gray-700 bg-tokyo-background-night">
                        <div className="p-8">
                            { text }
                        </div>
                        <div className="flex mt-1">
                            <button onClick={() => { close(false); }} className="flex-1 text-sm text-center rounded-bl-lg border-t border-r border-gray-700 p-2">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NavLink = ({link, path, disabled}: {link: Record<string, string>, path: string, disabled: boolean}) => {
    return (
        <Link  aria-disabled={true} className={
            `px-2 select-none link ${path === link.path ? 'bg-tokyo-dark-gray' : ''} ${disabled ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''}`
        } href={link.path}>
            { link.title } 
        </Link>
    )
}

export const Navigation = () => {
    const cookieStore = useCookies();
    const ipCookie = cookieStore.get('ip');
    const tncCookie = cookieStore.get('tnc');

    const pathname = usePathname();

    const [search, setSearch] = useState<boolean>(false);
    const [result, setResult] = useState<React.JSX.Element>(<></>);
    const [menuIcon, setMenuIcon] = useState<number>(0);
    const [ip, setIp] = useState<string | undefined>(ipCookie);

    useEffect(() => {
        const getIP = async (): Promise<void> => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data: { ip: string } = await response.json() as { ip: string };
                cookieStore.set('ip', data.ip, { expires: new Date(Date.now() + 1000 * 60 * 5)});
                setIp(data.ip);
            } catch {
                setIp('What are you hiding?');
            }
        };
        const getIPFromWebRtc = (): void => {
            if ( ipCookie !== undefined ) return;
            const pc = new RTCPeerConnection({ iceServers: [] });
            const noop = () => {
            /* blank */
            }; 
            pc.createDataChannel('');
            pc.createOffer()
                .then(offer => pc.setLocalDescription(offer))
                .catch(() => getIP());
            pc.onicecandidate = (event) => {
                if (event.candidate && event.candidate.candidate) {
                    const candidate = event.candidate.candidate;
                    const ipMatch = /(\d{1,3}\.){3}\d{1,3}/.exec(candidate); 
                    if (ipMatch) {
                        cookieStore.set('ip', ipMatch[0], { expires: new Date(Date.now() + 1000 * 60 * 5)});
                        setIp(ipMatch[0]);
                    } else {
                        getIP()
                            .then(() => {
                                /* blank */
                            })
                            .catch((e: unknown) => {
                                console.error('Failed to get IP:', e);
                            });
                    }
                }
            };
            setTimeout(() => {
                pc.onicecandidate = noop;
                cookieStore.set('tnc', 'true', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
            }, 10000); 
        };
        getIPFromWebRtc()
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.shiftKey && event.key === ":") {
                event.preventDefault();
                setSearch(prevSearch => !prevSearch);
                setResult(<></>);
            }
            if (event.key === "Escape") {
                event.preventDefault();
                setSearch(false);
                setResult(<></>);
            }
            if (event.ctrlKey) {
                event.preventDefault(); 
                switch (event.key) {
                    case "b": {
                        setMenuIcon(prevIcon => (prevIcon + 1) % 2);
                        break;
                    }
                    case "l": {
                        if (menuIcon === 1) {
                            getNextMenuItem(pathname, 1);
                        }
                        break;
                    }
                    case "h": {
                        if (menuIcon === 1) {
                            getNextMenuItem(pathname, -1);
                        }
                        break;
                    }
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuIcon, pathname, ipCookie, cookieStore]);

    if (search) {
        return (
            <>
                <div className="sticky top-[100vh] flex select-none bg-tokyo-background-storm">
                    <div className="px-2 bg-tokyo-orange text-tokyo-background-night font-bold">
                        
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                    <input onKeyDown={(e) => { handleCommand(e, setResult); }} autoFocus={ true } type="search" placeholder="i.e.: help" className="px-2 w-[95%] outline-none bg-tokyo-background-storm"/>
                </div>
                { (result.props ? 
                    /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
                    React.Children.count(result.props.children) > 0 ? 
                        <CommandBox text={result} close={setSearch}/> : <></> 
                    : <CommandBox text={(<>command not found</>)} close={setSearch}/>)
                }
            </>
        )
    }

    return (
        <>
            {/* Desktop navigation */}
            <div className="fixed w-full bottom-0 z-10 flex select-none bg-tokyo-background-dark invisible md:visible">
                <button onClick={() => { setMenuIcon(prevIcon => (prevIcon + 1) % 2); }} className="px-2 bg-tokyo-blue text-tokyo-background-night font-bold">
                    { menuIcons[menuIcon] } {" "} nav
                </button>
                {
                    Object.keys(navbarPages).map((page, index) => (
                        <NavLink key={index} link={navbarPages[page]} path={pathname} disabled={menuIcon === 0}/>
                    ))
                }
                <Link href="https://github.com/mihneamanolache" className={`md:block hidden bg-tokyo-teal px-2 text-tokyo-background-night ${menuIcon === 0 ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''}`}>󰊤 mihneamanolache</Link>
                <div className="flex bg-tokyo-background-storm absolute right-0">
                    <div className="px-2 text-tokyo-comment hidden md:block">~{ pathname }</div>
                    <div id="user-ip" className="px-2 bg-tokyo-dark-gray"><span className="pr-1">󰩠</span>{ ip ?? "" }</div>
                </div>
            </div>
            {/* Mobile navigation */}
            <div className="fixed w-full bottom-0 z-10 flex flex-grow select-none bg-tokyo-background-storm md:hidden text-xl">
                <button onClick={() => { setMenuIcon(prevIcon => (prevIcon + 1) % 2); }} className="px-2 bg-tokyo-blue text-tokyo-background-night font-bold">
                    { menuIcons[menuIcon] } {" "} nav
                </button>

                <div className="flex bg-tokyo-background-storm absolute right-0">
                    <div id="user-ip" className="px-2 bg-tokyo-dark-storm"><span className="pr-1">󰩠</span>{ ip ?? "" }</div>
                </div>
            </div>
            <div className={`w-full md:block md:w-auto bottom-3 pb-6 fixed bg-tokyo-background-night md:invisible ${menuIcon === 0 ? "hidden" : ""}`}>
                <ul className="font-medium text-xl flex flex-col px-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    {
                        Object.keys(navbarPages).map((page, index) => (
                            <NavLink key={index} link={navbarPages[page]} path={pathname} disabled={menuIcon === 0}/>
                        ))
                    }
                </ul>
            </div>
            <Notifications tnc={tncCookie !== undefined}/>
        </>
    )
}
