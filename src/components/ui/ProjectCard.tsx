import React from 'react';
import Link from 'next/link';

const ProjectCard = ({ project }: {project: Record<string, string | JSX.Element | boolean>}) => {
    return (
        <div className="bg-tokyo-background-storm p-5 space-y-4 text-sm text-justify">
            <div className="flex flex-row justify-between">
                <h3 className="text-lg md:text-xl font-bold text-tokyo-blue">{project.name as string}</h3>
                <span className={`flex items-center justify-center text-xs text-tokyo-background-night px-1 font-bold ${
project.active ? "bg-tokyo-green" : "bg-tokyo-yellow"
}`}>
                    { project.active ? "ACTIVE" : "IN PROGRESS"}
                </span>
            </div>
            <div className="pb-5">
            { project.description as JSX.Element }
            </div>
            <div className="flex justify-between items-center">
                <Link href={project.url as string} className="p-2 bg-tokyo-dark-gray"><span className="pr-2" >{ project.outbound !== undefined && project.outbound === true ? "link" : ":goto" }</span><code className="text-tokyo-purple">{project.url as string}</code></Link>
                { project.git !== undefined && <Link href={project.git as string} className="text-2xl hover:text-tokyo-blue"><span className="pr-2">󰊤</span></Link> }
            </div>
        </div>
    )
}

export default ProjectCard;
