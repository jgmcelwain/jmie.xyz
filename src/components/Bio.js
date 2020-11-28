import React from 'react';

function Bio() {
  return (
    <section className='w-full flex justify-start items-center flex-col text-center text-black dark:text-green-400'>
      <div className='w-20 h-20 mb-2'>
        <img
          src='/profile-picture.jpg'
          alt='Picture of Jamie'
          className='w-full h-full rounded-full border-black dark:border-green-400 border-2'
        />
      </div>

      <h3 className='text-xl font-semibold'>Jamie McElwain</h3>

      <p className='text-sm'>
        Frontend Developer at{' '}
        <a
          href='https://chooseesteem.com'
          target='_blank'
          rel='noreferrer'
          className='underline hover:text-blue-500 dark:hover:text-green-200'
        >
          Esteem
        </a>
      </p>
    </section>
  );
}

export default Bio;
