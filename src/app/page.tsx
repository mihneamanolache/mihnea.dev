import ProjectCard from "@/components/ui/ProjectCard";
import projects from "@/constants/home.projects";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "mihnea.dev - software engineer",
    description: "Welcome to mihnea's personal website. Here you can find information about the projects I'm working on, my blog posts and more.",
};

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center py-10 min-h-[90vh] px-5 md:px-32 text-center">
            <p className="text-lg"><span className="pr-4 text-tokyo-yellow">󱠡</span>hello, world! I&apos;m</p>
            <h1 className="text-4xl font-bold text-tokyo-blue">mihnea.dev</h1>
            <p className="md:text-lg">building software for the community</p>
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-tokyo-blue">./projects</h2>
                <p className="text-sm">here are some of the projects I&apos;m actively working on.<br/> you discover more of my work on <Link href="https://github.com/mihneamanolache">󰊤</Link></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
                </div>
            </div>
        </main>
    );
}
