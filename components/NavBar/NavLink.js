import Link from 'next/link'
import React from 'react'

const NavLink = ({ href, text, active, toggleNavActive }) => {
  return (
    <Link href={href} replace>
      <a
        className={`text-xl font-medium outline-none transition duration-150 ease-out hover:text-main focus-visible:text-main md:text-sm dark:hover:text-secondary/90 darK:focus-visible:text-secondary/90
        ${
          active === href
            ? 'text-main dark:text-secondary/90'
            : 'text-main/70 dark:text-secondary/60'
        }
        `}
        onClick={toggleNavActive}
      >
        {text}
      </a>
    </Link>
  )
}

export default NavLink
