export type ParagraphSection = {
  heading: string
  paragraphs: string[]
}

export type TechnicalSection = {
  heading: string
  intro: string
  plugin: { title: string; details: string }
  website: { title: string; details: string }
  api: { title: string; details: string }
}

export type ProjectSectionContent = ParagraphSection | TechnicalSection
