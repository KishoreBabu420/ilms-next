import Image from 'next/image';

import { UserIcon } from './userIcon';

export const Navbar = () => {
  return (
    <div>
      <div className='bg-white'>
        <div className='flex-col flex'>
          <div className='w-full border-b-2 border-gray-200'>
            <div className='bg-white h-16 justify-between items-center mx-auto px-4 flex'>
              <div>
                <Image
                  src='/assets/gmmco.jpg'
                  className='block btn- h-8 w-auto'
                  alt='logo'
                  width={120}
                  height={40}
                />
              </div>

              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
