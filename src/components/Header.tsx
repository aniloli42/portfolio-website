import HeaderBackground from './HeaderBackground'
import HeaderDetail from './HeaderDetail'

export default function Header() {
	return (
		<header className="mt-6 overflow-hidden">
			<HeaderBackground />
			<HeaderDetail />
		</header>
	)
}
