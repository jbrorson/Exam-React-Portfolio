import React, { useState, useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { animateScroll as scroll, Link } from 'react-scroll';
import content from '../content/index';
import Typical from 'react-typical';

function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  const [show, setShow] = useState(false);

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
          {show ? <p className="container mt-5 text-gray-700 md:w-7/12">I'm 28 years old, born and raised in Blekinge. I've played soccer since I was 6,-witch means I'm a good team player.
          I've programming for almost two years now and I'm ready for my first real job in tech.
          I love spending time with my boyfriend and our black lab.</p> : null}
          {/* <div className="flex flex-row"> */}
          {/* <Link to="gettoknowme" smooth={true}> */}
          <button
            onClick={() => setShow(!show)}
            className="animate-float flex items-center space-x-2 bg-red-400 uppercase p-4 mt-8 rounded-md shadow-md text-white font-semibold sm:text-base hover:bg-red-500 transition ease-out duration-500">
            <span>{content.header.btnText}</span>
            {/* <span className="hidden w-5 h-5 hover:visible"><ion-icon name="arrow-forward-outline"></ion-icon></span> */}
          </button>
          {/* <button className="flex items-center space-x-2 bg-red-500 uppercase p-4 mt-5 mx-5 rounded-sm shadow-md text-white font-semibold sm:text-base">
              <span>Download cv</span>{' '}
              <span className="w-5 h-5"><ion-icon name="cloud-download-outline"></ion-icon></span>
            </button> */}
          {/* </Link> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header;
