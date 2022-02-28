import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section
      className='mt-20 flex w-full shrink-0 scroll-m-24 items-center justify-center p-4'
      id='about-me'
    >
      <div className='grid justify-items-center lg:grid-flow-col lg:justify-items-start lg:gap-8'>
        <h2 className='mb-8 text-3xl font-bold text-white underline underline-offset-4 lg:mb-0'>
          ABOUT ME
        </h2>
        <div className='w-44 lg:w-auto lg:[grid-column:1/2] lg:[grid-row:1/3]'>
          <Image
            src={require("../public/assets/anil.jpg")}
            alt='photo of Anil Oli'
            layout='intrinsic'
            className='w-12 rounded-3xl'
          />
        </div>

        <p className='mt-4 max-w-xs text-center text-base text-white sm:max-w-md sm:text-xl lg:-mt-36 lg:text-left'>
          I am Anil Oli from Dang, Nepal. I am pursing the web development
          journey since 2020. Aim to learn and capable to solve different
          problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
