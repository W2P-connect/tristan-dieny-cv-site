import React from 'react'
import MainHeaderContainer from '../mainContainer/MainContainer'
import SectionContainer from '../sectionContainer/SectionContainer'
import ProjectHeader from './ProjectHeader'
import ProjectSection from './ProjectSection'
import RenderIf from '../renderIf/RenderIf'
import ProjectTools from './ProjectTools'
import { Projects } from '@/lib/projects'
import { Locale } from '@/context/LanguageContext'
import { ProjectContent } from '@/types'

type Props = {
  project: Projects
  locale: Locale
  content: ProjectContent
}
export default function Project({ project, locale, content }: Props) {
  return (
    <MainHeaderContainer bluredBackground>
      <SectionContainer className="!pt-24">
        <ProjectHeader project={project} locale={locale} />

        <div className="space-y-12 mt-16">
          {Object.values(content[locale]).map((section) => (
            <div key={section.key}>
              <ProjectSection section={section} />
              <RenderIf condition={!!section.showTools}>
                <ProjectTools projectTools={project.tools} />
              </RenderIf>
            </div>
          ))}
        </div>
      </SectionContainer>
    </MainHeaderContainer>
  )
}
