'use client';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="border-b border-white/10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-orange-200 hover:text-orange-400 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden logo"
                    src="JA-logo.svg"
                    alt="Jennifer Arboleda"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block logo"
                    src="JA-logo.svg"
                    alt="Jennifer Arboleda"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-orange-500", Default: "border-transparent hover:border-orange-300 hover:text-orange-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-orange-400 px-1 pt-1 text-sm font-medium hover:border-orange-200 hover:text-orange-400"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-orange-200 hover:text-orange-400"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-orange-200 hover:text-orange-400"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-orange-200 hover:text-orange-400"
                  >
                    C/V
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-orange-50 border-orange-500 text-orange-700", Default: "border-transparent hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-orange-400 bg-orange-200 py-2 pl-3 pr-4 text-base font-medium text-orange-400"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-orange-400 hover:bg-orange-200 hover:text-orange-400"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-orange-400 hover:bg-orange-200 hover:text-orange-400"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium hover:border-orange-400 hover:bg-orange-200 hover:text-orange-400"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
