import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex items-center justify-center gap-8'>
      <article className='h-full w-full flex items-center justify-center'>
        {children}
      </article>
      <article className='h-full w-full flex items-center justify-center border-l-4'>
        <Image
          src='/assets/gmmco.jpg'
          alt='logo'
          height={80}
          width={240}
          className='text-center'
        />
      </article>
    </div>
  );
};

export default AuthLayout;
