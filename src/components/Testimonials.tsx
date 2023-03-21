import { karla, markaziText } from 'config';
import { StarIcon, StarSolidIcon } from '~/assets';
import Image from 'next/image';

const ratings = [
  {
    name: 'Gustav Christensen',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    reviewText:
      'Amazing food and super fast delivery. Little lemon is my go to restaurant.',
    rating: 5,
  },
  {
    name: 'Yashodha Mugeraya',
    image: 'https://randomuser.me/api/portraits/women/39.jpg',
    reviewText: 'Super delicious would love to order again!',
    rating: 5,
  },
  {
    name: 'Ava Stephens',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    reviewText: 'Unforgettable ordering experience. It made my day.',
    rating: 5,
  },
  {
    name: 'Malou Møller',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
    reviewText:
      'My kids love the party combo and reserving a table is made so easy. Thanks lemon.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div style={markaziText.style} className='my-20 py-10 md:py-0 px-4'>
      <h2 style={markaziText.style} className='text-center text-5xl'>
        Testimonials
      </h2>

      {/* cards */}
      <div className='grid md:grid-cols-4 gap-5 mt-5'>
        {ratings.map(({ rating, name, reviewText, image }, index) => {
          return (
            <div
              key={index}
              className='p-5 border border-gray-200 col-span-1 rounded-xl space-y-4 shadow-md hover:ring-1 ring-[#EE9972] hover:border-[#EE9972] transition ease-in-out duration-200'
            >
              <div className='flex items-center'>
                {Array(5)
                  .fill('')
                  .map((_, index) => {
                    if (rating >= index + 1) {
                      return (
                        <span key={index}>
                          <StarSolidIcon className='text-yellow-500 w-6 h-6' />
                        </span>
                      );
                    }
                    return (
                      <span key={index}>
                        <StarIcon className='text-yellow-500 w-6 h-6' />
                      </span>
                    );
                  })}
              </div>

              <div className='flex items-center space-x-4'>
                <div className='relative w-20 h-20 rounded-lg overflow-clip'>
                  <Image src={image} alt='' fill />
                </div>
                <span className='text-3xl'>{name}</span>
              </div>
              <div>
                <p style={karla.style} className=''>
                  {reviewText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
