import { calculateTimePeriod } from '../../utils/calculateTimePeriod'
import { dateHandler } from '../../utils/dateHandler'

const Journey = ({ title, description, isRunning, endAt, startAt }) => {
  return (
    <div className='relative mb-3 after:absolute after:-left-0.5 after:-top-1 after:h-2.5 after:w-2.5 after:-translate-x-1/3   after:bg-zinc-700 dark:after:bg-zinc-400 after:rounded-full after:[content:""] '>
      <hr className='mb-2 border-0.5 border-zinc-500 dark:border-zinc-400' />

      <div className='px-6 py-1 md:px-8 md:py-3'>
        <p className='max-w-xl text-base text-main/70 dark:text-stone-400'>
          {/* Both Start & End Date Given */}
          {!isRunning && !!startAt && !!endAt && (
            <>
              {dateHandler(startAt)} - {dateHandler(endAt)} ·{' '}
              {calculateTimePeriod(startAt, endAt)}
            </>
          )}

          {/* End Date Only Given */}
          {!isRunning && !startAt && !!endAt && <>{dateHandler(endAt)}</>}

          {/* Start Date Given & Journey Still Running */}
          {!!isRunning && !!startAt && (
            <>
              {dateHandler(startAt)} - Present · {calculateTimePeriod(startAt)}
            </>
          )}
        </p>

        <h2 className='my-1 text-lg font-semibold text-main dark:text-stone-300'>
          {title}
        </h2>
        <pre className='mt-3 font-sans text-sm font-medium whitespace-pre-wrap text-main/80 dark:text-secondary/60 md:text-base'>
          {description}
        </pre>
      </div>
    </div>
  )
}

export default Journey
