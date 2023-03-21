import { ComponentPropsWithoutRef } from 'react';

export default function Button(props: ComponentPropsWithoutRef<'button'>) {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className='bg-black text-white w-[200px] h-[60px] text-[24px] rounded-md hover:opacity-75 transition ease-in-out duration-200'
    >
      {children}
    </button>
  );
}
