import Link from 'next/link'
import { BsEye, BsGithub } from 'react-icons/bs'

const Project = props => {
	const {
		description,
		liveLink,
		repoLink,
		projectTitle: title,
		projectTypes: { type },
		skill,
	} = props

	return (
		<div className='min-h-xl custom-shadow max-w-xs shrink-0 rounded-lg bg-white dark:bg-zinc-700 p-4'>
			{/* showcase */}
			<div className='relative flex min-h-[150px] min-w-[200px] items-end justify-center overflow-hidden rounded-lg bg-transparent'>
				{/* project title */}
				<div className='absolute z-[1] rounded-t-lg bg-white dark:bg-zinc-700 py-1 px-4 text-xs  font-medium text-main/70 dark:text-secondary/80'>
					{type || 'Project Type'}
				</div>

				{/* overlay buttons */}
				<div className='absolute z-[0] flex h-full w-full items-center justify-center gap-12 bg-main/20 dark:bg-zinc-600'>
					{repoLink != undefined && (
						<Link href={repoLink}>
							<a
								className='group flex h-max w-max items-center justify-center rounded-full bg-white/70 dark:bg-white/80 p-2 outline-none hover:bg-white/90 focus-visible:bg-white text-main text-xl'
								target={'_blank'}
								rel={'nofollow noreferrer'}
								aria-label='Github Project Repository Link'>
								<BsGithub />
							</a>
						</Link>
					)}

					{liveLink != undefined && (
						<Link href={liveLink}>
							<a
								className='group flex h-max w-max items-center justify-center rounded-full bg-white/70 dark:bg-white/80 p-2 outline-none hover:bg-white/90 focus-visible:bg-white text-main text-xl'
								target={'_blank'}
								rel={'nofollow noreferrer'}
								aria-label='Project Live Link'>
								<BsEye />
							</a>
						</Link>
					)}

					{repoLink == undefined && liveLink == undefined && (
						<p className='text-3xl font-medium text-main/30 dark:text-secondary/40'>
							Private Project
						</p>
					)}
				</div>
			</div>

			{/* detail container
			 * title
			 * description
			 */}
			<div className='mt-2 flex flex-col'>
				{/* project tool */}
				<div className='flex flex-wrap justify-center gap-2'>
					{skill?.map(skill => (
						<p
							key={skill.id}
							className='rounded-md bg-main/10 py-1 px-2 text-xs text-main/90 dark:text-secondary/80 dark:bg-zinc-600'>
							{skill.programming}
						</p>
					))}
				</div>
				<h3 className='mt-1 text-lg font-medium dark:text-secondary/90'>
					{title || 'Project Title'}
				</h3>
				<p className='text-sm text-main/80 dark:text-secondary/40'>
					{description || 'Project Description'}
				</p>
			</div>
		</div>
	)
}

export default Project
