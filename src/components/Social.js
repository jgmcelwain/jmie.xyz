import React from 'react';

import { GitHub, Linkedin, Twitter } from 'react-feather';

const ICON_SIZE = 18;
const SOCIAL_LINKS = [
  {
    key: 'github',
    name: 'GitHub',
    url: 'https://github.com/jgmcelwain',
    icon: <GitHub size={ICON_SIZE} />,
  },
  {
    key: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/jamiemcelwain',
    icon: <Linkedin size={ICON_SIZE} />,
  },
  {
    key: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/jgmcelwain',
    icon: <Twitter size={ICON_SIZE} />,
  },
];

function Social() {
  return (
    <div className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3'>
      {SOCIAL_LINKS.map((socialLink) => (
        <div key={socialLink.key} className='w-full relative group'>
          <a
            href={socialLink.url}
            target='_blank'
            rel='noreferrer'
            className='w-full z-20 relative bg-white text-black p-2 border border-black rounded-sm flex justify-center items-center transition-transform ease-out transform-gpu translate-x-0 translate-y-0 group-hover:-translate-x-0.25 group-hover:-translate-y-0.25'
          >
            {socialLink.icon}

            <span className='text-sm pl-2 font-medium'>{socialLink.name}</span>
          </a>

          <div className='w-full h-full inset-0 absolute z-10 bg-black rounded-sm transition-transform ease-out transform-gpu origin-top-left translate-x-0.5 translate-y-0.5 group-hover:translate-x-0.75 group-hover:translate-y-0.75' />
        </div>
      ))}
    </div>
  );
}

export default Social;
