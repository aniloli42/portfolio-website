import HeaderBackground from './HeaderBackground'
import HeaderIntro from './HeaderIntro'
import SocialLinks from './SocialLinks'

export default function Header() {
	return (
		<header className="bg-gray-800 w-[90%] sm:w-auto sm:min-w-[95vw] md:min-w-[80vw] lg:min-w-[60vw] mx-auto rounded-md mt-4 sm:mt-8 overflow-hidden">
			<HeaderBackground />
			<div className="px-8 pb-4 sm:pb-8 sm:px-12 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-end">
				<HeaderIntro />
				<SocialLinks />
			</div>
		</header>
	)
}
