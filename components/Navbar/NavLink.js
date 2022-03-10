import React from "react";
import Link from "next/link";

const NavLink = ({ href, text, active, toggleNavActive }) => {
  return (
    <Link href={href} replace>
      <a
        className={`text-xl font-medium outline-none transition duration-150 ease-out hover:text-main focus-visible:text-main md:text-sm
        ${active === href ? "text-main" : "text-main/50"}
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
