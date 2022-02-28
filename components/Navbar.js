import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("/");
  const [scroll, setScroll] = useState(false);
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    /*
    Listen the window scroll,
    if window in top: hide
    else: show
    */
    window.addEventListener("scroll", scrollWindow);

    /* 
    Listen the window scroll.
    And,
    Highlight the active section based on scroll postion
    */
    window.addEventListener("scroll", handleScrollSectionChange);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
      window.removeEventListener("scroll", handleScrollSectionChange);
    };
  }, []);

  const scrollWindow = () => {
    if (scrollY === 0) return setScroll(false);
    setScroll(true);
  };

  function handleScrollSectionChange() {
    // get the sections
    const sections = window.document.querySelectorAll("section");

    // loop over the sections
    sections.forEach((section) => {
      const sectionCurrentOffset = section.offsetTop - 200;

      if (scrollY >= sectionCurrentOffset) {
        setActiveSection(section.id !== "" ? `#${section.id}` : "/");
      }
    });
  }

  useEffect(() => {
    /* 
    Start Listening the resize of window
    */
    window.addEventListener("resize", handlewindowResize);
    handlewindowResize();

    return () => {
      window.removeEventListener("resize", handlewindowResize);
    };
  }, []);

  /* 
  Handle the window resize, when resize hide the nav for mobile ease.
  */
  function handlewindowResize() {
    if (window.innerWidth > "768") return setActiveNav(true);
    setActiveNav(false);
  }

  /* 
  Used to toggle the activeNav. This is require for mobile navbar view activation.
  */
  const toggleNavActive = () => {
    if (window.innerWidth > "768") return;
    setActiveNav((prev) => !prev);

    if (!activeNav) return (window.document.body.style.overflow = "hidden");

    window.document.body.style.overflow = "auto";
  };

  return (
    <>
      {scroll ? (
        <div className='fixed top-0 z-50 flex w-full items-center justify-between bg-gray-500 py-4 px-6'>
          <h2 className='text-2xl font-black text-white'>Anil Oli</h2>
          <div
            className='flex h-4 w-8 cursor-pointer flex-col gap-1 md:hidden'
            onClick={toggleNavActive}
          >
            <span className='h-1 w-full bg-white'></span>
            <span className='h-1 w-full bg-white'></span>
            <span className='h-1 w-full bg-white'></span>
          </div>
          {activeNav && (
            <nav className='fixed top-0 left-0 flex h-full w-full flex-col items-center gap-4 bg-dark-gray p-4 pt-12 md:static md:w-auto md:flex-row md:bg-transparent md:p-0'>
              <div
                className='relative my-4 mb-12 flex h-[32px] w-8 cursor-pointer items-center justify-center before:absolute before:h-8 before:w-1 before:-rotate-45 before:bg-white before:[content:""] after:absolute after:h-8 after:w-1  after:rotate-45 after:bg-white after:[content:""] md:hidden'
                onClick={toggleNavActive}
              ></div>
              <NavLink
                href={"/"}
                text={"HOME"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
              <NavLink
                href={"#about-me"}
                text={"ABOUT ME"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
              <NavLink
                href={"#myjourney"}
                text={"MY JOURNEY"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
              <NavLink
                href={"#skills"}
                text={"SKILLS"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
              <NavLink
                href={"#portfolio"}
                text={"PORTFOLIO"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
              <NavLink
                href={"#contact-me"}
                text={"CONTACT ME"}
                active={activeSection}
                toggleNavActive={toggleNavActive}
              />
            </nav>
          )}
        </div>
      ) : null}
    </>
  );
};

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

export default Navbar;
