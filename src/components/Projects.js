import React from 'react';
import Modal from './Modal';
import Popup from './Popup';

function Projects() {

  return (
    <div className="flex flex-col min-h-screen h-max-height justify-center items-center bg-green-200 p-8" id="projects">
      <h1 className="text-5xl font-bold text-gray-800"
        style={{ fontFamily: 'lobster' }}>Some of my projects</h1>
      <div className="mt-10 md:grid grid-cols-2 gap-8">
        <div className="block md:inline-block w-full">
          <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white my-5 rounded-default sm:rounded-0 shadow-lg overflow-hidden">
            <div className="p-4 md:w-full">
              <img
                className="object-cover w-full"
                src="assets/bev.png"
                alt="Work that I have done" />
            </div>
            <div className="p-4">
              <div className="flex flex-col justify-between">
                <h1 className="m-2 text-gray-800 text-4xl font-bold md:text-2xl">The B-E-V Dashboard</h1>
                <p className="m-2 text-gray-700">B-E-V is a Stockmarket dashboard app. During the investment approach, there are many questions that rises whether to sell, buy, or hold stocks.</p>
                <div>
                  <div>
                    <Modal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:inline-block">
          <div className="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-white my-5 rounded-default sm:rounded-0 shadow-lg overflow-hidden">
            <div className="p-4 md:w-full">
              <img
                className="object-cover"
                src="assets/onboard-kyh.png"
                alt="Work that I have done" />
            </div>
            <div className="p-4">
              <div className="h-full flex flex-col justify-between">
                <h1 className="m-2 text-gray-800 text-4xl font-bold md:text-2xl">KYH Onboarding Site</h1>
                <p className="m-2 text-gray-700">This website was created for a very important purpose - to help new students with their onboarding jurney.</p>
                <div>
                  <div>
                    <Popup />
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
