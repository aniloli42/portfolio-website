import Card from './Card'
import HeaderIntro from './HeaderIntro'
import SocialLinks from './SocialLinks'

export default function HeaderDetail() {
	return (
		<Card className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end">
			<HeaderIntro />
			<SocialLinks />
		</Card>
	)
}
