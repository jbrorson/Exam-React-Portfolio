import React from 'react'
// import Avatar from '../components/icons/avatar.svg';

function GetToKnowMe() {
  return (
    <div
      // style={{ background: '#ebf8ff' }}
      className="bg-green-100 min-h-screen flex flex-col items-center justify-center"
      id="gettoknowme"
    >
      <h1
        style={{ fontFamily: 'lobster' }}
        className="text-gray-800 text-5xl tracking-wide">Get to know me</h1>
      <div className="flex justify-center md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full p-8 sm:p-12 sm:rounded-0 text-white overflow-hidden">

        <div className="w-4/12 bg-white rounded-default shadow-xl p-8 text-gray-700 sm:w-80">
          <h5>helli hallå</h5>
          <h5>helli hallå</h5>
        </div>
        <div className="bg-green-100">
          <h2 className="md:max-w-xl text-2xl px-4 my-4 text-gray-700">Some info</h2>
          <ul className="w-11/12 md:max-w-xl text-xl text-gray-700">
            <li className="px-4">Josefine Brorson, 28 years old</li>
            <li className="px-4 py-2">Born and raised in Blekinge</li>
            <li className="px-4 pb-2">Have been programming for almost 2 years</li>
            <li className="px-4 pb-2">I'm a coffee adicted</li>
            <li className="px-4">I've played soccer since I was 6</li>
          </ul>
          <button className="animate-float mx-4 mb-8 bg-red-500 px-5 py-3 uppercase mt-10 rounded-sm shadow-md font-semibold sm:text-base">Download CV</button>
        </div>


      </div>
    </div>
  )
}

export default GetToKnowMe;
