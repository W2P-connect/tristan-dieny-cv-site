import Project from '@/components/containers/project/Project'
import { Locale } from '@/context/LanguageContext'
import { llfcProjectContent } from '@/lib/i18n/llfc'
import { projects } from '@/lib/projects'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Llfc() {
  const header = await headers()
  const locale = header.get('x-locale') as Locale

  const project = projects.find((project) => project.slug === 'llfc')

  if (!project) {
    redirect('/not-found')
  }

  const content = llfcProjectContent

  return (
    <Project project={project} locale={locale} content={content} />
  )
}
