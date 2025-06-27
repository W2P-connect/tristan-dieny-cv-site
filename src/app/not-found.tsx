import MainHeaderContainer from '@/components/containers/mainContainer/MainContainer'
import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default async function NotFound() {
  const headersList = await headers()
  const theme = headersList.get('x-theme')
  const isDark = theme === 'dark'

  return (
    <MainHeaderContainer bluredBackground>
      <SectionContainer>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="sr-only">Not Found</h1>
          <h2>Oups...</h2>
          <Image
            src={isDark ? '/img/not-found-dark.jpg' : '/img/not-found.jpg'}
            alt="Not found"
            width={256}
            height={256}
            className="rounded-xl"
            priority
          />
          <p className="text-center">Could not find requested resource</p>
          <Link className="flex gap-3 custom-button" href="/">
            <span>←</span>
            Return Home
          </Link>
        </div>
      </SectionContainer>
    </MainHeaderContainer>
  )
}
