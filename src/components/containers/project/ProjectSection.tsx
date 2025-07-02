import { ProjectSectionContent } from '@/types'
import React from 'react'

type Props = {
  section: ProjectSectionContent
  sectionKey: string
}

export default function ProjectSection({ section, sectionKey }: Props) {
  return (
    <section key={sectionKey} className="space-y-4">
      <h2 className="font-bold text-2xl">{section.heading}</h2>

      {'paragraphs' in section &&
        section.paragraphs.map((p, i) => (
          <p key={i} className="text-muted-foreground text-base leading-relaxed">
            {p}
          </p>
        ))}

      {'intro' in section && (
        <p className="text-muted-foreground text-base leading-relaxed">{section.intro}</p>
      )}

      {'plugin' in section && (
        <div>
          <h3 className="mt-4 font-semibold">{section.plugin.title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {section.plugin.details}
          </p>
        </div>
      )}

      {'website' in section && (
        <div>
          <h3 className="mt-4 font-semibold">{section.website.title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {section.website.details}
          </p>
        </div>
      )}

      {'api' in section && (
        <div>
          <h3 className="mt-4 font-semibold">{section.api.title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">{section.api.details}</p>
        </div>
      )}
    </section>
  )
}
