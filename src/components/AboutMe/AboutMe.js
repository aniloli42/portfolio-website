import Link from 'next/link'

const AboutMe = ({ resumeLink }) => {
  return (
    <section
      className='flex flex-col gap-8 items-center p-4 scroll-m-24'
      id='about-me'
    >
      <h2 className='mb-8 text-3xl font-bold underline text-main dark:text-secondary/90 underline-offset-4 lg:mb-0'>
        ABOUT ME
      </h2>

      <p className='mt-4 max-w-2xl text-lg leading-8 text-center text-main/80 dark:text-secondary/80'>
        I am Anil Oli from Dang, Nepal. I am pursing the developer journey since
        2019. Aim to learn and capable to solve different problems.
      </p>

      {resumeLink && (
        <Link href={resumeLink}>
          <a
            className='py-2 px-4 bg-main h-fit rounded-md text-white font-bold hover:ring-2 hover:ring-main/40 block my-4 row-[3/4] lg:row-auto hover:bg-main/90 dark:bg-zinc-700 dark:focus-visible:bg-zinc-600 dark:hover:bg-zinc-600 w-max'
            rel='nofollow'
            target='_blank'
          >
            Download Resume
          </a>
        </Link>
      )}
    </section>
  )
}

export default AboutMe
