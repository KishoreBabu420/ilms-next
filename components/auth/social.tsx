'use client';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

export const Social = () => {
  return (
    <div className='flex flex-col w-full gap-4'>
      <p className='text-gray-600  text-center text-md  '>
        Your Social Campaigns
      </p>
      <div className='flex items-center w-full gap-x-2'>
        <Button
          size='lg'
          className='w-full'
          variant='outline'
          onClick={() => {}}
        >
          <FcGoogle className='h-5 w-5' />
        </Button>

        <Button
          size='lg'
          className='w-full'
          variant='outline'
          onClick={() => {}}
        >
          <FaGithub className='h-5 w-5' />
        </Button>
      </div>
    </div>
  );
};
