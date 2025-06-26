import {
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  ArrowPathIcon,
  CircleStackIcon,
  AdjustmentsHorizontalIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

export type SkillCardType = {
  icon: React.ReactNode
  title: string
  technologies: string[]
  details: {
    fr: string[]
    en: string[]
  }
}

export const skillCards: SkillCardType[] = [
  {
    icon: <CodeBracketIcon width={24} />,
    title: 'Front-End',
    technologies: ['React', 'Next.js', 'React Native', 'CSS', 'JavaScript'],
    details: {
      fr: [
        "J'ai conçu des interfaces responsives avec React, Next.js et Tailwind pour des applications web et mobiles.",
        "J’ai utilisé React Native et Expo pour créer une application de suivi d'entraînement (Spotlight), avec navigation, animation et logique métier.",
        'Next.js m’a permis d’implémenter du SSR et une optimisation SEO dans le plugin W2P (WooCommerce vers Pipedrive).',
      ],
      en: [
        'I built responsive interfaces using React, Next.js, and Tailwind for web and mobile apps.',
        'I used React Native and Expo to develop a workout tracking app (Spotlight), handling navigation, animation, and business logic.',
        'Next.js enabled SSR and SEO optimization in my W2P plugin (WooCommerce to Pipedrive).',
      ],
    },
  },
  {
    icon: <ServerIcon width={24} />,
    title: 'Back-End',
    technologies: ['Node.js', 'PHP', 'Next.js'],
    details: {
      fr: [
        'J’ai développé des APIs RESTful en Node.js pour automatiser des workflows internes (LLFC, ERP, CRM).',
        'J’ai utilisé PHP avec WordPress/WooCommerce pour développer un plugin de synchronisation CRM (W2P).',
        'J’ai construit un backend Next.js pour gérer l’authentification sécurisée, la synchronisation des données et les Webhooks Stripe.',
      ],
      en: [
        'I built RESTful APIs in Node.js to automate internal workflows (LLFC, ERP, CRM).',
        'I used PHP within WordPress/WooCommerce to develop a CRM sync plugin (W2P).',
        'I created a backend in Next.js to handle secure authentication, data syncing, and Stripe webhooks.',
      ],
    },
  },
  {
    icon: <CircleStackIcon width={24} />,
    title: 'Databases',
    technologies: ['Prisma', 'SQL', 'Supabase'],
    details: {
      fr: [
        'J’utilise Prisma comme ORM avec Supabase (PostgreSQL) pour structurer mes données (Spotlight, W2P).',
        'J’ai modélisé des schémas SQL pour gérer utilisateurs, commandes et produits dans WooCommerce et Pipedrive.',
        'J’ai utilisé Supabase pour l’auth, le stockage sécurisé et la synchronisation dans mon application mobile.',
      ],
      en: [
        'I use Prisma ORM with Supabase (PostgreSQL) to structure my data (Spotlight, W2P).',
        'I designed SQL schemas to manage users, orders, and products between WooCommerce and Pipedrive.',
        'I used Supabase for authentication, secure storage, and sync in my mobile app.',
      ],
    },
  },
  {
    icon: <CloudIcon width={24} />,
    title: 'Deployment & DevOps',
    technologies: ['Vercel', 'Azure', 'Firebase', 'EAS', 'Synology', 'Redis'],
    details: {
      fr: [
        'J’ai déployé mes projets sur Vercel (W2P, Spotlight), assurant un déploiement rapide et fiable.',
        'J’ai utilisé Firebase (push notifications) et EAS pour builder et publier l’app mobile (Expo).',
        "J’ai configuré Synology pour l'hébergement local sécurisé, et Azure pour gérer les utilisateurs et emails professionnels chez LLFC.",
      ],
      en: [
        'I deployed my projects on Vercel (W2P, Spotlight), ensuring fast and reliable releases.',
        'I used Firebase (push notifications) and EAS to build and publish the mobile app (Expo).',
        'I configured Synology for secure local hosting, and Azure to manage users and enterprise email (LLFC).',
      ],
    },
  },
  {
    icon: <ArrowPathIcon width={24} />,
    title: 'Integrations & APIs',
    technologies: ['Stripe API', 'Pipedrive', 'WordPress', 'WooCommerce'],
    details: {
      fr: [
        'J’ai intégré Stripe dans W2P pour gérer les abonnements, vérifier les licences et gérer les paiements via Webhooks.',
        'J’ai synchronisé des données WooCommerce (commandes, clients, produits) avec Pipedrive en utilisant leurs APIs REST.',
        'J’ai développé un plugin WordPress complet (W2P) pour automatiser l’intégration entre WooCommerce et Pipedrive.',
      ],
      en: [
        'I integrated Stripe into W2P to manage subscriptions, license checks, and payments via Webhooks.',
        'I synced WooCommerce data (orders, users, products) with Pipedrive using their REST APIs.',
        'I developed a complete WordPress plugin (W2P) to automate the integration between WooCommerce and Pipedrive.',
      ],
    },
  },
  {
    icon: <AdjustmentsHorizontalIcon width={24} />,
    title: 'Code Quality & Workflow',
    technologies: ['ESLint', 'Prettier', 'Husky', 'Git', 'GitHub'],
    details: {
      fr: [
        'Je structure tous mes projets avec Git et GitHub, avec des conventions strictes pour la qualité du code.',
        'J’utilise ESLint, Prettier et Husky pour garantir un code propre, formaté automatiquement et sans erreurs de style.',
        'Des hooks de pré-commit permettent d’éviter les oublis et de sécuriser le pipeline CI/CD.',
      ],
      en: [
        'I organize all my projects using Git and GitHub with strict code quality conventions.',
        'I use ESLint, Prettier, and Husky to ensure clean, auto-formatted code with no style issues.',
        'Pre-commit hooks help catch issues early and secure the CI/CD pipeline.',
      ],
    },
  },
  {
    icon: <WrenchScrewdriverIcon width={24} />,
    title: 'UI Libraries',
    technologies: ['Tailwind', 'Framer Motion', 'Headless UI'],
    details: {
      fr: [
        'J’utilise Tailwind CSS pour construire des interfaces élégantes, responsives et faciles à maintenir.',
        'J’ai intégré des animations fluides dans mes apps React grâce à Framer Motion (Spotlight).',
        'Headless UI m’a permis de créer des composants accessibles et personnalisables sans contrainte de style.',
      ],
      en: [
        'I use Tailwind CSS to build elegant, responsive, and maintainable interfaces.',
        'I integrated smooth animations in my React apps using Framer Motion (Spotlight).',
        'Headless UI allowed me to create accessible and flexible components without style constraints.',
      ],
    },
  },
]
