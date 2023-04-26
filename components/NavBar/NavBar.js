import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Hamburger from './Hamburger'

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('/')
  const [activeNav, setActiveNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSectionChange)

    return () => {
      window.removeEventListener('scroll', handleScrollSectionChange)
    }
  }, [])

  function handleScrollSectionChange() {
    const sections = window.document.querySelectorAll('section')

    sections.forEach((section) => {
      const sectionCurrentOffset = section.offsetTop - 200

      if (scrollY >= sectionCurrentOffset) {
        setActiveSection(section.id !== '' ? `#${section.id}` : '/')
      }
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function handleWindowResize() {
    if (window.innerWidth >= 768) return setActiveNav(true)
    setActiveNav(false)
  }

  const toggleMobileNav = () => {
    if (window.innerWidth >= 768) return
    setActiveNav((prev) => !prev)

    if (!activeNav) return (window.document.body.style.overflow = 'hidden')

    window.document.body.style.overflow = 'auto'
  }

  return (
    <>
      <Hamburger toggleMobileNav={toggleMobileNav} />

      {activeNav && (
        <nav className='flex fixed top-0 left-0 flex-col gap-4 items-center p-4 pt-12 w-full h-full md:mr-5 md:ml-auto bg-secondary dark:bg-zinc-900 md:static md:w-auto md:flex-row md:bg-transparent dark:md:bg-transparent md:p-0'>
          <div
            className='relative my-4 mb-12 flex h-[32px] w-8 cursor-pointer items-center justify-center before:absolute before:h-8 before:w-1 before:-rotate-45 before:bg-main dark:before:bg-secondary/70 before:[content:""] after:absolute after:h-8 after:w-1  after:rotate-45 after:bg-main dark:after:bg-secondary/70 after:[content:""] md:hidden'
            onClick={toggleMobileNav}
          ></div>
          <NavLink
            href={'/'}
            text={'HOME'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
          <NavLink
            href={'#about-me'}
            text={'ABOUT ME'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
          <NavLink
            href={'#myjourney'}
            text={'MY JOURNEY'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
          <NavLink
            href={'#skills'}
            text={'SKILLS'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
          <NavLink
            href={'#portfolio'}
            text={'PORTFOLIO'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
          <NavLink
            href={'#contact-me'}
            text={'CONTACT ME'}
            active={activeSection}
            toggleNavActive={toggleMobileNav}
          />
        </nav>
      )}
    </>
  )
}

export default NavBar
