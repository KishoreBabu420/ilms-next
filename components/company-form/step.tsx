interface StepProps {
  children: React.ReactNode;
  title: String;
  active: Boolean;
}

const Step = ({ children, title, active }: StepProps) => {
  return (
    <div className='flex text-left space-x-7 text-white my-4'>
      <div
        className={`text-center w-10 h-10 rounded-full font-bold border-2 p-2  border-blue-700 ${
          active ? 'bg-blue-700 text-white' : 'bg-transparent text-black'
        }`}
      >
        {children}
      </div>
      <div className='hidden md:block'>
        <div className='font-medium text-blue-700 text-sm'>Step {children}</div>
        <div className='font-bold text-blue-800 text-md'>{title}</div>
      </div>
    </div>
  );
};

export default Step;
