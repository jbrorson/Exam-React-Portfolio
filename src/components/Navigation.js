import React from 'react';
import content from '../content/index';
// import Avatar from '../components/icons/avatar.svg';
// import jsPDF from 'jspdf';
import { animateScroll as scroll, Link } from 'react-scroll';
// import { myCV } from '../jb-eng-cv.pdf';

const Navigation = ({ toggle }) => {

  // const pdfGenerate = () => {
  //   var doc = new jsPDF('landscape', 'px', 'a4', 'false');
  //   doc.save('jb-eng-cv.pdf');
  // }

  return (
    <div>
      <div className="z-20 flex items-center justify-between w-full fixed mx-auto bg-white">
        <a
          onClick={() =>
            scroll.scrollToTop()}
          style={{ fontFamily: 'Lobster' }}
          className="ml-4 text-5xl sm:text-5xl font-bold text-red-400 cursor-pointer">{content.nav.logo}</a>
        <div>
          <label
            for="menu-toggle"
            className="cursor-pointer px-4 lg:hidden block"
          >
            <ion-icon
              style={{ height: '4rem', width: '4rem' }}
              name="menu-outline"
              onClick={toggle}></ion-icon>
          </label>
          <input
            type="checkbox"
            className="hidden"
            id="menu-toggle" />
        </div>
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu">
          <nav>
            <ul className="flex flex-row">
              <Link
                className="px-3 cursor-pointer text-md text-gray-600 font-medium px-4 py-3 border-b-2 border-transparent uppercase hover:text-gray-800 transition ease-out duration-700"
                to="home"
                smooth={true}
                active="text-green-500"
                duration={1500}>Home</Link>
              <Link
                className="px-3 cursor-pointer text-md text-gray-600 font-medium px-4 py-3 border-b-2 border-transparent uppercase hover:text-gray-800 transition ease-out duration-700"
                to="projects"
                smooth={true}
                duration={1500}>Projects</Link>
              <Link
                className="px-3 cursor-pointer text-md text-gray-600 font-medium px-4 py-3 border-b-2 border-transparent uppercase hover:text-gray-800 transition ease-out duration-700"
                to="about"
                smooth={true}
                duration={1500}>About</Link>
              <Link
                className="px-3 cursor-pointer text-md text-gray-600 font-medium px-4 py-3 border-b-2 border-transparent uppercase hover:text-gray-800 transition ease-out duration-700"
                to="timeline"
                smooth={true}
                duration={1500}>Experiences</Link>
              <Link
                className="px-3 cursor-pointer text-md text-gray-600 font-medium px-4 py-3 border-b-2 border-transparent uppercase hover:text-gray-800 transition ease-out duration-700"
                to="contact"
                smooth={true}
                duration={1500}>Contact</Link>
              <a download="pdf/josefine.pdf"
                href="resume.pdf"
                // target="_blank"
                // rel="noopener noreferrer"
                // onClick={() => (pdfGenerate)}
                className="inline-block mx-4 px-3 py-3 uppercase bg-red-400 rounded-md shadow-md text-white text-sm font-semibold sm:text-base hover:bg-red-500 transition ease-out duration-700">Download resume
              </a>
            </ul>

            {/* {content.nav.links.map((link, index) => {
              return <span
                key={index}
                className="cursor-pointer text-xl text-gray-800 font-semibold px-4 py-3 border-b-2 border-transparent hover:text-red-500">{link.text}</span>;
            })} */}
          </nav>
          {/* <a
            href="#"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer">
            <img
              src={Avatar}
              className="bg-red-200 rounded-full w-12 h-12 mr-4 border-2 border-transparent hover:border-red-500" alt="Josefine Brorson avatar" />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;