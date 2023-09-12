import Head from 'next/head'
import {
  AboutMe,
  ContactMe,
  Header,
  HeroSection,
  MyJourney,
  Portfolio,
  Skills,
} from '../components'
import {
  getJourneys,
  getProjectTypes,
  getProjects,
  getResumeLink,
  getSkills,
} from '../services'

export const getStaticProps = async () => {
  const [journeys, skills, projectType, projects, resumeLink] =
    await Promise.all([
      await getJourneys(),
      await getSkills(),
      await getProjectTypes(),
      await getProjects(),
      await getResumeLink(),
    ])

  return {
    props: { journeys, projects, projectType, skills, resumeLink },
    revalidate: 30,
  }
}

const Home = ({ journeys, projects, projectType, skills, resumeLink }) => {
  return (
    <>
      {/* For SEO Purposes */}
      <Head>
        <title>Anil Oli | Portfolio</title>
        <link rel='icon' href='/favicon.png' />
        <meta
          name='description'
          content='Anil Oli is a passionate developer who creates innovative systems using Typescript, Javascript, and various libraries to provide solutions that benefit others.'
        />
        <meta
          name='keywords'
          content='Anil Oli,aniloli42, developer, Typescript, Javascript, libraries, innovative systems, solutions, coding, programming, software development, web development'
        />

        {/* Open Graph Setup */}
        <meta property='og:url' content='https://aniloli42.me' />
        <meta property='og:title' content='Anil Oli | Portfolio' />
        <meta
          property='og:description'
          content='Anil Oli is a passionate developer who creates innovative systems using Typescript, Javascript, and various libraries to provide solutions that benefit others.'
        />
        <meta property='og:type' content='profile' />
        <meta property='og:image:width' content='900' />
        <meta property='og:image:height' content='600' />
        <meta property='og:image' content='anil_og.jpg' />
      </Head>

      <Header />

      <main className='flex overflow-x-hidden flex-col bg-dark-blue scroll-smooth'>
        <HeroSection />
        <AboutMe resumeLink={resumeLink} />
        <MyJourney journeys={journeys} />
        <Skills skills={skills} />
        <Portfolio projects={projects} projectType={projectType} />
        <ContactMe />
      </main>
    </>
  )
}

export default Home
