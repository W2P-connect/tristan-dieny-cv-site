import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
  return (
    <SectionContainer>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="mb-6">
          <Image
            src={`${project.image}`}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{project.date}</p>
          <p className="mt-2 text-gray-800 dark:text-gray-200">{project.description}</p>
        </div>
      ))}
    </SectionContainer>
  )
}
