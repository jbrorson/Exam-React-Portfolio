import React from 'react';
import { Link } from 'react-scroll';
// import Avatar from '../components/icons/avatar.svg';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? "w-full fixed z-10 pt-20 text-center items-center bg-white"
      : "hidden"
    }
      onClick={toggle}
    >
      <nav>
        <ul className="flex flex-col">
          <Link
            className="px-3 cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:bg-red-100"
            to="home"
            smooth={true}
            duration={1500}>Home</Link>
          <Link
            className="px-3 cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:bg-red-100"
            to="timeline"
            smooth={true}
            duration={1500}>Experiences</Link>
          <Link
            className="px-3 cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:bg-red-100"
            to="about"
            smooth={true}
            duration={1500}>About</Link>
          <Link
            className="px-3 cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:bg-red-100"
            to="projects"
            smooth={true}
            duration={1500}>Projects</Link>
          <Link
            className="px-3 cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:bg-red-100 mb-5"
            to="contact"
            smooth={true}
            duration={1500}>Contact</Link>
        </ul>
      </nav>
      {/* <a
          href="/https://www.facebook.com/josefine.brorson"
          className="lg:ml-4 flex items-center lg:justify-start lg:mb-0 mb-4 cursor-pointer"
        >
          <img
            src={Avatar}
            className="bg-red-200 rounded-full w-12 h-12 mr-4 border-2 border-transparent hover:border-red-500" alt="Josefine Brorson avatar" />
        </a> */}

    </div>
  )
}

export default Dropdown;
