import Project from '@/components/containers/project/Project'
import { Locale } from '@/context/LanguageContext'
import { spotlightProjectContent } from '@/lib/i18n/spotlight'
import { projects } from '@/lib/projects'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Spotlight() {
  const header = await headers()
  const locale = header.get('x-locale') as Locale

  const project = projects.find((project) => project.slug === 'spotlight')

  if (!project) {
    redirect('/not-found')
  }

  const content = spotlightProjectContent

  return <Project project={project} locale={locale} content={content} />
}
