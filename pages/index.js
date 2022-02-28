import Head from "next/head";
import React from "react";
import {
  AboutMe,
  ContactMe,
  HeroSection,
  MyJourney,
  Navbar,
  Portfolio,
  Skills
} from "../components";

const index = () => {
  return (
    <div className='overflow-x-hidden scroll-smooth bg-dark-blue'>
      {/* For SEO Purposes */}
      <Head>
        <title>Anil Oli | Portfolio</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='flex flex-col'>
        <HeroSection />
        <AboutMe />
        <MyJourney />
        <Skills />
        <Portfolio />
        <ContactMe />
      </main>
    </div>
  );
};

export default index;
