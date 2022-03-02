import React from "react";
import Link from "next/link";

const NavLink = ({ href, text, active, toggleNavActive }) => {
  return (
    <Link href={href} replace>
      <a
        className={`text-xl font-medium outline-none transition duration-150 ease-out hover:text-light-white/60 focus-visible:text-light-white/60 md:text-sm
        ${active === href ? "text-light-white/60" : "text-light-white"}
        `}
        tabIndex={3}
        onClick={toggleNavActive}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
