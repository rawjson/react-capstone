import { ReactNode } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='max-w-[1280px] mx-auto my-5'>
      <Header />
      {children}
    </main>
  );
}
