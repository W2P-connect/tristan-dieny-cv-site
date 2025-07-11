import { SkillCardType } from '@/lib/skills'
import { clx } from '@/utilts'
import React from 'react'
import RenderIf from '../renderIf/RenderIf'
import { Locale } from '@/context/LanguageContext'

type SkillCardBase = {
  card: SkillCardType
  onClick?: () => void
}

type SkillCardWithDetails = {
  locale: Locale
  showDetails: true
}

type SkillCardWithoutDetails = {
  locale?: Locale
  showDetails?: false
}

type SkillCardProps = SkillCardBase & (SkillCardWithDetails | SkillCardWithoutDetails)

export const SkillCard = ({
  card,
  onClick,
  locale = 'fr',
  showDetails = false,
}: SkillCardProps) => {
  return (
    <div
      className={clx(
        'bg-gray-dark dark:bg-gray-darkest dark:shadow-gray-darkest p-6 dark:border dark:border-gray-light',
        'rounded-lg w-full min-w-56 shadow-lg',
        !showDetails && 'sm:w-56 cursor-pointer'
      )}
      {...(onClick ? { onClick } : {})}
    >
      <div className="mb-2">{card.icon}</div>
      <h3 className="mb-2 font-semibold !text-gray-lightest-2 text-lg">{card.title}</h3>
      <p className="font-light !text-gray-lightest leading-relaxed">
        {card.technologies.map((tech, index) => (
          <span key={index}>
            {tech}
            {index < card.technologies.length - 1 && ', '}
          </span>
        ))}
      </p>

      <RenderIf condition={showDetails}>
        <div className="mt-4">
          <ul className="pl-2 list-disc list-inside">
            {card.details[locale].map((desc, index) => (
              <li className='!text-gray-lightest' key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      </RenderIf>
    </div>
  )
}
