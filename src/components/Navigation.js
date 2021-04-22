import React from 'react';
import content from '../content/index';

function Navigation() {
  return (
    <div>
      <div className="z-20 flex items-center justify-between w-full fixed mx-auto p-5 bg-white">
        <h1
          style={{ fontFamily: 'Lobster' }}
          className="text-3xl ml-4 md:text-5xl font-bold text-red-500">{content.nav.logo}</h1>
        <div>
          {content.nav.links.map((link, index) => {
            return <span key={index} className="text-xl text-gray-800 font-semibold px-4">{link.text}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
