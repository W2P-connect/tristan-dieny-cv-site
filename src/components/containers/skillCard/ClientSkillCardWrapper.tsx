'use client'

import { SkillCard } from './SkillCard'

export function ClientSkillCardWrapper(props: React.ComponentProps<typeof SkillCard>) {
  const handleClick = () => {}

  return <SkillCard {...props} onClick={handleClick} />
}
