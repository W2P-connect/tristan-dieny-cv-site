import { Locale } from '@/context/LanguageContext'
import { Projects } from '@/lib/projects'
import Image from 'next/image'
import React from 'react'
import RenderIf from '../renderIf/RenderIf'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

type Props = {
  project: Projects
  locale: Locale
}

export default function ProjectHeader({ project, locale }: Props) {
  return (
    <div>
      <Image
        src={`${project.image}`}
        alt={project.title[locale]}
        width={2048}
        height={1024}
        className="shadow-lg mb-12 rounded-2xl w-full h-auto"
      />

      <h1>{project.title[locale]}</h1>
      <p className="mb-4 italic">{project.date[locale]}</p>
      <p className="big-text">{project.summary[locale]}</p>

      <RenderIf condition={!!project.ressources}>
        <div className="flex flex-wrap justify-center gap-4 bg-primary-lighter dark:bg-primary-darkest mt-12 mb-8 py-8">
          {project.ressources!.map((ressource, index) => (
            <div key={index} className="flex items-center gap-1.5 px-4 py-1">
              <Link href={ressource.url} className="underline big-text" target="_blank">
                {ressource.label}
              </Link>
              <ArrowTopRightOnSquareIcon
                width={16}
                height={16}
                className="text-black dark:text-white"
              />
            </div>
          ))}
        </div>
      </RenderIf>
    </div>
  )
}
