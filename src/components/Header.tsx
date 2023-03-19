import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { HamburgerIcon } from '~/assets';

const navigation = [
  { label: 'Home', href: '' },
  { label: 'About', href: '' },
  { label: 'Menu', href: '' },
  { label: 'Reservation', href: '' },
  { label: 'Order Online', href: '' },
  { label: 'Login', href: '' },
];

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-5 px-4'>
      <Image
        src='/Logo.svg'
        width={200}
        height={50}
        alt='little lemon restaurant logo'
      />
      <NavigationMenuDesktop />
      <NavigationMenuMobile />
    </header>
  );
}

// Navigation Desktop
const NavigationMenuDesktop = () => {
  return (
    <nav className='hidden md:block px-4'>
      <ul className='flex space-x-10'>
        {navigation.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.href} className='font-medium text-lg'>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// Navigation Mobile
const NavigationMenuMobile = () => {
  return (
    <Popover className='relative md:hidden'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
          ${open ? 'bg-orange-700 text-white ' : 'text-opacity-90'}
          group inline-flex items-center rounded-md  px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <HamburgerIcon className='w-6 h-6' />
            <span className='sr-only'>Hamburge menu icon</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 mt-3 w-screen max-w-[200px] transform sm:px-0 lg:max-w-3xl right-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                  {navigation.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-900'>
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
