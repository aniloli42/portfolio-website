import { SiGmail } from 'react-icons/si'
import Badge from './Badge'
import Card from './Card'

const HireMe = () => {
	return (
		<Card className="flex flex-row flex-wrap gap-2">
			<Badge link="https://ap-south-1.graphassets.com/AS2xEmNOJQCZCGca07qJXz/cm5v9aecc2ted07ph6jdw6k5g">
				Get Resume
			</Badge>
			<Badge link="mailto:aniloli42@gmail.con?subject=Your Query&body=Your Message">
				<SiGmail />
				Send Email
			</Badge>
		</Card>
	)
}

export default HireMe
