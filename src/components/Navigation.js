import React from 'react';
import content from '../content/index';

function Navigation() {
  return (
    <div>
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 ">
        <h1 className="text-3xl font-bold">{content.nav.logo}</h1>
        <div>
          {content.nav.links.map((link, index) => {
            return <span key={index} className="text-xl mr-4">{link.text}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
