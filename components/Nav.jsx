'use client';

import { HomeIcon, UsersIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, CogIcon, MagnifyingGlassIcon, BellIcon, Bars3Icon, XMarkIcon, ChartBarIcon  } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './Theme';

const navigation = [
  {name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {name: 'Users' , href: '/users' , icon: UsersIcon },
  {name: 'Account' , href: '/account' , icon: CogIcon },
  {name: 'Projects' , href: '/projects' , icon: FolderIcon },
  {name: 'Calendar' , href: '/calendar' , icon: CalendarIcon },
  {name: 'Documentation' , href: '/documentation' , icon: DocumentDuplicateIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <div>
      <div className={`absolute left-0 inset-y-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex grow flex-col gap-y-5 overflow-y-aut0 bg-neutral-300 dark:bg-gray-700 dark:border-gray-950 border-r border-gray-400 px-6 pb-4">
          <div className="flex h-16 shrink-0 justify-between items-center">
            <h2 className='font-bold text-xl tracking-wide'>GOLD ERP</h2>
            <button
            type="button"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" style={{ strokeWidth: 3 }} aria-hidden="true" />
          </button>
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                      href={item.href}
                      className={classNames(
                        currentPath === item.href
                        ? 'bg-gradient-to-r from-green-800 to-green-950 text-white'
                        : 'hover:text-white hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      >
                        <item.icon
                        className={classNames(
                          currentPath === item.href ? 'text-white' : 'group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex flex-1 flex-col lg:ml-72'>
        <div className='sticky top-0 z-40 w-full lg:mx-auto lg:max-w-7xl'>
          <div className='flex h-16 items-center gap-x-4 border-b border-gray-200 bg-neutral-300 dark:bg-gray-700 dark:border-gray-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:shadow-none'>
            <button
              type="button"
              className="-m-2.5 p-2.5 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" style={{ strokeWidth: 2 }} aria-hidden="true" />
            </button>
            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-1 h-full w-5"
                  aria-hidden="true"
                  style={{ strokeWidth: 2}}
                />
                <input
                  id="search-field"
                  className="block h-10 mt-3 rounded w-80 border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm focus:outline-green-950"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <ThemeToggle />
                <button type="button" className="-m-2.5 p-2.5 hover:text-gray-800">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <ChartBarIcon className='h-6 w-6 hover:text-gray-800 cursor-pointer' aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar



 {/* Profile dropdown */}
                {/* <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Tom Cook
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-50' : '',
                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu> */}