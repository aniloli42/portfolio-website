'use static'
import Pic from '@assets/pic.jpeg'
import Image from 'next/image'

export default function HeaderLogo() {
	return (
		<>
			<Image
				className="rounded-full overflow-hidden aspect-square object-cover border-8 border-gray-700 -mt-12"
				src={Pic}
				alt="Camera place over the table with lining pattern"
				width={120}
				height={120}
			/>
		</>
	)
}
