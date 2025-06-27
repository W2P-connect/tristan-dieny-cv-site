'use client'

import { useModal } from '@/context/ModalContext'
import { SkillCard } from './SkillCard'
import { SkillCardType } from '@/lib/skills'
import { useLanguage } from '@/context/LanguageContext'

export function ClientSkillCardWrapper({ card }: { card: SkillCardType }) {
  const { show } = useModal()
  const { locale } = useLanguage()

  const handleClick = () => {
    show(<SkillCard card={card} showDetails={true} locale={locale} />)
  }

  return <SkillCard card={card} onClick={handleClick} />
}
