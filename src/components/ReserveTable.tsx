import { Menu, Transition } from '@headlessui/react';
import { markaziText } from 'config';
import { ChangeEvent, FormEvent, Fragment, useMemo, useState } from 'react';
import { ChevronDownIcon } from '~/assets';
import Button from './Button';
const OccasionMenuItems = ['Birthday', 'Engagement', 'Anniversary'];

export default function ReserveTable() {
  const [
    { ocassion, date, time, guests, isOccasionError, isTimeError },
    setFormState,
  ] = useState({
    ocassion: 'Occasion',
    date: '',
    time: 'Select...',
    guests: 1,
    isOccasionError: false,
    isTimeError: false,
  });

  const seededRandom = function (seed: any) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date: Date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ocassion === 'Occasion') {
      setFormState((prev) => ({ ...prev, isOccasionError: true }));
      return;
    }

    return true;
  };

  const availableTimes: Array<string> = useMemo(() => {
    return fetchAPI(new Date(date));
  }, [date]);

  return (
    <>
      <form
        id='table-booking-form'
        className='flex flex-col px-4 text-2xl space-y-4 bg-[#495E57] h-screen py-10 text-white'
        style={markaziText.style}
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-2 items-center'>
          <label htmlFor='date-picker font-semibold' className='font-semibold'>
            Select a date
          </label>
          <input
            id='date-picker'
            type='date'
            name='date'
            className='border border-gray-200 h-12 px-2 rounded-lg text-black'
            onChange={handleOnChange}
            value={date}
            required
            min='21/03/2023'
          />
        </div>

        <div className='grid grid-cols-2 items-center'>
          <label htmlFor='time-picker' className='font-semibold'>
            Select a time
          </label>

          <PopoverMenu
            menu={availableTimes}
            defaultOption={time}
            onChange={(value) => {
              setFormState((prev) => ({
                ...prev,
                time: value,
                isTimeError: false,
              }));
            }}
            isError={isTimeError}
          />
        </div>

        <div className='grid grid-cols-2 items-center'>
          <label htmlFor='time-picker' className='font-semibold'>
            Number of guests
          </label>

          <input
            type='number'
            placeholder='1'
            min='1'
            max='10'
            id='guests'
            name='guests'
            onChange={handleOnChange}
            value={guests}
            className='border border-gray-200 h-12 px-2 rounded-lg text-black text-center'
            required
          />
        </div>

        <div className='grid grid-cols-2 items-center'>
          <label htmlFor='occasion' className='font-semibold'>
            Select occasion
          </label>

          <PopoverMenu
            menu={OccasionMenuItems}
            defaultOption={ocassion}
            onChange={(value) => {
              setFormState((prev) => ({
                ...prev,
                ocassion: value,
                isOccasionError: false,
              }));
            }}
            isError={isOccasionError}
          />
        </div>

        <div className='py-5'>
          <Button
            type='submit'
            // onClick={handleSubmit}
            style={{
              width: '100%',
              backgroundColor: '#F4CE14',
              color: '#495E57',
              fontSize: '28px',
              height: '52px',
              fontWeight: 600,
            }}
          >
            Continue
          </Button>
        </div>
      </form>
    </>
  );
}

const PopoverMenu = ({
  menu,
  defaultOption = '',
  onChange = () => {},
  isError = false,
}: {
  menu: Array<string>;
  defaultOption?: string;
  onChange?: (value: string) => void;
  isError?: boolean;
}) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className={` ${
            isError && 'ring-2 ring-red-400'
          } flex items-center w-full justify-between px-4 rounded-md bg-white h-12 text-[24px] font-medium text-[#495E57] hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span>{defaultOption}</span>
          <ChevronDownIcon
            className='ml-5 h-5 w-5 text-[#495E57]'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      {isError && (
        <span className='absolute left-0 -bottom-7 text-[18px] italic text-red-400'>
          Select an occasion
        </span>
      )}

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute z-10 right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {menu.map((item) => {
            return (
              <div className='px-1 py-1 ' key={item}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='button'
                      className={`${
                        active ? 'bg-[#F4CE14] text-[#495E57]' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-[24px] text-center`}
                      onClick={() => onChange(item)}
                    >
                      {item}
                    </button>
                  )}
                </Menu.Item>
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
