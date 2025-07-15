import { skillCards } from '@/lib/skills'

import React from 'react'
import ClientSkills from './ClientSkills'
import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { clx } from '@/utilts'
import { ClientSkillCardWrapper } from '@/components/containers/skillCard/ClientSkillCardWrapper'
import { Locale } from '@/context/LanguageContext'
import { skills } from '@/lib/i18n/slills'

export default function Skills({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="py-12" id="skills">
        <SectionContainer className="!py-0">
          <h2 className="mb-8">{locale === 'fr' ? 'Compétences' : 'Skills'}</h2>
          <div className="mt-4 mb-8">{skills[locale]}</div>
        </SectionContainer>
        <div className="relative">
          <div
            id="skill-cards-scroller"
            className="relative flex items-stretch gap-6 px-12 transition-all duration-700"
          >
            {[...skillCards, ...skillCards].map((card, index) => (
              <ClientSkillCardWrapper key={index} card={card} />
            ))}
          </div>

          <div
            className={clx(
              'absolute top-0 left-0 w-[50px] h-full pointer-events-none fade-blur-mask-left',
              'bg-gradient-to-l from-transparent to-gray-lightest-2 dark:to-black'
            )}
          />
          <div
            className={clx(
              'absolute top-0 right-0 w-[50px] h-full pointer-events-none dark:blur-sm fade-blur-mask"',
              'bg-gradient-to-r from-transparent to-gray-lightest-2 dark:to-black'
            )}
          />
        </div>
      </section>
      <ClientSkills id="skill-cards-scroller" />
    </>
  )
}
