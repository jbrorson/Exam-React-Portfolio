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
      <div className="bg-green-200 flex justify-evenly md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full p-8 sm:p-12 sm:rounded-0 text-white overflow-hidden">

        <div className="w-4/12 bg-white rounded-default shadow-xl p-8 text-gray-700 sm:w-80">
          <h5>helli hallå</h5>
          <h5>helli hallå</h5>
        </div>
        <div className="bg-green-300">
          <p className="w-11/12 md:max-w-xl text-xl mt-8 mb-8 text-gray-700">
            Reach out to me by filling in this form.<br />
              I will definetly like to here from you. Maybe we could meet for a coffee?
            </p>
        </div>


      </div>
    </div>
  )
}

export default GetToKnowMe;
