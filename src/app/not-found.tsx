import MainHeaderContainer from '@/components/containers/mainHeaderContainer/MainHeaderContainer'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <MainHeaderContainer bluredBackground>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="sr-only">Not Found</h1>
        <h2>Oups...</h2>
        <Image
          src="/img/not-found.jpg"
          alt="Not found"
          width={256}
          height={256}
          className="rounded-xl"
        />
        <p className="text-center">Could not find requested resource</p>
        <Link className="flex gap-3 custom-button" href="/">
          <span>←</span>
          Return Home
        </Link>
      </div>
    </MainHeaderContainer>
  )
}
