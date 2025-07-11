import { Locale } from '@/context/LanguageContext'
import { projects } from './projects'

export type PathKeys = 'home' | 'projects'

export type RouteMeta = {
  path: string
  label: string
  title: string
  description: string
  includeInSitemap?: boolean
  priority?: number
  changeFrequency?: 'daily' | 'weekly' | 'monthly'
  submenu?: Record<Locale, Submenu[]>
}

export type Submenu = {
  icon: string
  subtitle: string
} & RouteMeta

const projectsToRoute = (): Record<Locale, Submenu[]> => {
  const projectsRoute = {
    fr: [] as Submenu[],
    en: [] as Submenu[],
  }

  const availlableLocales: Locale[] = ['fr', 'en']

  availlableLocales.forEach((locale) => {
    projectsRoute[locale] = projects.map((project) => {
      return {
        path: `/${locale}/projects/${project.slug}`,
        label: project.title[locale],
        title: project.company,
        description: project.summary[locale],
        includeInSitemap: true,
        priority: 0.8,
        changeFrequency: 'monthly',
        icon: project.logo,
        subtitle: project.title[locale],
      }
    })
  })

  return projectsRoute
}

export const ROUTES: Record<Locale, Record<PathKeys, RouteMeta>> = {
  fr: {
    home: {
      path: '/fr',
      label: 'Accueil',
      title: 'Tristan – Développeur Full Stack JavaScript',
      description:
        'Portfolio de Tristan, développeur web et mobile spécialisé en React, Next.js et React Native.',
      includeInSitemap: true,
      priority: 1,
      changeFrequency: 'monthly',
    },
    projects: {
      path: '/fr/projects',
      label: 'Projets',
      title: 'Projets – Tristan',
      description: 'Découvrez une sélection de projets récents réalisés par Tristan.',
      includeInSitemap: true,
      priority: 0.8,
      changeFrequency: 'monthly',
      submenu: projectsToRoute(),
    },
  },
  en: {
    home: {
      path: '/en',
      label: 'Home',
      title: 'Tristan – Full Stack JavaScript Developer',
      description:
        'Tristan’s portfolio: web and mobile developer with expertise in React, Next.js and React Native.',
      includeInSitemap: true,
      priority: 1,
      changeFrequency: 'monthly',
    },
    projects: {
      path: '/en/projects',
      label: 'Projects',
      title: 'Projects – Tristan',
      description: 'A selection of recent projects developed by Tristan.',
      includeInSitemap: true,
      priority: 0.8,
      changeFrequency: 'monthly',
      submenu: projectsToRoute(),
    },
  },
}
