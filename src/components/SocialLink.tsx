import { SocialLink } from '@@types/sociallink.type'

type SocialLinkProps = SocialLink & {}

export default function SocialLink({ title, link }: SocialLinkProps) {
	return (
		<a
			href={link}
			className="text-gray-300 rounded  cursor-pointer"
			target="_blank"
			aria-label={`Anil Oli's ${title} Profile`}
		>
			{title}
		</a>
	)
}
