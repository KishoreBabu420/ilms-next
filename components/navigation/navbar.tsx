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

              <div className='md:space-x-6 justify-end items-center ml-auto flex space-x-3'>
                <div className='justify-center items-center flex relative'>
                  <Image
                    src='/assets/user.jpg'
                    className='object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300'
                    alt='person'
                    width={50}
                    height={50}
                  />
                  <p className='font-semibold text-sm'>John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
