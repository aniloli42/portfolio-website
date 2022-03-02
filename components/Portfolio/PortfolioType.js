import React from "react";

const PortfolioType = ({ type, active }) => {
  return (
    <button
      className={`flex shrink-0 items-center justify-center rounded-full border-2 px-4 py-1 text-base text-white hover:bg-gray-400 
    ${active ? "bg-gray-400" : "bg-transparent"}`}
    >
      {type}
    </button>
  );
};

export default PortfolioType;
