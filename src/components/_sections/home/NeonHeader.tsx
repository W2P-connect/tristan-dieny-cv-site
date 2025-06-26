import Image from 'next/image'
import NeonHeaderContainer from '../../containers/neonHeaderContainer/NeonHeaderContainer'
import Link from 'next/link'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { headerTranslations } from '@/lib/i18n/header'

type NeonHeaderProps = {
  locale: 'en' | 'fr'
}

export const NeonHeader = ({ locale }: NeonHeaderProps) => {
  const t = headerTranslations[locale]

  return (
    <NeonHeaderContainer>
      <div>
        <div className="flex sm:flex-row flex-col gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/img/profile-picture-3.jpg"
              alt="illustration"
              width={145}
              height={145}
              className="mx-auto rounded-full"
            />
          </div>
          <div className="sm:text-left text-center">
            <h1 className="mb-2">{t.name}</h1>
            <p className="text-2xl">{t.title}</p>
            <p className="">{t.tagline}</p>
          </div>
        </div>

        <p className="mt-12 font-medium text-gray-500 text-lg sm:text-xl/8 text-pretty">
          {t.description}
        </p>
        <div className="flex justify-center items-center mt-24">
          <Link href={`/#skills`}>
            <ArrowDownCircleIcon className="animate-bounce" width={48} height={48} />
          </Link>
        </div>
      </div>
    </NeonHeaderContainer>
  )
}
