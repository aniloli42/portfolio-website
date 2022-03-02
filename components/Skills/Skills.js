import React from "react";
import Skill from "./Skill";

const skills = [
  {
    skill: "HTML"
  },
  {
    skill: "CSS"
  },
  {
    skill: "Javascript"
  },
  {
    skill: "React Js"
  },
  {
    skill: "Node Js"
  },
  {
    skill: "Express Js"
  },
  {
    skill: "Mongo DB"
  },
  {
    skill: "GIT"
  },
  {
    skill: "Github"
  },
  {
    skill: "SEO"
  }
];

const Skills = () => {
  return (
    <section
      className='mt-20 flex scroll-m-24 flex-col items-center px-4'
      id='skills'
    >
      <h2 className='mb-16 text-3xl font-bold text-white underline underline-offset-4'>
        Skills
      </h2>

      <div className=' flex max-w-lg flex-wrap justify-center gap-2 md:gap-3'>
        {skills?.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
