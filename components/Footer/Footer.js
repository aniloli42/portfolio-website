import React from 'react'

const Footer = () => {
	return (
		<footer className='my-4 flex flex-wrap items-center justify-center'>
			<p className='text-base font-medium text-main/90'>
				&copy; {new Date().getFullYear()} Anil Oli, Inc. All Rights Reserved.
			</p>
		</footer>
	)
}

export default Footer
