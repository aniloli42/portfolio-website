import { BsMessenger } from 'react-icons/bs'
import { MdLocalPhone, MdMail } from 'react-icons/md'
import DirectContact from './DirectContact'

const ContactMe = () => {
	return (
		<section id='contact-me' className='my-5 scroll-m-24 py-4'>
			<h2 className='mb-16 text-center text-3xl font-bold text-main underline underline-offset-4'>
				CONTACT ME
			</h2>

			{/* Direct Contact */}
			<div className=' flex flex-wrap justify-center gap-4 px-3'>
				<DirectContact
					href={'mailto:aniloli42@gmail.com'}
					text={'aniloli42@gmail.com'}>
					<MdMail />
				</DirectContact>
				<DirectContact href={'tel:+9779806242024'} text={'+977 9806242024'}>
					<MdLocalPhone />
				</DirectContact>
				<DirectContact href={'https://m.me/anil.oli.4321'} text={'Message Me'}>
					<BsMessenger />
				</DirectContact>
			</div>
		</section>
	)
}

export default ContactMe
