import Card from './Card'
import HeaderIntro from './HeaderIntro'
import SocialLinks from './SocialLinks'
type Props = {}

export default function HeaderDetail({}: Props) {
	return (
		<Card className="pt-0 sm:pt-0 mt-0 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end rounded-t-none ">
			<HeaderIntro />
			<SocialLinks />
		</Card>
	)
}
