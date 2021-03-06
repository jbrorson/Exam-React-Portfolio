import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

function MyStack({ index }) {
  return (
    <div
      // style={{ background: '#ebf8ff' }}
      className="min-h-screen flex flex-col items-center justify-center"
      id="about"
    >
      <h1
        className="text-5xl text-gray-800 mb-8 mt-8"
        style={{ fontFamily: 'lobster' }}>Stack I use</h1>
      <div
        className="m-10 flex flex-wrap justify-center">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              key={index}
              className={`${index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl mt-8 mb-8 text-gray-700">
        {content.stack.desc}
      </p>
    </div>
  );
}

export default MyStack;