import React from 'react'

const PortfolioType = ({ type, active, toggleActive }) => {
	return (
		<button
			className={`flex shrink-0 select-none items-center justify-center rounded-full border-2 border-main dark:border-zinc-600 px-4 py-1 text-base text-main focus-visible:bg-main focus-visible:text-secondary
    ${
			active
				? 'bg-main dark:bg-zinc-800 text-secondary'
				: 'bg-secondary  text-main dark:bg-zinc-700 dark:text-secondary/80'
		} outline-none`}
			onClick={() => toggleActive(type)}>
			{type}
		</button>
	)
}

export default PortfolioType
