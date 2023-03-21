import Image from 'next/image';
import { karla, markaziText } from 'config';
import Button from './Button';
import Router from 'next/router';

export default function HeroSection() {
  return (
    <div className='grid md:grid-cols-2 my-20 md:py-20 w-full px-4'>
      <div className=' col-span-1 max-w-md my-auto' style={markaziText.style}>
        <h1 className='text-7xl font-bold'>Little Lemon</h1>
        <h2 className='text-3xl mt-1'>Chicago</h2>
        <p style={karla.style} className='mt-5 text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='mt-10'>
          <Button onClick={() => Router.push('/reservations')}>
            Reserve a Table
          </Button>
        </div>
      </div>
      <div className='mt-10 md:mt-0 col-span-1 w-full flex justify-end items-center'>
        <span className='relative rounded-xl w-full h-96 overflow-clip'>
          <Image
            src='/restaurant.jpg'
            alt='little lemon restaurant sitting area'
            fill
          />
        </span>
      </div>
    </div>
  );
}
