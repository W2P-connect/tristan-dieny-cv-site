import { Submenu } from '@/lib/routes'
import { clx } from '@/utilts'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type Props = {
  subroutes: Submenu[]
  label: string
  onMobile?: boolean
}

export default function HeaderSubmenu({ subroutes, label, onMobile = false }: Props) {
  const [isHovered, setIsHovered] = useState(onMobile ? true : false)
  const timeoutId = useRef<NodeJS.Timeout>(undefined)

  const pathname = usePathname()

  useEffect(() => {
    !onMobile && setIsHovered(false)
  }, [pathname])

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
              timeoutId.current = setTimeout(() => setIsHovered(!onMobile && false), 200)
            }}
          >
            <PopoverButton className="inline-flex items-center gap-x-1 font-semibold text-black dark:text-white">
              <span>{label}</span>
              {/* <RenderIf condition={!onMobile}> */}
                <ChevronDownIcon aria-hidden="true" className="size-5" />
              {/* </RenderIf> */}
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
                'flex',
                !onMobile && 'absolute -translate-x-1/2 px-4 max-w-max w-screen mt-5 left-1/2 z-10',
                'transition',
                isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className={clx(
                "flex-auto ",
                !onMobile && 'rounded-3xl ring-1 ring-gray-900/5 dark:ring-0 bg-white dark:bg-black shadow-lg  w-screen max-w-md overflow-hidden'
              )}>
                <div className={onMobile ? "p-0" : "p-4"}>
                  {subroutes.map((item) => (
                    <Link
                      href={item.path}
                      key={item.title}
                      className="relative flex items-center gap-x-6 hover:bg-gray-lightest hover:dark:bg-gray-darkest p-4 rounded-lg transition-all duration-150 cursor-pointer"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="rounded-lg size-12 object-cover"
                      />
                      <div>
                        <p className="font-semibold leading-4">{item.title}</p>
                        <p className="mt-1 !text-gray-dark !dark:text-gray-light">
                          {item.subtitle}
                        </p>
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
