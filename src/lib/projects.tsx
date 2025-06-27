export type Projects = {
  title: string
  date: string
  location: string
  company: string
  image: string
  tools: string[]
  description: string
}

export const projects: Projects[] = [
  {
    title: 'Co-fondateur & Développeur Full Stack',
    date: 'Janvier 2025 - Aujourd’hui',
    location: 'Remote',
    image: '/img/projects/spotlight.jpg',
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
    description:
      "App mobile pour le suivi d'entraînement : UI, backend, authentification, notifications et persistance des données.",
  },
  {
    title: 'Fondateur & Développeur Full Stack',
    date: 'Janvier 2024 - Aujourd’hui',
    image: '/img/projects/w2p.jpg',
    location: 'Remote',
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
    description:
      'Plugin de synchronisation WooCommerce → Pipedrive : API, abonnement Stripe, licence et scalabilité.',
  },
  {
    title: 'Responsable IT & opérationnel',
    date: 'Mars 2021 - Novembre 2024',
    location: 'Paris',
    company: 'LLFC',
    image: '/img/projects/spotlight.jpg',
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
    description:
      "Automatisation, interfaçage d'outils métiers, gestion d’équipe et SEO pour un acteur du chanvre français.",
  },
]
