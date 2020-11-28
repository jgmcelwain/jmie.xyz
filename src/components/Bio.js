import React from 'react';

function Bio() {
  return (
    <section className='w-full flex justify-start items-center flex-col text-center text-black dark:text-green-400'>
      <div className='group w-20 h-20 mb-2 relative'>
        <img
          src='/profile-picture.jpg'
          alt='Picture of Jamie'
          className='relative w-full h-full rounded-full z-20'
        />

        <div className='absolute top-0 left-0 w-full h-full transform scale-105 z-10 rounded-full bg-black dark:bg-green-400'></div>
      </div>

      <h3 className='text-xl font-semibold'>Jamie McElwain</h3>

      <p className='text-sm'>
        Frontend Developer at{' '}
        <a
          href='https://chooseesteem.com'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-blue-500 dark:hover:text-green-200 rounded focus:outline-none focus:ring ring-blue-500 dark:ring-green-200 ring-offset-4 ring-offset-white dark:ring-offset-black'
        >
          Esteem
        </a>
      </p>
    </section>
  );
}

export default Bio;
