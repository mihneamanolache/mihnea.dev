import React from 'react'
import Link from 'next/link';

const technologies: Array<string> = ["󰛦", "", "", "", ""];

export default function About() {
    return (
           <main className="flex flex-col items-center justify-center min-h-[90vh] mt-8 px-5 md:px-32 text-center">
            <p className="text-lg"><span className="pr-4 text-tokyo-yellow">󱠡</span>hello, world! I&apos;m</p>
            <h1 className="text-4xl font-bold text-tokyo-blue">mihnea.manolache</h1>
            <p className="md:text-lg">and here are some of the technologies I work with:</p>
            <div className="md:text-6xl space-x-10 mt-4">
                { technologies.map((technology, index) => (
                    <span key={index}>{technology}</span>
                ))}
            </div>
            <div className="mt-10 text-justify space-y-5 md:px-72 text-lg">
                <h2 className="text-2xl font-bold text-tokyo-blue text-center">./about</h2>
                <p>I don&apos;t really enjoy talking about myself. I prefer to let my work speak for itself. But since you&apos;re here, I&apos;ll tell you a little bit about me.</p>
                <p>I am (mostly) a self-taught software engineer. I&apos;ve always been fascinated about technology; however, my programming experience began somewhere around 2018. I started with Python, went through JavaScript, learned Node and TypeScript, and then discovered Go, Rust, Scala, Swift and others.</p>
                <h3 className="text-2xl font-bold text-tokyo-blue text-center">./contact</h3>
                <div>You can contact me via any of the following:</div> 
                <ul className="list-none space-y-3 ml-10">
                    <li><span className="mr-6">󰇮</span><Link className="text-tokyo-blue font-bold" href="mailto:mihnea.dev@gmail.com">mihnea.dev@gmail.com</Link></li>
                    <li><span className="mr-3">𝕏</span> <Link className="text-tokyo-blue font-bold" href="https://x.com/mihneamanolache">@mihneamanolache</Link></li>
                    <li><span className="mr-4">󰊤</span> <Link className="text-tokyo-blue font-bold" href="https://github.com/mihneamanolache">mihneamanolache</Link></li>
                    <li><span className="mr-4"></span> <Link className="text-tokyo-blue font-bold" href="https://t.me/a_x_b_y_c_z">@a_x_b_y_c_z</Link></li>
                </ul>
            </div>
        </main>
    )
}
