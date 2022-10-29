import React from 'react'
import Skill from './Skill'

const Skills = ({ skills }) => {
	return (
		<section
			className=' flex scroll-m-24 flex-col items-center px-4 py-12'
			id='skills'>
			<h2 className='mb-16 text-3xl font-bold text-main dark:text-secondary/90 underline underline-offset-4'>
				Skills
			</h2>

			<div className=' flex max-w-lg flex-wrap justify-center gap-2 md:gap-3'>
				{skills?.map(skill => (
					<Skill key={skill.node.id} {...skill?.node} />
				))}
			</div>
		</section>
	)
}

export default Skills
