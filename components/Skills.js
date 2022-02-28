import React from "react";

const Skills = () => {
  return (
    <section
      className='mt-20 flex scroll-m-24 flex-col items-center px-4'
      id='skills'
    >
      <h2 className='mb-8 text-3xl font-bold text-white underline underline-offset-4 lg:mb-0'>
        Skills
      </h2>

      <div className='my-12 flex max-w-lg flex-wrap justify-center gap-2 md:gap-3'>
        <Skill skill={"HTML"} />
        <Skill skill={"CSS"} />
        <Skill skill={"Javascript"} />
        <Skill skill={"React Js"} />
        <Skill skill={"Node Js"} />
        <Skill skill={"Express Js"} />
        <Skill skill={"Mongo DB"} />
        <Skill skill={"GIT"} />
        <Skill skill={"Github"} />
        <Skill skill={"SEO"} />
      </div>
    </section>
  );
};

const Skill = ({ skill }) => {
  return (
    <div className='rounded-md bg-white py-2 px-4 text-center text-lg text-black'>
      {skill}
    </div>
  );
};

export default Skills;
