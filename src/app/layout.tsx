import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Header'
import { headers } from 'next/headers'
import { clx } from '@/utilts'
import Modal from '@/components/containers/modal/Modal'
import { AppProviders } from '@/context/AppProviders'
import { Locale } from '@/context/LanguageContext'
import { PathKeys, ROUTES } from '@/lib/routes'
import { projects } from '@/lib/projects'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const locale = (headersList.get('x-locale') as Locale) || 'fr'
  const currentPath = headersList.get('x-current-path') || '/'

  const segments = currentPath.split('/').filter(Boolean)
  const [lang, section, slug] = segments
  const routes = ROUTES[locale]

  if (section === 'projects' && slug) {
    const project = projects.find((p) => p.slug === slug)
    if (project) {
      return {
        title: project.company,
        description: project.summary[locale],
      }
    }
  }

  if (section && routes[section as PathKeys]) {
    return {
      title: routes[section as PathKeys].title,
      description: routes[section as PathKeys].description,
    }
  }

  return {
    title: routes.home.title,
    description: routes.home.description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const theme = headersList.get('x-theme')

  return (
    <html
      lang="en"
      className={clx(theme === 'dark' ? 'dark' : '', 'bg-gray-lightest-2 dark:bg-black')}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>
          <div className="bg-white dark:bg-black min-h-screen transition-all transition-duration-200">
            <Header />
            {children}
          </div>
          <Modal />
        </AppProviders>
      </body>
    </html>
  )
}
