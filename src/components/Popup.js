import React from "react";
import content from '../content/index';

function Popup() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        className="inline-block self-end px-5 py-3 uppercase mt-10 bg-red-400 rounded-md shadow-md text-white text-sm font-semibold sm:text-base hover:bg-red-500 transition ease-out duration-500 transform hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        read more
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center m-8 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="flex justify-center relative h-2/3">
              {/*content*/}
              <div className="w-2/3 md:h-1/2 p-8 border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="relative flex items-center mx-8">
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {content.popup.title[1]}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-900 opacity-5 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-row mt-8">
                  <h3 className="px-8 text-gray-800 text-2xl text-md">{content.popup.header[0]}</h3>
                  <p className="px-8 mt-2 text-gray-700 text-lg">
                    {content.popup.text[4]}
                  </p>
                  <h3 className="mt-8 px-8 text-gray-800 text-2xl text-md">{content.popup.header[1]}</h3>
                  <p className="px-8 mt-2 text-gray-700 text-lg leading-relaxed">
                    {content.popup.text[5]}
                  </p>
                  <div className="relative mx-8 mt-8 grid grid-cols-2 gap-8 sm:flex sm:flex-row">
                    <div className="">
                      <h3 className="text-2xl text-gray-800">{content.popup.header[2]}</h3>
                      <p className="my-4 text-gray-700 text-lg">
                        {content.popup.text[6]}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-800">{content.popup.header[3]}</h3>
                      <p className="my-4 text-gray-700 text-lg">
                        {content.popup.text[7]}
                      </p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between mx-8">
                  <div className="grid grid-rows-2 items-center justify-start">
                    <p className="text-red-400">Developed with:</p>
                    <div>
                      <ion-icon name="logo-react" class="text-red-300 text-xl sm:text-3xl"></ion-icon>
                      <ion-icon name="logo-nodejs" class="text-red-300 text-xl sm:text-3xl"></ion-icon>
                      <ion-icon name="logo-javascript" class="text-red-300 text-xl sm:text-3xl"></ion-icon>
                      <ion-icon name="logo-css3" class="text-red-300 text-xl sm:text-3xl"></ion-icon>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className="mr-2 text-red-500 background-transparent inline-block self-end px-5 py-3 uppercase mt-10 rounded-md shadow-md text-sm font-semibold sm:text-base hover:bg-red-400 hover:text-white transition ease-out duration-500"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                  </button>
                    <a
                      href="https://github.com/knoxgon/stock-market-dashboard"
                      target="_blank"
                      rel="noreferrer"
                      type="button"
                      className="ml-2 inline-block self-end px-5 py-3 uppercase mt-10 bg-red-400 rounded-md shadow-md text-white text-sm font-semibold sm:text-base hover:bg-red-500 transition ease-out duration-500"
                      onClick={() => setShowModal(false)}
                    >
                      See code
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Popup;