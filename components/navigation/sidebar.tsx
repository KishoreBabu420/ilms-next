import Link from 'next/link';

import { menuItems } from '@/constants';

export const Sidebar = () => {
  return (
    <aside className='w-64 bg-white h-[100vh-4rem]'>
      <div className='h-16 flex items-center justify-center border-b-2'>
        <h2 className='text-2xl font-semibold text-gray-800 '>Dashboard</h2>
      </div>
      <ul>
        {menuItems.map(({ icon, text, href }) => {
          return (
            <li
              className='flex items-center p-6 hover:bg-gray-100 '
              key={text}
            >
              <Link
                className='flex items-center space-x-4'
                href={href}
              >
                {icon}
                <span className='text-md font-medium'>{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
