import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className='relative w-20 h-20 mb-2 group'>
      <Image
        src='/profile.webp'
        className='relative z-20 w-full h-full rounded-full'
        alt=''
        width={80}
        height={80}
      />

      <div className='absolute top-0 left-0 z-10 w-full h-full transform scale-105 bg-black rounded-full dark:bg-green-400'></div>

      <a
        href='mailto:jmie@hey.com'
        className='group absolute bottom-0 right-0 z-30 flex items-center justify-center w-8 h-8 leading-none transform translate-x-1.5 translate-y-1.5 bg-white border-2 border-black rounded-full focus-ring dark:bg-black dark:border-green-400 hover:scale-105 origin-bottom-right transition-transform'
        aria-label='Email Jamie'
      >
        <span aria-hidden className='group-hover:animate-wave'>
          👋
        </span>
      </a>
    </div>
  );
}
