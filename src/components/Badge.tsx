import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type LinkBadge = {
	link?: string
}

type Props =
	| LinkBadge & {
			className?: string
			children?: ReactNode
	  }

const BADGE_CLASSNAMES =
	'border border-gray-600 bg-gray-700 rounded w-fit text-gray-400 flex gap-2 items-center justify-center py-0.5 px-2'

const Badge = ({ className, ...props }: Props) => {
	if ('link' in props)
		return (
			<a
				href={props.link}
				target="_blank"
				className={twMerge(BADGE_CLASSNAMES, className)}
				{...props}
			>
				{props.children}
			</a>
		)

	return (
		<p className={twMerge(BADGE_CLASSNAMES, className)} {...props}>
			{props.children}
		</p>
	)
}

export default Badge
