import EXPERIENCES from '@constants/experiences.constant'
import Card from './Card'
import Experience from './Experience'

export default function Experiences() {
	return (
		<Card>
			<Card.title>Experiences</Card.title>

			<div className="mt-4 flex flex-col gap-3">
				{EXPERIENCES.map((experience, index) => (
					<Experience key={index} {...experience} />
				))}
			</div>
		</Card>
	)
}
