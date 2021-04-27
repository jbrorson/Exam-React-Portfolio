import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

function Projects() {
  return (
    <div className="flex flex-col min-h-screen h-max-height justify-center items-center bg-green-200 p-8">
      <h1 className="text-5xl font-bold text-gray-800"
        style={{ fontFamily: 'lobster' }}>Some of my projects</h1>
      <div className="mt-10 md:grid grid-cols-2 gap-8 ">
        <div className="block md:inline-block w-full">
          <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm sm:w-full mx-auto bg-white my-5 rounded-default sm:rounded-0 shadow-lg over-hidden">
            <div className="p-4 md:w-full">
              {/* <div className="flex flex-wrap justify-center">
                {content.jobs.job.map((job, index) => {
                  return (
                    <span
                      className={`${index % 2 === 0 ? ' animate-float' : ' animate-refloat'
                        } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
                    >
                      <LazyLoadImage src={job.img} alt={job.alt} />
                    </span>
                  );
                })}
              </div> */}
              <img
                className="object-cover py-2"
                src="assets/bev.png"
                alt="Work that I have done" />
            </div>
            <div className="p-4">
              <div className="h-full flex flex-col justify-between">
                <h1 className="m-2 text-gray-800 text-4xl font-bold md:text-2xl">B-E-V stockmarked dashboard</h1>
                <p className="m-2 text-gray-700 text-sm md:text-base">During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
                <div>
                  <div>
                    <a
                      className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-500 rounded-3xl shadow-md text-white text-sm font-semibold sm:text-base"
                      href="https://github.com/knoxgon/stock-market-dashboard"
                    >
                      to code
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:inline-block">
          <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white my-5 rounded-default sm:rounded-0 shadow-lg over-hidden">
            <div className="p-4 md:w-full">
              <img
                src="assets/onboard-kyh.png"
                alt="Work that I have done" />
            </div>
            <div className="p-4">
              <div className="h-full flex flex-col justify-between">
                <h1 className="m-2 text-gray-800 text-4xl font-bold md:text-2xl">KYH Onboarding Site</h1>
                <p className="m-2 text-gray-700 text-sm md:text-base">During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
                <div>
                  <div>
                    <a
                      className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-500 rounded-3xl shadow-md text-white text-sm font-semibold sm:text-base"
                      href="https://github.com/knoxgon/stock-market-dashboard"
                    >
                      to code
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
