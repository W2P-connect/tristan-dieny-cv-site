import { ReactNode } from "react"

export type ProjectContent = {
  [lang: string]: SectionBlock[]
}

export type SectionBlock = {
  key: string
  heading: string
  type: 'text' | 'group'
  content: (string | ReactNode)[] | SectionBlock[]
  showTools?: boolean
}
