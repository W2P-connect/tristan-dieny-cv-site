import { Locale } from '@/context/LanguageContext'
import { headers } from 'next/headers'
import Link from 'next/link'

type Props = {
  href: string
  newTab?: boolean
  children: React.ReactNode | string
}

const CustomLink = async ({ href, children, newTab }: Props) => {
  const header = await headers()
  const locale = header.get('x-locale') as Locale
  return (
    <Link target={newTab ? '_blank' : '_self'} href={`/${locale}${href}`}>
      {children}
    </Link>
  )
}

export default CustomLink
