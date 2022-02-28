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
    <div className='m-0 min-h-screen overflow-x-hidden scroll-smooth bg-dark-blue'>
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
