import { Locale } from '@/context/LanguageContext'

export type PathKeys = 'home' | 'projets' | 'competences' | 'about' | 'contact'

type RouteMeta = {
  path: string
  label: string
  title: string
  description: string
  includeInSitemap?: boolean
  priority?: number
  changeFrequency?: 'daily' | 'weekly' | 'monthly'
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
    projets: {
      path: '/fr/projets',
      label: 'Projets',
      title: 'Projets – Tristan',
      description: 'Découvrez une sélection de projets récents réalisés par Tristan.',
      includeInSitemap: true,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    competences: {
      path: '/fr/competences',
      label: 'Compétences',
      title: 'Compétences – Tristan',
      description: 'Compétences techniques et transversales de Tristan, développeur full stack.',
      includeInSitemap: true,
      priority: 0.6,
      changeFrequency: 'monthly',
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
    projets: {
      path: '/en/projects',
      label: 'Projects',
      title: 'Projects – Tristan',
      description: 'A selection of recent projects developed by Tristan.',
      includeInSitemap: true,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    competences: {
      path: '/en/skills',
      label: 'Skills',
      title: 'Skills – Tristan',
      description: 'Technical and transversal skills of Tristan, full stack developer.',
      includeInSitemap: true,
      priority: 0.6,
      changeFrequency: 'monthly',
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
