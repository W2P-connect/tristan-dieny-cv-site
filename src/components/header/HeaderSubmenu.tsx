import { Submenu } from '@/lib/routes'
import { clx } from '@/utilts'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

import { useRef, useState } from 'react'

type Props = {
  subroutes: Submenu[]
  label: string
}

export default function HeaderSubmenu({ subroutes, label }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const timeoutId = useRef<NodeJS.Timeout>(undefined)

  return (
    <Popover className="relative">
      {({ open }) => {
        const isVisible = open || isHovered
        return (
          <div
            onMouseEnter={() => {
              clearTimeout(timeoutId.current)
              setIsHovered(true)
            }}
            onMouseLeave={() => {
              timeoutId.current = setTimeout(() => setIsHovered(false), 200)
            }}
          >
            <PopoverButton className="inline-flex items-center gap-x-1 font-semibold text-black dark:text-white">
              <span>{label}</span>
              <ChevronDownIcon aria-hidden="true" className="size-5" />
            </PopoverButton>

            <PopoverPanel
              static
              onMouseEnter={() => {
                clearTimeout(timeoutId.current)
                setIsHovered(true)
              }}
              onMouseLeave={() => setIsHovered(false)}
              aria-hidden={!isVisible}
              className={clx(
                'left-1/2 z-10 absolute flex',
                'mt-5 px-4 w-screen max-w-max transition -translate-x-1/2',
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className="flex-auto bg-white dark:bg-black shadow-lg rounded-3xl ring-1 ring-gray-900/5 dark:ring-0 w-screen max-w-md overflow-hidden">
                <div className="p-4">
                  {subroutes.map((item) => (
                    <Link
                      href={item.path}
                      key={item.title}
                      className="relative cursor-pointer items-center flex gap-x-6 hover:bg-gray-lightest hover:dark:bg-gray-dark p-4 rounded-lg transition-all duration-150"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className='size-12 rounded-lg object-cover'
                      />
                      <div>
                        <p className="font-semibold leading-4">{item.title}</p>
                        <p className="mt-1 !text-gray-light">{item.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </div>
        )
      }}
    </Popover>
  )
}
