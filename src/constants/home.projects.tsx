import type { IProject } from "@/types/misc";

const projects: IProject[] = [
    {
        name: "4g mobile proxies ",
        description: (
            <div className="pb-3 space-y-2">
                <p>Self hosted fleet of <span className="text-tokyo-blue font-bold">4g mobile proxies</span> that you can use to scrape the web anonymously. Proxies are located in Romania and pricing starts at 10 EUR per week.</p>
            </div>
        ),
        url: "/mobile-proxies",
        active: true
    },
    {
        name: "web scraper api 󱂛",
        description: (
            <div className="pb-3 space-y-2">
                <p>API that allows you to scrape the web without worrying about proxies, captchas or rate limits. You can use it to scrape data from any website and it supports JavaScript rendering.</p>
            </div>
        ),
        url: "/web-scraper-api",
        active: false,
        git: "#"
    },
    {
        name: "vinCheck.ro 󱆾",
        description: (
            <div className="pb-3 space-y-2">
                <p>Vehicle history report service that uses web scraping to check the history of any vehicle registered in the EU. The service is free and you can access it by clicking on the link below.</p>
            </div>
        ),
        url: "https://www.vincheck.ro",
        active: true,
        outbound: true,
    },
    {
    name: "ip-to-domain 󰒒",
        description: (
            <div className="pb-3 space-y-2">
                <p>API that allows you to resolve an IP address to all known domain names. Source code is openly available on GitHub and you can access the API by clicking on the link below.</p>
            </div>
        ),
        url: "/ip-to-domain",
        active: false,
        git: "#"
    }
];

export default projects;
