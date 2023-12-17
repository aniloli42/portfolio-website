import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = {
	className?: string
	children: ReactNode
}

export default function Card({ className, children }: CardProps) {
	return (
		<section
			className={twMerge(
				'py-5 px-6 sm:px-10 bg-gray-800 rounded-md mt-3',
				className
			)}
		>
			{children}
		</section>
	)
}

type CardTitleProps = {
	children: ReactNode
}

Card.title = ({ children }: CardTitleProps) => {
	return (
		<h2 className="text-xl sm:text-2xl font-semibold text-gray-400">
			{children}
		</h2>
	)
}
