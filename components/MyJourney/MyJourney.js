import React from 'react'
import Journey from './Journey'

const MyJourney = ({ journeys }) => {
  return (
    <section
      className='flex justify-center items-center px-4 scroll-m-20'
      id='myjourney'
    >
      <div className='py-16 max-w-xs h-full sm:max-w-lg md:max-w-xl lg:max-w-3xl'>
        <h2 className='mb-16 text-3xl font-bold text-center underline text-main dark:text-secondary/90 underline-offset-4'>
          MY JOURNEY
        </h2>
        <div className='relative border-l-2 border-main/50 dark:border-secondary/50'>
          {journeys?.map((journey) => (
            <Journey key={journey.id} {...journey} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyJourney
