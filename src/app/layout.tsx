import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Anil Oli Portfolio',
	description:
		'Anil Oli is a passionate software who loves to create the solutions based on requirement and market demand.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="font-sans">{children}</body>
		</html>
	)
}
