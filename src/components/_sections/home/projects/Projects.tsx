import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { Locale } from '@/context/LanguageContext'
import { projects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects({ locale }: { locale: Locale }) {
  return (
    <SectionContainer>
      <h2 className="mb-8">
        {locale === 'fr' ? 'Projets & Expériences' : 'Projects & Experiences'}
      </h2>

      <div className="flex lg:flex-row flex-col items-stretch gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col flex-1 justify-between mb-6 lg:max-w-[400px]">
            <div className="mb-4">
              <Image
                src={`${project.image}`}
                alt={project.title[locale]}
                width={2048}
                height={1024}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <h3 className="font-semibold text-xl">{project.title[locale]}</h3>
              <p className="mb-4 !font-thin italic">{project.date[locale]}</p>
              <p className="">{project.summary[locale]}</p>
            </div>
            <div>
              <Link className="custom-button" href={`projects/${project.slug}`}>
                {locale === 'fr' ? 'En savoir plus' : 'Read more'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
