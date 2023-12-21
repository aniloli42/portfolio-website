import type { Skill as TSkill } from '@@types/skill.type'
import React from 'react'
import Skill from './Skill'
import capitalizeFirstletter from '@utils/capitalizeFirstletter'

type Props = {
	categoryTitle: string
	skills: TSkill[]
}

const SkillCategory = ({ categoryTitle, skills }: Props) => {
	return (
		<div>
			<h3 className="text-gray-500 text-lg font-medium mb-0.5">
				{capitalizeFirstletter(categoryTitle)}
			</h3>
			<div className="flex gap-2 flex-wrap">
				{skills.map((skill) => (
					<Skill
						key={skill.name}
						{...skill}
						logo={skill.logo ? <skill.logo className="w-4 h-4" /> : <></>}
					/>
				))}
			</div>
		</div>
	)
}

export default SkillCategory
