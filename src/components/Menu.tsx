import { karla, markaziText } from 'config';
import Image from 'next/image';
import { ScooterIcon } from '~/assets/ScooterIcon';
import Button from './Button';

const MENU = [
  {
    name: 'Greek salad',
    price: '12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
    image: '/greek_salad.jpg',
  },
  {
    name: 'Bruchetta',
    price: '5.99',
    description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
    image: '/bruchetta.png',
  },
  {
    name: 'Lemon Dessert',
    price: '5.00',
    description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
    image: '/lemon_dessert.jpg',
  },
];

export default function Menu() {
  return (
    <div style={markaziText.style} className='my-20 px-4'>
      <div className='flex justify-between md:px-5'>
        <h2 className='text-5xl'>Specials</h2>
        <Button>Online Menu</Button>
      </div>

      <div className='my-10 grid md:grid-cols-3 gap-y-10 gap-x-5'>
        {MENU.map((item, index) => {
          return (
            <div
              key={index}
              className='col-span-1 rounded-xl overflow-clip border border-gray-200 max-w-sm mx-auto hover:ring-1 ring-[#EE9972] hover:border-[#EE9972] transition ease-in-out duration-200 shadow-md'
            >
              <div className='relative h-60 w-full'>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  object-fit='cover'
                />
              </div>
              <div className='px-4 space-y-4 my-4'>
                <h3 className='flex justify-between text-2xl font-semibold'>
                  <span className=''>{item.name}</span>{' '}
                  <span className='text-[#EE9972]'>$ {item.price}</span>
                </h3>
                <p
                  style={karla.style}
                  className='min-h-[100px] max-h-[100px] overflow-hidden'
                >
                  {item.description}
                </p>

                <button className='text-xl font-semibold flex items-center space-x-4'>
                  <span>Order a delivery</span>
                  <span>
                    <ScooterIcon />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
