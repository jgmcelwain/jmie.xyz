import React from 'react';

function Wrapper({ children }) {
  return (
    <div className='w-full h-full flex justify-center items-start sm:items-center p-4 sm:p-0'>
      <div className='w-full max-w-md relative'>
        <div className='w-full z-20 relative bg-white dark:bg-black p-4 border border-black dark:border-green-400 rounded-sm'>
          {children}
        </div>

        <div className='w-full h-full inset-0 absolute z-10 bg-black dark:bg-green-400 rounded-sm transform translate-x-0.75 translate-y-0.75' />
      </div>
    </div>
  );
}

export default Wrapper;
