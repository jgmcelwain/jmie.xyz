import React from 'react';

import useDarkMode from 'use-dark-mode';

import { Sun, Moon } from 'react-feather';

function DarkModeToggle() {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    element: document.documentElement,
  });

  return (
    <div className='fixed bottom-0 right-0 transform -translate-x-2 -translate-y-2 text-black hover:text-blue-500 dark:text-green-400 dark:hover:text-green-200'>
      <button
        onClick={darkMode.toggle}
        className='focus:ring-4 bg-transparent rounded-full p-1 focus:outline-none'
      >
        {darkMode.value === true ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default DarkModeToggle;
