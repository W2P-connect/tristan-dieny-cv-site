import { useLanguage } from '@/context/LanguageContext'
import { PathKeys, ROUTES } from '@/lib/routes'
import Link from 'next/link'

type Props = {
  path: PathKeys
  children: React.ReactNode | string
}

const CustomLink = ({ path, children }: Props) => {
  const { locale } = useLanguage()
  return <Link href={ROUTES[locale][path]['path']}>{children}</Link>
}

export default CustomLink
