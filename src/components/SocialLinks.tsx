import { SOCIAL_LINKS } from '@constants/sociallinks.constant'
import SocialLink from './SocialLink'

export default function SocialLinks() {
	return (
		<div className="flex flex-wrap sm:flex-col gap-4  sm:gap-1.5 mt-4 sm:mt-0">
			{SOCIAL_LINKS.map((socialLink) => (
				<SocialLink key={socialLink.title} {...socialLink} />
			))}
		</div>
	)
}
