import { Locale, useLanguage } from '@/context/LanguageContext'
import { PathKeys, ROUTES } from '@/lib/routes'
import { headers } from 'next/headers'
import Link from 'next/link'

type Props = {
  href: string
  children: React.ReactNode | string
}

const CustomLink = async ({ href, children }: Props) => {
  const header = await headers()
  const locale = header.get('x-locale') as Locale
  return <Link href={`/${locale}${href}`}>{children}</Link>
}

export default CustomLink
