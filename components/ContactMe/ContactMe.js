import { BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import DirectContact from './DirectContact'

const ContactMe = () => {
  return (
    <section id='contact-me' className='py-4 my-5 scroll-m-24'>
      <h2 className='mb-16 text-3xl font-bold text-center underline text-main underline-offset-4 dark:text-secondary/90'>
        CONTACT ME
      </h2>

      {/* Direct Contact */}
      <div className='flex flex-wrap gap-4 justify-center px-3'>
        <DirectContact href={'mailto:aniloli42@gmail.com'} text={'Email'}>
          <MdMail />
        </DirectContact>
        <DirectContact
          href={'https://linkedin.com/in/aniloli'}
          text={'Linkedin'}
        >
          <BsLinkedin />
        </DirectContact>
      </div>
    </section>
  )
}

export default ContactMe
