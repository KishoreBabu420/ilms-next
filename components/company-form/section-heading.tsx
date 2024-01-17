interface SectionHeadingProps {
  title: String;
  desc: String;
}

const SectionHeading = ({ title, desc }: SectionHeadingProps) => {
  return (
    <div className='mb-4'>
      <h1 className='text-3xl font-bold text-[#02295a] my-1'>{title}</h1>
      <p className='text-[#1a1a1c] text-sm'>{desc}</p>
    </div>
  );
};

export default SectionHeading;
