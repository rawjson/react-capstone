import { markaziText } from 'config';

export default function Footer() {
  return (
    <div className='my-20 w-full' style={markaziText.style}>
      <ul className='flex space-x-5 justify-center text-2xl'>
        <li>Home</li>
        <li>Contact us</li>
        <li>About</li>
      </ul>
    </div>
  );
}
