import { Navbar } from '@/components/navigation/navbar';
import { Sidebar } from '@/components/navigation/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className='flex gap-1'>
        <Sidebar />
        <div className=' flex items-start justify-center w-[calc(100%-12rem)] h-[calc(100vh-4.5rem)]'>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
