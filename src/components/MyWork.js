import React from 'react'

function MyWork() {
  return (
    <div className="bg-gray-50 flex w-full min-h-screen justify-center items-center" id="work">
      {/* <div className="flex flex-col"> */}

      <div className="w-full bg-white rounded-xl sm:rounded-0 shadow-lg px-8 py-12 max-w-md mx-auto sm:max-w-xl">
        <h1 className="font-bold text-4xl tracking-wide">Some of my work</h1>
        <img
          className="mt-6 rounded-xl sm:rounded-0 shadow-lg"
          src="assets/bev.png"
          alt="Work that I have done" />
        <h1 className="mt-6 text-2xl font-bold sm:text-3xl sm:mt-8">B-E-V stockmarked dashboard</h1>
        <p className="pt-2 text-sm sm:text-xl sm:mt-4">During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
        <div>
          <a className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-500 rounded-lg text-white text-sm font-semibold sm:text-base" href="https://github.com/knoxgon/stock-market-dashboard">to code</a>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default MyWork;
