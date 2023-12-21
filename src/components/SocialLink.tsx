'use client'
import { SocialLink } from '@@types/sociallink.type'
import { ReactNode } from 'react'

type SocialLinkProps = SocialLink & { socialIcon: ReactNode }

export default function SocialLink(props: SocialLinkProps) {
	const { link, title, socialIcon } = props

	return (
		<a
			href={link}
			className="text-gray-300 rounded  cursor-pointer flex gap-2 items-center hover:text-gray-400 focus-visible:text-gray-400 outline-none focus-visible:underline"
			target="_blank"
			aria-label={`Anil Oli's ${title} Profile`}
		>
			{socialIcon}
			{title}
		</a>
	)
}
