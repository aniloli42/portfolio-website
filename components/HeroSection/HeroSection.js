import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import SocialLink from './SocialLink'
import SectionButton from './SectionButton'

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center min-h-screen p-4'>
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

      <div className='flex items-center gap-10 mt-20 mb-6 outline-none'>
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
