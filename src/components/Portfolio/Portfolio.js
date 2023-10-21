import React, { useCallback, useEffect, useState } from 'react'
import PortfolioType from './PortfolioType'
import Project from './Project'

const Portfolio = ({ projects, projectType }) => {
  const [activeType, setActiveType] = useState('All')
  const [filterProjects, setFilterProjects] = useState([])

  const filterProject = useCallback(() => {
    if (activeType !== 'All') {
      const result = projects.filter(
        (project) => activeType === project.node.projectTypes?.type
      )

      return setFilterProjects(result)
    }

    setFilterProjects(projects)
  }, [activeType, projects])

  useEffect(() => {
    filterProject()
    // eslint-disable-next-line
  }, [filterProject])

  const toggleActive = (type) => {
    if (activeType === type) {
      setActiveType('All')
      return filterProject()
    }

    setActiveType(type)
    return filterProject()
  }

  return (
    <section
      id='portfolio'
      className=' flex scroll-m-24 flex-col items-center py-16'
    >
      <h2 className='mb-16 text-center text-3xl font-bold text-main underline underline-offset-4 dark:text-secondary/90'>
        PORTFOLIO
      </h2>

      <div className='flex max-w-xs justify-start gap-4 overflow-x-auto md:px-8 pb-4 md:max-w-none md:flex-wrap md:justify-center'>
        {projectType?.map((type) => {
          return (
            <PortfolioType
              key={type.node.id}
              {...type.node}
              active={activeType === type.node.type}
              toggleActive={toggleActive}
            />
          )
        })}
      </div>

      <div className='my-4 flex max-w-7xl flex-col flex-wrap justify-center gap-4 md:flex-row'>
        {filterProjects?.map((project) => (
          <Project key={project.node.id} {...project.node} />
        ))}

        {filterProjects?.length === 0 && (
          <p className='text-center text-lg font-thin text-main/80 dark:text-secondary/80'>
            Sorry, Result not found. Project will be uploaded soon.
          </p>
        )}
      </div>
    </section>
  )
}

export default Portfolio
