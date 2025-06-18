'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-black">
      <header className="top-0 z-50 absolute inset-x-0">
        <nav aria-label="Global" className="flex justify-between items-center p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
          </div>
          <div className="lg:hidden flex">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-semibold text-gray-900 dark:text-gray-200 text-sm/6">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggle />
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="z-50 fixed inset-0" />
          <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-white p-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 rounded-md text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-gray-900 dark:text-gray-200 text-base/7"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-gray-900 text-base/7"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="isolate relative px-6 lg:px-8 pt-14">
        <div
          aria-hidden="true"
          className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 rotate-30 -translate-x-1/2"
          />
        </div>
        <div className="mx-auto py-32 sm:py-48 lg:py-56 max-w-2xl">
          <div className="hidden sm:flex sm:justify-center sm:mb-8">
            <div className="relative px-3 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-gray-600 text-sm/6">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-semibold text-gray-900 text-5xl sm:text-7xl text-balance tracking-tight">
              Data to enrich your online business
            </h1>
            <p className="mt-8 font-medium text-gray-500 text-lg sm:text-xl/8 text-pretty">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="flex justify-center items-center gap-x-6 mt-10">
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2 font-semibold text-white text-sm"
              >
                Get started
              </a>
              <a href="#" className="font-semibold text-gray-900 text-sm/6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  )
}
