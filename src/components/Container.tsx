import { ReactNode } from 'react'

type ContainerProps = {
	children: ReactNode
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="w-[90%] sm:w-auto sm:min-w-[95vw] md:min-w-[80vw] lg:min-w-[60vw] mx-auto ">
			{children}
		</div>
	)
}
