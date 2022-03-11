import Head from "next/head";
import React from "react";
import {
  AboutMe,
  ContactMe,
  Footer,
  HeroSection,
  MyJourney,
  Navbar,
  Portfolio,
  Skills
} from "../components";
import {
  getJourneys,
  getProjects,
  getProjectTypes,
  getSkills
} from "../services";

export const getStaticProps = async () => {
  const journeys = await getJourneys();
  const skills = await getSkills();
  const projectType = await getProjectTypes();
  const projects = await getProjects();

  return {
    props: { journeys, projects, projectType, skills },
    revalidate: 30
  };
};

const index = ({ journeys, projects, projectType, skills }) => {
  return (
    <div className='bg-dark-blue overflow-x-hidden scroll-smooth'>
      {/* For SEO Purposes */}
      <Head>
        <title>Anil Oli | Portfolio</title>
        <link rel='icon' href='../assets/anil.jpg' />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='flex flex-col'>
        <HeroSection />
        <AboutMe />
        <MyJourney journeys={journeys} />
        <Skills skills={skills} />
        <Portfolio projects={projects} projectType={projectType} />
        <ContactMe />
      </main>
      <footer className='my-4 flex flex-wrap items-center justify-center'>
        <Footer />
      </footer>
    </div>
  );
};

export default index;
