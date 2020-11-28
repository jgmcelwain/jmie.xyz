import React from 'react';

function Bio() {
  return (
    <section className='w-full flex justify-start items-center flex-col text-center'>
      <div className='w-20 h-20 mb-2'>
        <img
          src='/me.png'
          alt='Picture of Jamie'
          className='w-full h-full rounded-full border-black border-2'
        />
      </div>

      <h3 className='text-xl font-semibold'>Jamie McElwain</h3>

      <p className='text-sm'>Frontend Developer</p>
    </section>
  );
}

export default Bio;
