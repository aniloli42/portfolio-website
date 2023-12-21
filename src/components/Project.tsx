import { Project } from '@@types/project.type'
import { RiExternalLinkFill } from 'react-icons/ri'
import Badge from './Badge'

type ProjectProps = Project & {}

const Project = ({ title, techStacks, liveLink, repoLink }: ProjectProps) => {
	return (
		<div className="p-4 bg-gray-700 rounded-sm ">
			<h3 className="text-lg font-semibold text-gray-300">{title}</h3>

			<div className="flex gap-1 sm:gap-3 flex-wrap">
				<ProjectLink link={liveLink} linkTitle="View Live" />
				<ProjectLink link={repoLink} linkTitle="View Repository" />
			</div>

			<div className="flex gap-2  flex-wrap mt-2">
				{techStacks.map((tech) => (
					<Tech key={tech} tech={tech} />
				))}
			</div>
		</div>
	)
}

type ProjectLinkProps = {
	link?: string
	linkTitle: string
}

const ProjectLink = ({ link, linkTitle }: ProjectLinkProps) => {
	if (link == undefined || link === '') return <></>

	return (
		<a
			href={link}
			target="_blank"
			className="text-gray-400 hover:text-gray-300 focus-visible:underline outline-none focus-visible:text-gray-300 flex items-center gap-1"
		>
			{linkTitle}
			<RiExternalLinkFill />
		</a>
	)
}

type TechProps = {
	tech: string
}

const Tech = ({ tech }: TechProps) => {
	return <Badge className="bg-gray-600 border-gray-500">{tech}</Badge>
}

export default Project
