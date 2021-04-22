import React from 'react'

function MyWork() {
  return (
    <div className="md:grid gap-6 grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-col bg-gray-50 flex w-full min-h-screen justify-center items-center md:inline-block" id="work">
        <h1 className="font-bold text-4xl tracking-wide mt-10">Some of my projects</h1>
        {/* BEV-daschboard */}
        <div className="grid mt-10 lg:grid-cols-2 py-10">
          <div className="w-full bg-white rounded-xl sm:rounded-0 shadow-lg px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full">
            <h1 className="text-2xl font-bold sm:text-3xl">B-E-V stockmarked dashboard</h1>
            <img
              className="mt-6 rounded-xl sm:rounded-0 shadow-lg lg:hidden"
              src="assets/bev.png"
              alt="Work that I have done" />

            <p className="pt-2 text-sm sm:text-xl sm:mt-4">During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
            <div>
              <a className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-500 rounded-lg text-white text-sm font-semibold sm:text-base" href="https://github.com/knoxgon/stock-market-dashboard">to code</a>
            </div>
          </div>
          <div className="hidden relative lg:block">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="assets/bev.png"
              alt="Work that I have done" />
          </div>
        </div>

        {/* KYH-daschboard */}
        <div className="grid lg:grid-cols-2">
          <div className="w-full bg-white rounded-xl sm:rounded-0 shadow-lg px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full">
            <h1 className="text-2xl font-bold sm:text-3xl">KYH onboarding site</h1>
            <img
              className="mt-6 rounded-xl sm:rounded-0 shadow-lg lg:hidden"
              src="assets/onboard-kyh.png"
              alt="Work that I have done" />
            <p className="pt-2 text-sm sm:text-xl sm:mt-4">During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
            <div>
              <a className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-500 rounded-lg text-white text-sm font-semibold sm:text-base" href="https://github.com/knoxgon/stock-market-dashboard">to code</a>
            </div>
          </div>
          <div className="hidden relative lg:block">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="assets/onboard-kyh.png"
              alt="Work that I have done" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyWork;
