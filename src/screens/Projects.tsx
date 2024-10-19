import { projects } from '@/data/Projects';
import Image from 'next/image';
import React from 'react';



// ProjectImage Component
function ProjectImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className='w-full flex items-center justify-center rounded-xl overflow-hidden'>
            <div className='relative w-full h-48'> {/* Adjust height as needed */}
                <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={400}
                    loading='lazy'
                    className="object-cover rounded-xl"
                />
            </div>
        </div>
    );
}

// ProjectTitle Component
function ProjectTitle({ title }: { title: string }) {
    return (
        <h1 className='text-zinc-50 mt-5'>{title}</h1>
    );
}

// ProjectDescription Component
function ProjectDescription({ description }: { description: string }) {
    return (
        <p className='text-zinc-50 text-sm mt-2'>{description}</p>
    );
}

// TechTools Component
function TechTools({ tools }: { tools: string[] }) {
    return (
        <div className='flex mb-2 flex-wrap gap-2'>
            {tools.map((tool, index) => (
                <h1 key={index} className='px-2 py-2 text-sm border-2 border-zinc-50 rounded-full dark:text-zinc-50'>{tool}</h1>
            ))}
        </div>
    );
}

// Main Projects Component
function Projects() {


    return (
        <div>
            <p className='text-zinc-50 mt-8 mb-2 text-sm md:text-2xl'>.../ Projects ...</p>
            {projects.map((project, index) => (
                <div key={index} className='w-full'>
                    <ProjectImage src={project.image} alt="Project Image" />
                    <ProjectTitle title={project.title} />
                    <ProjectDescription description={project.description} />
                    <h2 className='text-zinc-50 mt-5 mb-2'>Tech & tools</h2>
                    <TechTools tools={project.tools} />
                </div>
            ))}
        </div>
    );
}

export default Projects;
