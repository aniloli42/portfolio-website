import { Skill as TSkill } from '@@types/skill.type'
import { ReactElement } from 'react'

type SkillProps = {
	name: TSkill['name']
	logo: ReactElement
}

const Skill = ({ name, logo }: SkillProps) => {
	return (
		<p className="border border-gray-600 bg-gray-700 rounded w-fit  text-gray-400  flex gap-2 items-center justify-center py-0.5 px-2">
			{logo}
			{name}
		</p>
	)
}

export default Skill
