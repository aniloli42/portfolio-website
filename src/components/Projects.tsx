import { PROJECTS } from '@constants/projects.constant'
import Card from './Card'
import Project from './Project'

export default function Projects() {
	return (
		<Card>
			<Card.Title>Projects</Card.Title>
			<Card.Container>
				{PROJECTS.map((project) => (
					<Project key={project.title} {...project} />
				))}
			</Card.Container>
		</Card>
	)
}
