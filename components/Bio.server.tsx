import ProfilePicture from '@/components/ProfilePicture.server';

export default function Bio() {
  return (
    <section className='flex flex-col items-center justify-start w-full text-center text-black dark:text-green-400'>
      <ProfilePicture />

      <h3 className='text-xl font-semibold'>Jamie McElwain</h3>

      <p className='text-sm'>
        Frontend Developer at{' '}
        <a
          href='https://chooseesteem.com'
          target='_blank'
          rel='noreferrer'
          className='underline rounded-sm hover:text-blue-500 dark:hover:text-green-200 focus-ring'
        >
          Esteem
        </a>
        .
      </p>
    </section>
  );
}
