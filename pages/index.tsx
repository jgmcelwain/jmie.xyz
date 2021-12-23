import type { NextPage } from 'next';

import Bio from '@/components/Bio.server';
import SocialLinks from '@/components/SocialLinks.server';

const Home: NextPage = () => {
  return (
    <div>
      <div className='flex items-start justify-center w-full h-full min-h-screen p-4 min-w-screen sm:items-center sm:p-0'>
        <div className='relative w-full max-w-md'>
          <div className='relative z-20 w-full p-4 bg-white border border-black rounded-sm dark:bg-black dark:border-green-400'>
            <Bio />

            <SocialLinks />
          </div>

          <div className='w-full h-full inset-0 absolute z-10 bg-black dark:bg-green-400 rounded-sm transform translate-x-[3px] translate-y-[3px]' />
        </div>
      </div>
    </div>
  );
};

export default Home;
