import { SiFiverr, SiGmail, SiRescuetime, SiUpwork } from 'react-icons/si'
import Badge from './Badge'
import Card from './Card'

type Props = {}

const HireMe = (props: Props) => {
	return (
		<Card className="flex flex-row flex-wrap gap-2">
			<Badge link="https://www.upwork.com/workwith/aniloli42">
				<SiUpwork />
				Hire Me
			</Badge>

			<Badge link="https://www.fiverr.com/olianil">
				<SiFiverr />
				Hire Me
			</Badge>

			<Badge link="https://media.graphassets.com/0QgY4OCKRwKG4hRGomZt">
				Get Resume
			</Badge>

			<Badge link="mailto:connect@aniloli42.me?subject=Hi Anil">
				<SiGmail />
				Send Email
			</Badge>
		</Card>
	)
}

export default HireMe
