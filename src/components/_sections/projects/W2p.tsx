import MainHeaderContainer from '@/components/containers/mainContainer/MainContainer'
import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { Locale } from '@/context/LanguageContext'
import { projects } from '@/lib/projects'
import { headers } from 'next/headers'
import React from 'react'
import ProjectHeader from '@/components/containers/project/ProjectHeader'
import { redirect } from 'next/navigation'
import ProjectTools from '@/components/containers/project/ProjectTools'
import { w2pProjectContent } from '@/lib/i18n/w2p'
import ProjectSection from '@/components/containers/project/ProjectSection'
import RenderIf from '@/components/containers/renderIf/RenderIf'

export default async function W2p() {
  const header = await headers()
  const locale = header.get('x-locale') as Locale

  const project = projects.find((project) => project.slug === 'w2p')

  if (!project) {
    redirect('/not-found')
  }

  const content = w2pProjectContent[locale]

  return (
    <MainHeaderContainer bluredBackground>
      <SectionContainer className='!pt-24'>
        <ProjectHeader project={project} locale={locale} />

        <div className="space-y-12 mt-16">
          {Object.entries(content).map(([key, section]) => (
            <div key={key}>
              <ProjectSection section={section} sectionKey={key} />
              <RenderIf condition={key === 'tech'}>
                <ProjectTools projectTools={project.tools} />
              </RenderIf>
            </div>
          ))}
        </div>
      </SectionContainer>
    </MainHeaderContainer>
  )
}
