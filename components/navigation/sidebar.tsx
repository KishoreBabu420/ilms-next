import Link from 'next/link';

import { menuItems } from '@/constants';

export const Sidebar = () => {
  return (
    <aside className='w-64 bg-white'>
      <div className='h-16 flex items-center justify-center border-b-2'>
        <h2 className='text-2xl font-semibold text-gray-800 '>Dashboard</h2>
      </div>
      <ul>
        {menuItems.map(({ icon, text }) => {
          return (
            <li
              className='flex items-center p-6 hover:bg-gray-100 '
              key={text}
            >
              <Link
                className='flex items-center space-x-4'
                href='#'
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
