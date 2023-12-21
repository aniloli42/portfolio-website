import EXPERIENCES from '@constants/experiences.constant'
import Card from './Card'
import Experience from './Experience'

export default function Experiences() {
	return (
		<Card>
			<Card.Title>Experiences</Card.Title>
			<Card.Container>
				{EXPERIENCES.map((experience, index) => (
					<Experience key={index} {...experience} />
				))}
			</Card.Container>
		</Card>
	)
}
