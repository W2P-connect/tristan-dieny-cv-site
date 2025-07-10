import { Locale } from '@/context/LanguageContext'
import { projects } from '@/lib/projects'
import { headers } from 'next/headers'
import React from 'react'
import { redirect } from 'next/navigation'
import { w2pProjectContent } from '@/lib/i18n/w2p'
import Project from '@/components/containers/project/Project'

export default async function W2p() {
  const header = await headers()
  const locale = header.get('x-locale') as Locale

  const project = projects.find((project) => project.slug === 'w2p')

  if (!project) {
    redirect('/not-found')
  }

  const content = w2pProjectContent

  return (
    <Project project={project} locale={locale} content={content} />
  )
}
