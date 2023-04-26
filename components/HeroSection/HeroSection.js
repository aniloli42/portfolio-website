import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import SectionButton from './SectionButton'
import SocialLink from './SocialLink'

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center p-4 min-h-screen'>
      <h1 className='my-16 mb-4 text-5xl font-black text-center dark:text-secondary/90 text-main md:text-7xl'>
        ANIL OLI
      </h1>
      <p className='text-sm text-center dark:text-secondary/80 text-main/70 sm:text-base'>
        TS/JS DEVELOPER | Developing the need
      </p>

      <div className='flex flex-col gap-4 mt-16'>
        <SectionButton link={'#contact-me'} name={'CONTACT ME'} />
        <SectionButton link={'#contact-me'} name={'SKILLS'} />
        <SectionButton link={'#contact-me'} name={'PORTFOLIO'} />
      </div>

      <div className='flex gap-10 items-center mt-20 mb-6 outline-none'>
        <SocialLink
          link={'https://github.com/aniloli42'}
          ariaLabel={'github profile link'}
        >
          <BsGithub />
        </SocialLink>
        <SocialLink
          link={'https://facebook.com/aniloli.me'}
          ariaLabel={'facebook profile link'}
        >
          <BsFacebook />
        </SocialLink>
        <SocialLink
          link={'https://linkedin.com/in/aniloli'}
          ariaLabel={'linkedin profile link'}
        >
          <BsLinkedin />
        </SocialLink>
      </div>
    </section>
  )
}

export default HeroSection
