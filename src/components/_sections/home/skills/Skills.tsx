import { skillCards } from '@/lib/skills'

import React from 'react'
import ClientSkills from './ClientSkills'
import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { clx } from '@/utilts'
import { ClientSkillCardWrapper } from '@/components/containers/skillCard/ClientSkillCardWrapper'

export default function Skills() {
  return (
    <div className="py-12">
      <section id="skills">
        <SectionContainer className="!py-0">
          <h2 className="mb-8 font-bold text-2xl">Skills</h2>
        </SectionContainer>
        <div className="relative">
          <div
            id="skill-cards-scroller"
            className="relative flex items-stretch gap-6 px-12 py-4 transition-all duration-700"
          >
            {skillCards.map((card, index) => (
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
    </div>
  )
}
