import React, { useState, useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content/index';
import Typical from 'react-typical';

function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center" id="home">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full mr-10 md:w-2/5">
          <iframe
            src="https://assets.pinterest.com/ext/embed.html?id=597149231841596188"
            height="588"
            width="355"
            frameborder="0"
            scrolling="no"
            title="hero-image"
            alt="landing page img"
          // className="text-center md:text-right"
          // placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'}
          >
          </iframe>
        </div>
        <div className="text-center md:text-left">
          <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out text-3xl md:text-5xl font-bold text-gray-800`}>
            {content.header.text[0]}{' '}
            {content.header.text[1]}
          </h2>
          <h1 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out font-semibold text-xl text-gray-700`}>{content.header.text[2]}{' '}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="animate-float bg-red-500 px-5 py-3 uppercase mt-10 rounded-sm shadow-md text-white font-semibold sm:text-base">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Header;
