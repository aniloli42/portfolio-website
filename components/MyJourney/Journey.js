const Journey = ({ start, end, title, description }) => {
  return (
    <div className='relative mb-3 border-gray-400 pl-6 after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:-translate-x-[55%] after:rounded-full after:border-4 after:bg-dark-gray after:[content:""] md:pl-8'>
      <div className='relative bg-white px-4 py-2 after:absolute after:top-0 after:left-0 after:h-0 after:w-0 after:-translate-x-full after:translate-y-1/4  after:border-t-[8px] after:border-b-[8px] after:border-r-[10px] after:border-l-white after:border-t-transparent after:border-b-transparent after:[content:""]'>
        <div>
          <p className='text-md text-black/40'>
            {start}-{end}
          </p>
        </div>
        <h2 className='text-xl font-semibold text-black'>{title}</h2>
        <p className='my-2 text-black/70'>{description}</p>
      </div>
    </div>
  );
};

export default Journey;
