import { ToolKey } from './tools'

export type Projects = {
  title: { fr: string; en: string }
  date: { fr: string; en: string }
  location: string
  company: string
  image: string
  logo: string
  slug: string
  tools: ToolKey[]
  description: { fr: string; en: string } // compétences développées
  summary: { fr: string; en: string } // description du projet
  ressources: { label: string; url: string; subLabel?: string }[]
}

export const projects: Projects[] = [
  {
    title: {
      fr: 'Co-fondateur & Développeur Full Stack',
      en: 'Co-founder & Full Stack Developer',
    },
    date: {
      fr: 'Janvier 2025 - Aujourd’hui',
      en: 'January 2025 – Present',
    },
    location: 'Remote',
    image: '/img/projects/SPOTLIGHT/banner.jpg',
    slug: 'spotlight',
    company: 'Spotlight',
    logo: '/img/projects/SPOTLIGHT/logo.jpg',
    ressources: [
      {
        label: 'IOS app',
        url: 'https://testflight.apple.com/join/FhqyxRwG',
        subLabel: 'With TestFlight',
      },
      {
        label: 'Android app',
        url: 'https://expo.dev/artifacts/eas/brEygjTTFQXzJG86ETW77z.apk',
        subLabel: 'APK file',
      },
      {
        label: 'Client app repository',
        url: 'https://github.com/W2P-connect/spotlight-app',
        subLabel: 'Github',
      },
      {
        label: 'Backend app repository',
        url: 'https://github.com/W2P-connect/spotlight.git',
        subLabel: 'Github',
      },
    ],
    tools: [
      'supabase',
      'vercel',
      'reactnative',
      'nextjs',
      'expo',
      'mobx',
      'prisma',
      'tailwind',
      'typescript',
      'firebase',
      'eas',
      'figma',
      'github',
      'eslint',
    ],
    summary: {
      fr: "Application mobile sociale pour le suivi et le partage d'entraînements entre passionnés de musculation et de powerlifting. L'utilisateur peut créer des séances, suivre ses performances, interagir avec ses amis, et découvrir de nouveaux programmes.",
      en: 'Social mobile app for tracking and sharing workouts among strength training and powerlifting enthusiasts. Users can create workouts and programs, track their performance, follow friends, and interact through likes and comments.',
    },
    description: {
      fr: 'UI mobile, logique métier, backend, authentification Google, notifications push, persistance des données et synchronisation avec Supabase.',
      en: 'Mobile UI, business logic, backend, Google authentication, push notifications, data persistence and synchronization with Supabase.',
    },
  },
  {
    title: {
      fr: 'Fondateur & Développeur Full Stack',
      en: 'Founder & Full Stack Developer',
    },
    date: {
      fr: 'Janvier 2024 - Aujourd’hui',
      en: 'January 2024 – Present',
    },
    location: 'Remote',
    image: '/img/projects/W2P/banner.jpg',
    slug: 'w2p',
    logo: '/img/projects/W2P/logo.jpg',
    ressources: [
      {
        label: 'Website',
        url: 'https://woocommerce-to-pipedrive.com/',
        subLabel: 'Official site',
      },
      {
        label: 'Plugin page',
        url: 'https://wordpress.org/plugins/w2p-pipedrive-crm-integration-for-woocommerce/',
        subLabel: 'WordPress.org',
      },
      {
        label: 'Plugin code',
        url: 'https://plugins.svn.wordpress.org/w2p-pipedrive-crm-integration-for-woocommerce/',
        subLabel: 'SVN repository',
      },
      {
        label: 'Front Plugin (React)',
        url: 'https://github.com/W2P-connect/W2P_client_react/',
        subLabel: 'GitHub',
      },
    ],
    company: 'W2P',
    tools: [
      'wordpress',
      'woocommerce',
      'supabase',
      'vercel',
      'stripe',
      'nextjs',
      'react',
      'mobx',
      'php',
      'prisma',
      'tailwind',
      'typescript',
      'github',
    ],
    summary: {
      fr: 'Plugin WordPress permettant de synchroniser automatiquement les données WooCommerce avec le CRM Pipedrive (commandes, clients, produits), Les abonnements sont commandés et géré par le client sur le site via Stripe.',
      en: 'WordPress plugin that automatically synchronizes WooCommerce data with the Pipedrive CRM (orders, customers, products). Subscriptions are purchased and managed directly by the customer on the website via Stripe.',
    },
    description: {
      fr: "API REST, gestion d'abonnement avec Stripe, vérification de licence serveur, compatibilité large et documentation pour développeurs.",
      en: 'REST API integration, Stripe subscription handling, server-side license validation, broad compatibility and developer documentation.',
    },
  },
  {
    title: {
      fr: 'Responsable IT & opérationnel',
      en: 'IT & Operations Manager',
    },
    date: {
      fr: 'Mars 2021 - Novembre 2024',
      en: 'March 2021 – November 2024',
    },
    location: 'Paris',
    image: '/img/projects/LLFC/banner.jpg',
    company: 'LLFC',
    logo: '/img/projects/LLFC/logo.jpg',
    slug: 'llfc',
    ressources: [
      {
        label: 'LLFC – Compléments & expertise globale',
        url: 'https://llfc.fr/',
        subLabel: 'Website',
      },
      {
        label: 'LLFC – Spécialisation CBD',
        url: 'https://labofrancaisduchanvre.com/',
        subLabel: 'Website',
      },
      {
        label: 'Portail d’analyse – LLFC',
        url: 'https://analyse-llfc.fr/',
        subLabel: 'Website',
      },
    ],
    tools: [
      'wordpress',
      'woocommerce',
      'react',
      'php',
      'nodejs',
      'azure',
      'synology',
      'clickup',
      'github',
      '365admin',
    ],
    summary: {
      fr: "Entreprise française spécialisée dans le chanvre. En charge de la digitalisation, de l'automatisation des flux commerciaux et de la coordination IT entre les différents pôles (production, commercial, analyse).",
      en: 'French hemp-focused company. Oversaw digital transformation, business flow automation, and IT coordination across production, sales, and analytics departments.',
    },
    description: {
      fr: "Automatisation des commandes, intégration d'outils métiers (ERP, CRM, compta), développement front et back, SEO, gestion d'équipe et maintenance IT.",
      en: 'Order flow automation, business tool integration (ERP, CRM, accounting), frontend and backend development, SEO, team management, and IT maintenance.',
    },
  },
]
