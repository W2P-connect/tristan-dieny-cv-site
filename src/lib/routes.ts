import { Locale } from '@/context/LanguageContext'
import { projects } from './projects'

export type PathKeys = 'home' | 'projects' | 'about' | 'contact'

export type RouteMeta = {
  path: string
  label: string
  title: string
  description: string
  includeInSitemap?: boolean
  priority?: number
  changeFrequency?: 'daily' | 'weekly' | 'monthly'
  submenu?: Record<Locale, RouteMeta[]>
}

const projectsToRoute = (): Record<Locale, RouteMeta[]> => {
  const projectsRoute = {
    fr: [] as RouteMeta[],
    en: [] as RouteMeta[],
  }

  const availlableLocales: Locale[] = ['fr', 'en']

  availlableLocales.forEach((locale) => {
    projectsRoute[locale] = projects.map((project) => {
      return {
        path: `/${locale}/projects/${project.slug}`,
        label: project.title[locale],
        title: project.title[locale],
        description: project.summary[locale],
        includeInSitemap: true,
        priority: 0.8,
        changeFrequency: 'monthly',
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
    about: {
      path: '/fr/a-propos',
      label: 'A propos',
      title: 'À propos – Tristan',
      description: 'Parcours et philosophie de Tristan en tant que développeur passionné.',
      includeInSitemap: true,
      priority: 0.5,
      changeFrequency: 'monthly',
    },
    contact: {
      path: '/fr/contact',
      label: 'Contact',
      title: 'Contact – Tristan',
      description:
        'Prenez contact avec Tristan, développeur full stack disponible pour vos projets.',
      includeInSitemap: true,
      priority: 0.4,
      changeFrequency: 'monthly',
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
    about: {
      path: '/en/about',
      label: 'About',
      title: 'About – Tristan',
      description: 'Background and philosophy of Tristan as a passionate developer.',
      includeInSitemap: true,
      priority: 0.5,
      changeFrequency: 'monthly',
    },
    contact: {
      path: '/en/contact',
      label: 'Contact',
      title: 'Contact – Tristan',
      description:
        'Get in touch with Tristan, full stack developer available for new opportunities.',
      includeInSitemap: true,
      priority: 0.4,
      changeFrequency: 'monthly',
    },
  },
}
