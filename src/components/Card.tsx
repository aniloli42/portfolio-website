import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = {
	className?: string
	children: ReactNode
}

export default function Card({ className, children }: CardProps) {
	return (
		<section
			className={twMerge('p-5 sm:px-8 bg-gray-800 rounded-md mt-3', className)}
		>
			{children}
		</section>
	)
}

type CardTitleProps = {
	children: ReactNode
}

const Title = ({ children }: CardTitleProps) => {
	return (
		<h2 className="text-xl sm:text-2xl font-semibold text-gray-400">
			{children}
		</h2>
	)
}

type CardContainerProps = {
	children: ReactNode
}

const Container = ({ children }: CardContainerProps) => {
	return <div className="mt-4 flex flex-col gap-3">{children}</div>
}

Card.Title = Title
Card.Container = Container
