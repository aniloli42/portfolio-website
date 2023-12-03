import { SocialLink } from '@@types/sociallink.type'
import { FaStackOverflow } from 'react-icons/fa6'
import { RxGithubLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx'

export const SOCIAL_LINKS: SocialLink[] = [
	{
		title: 'GitHub',
		link: 'https://github.com/aniloli42',
		icon: RxGithubLogo
	},
	{
		title: 'Linkedin',
		link: 'https://linkedin.com/in/aniloli',
		icon: RxLinkedinLogo
	},
	{
		title: 'Stack Overflow',
		link: 'https://stackoverflow.com/users/16839906',
		icon: FaStackOverflow
	},
	{
		title: 'Twitter',
		link: 'https://twitter.com/aniloli42',
		icon: RxTwitterLogo
	}
]
