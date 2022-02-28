import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [scroll, setScroll] = useState(false);

  const scrollWindow = () => {
    if (window.scrollY === 0) return setScroll(false);
    setScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSectionChange);
  }, []);

  function handleScrollSectionChange() {
    // get the sections
    const sections = window.document.querySelectorAll("section");

    // loop over the sections
    sections.forEach((section) => {
      const sectionCurrentOffset = section.offsetTop - 40;

      if (scrollY >= sectionCurrentOffset) {
        setActive(section.id !== "" ? `#${section.id}` : "/");
      }
    });
    //
  }

  return (
    <>
      {scroll ? (
        <div className='fixed top-0 z-50 flex w-full items-center justify-between bg-gray-500 py-4 px-6'>
          <h2 className='text-2xl font-black text-white'>Anil Oli</h2>
          <nav className='flex gap-4'>
            <NavLink href={"/"} text={"HOME"} active={active} />
            <NavLink href={"#about-me"} text={"ABOUT ME"} active={active} />
            <NavLink href={"#myjourney"} text={"MY JOURNEY"} active={active} />
            <NavLink href={"#skills"} text={"SKILLS"} active={active} />
            <NavLink href={"#portfolio"} text={"PORTFOLIO"} active={active} />
            <NavLink href={"#contact-me"} text={"CONTACT ME"} active={active} />
          </nav>
        </div>
      ) : null}
    </>
  );
};

const NavLink = ({ href, text, active }) => {
  return (
    <Link href={href} replace>
      <a
        className={`text-sm font-medium outline-none transition duration-150 ease-out  hover:text-light-white/60 focus-visible:text-light-white/60
        ${active === href ? "text-light-white/60" : "text-light-white"}
        `}
        tabIndex={3}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navbar;
