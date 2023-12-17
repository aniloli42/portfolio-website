import { SKILLS } from '@constants/skills.constant'
import Card from './Card'
import SkillCategory from './SkillCategory'

export default function Skills() {
	return (
		<Card>
			<Card.title>Skills</Card.title>
			<div className="flex flex-col gap-2.5 mt-2">
				{Object.entries(SKILLS).map(([title, skills]) => (
					<SkillCategory
						categoryTitle={title}
						key={title}
						skills={skills}
					/>
				))}
			</div>
		</Card>
	)
}
