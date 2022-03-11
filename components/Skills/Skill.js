import React from "react";

const Skill = ({ programming }) => {
  return (
    <div className='portfolio-shadow rounded-md bg-white py-2 px-4'>
      <p className='select-none text-center text-lg text-black'>
        {programming}
      </p>
    </div>
  );
};

export default Skill;
