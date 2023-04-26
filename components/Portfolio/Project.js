import Link from 'next/link'
import { BsEye, BsGithub } from 'react-icons/bs'

const Project = (props) => {
  const {
    description,
    liveLink,
    repoLink,
    projectTitle: title,
    projectTypes: { type },
    skill,
  } = props

  return (
    <div className='p-4 max-w-xs bg-white rounded-lg min-h-xl custom-shadow shrink-0 dark:bg-zinc-700'>
      {/* showcase */}
      <div className='relative flex min-h-[150px] min-w-[200px] items-end justify-center overflow-hidden rounded-md bg-transparent'>
        {/* project title */}
        <div className='absolute z-[1] rounded-t-lg bg-white dark:bg-zinc-700 py-1 px-4 text-xs  font-medium text-main/70 dark:text-secondary/80'>
          {type || 'Project Type'}
        </div>

        {/* overlay buttons */}
        <div className='absolute z-[0] flex h-full w-full items-center justify-center gap-12 bg-main/20 dark:bg-zinc-600'>
          {repoLink != undefined && (
            <Link href={repoLink}>
              <a
                className='flex justify-center items-center p-2 w-max text-xl rounded-full outline-none group h-max bg-white/70 dark:bg-white/80 hover:bg-white/90 focus-visible:bg-white text-main'
                target={'_blank'}
                rel={'nofollow noreferrer'}
                aria-label='Github Project Repository Link'
              >
                <BsGithub />
              </a>
            </Link>
          )}

          {liveLink != undefined && (
            <Link href={liveLink}>
              <a
                className='flex justify-center items-center p-2 w-max text-xl rounded-full outline-none group h-max bg-white/70 dark:bg-white/80 hover:bg-white/90 focus-visible:bg-white text-main'
                target={'_blank'}
                rel={'nofollow noreferrer'}
                aria-label='Project Live Link'
              >
                <BsEye />
              </a>
            </Link>
          )}

          {repoLink == undefined && liveLink == undefined && (
            <p className='text-3xl font-medium text-main/60 dark:text-secondary/60'>
              Private Project
            </p>
          )}
        </div>
      </div>

      {/* detail container
       * title
       * description
       */}
      <div className='flex flex-col mt-2'>
        {/* project tool */}
        <div className='flex flex-wrap gap-2 justify-center'>
          {skill?.map((skill) => (
            <p
              key={skill.id}
              className='px-2 py-1 text-xs rounded-sm bg-main/10 text-main/90 dark:text-secondary/80 dark:bg-zinc-600'
            >
              {skill.programming}
            </p>
          ))}
        </div>
        <h3 className='mt-1 text-lg font-medium dark:text-secondary/90'>
          {title || 'Project Title'}
        </h3>
        <p className='text-sm text-main/80 dark:text-secondary/60'>
          {description || 'Project Description'}
        </p>
      </div>
    </div>
  )
}

export default Project
