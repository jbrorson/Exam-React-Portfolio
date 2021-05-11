import React from "react";

function Modal() {
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
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold text-gray-800 pb-5">
                    B-E-V Stockmarket Dashboard
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="grid grid-row">
                  <h3 className="px-8 text-gray-800 text-2xl text-md">About this project...</h3>
                  <p className="px-8 mt-2 text-gray-700 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                  <h3 className="mt-8 px-8 text-gray-800 text-2xl text-md">From idea to reality...</h3>
                  <p className="px-8 mt-2 text-gray-700 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                  <div className="relative p-6 grid grid-cols-2 flex-column gap-8 my-2 p-8">
                    <div>
                      <h3 className="text-2xl text-gray-800">The process...</h3>
                      <p className="my-4 text-gray-700 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                        won’t do anything. I was taught I could do everything.
                  </p>
                    </div>
                    <div>
                      <h3 className="text-2xl text-gray-800">The team</h3>
                      <p className="my-4 text-gray-700 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their perception
                        of themselves! They're slowed down by their perception of
                        themselves. If you're taught you can’t do anything, you
                        won’t do anything. I was taught I could do everything.
                  </p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
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

export default Modal;