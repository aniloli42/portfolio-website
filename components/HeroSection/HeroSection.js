import { BsGithub, BsLinkedin } from 'react-icons/bs'
import SocialLink from './SocialLink'

const socialLinks = [
  {
    link: 'https://github.com/aniloli42',
    ariaLabel: 'Github Profile Link',
    icon: <BsGithub />,
  },
  {
    link: 'https://linkedin.com/in/aniloli',
    ariaLabel: 'Linkedin Profile Link',
    icon: <BsLinkedin />,
  },
]

const HeroSection = () => {
  return (
    <section className='flex flex-col justify-evenly items-center p-4 min-h-screen'>
      <div className='my-8'>
        <h1 className='mb-8 text-5xl font-black text-center dark:text-secondary/90 text-main md:text-7xl'>
          ANIL OLI
        </h1>
        <p className='text-xl text-center dark:text-secondary/80 text-main/70'>
          Full Stack DEVELOPER | TS/JS Stack
        </p>
      </div>

      <div className='flex gap-10 items-center mt-20 mb-6 outline-none'>
        {socialLinks.map((socialLink) => (
          <SocialLink key={socialLink.ariaLabel} link={socialLink.link}>
            {socialLink.icon}
          </SocialLink>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
