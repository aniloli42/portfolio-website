import HeaderLogo from './HeaderLogo'
import HeaderTitle from './HeaderTitle'

export default function HeaderIntro() {
	return (
		<div className="flex gap-2 flex-col">
			<HeaderLogo />
			<HeaderTitle />
		</div>
	)
}
