import { SKILLS } from '@constants/skills.constant'
import Card from './Card'
import SkillCategory from './SkillCategory'

export default function Skills() {
	return (
		<Card>
			<Card.Title>Skills</Card.Title>
			<Card.Container>
				{Object.entries(SKILLS).map(([title, skills]) => (
					<SkillCategory
						categoryTitle={title}
						key={title}
						skills={skills}
					/>
				))}
			</Card.Container>
		</Card>
	)
}
