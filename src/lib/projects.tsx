export type Projects = {
  title: { fr: string; en: string }
  date: { fr: string; en: string }
  location: string
  company: string
  image: string
  slug: string
  tools: string[]
  description: { fr: string; en: string } // compétences développées
  summary: { fr: string; en: string } // description du projet
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
    image: '/img/projects/spotlight.jpg',
    slug: 'spotlight',
    company: 'Spotlight',
    tools: [
      'Supabase',
      'Vercel',
      'React Native',
      'Next.js',
      'Expo',
      'Prisma',
      'Tailwind',
      'Typescript',
      'Firebase',
      'EAS',
      'Figma',
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
    image: '/img/projects/w2p.jpg',
    slug: 'w2p',
    company: 'W2P',
    tools: [
      'WordPress',
      'WooCommerce',
      'Supabase',
      'Vercel',
      'Stripe',
      'Next.js',
      'React',
      'PHP',
      'Prisma',
      'Tailwind',
      'Typescript',
    ],
    summary: {
      fr: 'Plugin WordPress permettant de synchroniser automatiquement les données WooCommerce avec le CRM Pipedrive (commandes, clients, produits), tout en gérant les abonnements via Stripe.',
      en: 'WordPress plugin that automatically syncs WooCommerce data (orders, customers, products) with the Pipedrive CRM, including subscription management via Stripe.',
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
    image: '/img/projects/LLFC.jpg',
    company: 'LLFC',
    slug: 'llfc',
    tools: [
      'WordPress',
      'WooCommerce',
      'React',
      'PHP',
      'Node.js',
      'Azure',
      'Synology',
      'Clickup',
      'GitHub',
      '365 Admin',
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
