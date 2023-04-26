import { BsMessenger } from 'react-icons/bs'
import { MdLocalPhone, MdMail } from 'react-icons/md'
import DirectContact from './DirectContact'

const ContactMe = () => {
	return (
		<section id='contact-me' className='py-4 my-5 scroll-m-24'>
			<h2 className='mb-16 text-3xl font-bold text-center underline text-main underline-offset-4 dark:text-secondary/90'>
				CONTACT ME
			</h2>

			{/* Direct Contact */}
			<div className='flex flex-wrap gap-4 justify-center px-3'>
				<DirectContact
					href={'mailto:aniloli42@gmail.com'}
					text={'Mail Me'}>
					<MdMail />
				</DirectContact>
				<DirectContact href={'tel:+9779806242024'} text={'Call Me'}>
					<MdLocalPhone />
				</DirectContact>
				<DirectContact href={'https://m.me/aniloli.me'} text={'Message Me'}>
					<BsMessenger />
				</DirectContact>
			</div>
		</section>
	)
}

export default ContactMe
