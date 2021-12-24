import Bio from '@/components/Bio.server';
import SocialLinks from '@/components/SocialLinks.server';

export default function Home() {
  return (
    <div className='flex items-start justify-center w-full h-full min-h-screen p-4 min-h-screen-ios min-w-screen sm:items-center sm:p-0'>
      <div className='relative w-full max-w-md transform translate-0 sm:-translate-y-10'>
        <div className='relative z-20 w-full p-4 bg-white border-2 border-black rounded-2xl dark:bg-black dark:border-green-400'>
          <Bio />

          <SocialLinks />
        </div>

        <div className='absolute inset-0 z-10 w-full h-full transform translate-x-1.5 translate-y-1.5 bg-black dark:bg-green-400 rounded-2xl' />
      </div>
    </div>
  );
}
