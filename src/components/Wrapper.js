import React from 'react';

function Wrapper({ children }) {
  return (
    <div className='w-full h-full flex justify-center items-start sm:items-center p-4 sm:p-0'>
      <div className='w-full max-w-md relative'>
        <div className='w-full z-20 relative bg-white p-4 border border-black rounded-sm'>
          {children}
        </div>

        <div className='w-full h-full inset-0 absolute z-10 bg-black rounded-sm transform translate-x-1 translate-y-1' />
      </div>
    </div>
  );
}

export default Wrapper;
