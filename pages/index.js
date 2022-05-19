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
  Skills,
} from "../components";
import {
  getJourneys,
  getProjects,
  getProjectTypes,
  getResumeLink,
  getSkills,
} from "../services";

export const getStaticProps = async () => {
  const journeys = await getJourneys();
  const skills = await getSkills();
  const projectType = await getProjectTypes();
  const projects = await getProjects();
  const resumeLink = await getResumeLink();

  return {
    props: { journeys, projects, projectType, skills, resumeLink },
    revalidate: 30,
  };
};

const index = ({ journeys, projects, projectType, skills, resumeLink }) => {
  return (
    <div className="bg-dark-blue overflow-x-hidden scroll-smooth">
      {/* For SEO Purposes */}
      <Head>
        <title>Anil Oli | Portfolio Website</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Anil Oli is the Website Developer, follows javascript &amp; its libraries. Also learning mobile development in React Native nowadays."
        />
        <meta
          name="keywords"
          content="Anil Oli, aniloli42, Web Developer, Javascript Developer, Node Js Developer"
        />

        {/* Open Graph Setup */}
        <meta property="og:url" content="https://aniloli42.me" />
        <meta property="og:title" content="Anil Oli | Portfolio Website" />
        <meta
          property="og:description"
          content="Anil Oli is the Website Developer, follows javascript &amp; its libraries. Also learning mobile development in React Native nowadays."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image" content="anil_og.jpg" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col">
        <HeroSection />
        <AboutMe resumeLink={resumeLink} />
        <MyJourney journeys={journeys} />
        <Skills skills={skills} />
        <Portfolio projects={projects} projectType={projectType} />
        <ContactMe />
      </main>
      <footer className="my-4 flex flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default index;
