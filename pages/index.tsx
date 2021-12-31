import Bio from '@/components/Bio.server';
import Block from '@/components/Block.server';
import SocialLinks from '@/components/SocialLinks.server';

export default function Home() {
  return (
    <main className='flex items-start justify-center w-full h-full min-h-screen p-4 min-h-screen-ios min-w-screen sm:items-center sm:p-0'>
      <div className='w-full max-w-md transform translate-0 sm:-translate-y-[1vh]'>
        <Block>
          <Bio />

          <SocialLinks />
        </Block>
      </div>
    </main>
  );
}
