import React from 'react';

import Wrapper from './components/Wrapper';
import DarkModeToggle from './components/DarkModeToggle';
import Bio from './components/Bio';
import Social from './components/Social';

function App() {
  return (
    <>
      <Wrapper>
        <Bio />

        <Social />
      </Wrapper>
      <DarkModeToggle />
    </>
  );
}

export default App;
