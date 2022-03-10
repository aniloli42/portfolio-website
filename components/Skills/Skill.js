import React from "react";

const Skill = ({ programming }) => {
  return (
    <div className='rounded-md bg-white py-2 px-4   shadow-[0_0_.1rem_0.01rem] shadow-main/30'>
      <p className='text-center text-lg text-black'>{programming}</p>
    </div>
  );
};

export default Skill;
