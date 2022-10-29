import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutMe = ({ resumeLink }) => {
	return (
		<section
			className='flex w-full shrink-0 scroll-m-24 items-center justify-center p-4'
			id='about-me'>
			<div className='grid justify-items-center lg:[grid-template-rows:2em_minmax(3em,8em)_auto] lg:[grid-template-columns:max-content_auto] lg:justify-items-start lg:gap-x-8 lg:gap-y-6'>
				<h2 className='mb-8 text-3xl font-bold text-main underline underline-offset-4 lg:mb-0'>
					ABOUT ME
				</h2>
				<div className='lg:w-96 lg:h-96 lg:[grid-column:1/2] lg:[grid-row:1/4] flex items-center relative w-56 h-56 justify-center'>
					<Image
						src={require('../../public/anil.jpeg')}
						alt='photo of Anil Oli'
						className='rounded-3xl bg-main/20'
					/>
				</div>

				<p className='mt-4 max-w-xs text-center text-base text-main/80 sm:max-w-md sm:text-xl lg:text-left'>
					I am Anil Oli from Dang, Nepal. I am pursing the website development
					journey. Aim to learn and capable to solve different problems.
				</p>

				{resumeLink && (
					<Link href={resumeLink}>
						<a
							className='py-2 px-4 bg-main h-fit rounded-md text-white font-bold hover:ring-2 hover:ring-main/40 block my-4 row-[3/4] lg:row-auto hover:bg-main/90'
							rel='nofollow'>
							Download RESUME
						</a>
					</Link>
				)}
			</div>
		</section>
	)
}

export default AboutMe
