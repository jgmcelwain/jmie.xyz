import Image from 'next/image';

export default function Bio() {
  return (
    <section className='flex flex-col items-center justify-start w-full text-center text-black dark:text-green-400'>
      <div className='relative w-20 h-20 mb-2 group'>
        <Image
          src='/profile.webp'
          className='relative z-20 w-full h-full rounded-full'
          alt=''
          width={80}
          height={80}
        />

        <div className='absolute top-0 left-0 z-10 w-full h-full transform scale-105 bg-black rounded-full dark:bg-green-400'></div>
      </div>

      <h3 className='text-xl font-semibold'>Jamie McElwain</h3>

      <p className='text-sm'>
        Frontend Developer at{' '}
        <a
          href='https://chooseesteem.com'
          target='_blank'
          rel='noreferrer'
          className='underline rounded-sm hover:text-blue-500 dark:hover:text-green-200 focus:outline-none focus:ring-2 ring-blue-500 dark:ring-green-200 ring-offset-2 ring-offset-white dark:ring-offset-black'
        >
          Esteem
        </a>
        .
      </p>
    </section>
  );
}
