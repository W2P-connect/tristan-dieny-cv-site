import { RouteMeta } from '@/lib/routes'
import { clx } from '@/utilts'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useRef, useState } from 'react'

type Props = {
  subroutes: RouteMeta[]
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
            <PopoverButton className="inline-flex items-center gap-x-1 font-semibold text-gray-900">
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
                    <div
                      key={item.title}
                      className="group relative flex gap-x-6 hover:bg-gray-50 p-4 rounded-lg"
                    >
                      {/* <div className="flex flex-none justify-center items-center bg-gray-50 group-hover:bg-white mt-1 rounded-lg size-11">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div> */}
                      <div>
                        <a href={item.path} className="font-semibold text-gray-900">
                          {item.label}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
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
