import React from "react";

const MyJourney = () => {
  return (
    <section
      className='flex min-h-screen  items-center justify-center p-4'
      id='myjourney'
    >
      <div className='h-full max-w-xs py-16 sm:max-w-lg md:max-w-xl lg:max-w-3xl'>
        <h2 className='mb-16 text-center text-3xl font-bold text-white underline underline-offset-4'>
          MY JOURNEY
        </h2>
        <div className='relative my-12 border-l-4'>
          <Journey />
          <Journey />
          <Journey />
        </div>
      </div>
    </section>
  );
};

// #F2F3F7

const Journey = () => {
  return (
    <div className='relative mb-3 border-gray-400 pl-6 after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:-translate-x-[55%] after:rounded-full after:border-4 after:bg-light-white after:[content:""] md:pl-8'>
      <div className='relative bg-light-white px-4 py-2 after:absolute after:top-0 after:left-0 after:h-0 after:w-0 after:-translate-x-full after:translate-y-1/4  after:border-t-[8px] after:border-b-[8px] after:border-r-[10px] after:border-l-light-white after:border-t-transparent after:border-b-transparent after:[content:""]'>
        <div>
          <p className='text-md text-black/40'>2020-Running</p>
        </div>
        <h2 className='text-xl font-semibold text-black'>
          Diploma in Computer Engineering
        </h2>
        <p className='my-2 text-black/70'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          animi accusantium sunt ut consequuntur, repudiandae vitae aperiam rem
          adipisci praesentium.
        </p>
      </div>
    </div>
  );
};

export default MyJourney;
