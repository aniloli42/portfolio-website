import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/globals.css'
import { SITE_DESCRIPTION, SITE_TITLE } from '@constants/site.constant'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL('https://aniloli42.me'),
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	icons: [
		{
			url: '/favicon-16x16.png',
			rel: 'icon',
			sizes: '16x16'
		},
		{
			url: '/favicon-32x32.png',
			rel: 'icon',
			sizes: '32x32'
		},
		{
			url: '/apple-touch-icon.png',
			rel: 'apple-touch-icon',
			sizes: '180x180'
		}
	],
	keywords: [
		'anil oli',
		'aniloli42',
		'developer',
		'typescript',
		'javascript',
		'software engineer',
		'software development',
		'web development',
		'web scrapping',
		'web scrapper',
		'hire anil oli'
	],
	openGraph: {
		type: 'profile',
		countryName: 'Nepal',
		title: SITE_TITLE,
		siteName: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: '/anil-og.png',
				height: 600,
				width: 900
			}
		]
	},
	twitter: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		creator: '@aniloli42',

		images: [
			{
				url: '/anil-og.png',
				height: 600,
				width: 900
			}
		]
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="font-sans">{children}</body>
			<GoogleAnalytics gaId="G-27VY6DQ465" />
		</html>
	)
}
