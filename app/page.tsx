'use client';
import { useLayoutEffect } from 'react';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

import { useAdminGlobalContext } from '@/context/admin.context';
import { redirect } from 'next/navigation';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const Home = () => {
  const { userIsInactive } = useAdminGlobalContext();

  useLayoutEffect(() => {
    const authState = userIsInactive;
    if (userIsInactive) {
      redirect('/login');
    }
  }, [userIsInactive]);
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className,
          )}
        >
          🔒 Auth
        </h1>
        <p className='text-lg text-white'>A simple authentication service</p>
        <div>
          <LoginButton>
            <Button
              variant='secondary'
              size='lg'
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
