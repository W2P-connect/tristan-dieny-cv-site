import React from 'react'
import { SectionBlock } from '@/types'

type Props = {
  section: SectionBlock
  depth?: number
}

export default function ProjectSection({ section, depth = 0 }: Props) {
  const headingTag = ['h2', 'h3', 'h4', 'h5'][depth] || 'h6'
  const Heading = headingTag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  const headingClass =
    ['text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm'][depth] || 'text-sm'

  const spacing = depth === 0 ? 'space-y-4' : 'space-y-2'

  if (section.type === 'text') {
    return (
      <section key={section.key} className={spacing}>
        {section.heading && (
          <Heading className={`font-bold ${headingClass}`}>{section.heading}</Heading>
        )}

        {(section.content as string[]).map((paragraph, i) => (
          <React.Fragment key={i}>
            {typeof paragraph === 'string' ? (
              <p className="text-muted-foreground text-base leading-relaxed">{paragraph}</p>
            ) : (
              paragraph
            )}
          </React.Fragment>
        ))}
      </section>
    )
  }

  if (section.type === 'group') {
    return (
      <section key={section.key} className={spacing}>
        {section.heading && (
          <Heading className={`font-bold ${headingClass}`}>{section.heading}</Heading>
        )}

        {(section.content as SectionBlock[]).map((sub) => (
          <div key={sub.key}>
            <ProjectSection section={sub} depth={depth + 1} />
          </div>
        ))}
      </section>
    )
  }

  return null
}
