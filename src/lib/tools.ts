export type ToolCategory =
  | 'frontend'
  | 'backend'
  | 'infrastructure'
  | 'cms'
  | 'database'
  | 'devtools'
  | 'design'
  | 'mobile'
  | 'cloud'
  | 'collaboration'
  | 'crm'
  | 'other'
  | 'language'
  | 'framework'
  | 'library'

export type Tool = {
  name: string
  url?: string
  icon: string
  category: ToolCategory[] // ✅ tableau au lieu d'une seule valeur
}

export type ToolKey =
  | 'wordpress'
  | 'woocommerce'
  | 'supabase'
  | 'vercel'
  | 'stripe'
  | 'nextjs'
  | 'react'
  | 'reactnative'
  | 'typescript'
  | 'php'
  | 'prisma'
  | 'tailwind'
  | 'firebase'
  | 'eas'
  | 'expo'
  | 'figma'
  | 'nodejs'
  | 'azure'
  | 'synology'
  | 'clickup'
  | 'github'
  | '365admin'
  | 'eslint'
  | 'mobx'

export const tools: Record<ToolKey, Tool> = {
  wordpress: {
    name: 'WordPress',
    url: 'https://wordpress.org/',
    icon: '/img/icons/tools/wordpress.png',
    category: ['framework', 'cms', 'backend'],
  },
  woocommerce: {
    name: 'WooCommerce',
    url: 'https://woocommerce.com/',
    icon: '/img/icons/tools/woocommerce.png',
    category: ['framework', 'cms', 'backend'],
  },
  supabase: {
    name: 'Supabase',
    url: 'https://supabase.com/',
    icon: '/img/icons/tools/supabase.webp',
    category: ['database', 'infrastructure', 'library'],
  },
  vercel: {
    name: 'Vercel',
    url: 'https://vercel.com/',
    icon: '/img/icons/tools/vercel.png',
    category: ['infrastructure'],
  },
  stripe: {
    name: 'Stripe',
    url: 'https://stripe.com/',
    icon: '/img/icons/tools/stripe.png',
    category: ['infrastructure', 'library'],
  },
  nextjs: {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: '/img/icons/tools/nextjs.png',
    category: ['framework', 'frontend', 'backend'],
  },
  react: {
    name: 'React',
    url: 'https://react.dev/',
    icon: '/img/icons/tools/react.png',
    category: ['library', 'framework', 'frontend'],
  },
  reactnative: {
    name: 'React Native',
    url: 'https://reactnative.dev/',
    icon: '/img/icons/tools/react.png',
    category: ['framework', 'mobile'],
  },
  typescript: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: '/img/icons/tools/typescript.png',
    category: ['language'],
  },
  php: {
    name: 'PHP',
    url: 'https://www.php.net/',
    icon: '/img/icons/tools/php.png',
    category: ['language', 'backend'],
  },
  prisma: {
    name: 'Prisma',
    url: 'https://www.prisma.io/',
    icon: '/img/icons/tools/prisma.png',
    category: ['database', 'library'],
  },
  tailwind: {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    icon: '/img/icons/tools/tailwind.png',
    category: ['library', 'frontend'],
  },
  firebase: {
    name: 'Firebase',
    url: 'https://firebase.google.com/',
    icon: '/img/icons/tools/firebase.png',
    category: ['mobile', 'infrastructure'],
  },
  eas: {
    name: 'EAS',
    url: 'https://docs.expo.dev/eas/',
    icon: '/img/icons/tools/eas.png',
    category: ['mobile', 'infrastructure'],
  },
  expo: {
    name: 'Expo',
    url: 'https://expo.dev/',
    icon: '/img/icons/tools/expo.png',
    category: ['framework', 'mobile'],
  },
  figma: {
    name: 'Figma',
    url: 'https://figma.com/',
    icon: '/img/icons/tools/figma.png',
    category: ['design'],
  },
  nodejs: {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: '/img/icons/tools/nodejs.png',
    category: ['language', 'backend'],
  },
  azure: {
    name: 'Azure',
    url: 'https://azure.microsoft.com/',
    icon: '/img/icons/tools/azure.png',
    category: ['cloud', 'infrastructure'],
  },
  synology: {
    name: 'Synology',
    url: 'https://www.synology.com/',
    icon: '/img/icons/tools/synology.jpg',
    category: ['infrastructure'],
  },
  clickup: {
    name: 'ClickUp',
    url: 'https://clickup.com/',
    icon: '/img/icons/tools/clickup.png',
    category: ['collaboration'],
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: '/img/icons/tools/github.png',
    category: ['devtools'],
  },
  '365admin': {
    name: '365 Admin',
    url: 'https://admin.microsoft.com/',
    icon: '/img/icons/tools/365admin.png',
    category: ['cloud', 'collaboration'],
  },
  eslint: {
    name: 'ESLint',
    url: 'https://eslint.org/',
    icon: '/img/icons/tools/eslint.png',
    category: ['devtools'],
  },
  mobx: {
    name: 'MobX',
    url: 'https://mobx.js.org/README.html',
    icon: '/img/icons/tools/mobx.png',
    category: ['library', 'frontend'],
  },
}
