import React from "react";

const PortfolioType = ({ type, active, toggleActive }) => {
  return (
    <button
      className={`flex shrink-0 items-center justify-center rounded-full border-2 px-4 py-1 text-base text-white hover:bg-gray-800 focus-visible:bg-gray-800
    ${active ? "bg-gray-800" : "bg-transparent"} outline-none`}
      onClick={() => toggleActive(type)}
    >
      {type}
    </button>
  );
};

export default PortfolioType;
