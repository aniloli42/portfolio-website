import React from 'react'

const Skill = ({ programming }) => {
	return (
		<p className='custom-shadow rounded-md bg-white dark:bg-zinc-700  py-2 px-4 select-none text-center text-lg dark:text-secondary/80'>
			{programming}
		</p>
	)
}

export default Skill
