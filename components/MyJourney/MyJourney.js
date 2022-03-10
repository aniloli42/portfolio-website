import React from "react";
import Journey from "./Journey";

const datas = [
  {
    start: "2018",
    end: "2020",
    title: "DCOM",
    description: "Hello World"
  }
];

const MyJourney = ({ journeys }) => {
  return (
    <section
      className='mt-20 flex scroll-m-20  items-center justify-center px-4'
      id='myjourney'
    >
      <div className='h-full max-w-xs py-16 sm:max-w-lg md:max-w-xl lg:max-w-3xl'>
        <h2 className='mb-16 text-center text-3xl font-bold text-main underline underline-offset-4'>
          MY JOURNEY
        </h2>
        <div className='relative my-12 border-l-4 border-main/20'>
          {journeys?.map((journey) => (
            <Journey key={journey.node.id} {...journey.node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
