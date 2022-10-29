import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const HeroSection = () => {
	return (
		<section className='flex min-h-screen flex-col items-center p-4'>
			<div className='my-16 flex flex-col'>
				<h1 className='mb-4 text-5xl text-center font-black dark:text-secondary/90 text-main md:text-7xl'>
					ANIL OLI
				</h1>
				<p className='text-center text-sm dark:text-secondary/80 text-main/70 sm:text-base'>
					POSITION: MERN STACK DEVELOPER
				</p>
				<Link href={'#contact-me'}>
					<a className='mt-20 w-full bg-main py-4 text-center text-base font-medium text-white outline-none hover:bg-main/90 focus-visible:bg-main/90  dark:bg-zinc-700 dark:focus-visible:bg-zinc-600 dark:hover:bg-zinc-600'>
						CONTACT ME
					</a>
				</Link>
				<Link href={'#skills'}>
					<a className='mt-2 w-full bg-main py-4 text-center text-base font-medium text-white outline-none hover:bg-main/90 focus-visible:bg-main/90  dark:bg-zinc-700 dark:focus-visible:bg-zinc-600 dark:hover:bg-zinc-600'>
						SKILLS
					</a>
				</Link>
				<Link href={'#portfolio'}>
					<a className='mt-2 w-full bg-main py-4 text-center text-base font-medium text-white outline-none hover:bg-main/90 focus-visible:bg-main/90  dark:bg-zinc-700 dark:focus-visible:bg-zinc-600 dark:hover:bg-zinc-600'>
						PORTFOLIO
					</a>
				</Link>
			</div>
			<div className='my-6 flex items-center gap-10 outline-none'>
				{/* Github */}
				<Link href='https://github.com/aniloli42'>
					<a
						target={'_blank'}
						rel={'nofollow'}
						className='group outline-none text-3xl text-main dark:text-secondary/70 hover:text-main/80 dark:hover:text-secondary/90 dark:focus-visible:text-secondary/90'
						aria-label='Github Profile Link'>
						<BsGithub />
					</a>
				</Link>

				{/* Facebook */}
				<Link href='https://facebook.com/anil.oli.4321'>
					<a
						target={'_blank'}
						rel={'nofollow'}
						className='group outline-none text-3xl text-main dark:text-secondary/70 hover:text-main/80 dark:hover:text-secondary/90 dark:focus-visible:text-secondary/90'
						aria-label='Facebook Profile Link'>
						<BsFacebook />
					</a>
				</Link>

				{/* Linkedin */}
				<Link href='https://linkedin.com/in/aniloli'>
					<a
						target={'_blank'}
						rel={'nofollow'}
						className='group outline-none text-3xl text-main dark:text-secondary/70 hover:text-main/80 dark:hover:text-secondary/90 dark:focus-visible:text-secondary/90'
						aria-label='Linkedin Profile Link'>
						<BsLinkedin />
					</a>
				</Link>
			</div>
		</section>
	)
}

export default HeroSection
