import Card from './Card'
import HeaderIntro from './HeaderIntro'
import SocialLinks from './SocialLinks'
type Props = {}

export default function HeaderDetail({}: Props) {
	return (
		<Card className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end">
			<HeaderIntro />
			<SocialLinks />
		</Card>
	)
}
