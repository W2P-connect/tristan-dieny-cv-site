'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@/components/themeToggle/ThemeToggle'
import { clx } from '@/app/utilts'
import LanguageToggle from '../languageToggle/LanguageToggle'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="top-0 z-50 absolute inset-x-0">
            <nav aria-label="Global" className="flex justify-between items-center p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <LanguageToggle />
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
                        <a
                            key={item.name}
                            href={item.href}
                            className="font-semibold text-gray-darkest dark:text-gray-lightest-2 text-sm/6 dark:gray-lightest-2"
                        >
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
                <DialogPanel className={clx(
                    "right-0 z-50 fixed inset-y-0 bg-white dark:bg-black p-6",
                    "sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto"
                )}>
                    <div className="flex justify-between items-center">
                        <LanguageToggle />
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
                                        className={clx(
                                            "block hover:bg-gray-50 dark:hover:bg-gray-800 -mx-3 px-3 py-2",
                                            "rounded-lg font-semibold text-gray-darkest dark:text-gray-lightest-2 text-base/7"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
