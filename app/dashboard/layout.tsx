import { Navbar } from '@/components/navigation/navbar';
import { Sidebar } from '@/components/navigation/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex gap-4'>
        <Sidebar />
        <div className=' flex items-center justify-center w-[calc(100%-16rem)] h-[calc(100vh-4.5rem)]'>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
