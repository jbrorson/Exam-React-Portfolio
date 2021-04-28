import React from 'react';
import content from '../content/index';
import Avatar from '../components/icons/avatar.svg';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "grid grid-rows-4 w-full fixed z-10 pt-20 text-center items-center bg-red-100"
      : "hidden"
    }
      onClick={toggle}
    >
      {content.nav.links.map((link, index) => {
        return <span
          key={index}
          className="cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:text-red-500">{link.text}</span>;
      })}

      <a
        href="/https://www.facebook.com/josefine.brorson"
        className="lg:ml-4 flex items-center lg:justify-start lg:mb-0 mb-4 cursor-pointer"
      >
        <img
          src={Avatar}
          className="bg-red-200 rounded-full w-12 h-12 mr-4 border-2 border-transparent hover:border-red-500" alt="Josefine Brorson avatar" />
      </a>

    </div>
  )
}

export default Dropdown;
