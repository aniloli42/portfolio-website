import Container from '@components/Container'
import Experiences from '@components/Experiences'
import Header from '@components/Header'
import Projects from '@components/Projects'
import Skills from '@components/Skills'

export default function Home() {
	return (
		<main className="bg-gray-900 min-h-full flex flex-col py-4">
			<Container>
				<Header />
				<Experiences />
				<Projects />
				<Skills />
			</Container>
		</main>
	)
}
