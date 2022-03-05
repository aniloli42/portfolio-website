import Link from "next/link";
import React from "react";

const DirectContact = ({ href, text, children }) => {
  return (
    <Link href={href}>
      <a
        className='group flex items-center justify-center gap-2 rounded-full bg-white py-2 px-4 outline-none hover:bg-gray-800 focus-visible:bg-gray-800'
        target={"_blank"}
        rel={"noreferrer nofollow"}
      >
        {children}
        <span className='text-sm font-medium text-gray-700 group-hover:text-white group-focus-visible:text-white'>
          {text}
        </span>
      </a>
    </Link>
  );
};

export default DirectContact;
