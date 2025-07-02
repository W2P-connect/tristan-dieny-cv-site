'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle'
import { clx } from '@/utilts'
import LanguageToggle from '../languageToggle/LanguageToggle'
import { ROUTES } from '@/lib/routes'
import { useLanguage } from '@/context/LanguageContext'
import HeaderSubmenu from './HeaderSubmenu'

export function Header() {
  const { locale } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (!locale || !ROUTES[locale]) return null

  return (
    <header className="top-0 z-50 absolute inset-x-0">
      <nav aria-label="Global" className="flex justify-between items-center p-6 lg:px-8">
        <div
          className={clx(
            'flex lg:flex-1 opacity-100 transition-opacity duration-200',
            mobileMenuOpen && '!opacity-0'
          )}
        >
          <LanguageToggle />
        </div>
        <div className="lg:hidden flex">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-darker dark:text-gray-lightest-2"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          {Object.values(ROUTES[locale]).map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <HeaderSubmenu label={item.label} subroutes={item.submenu[locale]} />
              ) : (
                <a
                  href={item.path}
                  className={clx(
                    'block hover:bg-gray-50 dark:hover:bg-gray-800 -mx-3 px-3 py-2',
                    'rounded-lg font-semibold text-gray-darkest dark:text-gray-lightest-2 text-base/7'
                  )}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="z-50 fixed inset-0" />
        <DialogPanel
          className={clx(
            'right-0 z-50 fixed inset-y-0 bg-white dark:bg-gray-darkest p-6',
            'sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto',
            'flex flex-col justify-between'
          )}
        >
          <div>
            <div className="flex justify-between items-center">
              <LanguageToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 rounded-md text-gray-darkest dark:text-gray-lightest-2"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {Object.values(ROUTES[locale]).map((item) => (
                    <div key={item.label}>
                      {item.submenu ? (
                        <HeaderSubmenu label={item.label} subroutes={item.submenu[locale]} />
                      ) : (
                        <a
                          href={item.path}
                          className={clx(
                            'block hover:bg-gray-50 dark:hover:bg-gray-800 -mx-3 px-3 py-2',
                            'rounded-lg font-semibold text-gray-darkest dark:text-gray-lightest-2 text-base/7'
                          )}
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </DialogPanel>
        <div className="z-40 absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur" />
      </Dialog>
    </header>
  )
}
