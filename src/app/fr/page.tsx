import HomePage from '@/components/_sections/home/HomePage'
import { ROUTES } from '@/lib/routes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ROUTES.fr.home.title,
  description: ROUTES.fr.home.description,
}

export default async function page() {
  return <HomePage />
}
