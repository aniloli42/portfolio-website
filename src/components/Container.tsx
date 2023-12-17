import { ReactNode } from 'react'

type ContainerProps = {
	children: ReactNode
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="w-[90%] sm:w-auto sm:max-w-[95vw] md:max-w-[80vw] lg:max-w-[60vw] mx-auto ">
			{children}
		</div>
	)
}
