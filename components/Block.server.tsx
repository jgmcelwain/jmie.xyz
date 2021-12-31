import { ReactNode } from 'react';

export default function Block({ children }: { children: ReactNode }) {
  return (
    <div className='relative'>
      <div className='relative z-20 w-full p-4 bg-white border-2 border-black rounded-2xl dark:bg-black dark:border-green-400'>
        {children}
      </div>

      <div className='absolute inset-0 z-10 w-full h-full transform bg-black translate-x-1.5 translate-y-1.5 dark:bg-green-400 rounded-2xl' />
    </div>
  );
}
