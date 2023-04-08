import Head from 'next/head'
import React from 'react'
import {
  AboutMe,
  ContactMe,
  HeroSection,
  MyJourney,
  Header,
  Portfolio,
  Skills,
} from '../components'
import {
  getJourneys,
  getProjects,
  getProjectTypes,
  getResumeLink,
  getSkills,
} from '../services'

export const getStaticProps = async () => {
  const journeys = await getJourneys()
  const skills = await getSkills()
  const projectType = await getProjectTypes()
  const projects = await getProjects()
  const resumeLink = await getResumeLink()

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
        <title>Anil Oli | Portfolio Website</title>
        <link rel='icon' href='/favicon.png' />
        <meta
          name='description'
          content='Anil Oli is the Website Developer, follows javascript &amp; its libraries. Also learning mobile development in React Native nowadays.'
        />
        <meta
          name='keywords'
          content='Anil Oli, aniloli42, Web Developer, Javascript Developer, Node Js Developer'
        />

        {/* Open Graph Setup */}
        <meta property='og:url' content='https://aniloli42.me' />
        <meta property='og:title' content='Anil Oli | Portfolio Website' />
        <meta
          property='og:description'
          content='Anil Oli is the Website Developer, follows javascript &amp; its libraries. Also learning mobile development in React Native nowadays.'
        />
        <meta property='og:type' content='profile' />
        <meta property='og:image:width' content='900' />
        <meta property='og:image:height' content='600' />
        <meta property='og:image' content='anil_og.jpg' />
      </Head>

      <Header />

      <main className='flex flex-col overflow-x-hidden bg-dark-blue scroll-smooth'>
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
