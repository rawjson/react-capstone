import Image from 'next/image';
import { markaziText } from 'config';
import Button from './Button';

export default function HeroSection() {
  return (
    <div className='grid grid-cols-2 my-20 w-full px-4'>
      <div className=' col-span-1 max-w-md my-auto' style={markaziText.style}>
        <h1 className='text-7xl font-bold'>Little Lemon</h1>
        <h2 className='text-3xl mt-1'>Chicago</h2>
        <p className='mt-5 text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='mt-10'>
          <Button onClick={() => {}}> Reserve a Table</Button>
        </div>
      </div>
      <div className=' col-span-1 w-full flex justify-end items-center'>
        <span className='relative rounded-lg w-full h-96 overflow-clip'>
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
