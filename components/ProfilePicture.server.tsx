import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className='relative w-20 h-20 mb-2'>
      <Image
        src='/profile.webp'
        className='relative z-20 w-full h-full rounded-full'
        alt=''
        width={80}
        height={80}
      />

      <div className='absolute top-0 left-0 z-10 w-full h-full transform scale-105 bg-black rounded-full dark:bg-green-400'></div>
    </div>
  );
}
