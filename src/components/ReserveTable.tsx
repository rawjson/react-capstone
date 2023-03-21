import { Menu, Transition } from '@headlessui/react';
import { markaziText } from 'config';
import { Fragment } from 'react';
import { ChevronDownIcon } from '~/assets';

export default function ReserveTable() {
  return (
    <div>
      <form
        className='flex flex-col px-4 mt-10 text-2xl'
        style={markaziText.style}
      >
        <label htmlFor='date-picker font-semibold' className='font-semibold'>
          Select a date
        </label>
        <input
          id='date-picker'
          type='date'
          className='border border-gray-200 h-12 px-2 rounded-lg'
        />

        <label htmlFor='time-picker' className='font-semibold mt-10'>
          Select a time
        </label>

        <input
          type='time'
          id='time-picker'
          min='09:00'
          max='18:00'
          required
          className='border border-gray-200 h-12 px-2 rounded-lg'
        />

        <label htmlFor='occasion' className='font-semibold mt-10'>
          Select a occasion
        </label>

        <OccasionMenu />
      </form>
    </div>
  );
}

const OccasionMenu = () => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          Options
          <ChevronDownIcon
            className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Edit
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
