import React from 'react'
import Skill from './Skill'

const Skills = ({ skills }) => {
  return (
    <section
      className='flex flex-col items-center px-4 py-12 scroll-m-24'
      id='skills'
    >
      <h2 className='mb-16 text-3xl font-bold underline text-main dark:text-secondary/90 underline-offset-4'>
        SKILLS
      </h2>

      <div className='flex flex-wrap gap-2 justify-center max-w-3xl md:gap-3'>
        {skills?.map((skill) => (
          <Skill key={skill.node.id} {...skill?.node} />
        ))}
      </div>
    </section>
  )
}

export default Skills
