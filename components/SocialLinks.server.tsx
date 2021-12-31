import { cloneElement } from 'react';
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

const SOCIAL_LINKS = [
  {
    key: 'github',
    name: 'GitHub',
    url: 'https://github.com/jgmcelwain',
    icon: <GitHub />,
  },
  {
    key: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/jamiemcelwain',
    icon: <Linkedin />,
  },
  {
    key: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/jgmcelwain',
    icon: <Twitter />,
  },
  {
    key: 'email',
    name: 'Email',
    url: 'mailto:jmie@hey.com',
    icon: <Mail />,
  },
];

export default function SocialLinks() {
  return (
    <section className='grid grid-cols-1 gap-3 mt-4 xs:grid-cols-2'>
      {SOCIAL_LINKS.map((socialLink) => (
        <div key={socialLink.key} className='relative w-full group'>
          <a
            href={socialLink.url}
            target='_blank'
            rel='noreferrer'
            className='w-full space-x-3 z-20 relative bg-white dark:bg-black text-black hover:text-blue-500 dark:text-green-400 dark:hover:text-green-200 p-2 border border-black dark:border-green-400 rounded-lg flex justify-center items-center transition-all ease-out transform-gpu translate-x-0 translate-y-0 group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] focus-ring'
          >
            {cloneElement(socialLink.icon, { size: 18 })}

            <span className='text-sm font-medium'>{socialLink.name}</span>
          </a>

          <div className='w-full h-full inset-0 absolute z-10 bg-black dark:bg-green-400 group-hover:bg-blue-500 dark:group-hover:bg-green-200 rounded-lg transition-all ease-out transform-gpu origin-top-left translate-x-0.5 translate-y-0.5 group-hover:translate-x-[3px] group-hover:translate-y-[3px]' />
        </div>
      ))}
    </section>
  );
}
