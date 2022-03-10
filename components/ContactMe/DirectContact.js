import Link from "next/link";
import React from "react";

const DirectContact = ({ href, text, children }) => {
  return (
    <Link href={href}>
      <a
        className='group flex items-center justify-center gap-2 rounded-full bg-main py-2 px-4 text-white outline-none transition-colors duration-200 ease-in-out hover:bg-main/90 focus-visible:bg-main/90'
        target={"_blank"}
        rel={"noreferrer nofollow"}
      >
        {children}
        <span className='text-sm font-medium text-white'>{text}</span>
      </a>
    </Link>
  );
};

export default DirectContact;
