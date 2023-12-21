import { Skill as TSkill } from '@@types/skill.type'
import { ReactElement } from 'react'
import Badge from './Badge'

type SkillProps = {
	name: TSkill['name']
	logo: ReactElement
}

const Skill = ({ name, logo }: SkillProps) => {
	return (
		<Badge>
			{logo}
			{name}
		</Badge>
	)
}

export default Skill
