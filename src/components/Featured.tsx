import Image from 'next/image';
import { karla, markaziText } from 'config';
import Button from './Button';

export default function Featured() {
  return (
    <div className='grid md:grid-cols-2 my-20 md:py-20 w-full px-5 md:px-10'>
      <div className=' col-span-1 max-w-md my-auto' style={markaziText.style}>
        <h1 className='text-7xl font-bold'>Little Lemon</h1>
        <h2 className='text-3xl mt-1'>Chicago</h2>
        <p style={karla.style} className='mt-5 text-lg'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className='hidden col-span-1 w-full md:flex justify-end items-center relative'>
        <Image
          src='/restaurantfood.jpg'
          alt='little lemon restaurant sitting area'
          width={280}
          height={200}
          className=' absolute rounded-lg shadow-lg right-10'
        />

        <Image
          src='/restaurant_chef.jpg'
          alt='little lemon restaurant sitting area'
          className=' absolute right-60 object-cover rounded-lg shadow-lg'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
